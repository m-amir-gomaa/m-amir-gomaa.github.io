# Owner operations

> Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 6321c59 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 6321c592f9cfbaa9cb758f85e63f140803087685
Reviewed: 2026-10-19

Run from the Pageweft repository with the existing authenticated Modal profile. There is no publicly accessible admin endpoint or new monitoring subscription.

```sh
.venv/bin/python -m scripts.operations report
.venv/bin/python -m scripts.operations pause
.venv/bin/python -m scripts.operations resume
.venv/bin/python -m scripts.operations budgets --daily 10 --monthly 25
.venv/bin/python -m scripts.operations backup
.venv/bin/python -m scripts.operations verify-backup .local/operations/backups/ACTUAL-FILENAME.fernet
```

`report` writes private `.local/operations/dashboard.html` and JSON. Open the HTML locally. Refreshing means rerunning the command; this is a generated snapshot, not a live stream. It retrieves the actual current-cycle Modal workspace billing summary through the installed SDK and displays it separately from internal estimates. Missing provider data is reported as unavailable, never assumed zero. Aggregate activity includes bots/reloads; it does not prove unique users, conversion rates or causal attribution. Recognized landing tags: `?utm_source=portfolio`, `github`, `obsidian` or `research`; arbitrary values collapse to `other`.

## Admission and pause controls

Defaults: $10/day and $25/UTC calendar month of **admission envelopes**, separate from the customer's processing tariff. Each <=20-page GPU attempt consumes $0.15 of this envelope; text-only consumes $0.01. Every new attempt, including explicit retries and free samples, is admitted atomically before dispatch. Credit reservation, page quotas and admission all roll back on rejection. Duplicate confirmation does not consume another envelope. Failed and cancelled work does not recycle envelopes. Existing legacy attempts before this release are not retrospectively counted in the new budget.

These amounts are provisional safety allowances, not measured invoices or an absolute cloud-cost ceiling. GPU workers cap two cores/8 GiB, timeout 240 seconds and scale down after five seconds; body timing still excludes cold load/idle. HTTP, parser, ledger, coordinator, cache, storage, egress, private owner extraction scripts and pre-existing workloads are outside the admission envelope. Work can cross day/month boundaries. Shared startup costs make per-section attribution approximate. Do not promise a $25 maximum Modal bill from this control.

Pause rejects new confirmations/retries, preserves retained exports and checks queued sections before GPU dispatch. Already dispatched/running work can finish and charge its successful pages. Queued sections encountered by the coordinator are cancelled and their customer holds released. Inspect pending sections after pausing; never assume every running container stopped.

The platform's independent outer control is [Modal Usage & Billing](https://modal.com), reached through the authenticated dashboard if the path changes. According to [Modal budgets documentation](https://modal.com/docs/guide/budgets), workspace usage budgets cover the whole workspace and workspace spend limits cap net out-of-pocket charges after applicable credits; environment budgets require Team/Enterprise. The installed 1.5.3 SDK exposes billing reads but no documented budget/spend-limit setter. No provider-level spend limit has been configured or verified by this release. Set an owner-approved net limit in the actual dashboard and verify the displayed saved value; this also affects Linguavell preparation/private extraction in the same workspace. Do not upgrade to the $250 Team plan merely for environment budgeting.

## Money: four different quantities

1. Pack face value is customer-funded service allowance, not profit.
2. Available plus reserved positive credit is an undelivered obligation; negative credit after a refund is debt, not income.
3. Consumed service is cumulative and survives job/file cleanup. The ledger checks `funding − revoked = available + reserved + consumed`. Pure verified-live accounts are separated from fixture/unverified/mixed accounts.
4. Actual cash contribution requires receipts after processor/payout fees/refunds, plus actual attributable compute and other expenses. Monthly actuals are deliberately entered from statements, not inferred from tariffs.

```sh
.venv/bin/python -m scripts.operations actuals --month 2026-10 --net-receipts 0 --modal-cost 0 --other-cost 0
```

This syntax example is **not** an instruction to record unverified zeros. Enter actual totals; `net-receipts` is service receipts after refunds/processor/payout fees, excluding customer sales tax. `modal-cost` should match the documented allocation of the bill; distinguish cash billed after credits from underlying metered cost when judging long-term tariffs. Include acquisition, support and other attributable cash expenses in `other-cost`. Cash difference is not distributable profit: outstanding credits, tax, owner labour and timing still matter. Keep provider statements privately with the row's basis.

## Monitoring and incident handling

The existing hourly cleanup also reconciles up to 50 least-recently-checked live orders, makes a daily encrypted financial snapshot and emits sanitized operational alerts into Modal logs. At larger order counts reconciliation latency grows: inspect the provider's signed refunds promptly and deliberately increase/replace the bounded batch before expansion. It skips payment API calls while live billing is unconfigured. Failure to reconcile is counted and logged without order payloads. No email/Slack alerts or messages have been activated. On Starter, platform log retention is limited; persistent aggregate metrics survive separately.

Pause and investigate when credit invariants fail, costs exceed recorded receipts, at least three section failures exceed 20%, or repeated server/payment errors occur. Inspect owner dashboard → platform function logs → affected private job/receipt, without posting customer data in public GitHub issues. At 80% of an admission budget, inspect traffic and actual bills before increasing a cap. A spend limit that stops the whole workspace can also stop cleanup; purge expired files after service resumes.

HTTP protections include scoped encrypted sessions, CSRF/origin checks, ownership enforcement, 64 KiB JSON bounds, bounded upload size, hashed-address rate quotas and global quota ceilings. PDF inspection runs in a child process with 15 CPU seconds, 20-second wall timeout and 768 MiB address-space limit; parser errors are sanitized. These are hardening measures, not an independent penetration test or a guarantee against every denial-of-service attack. Initial quotas can reject legitimate shared-IP users; paid growth requires deliberate calibration.

## Backup and restore

The serialized writer creates consistent SQLite snapshots. Snapshots remove correction text/history, source filenames/digests and vacuum discarded pages; no PDFs or output ZIPs are backed up. Accounts, purchase/grant/revocation records, credit holds and operational aggregates remain. Cloud snapshots are encrypted with the existing session secret, stored privately for seven daily versions and require that key to restore. Off-laptop copies of the key are needed; losing the key and all backups prevents recovery.

Owner `backup` instead encrypts a snapshot with an independent local `.local/operations/backup-key.fernet` and checks decryption, SQLite integrity and credit identities on a disposable clone. Keep the encrypted file and key separately off this laptop. Never upload a key to Git or paste it in chat. This verification does not overwrite production or prove a disaster cutover. A financial backup does not restore expired documents or edits.

For actual disaster recovery: pause web/dispatch; stop the existing writer; decrypt into an isolated file; verify integrity and credit identities; restore into the same volume with the sole writer stopped; redeploy one writer; reconcile queued/running holds and authoritative provider refunds; check two isolated sessions and an owner report before resuming. Do not start another app writing the same SQLite volume, delete live volumes, or blindly replace newer credit transactions with an older snapshot. Routine code rollback preserves the additive schema and the permanent session secret; the pre-operations source/database backup is retained privately.

Sources retrieved 14 October 2026: [Modal billing CLI](https://modal.com/docs/cli/latest/billing), [pricing and billable load/idle](https://modal.com/pricing), [workspace spending controls](https://modal.com/docs/guide/budgets), [Lemon Squeezy order/refund fields](https://docs.lemonsqueezy.com/api/orders/the-order-object). No account approval or billing limit is inferred from documentation.

## Paddle reconciliation update — 15 October 2026

The deployed configuration selects Paddle but paid checkout remains disabled. Signed platform events for Pageweft server-created checkouts enter a durable identifier-only inbox before asynchronous processing; hourly cleanup retries it. The operations JSON includes pending/stale payment-event counts, with an alert for delays beyond five minutes. Other seller products without a Pageweft checkout intent are ignored. Fresh transaction/adjustment reads enforce ownership and refund totals. See PAYMENT-ACTIVATION.md for account review, isolated testing, enabling the currently paused destination, API-key rotation before 13 January 2027 and final live gates. A new encrypted owner backup was decrypted and validated on 15 October; no balances were seeded or reset for this migration.
