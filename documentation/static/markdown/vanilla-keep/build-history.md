# Building the vanilla Keep demo

Reviewed: 2026-10-19

## Keep the two implementations separate

This is the vanilla JavaScript/localStorage application, not Noteweld. Native DOM modules, Webpack, checklists, labels, colors, pin/archive/trash and browser storage form its implementation. Existing source history includes `f6bc24ce` for labels/search/filter/demo notes and `64471b8d` for an unused import cleanup.

The 16 October reliability release incorporates the preserved local changes and intentional tracked-dependency cleanup. Source commit `a03b0ed1` publishes the browser reliability work; the portfolio refresh copies its production bundle. Earlier statements below describe the baseline they reviewed.

## Local reliability work

The current source notes describe versioned JSON backups, validation-before-write, ID-preserving merge and attempted rollback after failed import writes. Tests use jsdom for storage/backup/checklist boundaries. They are not evidence of every visible browser journey. That earlier review identified unfinished header search, placeholder reminders, storage-error recovery and mobile/accessibility defects. The release below addresses those confirmed defects.

## Build and copy the demo

The documented development entrypoints use Node 24:

```sh
npm ci
npm test
npm run build
```

The generated `dist/` is separate from editable `src/`. The portfolio keeps its own copied bundle under `demos/keep/`. The established copy operation is:

```sh
rsync -a --delete ../Keep/dist/ demos/keep/
```

Run that last command from the portfolio only after reviewing the source build. It replaces only the copied demo directory. It is not a command to run against a source or home directory. Its presence in the manual does not assert that unpublished local changes have been copied into the currently served demo.

## Actual portfolio acceptance

The portfolio browser checks exercised opening/closing the copied demo, iframe unloading and focus restoration at phone/desktop sizes. Later portfolio DOM checks preserved those paths while adding Pageweft previews and the Hugo library. This establishes the embedding/interaction boundary, not every internal storage/import path of a new vanilla release.

## Failures and limits retained instead of hidden

- A browser-local store is not cloud persistence; different origins/profiles/devices do not share notes.
- A README/source update can be ahead of the copied distribution; keep build/copy/release evidence separate.
- Import rollback is not proof that every storage-quota failure elsewhere has a good recovery flow.
- Earlier license wording was inconsistent with the package declaration; no new license was silently selected.

There is no claim that the vanilla demo already contains Noteweld's Markdown/Vim/graph or account features. Broader non-paid feature parity remains a separate future collection.


## Reliability release — 16 October 2026

The release connects both search controls, refreshes imported labels immediately and gives icon controls accessible names. Native edit dialogs contain focus and return it on Escape. Colored notes use readable text, narrow layouts fit 320/390/768/1440-pixel viewports, and keyboard users can navigate the sidebar and composer.

Quota failures retain open drafts and expose retry. Invalid saved JSON is preserved for raw recovery instead of being overwritten with samples. A regression test caught Archive deleting directly; it now moves to Trash, with confirmation before permanent deletion. Another caught the expanded sidebar covering Archive controls after navigation; main-content spacing now follows the actual sidebar state.

The original development dependencies produced audit findings. Compatible updates reduced them, but a remaining unpatched braces dependency came from webpack-dev-server. A small Node loopback preview now serves only explicitly allowed generated assets while Webpack watches source files. It provides manual refresh instead of hot reload. The final audit reported zero vulnerabilities; no forced downgrade or advisory suppression was used.

Checks: 14 unit tests, 22 Chromium journeys and a production build passed. Automated WCAG A/AA checks passed for seeded phone/desktop screens. Tracked node_modules and generated dist files were removed from source tracking; the existing intentional dependency removals were included, and CI builds from the lockfile with Node 24. Existing local browser-data keys and public URLs remain compatible.

The record does not claim an automatic backup service, cloud synchronization, a reminder scheduler or full professional-product parity.
