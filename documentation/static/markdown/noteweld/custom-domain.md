# Custom domain and account access

> Current bounded preview includes Markdown/Vim, connected notes, source-bundle imports and browser-session controls. Real Google/GitHub consent remains unverified and provider buttons stay disabled; billing is closed. Earlier release records describe their own milestones. Production source revision f612e01 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision f612e0130637ecf2d1cfbd2d1d1b5c1643013d42
Reviewed: 2026-10-19

Public address: **https://noteweld.amirgomaa.com/**. The account-free editor and graph are `/example` and `/example/graph`; private writing starts at `/auth/signin`. A dedicated Cloudflare Workers Free gateway fronts the existing Modal deployment. The same isolated Neon database, restricted role, AUTH_SECRET, BACKUP_KEY and backup jobs remain in use. Sign in again with existing credentials at the new host; browser cookies do not transfer between hostnames. No database migration or account merge is required.

This release branches from production **5ac512f**, adding authenticated client-IP forwarding and the independent `noteweld-edge` Modal secret. It deliberately excludes the unfinished account/social-provider branch. Shared source/config/tests are maintained in `freelance/workflow/cloudflare-edge/` in the workspace. Each app has its own fixed upstream, secret and host-only secure cookies. Direct Modal access preserves its previous proxy fallback. CSRF/origin checks and application quotas remain enforced: foreign unsafe requests fail at the gateway, and same-origin requests are mapped to the current internal Auth.js origin. Bodies and private responses stream without caching.

The current credentials workflow retains its existing internal AUTH_URL, while the gateway translates only its own trusted Origin and upstream redirects. Before a future Google/GitHub release, configure and test the **public** base URL, provider callback URLs, policy ownership and gateway origin handling together; the present credentials-only mapping is not OAuth approval or a verified external consent flow. Billing remains closed.

The deployment uses the production-only source allowlist and existing pinned Node image. Unit/boundary, lint, type and actual cloud production-build checks pass; the shared milestone records the complete real hosted browser/database journey and its exact result. Preserve the distinction between a generated build, simulated failure checks and real persistence/recovery. Synthetic browser accounts are deleted by the journeys.

Rollback an individual gateway version/route and restore prior links; the original Modal origin remains available. Preserve database contents, permanent secrets, backups, apex/www DNS records, GitHub verification and DNSSEC. Additive IP verification does not change account identities or notes.
