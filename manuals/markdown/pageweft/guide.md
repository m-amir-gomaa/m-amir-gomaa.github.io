# Using Pageweft

Reviewed: 2026-10-18

## See a completed result

[Open Pageweft](https://pageweft.amirgomaa.com/) or explore the original PDF/Markdown/ZIP example linked from its website and the portfolio. Viewing the completed example does not run a GPU conversion.

## Inspect before processing

Upload a PDF you have permission to process. Each file can be at most 64 MiB and 1,000 PDF pages; up to five files can be inspected, with each conversion confirmed separately. Choose the original PDF page numbers or ranges and review the text-layer inspection and quote.

Inspection does not establish that OCR will preserve every formula, table or symbol. Encrypted, malformed or resource-heavy documents can be rejected. Keep the original.

## Choose the extraction route

- **Automatic MinerU:** use the supported text/OCR decision path and structured extraction.
- **Forced OCR:** request OCR explicitly where the text layer is unsuitable.
- **Text-only:** use the cheaper CPU route for available text; it does not provide OCR, extracted images or full layout reconstruction.

The small public trial processes one selected page, subject to the remaining session/IP/global allowance. Full funded processing is implemented but unavailable while commercial checkout is closed. Do not assume that seeing a tariff means a live purchase is possible.

## Follow work and handle failures

Selected pages are divided into bounded sections. Successful sections remain available if another section fails. Inspect the status before retrying; an uncertain request should not be repeated as a new billable job.

Use explicit retry or selected-page reprocessing with its displayed quote. Cancelling queued work and cancelling an already running section have different settlement behavior. The [conversion release](/manuals/pageweft/book-release/) documents those rules.

## Review against the source

Use original-PDF page references, reported symptoms and the corrections editor. Corrections remain separate from original engine output; revision checks help prevent stale edits. Detection flags cover specific symptoms and cannot guarantee that unflagged text is correct.

Choose single-document, per-page, page-group or PDF-bookmark exports. The ZIP can carry relative image paths, a manifest, source metadata, original engine output and an optional source PDF. Keep raw output when investigating extraction defects.

## Keep your files and recovery key

Download results before the 48-hour retention window expires; scheduled cleanup removes expired source/output files. Saved financial/recovery records are separate from file retention. Retain the private recovery key securely and use deletion/discard controls when appropriate.

Current pricing and boundaries are in the [technical overview](/manuals/pageweft/overview/). Owner deployment and incident procedures are in [operations](/manuals/pageweft/operations/). Paddle approval and real payment verification are still required; no earnings or perfect OCR is promised.
