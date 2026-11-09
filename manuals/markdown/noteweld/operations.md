# Deployment and recovery

> Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision f3ee71e is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision f3ee71eb002b7d8f8cbae191098be617c1e0622b
Reviewed: 2026-11-09

## Hosted service

Noteweld runs on Modal behind its fixed Cloudflare HTTPS gateway, with Neon PostgreSQL. The hosted web service uses schema 0015 / logical snapshot format 8. Verified email recovery is live; owner OAuth consent and commercial acceptance remain separate. Billing stays closed. R2 and selected Drive media retain their respective storage boundaries. Neither is end-to-end encrypted.

## Backups and recovery

Encrypted database snapshots include durable notes/history, identity and media metadata. They exclude browser sessions, pending inbox challenges, live device credentials/pairings and pending agent drafts. Restore requires an isolated empty target, invalidates sessions and requires device/Drive reconnection. Media bytes require separate recovery copies. A database snapshot alone cannot recover attachments.

Exact encrypted pre/post restores preserved original durable rows for hosted history, sync, proposals and finder releases. Local snapshots alone do not prove off-device disaster recovery. Credentials, private budgets and deployment commands remain in the owner repository.

## Separate private deployment

The [private-server profile](/manuals/noteweld/private-server/) uses fixed administrator paths and authenticated encrypted attachment/recovery files with server-held keys. Notes, PostgreSQL/WAL, sources and temporary files still require encrypted OS storage. It does not provision a public server, add a hosted upload destination or supply E2EE. [Storage](/manuals/noteweld/storage/) explains allowances and safe over-limit behavior.
