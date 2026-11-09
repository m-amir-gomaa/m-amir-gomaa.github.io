{
  "title": "Verified email and recovery",
  "description": "Email-first signup, address verification and mailed password recovery.",
  "date": "2026-11-09",
  "weight": 190,
  "project": "Pageweft",
  "category": "Guide",
  "notice": "Current public preview supports verified email-first signup, mailed resets for verified addresses and existing private-key recovery. Processing may be temporarily unavailable; completed examples remain open. Dedicated Google/GitHub registration and genuine consent remain open. Paid checkout is closed. Dated release records describe their own checkpoints. Production source revision 1d1f932 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/pageweft/accounts.md"
}

## Create and recover an account

Open **Account** to sign in with an existing passphrase. New email signup requests a link; explicitly choosing a passphrase on its confirmation form creates the credential. Opening a link alone does not create it. Existing unverified accounts can verify their address from their owned, recently authenticated workspace. Equal addresses never merge workspaces.

Verified addresses can request mailed resets. Completion revokes previous sessions and invalidates old recovery keys. Links expire after thirty minutes and work once; opening/previewing does not consume them. A separate saved key is optional when verified email recovery is available. Keep any key private.

Confirmation in another browser explicitly creates a fresh workspace. Guest files/credits remain in the original browser without implicit transfer. A passphrase or existing private key confirms ownership for sensitive session/provider actions.

## Providers and availability

Google/GitHub identity flows have local state/nonce/PKCE tests; dedicated registrations and genuine consent acceptance remain separate. Absent providers stay hidden. Accounts are product-specific. Signing in does not reset free eligibility or open checkout. Email verification, CSRF and throttles are active; an IP/cookie is not verified human identity. Unavailable processing returns **Currently unavailable. Please try again later.** Owner accounting stays private.

The deployed release passed real synthetic Resend issuance and actual HTTPS confirmation/reset/replay refusal, old-session revocation, ownership proof and readiness. Fixtures were removed and original data preserved through encrypted pre/post restores. A synthetic receipt is not a human inbox or OAuth-consent check. No GPU/payment job ran for this acceptance.
