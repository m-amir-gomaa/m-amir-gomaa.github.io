{
  "title": "Source handoff and account release",
  "description": "The import/session milestone, database migration, restore and hosted browser evidence.",
  "date": "2026-10-19",
  "weight": 140,
  "project": "Noteweld",
  "category": "Release record",
  "notice": "Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current bounded preview includes Markdown/Vim, connected notes, source-bundle imports and browser-session controls. Real Google/GitHub consent remains unverified and provider buttons stay disabled; billing is closed. Earlier release records describe their own milestones. Production source revision f612e01 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.",
  "sourceurl": "",
  "download": "markdown/noteweld/source-handoff-release.md"
}

*Original record: Source handoff and accounts — 19 October 2026.*

## Implemented collection

The preserved `feat/account-signin` foundation continues on `feat/source-handoff-accounts`. Private source checkpoint precedes changes. Original Keep credential files/database remain untouched. See [source bundles](/manuals/noteweld/source-bundles/) for the actual import sequence and limits, [accounts](/manuals/noteweld/account-work/) for provider setup, and the dated foundation/editor/connections records for earlier evidence.

Pageweft/Sonaweft ZIPs now have a previewed, validated, transactionally atomic import. Raw archives are immutable, account-scoped and SHA256/CRC checked; paths, expansion, encoding, references, counts and capacity fail closed. Retained asset links use authenticated endpoints; imported note links use stable IDs. Original extraction, user corrections and AI-derived text remain labelled. Idempotent retries and deliberate duplicates have distinct semantics. Source deletion preserves editable notes; account deletion cascades through sources and sessions. The source traffic allowance is explicit and conservative, not a provider bill ceiling.

Accounts now expose browser-session inventory, individual/global revocation, recent-proof provider linking, stable-subject collision protection and safe unlinking. Proofs use real encrypted Auth.js cookies, bound to owner/session/version/purpose for five minutes. Every session is checked against a durable active record and current account epoch. Revoked rows cannot be reopened; the 20-session cap retains the new session. Deep return routes survive sign-in, signup and recovery. No email-based account merging, shared wallet, raw provider token storage or email reset is introduced. Public social sign-in remains disabled until actual consent testing.

API diagnostics emit generated support IDs, allowlisted route templates, methods, statuses, timings and exception classes; they exclude content, query strings, raw IPs and secret values. This does not replace provider request/security logs or a delivered external alert.

## Verification

- `npm test`: 55 unit/React/crypto checks passed, including real encrypted proof tamper/expiry/session/purpose tests and hostile ZIP/hash/reference cases. Tests with substituted auth/database boundaries identify those substitutions.
- `npm run test:database`: 32 distinct real PostgreSQL checks passed (12 reliability, 20 identity/migration/backup/source/session/budget checks). Includes concurrent duplicates and byte admissions, all-or-nothing capacity failure, ownership, last-method refusal, stale-session denial and exact original archive restoration.
- Lint, production build and typecheck passed. `npm audit --omit=dev` previously reported zero runtime advisories for this locked dependency set. Existing development-only braces and nested esbuild advisories remain documented in RELEASE.md; no forced major downgrade or public development server was introduced.
- Actual generated Pageweft plain/Obsidian/LLM exports and a Sonaweft bundle passed format/file/hash validation. These original demonstration exports do not prove arbitrary books or transcription quality.
- A real encrypted pre-migration hosted snapshot was decrypted only in memory and restored into a newly migrated loopback clone; exact saved data matched (the hosted snapshot contained zero accounts/notes/labels). Separate populated restore tests preserve provider identities, original ZIP bytes/hash/import metadata and all content/timestamps. Active browser sessions are excluded and all restored user epochs increment, including legacy snapshots.
- Migrations 0005–0007 applied only to the existing isolated Noteweld preview database. Before/after live counts stayed zero accounts/notes/labels. Restricted runtime CRUD on the three new tables was verified; database/schema/role creation remains denied. Original Keep database identity differs and was preserved.

## Browser and hosted acceptance

All 21 local Chromium checks passed with synthetic provider settings on the production build (42.1 seconds); a provider-disabled run passed 19 with two provider checks skipped. Actual state/PKCE/OIDC request construction and invalid callback refusal passed. The source flow has no WCAG A/AA axe findings in the checked state and fits 320/390/768/1440 widths. Phone/desktop screenshots were reviewed; stale “no notes saved” copy after success was corrected and the affected source flow is rechecked below. Local Chromium is not physical-phone/Safari evidence. Synthetic Google/GitHub authorization construction and invalid-state refusal do not establish real provider consent.

## Useful failures and remedies

The local PostgreSQL instance had stopped between sessions; restart the marked loopback test instance rather than pointing tests at any cloud database. A first imported-note link used an obsolete query route; the browser test caught it, and the link now uses the existing `noteHref` helper. A browser run started during build finalization could not find the standalone server; rerun after the build exits successfully. Old two-day admission cleanup would erase monthly counters, so retention is now 35 days. Legacy restore now increments epochs even when old snapshots omit that field. None of these fixes relaxes runtime admission, CSP, ownership or provider protection.

## Remaining external acceptance

Real Google/GitHub registrations/consent, owner-selected global provider spend controls and delivered alert destination, independent off-device backup/key custody, representative user/load/quality measurements and physical-device/Safari review remain separate evidence. Noteweld is a free bounded preview with billing closed. Pageweft/Sonaweft Paddle sandbox/live/payout gates are separate; no purchase, financial entity or notification was deleted/recreated for this collection.

### Hosted acceptance completed

Source `54330b7` deployed through the existing Modal app in 101.9 seconds, retaining its runtime/edge secrets, volumes and custom-domain gateway. At **https://noteweld.amirgomaa.com**, the actual browser/API journey passed sign-in/deep return, a fresh original Pageweft ZIP preview/import, byte-identical original download, anonymous access refusal, session inventory, imported-note navigation, source deletion without deleting notes, disabled unconfigured provider buttons and removal of only this run's synthetic account. Old cookies then received 401. Health was200 with billing closed; support IDs were present.

A new encrypted hosted version 3 snapshot captured the synthetic account, four notes, three labels/associations and one original source archive. It decrypted only in memory and restored exactly into a new loopback clone, preserving every saved field/byte/hash and incrementing the restored user epoch. Browser sessions did not restore. No source plaintext or credential value was written to a log. The final source-flow regression passed after the success-copy correction; the full 21-test browser run preceded that copy-only change. No actual OAuth consent or purchase was performed.
