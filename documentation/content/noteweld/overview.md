{
  "title": "Technical overview",
  "description": "Architecture, implemented scope, setup and the current release.",
  "date": "2026-11-09",
  "weight": 30,
  "project": "Noteweld",
  "category": "Reference",
  "notice": "Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision 3a6e097 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/overview.md"
}

## Choose a workspace

Noteweld combines Markdown, optional Vim editing, saved history, links/backlinks, a graph, full color preferences and keyboard search/capture. The hosted preview uses Next.js/Node on Modal, Neon PostgreSQL and a fixed Cloudflare HTTPS gateway. Managed media uses private R2; selected-file Google Drive is a separate storage connection. Vercel is not the active application host.

[Using Noteweld](/manuals/noteweld/guide/) is the practical starting point. Verified email signup/recovery is live. Google/GitHub authorization is configured; genuine owner link/unlink acceptance remains separate. Paid checkout stays disabled.

## Portable work

[Vault transport](/manuals/noteweld/portable-vault/) retains sources and exports current notes with actual available files. [History](/manuals/noteweld/history/) provides bounded recovery. [Local sync](/manuals/noteweld/local-sync/) uses stable identities, exact previews and explicit conflict decisions. [Agent proposals](/manuals/noteweld/agent-access/) require separate human acceptance.

The source-distributed [Linux desktop alpha](/manuals/noteweld/desktop/) adds offline local files and actual Neovim. [Anki handoff](/manuals/noteweld/anki/) exports reviewed text cards. A separate [private-server profile](/manuals/noteweld/private-server/) provides administrator setup and encrypted attachment copies. These do not imply public installers, macOS/Windows qualification, unlimited storage or end-to-end encryption.

Hosted web uses schema 0015 / logical snapshot format 8. Real public cookie, media, archive, history, sync, proposal and keyboard journeys have separate recorded acceptance. Builds, browser checks, external consent and actual payments remain distinct evidence. The production repository is access-controlled; these manuals do not distribute its source or desktop binary.
