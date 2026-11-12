{
  "title": "Interface and appearance release — 5 November",
  "description": "Approved interface/logo, complete color preferences, saved account settings and concrete release evidence.",
  "date": "2026-11-12",
  "weight": 150,
  "project": "Noteweld",
  "category": "Release record",
  "notice": "Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/ui-release.md"
}

## What is live

The approved forest interface and custom joined-note N logo are deployed. Open **Appearance** in the signed-in sidebar, or [try browser-only appearance settings](https://noteweld.amirgomaa.com/appearance).

Choose Forest, Paper, Slate, Graphite, Ocean or Rose; light, dark or system mode; and customize 29 semantic color roles. Light and dark retain separate overrides. Text size, reading font, spacing, reduced motion, stronger borders, individual/full reset and validated theme JSON import/export are available.

Guest choices save in that browser. Signed-in choices save to the account and are included in account exports and backups. Preview changes are explicit; choose **Save preferences** to keep them. Low-contrast colors produce a warning, with an optional repair action that preserves the user's ability to choose.

## What was checked

The release passed 58 unit/UI cases, 33 real PostgreSQL cases and 24 browser journeys; two optional locally unconfigured provider cases were skipped. Seven rendered app states had no automated WCAG A/AA/2.1 AA findings. Desktop/mobile captures and a fresh design review were completed.

Actual public-domain email sign-in, a note save, account appearance save/reload/export and temporary-account deletion passed. An encrypted backup preceded the additive preference migration; existing account/note/provider-identity counts were preserved. The gateway/public-origin mismatch discovered by live testing was repaired without weakening foreign-origin rejection.

Google/GitHub authorization requests use the registered public callbacks with state/PKCE and Google nonce; actual owner consent/link acceptance remains pending. Chromium and automated checks do not establish universal browser/accessibility coverage or perfect custom-palette contrast. Billing remains closed.

[Using Noteweld](/manuals/noteweld/guide/) explains the supported workflow.
