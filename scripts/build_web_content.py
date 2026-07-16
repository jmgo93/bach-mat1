from __future__ import annotations

import json
import re
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CHAPTERS_DIR = ROOT / "tex" / "chapters"
OUTPUT_FILE = ROOT / "docs" / "assets" / "js" / "generated-content.js"

CHAPTER_FILES = [
    "01_numeros_reales.tex",
    "02_polinomios_fracciones.tex",
    "03_ecuaciones_sistemas.tex",
    "04_inecuaciones.tex",
    "05_trigonometria.tex",
    "06_vectores.tex",
    "07_geometria_analitica.tex",
    "08_limites_continuidad.tex",
    "09_derivadas_aplicaciones.tex",
    "10_estadistica_probabilidad.tex",
    "10_repaso_acumulativo.tex",
]

PLACEHOLDER_RE = re.compile(r"@@HTML_BLOCK_(\d+)@@")


def normalize_tex(text: str) -> str:
    text = text.replace("\r\n", "\n")
    text = text.replace(r"\texorpdfstring{\(\R^2\)}{R2}", r"\(\R^2\)")
    text = re.sub(r"\\texorpdfstring\{([^{}]*)\}\{([^{}]*)\}", r"\1", text)
    return text


def extract_first(pattern: str, text: str) -> str:
    match = re.search(pattern, text, re.S)
    return match.group(1).strip() if match else ""


def clean_title(raw: str) -> str:
    return " ".join(raw.replace("\n", " ").split())


def extract_tag_id(raw: str) -> str:
    match = re.match(r"\[([^\]]+)\]\s*(.*)", raw, re.S)
    return match.group(1).strip() if match else ""


def remove_tag_prefix(raw: str) -> str:
    match = re.match(r"\[([^\]]+)\]\s*(.*)", raw, re.S)
    if match:
        return clean_title(match.group(2))
    return clean_title(raw)


def replace_simple_command(text: str, command: str, open_tag: str, close_tag: str) -> str:
    pattern = re.compile(rf"\\{command}\{{([^{{}}]*)\}}")
    previous = None
    while previous != text:
        previous = text
        text = pattern.sub(lambda m: f"{open_tag}{m.group(1)}{close_tag}", text)
    return text


def list_to_html(body: str, ordered: bool) -> str:
    items = [item.strip() for item in re.split(r"\\item\s+", body.strip()) if item.strip()]
    tag = "ol" if ordered else "ul"
    inner = "".join(f"<li>{convert_latex_to_html(item)}</li>" for item in items)
    return f"<{tag}>{inner}</{tag}>"


def protect_block(text: str, html_blocks: list[str], html: str) -> str:
    html_blocks.append(html)
    return f"@@HTML_BLOCK_{len(html_blocks) - 1}@@"


def protect_display_math(text: str, html_blocks: list[str]) -> str:
    def replacer(match: re.Match[str]) -> str:
        math_html = f'<div class="math-display">{match.group(0).strip()}</div>'
        return protect_block(text, html_blocks, math_html)

    return re.sub(r"\\\[(.*?)\\\]", replacer, text, flags=re.S)


def tabular_to_html(body: str, group_count: int) -> str:
    body = body.strip()
    for _ in range(group_count):
        if not body.startswith("{"):
            break
        _, next_index = extract_braced(body, 0)
        body = body[next_index:].lstrip()

    body = re.sub(r"\\(?:toprule|midrule|bottomrule|hline)", "", body)
    body = re.sub(r"\\multicolumn\{\d+\}\{[^{}]*\}\{([^{}]*)\}", r"\1", body)
    raw_rows = re.split(r"\\\\(?:\[[^\]]*\])?", body)
    rows: list[list[str]] = []
    for raw_row in raw_rows:
        raw_row = raw_row.strip()
        if not raw_row:
            continue
        cells = [cell.strip() for cell in re.split(r"(?<!\\)&", raw_row)]
        if any(cells):
            rows.append(cells)

    if not rows:
        return '<div class="figure-fallback">La tabla no contiene datos legibles.</div>'

    header = "".join(f"<th scope=\"col\">{convert_latex_to_html(cell)}</th>" for cell in rows[0])
    body_rows = "".join(
        "<tr>" + "".join(f"<td>{convert_latex_to_html(cell)}</td>" for cell in row) + "</tr>"
        for row in rows[1:]
    )
    return (
        '<div class="table-scroll"><table class="math-table">'
        f"<thead><tr>{header}</tr></thead><tbody>{body_rows}</tbody></table></div>"
    )


def protect_structures(text: str, html_blocks: list[str]) -> str:
    center_pattern = re.compile(r"\\begin\{center\}(.*?)\\end\{center\}", re.S)
    while True:
        match = center_pattern.search(text)
        if not match:
            break
        inner = match.group(1).strip()
        inner_html = convert_latex_to_html(inner)
        token = protect_block(text, html_blocks, f'<div class="centered-block">{inner_html}</div>')
        text = text[: match.start()] + token + text[match.end() :]

    table_patterns = [
        (re.compile(r"\\begin\{tabularx\}(.*?)\\end\{tabularx\}", re.S), 2),
        (re.compile(r"\\begin\{tabular\}(.*?)\\end\{tabular\}", re.S), 1),
    ]
    for pattern, group_count in table_patterns:
        while True:
            match = pattern.search(text)
            if not match:
                break
            token = protect_block(text, html_blocks, tabular_to_html(match.group(1), group_count))
            text = text[: match.start()] + token + text[match.end() :]

    patterns = [
        (
            re.compile(r"\\begin\{tikzpicture\}(.*?)\\end\{tikzpicture\}", re.S),
            '<div class="figure-fallback">Esquema disponible en el cuaderno PDF. Refuerza esta idea con el laboratorio interactivo.</div>',
        ),
    ]

    for pattern, html in patterns:
        while True:
            match = pattern.search(text)
            if not match:
                break
            token = protect_block(text, html_blocks, html)
            text = text[: match.start()] + token + text[match.end() :]

    itemize_pattern = re.compile(r"\\begin\{itemize\}(.*?)\\end\{itemize\}", re.S)
    enumerate_pattern = re.compile(r"\\begin\{enumerate\}(?:\[[^\]]*\])?(.*?)\\end\{enumerate\}", re.S)

    while True:
        match = itemize_pattern.search(text)
        if not match:
            break
        token = protect_block(text, html_blocks, list_to_html(match.group(1), ordered=False))
        text = text[: match.start()] + token + text[match.end() :]

    while True:
        match = enumerate_pattern.search(text)
        if not match:
            break
        token = protect_block(text, html_blocks, list_to_html(match.group(1), ordered=True))
        text = text[: match.start()] + token + text[match.end() :]

    return text


def convert_latex_to_html(text: str) -> str:
    if not text.strip():
        return ""

    html_blocks: list[str] = []
    text = normalize_tex(text).strip()
    text = text.replace("~", " ")
    text = protect_structures(text, html_blocks)
    text = protect_display_math(text, html_blocks)
    text = replace_simple_command(text, "textbf", "<strong>", "</strong>")
    text = replace_simple_command(text, "texttt", "<code>", "</code>")
    text = replace_simple_command(text, "emph", "<em>", "</em>")
    text = re.sub(r"\\medskip|\\smallskip|\\bigskip", "", text)
    text = re.sub(r"\\noindent", "", text)
    text = re.sub(r"\n{3,}", "\n\n", text)

    pieces: list[str] = []
    for chunk in re.split(r"\n\s*\n", text):
        chunk = chunk.strip()
        if not chunk:
            continue

        cursor = 0
        local_parts: list[str] = []
        for match in PLACEHOLDER_RE.finditer(chunk):
            prefix = chunk[cursor : match.start()].strip()
            if prefix:
                local_parts.append(f"<p>{' '.join(prefix.split())}</p>")
            local_parts.append(html_blocks[int(match.group(1))])
            cursor = match.end()
        suffix = chunk[cursor:].strip()
        if suffix:
            local_parts.append(f"<p>{' '.join(suffix.split())}</p>")
        pieces.extend(local_parts if local_parts else [chunk])

    html = "".join(pieces)
    return re.sub(r"\s+([,.;:])", r"\1", html)


def split_sections(text: str) -> list[tuple[str, str]]:
    matches = list(re.finditer(r"\\section\{([^}]*)\}", text))
    sections: list[tuple[str, str]] = []
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        sections.append((match.group(1).strip(), text[start:end].strip()))
    return sections


def split_subsections(text: str) -> dict[str, str]:
    matches = list(re.finditer(r"\\subsection\*\{([^}]*)\}", text))
    data: dict[str, str] = {}
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        data[match.group(1).strip()] = text[start:end].strip()
    return data


def extract_braced(text: str, start_index: int) -> tuple[str, int]:
    if text[start_index] != "{":
        raise ValueError("Se esperaba una llave de apertura")

    depth = 0
    index = start_index
    while index < len(text):
        char = text[index]
        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                return text[start_index + 1 : index], index + 1
        index += 1
    raise ValueError("Llaves sin cerrar en el contenido LaTeX")


def extract_subsection_block(text: str, subsection_title: str) -> str:
    pattern = re.compile(
        rf"\\subsection\*\{{{re.escape(subsection_title)}\}}(.*?)(?=\\subsection\*\{{|\\begin\{{theorybox\}}|\\begin\{{methodbox\}}|\\begin\{{solvedexample\}}|\\begin\{{commonerror\}}|\\begin\{{guidedexercise\}}|\\begin\{{exercise\}}|\\begin\{{challenge\}}|$)",
        re.S,
    )
    match = pattern.search(text)
    return match.group(1).strip() if match else ""


def collect_envs(text: str, env_name: str) -> list[dict[str, str]]:
    items = []
    start_token = rf"\begin{{{env_name}}}"
    end_token = rf"\end{{{env_name}}}"
    cursor = 0

    while True:
        start = text.find(start_token, cursor)
        if start == -1:
            break

        title_start = start + len(start_token)
        if title_start >= len(text) or text[title_start] != "{":
            cursor = title_start
            continue

        title, body_start = extract_braced(text, title_start)
        end = text.find(end_token, body_start)
        if end == -1:
            break

        body = text[body_start:end].strip()
        items.append(
            {
                "title": clean_title(title),
                "titleText": remove_tag_prefix(title),
                "tagId": extract_tag_id(title),
                "html": convert_latex_to_html(body),
            }
        )
        cursor = end + len(end_token)
    return items


def parse_guided_exercises(section_body: str) -> list[dict[str, str]]:
    practice_match = re.search(r"\\subsection\*\{Practica", section_body)
    guided_region = section_body[: practice_match.start()] if practice_match else section_body
    guided = collect_envs(guided_region, "guidedexercise")
    answers = collect_envs(guided_region, "shortanswer")
    solutions = collect_envs(guided_region, "fullsolution")

    paired = []
    for index, item in enumerate(guided):
        paired.append(
            {
                "tagId": item["tagId"],
                "title": item["titleText"],
                "promptHtml": item["html"],
                "answerHtml": answers[index]["html"] if index < len(answers) else "",
                "solutionHtml": solutions[index]["html"] if index < len(solutions) else "",
            }
        )
    return paired


def split_challenge_region(section_body: str) -> tuple[str, str]:
    challenge_start = section_body.find(r"\begin{challenge}")
    if challenge_start == -1:
        return section_body, ""
    return section_body[:challenge_start], section_body[challenge_start:]


def split_ordered_list_html(html: str) -> list[str]:
    if not html.strip():
        return []
    match = re.fullmatch(r"\s*<ol>(.*)</ol>\s*", html, re.S)
    if not match:
        return [html]
    return [item.strip() for item in re.findall(r"<li>(.*?)</li>", match.group(1), re.S)]


def parse_practice(section_body: str) -> dict[str, object]:
    main_region, _ = split_challenge_region(section_body)
    practice_match = re.search(r"\\subsection\*\{([^}]*Practica[^}]*)\}", main_region)
    if practice_match:
        practice_region = main_region[practice_match.start() :]
        label = clean_title(practice_match.group(1))
    else:
        first_exercise = re.search(r"\\begin\{exercise\}", main_region)
        if not first_exercise:
            return {"label": "", "items": [], "answersHtml": "", "solutionsHtml": ""}
        practice_region = main_region[first_exercise.start() :]
        label = "Practica autonoma graduada"

    exercises = collect_envs(practice_region, "exercise")
    answers = collect_envs(practice_region, "shortanswer")
    solutions = collect_envs(practice_region, "fullsolution")
    answers_html = answers[0]["html"] if answers else ""
    solutions_html = solutions[0]["html"] if solutions else ""
    answer_items = split_ordered_list_html(answers_html)
    solution_items = split_ordered_list_html(solutions_html)

    expected_count = len(exercises)
    if expected_count and (len(answer_items) != expected_count or len(solution_items) != expected_count):
        section_id = extract_tag_id(exercises[0]["title"]).split("-")[1] if exercises else "desconocida"
        raise ValueError(
            f"Correspondencia incompleta en {section_id}: "
            f"{expected_count} ejercicios, {len(answer_items)} respuestas y {len(solution_items)} soluciones"
        )

    items = []
    for index, exercise in enumerate(exercises):
        items.append(
            {
                "tagId": exercise["tagId"],
                "prompt": exercise["titleText"],
                "answerHtml": answer_items[index],
                "solutionHtml": solution_items[index],
            }
        )

    return {
        "label": label,
        "items": items,
        "answersHtml": answers_html,
        "solutionsHtml": solutions_html,
    }


def parse_challenge(section_body: str) -> dict[str, str]:
    _, challenge_region = split_challenge_region(section_body)
    if not challenge_region:
        return {}

    challenge = collect_envs(challenge_region, "challenge")
    if not challenge:
        return {}

    answers = collect_envs(challenge_region, "shortanswer")
    solutions = collect_envs(challenge_region, "fullsolution")
    return {
        **challenge[0],
        "answerHtml": answers[0]["html"] if answers else "",
        "solutionHtml": solutions[0]["html"] if solutions else "",
    }


def parse_section(raw_title: str, body: str) -> dict[str, object]:
    objectives = []
    prerequisites = []
    subsection_map = split_subsections(body)
    for name in subsection_map:
        lowered = name.lower()
        if lowered.startswith("objetiv"):
            content = extract_subsection_block(body, name)
            if content:
                objectives.append({"label": name, "html": convert_latex_to_html(content)})
        elif "prerrequis" in lowered:
            content = extract_subsection_block(body, name)
            if content:
                prerequisites.append({"label": name, "html": convert_latex_to_html(content)})

    theory = collect_envs(body, "theorybox")
    method = collect_envs(body, "methodbox")
    solved = collect_envs(body, "solvedexample")
    errors = collect_envs(body, "commonerror")

    return {
        "id": extract_tag_id(raw_title),
        "title": remove_tag_prefix(raw_title),
        "rawTitle": clean_title(raw_title),
        "objectives": objectives,
        "prerequisites": prerequisites,
        "theory": theory[0] if theory else {},
        "method": method[0] if method else {},
        "solvedExample": solved[0] if solved else {},
        "commonError": errors[0] if errors else {},
        "guidedExercises": parse_guided_exercises(body),
        "practice": parse_practice(body),
        "challenge": parse_challenge(body),
    }


def parse_chapter(path: Path) -> dict[str, object]:
    text = normalize_tex(path.read_text(encoding="utf-8"))
    chapter_title = extract_first(r"\\chapter\{([^}]*)\}", text)
    sections = split_sections(text)
    preface = text[: text.find(r"\section{")] if r"\section{" in text else text
    chapter_theory = collect_envs(preface, "theorybox")
    chapter_method = collect_envs(preface, "methodbox")

    parsed_sections = [parse_section(raw_title, body) for raw_title, body in sections]

    return {
        "id": parsed_sections[0]["id"].split(".")[0] if parsed_sections and "." in parsed_sections[0]["id"] else path.stem[:3].upper(),
        "slug": path.stem,
        "title": clean_title(chapter_title),
        "summaryHtml": chapter_theory[0]["html"] if chapter_theory else "",
        "studyRouteHtml": chapter_method[0]["html"] if chapter_method else "",
        "sectionCount": len(parsed_sections),
        "sections": parsed_sections,
    }


def build_payload() -> dict[str, object]:
    chapters = [parse_chapter(CHAPTERS_DIR / file_name) for file_name in CHAPTER_FILES]
    section_count = sum(chapter["sectionCount"] for chapter in chapters)

    return {
        "meta": {
            "title": "Matematicas I Interactivas",
            "subtitle": "1º de Bachillerato - teoria, ejemplos resueltos, tests y laboratorios interactivos",
            "generatedOn": datetime.now().strftime("%Y-%m-%d %H:%M"),
            "chapterCount": len(chapters),
            "sectionCount": section_count,
        },
        "chapters": chapters,
    }


def main() -> None:
    payload = build_payload()
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        "window.MATHBOOK_CONTENT = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Contenido web generado en {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
