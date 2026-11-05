# Accounts, recovery and connected sign-in

> Current preview includes the approved forest interface, full appearance customization, Markdown/Vim, connected notes, source imports and browser-session controls. Google/GitHub are configured; real owner consent/link acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 418fb83 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 418fb8367b1b311a68c1b8b7487874469ce55862
Reviewed: 2026-11-05

## Sign in and retain recovery access

Use email and a passphrase, or a configured Google/GitHub provider. Keep the private recovery key securely when creating an email account. Mailed password resets and email verification are not configured. Each portfolio application has a separate account.

## Link a provider to an existing account

Sign in to the existing Noteweld account first. Open **Account → Sessions and connected sign-in → Provider identities**. Confirm ownership when asked, then choose **Link Google** or **Link GitHub**. Sensitive actions require ownership confirmation from the last five minutes. If it has expired, choosing an action explains the requirement and focuses the confirmation field; it does not change an identity. Enter the current passphrase or choose the private recovery key, confirm ownership, then choose the action again. Matching email addresses never silently merge accounts.

Google/GitHub registrations and public-domain authorization requests have passed callback, state and PKCE checks; Google also uses an OIDC nonce. The owner's actual consent/link/unlink acceptance remains pending. A configured button is not evidence of a completed provider grant.

## Sessions, copies and deletion

Review active browser sessions, revoke a selected device or sign out every device. Export important notes/account data before deletion. Changing a passphrase or using recovery rotates recovery access and revokes older sessions. Removing a provider must leave a usable sign-in method.

[Start with the current usage guide](/manuals/noteweld/guide/) or read [the November release](/manuals/noteweld/ui-release/).
