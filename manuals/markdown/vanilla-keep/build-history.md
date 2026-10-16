# Building the vanilla Keep demo

Reviewed: 2026-10-16

## Keep the two implementations separate

This is the vanilla JavaScript/localStorage application, not Noteweld. Native DOM modules, Webpack, checklists, labels, colors, pin/archive/trash and browser storage form its implementation. Existing source history includes `f6bc24ce` for labels/search/filter/demo notes and `64471b8d` for an unused import cleanup.

The local workspace also contains reviewed uncommitted reliability, test and dependency-cleanup changes. Those changes were preserved; the documentation marks the README as a working-copy edition rather than pretending the exact committed baseline contains them.

## Local reliability work

The current source notes describe versioned JSON backups, validation-before-write, ID-preserving merge and attempted rollback after failed import writes. Tests use jsdom for storage/backup/checklist boundaries. They are not evidence of every visible browser journey. The duplicate/unfinished header search, placeholder reminders, storage-error recovery and mobile/accessibility release work are still called out in the [source overview](/manuals/vanilla-keep/overview/).

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

There is no claim that the vanilla demo already contains Noteweld's Markdown/Vim/graph or account features. A separate parity/reliability release remains necessary.
