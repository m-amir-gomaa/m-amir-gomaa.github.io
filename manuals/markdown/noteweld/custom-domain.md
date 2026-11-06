# Custom domain and account access

> Current preview includes verified email signup/reset, managed image/audio/video attachments, account storage controls, the approved forest interface, full appearance customization, Markdown/Vim, connected notes, source imports and browser-session controls. Google/GitHub are configured; real owner consent/link acceptance remains separate. Billing is closed. Earlier release records describe dated milestones. Production source revision 1a94c99 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 1a94c99e3e3d037349ca720535f9d90171013911
Reviewed: 2026-11-06

## Current public address

Use **https://noteweld.amirgomaa.com/**. The account-free editor and graph are `/example` and `/example/graph`; private writing starts at `/auth/signin`. The application runs on Modal behind a fixed Cloudflare HTTPS gateway, with PostgreSQL on Neon. Vercel is not its active host.

Existing account data stays in the same independent database. Sign in again when changing hostnames; browser cookies and guest local storage do not automatically move between website origins. Matching email addresses do not merge accounts.

## Public origin and authentication

The deployed Auth.js base URL is the public Noteweld origin. The gateway preserves validated public Origin/Referer values and supplies the fixed public forwarded host while fetching the fixed Modal upstream. Foreign unsafe origins are rejected before forwarding; private responses stream without shared caching. The November release repaired the older internal-origin mapping that blocked account writes after OAuth activation.

Google/GitHub authorization redirects use the registered public callbacks, state/PKCE and Google nonce. Real owner consent/link acceptance remains a separate step. [Account controls](/manuals/noteweld/account-work/) explain deliberate linking and recovery.

## Recovery boundary

Preserve the public-origin contract when changing deployment versions: rolling back only the gateway to its old internal-origin mapping would break writes. Keep accounts, identities, backups and credentials intact. An additive UI/preferences rollback does not require deleting data.

[Using Noteweld](/manuals/noteweld/guide/) is the visitor starting point; [the interface release](/manuals/noteweld/ui-release/) records current verification.
