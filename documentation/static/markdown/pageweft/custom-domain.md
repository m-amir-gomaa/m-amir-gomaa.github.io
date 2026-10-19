# Custom domain and account access

> Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 990e994 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 990e99478f468f891370471f66d9b40272ea5680
Reviewed: 2026-10-19

Public address: **https://pageweft.amirgomaa.com/**. A fixed-origin Cloudflare Workers Free gateway connects to the preserved Modal endpoint; Modal still runs the app and processing. No Team upgrade or live payment activation was made. The shared reproducible gateway source/config/tests and rollout guide are in the workspace at `freelance/workflow/cloudflare-edge/`.

Session/payment secrets, volumes, existing balances and processing limits remain unchanged. A separate `pageweft-edge` Modal secret authenticates time-bounded client-IP assertions from this Worker for rate quotas. Direct Modal requests retain the existing last-proxy-hop fallback. The web boundary still verifies CSRF tokens; the gateway rejects unsafe cross-origin requests before mapping its own trusted Origin to the upstream origin. Uploads/responses stream, cache mode is explicitly `no-store`, and cookies stay host-only Secure/HttpOnly. Initial live verification caught and corrected a TTL-zero cache override that stripped cookies; do not reintroduce `cf.cacheTtl: 0` as a cache-disable switch.

Existing browser sessions do not move automatically: at the old preview address, save the private recovery key; at the new host, use Restore workspace. This reconnects the same ledger account without a data migration. Never share recovery keys in support messages. Canonical pages, robots and sitemap now point at the public domain. Old endpoints stay available for recovery and rollback.

Cloudflare's 100 MB zone request limit remains; Pageweft's stricter 64 MiB application limit and multipart bounds still apply. No large-file bypass is claimed. Free Workers quotas and Modal's existing billable usage remain separate. Actual seller/domain approval, checkout and notification migration are separate gates: the existing paused Paddle destination and closed billing are preserved.

The shared milestone records actual HTTP/browser evidence, limits and rollback. Reverting this additive backend support does not delete account data. Roll back an individual gateway version or its route and restore prior links, preserving DNSSEC, the portfolio and all volumes.
