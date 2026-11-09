{
  "title": "Using Noteweld",
  "description": "Write, find and connect notes, keep a portable vault, and choose web or local editing.",
  "date": "2026-11-09",
  "weight": 1,
  "project": "Noteweld",
  "category": "Start here",
  "download": "markdown/noteweld/guide.md"
}

## Try it without an account

[Open the public editor](https://noteweld.amirgomaa.com/example) to try Markdown, preview and optional Vim. The scratchpad lives in the tab; this example does not save it to a private account. Download anything you want to keep before leaving.

[Explore the public graph](https://noteweld.amirgomaa.com/example/graph) for an original six-note sample. It does not read private notes or start a processing job.

## Create a private workspace

Open the [sign-in page](https://noteweld.amirgomaa.com/auth/signin), or [create an email account](https://noteweld.amirgomaa.com/auth/signup). Complete the security check, follow the email link, then choose your name and passphrase. No account is created until you submit that confirmation form. Email links expire after 30 minutes and work once.

Verified email/password accounts can [request a password-reset email](https://noteweld.amirgomaa.com/auth/forgot). Completing a reset invalidates previous sessions and any old private recovery key. Older unverified accounts retain their existing key/provider recovery; email ownership is not used to silently take over or merge an existing account. Keep any private recovery key out of messages and screenshots.

Create notes or checklists, set labels/colors, pin useful items and use search. Save a note before relying on it being persisted. Archives and trash are distinct; permanently deleted content cannot be recovered through the normal UI. Account export and deletion are available.

## Write and preview

Use standard editing, Markdown preview or split view. Optional Vim uses the editor's Vim mode; it does not embed a shell or run arbitrary Neovim plugins. A plain-text fallback remains available if the rich editor fails to load.

Formatting, find/replace, in-tab undo/redo and explicit save controls are described in the [editor manual](/manuals/noteweld/editor/). Markdown downloads preserve the note text. Raw HTML and automatically loaded remote images are restricted in preview.

A save failure is not success: keep the draft, read the error and retry. Conflicting revisions require deliberate resolution. In-tab history and dirty-navigation prompts are useful safeguards, not crash-proof or offline storage.

Use **Find & commands** in the header to search saved titles, passages, checklists and labels. Outside editable fields, **Ctrl/Cmd+K** opens it; arrows and Enter choose a result, and Escape returns to where you started. Its blank, source and decision templates start an editable draft without replacing existing unsaved work. [Keyboard and capture guide](/manuals/noteweld/keyboard/).

## Add files and manage storage

In a note, choose **Upload to → Noteweld storage** or **Google Drive**, then attach, paste or drop a supported file into the attachment area. Connect Google Drive separately in Account first. The choice is remembered for your account in this browser; a failed upload never silently changes providers. Images, audio and video use the note's normal Markdown references. Save the note after insertion. Preview shows supported images and native audio/video players. Browser codec support still applies.

Open [Account → Manage storage and plan](https://noteweld.amirgomaa.com/dashboard/account#storage) to see saved-file bytes, unfinished uploads, pending removals and remaining space. The free preview includes **100 MB of managed storage** and up to **500 combined managed/Drive attachments**; images can be up to **10 MB**, audio/video up to **25 MB** per file. Archived/trashed notes and unfinished reservations still count.

Expand **Manage stored attachments** to download or remove a file. Removing an attachment affects every note using it; download a copy first if needed. Removing only its Markdown reference keeps the reusable library file. For notes and actual file bytes together, use **Account → Keep a copy → Download Markdown vault**. Account JSON remains a separate metadata export.

Plus is planned at **$5/month for 5 GB**; subscriptions are not available yet. When an account exceeds its current allowance, new uploads pause while existing files, downloads, deletion and note editing remain available. Plan expiry does not automatically delete saved files. [Storage and plan details](/manuals/noteweld/storage/).

Drive originals upload directly from the browser to your connected Google account and use your Google allowance. Noteweld verifies and serves selected media. Removing a Drive reference preserves its original; deleting a managed attachment reclaims its Noteweld storage. Keep the note open to retry an upload. See [media/storage choices](/manuals/noteweld/media-storage/) for retry state, existing-file selection and privacy. A separate owner-operated server profile is available in the source; it is not a third upload destination on this website. See [private-server boundaries](/manuals/noteweld/private-server/). Neither deployment offers end-to-end encryption.

## Connect the work

Insert a stable link using the note picker, or use a title link such as `[[Project plan]]`. Stable links retain the note's identity when its title changes. Duplicate titles are ambiguous; missing or unavailable targets are shown explicitly instead of silently choosing another note.

Open a note's outgoing references and backlinks, or use the graph's title/label/archive filters and focused neighborhood. The graph also has a keyboard-accessible HTML list. For supported syntax, rename/deletion behavior and all controls, read [connections](/manuals/noteweld/connections/).

## Bounds and recovery

The free preview is capped at 100 accounts and, per account, 250 notes, 50 labels and 2 MiB of note text. Graph drawing is bounded to 500 nodes/1,000 edges, with at most 256 scanned references per note. These are configured limits, not proof of capacity at every load.

Open a saved note's **History** to compare, download or deliberately restore a saved version. Free recovery retains up to ten revisions per note for fourteen days, within 8 MiB of compressed history per account; older versions can expire sooner under pressure. It cannot recreate unsaved text or a deleted media file. A vault export contains current content, not the full history archive. [Recovery guide](/manuals/noteweld/history/).

There is no paid checkout, collaborative editing or continuous synchronization between browser tabs. Pageweft/Sonaweft ZIP imports have explicit archive/text/traffic limits. Export important work and report unclear behavior to [support](mailto:mo.gomaa.formal@gmail.com).

## Retain sources and manage sessions

Choose **Source bundles** to preview a supported ZIP, check its categories/hashes and confirm an all-or-nothing import. Original/corrected/AI notes retain their labels; source archives stay separate from edits. Download an original backup. Deleting a retained archive preserves notes but breaks its source-file links. Follow [the source guide](/manuals/noteweld/source-bundles/) for limits and duplicate/retry behavior.

For an existing Obsidian or Markdown folder, choose **Markdown or Obsidian vault ZIP**, inspect the preview and confirm. Configuration and plugins remain inert. **Download Markdown vault** collects current notes, available stored files and retained sources into an ordinary folder structure with relative links. A missing or disconnected stored file makes collection fail explicitly so you can restore access and retry. [Portable vault guide](/manuals/noteweld/portable-vault/).

In Account, review browser sessions, sign out a session or every device, and confirm recent ownership before sensitive account actions. Google and GitHub are configured. To connect a provider to an existing workspace, sign in to that workspace first, then choose **Account → Sessions and connected sign-in → Provider identities** and confirm ownership if asked. When the five-minute confirmation expires, choosing a security action takes you to the confirmation field. Enter your current passphrase or select your private recovery key, choose **Confirm ownership**, then choose the provider action again. Matching emails do not automatically merge accounts. Authorization redirects pass; real owner consent/link acceptance remains pending. [Email signup and reset](/manuals/noteweld/email-recovery/) have their separate real inbox acceptance.

## Use a local folder or desktop

The optional source-distributed CLI connects a local Markdown folder through an explicit browser approval in **Account → Devices & agents**. Preview a transfer, then confirm that exact preview. Concurrent edits preserve both versions for your decision. Local file deletion never silently deletes the cloud note. Revoking a device stops its further access; already downloaded files remain on that computer. [Local-vault sync guide](/manuals/noteweld/local-sync/).

The **unsigned Linux desktop alpha** adds local search, connections, media playback and your actual terminal editor, defaulting to Neovim in a split or expanded pane. Local work needs no account and can be done offline. Cloud sync remains an optional preview/confirmation step. Start with a copy of an important vault. macOS/Windows packages, signing and automatic updates are not qualified, and this is not a public one-click installer. [Desktop setup and daily use](/manuals/noteweld/desktop/).

## Let an agent prepare work

An explicitly paired Agent can read the account's notes and submit Markdown proposals. It cannot accept its own changes. Open **Devices & agents → Review agent proposals**, inspect the comparison, then accept or reject. Changed or revoked access refuses stale approvals. The optional DeepTutor MCP bridge uses this same boundary; installing it does not pair an account or change your model. [Agent access](/manuals/noteweld/agent-access/).

For Anki, the optional CLI previews source-grounded text-card drafts, checks their source hash/quote and exports an import file only after confirmation. Set up the defined note type once and review the import in Anki. Stable IDs let later imports update the same cards while retaining scheduling. This is a text-only handoff; it does not create reviews, run FSRS itself or import into your deck automatically. [Anki handoff](/manuals/noteweld/anki/).

## Make the workspace comfortable

Open **Appearance** in the sidebar. Choose Forest, Paper, Slate, Graphite, Ocean or Rose, then light/dark/system mode. The color-group menu exposes 29 independent roles for surfaces/text, controls/feedback, editor/syntax and graph. Light and dark retain separate overrides. Each role has a color picker, hex field and Reset.

Adjust text size, spacing, reading font, reduced motion and stronger borders. Preview changes affect the actual app; choose **Save preferences** to keep them. Signed-in choices save to your account. [Guest appearance](https://noteweld.amirgomaa.com/appearance) saves only in that browser. Note colors and editor keys remain separate.

Use Export/Import theme JSON for a portable copy. Invalid theme files are rejected. Low-contrast choices show a warning; the optional contrast repair changes text colors only when requested. Resetting is a preview until saved. Unsaved account changes prompt before navigation.

Read [the interface release](/manuals/noteweld/ui-release/) for verified behavior and limitations.
