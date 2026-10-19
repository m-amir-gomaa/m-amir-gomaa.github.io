{
  "title": "From extracted files to retained sources",
  "description": "What shipped across Pageweft, Sonaweft and Noteweld, and the evidence behind it.",
  "date": "2026-10-19",
  "weight": 5,
  "project": "Fieldnotes",
  "category": "Release journal",
  "download": "markdown/journal/source-workflows-20261019.md"
}

## A complete portable path

Pageweft extracts selected PDF pages, lets the reader review original text and explicit corrections, and exports a hashed archive. Sonaweft retains original recognition, user corrections and optional advisory notes as separate outputs. Noteweld previews and validates those archives, imports notes and source files atomically, and keeps private original bytes available separately from later edits.

The original public Pageweft example was regenerated with the current CPU exporter. Its v1 schema, note index, hashes and relative references validate in Noteweld. The portfolio copy matches that original fixture; it contains no private book/customer content.

## Execution and reading order

1. Start with [Pageweft's source-workflow record](/manuals/pageweft/source-workflow-release/): per-page routing/quotes, review/diffs/joins, export presets, private diagnostics and account boundaries. Its source-review browser runs real local text extraction, not mocked OCR.
2. Read [Sonaweft's recording-workflow record](/manuals/sonaweft/source-workflow-release/): checked public HTTPS media/RSS imports, time-span quotes, listening cues, source quotes/loop, editable speaker labels, corrected exports and race-safe deletion. Replayed original ASR in the browser test is explicitly separate from new inference.
3. Follow [Noteweld source imports](/manuals/noteweld/source-bundles/), then [its release evidence](/manuals/noteweld/source-handoff-release/). Migrations 0005–0007 were applied only after a real encrypted snapshot restored in a new clone. Restricted runtime permissions and original Keep isolation were preserved.
4. Read the [measurement protocol](/manuals/pageweft/quality-benchmarks/) before collecting cost/quality evidence. [Pageweft](/manuals/pageweft/image-inventory/) and [Sonaweft](/manuals/sonaweft/image-inventory/) image inventories record exact Python package declarations and file hashes; they do not certify native/model license compatibility.

## Actual checks

Pageweft: 108 unit/SQLite/HTTP checks and the real local upload/review/export browser flow at 320/390/768/1440. Sonaweft: 77 checks and real media inspection/decoding plus explicitly replayed ASR through correction/export/deletion at those widths. Noteweld: 55 unit/React/crypto checks, 32 real PostgreSQL cases, 21 production-build Chromium cases with synthetic provider request construction; the final success-copy fix also passed its affected flow. Noteweld GitHub CI 39222871340 (owner-access source record) succeeded for 54330b7.

All three existing Modal apps were deployed; custom-domain browser checks returned 200 with billing closed. A populated hosted Noteweld v3 snapshot preserved one synthetic account, four notes, three labels/associations and one original ZIP exactly after restoration into an empty loopback clone. Browser sessions were excluded and restored epochs incremented. Only the run's synthetic live account was removed afterward; original accounts/financial/provider infrastructure remain.

## Useful failures

An imported-note link used an old query route; real browser coverage caught it, and the link now uses the maintained route helper. A browser check started before build completion could not find its standalone server; rerunning after the successful build fixed the test sequencing. A stopped loopback database was restarted without substituting a cloud database. Monthly byte counters now survive maintenance, and legacy restore invalidates old cookies even when its snapshot lacks a session-version field. Failed metadata inspection attempts revealed duplicate Modal function tags and an excluded source module; distinct functions in the image-contained module fixed them before any inventory was claimed.

## Explicit boundaries

Real OAuth consent, genuine Paddle sandbox/live/payment/payout acceptance, off-device recovery custody, delivered external alerts, owner-selected provider spend ceilings and representative quality/cost/user evidence remain separate. Current request/job/backup diagnostics and pulled private owner reports do not prove delivered alerts or margins. No shared wallet, automatic speaker identity, universal quality promise or customer demand is fabricated.

Pageweft's source repository currently returns404 to anonymous visitors. Repository access settings were preserved; its public architecture/manual and deliberately reviewed inventory files remain readable here. Earlier release records retain their own dates and counts.
