# Owner-operated private server

> Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision b4944d8 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision b4944d8c42d6399c0145d7ccd100418338d38924
Reviewed: 2026-11-09

## Separate installation

This source profile runs a separate compatible Noteweld instance. It does not provision a public server, add a third hosted upload destination or provide unlimited paid storage. Desktop/CLI clients select a compatible origin and pair to that server's account; existing accounts/files do not move automatically.

An administrator supplies PostgreSQL, a fixed HTTPS origin and private directories. Setup generates private configuration/independent keys. Migrations require an explicit target. Owner bootstrap is limited to an empty account table and does not mark email verified. Email, OAuth, DNS/TLS, public deployment and independent backup custody need separate configuration and acceptance. Billing stays disabled.

## Privacy and recovery

Attachments use authenticated AES-256-GCM envelopes tied to object identity, with primary/recovery copies. Reads authenticate before plaintext/ranges; a missing/corrupt primary can use an authenticated recovery file. Paths are fixed administrator configuration, not untrusted note URLs. Permissions, symlinks, hashes and sizes are checked.

The server holds keys: this is encryption at rest, not E2EE. Notes, PostgreSQL/WAL, source imports and temporary files still need encrypted OS storage. Two directories on one disk are not off-device disaster recovery. Protect and independently retain keys.

Encrypted database backup uses a separate key; restore requires an explicitly selected new empty database. Media bytes, live sessions/devices and pending proposals are excluded. Keep a coherent database/object copy plus independent keys; reconnect clients/Drive after restore. Wrong keys, damaged snapshots, the live target and nonempty targets are refused.

Actual local PostgreSQL bootstrap/owner creation/backup/restore, corruption/identity/range checks, media cleanup/accounting and a production-browser encrypted-media journey passed. No public customer server, reverse proxy, off-device backup or key rotation was provisioned/certified. Human/agent runbooks and example service/proxy files accompany the source.
