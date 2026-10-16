# Technical overview

> The free sample is bounded to one selected page and available quota. Paid processing remains closed pending Paddle approval and real payment verification. Historical prices and provider comparisons are dated evidence.

Source baseline: https://github.com/m-amir-gomaa/PDF2Markdown-/blob/b5ccb96441757e39e0431c61a69a264627a40a60/README.md
Reviewed: 2026-10-16

Formerly Document Studio; renamed with Amir's approval on 15 October 2026. Canonical local path: `~/Projects/freelance/pageweft`, with the old directory kept as a compatibility symlink. Existing public GitHub/Modal URLs and permanent storage/session/secret identifiers are retained so bookmarks, accounts and credits keep working.

Hosted PDF-to-Markdown conversion for books and technical material, using MinerU on Amir's Modal account. Inspect selected pages, review issues, correct text and export portable files for your own editor or LLM workflow.

[Live bounded sample](https://m-amir-gomaa--mineru-pdf-extractor-web-app.modal.run) · [Launch register / remaining steps](/manuals/pageweft/launch/) · [Owner operations](/manuals/pageweft/operations/) · [Implemented features / pricing / evidence](/manuals/pageweft/book-release/) · [Payment activation](/manuals/pageweft/payments/)

## Current implementation

- Books up to 64 MiB / 1,000 PDF pages; inspect up to five PDFs, each confirmed separately.
- Original PDF page selection, price confirmation and text-layer inspection before extraction.
- Automatic or forced OCR with pinned MinerU 2.7.6; cheaper explicit text-only extraction without GPU/OCR/images.
- Bounded 20-page sections, persistent jobs, partial output, cancellation and selective reprocessing.
- Source-page review, symptom reports, corrections with history and stale-edit protection.
- Single-file, per-page, page-group or PDF-bookmark exports with relative image paths, original engine output, manifests and optional source PDF.
- Private session ownership, account recovery key, source/output deletion and 48-hour file expiry.
- Transactional processing-credit reserve/settle/release and one-time pack integration. **Paddle catalog, runtime credentials and signed-payment integration are configured; merchant review and real payment delivery remain pending.**
- Private owner dashboard, actual Modal workspace billing readout, conservative admission budgets/pause, aggregated activity/error counts and encrypted financial snapshots. Actual provider-level spend limits and commercial margins remain separate verification.
- Original public PDF/Markdown/ZIP example and practical conversion guide, canonical pages and crawl metadata; no search ranking or user acquisition claim.

No recurring access fee. Launch tariff: MinerU $0.50/job + $0.005/selected page; text-only $0.25 + $0.001/page. One-time packs are configured at $5/$10; checkout remains closed pending approval and payment verification. Reprocessing completed pages has a $0.20 service fee plus page usage; failed-page retry does not repeat an already charged initial fee. Credits do not expire; files/edits do. This is a service tariff, not exact measured compute pass-through or guaranteed net profit.

## Architecture

```text
Browser: encrypted session + CSRF
   | inspect PDF / review quote / confirm
   v
Modal CPU FastAPI (web/studio.py)
   |                         |
   v                         v
Serialized book_store       Private source/section volume
   | books.sqlite            ^
   | atomic credit holds     |
   v                         |
CPU coordinator -> bounded GPU or CPU text workers
   | successful section settles once; failure releases allowance
   v
Source-aware pages -> corrections/history -> portable ZIP export

Signed payment event + fresh provider order -> grant/revoke credits once
Hourly cleanup -> expired files; credit/account records remain separate
```

The active ledger is `/ledger/books.sqlite`; the original prototype's `/ledger/state.sqlite` is preserved separately. Each has one writer function. Do not run a second app/writer on the same volume. Owner probes invoke deployed functions. The original authenticated `extract_pdf` remains available for preparation scripts; no public Modal credentials are collected.

Initial CPU/GPU concurrency, page-attempt and upload caps are listed in [release notes](/manuals/pageweft/book-release/). This is a bounded early service, not demonstrated thousands-of-concurrent-user capacity. OCR can damage symbols or lose content; review flags and source metadata do not certify correctness. Unknown blocks and original engine output remain available for inspection.

## Development and deployment

Python 3.13; Modal SDK 1.5.3. GPU image uses Python 3.12. Direct package versions are pinned; transitive/model revisions are not all pinned. No local AI weights or GPU setup are required.

```sh
python3.13 -m venv .venv
.venv/bin/pip install -r requirements-dev.txt
.venv/bin/python -m unittest discover -s tests -q
node --check static/app.js
.venv/bin/ruff check --select E9,F63,F7,F82,F401 web/books.py web/credits.py web/documents.py web/studio.py
.venv/bin/python -m modal deploy app.py
```

Owner Modal authentication is required. Keep the existing Fernet key in `document-studio-session`; changing it invalidates sessions and key-derived recovery identities. The separate `document-studio-payments` secret contains scoped Paddle runtime configuration with BILLING_MODE=test and PADDLE_SELLER_APPROVED=false; merchant review is pending. Public test-mode grants are disabled. See [activation steps](/manuals/pageweft/payments/) before live charging.

For a local browser fixture with real text extraction and explicit synthetic credit, run:

```sh
.venv/bin/python -m uvicorn scripts.preview_books:app --host 127.0.0.1 --port 8768
```

This fixture is not deployed, does not process payments or run local MinerU, and supports text-only execution. For owner-only cloud verification through existing deployed functions, use `.venv/bin/python -m scripts.probe_deployed_books --pdf <original-test.pdf> --mode text` or `--mode auto`. It seeds an explicit internal credit fixture; this does not verify a purchase. Historical scripts/test_e2e.py targets the retired SSE/BYO interface and is not the active release test.

## Verification and limits

The current 78-test automated suite, real Modal extraction, live public trial/edit/export and responsive browser evidence are recorded in [BOOK-RELEASE.md](/manuals/pageweft/book-release/). A complete 1,000-page synthetic PDF passed deployed text-layer extraction across 50 sections with all pages exported and correct credit settlement; this is not a GPU whole-book fidelity benchmark. Paddle validation/signature/refund tests use synthetic HTTP and real disposable SQLite. Dedicated checkout, recovery and public policy pages passed local and deployed Chromium checks at 320/390/768/1440 pixels; no real Paddle payment or sandbox purchase was performed. See [Paddle evidence](/manuals/pageweft/paddle-release/). Representative difficult-document comparison and real merchant delivery remain distinct work.

Results are private through session ownership, not a claim of zero provider retention. Hard-killed workers reconcile through deadlines; uncertain dispatch never automatically spends on a retry. Scheduled cleanup, storage, cache and compute can incur charges. Shared-IP trial limits can affect legitimate users.

[Unmodified MinerU 2.7.6 source](https://github.com/opendatalab/MinerU/tree/mineru-2.7.6-released) / AGPL-3.0 release attribution is visible in the UI. [Dependency notes](/manuals/pageweft/dependencies/) distinguish exact-release licensing from current upstream master. New books, extracted collections, credentials, local environments and test artifacts are ignored. Historical tracked sources already exist; this change does not remove them or rewrite history.
