from __future__ import annotations

import csv
import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class ProjectStateTests(unittest.TestCase):
    def test_coverage_matrix_has_expected_headers(self) -> None:
        target = ROOT / "data" / "coverage_matrix.csv"
        with target.open("r", encoding="utf-8", newline="") as handle:
            reader = csv.reader(handle)
            headers = next(reader)
        self.assertEqual(
            headers,
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
            ],
        )

    def test_coverage_matrix_is_not_empty(self) -> None:
        target = ROOT / "data" / "coverage_matrix.csv"
        with target.open("r", encoding="utf-8", newline="") as handle:
            reader = csv.DictReader(handle)
            rows = list(reader)
        self.assertGreater(len(rows), 0)

    def test_validation_results_are_well_formed_json(self) -> None:
        target = ROOT / "data" / "validation_results.json"
        payload = json.loads(target.read_text(encoding="utf-8"))
        self.assertEqual(payload["status"], "passed")
        self.assertGreater(payload["exercise_count"], 0)
        self.assertEqual(payload["passed_count"], payload["exercise_count"])
        self.assertTrue(all(item["status"] == "passed" for item in payload["results"]))

    def test_source_manifest_detects_pdf_corpus(self) -> None:
        target = ROOT / "data" / "source_manifest.yml"
        text = target.read_text(encoding="utf-8")
        self.assertRegex(text, r"pdf_files:\s+[1-9]\d*")


if __name__ == "__main__":
    unittest.main()
