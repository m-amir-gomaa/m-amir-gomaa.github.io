# Payment activation checklist

> Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 6321c59 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. Earlier Lemon Squeezy material is historical; Paddle is the selected integration and checkout remains closed. External prices require fresh verification.

Source baseline: Owner-access repository, revision 6321c592f9cfbaa9cb758f85e63f140803087685
Reviewed: 2026-10-19

Updated 18 October 2026. **Paddle Billing is the selected provider. The integration is deployed; customer checkout remains disabled.** This supersedes the former Lemon Squeezy activation instructions. Existing balances, session keys and permanent Modal identifiers were preserved. Email verification is complete according to Amir; merchant identity/domain approval and actual payment delivery are separate.

## Custom-domain follow-through — 18 October 2026

Current checkout domain is **pageweft.amirgomaa.com**, with the original Modal origin preserved. The companion product uses **sonaweft.amirgomaa.com**. Both custom domains serve working HTTPS pricing, terms, privacy, refund and checkout pages; public checkout configuration still reports disabled. Neither email verification nor domain ownership establishes Paddle approval. The last authenticated Website approval observation covered the older Modal hosts, not these new subdomains.

Submit each new checkout subdomain separately in My account → Settings → Website approval. After approval, migrate the existing per-app checkout URL and notification destination to the approved host; preserve its signing secret, product IDs, original workspace balances and session key. Also verify the account-level default payment link and each app's per-transaction checkout override. Do not recreate live products or a live seller account. Sandbox has separate credentials/data and still needs genuine provider testing. These are current execution requirements; the older evidence below remains dated.

## Verified preparation — 18 October 2026

Amir submitted both new product subdomains; his Website approval screenshot and an authenticated API read confirm both are pending review. Do not remove or resubmit them. An authenticated onboarding read reports `in_progress`: account setup remains in progress, while domain review, identity verification and final review are pending. This is not merchant approval and does not identify a rejection reason.

Both existing one-time USD $5/$10 catalogs were reread successfully. The existing notification destinations now use each app's custom-domain `/api/payment-event`; API rereads confirm they remain paused, with the same signing secrets, subscribed events, platform-only traffic and sensitive-field settings. The runtime checkout URL/default payment link still need final approved-host reconciliation before opening. No balances, session secrets, bank details, charges or billing flags changed. Privacy notices now disclose Cloudflare's gateway processing in addition to the existing hosting/payment providers.

## Latest session observation — 16 October 2026

The initial dashboard navigation displayed **Paddle Login**. After Amir confirmed signing in, the existing authenticated tabs were inspected and refreshed: **Pageweft and Sonaweft both show In review under Website approval**. The existing **Tell us more about yourself** verification form has empty date-of-birth and current-trading-name fields; it was left open for the owner to complete truthful personal details. No new seller account/signup, identity submission, payout change, billing activation, real purchase or email was performed. This supersedes the initial login-only observation; approval is still not established.

A fresh public HTTPS check returned 200 for the workspace, pricing, terms, privacy and refunds. `/api/checkout-config` reports checkout disabled. The policies show the existing sole-developer brand/contact; no company incorporation or account approval is implied. See provider/domain learning guide (local reference; not published) for current pricing and the Modal native-custom-domain plan requirement.

## What is actually configured

- Existing signed-in live seller account retained; its display name was not changed. No second account or sandbox signup was completed.
- One Pageweft SaaS product and two one-time USD prices ($5 and $10), quantity exactly one, no subscription/trial, tax exclusive. Catalog creation and rereads succeeded through the official API.
- A client-side token and notification destination for `transaction.completed`, `adjustment.created` and `adjustment.updated`. Destination uses API v1, excludes sensitive fields, accepts real platform events only, and is **paused** until activation.
- A separate runtime API key has transaction read/write and adjustment read permissions. Reads succeeded; product access correctly returned 403. An unpaid create-checkout validation returned `400 transaction_checkout_not_enabled`; no customer, card or charge was supplied.
- Only `document-studio-payments` was updated through Modal's installed SDK. It contains the Paddle runtime configuration with `BILLING_PROVIDER=paddle`, `PADDLE_ENVIRONMENT=production`, `BILLING_MODE=test`, and `PADDLE_SELLER_APPROVED=false`. The public API confirms billing disabled. The higher-privilege setup key stays private and is not deployed. Never overwrite `document-studio-session`.
- Pageweft's actual Modal hostname was submitted through Website approval; the API confirms `pending_review`. Public pricing, terms, privacy and refund pages exist. The product description/revenue range and website-policy section were entered in the existing account's verification flow.

These actions do not establish seller acceptance, successful checkout, real webhook delivery, bank suitability, payout, legal/tax registration, sales or profit.

## Payment and ownership boundary

```text
Workspace + saved recovery key + explicit terms acceptance
    -> server creates fixed-price Paddle transaction
    -> ledger records transaction/workspace/allowance/terms version
    -> dedicated /checkout page opens Paddle.js
    -> customer pays Paddle
    -> signed notification -> durable minimal inbox -> worker
                              -> fresh transaction + ALL adjustment pages
                              -> match original server checkout ownership
                              -> atomic grant/refund revocation in books.sqlite

Browser callback / returned URL -> status check only; never grants funds itself
Hourly owner cleanup -> retry pending events + reconcile 50 eligible purchases
Other products in the seller account -> ignored without a Pageweft checkout intent
```

The PDF workspace does not load third-party payment JavaScript. `/checkout` has its own narrow CSP and does not receive documents or recovery keys. The only published credential is the client token, and the public configuration currently withholds even that while closed. Server keys and webhook secrets are never returned.

Paddle Billing does not issue Lemon-style purchase license keys. Users save a **Pageweft recovery key before purchase**; it restores their existing workspace, balance and unexpired documents. A Paddle transaction ID or receipt is not a bearer authentication secret. Support must independently verify ownership before any manual recovery. The legacy Lemon code is retained only for explicitly selected historical configurations/tests; the current deployment selects Paddle.

Initial completed payment and approved partial/full refunds are fetched authoritatively and applied idempotently. Tax-only refunds do not remove service credit. Refunds/chargebacks revoke at least the amount already recorded; delayed events cannot undo revocation. Dispute reversals require owner review before credit is reinstated. API failures leave events pending and uncredited. The owner operations report exposes pending/stale payment counts and alerts after five minutes. Events retain identifiers/type/state, not full billing/customer payloads. Raw-body signatures support key rotation and a bounded ±300-second timestamp window to tolerate cold starts; replay is also neutralized by unique transaction/event records.

## Remaining actions, in order

1. **Complete the existing verification form**, last observed on 16 October at `/onboarding/account-setup?step=4`, not signup. Review the prefilled legal-name/address fields; enter the actual date of birth, trading name, and truthful start date. The form says to use today if the product has not been sold before. Leave the optional sales-tax number blank unless actually assigned. The agent has not invented or submitted missing personal facts. Submit any final owner declarations only after reviewing them, then complete Paddle's own requested identity document/selfie process. Do not email identity documents or send them into chat.
2. **Receive account and domain approval.** Review status in Get started → Verify your account and Settings → Website approval. The original Modal-domain submission is historical. Submit `pageweft.amirgomaa.com` and the companion app’s `sonaweft.amirgomaa.com` separately; each exact checkout hostname must become approved. If Paddle requests clarification, describe the actual conversion service and non-transferable/non-withdrawable software-processing allowance. Do not describe a wallet, reseller of books, marketplace or human consulting. Obtain account-specific acceptance of this actual model; catalog creation alone is not acceptance.
3. **Verify provider checkout/delivery in an isolated test environment.** The current 78-test suite uses synthetic HTTP and real disposable SQLite, not Paddle sandbox purchases. No separate sandbox account was created after Amir instructed us to keep the existing login. A proper Paddle sandbox still needs its own available credentials and ledger isolated from production; production must never be opened just to simulate money. Exercise paid/pending/cancelled, duplicate/reordered notifications, full/partial/tax-only refund, network outage and recovery on another device. Verify the actual overlay and CSP in that environment. Do not check 'already integrated in sandbox' without this evidence.
4. **Finish live readiness:** review seller display/receipt details and public policies against the verified seller identity; configure a payout method that Paddle accepts under the same identity; establish the workspace-wide Modal out-of-pocket ceiling (still not confirmed). Existing internal admission limits are not a Modal bill cap. Keep dependency/model and output-fidelity qualifications in LAUNCH.md. Paddle approval does not complete Egyptian income-tax/banking paperwork.
5. **Activate deliberately after the above passes.** Enable the existing notification destination with the setup key in the dashboard/API, preserving platform-only traffic and its stored signing secret. Merge `BILLING_MODE=live` and `PADDLE_SELLER_APPROVED=true` into the existing payment secret; keep `PADDLE_ENVIRONMENT=production`, the exact product/price IDs and its own approved `https://pageweft.amirgomaa.com/checkout` URL. Update the existing notification destination to the matching public `/api/payment-event` and check the default payment link/per-transaction override before opening. Redeploy with `.venv/bin/python -m modal deploy app.py`. Changing only a browser flag cannot enable billing. Do not open paid access before actual approval/test evidence.
6. **Controlled genuine purchase/refund:** with the owner's authorization and a known small charge, verify receipt, bound credit grant, recovery on another device, use/hold/settlement, partial/full refund revocation and the provider's settlement record. The current work made no real payment. Confirm payout separately when it actually reaches the approved bank; do not equate a paid checkout with a bank deposit.
7. **Credential maintenance:** both newly created API keys currently expire 13 January 2027. Rotate the runtime key before expiry (target 6 January); merge the new value into the existing payment secret and redeploy. Revoke the setup key after activation/provisioning tasks finish if it is no longer needed. Keep only the three required runtime permissions. Keep backups/key securely separate; never put private integration JSON files in Git/chat.

## Missed notifications and rollback

Use `.venv/bin/python -m scripts.reconcile_processing_orders` with the owner Modal profile and current runtime environment credentials. It retries the durable inbox and reconciles namespaced Paddle purchases; it will not reinterpret old Lemon/fixture IDs as Paddle transactions. The hourly cleanup also retries pending events and checks up to 50 eligible least-recently-checked purchases. Public status polling can recover a missed initial grant only for a transaction belonging to that encrypted session's original checkout intent. If processing was paid but no credit appears, retry status/support; do not pay again to refresh.

A refund after credit consumption can make the balance negative and block new work; completed output remains available until expiry. Investigate pending-event alerts and negative balances through the private operations report. Do not erase purchases or manually grant credits from a screenshot/transaction ID alone.

Rollback: disable billing first, pause the notification destination, restore the previous source and redeploy. Preserve the permanent volumes, encrypted session key and ledger. Payment intent/event tables are additive and older code can leave them in place. A fresh encrypted ledger snapshot was retrieved and its SQLite integrity/credit identities verified on 15 October 2026; it remains in ignored owner-only local storage. Do not delete volumes to roll back a UI/provider change.

## Ordered primary references

1. [Paddle domain review](https://www.paddle.com/help/start/account-verification/what-is-domain-verification) — public website, prices, support and policy requirements; account review is separate.
2. [Paddle for AI companies](https://developer.paddle.com/get-started/how-paddle-works/ai-companies/) — expressly documents one-time prepaid software usage packs with an application-maintained balance.
3. [Acceptable Use Policy](https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle) — software scope and prohibited stored-value/financial products; permission to sell this specific app still depends on review.
4. [Create transaction](https://developer.paddle.com/api-reference/transactions/create-transaction), [get transaction](https://developer.paddle.com/api-reference/transactions/get-transaction), [list adjustments](https://developer.paddle.com/api-reference/adjustments/list-adjustments) — fixed purchase and authoritative payment/refund verification.
5. [Signature verification](https://developer.paddle.com/webhooks/about/signature-verification), [notification destinations](https://developer.paddle.com/api-reference/notification-settings/create-notification-setting), [overlay checkout](https://developer.paddle.com/build/checkout/build-overlay-checkout/) — delivery and browser integration.
6. [Buyer terms](https://www.paddle.com/legal/buyer-terms), [refund policy](https://www.paddle.com/legal/refund-policy), [privacy](https://www.paddle.com/legal/privacy) — current Paddle buyer obligations. Historical 2022 buyer terms are not the selected reference.
