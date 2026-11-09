# Recover saved versions

> Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 5868624 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 586862428db130ed1589aca604631a587d33f8aa
Reviewed: 2026-11-09

## Compare and restore

Open a saved note, choose **History**, select a version and compare it with the current content. Download its Markdown or confirm **Restore this version**. Restore creates a new revision; newer concurrent edits are refused rather than overwritten.

Free recovery retains up to ten revisions per note for fourteen days, within 8 MiB compressed history per account. Older entries can expire sooner under pressure. Existing notes begin capturing history on their next edit; past versions are not fabricated. Permanent deletion removes history. Separately deleted media, disconnected Drive grants and unsaved text cannot be recreated. Vault exports contain current content, not full history.

Snapshots include text, checklist and note properties. Standalone label-setting changes are not note revisions. Restore a trashed note from Trash first. Keep independent exports.

The deployed release exercised real PostgreSQL ownership, conflict/retention/corruption/rollback checks, browser comparisons/downloads/restore and actual public password/cookie restoration. Encrypted pre/post restores preserved original durable data. This is bounded recovery, not unlimited backup or crash-proof drafts.
