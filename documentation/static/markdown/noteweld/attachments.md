# Images, audio and video

> Current preview includes verified email signup/reset, managed image/audio/video attachments, account storage controls, the approved forest interface, full appearance customization, Markdown/Vim, connected notes, source imports and browser-session controls. Google/GitHub are configured; real owner consent/link acceptance remains separate. Billing is closed. Earlier release records describe dated milestones. Production source revision 1a94c99 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 1a94c99e3e3d037349ca720535f9d90171013911
Reviewed: 2026-11-06

## Add a file to a note

Choose **Attach media**, paste or drop one supported file into the editor attachment area. Save the note after insertion. Preview shows supported images and native audio/video players; codec support depends on the browser.

Images can be up to 10 MB and audio/video up to 25 MB per file. The free account allowance is 100 MB, with at most 500 attachments. Ready files live in private Cloudflare R2 storage with a recovery copy; account permissions control reads. Notes and media are not end-to-end encrypted.

## Keep or remove files

Open **Account → Manage storage and plan → Manage stored attachments** to download or remove a file. Removing only its Markdown reference keeps the reusable original in the library. Deleting the library file affects every note using it. Download anything important first.

Account JSON includes an attachment manifest, not the actual media bytes; download those separately. Archived/trashed notes and unfinished reservations still count. Shared availability can temporarily pause uploads without disclosing private accounting.

## Evidence

Actual public HTTPS checks passed original-byte storage/recovery, private access and foreign-account refusal, ranges, native image/audio/video playback, saved-note reload, invalid/oversize rejection and explicit deletion. This does not certify every browser codec or an unlimited hosting allowance.

[Storage and plan behavior](/manuals/noteweld/storage/) explains usage and over-limit recovery.
