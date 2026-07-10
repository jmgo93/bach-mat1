from __future__ import annotations

import csv
import json
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

    def test_validation_results_are_well_formed_json(self) -> None:
        target = ROOT / "data" / "validation_results.json"
        payload = json.loads(target.read_text(encoding="utf-8"))
        self.assertEqual(payload["status"], "pending_corpus")
        self.assertEqual(payload["exercise_count"], 0)


if __name__ == "__main__":
    unittest.main()

