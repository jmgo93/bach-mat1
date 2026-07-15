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
        self.assertLess(index.index("./assets/js/app.js"), index.index("translate.google.com"))
        self.assertNotIn('"orientation"', manifest)
        self.assertIn('event.request.mode === "navigate"', worker)
        self.assertIn('new Response("Recurso no disponible sin conexion."', worker)

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
        self.assertIn("mate1-interactivas-v13", worker)

    def test_no_known_mojibake_sequences(self) -> None:
        for path in [DOCS / "index.html", JS / "app.js", JS / "activity-bank.js", JS / "quiz-bank.js"]:
            text = path.read_text(encoding="utf-8")
            for token in ("Ã", "Â", "â€"):
                self.assertNotIn(token, text, f"{token} en {path.name}")


if __name__ == "__main__":
    unittest.main()
