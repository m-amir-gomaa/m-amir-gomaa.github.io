# Hosting, storage and payment readiness

Reviewed: 2026-11-06

## What serves the applications

| Product | Current role |
| --- | --- |
| GitHub Pages | Portfolio and this static Fieldnotes library |
| Cloudflare | Public domains, HTTPS application gateways and access boundaries |
| Modal | Noteweld Node runtime, PDF processing and audio transcription |
| Neon PostgreSQL | Noteweld notes, account state, source bundles and appearance preferences |
| Cloudflare R2 | Private managed Noteweld attachment bytes |
| Resend | Verified signup and password-recovery mail |
| Google Drive | Optional user-selected Noteweld media; separate from Google sign-in |
| Paymob preparation | Selected replacement for payments across all three apps; checkout remains closed |
| Earlier Paddle integration | Retained as inactive source/history for rollback; not the current onboarding path |

These are product roles, not a guarantee of uptime or a claim of completed merchant acceptance. Vercel is not the active Noteweld host. The retained Vercel Git-deployment setting is disabled; old failure notifications do not establish the status of these current hosts.

## Free examples and live processing

Completed examples open without a new conversion or transcription. Free processing can be temporarily unavailable because of eligibility, capacity or admission safety checks. In that case users receive **Currently unavailable. Please try again later.** Creating an account does not reset sample eligibility.

Owner financial settings, guest accounting amounts, usage, reset details and reports are private. Public application responses expose availability, not that accounting. Processing quotes and customer balances are separate from owner admission controls.

Hosting charges depend on actual resources, duration and retention. Historical rate calculations in dated release records are not current quotations or measured customer margins. Consult [Modal's official pricing](https://modal.com/pricing) and the app's displayed service quote rather than assuming a user count predicts cost.

## Account capabilities are product-specific

Noteweld supports verified email-first signup, mailed resets for verified addresses, existing private-key recovery and configured Google/GitHub entry/link controls. Real owner Google/GitHub sign-in has passed alongside callback/state/PKCE checks; sensitive account operations retain separate ownership checks. See [Noteweld account controls](/manuals/noteweld/account-work/).

Pageweft and Sonaweft now support verified email-first signup, owned-address verification and mailed resets for verified accounts, alongside existing private-key recovery. Dedicated Google/GitHub registration, real owner sign-in and explicit account linking have passed recorded acceptance. [Pageweft account guide](/manuals/pageweft/accounts/) and [Sonaweft account guide](/manuals/sonaweft/accounts/) explain the workflow. Accounts, wallets and stored files are separate between applications.

## Payment configuration is not completed payment acceptance

Paymob is the selected replacement after the owner created a merchant account. The new source prepares processing packs, separate developer support and manually renewed Noteweld storage terms. Source preparation is not a deployed purchase offer. Paid checkout remains closed while actual merchant/currency/settlement eligibility and real checkout, callback, refund and payout journeys are qualified. Signup does not establish worldwide card acceptance or a particular settlement currency.

Paymob is a payment processor. Seller obligations and any applicable tax handling remain separate; choosing it does not by itself supply merchant-of-record services. Previous Paddle onboarding and activation checklists are historical, with their code retained for rollback. No provider credentials, merchant acceptance or transaction is implied by this documentation update.

For Noteweld, paid managed storage additionally depends on usable costed quotas, funded retention and qualified client-key attachment encryption. [Current storage choices](/manuals/noteweld/media-storage/) and [the encryption boundary](/manuals/noteweld/encryption/) describe what exists today and what remains planned. Provider-managed R2 encryption does not make the current files E2EE. The user's own Drive allowance and local/self-host arrangements remain separate choices.

Read [Pageweft payment availability](/manuals/pageweft/payments/) and [Sonaweft operations](/manuals/sonaweft/operations/). Paymob's [Intention API](https://developers.paymob.com/paymob-docs/intention-apis/create-intention.md) and [hosted checkout](https://developers.paymob.com/paymob-docs/checkout-experiences/unified-checkout-redirection.md) describe provider mechanisms, not approval of this account, current fees or immediate payouts.
