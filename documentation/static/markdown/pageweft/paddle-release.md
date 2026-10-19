# Paddle integration evidence

> Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 990e994 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 990e99478f468f891370471f66d9b40272ea5680
Reviewed: 2026-10-19

*Original record: Paddle integration evidence — 15 October 2026.*

## Delivered

Paddle Billing replaces Lemon Squeezy as the deployed selected provider. Customer billing remains closed. The existing signed-in live account was used; no new seller/sandbox signup was completed. Runtime credentials are separated from setup credentials. Permanent app, volumes, session secret and customer credit identities were preserved.

Official API observations: one SaaS product, two one-time USD prices ($5/$10), a client token, and a platform-only notification destination were created successfully. Notification delivery is paused until actual activation. Runtime reads of transactions/adjustments returned 200, catalog read returned 403 as intended, and a customer-free unpaid checkout validation returned 400 `transaction_checkout_not_enabled`. No charge was made. The actual Modal application hostname was submitted through the dashboard; the API reports `pending_review`.

Paddle's existing account setup was advanced through Egypt/Sole Trader, the truthful product/revenue description, and actual website/pricing/policy links. It is left at **Tell us more about yourself**, step 4. Existing name/address values were preserved; missing date of birth/trading-name/start-date facts were not invented. No identity document, selfie or final personal declaration was submitted. This is merchant verification in an existing account, not signup.

## Validation

- Baseline: 60 tests passed before changes.
- Final application suite: 78 tests, including 18 Paddle checks; command `PYTHONDONTWRITEBYTECODE=1 .venv/bin/python -m unittest discover -s tests -q`.
- Provider boundaries are synthetic HTTP; SQLite persistence, credit/refund invariants, ownership, durable event retry and recovery are real disposable databases. This is not a Paddle sandbox/live payment.
- Cases include correct fixed packs, underpayment/discount/currency/price/product/quantity/environment rejection, pending transactions, forged/stale/future signatures, rotated hashes, duplicate and reordered payment/refund events, tax-only and partial/full refunds, chargebacks, API outages, cross-workspace access, other-product event isolation, explicit checkout acceptance, saved recovery and preservation of monotonic revocation in status responses.
- Python safety lint, JavaScript syntax and Git whitespace checks passed. CI configuration now includes new payment modules and checkout JavaScript.
- Local and deployed Chromium (system binary, sandbox enabled) passed 20 page/viewport cases each: workspace, checkout, terms, privacy and refunds at 320/390/768/1440 pixels, including real recovery-key creation/hiding, hidden legacy license form, disabled pack buttons, closed checkout messages, no horizontal overflow and no JavaScript page errors.
- New public pricing page independently passed the same four viewport sizes on the deployed site. Mocked browser checks additionally exercise payment-return states; these do not establish provider acceptance or delivery.
- Deployed `/health`, `/api/session`, `/api/checkout-config` and public pages returned 200; session reports `billing_provider=paddle`, `billing_enabled=false`. Checkout config does not reveal the server API key or expose a token while disabled.
- A fresh encrypted financial snapshot was retrieved through the existing owner Modal profile, decrypted and checked for SQLite integrity and credit-balance identities. Backup and key remain private under ignored `.local/operations/`. The selected configuration files were privately backed up before editing. Original modified bytecode/untracked book scripts were preserved.

## Financial and operational limits

No customer credits were seeded, no PDF extraction/GPU jobs were run, no bank/payout details were changed, no real purchase/refund/payout was made and no email was sent. Backend/website deployment and small CPU ledger/API checks were performed under the existing owner accounts. API keys expire 13 January 2027; rotate before expiry. The owner-level Modal net spending ceiling is still unconfirmed.

The remaining gates are personal verification/final declarations, seller/domain/model approval, actual isolated provider testing (including overlay/CSP), payout setup, and the controlled authorized live purchase/refund/settlement/payout checks. Public policies must be reviewed against the completed seller identity. None is established by the local test count. Exact ordered actions and primary sources are in [PAYMENT-ACTIVATION.md](/manuals/pageweft/payments/).

Rollback disables billing first and redeploys the prior source while keeping session keys, volumes and additive ledger tables. The runtime secret is separate from the existing session secret; do not rotate the session key to roll back this release.
