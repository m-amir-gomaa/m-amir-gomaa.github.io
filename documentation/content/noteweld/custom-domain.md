{
  "title": "Custom domain and account access",
  "description": "Public hostname, secure gateway, existing-account access and rollback.",
  "date": "2026-11-12",
  "weight": 120,
  "project": "Noteweld",
  "category": "Operations",
  "notice": "Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/custom-domain.md"
}

## Current public address

Use **https://noteweld.amirgomaa.com/**. The account-free editor and graph are `/example` and `/example/graph`; private writing starts at `/auth/signin`. The application runs on Modal behind a fixed Cloudflare HTTPS gateway, with PostgreSQL on Neon. Vercel is not its active host.

Existing account data stays in the same independent database. Sign in again when changing hostnames; browser cookies and guest local storage do not automatically move between website origins. Matching email addresses do not merge accounts.

## Public origin and authentication

The deployed Auth.js base URL is the public Noteweld origin. The gateway preserves validated public Origin/Referer values and supplies the fixed public forwarded host while fetching the fixed Modal upstream. Foreign unsafe origins are rejected before forwarding; private responses stream without shared caching. The November release repaired the older internal-origin mapping that blocked account writes after OAuth activation.

Google/GitHub authorization redirects use the registered public callbacks, state/PKCE and Google nonce. Real owner consent/link acceptance remains a separate step. [Account controls](/manuals/noteweld/account-work/) explain deliberate linking and recovery.

## Recovery boundary

Preserve the public-origin contract when changing deployment versions: rolling back only the gateway to its old internal-origin mapping would break writes. Keep accounts, identities, backups and credentials intact. An additive UI/preferences rollback does not require deleting data.

[Using Noteweld](/manuals/noteweld/guide/) is the visitor starting point; [the interface release](/manuals/noteweld/ui-release/) records current verification.
