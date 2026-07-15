from __future__ import annotations

import json
import re
from datetime import datetime
from pathlib import Path

from build_web_content import collect_envs, normalize_tex, split_sections


ROOT = Path(__file__).resolve().parents[1]
CONTEXTUAL_INVENTORY_FILE = ROOT / "tex" / "generated" / "contextual_inventory.tex"
EXAMS_INVENTORY_FILE = ROOT / "tex" / "generated" / "exams_inventory.tex"
CONTEXTUAL_PLAN_FILE = ROOT / "tex" / "supplements" / "contextual_plan.tex"
EXAMS_PLAN_FILE = ROOT / "tex" / "supplements" / "exams_plan.tex"
OUTPUT_FILE = ROOT / "docs" / "assets" / "js" / "generated-supplements.js"

SECTION_ID_RE = re.compile(r"^[A-Z]\d{2}\.S\d{2}$")
CHAPTER_HEADER_RE = re.compile(
    r"\\multicolumn\{5\}\{l\}\{\\textbf\{([A-Z0-9]+)\s+---\s+(.*?)\}\}\\\\"
)

CONTEXT_MODEL_THEORY_MAP = {
    "C01": ["C01.S07"],
    "C02": ["C02.S03", "C02.S04", "C02.S05"],
    "C03": ["C03.S08", "C03.S09"],
    "C04": ["C04.S07"],
    "C05": ["C05.S02", "C05.S08"],
    "C06": ["C06.S02", "C06.S04"],
    "C07": ["C07.S07", "C07.S08", "C07.S09"],
    "C08": ["C08.S01", "C08.S04", "C08.S10"],
    "C09": ["C09.S07"],
    "C10": ["C10.S02", "C10.S03", "C10.S07"],
}

BLOCK_CHAPTER_MAP = {
    "B1": ["C01", "C02"],
    "B2": ["C03", "C04"],
    "B3": ["C05", "C06"],
    "B4": ["C07"],
    "B5": ["C08"],
    "B6": ["C09"],
    "B7": ["C10"],
}

C10_SECTIONS = [
    ("C10.S01", "Datos bidimensionales y tablas de contingencia", "Control de habitos de estudio y resultados", "Tabla de contingencia"),
    ("C10.S02", "Nubes de puntos, correlacion y causalidad", "Auditoria de una relacion cientifica aparente", "Nube de puntos"),
    ("C10.S03", "Regresion lineal y cuadratica", "Calibracion y prediccion de un sensor", "Grafica de ajuste y residuos"),
    ("C10.S04", "Muestreo, inferencia y tecnologia", "Encuesta ambiental con riesgo de sesgo", "Tabla de muestra por estratos"),
    ("C10.S05", "Experimentos aleatorios y algebra de sucesos", "Fiabilidad conjunta de dos componentes", "Diagrama de Venn"),
    ("C10.S06", "Regla de Laplace y tecnicas de recuento", "Seleccion de equipos de laboratorio", "Arbol de recuento"),
    ("C10.S07", "Probabilidad condicionada, total y Bayes", "Sistema de alerta con falsos positivos", "Diagrama de arbol"),
]


def clean_text(value: str) -> str:
    return " ".join(value.replace("\n", " ").split())


def fix_mojibake(value: str) -> str:
    if not value or not any(token in value for token in ("Ã", "Â", "â")):
        return value
    try:
        return value.encode("latin-1").decode("utf-8")
    except UnicodeError:
        return value


def normalize_plain(value: str) -> str:
    return fix_mojibake(clean_text(value)).replace("`", "")


def chapter_from_section(section_id: str) -> str:
    return section_id.split(".")[0]


def parse_inventory_row(line: str) -> list[str]:
    trimmed = line[:-2] if line.endswith("\\\\") else line
    return [normalize_plain(cell) for cell in trimmed.split(" & ")]


def parse_contextual_inventory() -> list[dict[str, str]]:
    text = normalize_tex(CONTEXTUAL_INVENTORY_FILE.read_text(encoding="utf-8"))
    chapter_id = ""
    chapter_title = ""
    items: list[dict[str, str]] = []

    for line in text.splitlines():
        raw = line.strip()
        if not raw:
            continue

        header_match = CHAPTER_HEADER_RE.match(raw)
        if header_match:
            chapter_id = normalize_plain(header_match.group(1))
            chapter_title = normalize_plain(header_match.group(2))
            continue

        if raw.startswith("\\") or "&" not in raw or not raw.endswith("\\\\"):
            continue

        columns = parse_inventory_row(raw)
        if len(columns) < 5 or not SECTION_ID_RE.match(columns[0]):
            continue

        section_id, section_title, prompt, visual, level = columns[:5]
        items.append(
            {
                "id": section_id,
                "chapterId": chapter_id or chapter_from_section(section_id),
                "chapterTitle": chapter_title,
                "sectionId": section_id,
                "sectionTitle": section_title,
                "prompt": prompt,
                "visual": visual,
                "level": level,
                "relatedTheorySections": [section_id],
            }
        )

    return items


def parse_exams_inventory() -> list[dict[str, str]]:
    text = normalize_tex(EXAMS_INVENTORY_FILE.read_text(encoding="utf-8"))
    chapter_id = ""
    chapter_title = ""
    items: list[dict[str, str]] = []

    for line in text.splitlines():
        raw = line.strip()
        if not raw:
            continue

        header_match = CHAPTER_HEADER_RE.match(raw)
        if header_match:
            chapter_id = normalize_plain(header_match.group(1))
            chapter_title = normalize_plain(header_match.group(2))
            continue

        if raw.startswith("\\") or "&" not in raw or not raw.endswith("\\\\"):
            continue

        columns = parse_inventory_row(raw)
        if len(columns) < 5 or not SECTION_ID_RE.match(columns[0]):
            continue

        section_id, section_title, title, block, duration = columns[:5]
        items.append(
            {
                "id": section_id,
                "chapterId": chapter_id or chapter_from_section(section_id),
                "chapterTitle": chapter_title,
                "sectionId": section_id,
                "sectionTitle": section_title,
                "title": title,
                "blockId": block.split(" ")[0],
                "blockLabel": block,
                "duration": duration,
                "relatedTheorySections": [section_id],
            }
        )

    return items


def slice_between_chapters(text: str, start_title: str, end_title: str) -> str:
    pattern = re.compile(
        rf"\\chapter\{{{re.escape(start_title)}\}}(.*?)(?=\\chapter\{{{re.escape(end_title)}\}})",
        re.S,
    )
    match = pattern.search(text)
    return match.group(1).strip() if match else ""


def parse_contextual_models() -> list[dict[str, object]]:
    text = normalize_tex(CONTEXTUAL_PLAN_FILE.read_text(encoding="utf-8"))
    region = slice_between_chapters(
        text,
        "Banco Semilla de Problemas Modelo",
        "Secuencia de Produccion",
    )

    models: list[dict[str, object]] = []
    for raw_title, body in split_sections(region):
        title_match = re.match(r"(C\d{2})\.\s*(.*)", clean_text(raw_title))
        if not title_match:
            continue

        chapter_id = title_match.group(1)
        title = fix_mojibake(title_match.group(2))
        prompt = collect_envs(body, "contextproblem")
        resource = collect_envs(body, "databox")
        answer = collect_envs(body, "shortanswer")
        solution = collect_envs(body, "fullsolution")

        if not prompt or not answer or not solution:
            continue

        models.append(
            {
                "id": f"CTX-{chapter_id}",
                "chapterId": chapter_id,
                "title": title,
                "promptTitle": fix_mojibake(prompt[0]["titleText"]),
                "promptHtml": prompt[0]["html"],
                "resourceTitle": fix_mojibake(resource[0]["titleText"]) if resource else "",
                "resourceHtml": resource[0]["html"] if resource else "",
                "answerHtml": answer[0]["html"],
                "solutionHtml": solution[0]["html"],
                "relatedTheorySections": CONTEXT_MODEL_THEORY_MAP.get(chapter_id, []),
            }
        )

    return models


def parse_exam_mini_models(exam_inventory: list[dict[str, str]]) -> list[dict[str, object]]:
    inventory_by_section = {item["sectionId"]: item for item in exam_inventory}
    text = normalize_tex(EXAMS_PLAN_FILE.read_text(encoding="utf-8"))
    region = slice_between_chapters(
        text,
        "Mini-Examenes Modelo por Seccion",
        "Examenes Modelo por Bloques",
    )

    models: list[dict[str, object]] = []
    for raw_title, body in split_sections(region):
        title_match = re.match(r"Modelo\s+([A-Z]\d{2}\.S\d{2})\s+---\s+(.*)", clean_text(raw_title))
        if not title_match:
            continue

        section_id = title_match.group(1)
        section_meta = inventory_by_section.get(section_id, {})
        brief = collect_envs(body, "exambrief")
        rubric = collect_envs(body, "rubricbox")
        answer = collect_envs(body, "shortanswer")
        solution = collect_envs(body, "fullsolution")

        if not brief or not answer or not solution:
            continue

        models.append(
            {
                "id": f"MINI-{section_id}",
                "chapterId": chapter_from_section(section_id),
                "sectionId": section_id,
                "title": fix_mojibake(title_match.group(2)),
                "briefTitle": fix_mojibake(brief[0]["titleText"]),
                "briefHtml": brief[0]["html"],
                "rubricTitle": fix_mojibake(rubric[0]["titleText"]) if rubric else "",
                "rubricHtml": rubric[0]["html"] if rubric else "",
                "answerHtml": answer[0]["html"],
                "solutionHtml": solution[0]["html"],
                "blockId": section_meta.get("blockId", ""),
                "blockLabel": section_meta.get("blockLabel", ""),
                "duration": section_meta.get("duration", ""),
                "relatedTheorySections": [section_id],
            }
        )

    return models


def parse_exam_block_models() -> list[dict[str, object]]:
    text = normalize_tex(EXAMS_PLAN_FILE.read_text(encoding="utf-8"))
    region_match = re.search(
        r"\\chapter\{Examenes Modelo por Bloques\}(.*?)(?=\\chapter\{Hoja de Ruta de Produccion\})",
        text,
        re.S,
    )
    region = region_match.group(1).strip() if region_match else ""

    models: list[dict[str, object]] = []
    for raw_title, body in split_sections(region):
        title_match = re.match(r"Bloque\s+(B\d)\s+---\s+(.*)", clean_text(raw_title))
        if not title_match:
            continue

        block_id = title_match.group(1)
        brief = collect_envs(body, "exambrief")
        answer = collect_envs(body, "shortanswer")
        solution = collect_envs(body, "fullsolution")

        if not brief or not answer or not solution:
            continue

        models.append(
            {
                "id": block_id,
                "blockId": block_id,
                "title": fix_mojibake(title_match.group(2)),
                "briefTitle": fix_mojibake(brief[0]["titleText"]),
                "briefHtml": brief[0]["html"],
                "answerHtml": answer[0]["html"],
                "solutionHtml": solution[0]["html"],
                "chapterIds": BLOCK_CHAPTER_MAP.get(block_id, []),
                "relatedTheoryChapters": BLOCK_CHAPTER_MAP.get(block_id, []),
            }
        )

    return models


def build_stochastic_supplements() -> dict[str, list[dict[str, object]]]:
    problem_inventory = [
        {
            "id": section_id,
            "chapterId": "C10",
            "chapterTitle": "Estadistica, probabilidad e inferencia",
            "sectionId": section_id,
            "sectionTitle": title,
            "prompt": prompt,
            "visual": visual,
            "level": "Alta",
            "relatedTheorySections": [section_id],
        }
        for section_id, title, prompt, visual in C10_SECTIONS
    ]
    exam_inventory = [
        {
            "id": section_id,
            "chapterId": "C10",
            "chapterTitle": "Estadistica, probabilidad e inferencia",
            "sectionId": section_id,
            "sectionTitle": title,
            "title": f"Prueba razonada: {title}",
            "blockId": "B7",
            "blockLabel": "B7 Sentido estocastico",
            "duration": "25 min",
            "relatedTheorySections": [section_id],
        }
        for section_id, title, _prompt, _visual in C10_SECTIONS
    ]
    problem_models = [
        {
            "id": "CTX-C10",
            "chapterId": "C10",
            "title": "Alerta de calidad: probabilidad, comunicacion y decision",
            "promptTitle": "Situacion",
            "promptHtml": (
                "<p>El 4% de las piezas de una linea presenta un defecto. Un sistema alerta en el 95% de las piezas "
                "defectuosas y produce un 3% de falsos positivos entre las correctas. Calcula la probabilidad de alerta, "
                "la probabilidad de defecto tras una alerta y el numero esperado de revisiones innecesarias en 10 000 piezas.</p>"
            ),
            "resourceTitle": "Datos y arbol",
            "resourceHtml": (
                "<ul><li>\\(P(D)=0.04\\), \\(P(A\\mid D)=0.95\\).</li>"
                "<li>\\(P(\\overline D)=0.96\\), \\(P(A\\mid\\overline D)=0.03\\).</li></ul>"
            ),
            "answerHtml": "<p>\\(P(A)=0.0668\\), \\(P(D\\mid A)\\approx0.5689\\) y se esperan 288 revisiones innecesarias.</p>",
            "solutionHtml": (
                "<p>Por probabilidad total, \\(P(A)=0.04\\cdot0.95+0.96\\cdot0.03=0.0668\\). "
                "Aplicando Bayes, \\(P(D\\mid A)=0.038/0.0668\\approx0.5689\\). Los falsos positivos esperados "
                "son \\(10000\\cdot0.96\\cdot0.03=288\\). La alerta aumenta mucho la probabilidad de defecto, "
                "pero no equivale a certeza.</p>"
            ),
            "relatedTheorySections": ["C10.S05", "C10.S07"],
        }
    ]
    mini_models = [
        {
            "id": "MINI-C10.S03",
            "chapterId": "C10",
            "sectionId": "C10.S03",
            "title": "Regresion, residuos y prediccion responsable",
            "briefTitle": "Mini-examen",
            "briefHtml": (
                "<ol><li>Un ajuste es \\(\\hat y=1.8x+0.4\\). Predice para \\(x=6\\) e interpreta la pendiente.</li>"
                "<li>Si se observa \\(y=12\\), calcula el residuo.</li>"
                "<li>Explica por que \\(R^2=0.96\\) no autoriza a extrapolar hasta \\(x=100\\).</li></ol>"
            ),
            "rubricTitle": "Rubrica",
            "rubricHtml": "<p>Calculo 40%, interpretacion con unidades 30%, juicio sobre fiabilidad 30%.</p>",
            "answerHtml": "<p>Prediccion: 11.2; pendiente: 1.8 unidades de y por unidad de x; residuo: 0.8.</p>",
            "solutionHtml": (
                "<p>Se obtiene \\(1.8\\cdot6+0.4=11.2\\). El residuo es observado menos predicho: "
                "\\(12-11.2=0.8\\). El ajuste solo ha sido contrastado en el rango observado; R cuadrado no "
                "garantiza que el mecanismo continue fuera de el.</p>"
            ),
            "blockId": "B7",
            "blockLabel": "B7 Sentido estocastico",
            "duration": "25 min",
            "relatedTheorySections": ["C10.S02", "C10.S03"],
        }
    ]
    block_models = [
        {
            "id": "B7",
            "blockId": "B7",
            "title": "Datos, incertidumbre y decisiones",
            "briefTitle": "Examen de bloque",
            "briefHtml": (
                "<ol><li>Analiza una tabla de contingencia y compara dos porcentajes condicionados.</li>"
                "<li>Interpreta una nube con un valor atipico y decide entre ajuste lineal y cuadratico.</li>"
                "<li>Resuelve un recuento sin orden y una probabilidad condicionada.</li>"
                "<li>Aplica probabilidad total y Bayes a un sistema con falsos positivos.</li></ol>"
            ),
            "answerHtml": "<p>La correccion exige denominadores condicionados, lectura grafica previa, recuento coherente y arbol completo.</p>",
            "solutionHtml": (
                "<p>Modelo de correccion: identificar primero la poblacion condicionada; justificar el ajuste con nube, residuos y R cuadrado; "
                "usar combinaciones solo si el orden no importa; multiplicar ramas y sumar caminos antes de invertir la condicion con Bayes. "
                "Toda conclusion debe indicar alcance, unidades y limitaciones.</p>"
            ),
            "chapterIds": ["C10"],
            "relatedTheoryChapters": ["C10"],
        }
    ]
    return {
        "problemInventory": problem_inventory,
        "examInventory": exam_inventory,
        "problemModels": problem_models,
        "miniModels": mini_models,
        "blockModels": block_models,
    }


def build_payload() -> dict[str, object]:
    contextual_inventory = parse_contextual_inventory()
    exams_inventory = parse_exams_inventory()
    contextual_models = parse_contextual_models()
    exam_mini_models = parse_exam_mini_models(exams_inventory)
    exam_block_models = parse_exam_block_models()
    stochastic = build_stochastic_supplements()
    contextual_inventory.extend(stochastic["problemInventory"])
    exams_inventory.extend(stochastic["examInventory"])
    contextual_models.extend(stochastic["problemModels"])
    exam_mini_models.extend(stochastic["miniModels"])
    exam_block_models.extend(stochastic["blockModels"])

    return {
        "meta": {
            "generatedOn": datetime.now().strftime("%Y-%m-%d %H:%M"),
            "contextualInventoryCount": len(contextual_inventory),
            "contextualModelCount": len(contextual_models),
            "examInventoryCount": len(exams_inventory),
            "examMiniModelCount": len(exam_mini_models),
            "examBlockModelCount": len(exam_block_models),
        },
        "problems": {
            "inventory": contextual_inventory,
            "models": contextual_models,
        },
        "exams": {
            "inventory": exams_inventory,
            "miniModels": exam_mini_models,
            "blockModels": exam_block_models,
        },
    }


def main() -> None:
    payload = build_payload()
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        "window.MATHBOOK_SUPPLEMENTS = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Suplementos web generados en {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
