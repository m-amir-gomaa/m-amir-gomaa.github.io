# Google and GitHub status

> Current preview includes the approved forest interface, full appearance customization, Markdown/Vim, connected notes, source imports and browser-session controls. Google/GitHub are configured; real owner consent/link acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 418fb83 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 418fb8367b1b311a68c1b8b7487874469ce55862
Reviewed: 2026-11-05

## Configuration and actual use are different checks

Google and GitHub are configured for Noteweld's public domain. Authorization request checks passed the exact callback URL, state and PKCE; Google also includes its OIDC nonce. Ordinary email sign-in and authenticated note/account operations passed the deployed release checks.

The owner's actual provider consent, linking/unlinking, cancellation and provider-specific email cases have not yet completed acceptance. Do not interpret configuration as evidence that every external account has been exercised.

## Existing account? Link deliberately

First sign in using the method that already owns your notes. Then open **Account → Sessions and connected sign-in → Provider identities**, confirm ownership if asked and choose the desired provider. If ownership confirmation has expired, the action remains clickable and guides you to the confirmation field. Confirm using your passphrase or private recovery key and retry the action. Google linking requests an explicit account choice. Matching email addresses do not automatically combine accounts.

[Account controls and recovery](/manuals/noteweld/account-work/) describe the supported safety controls. The [usage guide](/manuals/noteweld/guide/) is the normal starting point.
