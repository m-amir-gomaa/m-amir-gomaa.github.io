# Neon, Modal costs and opening Paddle

Reviewed: 2026-10-16

## Neon in this application

Neon hosts PostgreSQL. Noteweld connects through standard `pg`/Drizzle and stores accounts, notes, labels, revisions and recovery/session state there. Modal runs the Node application; the two providers have separate roles. Moving the database later needs migration/connection configuration, not a replacement for SQL.

Neon supports autoscaling, idle suspension and branching. Its advertised Free tier currently includes 100 CU-hours and 1 GB per project. That is a published allowance, not verification of an individual account plan. [Neon overview](https://neon.com/docs/get-started/why-neon), [pricing](https://neon.com/pricing), checked 16 October 2026.

## Modal rates and the actual configured work

[Modal pricing](https://modal.com/pricing), checked 16 October 2026: Starter has no fixed monthly plan fee and includes $30/month compute per workspace. Base per-second rates are A10 $0.000306, L4 $0.000222, CPU $0.0000131/core and memory $0.00000222/GiB. Volumes include 1 TiB/month, then $0.09/GiB-month; Starter egress includes 1 TiB/month, then $0.04/GiB. These apps use Functions, not the differently priced Sandboxes or token-priced Shared Endpoints.

Compute is billed for load, processing and the configured warm tail. CPU/memory use is charged at least at the request. Pageweft's GPU sections request/cap two cores and 8 GiB; Noteweld requests 0.25 core/1.5 GiB, with higher CPU usage possible. Sonaweft's speech function does not declare the same fixed CPU/RAM envelope, so its GPU rate alone is not its total invoice.

Explicit container-region selection adds a multiplier: 1.15 for broad regions and 1.75 for a narrow region such as Noteweld's `region="us-east"`. A `.us-east.modal.run` routing hostname alone does not establish that container-region surcharge. [Region selection](https://modal.com/docs/guide/region-selection), [resource requests](https://modal.com/docs/guide/resources).

## Reproducible illustrations, before credits

These are calculations from assumed billed resource-seconds, not measured conversion speed or a forecast of per-user consumption.

| Work assumption | Gross estimate |
|---|---:|
| A10 + 2 CPU cores + 8 GiB for one billed hour | $1.2599 |
| 100 GPU worker runs, each using that envelope for 120 billed seconds | $4.20 |
| 1,000 such worker runs | $42.00 |
| L4 alone for one billed hour; CPU/RAM still additional | $0.7992 |
| Noteweld at requested CPU/RAM for 10 active hours, including its 1.75 region factor | $0.42 |

A document can require several worker runs; these rows do not assume one document equals one GPU run. All applications and private owner workloads share the workspace's allowance; there is not another $30 for each app. At $42 gross eligible compute, roughly $12 would remain after an otherwise-unused $30 allowance. Add other applications, startup/warm time, actual resource use, noncovered items and tax as applicable. Credits improve the immediate bill but should not define long-term customer margin.

Count jobs, selected pages, measured billed GPU seconds, active web time, retained data and external LLM tokens. Registered-user count alone does not determine hosting cost. A 1,000-page text-only synthetic extraction is not evidence of GPU time for a difficult scanned book.

## Control spending deliberately

Owner reports can read the actual workspace's metered and billed totals; those private financial snapshots are not published here. Internal Pageweft/Sonaweft admission envelopes are separate from provider limits. [Modal budgets](https://modal.com/docs/guide/budgets) distinguishes a gross usage budget and a monthly net out-of-pocket spend limit. A saved global limit has not been verified by these releases. Selecting one affects every workload sharing the account, so it must be an explicit owner choice. There is no reason to upgrade to Team merely to keep these small previews online.

## Paddle: configured versus still required

Pageweft and Sonaweft have separate configured products, $5/$10 prices, runtime/client configuration and paused notification destinations. The last observed website status on 15 October was **In review**. This page does not represent a fresh seller-dashboard approval check. Both checkouts remain closed. Noteweld has no paid checkout; the retained Go study and vanilla demo do not need one.

The remaining operational sequence is:

1. Complete Paddle's requested seller/identity verification with correct legal details. Its process includes domain review and identity verification; business verification differs for individuals/sole traders. [Account verification](https://www.paddle.com/help/start/account-verification/what-is-account-verification).
2. Obtain approval for each actual product hostname and the processing-pack business model; finalize operator/contact/pricing/privacy/refund pages against the real seller identity.
3. Test in a separate Paddle sandbox with isolated products, webhook secret and ledger. Cover purchase, abandonment, genuine signed duplicate/reordered delivery, refunds, chargebacks, provider outage and recovery. Current mocked tests do not replace this.
4. Finish the approved default payment link, payment methods, tax presentation, balance currency and correct payout details. Validate server-side keys/signatures; enable only the intended notification destination. [Go-live checklist](https://developer.paddle.com/build/go-live-checklist/).
5. After approval and sandbox acceptance, conduct an explicit controlled live purchase/refund and reconcile the real provider receipt/ledger. Open normal paid access only when those checks pass. Payout acceptance is an additional check, not something a browser success page proves.
6. Maintain credentials. Existing recorded runtime-key expiry is 13 January 2027, with rotation targeted before 6 January; update both products if the runtime key is still shared. Never publish keys or recovery secrets.

[Paddle's published default fee](https://www.paddle.com/pricing) is 5% + $0.50 per checkout: a simplified $5 purchase leaves $4.25 and $10 leaves $9 before other effects. Under-$10 custom pricing is by agreement, not automatic. [Payout documentation](https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid) describes monthly payouts, a minimum $100 threshold and possible wire/bank charges. A small sale therefore does not mean immediate cash in a bank account.

Use the detailed project-specific [Pageweft activation](/manuals/pageweft/payments/) and [Sonaweft operations](/manuals/sonaweft/operations/) records when executing the steps. This is not an account-approval claim or an instruction to activate checkout now.
