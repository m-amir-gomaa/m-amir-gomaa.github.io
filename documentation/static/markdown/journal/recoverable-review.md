# Making transcript review recoverable

Reviewed: 2026-10-19

## The user problem

A transcript can be corrected successfully while the editing workflow still loses
valuable work. In-tab undo is insufficient after a reload, and a revision number
prevents conflicting saves without keeping the earlier text. Sonaweft now keeps
bounded, durable annotation snapshots and lets the owner compare and restore them.
The original recognition remains a separate source throughout.

Try the [live workbench](https://sonaweft.amirgomaa.com/) or read the
[history usage guide](/manuals/sonaweft/annotation-history/). A
[completed original example](https://sonaweft.amirgomaa.com/example) is readable
without consuming processing credit.

## Find the boundaries before changing the interface

A local Graphify code-only map of the relevant source snapshot contained 512
nodes and 1,442 relationships. It directed review toward the annotation writer,
source deletion, expiry cleanup, exports and financial snapshots. The graph was
a navigation aid; source inspection and executed tests established the behavior.

That review found an existing privacy defect: deleting a recording cleared
correction text but left its current speaker-label fields in the ledger.
The repair clears both, removes history immediately and excludes annotation
content from financial snapshots. Retention cannot be implemented solely as a
visible history dropdown.

## Make recovery atomic

The existing serialized SQLite writer now saves an annotation and its history in
one transaction. Snapshot failure rolls back the annotation. Every restore checks
ownership, result expiry, CSRF, request rate and the expected current revision.
Concurrent restores/saves cannot both overwrite the same revision.

The latest 20 states are retained per result. Restoring an older one creates a
new revision rather than rewriting its predecessor. Existing results begin with
their actual saved state; missing historical timestamps are not invented.

## Keep the interaction explicit

The comparison uses inert text and shows changes across the whole result.
Previewing it does not modify the editor. Unsaved correction and speaker-label
drafts prevent restore; a confirmation explains its full-result scope. Fields
are temporarily locked while an annotation write is in flight, and stale reads
cannot repopulate a different result. Refreshing read-only listening cues also
preserves unsaved correction and speaker-label drafts. Malformed Unicode labels
are rejected without a partial save.

Browser testing also exposed a missing return path from interval quoting.
**Use the full recording** now re-quotes the same upload without duplicating
media or starting inference. It does not reset a consumed free allowance.

On phones, controls stack naturally. Motion respects reduced-motion preferences;
entry animation is limited to the review heading, avoiding a large composited
editor layer. Functional layout and accessibility belong with the feature,
before the separate final visual-polish pass.

## Check real boundaries

- **90 backend checks** passed, including real SQLite reopen, concurrency,
  rollback, retention, ownership, deletion, legacy revision preservation and
  backup exclusion.
- DOM checks covered inert text, draft safety, failed-read retry, failed restore,
  stale responses and explicit server-priced quoting without starting processing.
- Real Chromium exercised local SQLite, actual media inspection/decoding and an
  explicitly replayed original ASR fixture: edit, label, compare, restore, reload,
  export and delete at 320/390/768/1440 widths. The review panel had no automated
  WCAG A/AA findings. This is not physical-device, Safari or human usability evidence.
- The exported history is hashed in the manifest. The actual Noteweld validator
  accepted the ZIP as two notes and fourteen retained files, including the history.
- Before deployment, an encrypted financial snapshot passed an isolated integrity
  and balance check. Public HTML/JavaScript/CSS matched the deployed release bytes;
  the new history endpoint rejected anonymous access and billing stayed closed.

During testing, reusing a local preview exhausted its real global trial quota.
The correct fix was a fresh isolated preview ledger, not a larger production
allowance. A stale status-text expectation was corrected too.

A Strix experiment did not produce a completed security assessment: its default
example model was unavailable on the subscription, and a compatible-model run
was stopped for excessive context overhead before finishing. It is not recorded
as a clean pentest. Targeted source review and executed security tests remain the
evidence for this release; broader testing is a separate controlled task.

## What this adds commercially

Basic editing and export are established features: [Mathpix documents editable
PDF conversion and export](https://mathpix.com/docs/snip/snip-with-pdfs), and
[Descript describes text-based media editing](https://www.descript.com/price).
Sources checked 19 October 2026. A history dropdown alone is not a defensible moat.

The product hypothesis is a useful combination: source-linked review, recoverable
edits, explicit processing costs and portable outputs that keep working in the
user's own tools. Its commercial advantage must be measured in correction time,
successful exports, return usage and willingness to pay. These engineering checks
do not establish market demand, superior recognition accuracy or profitability.

For a client, the case study exposes concrete delivery work: finding a privacy
defect, protecting state under failure, implementing a usable recovery flow and
verifying it across the API, database, browser and exported files.
