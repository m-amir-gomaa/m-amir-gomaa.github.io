# Deployment and recovery

> Current preview includes verified email signup/reset, managed image/audio/video attachments, account storage controls, the approved forest interface, full appearance customization, Markdown/Vim, connected notes, source imports and browser-session controls. Google/GitHub are configured; real owner consent/link acceptance remains separate. Billing is closed. Earlier release records describe dated milestones. Production source revision 1a94c99 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 1a94c99e3e3d037349ca720535f9d90171013911
Reviewed: 2026-11-06

## Current deployment and data

Noteweld runs its Next.js/Node application on Modal behind the public Cloudflare gateway. Neon PostgreSQL stores private account/note state. The preview has explicit account/note/source bounds and billing is closed. No shared wallet/login across the portfolio apps is implied.

## Account and preference persistence

Every private operation validates the server session and owner. Browser-session revocation and account session versions control continuing access. Google/GitHub entry is configured, with actual owner grant/link acceptance still pending; matching emails never automatically merge accounts. Verified email signup and mailed recovery are deployed and passed real inbox checks. Existing key/provider recovery is preserved; accounts never silently merge.

Guest appearance is browser-local. Saved account appearance is stored with the account and included in exports/backups. Local drafts are not a crash-proof offline database. The owner's private code map and learning material are not public app features.

## Backups and migrations

The November preferences release took a fresh encrypted snapshot before its additive migration. Account/note/provider-identity counts were preserved. Current snapshot format 6 includes appearance, billing and media metadata; media bytes have separate private storage copies. The email/storage releases use schema 0011. Fresh encrypted pre/post snapshots restored with original durable data preserved. Pending inbox challenges and active browser sessions are excluded, and restored sessions are invalidated. Restore targets must be empty and isolated, and restored sessions must be invalidated. A local backup file alone does not prove off-device disaster recovery.

Owner deployment, credential and recovery commands remain in the access-controlled repository. Keep application public-origin settings and gateway forwarding behavior consistent during rollback. Never erase accounts, identities or quotas to make a deployment appear healthy.

## Verification scope

A successful build is distinct from browser review, database persistence and real provider consent. The deployed release passed ordinary email sign-in, note save, account appearance save/reload/export and temporary-account deletion; [the current release](/manuals/noteweld/ui-release/) gives the relevant counts and limits.

[Using Noteweld](/manuals/noteweld/guide/) explains normal operation; [public domain access](/manuals/noteweld/custom-domain/) explains the hosting boundary.

## Attachments and storage

Managed images/audio/video live in private R2 storage. [Storage and plans](/manuals/noteweld/storage/) explains the 100 MB free allowance, reserved/unfinished bytes, downloads, deletion and safe over-limit behavior. Paid access remains disabled; sandbox exercises are not real payments. Private operating budgets, credentials and owner code maps are omitted.
