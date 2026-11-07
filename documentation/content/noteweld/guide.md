{
  "title": "Using Noteweld",
  "description": "A practical route through the editor, private notes, links and graph.",
  "date": "2026-11-07",
  "weight": 1,
  "project": "Noteweld",
  "category": "Start here",
  "download": "markdown/noteweld/guide.md"
}

## Try it without an account

[Open the public editor](https://noteweld.amirgomaa.com/example) to try Markdown, preview and optional Vim. The scratchpad lives in the tab; this example does not save it to a private account. Download anything you want to keep before leaving.

[Explore the public graph](https://noteweld.amirgomaa.com/example/graph) for an original six-note sample. It does not read private notes or start a processing job.

## Create a private workspace

Open the [sign-in page](https://noteweld.amirgomaa.com/auth/signin), or start email signup. Follow the verification email before choosing your name and passphrase. Verified email accounts can request mailed password resets. Existing recovery keys remain available; keep them out of messages and screenshots.

Create notes or checklists, set labels/colors, pin useful items and use search. Save a note before relying on it being persisted. Archives and trash are distinct; permanently deleted content cannot be recovered through the normal UI. Account export and deletion are available.

## Write and preview

Use standard editing, Markdown preview or split view. Optional Vim uses the editor's Vim mode; it does not embed a shell or run arbitrary Neovim plugins. A plain-text fallback remains available if the rich editor fails to load.

Formatting, find/replace, in-tab undo/redo and explicit save controls are described in the [editor manual](/manuals/noteweld/editor/). Markdown downloads preserve the note text. Raw HTML and automatically loaded remote images are restricted in preview.

A save failure is not success: keep the draft, read the error and retry. Conflicting revisions require deliberate resolution. In-tab history and dirty-navigation prompts are useful safeguards, not crash-proof or offline storage.

## Connect the work

Insert a stable link using the note picker, or use a title link such as `[[Project plan]]`. Stable links retain the note's identity when its title changes. Duplicate titles are ambiguous; missing or unavailable targets are shown explicitly instead of silently choosing another note.

Open a note's outgoing references and backlinks, or use the graph's title/label/archive filters and focused neighborhood. The graph also has a keyboard-accessible HTML list. For supported syntax, rename/deletion behavior and all controls, read [connections](/manuals/noteweld/connections/).

## Attach images, audio and video

In a signed-in note, choose **Upload to → Noteweld storage** or **Google Drive**, then attach, paste or drop a supported file. Connect Drive separately in Account first. Save the note after insertion. Drive files use your Google storage; managed uploads use the free 100 MB Noteweld allowance. The choice is remembered for your account in this browser, and a failed upload never silently changes providers.

Images can be up to 10 MB; audio/video up to 25 MB. The [media and storage guide](/manuals/noteweld/media-storage/) covers existing-file selection, retries, original retention and privacy.

## Bounds and recovery

The free preview is capped at 100 accounts and, per account, 250 notes, 50 labels and 2 MiB of note text. Graph drawing is bounded to 500 nodes/1,000 edges, with at most 256 scanned references per note. These are configured limits, not proof of capacity at every load.

Do not treat this as end-to-end encrypted, collaborative or continuously synchronized between tabs. There is no paid checkout or durable revision archive. Pageweft/Sonaweft ZIP imports are available with explicit archive/text/traffic limits. Export important work and report unclear behavior to [support](mailto:mo.gomaa.formal@gmail.com).

## Retain sources and manage sessions

Choose **Source bundles** to preview a supported ZIP, check its categories/hashes and confirm an all-or-nothing import. Original/corrected/AI notes retain their labels; source archives stay separate from edits. Download an original backup. Deleting a retained archive preserves notes but breaks its source-file links. Follow [the source guide](/manuals/noteweld/source-bundles/) for limits and duplicate/retry behavior.

In Account, review browser sessions, sign out a session or every device, and confirm recent ownership before sensitive account actions. Google and GitHub are configured. To connect a provider to an existing workspace, sign in to that workspace first, then choose **Account → Sessions and connected sign-in → Provider identities** and confirm ownership if asked. When the five-minute confirmation expires, choosing a security action takes you to the confirmation field. Enter your current passphrase or select your private recovery key, choose **Confirm ownership**, then choose the provider action again. Matching emails do not automatically merge accounts. Authorization redirects pass; real owner consent/link acceptance remains pending. Mailed password resets remain unconfigured.

## Make the workspace comfortable

Open **Appearance** in the sidebar. Choose Forest, Paper, Slate, Graphite, Ocean or Rose, then light/dark/system mode. The color-group menu exposes 29 independent roles for surfaces/text, controls/feedback, editor/syntax and graph. Light and dark retain separate overrides. Each role has a color picker, hex field and Reset.

Adjust text size, spacing, reading font, reduced motion and stronger borders. Preview changes affect the actual app; choose **Save preferences** to keep them. Signed-in choices save to your account. [Guest appearance](https://noteweld.amirgomaa.com/appearance) saves only in that browser. Note colors and editor keys remain separate.

Use Export/Import theme JSON for a portable copy. Invalid theme files are rejected. Low-contrast choices show a warning; the optional contrast repair changes text colors only when requested. Resetting is a preview until saved. Unsaved account changes prompt before navigation.

Read [the interface release](/manuals/noteweld/ui-release/) for verified behavior and limitations.
