{
  "title": "Using Noteweld",
  "description": "A practical route through the editor, private notes, links and graph.",
  "date": "2026-10-16",
  "weight": 1,
  "project": "Noteweld",
  "category": "Start here",
  "download": "markdown/noteweld/guide.md"
}

## Try it without an account

[Open the public editor](https://m-amir-gomaa--noteweld-web-app.us-east.modal.run/example) to try Markdown, preview and optional Vim. The scratchpad lives in the tab; this example does not save it to a private account. Download anything you want to keep before leaving.

[Explore the public graph](https://m-amir-gomaa--noteweld-web-app.us-east.modal.run/example/graph) for an original six-note sample. It does not read private notes or start a processing job.

## Create a private workspace

Open the [hosted workspace](https://m-amir-gomaa--noteweld-web-app.us-east.modal.run/), register using the displayed requirements and keep the private recovery key securely. Recovery is based on your passphrase/key; no email reset service is connected. Keep the recovery key out of messages and screenshots.

Create notes or checklists, set labels/colors, pin useful items and use search. Save a note before relying on it being persisted. Archives and trash are distinct; permanently deleted content cannot be recovered through the normal UI. Account export and deletion are available.

## Write and preview

Use standard editing, Markdown preview or split view. Optional Vim uses the editor's Vim mode; it does not embed a shell or run arbitrary Neovim plugins. A plain-text fallback remains available if the rich editor fails to load.

Formatting, find/replace, in-tab undo/redo and explicit save controls are described in the [editor manual](/manuals/noteweld/editor/). Markdown downloads preserve the note text. Raw HTML and automatically loaded remote images are restricted in preview.

A save failure is not success: keep the draft, read the error and retry. Conflicting revisions require deliberate resolution. In-tab history and dirty-navigation prompts are useful safeguards, not crash-proof or offline storage.

## Connect the work

Insert a stable link using the note picker, or use a title link such as `[[Project plan]]`. Stable links retain the note's identity when its title changes. Duplicate titles are ambiguous; missing or unavailable targets are shown explicitly instead of silently choosing another note.

Open a note's outgoing references and backlinks, or use the graph's title/label/archive filters and focused neighborhood. The graph also has a keyboard-accessible HTML list. For supported syntax, rename/deletion behavior and all controls, read [connections](/manuals/noteweld/connections/).

## Bounds and recovery

The free preview is capped at 100 accounts and, per account, 250 notes, 50 labels and 2 MiB of note text. Graph drawing is bounded to 500 nodes/1,000 edges, with at most 256 scanned references per note. These are configured limits, not proof of capacity at every load.

Do not treat this as end-to-end encrypted, collaborative or continuously synchronized between tabs. There is no paid checkout, durable revision archive or Pageweft/Sonaweft importer yet. Export important work and report unclear behavior to [support](mailto:mo.gomaa.formal@gmail.com).
