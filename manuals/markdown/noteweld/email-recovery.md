# Email signup and password recovery

> Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 3a6e097 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision 3a6e097b05cc466f8ec1213415f96b50454ee196
Reviewed: 2026-11-09

## Create an email account

Open [signup](https://noteweld.amirgomaa.com/auth/signup), complete the security check and request your email. Follow the link, choose your name and passphrase, then confirm. Opening the link alone creates no account. Links expire after 30 minutes and work once. Use at least 15 characters, following the form's full password requirements.

## Recover access

Verified email/password accounts can [request a reset](https://noteweld.amirgomaa.com/auth/forgot). Completing the emailed form changes the password and signs out previous sessions. Any old private recovery key stops working. Unverified legacy accounts retain their existing key/provider methods; inbox ownership never silently merges or takes over an older account.

## What was checked

The owner completed actual security widgets in Firefox. Signup and reset messages reached the inbox; explicit confirmation, reused-link refusal, old-session/password rejection, replacement login and temporary-account deletion passed. Local suites cover additional expiry, concurrency and provider-failure boundaries. Separate raw widget-token replay was not captured. Google/GitHub consent remains a separate acceptance task.

[Using Noteweld](/manuals/noteweld/guide/) covers the normal workspace. Private anti-abuse budgets and provider credentials are not published.
