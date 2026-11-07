{
  "title": "Deployment and recovery",
  "description": "CPU hosting, isolated PostgreSQL, encrypted snapshots and incident recovery.",
  "date": "2026-11-07",
  "weight": 70,
  "project": "Noteweld",
  "category": "Operations",
  "notice": "Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 5fbecd6 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/operations.md"
}

## Current deployment and data

Noteweld runs its Next.js/Node application on Modal behind the public Cloudflare gateway. Neon PostgreSQL stores private account/note state. The preview has explicit account/note/source bounds and billing is closed. No shared wallet/login across the portfolio apps is implied.

## Account and preference persistence

Every private operation validates the server session and owner. Browser-session revocation and account session versions control continuing access. Google/GitHub entry is configured, with actual owner grant/link acceptance still pending; matching emails never automatically merge accounts. Verified-email signup and mailed resets are deployed; existing private recovery keys remain available.

Guest appearance is browser-local. Saved account appearance is stored with the account and included in exports/backups. Local drafts are not a crash-proof offline database. The owner's private code map and learning material are not public app features.

## Backups and migrations

The current schema is 0012 and encrypted snapshot format is 7, including appearance, managed media and Drive reference/grant state. Supported versions 1–7 restore into an empty current-schema target. Restored Drive grants require reconnection. Fresh encrypted hosted snapshots have been restored into separate local clones and original durable rows compared. Restore targets must be empty and isolated, and restored sessions must be invalidated. A local backup file alone does not prove off-device disaster recovery.

Owner deployment, credential and recovery commands remain in the access-controlled repository. Keep application public-origin settings and gateway forwarding behavior consistent during rollback. Never erase accounts, identities or quotas to make a deployment appear healthy.

## Verification scope

A successful build is distinct from browser review, database persistence and real provider consent. The deployed release passed ordinary email sign-in, note save, account appearance save/reload/export and temporary-account deletion; [the current release](/manuals/noteweld/ui-release/) gives the relevant counts and limits.

[Using Noteweld](/manuals/noteweld/guide/) explains normal operation; [public domain access](/manuals/noteweld/custom-domain/) explains the hosting boundary.
