{
  "title": "Source and implementation notes",
  "description": "LocalStorage behavior, backup/import design, code map, and verification boundaries.",
  "date": "2026-11-18",
  "weight": 20,
  "project": "Local Keep",
  "category": "Reference",
  "notice": "Standalone browser-only JavaScript application with JSON portability, responsive layouts, and storage-failure recovery.",
  "download": "markdown/vanilla-keep/overview.md"
}

A free, browser-only notes and checklist application built with native DOM APIs, CSS, `localStorage`, and Webpack. It deliberately has no account, server, or cloud dependency.

[Open interactive demo](/demos/keep/index.html) · [Back to portfolio](/)

## Features

- Create and edit notes and checklists; pin, color, label, archive, trash, and restore them.
- Search titles, bodies, labels, and checklist text from the header search control.
- Use keyboard navigation, named controls, and a focus-contained edit dialog (`Escape` saves and returns focus).
- Export versioned JSON including archived/trashed notes and labels; validate and merge imports without replacing existing IDs.
- Preserve drafts when a storage write fails, display an error, and allow retry.
- Recover raw stored JSON if existing notes are malformed, without silently resetting user data.
- Responsive layout with readable colored notes and reduced-motion support.

Delete from Archive moves to recoverable Trash. Delete forever and Empty Trash require confirmation. There is no automatic seven-day purge. Header Refresh reloads this browser view; the layout control switches compact display. Placeholder reminders and inactive settings controls are omitted.

## Code map

- `src/index.js`: boot, recovery, and shared DOM helpers.
- `src/header/`, `src/side/`: search and keyboard navigation.
- `src/main/notes/notes-store.js`: persisted notes and labels.
- `src/main/notes/backup.js`: validated, additive JSON portability.
- `src/main/notes/checklist-editor.js`: checklist UI.
- `src/main/notes/notes.js`: composer, edit dialog, cards, and filters.
- `src/main/notes/storage-feedback.js`: visible persistence failures.
- `src/main/archive/`, `src/main/trash/`: recovery and explicit deletion.
- `tests/`: unit and browser acceptance cases.

## Boundaries

This is a local browser application with no cloud sync or user accounts. Export important notes before clearing browser data. Avoid placing sensitive material in a shared browser showcase.
