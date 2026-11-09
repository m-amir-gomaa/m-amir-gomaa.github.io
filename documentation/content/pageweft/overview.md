{
  "title": "Technical overview",
  "description": "Features, extraction architecture, local setup, cloud deployment and limits.",
  "date": "2026-11-09",
  "weight": 30,
  "project": "Pageweft",
  "category": "Reference",
  "notice": "Current public preview supports verified email-first signup, mailed resets for verified addresses and existing private-key recovery. Processing may be temporarily unavailable; completed examples remain open. Dedicated Google/GitHub registration and genuine consent remain open. Paid checkout is closed. Dated release records describe their own checkpoints. Production source revision 1d1f932 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/pageweft/overview.md"
}

## Hosted PDF workflow

Pageweft runs a Python/FastAPI web interface and serialized SQLite ledger on Modal behind Cloudflare. Inspect authorized PDFs up to 64 MiB / 1,000 pages, choose original page ranges and review the extraction plan/quote. Automatic routing uses text extraction or pinned MinerU OCR; forced OCR and explicit CPU text-only routes remain separate. Text-only does not reconstruct images or full layout.

Bounded sections preserve completed output through partial failures. Review against source pages, retain engine versions separately from corrections, and export single/per-page/group/bookmark Markdown with relative media and hashed provenance. Plain Markdown, Obsidian and LLM-oriented presets are formatting choices, not generated summaries or accuracy guarantees.

## Current service tariff

MinerU extraction is $0.50/job plus $0.005/selected page; text-only is $0.25 plus $0.001/page. Reprocessing completed pages has a $0.20 service fee plus page usage; failed-page retries do not repeat an already charged initial fee. One-time packs are configured at $5/$10, but checkout remains closed. These are configured service tariffs, not measured provider reimbursements or guaranteed margins.

An eligible public sample processes one selected page subject to private availability. Accounts/balances are independent from other apps. Files/corrections expire after 48 hours; download retained results. Verification/reset mail is deployed; [accounts](/manuals/pageweft/accounts/) explains ownership and recovery. Genuine OAuth consent and payment delivery remain separate.

## Evidence and setup

Real cloud CPU PDF text extraction, review/export browsers, source lineage and deployed synthetic account/recovery acceptance have recorded checks. Complex OCR still needs comparison against the source; no broad accuracy or scale benchmark is implied. The engine is AGPL-3.0: repository privacy is not licensing clearance. [Dependency review](/manuals/pageweft/dependencies/) explains that boundary.

The owner-access source contains Python/Modal development/deploy commands and provider configuration. It preserves one serialized ledger writer and separate media recovery. [Using Pageweft](/manuals/pageweft/guide/) is the visitor starting point; [operations](/manuals/pageweft/operations/) describes recovery boundaries. No customer Modal account or local GPU is needed to use the hosted site.
