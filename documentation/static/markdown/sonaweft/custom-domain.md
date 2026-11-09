# Custom domain and account access

> Current public preview supports verified email-first signup, mailed resets for verified addresses and existing private-key recovery. Processing may be temporarily unavailable; completed examples remain open. Dedicated Google/GitHub registration and genuine consent remain open. Paid checkout is closed. Dated release records describe their own checkpoints. Production source revision 423e5a1 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 423e5a1239645814df9d4081543e611b3b8306ae
Reviewed: 2026-11-09

Public address: **https://sonaweft.amirgomaa.com/**. A dedicated Cloudflare Workers Free gateway fronts the preserved Modal origin; processing, files and ledger remain on Modal. No paid provider plan, live checkout or new customer credentials are activated by this route. Reproducible shared code/config/tests are in the workspace at `freelance/workflow/cloudflare-edge/`.

The independent `sonaweft-edge` Modal secret authenticates short-lived client-IP assertions for existing quotas. Direct origin requests retain their previous proxy fallback. The gateway rejects unsafe foreign Origins before mapping its own Origin for upstream CSRF checks; CSRF tokens and host-only Secure/HttpOnly cookies remain enforced. Request/response bodies stream without document/audio buffering at the gateway. Cache mode is explicitly `no-store`; never use TTL zero as a cache-disable switch, because Cloudflare can strip session cookies when forcing caching.

To continue an existing workspace, save its private recovery key at the old origin and restore it at the new address. Cookies do not transfer automatically; both hosts access the same ledger. Keep recovery keys private. Existing paused Paddle notification and approval workflow remain unchanged until provider acceptance; billing stays closed.

Application uploads remain limited to 64 MiB plus bounded multipart overhead, below Cloudflare's 100 MB request limit. Free Workers quotas and existing Modal usage still apply. DNS/TLS, actual multipart inspection/quotes, secure sessions and rejected cross-origin/tokenless writes are independently tested; a consumed free-sample allowance is preserved, not reset to obtain a green test. The original public completed example remains available for listening/export. Full new ASR/payment evidence is distinct from routing acceptance.

The shared milestone records exact live evidence and rollback. Roll back only this gateway/version or its route and restore old links; preserve the app's volumes, permanent secrets, portfolio records and DNSSEC.
