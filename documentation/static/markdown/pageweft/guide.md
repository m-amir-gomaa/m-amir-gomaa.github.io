# Using Pageweft

Reviewed: 2026-11-09

## See a completed result

[Open Pageweft](https://pageweft.amirgomaa.com/) or explore the original PDF/Markdown/ZIP example linked from its website and the portfolio. Viewing the completed example does not run a GPU conversion.

## Inspect before processing

Upload a PDF you have permission to process. Each file can be at most 64 MiB and 1,000 PDF pages; up to five files can be inspected, with each conversion confirmed separately. Choose the original PDF page numbers or ranges and review the text-layer inspection and quote.

Inspection does not establish that OCR will preserve every formula, table or symbol. Encrypted, malformed or resource-heavy documents can be rejected. Keep the original.

## Choose the extraction route

- **Automatic:** inspect the per-page text/MinerU routing plan and its quote; keep or deliberately override the conservative heuristic.
- **Forced OCR:** request OCR explicitly where the text layer is unsuitable.
- **Text-only:** use the cheaper CPU route for available text; it does not provide OCR, extracted images or full layout reconstruction.

The small public trial processes one selected page, subject to visitor and shared availability checks. If processing is unavailable, the app displays **Currently unavailable. Please try again later.** Completed examples remain open. Full funded processing is implemented but unavailable while commercial checkout is closed. Do not assume that seeing a tariff means a live purchase is possible.

## Follow work and handle failures

Selected pages are divided into bounded sections. Successful sections remain available if another section fails. Inspect the status before retrying; an uncertain request should not be repeated as a new billable job.

Use explicit retry or selected-page reprocessing with its displayed quote. Cancelling queued work and cancelling an already running section have different settlement behavior. The [conversion release](/manuals/pageweft/book-release/) documents those rules.

## Review against the source

Use original-PDF page references, reported symptoms and the corrections editor. Corrections remain separate from original engine output; revision checks help prevent stale edits. Detection flags cover specific symptoms and cannot guarantee that unflagged text is correct.

Choose single-document, per-page, page-group or PDF-bookmark exports. The ZIP can carry relative image paths, a manifest, source metadata, original engine output and an optional source PDF. Keep raw output when investigating extraction defects.

## Keep your files

Download results before the 48-hour retention window expires; scheduled cleanup removes expired source/output files. Saved financial/recovery records are separate from file retention. Use deletion/discard controls when appropriate. Keep any optional private recovery key securely.

Current pricing and boundaries are in the [technical overview](/manuals/pageweft/overview/). Owner deployment and incident procedures are in [operations](/manuals/pageweft/operations/). The owner reports app domains approved; seller/payout and genuine payment acceptance are still required; no earnings or perfect OCR is promised.

## Review and portable handoff

Compare flagged or edited pages against the original, including printed labels versus PDF indexes. Normalization and cross-page joins offer explicit previews/diffs; saving requires current versions and never rewrites raw engine output. Technical/IPA cues are symptoms, not accuracy certification.

Choose plain Markdown, Obsidian or LLM-oriented exports. Size-targeted chunks preserve Markdown blocks and report oversized ones; they are formatting, not generated summaries. The hashed v1 archive can be previewed and imported atomically through [Noteweld sources](/manuals/noteweld/source-bundles/). See [the source-workflow record](/manuals/pageweft/source-workflow-release/) and [quality measurements](/manuals/pageweft/quality-benchmarks/) for actual evidence and remaining representative samples.

## Accounts and free availability

Use **Account** to sign in, request an email-first signup link or reset a verified address. Choose the passphrase on the confirmation form; opening the link alone does not create the credential. Existing unverified accounts can verify from their owned workspace. Reset completion signs out older sessions and invalidates old recovery keys. A separately saved key is optional when verified email recovery is available. Matching addresses never merge accounts; confirming signup in another browser creates a fresh workspace rather than moving guest files/credits. Google/GitHub registration and genuine consent acceptance remain separate. [Email and recovery guide](/manuals/pageweft/accounts/). Signing in does not grant another sample or reset limits. Shared availability is checked privately; owner billing/accounting details are not returned to visitors.
