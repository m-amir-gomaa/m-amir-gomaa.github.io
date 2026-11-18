{
  "title": "Using Local Keep",
  "description": "How the browser-only notes and checklists app works and what stays on your device.",
  "date": "2026-11-18",
  "weight": 10,
  "project": "Local Keep",
  "category": "Guide",
  "download": "markdown/vanilla-keep/guide.md"
}

[Open the interactive demo](/demos/keep/index.html) or launch it directly from the portfolio card. Local Keep runs entirely in your browser with native DOM APIs and no backend service.

## Everyday workflow

- Create and edit notes and checklists, pin important items, assign colors and labels, and move items between Archive and Trash.
- Search titles, note bodies, checklist rows, and labels from the header search bar.
- Use keyboard navigation and the focus-contained edit dialog (`Escape` saves changes and returns focus to the triggering note).
- Export a versioned JSON backup (including archived and trashed items) before clearing browser storage or moving devices.
- Import a previous JSON export additively without overwriting existing note IDs.

## Storage boundary

Notes are saved in your browser's `localStorage` under this site's origin. Deleting from Archive moves notes to recoverable Trash; **Delete forever** and **Empty Trash** require confirmation. If stored JSON becomes malformed, Local Keep exposes a raw JSON recovery download instead of silently wiping existing notes.

Read [Source and implementation notes](/manuals/vanilla-keep/overview/) and [Build history](/manuals/vanilla-keep/build-history/) for architecture and verification details.
