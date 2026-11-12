# Accessibility review — 16 October

> Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision fe0ff516cabfebf5b602d704deb1eb4e969ec4d8
Reviewed: 2026-11-12

*Original record: Editor accessibility review — 16 October 2026.*

The public scratchpad's CodeMirror scroll region was flagged by axe-core 4.13.0 as lacking focusable content. The editable textbox now has an explicit `tabindex=0` through CodeMirror's contentAttributes facet, including its read-only states. Tab still exits the editor normally. This does not add a second focus target around the editor or change data, save, account or payment behavior.

Local verification: lint/types, all 40 existing unit/UI checks, isolated production build, and the existing account-free editor browser journey passed. The journey checks real Markdown download, preview/split, guarded reset/navigation, four viewport widths, Tab exit, strict production CSP and absence of POST requests. A separate local axe WCAG A/AA/2.1 AA run returned zero violations on the public example. No database/schema change was needed or made; this patch does not claim a new run of the full authenticated PostgreSQL suite.

The existing Modal app was redeployed successfully (71.946 seconds) to the unchanged HTTPS hostname, retaining runtime secret/database/backup identity and closed billing. Hosted recheck evidence is recorded in the supporting portfolio release milestone. Chromium and automated accessibility checks do not certify physical iOS, every screen reader or every application state.
