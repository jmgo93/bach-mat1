from __future__ import annotations

import csv
import datetime as dt
import hashlib
import os
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any


ROOT = Path.cwd()
DATA_DIR = ROOT / "data"
DOCS_DIR = ROOT / "docs"
EXCLUDED_DIRS = {".git", "build", "__pycache__"}


@dataclass
class PdfRecord:
    path: Path
    sha256: str
    normalized_text_hash: str | None
    page_count: int | None
    role: str
    estimated_level: str
    extraction_method: str
    review_flags: list[str]


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def normalize_text(text: str) -> str:
    text = text.lower()
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"[^0-9a-záéíóúüñ+\-*/=(){}\[\],.;:<>% ]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def detect_role(name: str) -> str:
    lowered = name.lower()
    if "solucion" in lowered:
        return "B. Solucionarios y desarrollos guiados"
    if "bayes" in lowered or "monty" in lowered or "trucos" in lowered or "tutorial" in lowered:
        return "C. Materiales auxiliares o de ampliación"
    return "A. Relaciones primarias de ejercicios"


def detect_level(name: str) -> str:
    lowered = name.lower()
    if "2" in lowered and "bach" in lowered:
        return "Ampliación / Puente a 2.º / EBAU"
    if "ebau" in lowered or "selectividad" in lowered:
        return "Ampliación / Puente a 2.º / EBAU"
    return "1.º de Bachillerato o no determinado"


def find_pdfs(root: Path) -> list[Path]:
    pdfs: list[Path] = []
    for current_root, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS]
        for filename in filenames:
            if filename.lower().endswith(".pdf"):
                pdfs.append(Path(current_root) / filename)
    return sorted(pdfs)


def detect_pdf_backend() -> tuple[str, str]:
    try:
        import fitz  # type: ignore  # noqa: F401

        return ("pymupdf", "PyMuPDF")
    except Exception:
        pass
    try:
        import pypdf  # type: ignore  # noqa: F401

        return ("pypdf", "pypdf")
    except Exception:
        pass
    return ("external", "pdftotext")


def read_pdf(path: Path) -> tuple[int | None, str, str]:
    backend, label = detect_pdf_backend()
    if backend == "pymupdf":
        import fitz  # type: ignore

        with fitz.open(path) as doc:
            text = "\n".join(page.get_text("text") for page in doc)
            return (len(doc), text, label)
    if backend == "pypdf":
        import pypdf  # type: ignore

        with path.open("rb") as handle:
            reader = pypdf.PdfReader(handle)
            text = "\n".join(page.extract_text() or "" for page in reader.pages)
            return (len(reader.pages), text, label)
    completed = subprocess.run(
        ["pdftotext", str(path), "-"],
        capture_output=True,
        text=True,
        check=False,
        encoding="utf-8",
        errors="replace",
    )
    text = completed.stdout if completed.returncode == 0 else ""
    return (None, text, label)


def build_record(path: Path) -> PdfRecord:
    page_count, raw_text, extraction_method = read_pdf(path)
    review_flags: list[str] = []
    normalized = normalize_text(raw_text)
    normalized_hash = sha256_bytes(normalized.encode("utf-8")) if normalized else None
    if not raw_text.strip():
        review_flags.append("Sin extracción fiable; puede requerir revisión humana u OCR")
    return PdfRecord(
        path=path,
        sha256=sha256_file(path),
        normalized_text_hash=normalized_hash,
        page_count=page_count,
        role=detect_role(path.name),
        estimated_level=detect_level(path.name),
        extraction_method=extraction_method,
        review_flags=review_flags,
    )


def quote_scalar(value: Any) -> str:
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    text = str(value).replace("\\", "\\\\").replace('"', '\\"')
    return f'"{text}"'


def to_yaml(value: Any, indent: int = 0) -> str:
    prefix = " " * indent
    if isinstance(value, dict):
        lines: list[str] = []
        for key, item in value.items():
            if isinstance(item, (dict, list)):
                lines.append(f"{prefix}{key}:")
                lines.append(to_yaml(item, indent + 2))
            else:
                lines.append(f"{prefix}{key}: {quote_scalar(item)}")
        return "\n".join(lines)
    if isinstance(value, list):
        if not value:
            return f"{prefix}[]"
        lines = []
        for item in value:
            if isinstance(item, (dict, list)):
                nested = to_yaml(item, indent + 2)
                nested_lines = nested.splitlines()
                lines.append(f"{prefix}- {nested_lines[0].lstrip()}")
                lines.extend(nested_lines[1:])
            else:
                lines.append(f"{prefix}- {quote_scalar(item)}")
        return "\n".join(lines)
    return f"{prefix}{quote_scalar(value)}"


def write_manifest(records: list[PdfRecord]) -> None:
    generated_at = dt.datetime.now().isoformat(timespec="seconds")
    manifest = {
        "generated_at": generated_at,
        "root": str(ROOT),
        "totals": {
            "pdf_files": len(records),
            "exact_duplicate_groups": len(group_duplicates(records, "sha256")),
            "text_duplicate_groups": len(group_duplicates(records, "normalized_text_hash")),
        },
        "files": [
            {
                "path": str(record.path.relative_to(ROOT)),
                "sha256": record.sha256,
                "normalized_text_hash": record.normalized_text_hash,
                "page_count": record.page_count,
                "role": record.role,
                "estimated_level": record.estimated_level,
                "extraction_method": record.extraction_method,
                "review_flags": record.review_flags,
            }
            for record in records
        ],
    }
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    (DATA_DIR / "source_manifest.yml").write_text(to_yaml(manifest) + "\n", encoding="utf-8")


def group_duplicates(records: list[PdfRecord], attribute: str) -> list[list[PdfRecord]]:
    groups: dict[str, list[PdfRecord]] = {}
    for record in records:
        value = getattr(record, attribute)
        if not value:
            continue
        groups.setdefault(value, []).append(record)
    return [group for group in groups.values() if len(group) > 1]


def write_duplicate_report(records: list[PdfRecord]) -> None:
    exact_groups = group_duplicates(records, "sha256")
    text_groups = group_duplicates(records, "normalized_text_hash")

    lines = [
        "# Informe de duplicados",
        "",
        f"Fecha: {dt.date.today().isoformat()}",
        "",
        f"- PDF analizados: `{len(records)}`",
        f"- Grupos de duplicados exactos: `{len(exact_groups)}`",
        f"- Grupos de casi duplicados por huella textual: `{len(text_groups)}`",
        "",
    ]

    if not records:
        lines.extend(
            [
                "## Resultado",
                "",
                "No se ha detectado ningún PDF, por lo que no existen duplicados que comparar.",
            ]
        )
    else:
        lines.extend(["## Duplicados exactos", ""])
        if exact_groups:
            for index, group in enumerate(exact_groups, start=1):
                lines.append(f"### Grupo exacto {index}")
                lines.append("")
                for record in group:
                    lines.append(f"- `{record.path.relative_to(ROOT)}`")
                lines.append("")
        else:
            lines.append("No se han encontrado duplicados exactos.")
            lines.append("")

        lines.extend(["## Casi duplicados por texto normalizado", ""])
        if text_groups:
            for index, group in enumerate(text_groups, start=1):
                lines.append(f"### Grupo textual {index}")
                lines.append("")
                for record in group:
                    lines.append(f"- `{record.path.relative_to(ROOT)}`")
                lines.append("")
        else:
            lines.append("No se han encontrado casi duplicados textuales.")
            lines.append("")

    (DATA_DIR / "duplicate_report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_audit_markdown(records: list[PdfRecord]) -> None:
    lines = [
        "# Auditoría de fuentes",
        "",
        f"Fecha: {dt.date.today().isoformat()}",
        "",
        "## Resumen",
        "",
        f"- PDF localizados: `{len(records)}`",
        "",
    ]
    if not records:
        lines.extend(
            [
                "No se ha localizado ningún PDF en el proyecto. La Fase 1 no puede superar su puerta de calidad porque no existe corpus que auditar.",
                "",
                "## Revisión humana requerida",
                "",
                "- Incorporar el corpus original a la carpeta de trabajo o a `sources/`.",
                "- Reejecutar la auditoría.",
            ]
        )
    else:
        lines.extend(
            [
                "## Inventario",
                "",
                "| Archivo | Páginas | Rol | Nivel estimado | Extracción | Observaciones |",
                "| --- | ---: | --- | --- | --- | --- |",
            ]
        )
        for record in records:
            notes = "; ".join(record.review_flags) if record.review_flags else "OK"
            lines.append(
                f"| `{record.path.relative_to(ROOT)}` | {record.page_count or '?'} | {record.role} | {record.estimated_level} | {record.extraction_method} | {notes} |"
            )

    (DOCS_DIR / "00_auditoria_fuentes.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def ensure_coverage_headers() -> None:
    target = DATA_DIR / "coverage_matrix.csv"
    if target.exists():
        return
    with target.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(
            [
                "source_file",
                "source_page",
                "source_exercise",
                "detected_type",
                "level",
                "target_chapter",
                "target_section",
                "solved_example_id",
                "proposed_exercise_ids",
                "validation_status",
                "notes",
            ]
        )


def main() -> int:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    records = [build_record(path) for path in find_pdfs(ROOT)]
    write_manifest(records)
    write_duplicate_report(records)
    write_audit_markdown(records)
    ensure_coverage_headers()
    print(f"PDF audit complete: {len(records)} file(s) found.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

