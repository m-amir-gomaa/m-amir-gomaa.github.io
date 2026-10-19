# Book conversion release

> Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Source revision d35780b is retained for the owner; anonymous repository access is unavailable. This reviewed public edition is readable independently. Earlier Lemon Squeezy material is historical; Paddle is the selected integration and checkout remains closed. External prices require fresh verification. This reviewed documentation snapshot includes local documentation edits; the recorded revision is the committed baseline.

Source baseline: Owner-access repository, revision d35780b9038e6ead15c260965ff53f20e79c6315
Reviewed: 2026-10-19

*Original record: Book conversion release — 14 October 2026.*

Implemented in the hosted Pageweft application; supersedes the one-page-only product and $1/month access proposal. Amir delegated a better pricing model and approved the conversion utility improvements. The public free sample remains one selected page, but inspection accepts books and paid jobs use separately funded credits.

## Features and implementation

| Capability | Implementation |
|---|---|
| Books / ranges / batch inspection | Up to five PDFs, each <=64 MiB and 1,000 source PDF pages; strict PDF validation and page-range parser; retained inspected PDFs can be resumed. Each conversion is separately confirmed. |
| Preview and price before extraction | Source page count, selected pages and text-layer samples are inspected without GPU work; fixed tariff quote must match the confirmation. |
| Automatic / force OCR / cheaper text-only | Pinned unmodified MinerU 2.7.6 uses its documented mode/language options; pypdf text-only worker uses no GPU and explicitly excludes OCR, image extraction and layout reconstruction. |
| Bounded sections / partial recovery | Selected pages split into groups of 20; at most two GPU workers. Successful sections survive failures; explicit retries select missing or chosen original pages and can force OCR. Duplicate requests cannot reserve or dispatch twice. |
| Traceability / fidelity review | Original page indices are mapped from the subset PDF back to the full source. Renderer preserves recognized headings, equations, HTML tables, captions, footnotes and images. Unhandled blocks, unmapped content, empty/short output, missing images and replacement glyphs are reported. Untouched engine output is retained separately; flags do not certify correctness. |
| Corrections / history | Plain Markdown editor with original-PDF page link, optimistic edit versions and saved history. Reprocessing retains user corrections. Engine text can be loaded explicitly into the editor draft. |
| Portable outputs | Single Markdown, individual pages, bounded page groups, or sections based on original PDF bookmarks. Local image paths, source hash, unavailable-page list, raw section extraction and review metadata. Source PDF inclusion is optional. |
| Cancel / discard / delete / expiry | Queued work releases reserved allowance. A running cancelled section may finish and be charged. Job deletion removes edits/output and releases an unshared source. Unused inspected sources can be discarded. Hourly cleanup removes 48-hour-expired files; balances/recovery persist separately. |
| Account / purchase recovery | Encrypted Secure/HttpOnly session; high-entropy recovery key stored only as keyed hash. One-time purchase keys can restore the owning account. No customer Modal credentials. |
| Payments / refunds | Separate one-time pack integration verifies scoped provider orders and signed events; duplicate orders grant once, full/partial refunds revoke pack credits. Atomic reserve/settle/release accounting in integer 1/10,000 USD units. Public test-mode grants disabled. Live seller configuration remains absent. |

The active HTTP factory is web/studio.py. web/main.py and web/billing.py preserve the retired interface/verifier for regression/compatibility work; they are not the public paid implementation. Books use /ledger/books.sqlite, separate from the original /ledger/state.sqlite. Each is owned by one serialized function. Do not run a second Modal app with a separate book_store function on the same volume. Owner verification scripts invoke deployed functions instead.

## Pricing

No recurring access fee. One-time $5/$10 processing packs; the service debit is:

- MinerU: $0.50 service fee plus $0.005 per selected page. 100 pages = $1; 500 pages = $3; 1,000 pages = $5.50.
- Text layer only: $0.25 plus $0.001 per page. 500 pages = $0.75. This is a cheaper, explicitly more limited extraction route.
- Reprocessing already completed pages: $0.20 service fee plus the chosen method's page rate. Failed-page retries do not repeat an already charged initial service fee.
- Failed sections release their page allowance. If no section succeeds, the service fee is released too. Existing successful work and its charges remain.

These are launch service tariffs, not exact pass-through of a measured Modal invoice. Credits do not expire; files/edits do. Prepaid funds are not all profit when purchased. Taxes may be added at checkout; fees/support/refunds/compute reduce contribution. Recalibrate tariffs from representative actual bills before expanding spending limits.

[Paddle fees](https://www.paddle.com/pricing) supersede the historical Lemon-specific calculation: base 5% + $0.50/checkout. With no sales tax, $5 leaves $4.25 and $10 leaves $9 before processing/refunds/payout costs. Paddle calculates its fee from the tax-inclusive buyer total; actual tax mode and settlement must be checked. The savings come from amortizing a fixed transaction fee over prepaid use. Current financial assumptions and scenarios (local reference; not published) separate service debits, cash, costs and income.

[Modal pricing](https://modal.com/pricing): A10 $0.000306/sec, CPU $0.0000131/core/sec, RAM $0.00000222/GiB/sec. New GPU sections request/cap two CPU cores and 8 GiB RAM, with 240-second function timeout, 180-second extraction bound and 5-second scale-down window. Model load, waiting, storage and orchestration can add cost. This is not invoice measurement or a guarantee every PDF finishes within the bound.

Initial safety limits: 100 retained-document creations/day globally; five retained inspected documents per owner; GPU page attempts 3,000/day globally and 2,000/owner/day, text attempts 30,000/day globally and 5,000/owner/day. Failed attempts still count toward safety limits, despite credit refunds. Trial capped at 3/day and 20/month globally, once per owner/IP. Shared-IP restrictions can affect legitimate users. These caps protect initial owner spending and must be deliberately calibrated for growth; no thousands-of-concurrent-user capacity claim is made.

## Owner operations addition

The private owner report now retrieves actual Modal workspace billing, separates verified commercial funding from fixtures, retains cumulative service consumption across file cleanup and checks credit identities. Atomic admission envelopes default to $10/day and $25/UTC month, at $0.15/GPU or $0.01/text section attempt. These are provisional controls, not a provider invoice cap. Pause blocks new/queued dispatch with an explicit allowance release; running work may complete. Rate quotas, 64 KiB JSON bounds and a separate CPU/memory/time-bounded PDF inspector harden the HTTP path. Read OPERATIONS.md and LAUNCH.md for the outer provider spending limit and actual payment/account/customer evidence.

Existing hourly cleanup adds bounded refund reconciliation, encrypted financial snapshots without document text/filenames, and sanitized rule-based alerts. Off-platform financial backup decryption/integrity/credit identities are checked on a disposable clone, not by overwriting production. No email alert or third-party analytics service was connected. An original public PDF/Markdown/ZIP guide and crawl metadata are available; indexing and sales are not established.

## Evidence

- Automated suite: 60 unique checks, including real 1,000-page PDF inspection/end-section extraction, timeout/funds lifecycle, actual PDF-bookmark exports, refund cancellation, retry replay and malformed-request tests.
- Real Modal MinerU: original four-page PDF, selected pages 1/3/4, produced mapped portable output. This was an owner-authenticated internal credit fixture, not a purchase.
- Real deployed CPU: the complete original 1,000-page synthetic PDF processed across 50 sections via deployed book_store/run_book functions, with fixture credit and no second ledger writer. Final archive has all 1,000 ordered source pages, zero unavailable pages and the correct $1.25 service-credit debit. Four-page source selection was also checked. This is text-layer extraction of a synthetic PDF, not a scanned-book or technical-fidelity benchmark, and not a customer payment.
- Real public HTTP: inspection of pages 3–4, unfunded confirmation rejected with 409, one-page sample delivered original page 3, edit saved, corrected per-page ZIP downloaded with source PDF omitted, other session denied.
- Local Chromium: real PDF text extraction and explicit local seeded credit at widths 320/390/768/1440; quote, confirmation, correction history, selective reprocessing and ZIP download passed; no horizontal overflow/page errors. Batch inspection checked at 320/1440. Browser fixture does not verify payments or local GPU extraction.
- Actual seller checkout, provider test-mode webhook delivery, funds arrival, payout and a representative difficult-book comparison are not verified. No claim of perfect OCR, fixed damaged IPA or superior extraction is made.

Ignored artifacts contain sanitized evidence/synthetic PDFs; source books and secrets are not added. Screenshots and browser errors are private test artifacts. No new local AI model was installed and no NixOS configuration was changed.
