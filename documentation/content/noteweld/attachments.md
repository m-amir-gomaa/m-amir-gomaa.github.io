{
  "title": "Images, audio and video",
  "description": "Attach, preview, retain, download and delete private note media.",
  "date": "2026-11-09",
  "weight": 180,
  "project": "Noteweld",
  "category": "Guide",
  "notice": "Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision f3ee71e is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/attachments.md"
}

## Add a file to a note

Choose **Upload to → Noteweld storage** or **Google Drive**, then attach, paste or drop one supported file into the editor attachment area. Connect Drive separately in Account first. The destination is remembered per account in this browser; failed uploads never silently switch providers. Save the note after insertion. Preview shows supported images and native audio/video players; codec support depends on the browser.

Images can be up to 10 MB and audio/video up to 25 MB per file. The free account allowance is 100 MB, with at most 500 attachments. Managed files live in private Cloudflare R2 storage with a recovery copy; Drive originals remain in the connected Google Drive and do not consume managed bytes; account permissions control reads. Notes and media are not end-to-end encrypted.

## Keep or remove files

Open **Account → Manage storage and plan → Manage stored attachments** to download or remove a file. Removing only its Markdown reference keeps the reusable original in the library. Deleting the library file affects every note using it. Download anything important first.

Account JSON includes an attachment manifest, not the actual media bytes; download those separately. Archived/trashed notes and unfinished reservations still count. Shared availability can temporarily pause uploads without disclosing private accounting.

## Evidence

Actual public HTTPS checks passed original-byte storage/recovery, private access and foreign-account refusal, ranges, native image/audio/video playback, saved-note reload, invalid/oversize rejection and explicit deletion. This does not certify every browser codec or an unlimited hosting allowance.

[Storage and plan behavior](/manuals/noteweld/storage/) explains usage and over-limit recovery.

[Drive uploads, retries and privacy](/manuals/noteweld/media-storage/) explains direct uploads and original retention.
