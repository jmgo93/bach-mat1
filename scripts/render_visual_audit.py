from __future__ import annotations

import json
import math
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path

import fitz
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageStat


ROOT = Path(__file__).resolve().parents[1]
BUILD_DIR = ROOT / "build"
AUDIT_DIR = BUILD_DIR / "visual_audit"
PAGES_DIR = AUDIT_DIR / "pages"
CONTACT_DIR = AUDIT_DIR / "contact_sheets"
FLAGGED_DIR = AUDIT_DIR / "flagged_pages"

PDF_TARGETS = [
    ("cuaderno_estudiante", BUILD_DIR / "cuaderno_estudiante.pdf"),
    ("cuaderno_profesor", BUILD_DIR / "cuaderno_profesor.pdf"),
    ("respuestas_breves", BUILD_DIR / "respuestas_breves.pdf"),
]

THUMBNAIL_SIZE = (250, 354)
CONTACT_COLUMNS = 4
CONTACT_ROWS = 5
CONTACT_BATCH = CONTACT_COLUMNS * CONTACT_ROWS
MARGIN = 24
TITLE_HEIGHT = 44
LABEL_HEIGHT = 24
FLAGGED_DPI = 144


@dataclass
class PageAudit:
    page_number: int
    mean_luma: float
    stddev_luma: float
    ink_ratio: float
    flags: list[str]


def ensure_dirs() -> None:
    for directory in (AUDIT_DIR, PAGES_DIR, CONTACT_DIR, FLAGGED_DIR):
        directory.mkdir(parents=True, exist_ok=True)


def pixmap_to_image(pixmap: fitz.Pixmap) -> Image.Image:
    mode = "RGB" if pixmap.n < 5 else "CMYK"
    image = Image.frombytes(mode, [pixmap.width, pixmap.height], pixmap.samples)
    if image.mode != "RGB":
        image = image.convert("RGB")
    return image


def render_thumbnail(page: fitz.Page) -> Image.Image:
    pixmap = page.get_pixmap(dpi=96, alpha=False)
    image = pixmap_to_image(pixmap)
    image.thumbnail(THUMBNAIL_SIZE, Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", THUMBNAIL_SIZE, "white")
    left = (THUMBNAIL_SIZE[0] - image.width) // 2
    top = (THUMBNAIL_SIZE[1] - image.height) // 2
    canvas.paste(image, (left, top))
    return ImageOps.expand(canvas, border=1, fill="black")


def analyze_page(image: Image.Image) -> PageAudit:
    grayscale = image.convert("L")
    histogram = grayscale.histogram()
    total_pixels = grayscale.width * grayscale.height
    ink_pixels = sum(histogram[:245])
    stat = ImageStat.Stat(grayscale)
    mean_luma = float(stat.mean[0])
    stddev_luma = float(stat.stddev[0])
    ink_ratio = ink_pixels / total_pixels
    flags: list[str] = []

    if ink_ratio < 0.008:
        flags.append("contenido_muy_escaso")
    if mean_luma > 248 and stddev_luma < 18:
        flags.append("pagina_casi_blanca")
    if ink_ratio > 0.42 and mean_luma < 180:
        flags.append("densidad_visual_alta")

    return PageAudit(
        page_number=0,
        mean_luma=round(mean_luma, 2),
        stddev_luma=round(stddev_luma, 2),
        ink_ratio=round(ink_ratio, 5),
        flags=flags,
    )


def save_flagged_page(name: str, page_number: int, page: fitz.Page) -> str:
    target = FLAGGED_DIR / f"{name}_p{page_number:03d}.png"
    pixmap = page.get_pixmap(dpi=FLAGGED_DPI, alpha=False)
    pixmap_to_image(pixmap).save(target)
    return str(target.relative_to(ROOT))


def build_contact_sheet(name: str, batch_index: int, tiles: list[tuple[int, Image.Image]]) -> Path:
    font = ImageFont.load_default()
    tile_width = THUMBNAIL_SIZE[0] + 2
    tile_height = THUMBNAIL_SIZE[1] + 2 + LABEL_HEIGHT
    sheet_width = MARGIN * (CONTACT_COLUMNS + 1) + tile_width * CONTACT_COLUMNS
    sheet_height = TITLE_HEIGHT + MARGIN * (CONTACT_ROWS + 1) + tile_height * CONTACT_ROWS
    sheet = Image.new("RGB", (sheet_width, sheet_height), "white")
    draw = ImageDraw.Draw(sheet)
    first_page = tiles[0][0]
    last_page = tiles[-1][0]
    draw.text(
        (MARGIN, 12),
        f"{name} - paginas {first_page}-{last_page}",
        fill="black",
        font=font,
    )

    for index, (page_number, image) in enumerate(tiles):
        row = index // CONTACT_COLUMNS
        column = index % CONTACT_COLUMNS
        left = MARGIN + column * (tile_width + MARGIN)
        top = TITLE_HEIGHT + MARGIN + row * (tile_height + MARGIN)
        sheet.paste(image, (left, top))
        draw.text((left, top + tile_height - LABEL_HEIGHT + 4), f"p.{page_number}", fill="black", font=font)

    target = CONTACT_DIR / f"{name}_sheet_{batch_index:02d}.png"
    sheet.save(target)
    return target


def audit_pdf(name: str, pdf_path: Path) -> dict[str, object]:
    if not pdf_path.exists():
        raise FileNotFoundError(f"No existe el PDF esperado: {pdf_path}")

    page_dir = PAGES_DIR / name
    page_dir.mkdir(parents=True, exist_ok=True)
    flagged_paths: list[str] = []
    contact_sheets: list[str] = []
    page_results: list[PageAudit] = []
    tiles: list[tuple[int, Image.Image]] = []

    with fitz.open(pdf_path) as document:
        for page_index, page in enumerate(document, start=1):
            thumbnail = render_thumbnail(page)
            thumbnail_path = page_dir / f"{name}_p{page_index:03d}.png"
            thumbnail.save(thumbnail_path)

            audit = analyze_page(thumbnail)
            audit.page_number = page_index
            if audit.flags:
                flagged_paths.append(save_flagged_page(name, page_index, page))
            page_results.append(audit)
            tiles.append((page_index, thumbnail))

            if len(tiles) == CONTACT_BATCH:
                sheet_path = build_contact_sheet(name, len(contact_sheets) + 1, tiles)
                contact_sheets.append(str(sheet_path.relative_to(ROOT)))
                tiles = []

        if tiles:
            sheet_path = build_contact_sheet(name, len(contact_sheets) + 1, tiles)
            contact_sheets.append(str(sheet_path.relative_to(ROOT)))

    flagged_pages = [asdict(result) for result in page_results if result.flags]
    return {
        "name": name,
        "pdf": str(pdf_path.relative_to(ROOT)),
        "page_count": len(page_results),
        "contact_sheet_count": len(contact_sheets),
        "contact_sheets": contact_sheets,
        "flagged_page_count": len(flagged_pages),
        "flagged_pages": flagged_pages,
        "flagged_page_images": flagged_paths,
    }


def write_report(results: list[dict[str, object]]) -> None:
    total_pages = sum(int(item["page_count"]) for item in results)
    total_sheets = sum(int(item["contact_sheet_count"]) for item in results)
    total_flagged = sum(int(item["flagged_page_count"]) for item in results)

    summary = {
        "generated_at_utc": datetime.now(timezone.utc).isoformat(),
        "total_pdfs": len(results),
        "total_pages": total_pages,
        "total_contact_sheets": total_sheets,
        "total_flagged_pages": total_flagged,
        "pdfs": results,
    }
    (AUDIT_DIR / "summary.json").write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding="utf-8")

    lines = [
        "# Auditoria visual",
        "",
        f"- PDFs revisados: `{len(results)}`",
        f"- Paginas renderizadas: `{total_pages}`",
        f"- Hojas de contacto generadas: `{total_sheets}`",
        f"- Paginas marcadas para inspeccion ampliada: `{total_flagged}`",
        "",
    ]

    for item in results:
        lines.extend(
            [
                f"## {item['name']}",
                "",
                f"- PDF: `{item['pdf']}`",
                f"- Paginas: `{item['page_count']}`",
                f"- Hojas de contacto: `{item['contact_sheet_count']}`",
                f"- Paginas marcadas: `{item['flagged_page_count']}`",
            ]
        )
        flagged_pages = item["flagged_pages"]
        if flagged_pages:
            lines.append("")
            lines.append("Paginas marcadas:")
            for flagged in flagged_pages:
                reasons = ", ".join(flagged["flags"])
                lines.append(
                    f"- p.{flagged['page_number']}: {reasons} "
                    f"(media={flagged['mean_luma']}, desviacion={flagged['stddev_luma']}, tinta={flagged['ink_ratio']})"
                )
        lines.append("")

    (AUDIT_DIR / "report.md").write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def main() -> None:
    ensure_dirs()
    results = [audit_pdf(name, pdf_path) for name, pdf_path in PDF_TARGETS]
    write_report(results)
    total_pages = sum(int(item["page_count"]) for item in results)
    total_sheets = sum(int(item["contact_sheet_count"]) for item in results)
    total_flagged = sum(int(item["flagged_page_count"]) for item in results)
    print(
        "Auditoria visual completada: "
        f"{total_pages} paginas renderizadas, {total_sheets} hojas de contacto, "
        f"{total_flagged} paginas marcadas."
    )


if __name__ == "__main__":
    main()
