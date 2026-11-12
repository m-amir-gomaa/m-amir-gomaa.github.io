{
  "title": "Subscription availability",
  "description": "Planned storage subscriptions and the distinction between test and real payments.",
  "date": "2026-11-12",
  "weight": 200,
  "project": "Noteweld",
  "category": "Reference",
  "notice": "Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/subscription-status.md"
}

## Current availability

Paid storage and live checkout remain disabled. The current free preview includes 100 MB of managed media. Larger paid bundles are being prepared; final quotas and prices are not yet available to purchase.

Paymob is the selected payment integration. The earlier Paddle implementation is retained as an inactive fallback. Merchant signup does not prove currency approval, recurring payments or a completed purchase. The initial payment design uses manually renewed 30-day access rather than promising automatic renewal.

## Privacy before a paid offer

Managed attachment end-to-end encryption is planned, not implemented. Current R2 storage uses provider-managed encryption and the application can read bytes. The planned paid privacy offer must complete client-side encryption, recovery, export and device acceptance before launch. [Encryption scope](/manuals/noteweld/encryption/).

Actual provider checkout/webhook delivery, sustainable capacity, costs and retention still require acceptance. Test fixtures do not establish live billing. No customer should pay for an unavailable offer.

[Storage and plans](/manuals/noteweld/storage/) describes today's limits and safe over-limit behavior. Provider credentials and private operating budgets are excluded from this public edition.
