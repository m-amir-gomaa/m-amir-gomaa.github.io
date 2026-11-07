# Deployment and recovery

> Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 5fbecd6 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 5fbecd66116306dbcac278981d19a6752f5c50ef
Reviewed: 2026-11-07

## Current deployment and data

Noteweld runs its Next.js/Node application on Modal behind the public Cloudflare gateway. Neon PostgreSQL stores private account/note state. The preview has explicit account/note/source bounds and billing is closed. No shared wallet/login across the portfolio apps is implied.

## Account and preference persistence

Every private operation validates the server session and owner. Browser-session revocation and account session versions control continuing access. Google/GitHub entry is configured, with actual owner grant/link acceptance still pending; matching emails never automatically merge accounts. Verified email signup and mailed recovery are deployed and passed real inbox checks. Existing key/provider recovery is preserved; accounts never silently merge.

Guest appearance is browser-local. Saved account appearance is stored with the account and included in exports/backups. Local drafts are not a crash-proof offline database. The owner's private code map and learning material are not public app features.

## Backups and migrations

The November preferences release took a fresh encrypted snapshot before its additive migration. Account/note/provider-identity counts were preserved. Current snapshot format 7 includes appearance, billing, media metadata and Drive reference/grant state; media bytes have separate storage. The current Drive release uses schema 0012. Restored Drive grants require reconnection. Fresh encrypted pre/post snapshots restored with original durable data preserved. Pending inbox challenges and active browser sessions are excluded, and restored sessions are invalidated. Restore targets must be empty and isolated, and restored sessions must be invalidated. A local backup file alone does not prove off-device disaster recovery.

Owner deployment, credential and recovery commands remain in the access-controlled repository. Keep application public-origin settings and gateway forwarding behavior consistent during rollback. Never erase accounts, identities or quotas to make a deployment appear healthy.

## Verification scope

A successful build is distinct from browser review, database persistence and real provider consent. The deployed release passed ordinary email sign-in, note save, account appearance save/reload/export and temporary-account deletion; [the current release](/manuals/noteweld/ui-release/) gives the relevant counts and limits.

[Using Noteweld](/manuals/noteweld/guide/) explains normal operation; [public domain access](/manuals/noteweld/custom-domain/) explains the hosting boundary.

## Attachments and storage

Managed images/audio/video live in private R2 storage. [Storage and plans](/manuals/noteweld/storage/) explains the 100 MB free allowance, reserved/unfinished bytes, downloads, deletion and safe over-limit behavior. Paid access remains disabled; sandbox exercises are not real payments. Private operating budgets, credentials and owner code maps are omitted.


## Direct Drive upload release

Modal v23, application source a2af9a3, preserves the existing email/media providers and disabled checkout. Real browser image/audio/video uploads to the connected Google Drive passed byte integrity, private/ranged reads, saved-note reload, decoding/seeking, anonymous refusal and original retention. Only created fixtures were removed. Fresh encrypted pre/post snapshots restore into separate local 0012 clones, with every original durable row unchanged.
