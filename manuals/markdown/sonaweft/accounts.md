# Verified email and recovery

> Current public preview supports verified email-first signup, mailed resets for verified addresses and existing private-key recovery. Processing may be temporarily unavailable; completed examples remain open. Google/GitHub sign-in and owner account linking have passed their recorded acceptance. Paid checkout is closed. Dated release records describe their own checkpoints. Reviewed source revision 825f4b5 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 825f4b500c71743ad55d71b80682b5f926db3808
Reviewed: 2026-11-12

## Create and recover an account

Open **Account** to sign in with an existing passphrase. New email signup requests a link; explicitly choosing a passphrase on its confirmation form creates the credential. Opening a link alone does not create it. Existing unverified accounts can verify their address from their owned, recently authenticated workspace. Equal addresses never merge workspaces.

Verified addresses can request mailed resets. Completion revokes previous sessions and invalidates old recovery keys. Links expire after thirty minutes and work once; opening/previewing does not consume them. A separate saved key is optional when verified email recovery is available. Keep any key private.

Confirmation in another browser explicitly creates a fresh workspace. Guest files/credits remain in the original browser without implicit transfer. A passphrase or existing private key confirms ownership for sensitive session/provider actions.

## Providers and availability

Google/GitHub identity flows have local state/nonce/PKCE tests; dedicated registrations and genuine owner sign-in/linking acceptance have passed. Absent providers stay hidden. Accounts are product-specific. Signing in does not reset free eligibility or open checkout. Email verification, CSRF and throttles are active; an IP/cookie is not verified human identity. Unavailable processing returns **Currently unavailable. Please try again later.** Owner accounting stays private.

The deployed release passed real synthetic Resend issuance and actual HTTPS confirmation/reset/replay refusal, old-session revocation, ownership proof and readiness. Fixtures were removed and original data preserved through encrypted pre/post restores. A synthetic receipt is not a human inbox or OAuth-consent check. No GPU/payment job ran for this acceptance.
