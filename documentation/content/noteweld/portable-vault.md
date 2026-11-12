{
  "title": "Markdown and Obsidian vaults",
  "description": "Preview ZIP imports and export notes with actual files.",
  "date": "2026-11-12",
  "weight": 250,
  "project": "Noteweld",
  "category": "Guide",
  "notice": "Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/portable-vault.md"
}

## Import a folder

In **Source bundles**, choose **Markdown or Obsidian vault ZIP**. ZIP only intended material, removing credentials/private configuration first. Validate, inspect and confirm. Preview creates no notes; application is atomic and idempotent within the limits.

Original archives remain separate/downloadable. Editable copies retain frontmatter/source text and map supported references to owned notes/files. Missing/ambiguous targets are not guessed. Configuration/plugins remain inert; this is not an Obsidian plugin runtime.

## Keep a readable copy

**Account → Keep a copy → Download Markdown vault** collects current notes/checklists, available stored attachments, retained sources and original ZIPs, with relative links and a state/hash manifest. Unsaved drafts, full past-version history, arbitrary remote media and credentials are excluded. A missing/corrupt/disconnected stored file fails collection explicitly; restore access and retry. Account JSON is separate metadata.

Imports are bounded to 4 MiB ZIP, 1,000 entries, 32 MiB expanded, 250 notes, 2 MiB note text and 8 MiB retained sources per account. Export is bounded to 192 MiB/4,096 files, transfer admission and a two-minute stream deadline. Hosted import/export exercised original bytes, R2 media and export hashes, including reimport without resurrecting deliberately deleted editable notes. [Local sync](/manuals/noteweld/local-sync/) is separate.
