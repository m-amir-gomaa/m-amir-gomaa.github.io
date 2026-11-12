# Deployment and recovery

> Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision fe0ff516cabfebf5b602d704deb1eb4e969ec4d8
Reviewed: 2026-11-12

## Hosted service

Noteweld runs on Modal behind its fixed Cloudflare HTTPS gateway, with Neon PostgreSQL. The hosted web service uses schema 0015 / logical snapshot format 8. Verified email recovery is live; real owner Google/GitHub sign-in has passed; commercial acceptance remains separate. Billing stays closed. R2 and selected Drive media retain their respective storage boundaries. Neither is end-to-end encrypted.

## Backups and recovery

Encrypted database snapshots include durable notes/history, identity and media metadata. They exclude browser sessions, pending inbox challenges, live device credentials/pairings and pending agent drafts. Restore requires an isolated empty target, invalidates sessions and requires device/Drive reconnection. Media bytes require separate recovery copies. A database snapshot alone cannot recover attachments.

Exact encrypted pre/post restores preserved original durable rows for hosted history, sync, proposals and finder releases. Local snapshots alone do not prove off-device disaster recovery. Credentials, private budgets and deployment commands remain in the owner repository.

## Separate private deployment

The [private-server profile](/manuals/noteweld/private-server/) uses fixed administrator paths and authenticated encrypted attachment/recovery files with server-held keys. Notes, PostgreSQL/WAL, sources and temporary files still require encrypted OS storage. It does not provision a public server, add a hosted upload destination or supply E2EE. [Storage](/manuals/noteweld/storage/) explains allowances and safe over-limit behavior.
