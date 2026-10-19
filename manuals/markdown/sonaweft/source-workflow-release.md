# Source workflow and diagnostics release

> Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 4da0176 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 4da017611edbb2bd57f736fad44428e47d2fc50a
Reviewed: 2026-10-19

*Original record: Recording workflow, accounts and diagnostics — 18 October 2026.*

## Passage-to-quote follow-through — 19 October 2026

The listening toolbar can prepare reprocessing for its selected passage without
re-uploading the recording or entering its original source timestamps manually.
Clip-relative times are converted back to the original recording offset and
quoted by the owned-upload endpoint. The reviewer must save an unsaved correction
before preparing this quote. It defaults to transcription only; optional AI
review remains a separate explicit choice and consent. No processing starts
until confirmation. Earlier results and corrections remain separate.

The failed-job retry control now asks the server for its quote instead of
duplicating tariff arithmetic in JavaScript. Original recording duration is
returned by the owned quote API. A response for an old passage, another recording
or changed interval cannot approve the currently displayed fields. Selected
intervals cannot silently invoke the separate first-30-second free trial.
Searching an intentionally empty correction no longer falls back to the removed
original words.

Evidence: 78 Python/SQLite/HTTP cases, including a read-only interval-price case
that creates no job, credit hold or model dispatch. Scripted DOM checks with
mocked HTTP cover original offsets, deliberately different server tariffs,
explicit confirmation, draft protection, quote failures, stale selections and
range changes. This adds no graphical browser, new ASR/GPU quality, genuine
Paddle transaction or real identity consent evidence. Functional visual
acceptance remains an owner step; final visual polish stays last.

## Implemented collection

- Self-service source/result deletion: close access, cancel queued/running ledger states, return holds and prevent late settlement/publication. Clear files and preserve a content-free tombstone until bounded workers finish. Purchase/credit records remain. In-flight buffers may persist until the bounded operation exits; this is stated in the UI/privacy notice.
- Authorized public HTTPS direct-media and RSS/Atom import. Resolve/check every redirect, connect to the checked public IP with original-host TLS verification, ignore environment proxies, reject private/link-local/credentialed/nonstandard-port targets, bound redirects/body/time and inspect media with the same protocol/format limits as uploads. No browser cookies, webpage/YouTube downloader, private feed or access-control bypass.
- Explicit interval quotes and separate bounded processing results; original jobs, segment IDs and corrections remain intact. Export/player times are clip-relative, with original recording offset retained. A retry can reuse its exact retained ASR checkpoint; this is not a promise that identical recognition is improved by rerunning it.
- Listening queue for model probabilities, gaps, repetition and glossary candidates. Thresholds are transparent cues, not calibrated accuracy/truth scores. No silent term correction. Source quotes, playback speed, selected-passage play/loop and accessible Alt navigation / save shortcut.
- Editable manual speaker labels, separately hashed export metadata; no automatic diarization or verified identity claim. Original ASR, user corrections, optional advisory review and corrected subtitle/Markdown downloads stay separate.
- Optional Google/GitHub account foundation, deliberate recent-authenticated linking/unlinking, revocable browser sessions, secure recovery rotation, account metadata, purchase history and ownership-gated Paddle invoice retrieval. Providers remain unavailable without registered credentials; equal emails never merge balances.
- Structured private request/worker/backup/reconciliation diagnostics, support IDs, route/status/latency histograms, per-job runtime and provider-reported LLM model/token counts where supplied. Missing counts are unknown. A loaded Whisper model can be reused in the same surviving GPU process; containers still scale down quickly. No expensive always-warm allocation was added.
- Financial backup verifies encryption, SQLite integrity and credit identities in a disposable clone. Active sessions are excluded from financial snapshots. Owner report includes HTTP and processing aggregates plus admission/error alerts. No external alert transport is enabled.
- Final visual pass follows functional work: listening-workbench identity, source/correction separation, readable queues, mobile controls, skip link, focus and reduced motion.

## Evidence and reproduction

`python -m unittest discover -s tests` currently passes 72 cases: real disposable SQLite, bounded media handling, explicit synthetic provider HTTP/OAuth boundaries, malicious URL/redirect/identity/export/deletion cases. `scripts/source-review.browser.cjs` exercises actual local media inspection/decoding and explicitly replayed original ASR through review/correction/speaker labels/quotes/exports/deletion at 320/390/768/1440px. It makes no model, payment or actual identity-provider calls.

The private source checkpoint, test logs and verified financial snapshot are under `.local/backups/source-review-20261018/`; browser evidence is under `.local/source-preview-final/`. Current cloud inference/import/deletion acceptance, if successful, is recorded separately in `.local/cloud-acceptance-20261018/` and the shared milestone. Source-only preview is never imported by deployment.

## Remaining external acceptance

Google/GitHub registrations and real consent; genuine isolated Paddle sandbox and authorized live purchase/refund/payout; owner-selected provider spend ceiling, external alert delivery and separate off-device recovery custody; representative clean/noisy/accented/long audio and external-user/competitor comparisons. Existing admission caps remain unchanged. Short original-demo inference does not establish long-recording quality, 1,000-user capacity or measured profit. See ROADMAP.md for required evidence and optional expansion; no optional provider/model migration is silently selected.

## Code map

`sonaweft_web/remote_media.py`: network boundary. `ledger.py`: atomic deletion/holds/intervals/labels. `review_queue.py`: listening cues. `accounts.py` + `identity.py`: identities/sessions. `observability.py` + `telemetry.py`: safe logs and aggregates. `app.py`: bounded cloud inference/orchestration. `instascript/contract.py`: immutable-original/derived exports. `scripts/operations.py`: private monitoring and restore verification.

## Operational follow-up — 19 October

The broad suite now passes 77 tests, including five offline scoring checks shared with Pageweft. `scripts/score_quality.py` uses permission/source/result hashes, exact text-error denominators, failure-inclusive timing observations and explicit unknown costs; [measurement procedure](/manuals/sonaweft/quality-benchmarks/) defines comparable references and representative clean/noisy/long sample requirements. Synthetic scorer checks establish calculation behavior, not ASR quality or profit.

The local replayed-ASR browser flow passes again across four widths, including the failed-sign-in message after asynchronous startup. Source review/correction/labels/playback/subtitles/bundle/deletion remain covered. [Image inventory](/manuals/sonaweft/image-inventory/) records actual 44 web and 42 Whisper Python distribution versions, declarations and license-file hashes read on CPU without app credentials, customer/model volumes or GPU. Native/system/model compatibility remains separate from those metadata facts. No new recognition run, paid LLM or payment was performed.
