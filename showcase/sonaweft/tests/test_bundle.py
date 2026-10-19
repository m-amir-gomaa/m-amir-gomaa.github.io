import copy
import hashlib
import json
import unittest

from instascript.contract import bundle, validate_review, validate_transcript


class BundleTests(unittest.TestCase):
    def setUp(self):
        self.transcript = {
            "duration": 3,
            "language": "de",
            "segments": [{"start": 0, "end": 2, "text": "Guten Morgen."}],
        }

    def test_corrections_preserve_original_and_hash_every_export(self):
        original = copy.deepcopy(self.transcript)
        files = bundle(self.transcript, {"title": "Original example"},
                       corrections={"s000000": "Guten Abend."})
        self.assertEqual(self.transcript, original)
        self.assertEqual(json.loads(files["transcript.json"]), original)
        self.assertEqual(json.loads(files["corrected.json"])["segments"][0]["text"],
                         "Guten Abend.")
        manifest = json.loads(files["manifest.json"])
        self.assertEqual(set(manifest["files"]), set(files) - {"manifest.json"})
        for name, digest in manifest["files"].items():
            self.assertEqual(hashlib.sha256(files[name].encode()).hexdigest(), digest)

    def test_review_must_quote_its_original_segment(self):
        review = {"summary_md": "Greeting", "claims": [{
            "segment_id": "s000000", "quote": "Morgen", "question": "Usage?"
        }], "corrections": []}
        self.assertEqual(validate_review(self.transcript, review), review)
        review["claims"][0]["quote"] = "An invented quotation"
        with self.assertRaises(ValueError):
            validate_review(self.transcript, review)

    def test_rejects_nonfinite_durations_and_unordered_segments(self):
        for duration in (True, -1, float("nan"), float("inf"), 86401):
            with self.subTest(duration=duration), self.assertRaises(ValueError):
                validate_transcript({**self.transcript, "duration": duration})
        bad = {**self.transcript, "segments": [
            {"start": 1, "end": 2, "text": "later"},
            {"start": 0, "end": 1, "text": "earlier"},
        ]}
        with self.assertRaises(ValueError):
            validate_transcript(bad)

    def test_unknown_segment_annotation_cannot_enter_bundle(self):
        with self.assertRaises(ValueError):
            bundle(self.transcript, {}, corrections={"s999999": "unknown"})
        with self.assertRaises(ValueError):
            bundle(self.transcript, {}, speaker_labels={"s999999": "unknown"})

    def test_speaker_annotations_do_not_claim_verified_identity(self):
        files = bundle(self.transcript, {}, speaker_labels={"s000000": "Speaker A"})
        labels = json.loads(files["speakers.json"])
        self.assertEqual(labels["kind"], "user-provided-labels")
        self.assertIn("not verified identity", labels["notice"])


if __name__ == "__main__":
    unittest.main()
