# Quality and cost measurement

> Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision b290387 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision b2903875e625468b6b08d9de1da905d52d3c0220
Reviewed: 2026-10-19

## Offline scoring

`scripts/score_quality.py` compares human-prepared **comparable text** and observed measurements. It never uploads files, calls a model, spends credits or silently changes app limits. It reports exact character/word edit rates, not factual correctness or a calibrated confidence badge. Case, punctuation, numeric values, diacritics and technical symbols remain significant; only Unicode NFC and CRLF representation normalize. Whitespace splits word tokens, so CER is generally the more useful measure for languages without space-delimited words.

1. Create a private ignored directory, e.g. `.local/benchmarks/run-01/`. Keep the permission/original-source basis, exact engine/model/resource settings and original source. Never publish a book/recording just because a benchmark needs it.
2. Prepare a checked reference and comparable candidate text for each selected page/segment. Exclude the same export wrapper/front matter on both sides deliberately; the scorer does not guess what content to strip. Include omitted and repeated material in the aligned reference rather than cherry-picking clean output.
3. Record each source SHA256, actual timings, retries/failed work, correction minutes and attributable processing costs. Unknown costs/counts must remain null, not zero. Add failed cases so cost/timing totals do not hide them. Separately record significant number/symbol errors, missing/duplicate units and timing errors from human review; exact text distance cannot infer these reliably.
4. Run `.venv/bin/python scripts/score_quality.py PRIVATE_MANIFEST --output NEW_PRIVATE_REPORT.json`. The output is created exclusively with0600 permissions. It includes manifest/source/reference/candidate hashes, denominators, observation counts and explicit unknowns. It never overwrites another run. Keep the manifest alongside the report.
5. Read both completed/failed counts and known-cost coverage before interpreting averages. P50/p95 use linearly interpolated order statistics over known wall timings, including failures. Tiny/selected samples do not establish production percentiles. Service debit is not cash revenue; attributable compute is not total cost or profit.

## Manifest

All files must be inside the manifest's directory. Sources may be≤64MiB; each comparable UTF-8 text≤200KB. Exact edit work is capped at25million cells: split long documents/recordings into predefined comparable pages/segments. Maximum100cases/run. These are offline tool bounds, not revised hosted limits.

```json
{
  "schema": "processing-benchmark/v1",
  "product": "sonaweft",
  "cases": [{
    "id": "audio-001", "permission_note": "Actual original/permission/license basis",
    "pipeline": "Actual engine/model revision; CPU/GPU, memory, routing, retries",
    "status": "completed",
    "source_file": "source.mp3", "source_sha256": "REPLACE_WITH_ACTUAL_SHA256",
    "reference_file": "reference.txt", "candidate_file": "candidate.txt",
    "wall_seconds": null, "cold_load_seconds": null, "idle_seconds": null,
    "correction_minutes": null, "service_debit_usd": null, "provider_cost_usd": null,
    "timestamp_mae_seconds": null, "missing_units": null, "duplicate_units": null,
    "significant_symbol_errors": null
  }]
}
```

This is an unfilled template, not a measured result. A failed case uses `status: failed`, omits reference/candidate and still records known time/cost. Amounts are USD. The offline report contains source identifiers/resource labels; keep it private until deliberately reviewed. A recorded permission note does not itself prove legal permission.

## Required measurement sets

PDF: digital text, scans, old print, multiple columns, tables/equations, figures/captions, footnotes, IPA/diacritics and long-book joins. Check page coverage, reading order, assets, numbers/symbols and correction time against the actual source. Compare text/MinerU routes on the same permission-cleared tasks; then compare the owner's alternatives with the same reference, scope, correction task and complete costs. No competitor or long-book accuracy result is asserted here.

Audio: use `product: sonaweft`; prepare aligned5/30/60-minute clean/noisy/accented/technical/multi-speaker sets. Measure segment omission/repetition/timing, human correction minutes, cold/idle/runtime, failures/retries and provider token/model data. Do not infer speaker identity, meaning or factual correctness from WER.

The five synthetic scorer tests verify calculations, unknown-cost handling, failed-work inclusion, source/path/measurement rejection and symbol-preserving normalization. They do not benchmark OCR/ASR. Actual representative samples, human references/review and provider-bill allocation remain required before claiming quality, throughput or margins.
