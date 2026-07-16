from __future__ import annotations

import json
import re
import subprocess
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
JS = DOCS / "assets" / "js"


def load_generated_payload(path: Path, variable: str) -> dict[str, object]:
    text = path.read_text(encoding="utf-8").strip()
    prefix = f"window.{variable} = "
    if not text.startswith(prefix) or not text.endswith(";"):
        raise AssertionError(f"Formato inesperado en {path.name}")
    return json.loads(text[len(prefix) : -1])


class WebQualityTests(unittest.TestCase):
    def test_stochastic_curriculum_is_complete(self) -> None:
        payload = load_generated_payload(JS / "generated-content.js", "MATHBOOK_CONTENT")
        chapters = {chapter["id"]: chapter for chapter in payload["chapters"]}
        self.assertIn("C10", chapters)
        self.assertGreaterEqual(chapters["C10"]["sectionCount"], 7)
        section_ids = {section["id"] for section in chapters["C10"]["sections"]}
        self.assertEqual(section_ids, {f"C10.S{index:02d}" for index in range(1, 8)})

    def test_every_chapter_has_at_least_two_activities(self) -> None:
        source = (JS / "activity-bank.js").read_text(encoding="utf-8")
        chapter_ids = re.findall(r'chapterId:\s*"([A-Z]\d{2})"', source)
        for chapter_id in [f"C{index:02d}" for index in range(1, 11)] + ["R10"]:
            self.assertGreaterEqual(chapter_ids.count(chapter_id), 2, chapter_id)

    def test_question_bank_has_no_duplicate_prompts_after_build(self) -> None:
        script = r"""
const fs = require('fs');
const vm = require('vm');
global.window = {};
for (const file of ['activity-bank.js', 'quiz-bank.js']) {
  vm.runInThisContext(fs.readFileSync(file, 'utf8'));
}
const normalize = value => String(value || '').toLowerCase()
  .replace(/\\[()\[\]]/g, '').replace(/[.,;:!?¿¡]/g, '').replace(/\s+/g, '');
const prompts = [...window.MATHBOOK_QUIZ_BANK.map(item => item.prompt)];
for (const activity of window.MATHBOOK_ACTIVITY_BANK) {
  if (activity.includeInQuiz && activity.type === 'mcq') prompts.push(activity.prompt);
}
const keys = prompts.map(normalize);
process.stdout.write(JSON.stringify({ total: keys.length, unique: new Set(keys).size }));
"""
        result = subprocess.run(
            ["node", "-e", script],
            cwd=JS,
            check=True,
            capture_output=True,
            text=True,
        )
        counts = json.loads(result.stdout)
        self.assertGreater(counts["total"], counts["unique"])
        app_source = (JS / "app.js").read_text(encoding="utf-8")
        self.assertIn("seenPrompts", app_source)
        self.assertIn("normalizeQuestionPrompt", app_source)

    def test_feedback_and_mastery_are_attempt_gated(self) -> None:
        source = (JS / "app.js").read_text(encoding="utf-8")
        self.assertIn("state.revealedQuestions.has(question.id)", source)
        self.assertIn("state.revealedActivities.has(activity.id)", source)
        self.assertIn("successfulDays.length >= 2", source)
        self.assertNotIn("next.masteredCount >= 2", source)

    def test_supplements_cover_the_new_chapter(self) -> None:
        payload = load_generated_payload(JS / "generated-supplements.js", "MATHBOOK_SUPPLEMENTS")
        problems = [item for item in payload["problems"]["inventory"] if item["chapterId"] == "C10"]
        exams = [item for item in payload["exams"]["inventory"] if item["chapterId"] == "C10"]
        self.assertEqual(len(problems), 7)
        self.assertEqual(len(exams), 7)
        self.assertTrue(any(model["chapterId"] == "C10" for model in payload["problems"]["models"]))
        self.assertTrue(any(model["chapterId"] == "C10" for model in payload["exams"]["miniModels"]))

    def test_accessibility_translation_and_pwa_guards(self) -> None:
        index = (DOCS / "index.html").read_text(encoding="utf-8")
        manifest = (DOCS / "manifest.webmanifest").read_text(encoding="utf-8")
        worker = (DOCS / "sw.js").read_text(encoding="utf-8")
        self.assertIn('class="skip-link"', index)
        self.assertIn('aria-live="polite"', index)
        self.assertIn('aria-label="Instalar aplicación"', index)
        self.assertLess(index.index("./assets/js/app.js"), index.index("translate.google.com"))
        self.assertNotIn('"orientation"', manifest)
        self.assertIn('event.request.mode === "navigate"', worker)
        self.assertIn('new Response("Recurso no disponible sin conexion."', worker)
        for asset in (
            "generated-content.js",
            "generated-supplements.js",
            "activity-bank.js",
            "quiz-bank.js",
            "app.js",
        ):
            versioned_path = f"./assets/js/{asset}?v=25"
            self.assertIn(versioned_path, index)
            self.assertIn(versioned_path, worker)

    def test_visual_icon_system_is_local_and_accessible(self) -> None:
        index = (DOCS / "index.html").read_text(encoding="utf-8")
        app = (JS / "app.js").read_text(encoding="utf-8")
        styles = (DOCS / "assets" / "css" / "styles.css").read_text(encoding="utf-8")
        worker = (DOCS / "sw.js").read_text(encoding="utf-8")
        self.assertGreaterEqual(index.count('data-icon="'), 15)
        self.assertIn("const UI_ICONS", app)
        self.assertIn("const CHAPTER_ICONS", app)
        self.assertIn('aria-hidden="true"', app)
        self.assertIn("decorateVisualLanguage", app)
        self.assertIn(".feature-icon", styles)
        self.assertIn(".hero-watermark", styles)
        self.assertNotIn("lucide", index.lower())
        self.assertIn("mate1-interactivas-v25", worker)

    def test_global_search_covers_every_resource_family(self) -> None:
        index = (DOCS / "index.html").read_text(encoding="utf-8")
        app = (JS / "app.js").read_text(encoding="utf-8")
        styles = (DOCS / "assets" / "css" / "styles.css").read_text(encoding="utf-8")
        self.assertIn('id="globalSearchButton"', index)
        self.assertIn('id="globalSearchDialog"', index)
        self.assertIn('id="globalSearchInput"', index)
        self.assertIn("renderGlobalSearchResults", app)
        self.assertIn('event.key.toLowerCase() === "k"', app)
        for resource_kind in ("Pregunta tipo test", "Flashcard", "Actividad", "Problema", "Examen"):
            self.assertIn(resource_kind, app)
        self.assertIn(".global-search-dialog", styles)

    def test_flashcards_have_feedback_session_and_failed_queue(self) -> None:
        app = (JS / "app.js").read_text(encoding="utf-8")
        styles = (DOCS / "assets" / "css" / "styles.css").read_text(encoding="utf-8")
        self.assertIn('FAILED: "Falladas anteriormente"', app)
        self.assertIn('id="flashcardFailedModeButton"', app)
        self.assertIn('id="flashcardResetSessionButton"', app)
        self.assertIn('id="flashcardRetryButton"', app)
        self.assertIn('id="flashcardFeedbackNextButton"', app)
        self.assertIn("recordFlashcardSessionDecision", app)
        self.assertIn("getFlashcardLearningExpectation", app)
        self.assertIn("reviewCount || 0", app)
        self.assertIn(".flashcard-session__metrics", styles)
        self.assertIn(".flashcard-feedback--known", styles)
        self.assertIn(".flashcard-feedback--review", styles)

    def test_chapter_navigation_uses_a_compact_selector(self) -> None:
        app = (JS / "app.js").read_text(encoding="utf-8")
        styles = (DOCS / "assets" / "css" / "styles.css").read_text(encoding="utf-8")
        self.assertIn('id="chapterSectionSelect"', app)
        self.assertIn("wireChapterSectionNavigation", app)
        self.assertIn('dom.app.querySelector(".chapter-section-nav")', app)
        self.assertIn(".chapter-section-nav", styles)
        self.assertNotIn('<section class="toc-strip">', app)
        self.assertNotIn(".toc-strip {", styles)

    def test_no_known_mojibake_sequences(self) -> None:
        for path in [DOCS / "index.html", JS / "app.js", JS / "activity-bank.js", JS / "quiz-bank.js"]:
            text = path.read_text(encoding="utf-8")
            for token in ("Ã", "Â", "â€"):
                self.assertNotIn(token, text, f"{token} en {path.name}")

    def test_javascript_math_delimiters_are_escaped(self) -> None:
        app = (JS / "app.js").read_text(encoding="utf-8")
        self.assertIsNone(re.search(r"(?<!\\)\\\(", app))
        self.assertIn(r"\\(\\hat y=", app)

    def test_corrected_supplement_results_and_stochastic_block(self) -> None:
        contextual = (ROOT / "tex" / "supplements" / "contextual_plan.tex").read_text(encoding="utf-8")
        exams = (ROOT / "tex" / "supplements" / "exams_plan.tex").read_text(encoding="utf-8")
        self.assertIn(r"\SI{54.8}{m}", contextual)
        self.assertNotIn(r"\SI{53.4}{m}", contextual)
        self.assertIn(r"\theta\approx 54.2^\circ", exams)
        self.assertNotIn(r"\theta\approx 54.1^\circ", exams)
        self.assertIn(r"\section{Bloque B7", exams)
        self.assertIn(r"maximo local en \((0,2)\)", exams)
        app = (JS / "app.js").read_text(encoding="utf-8")
        self.assertIn('"C10.S07": `', app)
        self.assertIn("bayesTitle", app)

    def test_problem_page_has_no_fabricated_support_data(self) -> None:
        app = (JS / "app.js").read_text(encoding="utf-8")
        for fragment in (
            "Escenario A",
            "Dato principal",
            "base % 17",
            "renderSuggestedVisual",
            "Ver respuesta de contraste",
            "Ver solucion y procedimiento",
            "varia un 10 por ciento",
        ):
            self.assertNotIn(fragment, app)
        self.assertIn("Problema para resolver", app)
        self.assertIn("Comprobar respuesta", app)
        self.assertIn("Ver solucion razonada", app)
        self.assertIn('kind: "Problema para resolver"', app)
        self.assertIn("getPracticeCorrectionHtml", app)
        self.assertNotIn("${problem.answerHtml}", app)
        self.assertNotIn("${problem.solutionHtml}", app)

    def test_every_practice_problem_has_its_own_answer_and_solution(self) -> None:
        payload = load_generated_payload(JS / "generated-content.js", "MATHBOOK_CONTENT")
        practice_items = [
            item
            for chapter in payload["chapters"]
            for section in chapter["sections"]
            for item in section.get("practice", {}).get("items", [])
        ]
        self.assertEqual(len(practice_items), 507)
        for item in practice_items:
            self.assertTrue(item["prompt"].strip(), item["tagId"])
            self.assertTrue(item["answerHtml"].strip(), item["tagId"])
            self.assertTrue(item["solutionHtml"].strip(), item["tagId"])

    def test_problem_inventory_points_to_solved_practice_items(self) -> None:
        content = load_generated_payload(JS / "generated-content.js", "MATHBOOK_CONTENT")
        supplements = load_generated_payload(JS / "generated-supplements.js", "MATHBOOK_SUPPLEMENTS")
        sections = {
            section["id"]: section
            for chapter in content["chapters"]
            for section in chapter["sections"]
        }
        inventory = supplements["problems"]["inventory"]
        self.assertEqual(len(inventory), 84)
        for item in inventory:
            practice = sections[item["sectionId"]]["practice"]["items"]
            self.assertTrue(practice, item["sectionId"])
            self.assertTrue(practice[-1]["answerHtml"], item["sectionId"])
            self.assertTrue(practice[-1]["solutionHtml"], item["sectionId"])

    def test_every_contextual_model_has_a_step_by_step_solution(self) -> None:
        payload = load_generated_payload(JS / "generated-supplements.js", "MATHBOOK_SUPPLEMENTS")
        models = payload["problems"]["models"]
        self.assertEqual(len(models), 10)
        for model in models:
            self.assertGreaterEqual(model["solutionHtml"].count("<strong>Paso "), 3, model["id"])
            self.assertTrue(model["answerHtml"].strip(), model["id"])
            self.assertTrue(model["relatedTheorySections"], model["id"])


if __name__ == "__main__":
    unittest.main()
