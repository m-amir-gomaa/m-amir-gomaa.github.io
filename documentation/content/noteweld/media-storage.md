{
  "title": "Images, audio, video and storage",
  "description": "Compare managed cloud, Google Drive, local files and a self-hosted server, with current encryption boundaries.",
  "date": "2026-11-12",
  "weight": 210,
  "project": "Noteweld",
  "category": "Usage guide",
  "notice": "Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/media-storage.md"
}

## Choose the storage you want

| Option | Cost and setup | Privacy today |
| --- | --- | --- |
| Managed Noteweld cloud | Free bounded preview; paid managed bundles are being prepared | Private R2 storage, provider-managed encryption at rest; the application can read files |
| Your Google Drive | No Noteweld storage subscription; your Google allowance and any Google charges apply | Google encrypts files at rest/in transit; this integration adds no client-key E2EE |
| Local desktop vault | No cloud subscription; you manage disk, setup and backups | Ordinary local files; protect the device and disk yourself |
| Separate private server | Intended free self-host software; you pay any infrastructure costs and configure/maintain it | Current attachment encryption uses server-held keys, not E2EE |

Paid managed storage is intended to add convenience and **client-key end-to-end encryption for supported attachments**. That encryption is not implemented or available to buy today. Google Drive is not accurately described as unencrypted. The paid offer's final quotas and prices are still being qualified; the earlier 5 GB/$5 proposal is no longer a final offer. See [the encryption plan and limits](/manuals/noteweld/encryption/).

Local and self-hosted operation mean the user handles setup, updates, security, storage and backups. Current desktop/server profiles are source-distributed alphas; a public open-source release and its license are separate work. They are not a provisioned or managed free server.

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
