# Source and implementation notes

> This is the separate vanilla JavaScript implementation. It does not include Noteweld authentication, PostgreSQL, Markdown/Vim or connected-note features. The embedded published bundle and local source can differ; the guide calls out that boundary. This reviewed documentation snapshot includes local documentation edits; the source link shows the committed baseline.

Source baseline: https://github.com/m-amir-gomaa/Keep/blob/64471b8d5d37350230e19465e9a7d459a7cedc1f/README.md
Reviewed: 2026-10-16

A local-first notes and checklist app inspired by Google Keep. It uses native DOM APIs, localStorage, CSS, and Webpack, with no UI framework. Build and test dependencies are declared separately from the runtime CSS dependency.

[Published demo](https://m-amir-gomaa.github.io/Keep/) · [Source](https://github.com/m-amir-gomaa/Keep)

The published demo may not contain the current local changes. Browser and visual release review is still outstanding.

## Implemented behavior

- Create/edit text notes and checklists; add, remove, and complete checklist items.
- Pin, color, label, archive, trash, restore, and permanently delete notes.
- Search titles, bodies, labels, and checklist text using the notes-view search.
- Persist notes in this browser's localStorage.
- Export versioned JSON backups including archived/trashed notes and labels.
- Validate imports before writes; merge without replacing existing IDs; attempt rollback if a storage write fails.

The header search is a separate unfinished control; use the notes-view search. Reminders are a placeholder view, not an implemented scheduling feature. Imported labels currently require a refresh for sidebar navigation. Storage-quota failures outside import still need a complete user-facing recovery flow. Accessibility and mobile appearance are not yet verified in a real browser. These gaps are tracked in the workspace status file and questionnaires.

## Setup

Use Node.js 24 for the installed test tooling.

```sh
git clone https://github.com/m-amir-gomaa/Keep.git
cd Keep
npm ci
npm run dev
# Open http://localhost:3000
```

## Checks and build

```sh
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

`npm test` covers storage, backups, failed import writes, and checklist editing using jsdom. Browser checks use the single `playwright.config.ts` configuration and require Chromium plus a working browser/server environment. `vitest.config.mjs` limits unit checks to `tests/**/*.test.js`.

The production bundle is generated into `dist/`. The Pages workflow installs from the lockfile and builds it before upload. Generated assets are distinct from editable `src/` source; the portfolio intentionally keeps an embedded copy of the built demo.

## Source layout

- `src/index.js`: startup and DOM helpers.
- `src/header/`, `src/side/`: navigation and header.
- `src/main/notes/notes-store.js`: localStorage data operations.
- `src/main/notes/backup.js`: backup validation/import/export.
- `src/main/notes/checklist-editor.js`: native checklist editor.
- `src/main/notes/notes.js`: composer, card rendering, and notes search.
- Other `src/main/` modules: labels, archive, trash, and reminder placeholder.
- `tests/`: unit and browser checks.

## Limits and release work

Data is browser-specific; it does not sync to another device or account. Export is the current portability mechanism. Do not treat a passing unit suite as proof that all UI journeys work. Licensing and third-party asset attribution need review: the package currently declares ISC and no standalone license file is present; the old README's MIT claim was inconsistent and has been removed without choosing a new license.
