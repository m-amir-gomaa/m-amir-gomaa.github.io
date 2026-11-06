# Technical overview

> Current preview includes verified email signup/reset, managed image/audio/video attachments, account storage controls, the approved forest interface, full appearance customization, Markdown/Vim, connected notes, source imports and browser-session controls. Google/GitHub are configured; real owner consent/link acceptance remains separate. Billing is closed. Earlier release records describe dated milestones. Production source revision 1a94c99 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 1a94c99e3e3d037349ca720535f9d90171013911
Reviewed: 2026-11-06

**Current release, 6 November:** private image/audio/video attachments are live
on Modal v17, with private R2 primary/recovery storage, an account library and
native playback. [Media release evidence](/manuals/noteweld/attachments/). The approved
forest UI, N logo and appearance controls remain live. [Release evidence](/manuals/noteweld/ui-release/) and
codebase walkthrough (source repository requires access). Earlier dated releases below
are historical checkpoints.

22 October guest release: the home page now introduces the workspace before
sign-in, with direct account-free editor/graph entry, a [two-minute guide](https://noteweld.amirgomaa.com/help),
and clear email-account/recovery navigation. The welcome and account surfaces use
the reviewed cream/forest FigCraft direction. Existing account data, save
semantics and provider gates remain intact. Local checks pass 55 unit/UI and
21 Chromium cases (two optional provider-configuration checks skipped), including
four-width public-page accessibility and no private note requests during guest
navigation. Deployment evidence belongs in workspace milestone 017.

Original application material is reserved under the repository notice (source repository requires access), subject to separately licensed dependencies/assets and any previously granted permissions. Production source review is by arrangement; the public manuals and hosted editor/graph examples remain available.

[Public address and existing-account access](/manuals/noteweld/custom-domain/)


The source-bundle and account collection is documented in [release evidence](/manuals/noteweld/source-handoff-release/). Google/GitHub registrations were configured on 5 November 2026 and their public-domain authorization redirects pass; real owner consent/link/unlink acceptance remains pending. [Current OAuth status](/manuals/noteweld/connected-signin/) and [setup/account behavior](/manuals/noteweld/account-work/). The approved UI/theme/logo is now implemented; see the November release below.
A private notes/checklist preview built with Next.js 16.3.8, React 19, Auth.js and PostgreSQL/Drizzle. This repository retains its original `keep-nextjs` GitHub identity. The old Vercel deployment is a historical version; it is not updated by this release.

## Implemented

- Real account/seed transactions; normalized unique email and label identities; exact passphrases, with 15-character minimum and bcrypt's 72-byte UTF-8 limit.
- Cookie authentication, hashed one-time recovery keys, key rotation, session revocation on recovery and account deletion. No email verification/reset provider is connected.
- Notes, checklists, pin/colour/archive/trash, labels and search; shared navigation updates and narrow-screen drawer.
- Stable wiki links, an owned connection index, outgoing/backlink lists and authenticated linked-note pages, including archive and explicit missing/ambiguous targets.
- A bounded note graph with label/title filters, neighbourhood focus, fit/zoom/pan and equivalent keyboard/list navigation. [Explore the account-free graph](https://noteweld.amirgomaa.com/example/graph).
- Markdown source editing with CodeMirror, optional Vim keys, undo/redo, in-note find/replace, formatting, safe GFM preview and split view. A simple textarea remains available. [Try the account-free editor](https://noteweld.amirgomaa.com/example).
- Exact `.md` downloads, explicit save shortcuts and retained undo when switching standard/Vim keys or write/preview/split views. Saved-version reload starts fresh history; server revisions protect against concurrent changes rather than storing a permanent revision archive.
- Explicit saves, preserved failed drafts, bounded requests, idempotent creation and revision conflicts instead of silent overwrites. Trash permits restoration or confirmed permanent deletion.
- Snapshot-based empty trash, account JSON export, confirmed passphrase-protected account deletion, no-cache private responses and nonce-based production script CSP.
- Bounded free preview: 100 accounts, 50 registrations/day, 250 notes, 50 labels and 2 MiB note text/account. PostgreSQL-backed admission limits and one scale-to-zero CPU web container.

- Validated Pageweft/Sonaweft ZIP import with preview, all-or-nothing note/source creation, stable source links, hashes, duplicate/retry policy and separate original/corrected/AI labels. Read [source imports](/manuals/noteweld/source-bundles/).
- Browser-session inventory/revocation, sign out all devices, recent-proof provider linking/unlink protection, and private API support IDs. Provider registrations are configured; real owner consent/link acceptance is still pending.

**Not implemented:** bare hashtag parsing, global Vim navigation, durable revision history, paid access, reminders, offline sync, collaboration and end-to-end encryption. Those follow this connected-notes milestone. This is not a production SLA or a place for irreplaceable/sensitive material.

**Local billing preparation, 6 November:** sandbox-only Paddle server routes,
signed webhook processing, ownership/idempotency checks and reconciliation are
prepared behind a closed default. They do not enable paid access or media uploads.
Migration `0009` is now deployed with the media release. Live subscriptions stay
off and actual Paddle sandbox acceptance remains pending. Backup format 6
supersedes the earlier format 5. See [billing preparation and remaining acceptance](/manuals/noteweld/subscription-status/)
before running these operations or configuring a sandbox.

**Hosted media release, 6 November:** private image/audio/video attachments,
native playback, byte reservations, an account media library and primary/recovery
object storage passed real public HTTPS acceptance. Both R2 buckets are private.
That release used migration `0010` and backup format 6. Previous user rows are
preserved, and pre/post-release snapshots restored into isolated clones. Read [media setup and evidence boundaries](/manuals/noteweld/attachments/).

**Email-signup deployment, 6 November:** Modal v18 (`e6833b2`) enables inbox-first
signup, managed bot checks, verified-email password resets and signed-IP admission,
alongside media. Existing users/recovery are preserved. Production uses additive
`0011`; pre/post encrypted backups restored exactly into isolated clones. Real
Resend delivery, owner-assisted real widgets, inbox signup/reset, link replay
refusal, old-session/password rejection and replacement login pass. The temporary
account was deleted; the final restored snapshot matches original durable rows.
Read the [email setup and evidence boundary](/manuals/noteweld/email-recovery/).

**Storage and plan release, 6 November:** Modal v19 (`e4f641d`) adds account usage,
charged upload/removal breakdown, attachment download/delete and safe over-limit
behavior. CI, independent local UI review, deployed screen/metadata and pre/post
encrypted restore pass. Free remains 100 MB; 5 GB Plus is local-sandbox only until
live billing acceptance. Original data is preserved.
Read [storage behavior and operational limits](/manuals/noteweld/storage/).

Read the [connected-notes guide](/manuals/noteweld/connections/) and [current release evidence](/manuals/noteweld/connections-release/). Graph bounds and title-vs-ID semantics are explicit; original note source remains the stored/exported format with no schema migration.

The `/example` scratchpad needs no account and never uploads its content. In that demo Ctrl/Cmd-S and `:w` download Markdown; in the private workspace they save to the account. Drafts and undo live in the current tab. Read the [editor guide](/manuals/noteweld/editor/) and [current editor release evidence](/manuals/noteweld/editor-release/); [foundation evidence](/manuals/noteweld/foundation-release/) is the 15 October baseline.

## Isolated local development

Node 24 and PostgreSQL 17 are required. `flake.lock` pins the Nix development inputs; it does not change NixOS or graphics drivers.

```sh
nix develop
npm ci
node scripts/local-db.mjs start
node scripts/isolated.mjs migrate
node scripts/isolated.mjs dev
# http://localhost:3107
```

The helper creates a private loopback-only PostgreSQL cluster in ignored `.local/`, using SCRAM for TCP and a private owner-only socket. It refuses unmarked existing database directories. Tests never fall back to the application's `.env.local` or existing hosted database. Use `node scripts/local-db.mjs stop` when finished. CI instead supplies a disposable loopback `NOTEWELD_TEST_DATABASE_URL`.

For a separate ordinary installation, copy `.env.example` into `.env.local`, fill in your **own new development database**, migrate with `npx drizzle-kit migrate`, then `npm run dev`. Never point tests at production. Missing DATABASE_URL is an error, not a dummy fallback. Hosted Neon uses the standard `pg` driver and verified TLS, not the old HTTP batch adapter.

## Verification

```sh
npm test                         # Unit and React/jsdom boundary checks
npm run lint
npm run typecheck
npm run test:database             # Real transactions, quotas, ownership, recovery, migration rollback and restore
node scripts/isolated.mjs build   # Production build, disposable DB config
npm run test:browser              # Real cookie/PostgreSQL journey + explicit failure simulations
```

Browser binaries are separate: inside `nix develop` the shell selects Chromium. Else install the pinned Playwright browser with `npx playwright install --with-deps chromium` on a supported distribution, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to a tested system Chromium. Chromium's sandbox stays enabled. `NOTEWELD_BROWSER_URL` explicitly targets an existing preview; absent that variable, Playwright starts its own isolated port 3107 server and refuses to reuse an unrelated server. Synthetic accounts are deleted after the full journey. Failed tests may leave synthetic accounts in the disposable database.

Tests do not capture authentication screenshots, traces or video. Optional `NOTEWELD_SCREENSHOTS=.local/browser` captures only the authenticated note workspace at four widths. Mocked failures are labelled separately from actual database and full-session checks. See [release evidence](/manuals/noteweld/foundation-release/).

## Hosting and operations

`app.py` builds from an explicit source allowlist on a digest-pinned official Node image, using `npm ci`. It never uploads `.env`, `.local` or the whole workspace. Only Next's standalone runtime, static assets and owner tooling run in the cloud. `requirements-operations.txt` pins the Modal/crypto SDKs. See [operations](/manuals/noteweld/operations/) for isolated roles, deployment, backup/restore and rollback.

`src/app/api/` owns runtime validation/auth boundaries. `src/components/WorkspaceContext.tsx` owns label/draft coordination; `useNotes` ignores stale requests. `src/db/migrations/` holds forward migrations, including legacy-collision protection. Existing source/working changes were preserved before this foundation was implemented; there is no automatic merge/delete of conflicting legacy accounts.

The point-in-time runtime audit is clean after the 16.3.8 security patches. Development-only glob/esbuild advisories and their exact boundaries are recorded in [release evidence](/manuals/noteweld/foundation-release/); the full dependency graph is not claimed vulnerability-free.

## November UI and appearance release

The approved forest interface and joined-note N logo are implemented. Appearance
supports six presets, light/dark/system, 29 independent colors, separate mode
palettes, text size, spacing, reading fonts, motion/border preferences, validated
portable themes and reset. Guests save locally; signed-in preferences save to the
account and are included in exports/backups. Start with the codebase guide (source repository requires access).

[Release evidence and limits](/manuals/noteweld/ui-release/) records deployment, tests,
backup/migration and the separate real OAuth-consent acceptance step.
