{
  "title": "Storage usage and plans",
  "description": "Usage, reserved bytes, file management, planned Plus and safe downgrade.",
  "date": "2026-11-07",
  "weight": 190,
  "project": "Noteweld",
  "category": "Guide",
  "notice": "Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 5fbecd6 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/storage.md"
}

## Find your usage

Open [Account → Manage storage and plan](https://noteweld.amirgomaa.com/dashboard/account#storage). The panel shows saved files, unfinished uploads, pending removals and remaining space. Free includes 100 MB and at most 500 attachments; images can be up to 10 MB, audio/video up to 25 MB each.

Reservations and unfinished removals count until released. Archived/trashed notes still count. Expand the library to download ready files or remove an unneeded file/reservation. Removal warns that any note using the file will show an unavailable attachment. Refresh retries a failed read; stale displayed values are labeled.

## More storage and changes of plan

Plus is planned at $5/month for 5 GB. Subscriptions are not available yet; no payment or production upgrade is implied by a local sandbox test.

When files exceed the current allowance, new uploads pause. Notes, existing-file downloads and deletion remain available. Plan expiry does not automatically delete saved files. Account JSON contains a manifest, so download media separately for a complete copy.

## Verification

Unit and actual isolated database tests cover charged reservations, current-plan admission, local sandbox Plus, expiry and retained read/delete access. Browser checks cover local download/removal/reclaimed quota, failure/retry, themes and separately mocked full/unavailable states. Independent review approved the local interface. The deployed account screen and quota metadata passed a documented temporary operator-session check; its session was removed. Encrypted pre/post snapshots restored with original durable data unchanged. Real commercial billing remains a separate gate.

[Using Noteweld](/manuals/noteweld/guide/) is the normal starting point. Private operating budgets, credentials and internal admission configuration are omitted.

## Google Drive and private servers

Choose Google Drive in a note to upload originals directly to your own Drive allowance; those bytes do not consume managed storage, while references still count toward the combined attachment limit. Customer-controlled storage servers and user-held-key end-to-end encryption are not implemented. [Media/storage choices](/manuals/noteweld/media-storage/).
