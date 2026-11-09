# Images, audio, video and storage

> Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision f3ee71e is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision f3ee71eb002b7d8f8cbae191098be617c1e0622b
Reviewed: 2026-11-09

## Choose where new files go

In a signed-in note, use **Upload to → Noteweld storage** or **Google Drive**. Then use **Attach media**, paste an image or drop a file. Connect Google Drive separately under **Account → Google Drive** first. The destination is remembered for your account in this browser; it is not synchronized between devices.

Drive originals upload directly from your browser to your connected Google Drive. Noteweld verifies their type and bytes and inserts private references. Save the note. Use the **Google Drive** panel and **Choose or upload in Drive** for files already in Drive.

## Limits and recovery

The free preview includes 100 MB of managed Noteweld media. Drive originals use your Google allowance and do not consume managed bytes. Images may be up to 10 MB; supported audio/video up to 25 MB. The account has a combined 500-attachment limit, with up to 100 references per note. Delivery has additional traffic/concurrency safeguards. Paid plans and checkout remain disabled.

A failed Drive upload never falls back to Noteweld storage. Keep the note open and use the destination-specific retry. Reloading or closing the editor clears in-memory retry state. If an upload completed but insertion failed, its original may already exist in Drive: select it through the Drive panel rather than uploading another copy.

Removing a Drive reference leaves the original in Google Drive; removing a managed attachment reclaims its Noteweld storage and makes it unavailable in notes using it. Download individual originals or use Account → Keep a copy → Download Markdown vault to collect current notes and actual available files together. Externally changed Drive files require explicit replacement confirmation.

## Privacy and unfinished features

These options are private to the signed-in account, but are not end-to-end encrypted. The application verifies and serves the selected bytes. Drive access uses a separate, narrow file grant; Google sign-in alone does not connect storage. [Local-vault sync](/manuals/noteweld/local-sync/) uses explicit previews and conflict decisions. The separately qualified [Linux desktop alpha](/manuals/noteweld/desktop/) adds offline files and actual Neovim; it does not execute Obsidian plugins. A source-distributed [private-server profile](/manuals/noteweld/private-server/) supplies a separate installation with administrator-held encryption keys, not a third hosted destination or E2EE.

[Return to Using Noteweld](/manuals/noteweld/guide/).
