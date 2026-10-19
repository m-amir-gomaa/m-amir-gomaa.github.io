# Building Noteweld: accounts to connected notes

Reviewed: 2026-10-19

## Start from the evidence

The current source is connected-notes handoff f6901ff (owner-access source record). Application code for that collection is `e1b8740`; earlier foundations are not descriptions of every current feature. Read the [usage guide](/manuals/noteweld/guide/) before following the implementation record.

## 1. Repair account and note persistence

The early registration work validated identity/password input, seeded accounts and preserved failed form input. The then-selected Neon HTTP adapter supported a batch operation rather than interactive transaction callbacks. Its mocked-transport checks were explicitly not evidence of database rollback.

The reliability foundation switched to standard `pg`/Drizzle transactions shared between local PostgreSQL and Neon. It added real seed rollback/races, per-account ownership, note revisions/idempotency, trash rules and label consistency. A new database and restricted runtime role were provisioned for the preview; the original Keep database was not migrated. The private provisioning values are deliberately absent from this library.

Recovery-key hashing, session revocation, export/deletion, bounded signup/storage, CSP and encrypted backups followed. Foundation code `4d79e53` passed actual source CI (owner-access source record). The original eight hosted browser journeys passed; a nonempty hosted snapshot was restored into an isolated local clone.

## 2. Add the editor without losing failure recovery

Code `cbd60fe` added CodeMirror Markdown, safe preview/split, optional Vim, save shortcuts, exact Markdown downloads and dirty-navigation guards. The public example used the actual editor without an account or upload. Narrow split panes were stacked after phone review. Failed saves, expired sessions and a deliberately failed editor load were exercised; the plain editor fallback remained usable.

The collection passed 33 unit/React, 13 real PostgreSQL and 11 hosted browser checks. [Editor record](/manuals/noteweld/editor-release/).

## 3. Connect notes by identity

Code `e1b8740` added stable ID links, explicit title ambiguity/missing states, linked-note pages, outgoing/backlink views and bounded graph navigation. A shared Markdown-aware scanner excluded code/HTML/existing links. Public example notes used no private API. Graph fitting and constant screen-size labels were corrected during visual review.

The collection passed 40 unit/React, 14 PostgreSQL and 14 hosted browser checks. [Connected release](/manuals/noteweld/connections-release/) and successful CI (owner-access source record).

## Successful check commands

These are the repository's actual release entrypoints. Database/browser commands need the isolated local PostgreSQL configuration described in the repository; never substitute an old production database URL.

```sh
npm ci
npm run lint
npm test
npm run test:database
npm run typecheck
npm run build
npm run test:browser
```

Installed Next.js documentation was read before relevant API/component changes. Modal deployment uses the reviewed source allowlist, pinned Node image, existing `noteweld-runtime` secret and isolated Neon role. The owner used a private staged source directory to exclude credentials. The deploy entrypoint is:

```sh
python -m modal deploy app.py
```

That command requires an authenticated Modal SDK environment and the established private runtime configuration. It does not create or approve accounts. Health is `/api/health`; encrypted snapshot/restore and incident steps are in [operations](/manuals/noteweld/operations/).

## Recorded failures and corrections

| Finding | Correction and acceptance |
|---|---|
| Early HTTP driver could not provide interactive transaction callbacks | Use standard PostgreSQL driver; test actual rollback, duplicate races and ownership on disposable databases |
| Original runtime dependencies had known advisories | Compatible Next/sharp/source-map-js patches; rerun build, database/browser checks and runtime audit |
| Narrow split editor and graph labels were difficult to read | Stack panes and fit the visible graph while retaining readable screen-size labels; inspect phone screenshots |
| Save conflict or failed network could lose confidence in a draft | Preserve the draft and expose conflict/retry; exercise deliberate failures and recovery in the real browser |

Development-only upstream advisories remain documented. In-tab history is not a durable revision archive. Pageweft/Sonaweft bundle imports and commercial checkout were not implemented by these releases.
