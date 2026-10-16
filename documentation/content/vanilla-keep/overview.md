{
  "title": "Source and implementation notes",
  "description": "LocalStorage behavior, setup, backup/import design and known release work.",
  "date": "2026-10-16",
  "weight": 30,
  "project": "Noteweld Local",
  "category": "Reference",
  "notice": "Separate browser-only JavaScript demo with JSON portability, responsive layouts and recovery checks. No accounts, payments, Markdown/Vim editor or graph. The established Keep URLs are preserved.",
  "sourceurl": "https://github.com/m-amir-gomaa/Keep/blob/6d0eb65e8709e002f5fc9663a656d2b23a75ea00/README.md",
  "download": "markdown/vanilla-keep/overview.md"
}

A free, browser-only notes and checklist demo built with native DOM APIs, CSS, localStorage and Webpack. It shares Noteweld’s product family and deliberately has no account, server or paid features. The existing Keep repository and public URL are preserved.

[Live demo](https://m-amir-gomaa.github.io/Keep/) · [Source](https://github.com/m-amir-gomaa/Keep) · [Portfolio and manuals](https://m-amir-gomaa.github.io/)

## Features

- Create and edit notes and checklists; pin, color, label, archive, trash and restore them.
- Search titles, bodies, labels and checklist text from either search control.
- Use keyboard navigation, named controls and a focus-contained edit dialog; Escape saves and returns focus.
- Export versioned JSON including archived/trashed notes and labels; validate and merge imports without replacing existing IDs.
- Preserve drafts when a storage write fails, display an error and allow retry.
- Recover raw stored JSON if existing notes are malformed, without silently resetting user data.
- Use a responsive layout with readable colored notes and reduced-motion support.

Delete from Archive moves to recoverable Trash. Delete forever and Empty Trash require confirmation. There is no automatic seven-day purge. Header Refresh reloads this browser view; the layout control switches compact display. Placeholder reminders/settings are omitted from the available controls.

## Run and verify

Use Node.js 24. Development serves only on loopback.

```sh
npm ci
npm run dev
# Open http://localhost:3000
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm audit
```

On NixOS, use an installed compatible Chromium via `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/run/current-system/sw/bin/chromium`. The lockfile pins tested dependencies. A small loopback-only Node server serves the generated demo; Webpack watches source changes, and you refresh the page to see them. It has no proxy, uploads or hot-reload service. Unit tests cover storage, backup validation/rollback and checklist editing. Browser tests exercise persistence, import/export, keyboard controls, failed saves, corrupt-data recovery and four viewport widths. Automated accessibility checks supplement keyboard and visual review; they do not certify every possible user journey.

The Pages workflow builds `dist/` from source. The portfolio embeds a copy of that production bundle; a release must update both and verify public pages.

## Code map

- `src/index.js`: boot, recovery and shared DOM helpers.
- `src/header/`, `src/side/`: search and keyboard navigation.
- `src/main/notes/notes-store.js`: persisted notes and labels.
- `src/main/notes/backup.js`: validated, additive JSON portability.
- `src/main/notes/checklist-editor.js`: checklist UI.
- `src/main/notes/notes.js`: composer, edit dialog, cards and filters.
- `src/main/notes/storage-feedback.js`: visible persistence failures.
- `src/main/archive/`, `src/main/trash/`: recovery and explicit deletion.
- `tests/`: unit and browser acceptance cases.

## Boundaries

This is a local demo, with no cloud sync, login, payments, reminder scheduler, Markdown/Vim editor or graph. Export important notes before clearing browser data. Different sites/origins have separate storage, while the portfolio and its embedded demo share an origin; avoid putting sensitive material in a showcase.

The package declares ISC; no standalone license file was present in the original repository. This release does not invent an MIT grant or change asset ownership. The active Noteweld mark is original SVG code, fonts come from the operating system, and the inactive legacy Keep image is no longer bundled. Full non-paid feature parity with the professional product remains a later scope.
