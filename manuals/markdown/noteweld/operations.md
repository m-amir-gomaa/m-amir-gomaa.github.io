# Deployment and recovery

> Current preview includes the approved forest interface, full appearance customization, Markdown/Vim, connected notes, source imports and browser-session controls. Google/GitHub are configured; real owner consent/link acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 418fb83 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 418fb8367b1b311a68c1b8b7487874469ce55862
Reviewed: 2026-11-05

## Current deployment and data

Noteweld runs its Next.js/Node application on Modal behind the public Cloudflare gateway. Neon PostgreSQL stores private account/note state. The preview has explicit account/note/source bounds and billing is closed. No shared wallet/login across the portfolio apps is implied.

## Account and preference persistence

Every private operation validates the server session and owner. Browser-session revocation and account session versions control continuing access. Google/GitHub entry is configured, with actual owner grant/link acceptance still pending; matching emails never automatically merge accounts. Ordinary email/private-key recovery is deployed.

Guest appearance is browser-local. Saved account appearance is stored with the account and included in exports/backups. Local drafts are not a crash-proof offline database. The owner's private code map and learning material are not public app features.

## Backups and migrations

The November preferences release took a fresh encrypted snapshot before its additive migration. Account/note/provider-identity counts were preserved. Backup version 4 includes appearance data; earlier supported backup versions restore with defaults. Restore targets must be empty and isolated, and restored sessions must be invalidated. A local backup file alone does not prove off-device disaster recovery.

Owner deployment, credential and recovery commands remain in the access-controlled repository. Keep application public-origin settings and gateway forwarding behavior consistent during rollback. Never erase accounts, identities or quotas to make a deployment appear healthy.

## Verification scope

A successful build is distinct from browser review, database persistence and real provider consent. The deployed release passed ordinary email sign-in, note save, account appearance save/reload/export and temporary-account deletion; [the current release](/manuals/noteweld/ui-release/) gives the relevant counts and limits.

[Using Noteweld](/manuals/noteweld/guide/) explains normal operation; [public domain access](/manuals/noteweld/custom-domain/) explains the hosting boundary.
