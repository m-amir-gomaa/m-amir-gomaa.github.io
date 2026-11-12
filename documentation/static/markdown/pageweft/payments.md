# Payments and availability

> Current public preview supports verified email-first signup, mailed resets for verified addresses and existing private-key recovery. Processing may be temporarily unavailable; completed examples remain open. Google/GitHub sign-in and owner account linking have passed their recorded acceptance. Paid checkout is closed. Dated release records describe their own checkpoints. Reviewed source revision 30e8e34 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 30e8e34bf67280bf26dcc5109ca4d016d3808bc3
Reviewed: 2026-11-12

## Current availability

Paid checkout is closed. Paymob is the selected replacement for the earlier Paddle integration. The new source path prepares hosted one-time processing-pack checkout, owner-bound orders and verified provider reconciliation; it has not completed real merchant checkout, refund or payout acceptance.

The earlier $5/$10 processing packs remain provisional. A displayed processing tariff is not a measured provider cost or a guaranteed margin. No browser return flag grants credit; the server must verify the canonical payment and retain refund/reversal state.

## Before payments open

The merchant must have the exact payment method, currency, international-card eligibility and settlement arrangements approved. Signup and an application-domain approval are separate from this acceptance. A hosted card form keeps card entry with Paymob, but does not make the processor the seller or supply automatic merchant-of-record tax handling.

Missed callbacks, duplicate notifications, refunds, disputes, recovery and actual payout require real provider acceptance. Local synthetic tests do not establish these outcomes. No payment is currently needed to inspect the completed example or use eligible free processing.

## Earlier provider history

Paddle source and dated evidence are retained privately for rollback and review. Its older activation instructions are not the current setup path. See [provider roles and payment boundaries](/manuals/journal/provider-costs-and-payments/) and [Using Pageweft](/manuals/pageweft/guide/).
