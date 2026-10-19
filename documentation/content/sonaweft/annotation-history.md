{
  "title": "Recoverable transcript review",
  "description": "Compare and restore saved corrections and speaker labels, retain hashed history exports, and understand deletion and expiry.",
  "date": "2026-10-19",
  "weight": 150,
  "project": "Sonaweft",
  "category": "Usage guide",
  "notice": "Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 4da0176 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.",
  "sourceurl": "",
  "download": "markdown/sonaweft/annotation-history.md"
}

Sonaweft keeps the original machine transcript unchanged. Corrections and speaker
labels are your annotations. Their latest 20 saved states now survive a reload or
recovered workspace, for as long as the recording itself remains available.

## Use saved history

1. Open a completed result with **Review & export**.
2. Expand **Saved edit history** and choose **Load saved history**.
3. Choose a version. Changed passages show the current saved text/label beside
   the selected version. Reading history never replaces the editor draft.
4. Save any unfinished correction or speaker label first. Select **Restore this
   version as a new save** and confirm the scope: every annotation in this result,
   rather than only the passage currently selected.
5. Restoration creates a new revision. Retained earlier saves and the original
   ASR remain available; another tab cannot silently overwrite a newer revision.

The comparison is plain inert text, including source material that resembles HTML.
The current save is marked explicitly. A result changed in another tab must be
reopened before restoring; failed requests preserve the saved result and draft.
Inputs are temporarily disabled during an annotation write to prevent lost typing.

## Portability and retention

The complete ZIP includes **annotation-history.json**, identified as
`sonaweft-annotations/v1` and covered by the export manifest's SHA-256 hashes.
It contains the retained snapshots, revision numbers, actions and available save
times. Restore records identify the revision restored. Imported legacy results
start with their real existing state; the app does not fabricate earlier edits
or an unknown last-save date. Noteweld retains this file with the original bundle;
it does not import the snapshots as separate notes or offer Sonaweft restoration.

History has the same source ownership and expiry as the result: normally 48 hours.
Deleting a recording removes its annotation rows and clears both current
corrections and speaker labels. Expiry cleanup also removes the snapshots.
Financial backups exclude transcript corrections, labels and their history.
Downloading a bundle is necessary if you want a longer-lived personal copy.
It is not an indefinite hosted archive or a financial/audit record.

Each result has a 256 KiB combined annotation-state limit and at most 20 retained
states. Very large exports still have to meet the destination's import limits;
Noteweld currently accepts ZIP files up to 4 MiB with its existing note/file quotas.

## Returning to a full-recording quote

After inspecting an interval, choose **Use the full recording**. The server
re-quotes that same upload; the app does not duplicate the file, calculate a
different tariff locally or start processing. The first-30-second sample becomes
eligible only if it still meets the existing mode, workspace, IP and global quotas.
Returning to the full recording never resets a consumed trial allowance.

## Implementation and verification

- `sonaweft_web/annotations.py` stores snapshots in the existing serialized
  SQLite writer. Annotation changes, snapshots and retention pruning share one
  transaction; a failed snapshot rolls back the current annotation too.
- History reads and restore require the owned, completed, unexpired result.
  Restore also requires CSRF verification, a current expected revision and the
  annotation rate limit. Boolean/malformed revisions are rejected.
- `ledger.py` integrates history with source deletion, cleanup and content-free
  financial snapshots. `app.py` registers only the three named store operations;
  the HTTP boundary does not expose a generic ledger operation endpoint.
- Real SQLite/HTTP tests cover recovery, migration from existing revisions,
  conflicts, retention, invalid input, cross-workspace isolation, deletion,
  rollback, backup exclusion and original-ASR-preserving hashed exports.
- DOM tests cover stale responses, draft safety, explicit restore, inert text and
  request failure. Real Chromium tests use local SQLite and media decoding with
  an explicitly replayed original demo ASR; they do not claim new transcription
  accuracy, provider payments or external OAuth acceptance.
- Browser review covers 320/390/768/1440 widths and automated WCAG A/AA checks on
  the review panel. Real people, physical devices and Safari remain separate
  evidence. Motion respects reduced-motion settings, and entry animation is
  restricted to the review header rather than a large composited editor surface.

For a repeatable browser run, start `scripts.preview_source:app` with a **fresh
private SONAWEFT_PREVIEW_DIR**. Reusing an old preview can correctly exhaust the
real trial quota; do not raise production allowances to make tests pass. Then run
`node scripts/source-review.browser.cjs` against its loopback URL. The fixture
accepts only the original public example recording and makes no model/payment call.

This improves recoverability and continuity of source review. It is not a claim
that version history is unique to Sonaweft, or that accuracy, demand and profitability
have been established. Billing activation remains a separate verified milestone.
