{
  "title": "Source workflow and diagnostics release",
  "description": "Implemented review/export/accounts, private monitoring and verified release boundaries.",
  "date": "2026-10-19",
  "weight": 160,
  "project": "Pageweft",
  "category": "Release record",
  "notice": "Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Source revision d35780b is retained for the owner; anonymous repository access is unavailable. This reviewed public edition is readable independently.",
  "sourceurl": "",
  "download": "markdown/pageweft/source-workflow-release.md"
}

*Original record: Source workflow and diagnostics — 18 October 2026.*

## Implemented

- Mixed per-page text/MinerU routing uses the inspected plan for quoting, admission, reservation, settlement and retry. It is a conservative heuristic, with explicit all-text/all-MinerU overrides, not an accuracy classifier.
- Saved PDF page labels, flagged/edited review filters, source navigation and optional embedded source viewer.
- Explicit normalization previews/diffs, technical/IPA review cues and atomic two-page paragraph/hyphen/matching-table continuation saves; both versions must still match. Original extraction and prior correction history remain separate.
- Plain, Obsidian and LLM-oriented source-linked export presets; Markdown-block size targets, oversized-block reporting, per-file SHA256 manifest, retained local source references and printed-label report.
- Optional Google/GitHub using Authlib state/PKCE/OIDC validation, stable provider subjects, deliberate ownership-confirmed linking/unlinking, revocable sessions, recovery rotation, account metadata and purchase history. Buttons stay disabled without configured credentials. No email-based merging or shared product balance.
- Invoice retrieval checks authenticated workspace, CSRF and a verified namespaced purchase before calling Paddle. Provider-signed links expire in one hour; they are never persisted as permanent invoice URLs.
- Structured request/worker/reconciliation/backup diagnostics; generated support IDs, template routes and safe exception classes. Raw callback access logs disabled. No payload, filename, IP or secret fields. Thirty-day durable route/status/latency histograms and private dashboard summaries. Timings cover response headers, not entire streamed downloads.
- Final presentation pass after functional work: reading-desk identity, readable controls, mobile layouts, skip link, focus and reduced-motion behavior.

## Reproduce local acceptance

`python -m unittest discover -s tests` exercises real disposable SQLite and synthetic HTTP provider boundaries. `scripts/source-review.browser.cjs` uses local text extraction and a disposable preview; it exercises upload, trial, review, normalization, history, three exports and 320/390/768/1440px layouts. It does not call paid services or establish actual OAuth consent, GPU quality or commercial payments.

Private evidence and the source-only checkpoint are under `.local/backups/source-review-20261018/` and `.local/source-review-polish/`. An actual cloud financial snapshot was retrieved, independently encrypted, decrypted and validated before deployment. That proves the snapshot operation, not off-device custody or disaster cutover.

## Remaining external acceptance

Actual Google/GitHub registration/consent, genuine isolated Paddle sandbox and authorized live acceptance/payout, owner-selected provider spend ceiling and external alert channel, independent recovery storage, permission-cleared representative quality/cost benchmarks and external users are separate gates. No mock, local screenshot or admission envelope proves those outcomes. Alerts currently appear in structured Modal logs and the pulled owner report; no external alert delivery is claimed.

## Code map

Read `web/review.py` for proposed transformations; `web/documents.py` for page mapping/exports; `web/books.py` for atomic credit/correction operations; `web/accounts.py` + `web/identity.py` for accounts; `web/observability.py` + `web/operations.py` for diagnostics; `static/app.js` for review/account UI. Provider setup variables and exact callbacks are in `.env.example`.

## Operational follow-up — 19 October

Five offline scoring checks bring the broad suite to 108 passing. `scripts/score_quality.py` reports exact edit denominators, failed-case timings, known/unknown attributable costs and manifest/source/result hashes without uploading data or calling providers; [measurement procedure](/manuals/pageweft/quality-benchmarks/) states the remaining representative-sample/manual-review requirements. No quality/cost result is invented from its synthetic calculation tests.

The public original example ZIP was regenerated with the real current CPU exporter and now carries the v1 schema/note index needed by Noteweld. The full local browser upload/review/export journey passed again at four widths; it also checks that a failed/cancelled sign-in message survives asynchronous initial loading. Actual metadata inspection of both declared images ran on CPU without secrets/models/GPU; [inventory](/manuals/pageweft/image-inventory/) records exact Python distribution versions and license-file hashes, with native/system/model review explicitly separate. Failed inventory attempts and fixes are documented there.
