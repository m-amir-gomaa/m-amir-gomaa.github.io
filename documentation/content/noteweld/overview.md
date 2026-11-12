{
  "title": "Technical overview",
  "description": "Architecture, implemented scope, setup and the current release.",
  "date": "2026-11-12",
  "weight": 30,
  "project": "Noteweld",
  "category": "Reference",
  "notice": "Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/overview.md"
}

## Choose a workspace

Noteweld combines Markdown, optional Vim editing, saved history, links/backlinks, a graph, full color preferences and keyboard search/capture. The hosted preview uses Next.js/Node on Modal, Neon PostgreSQL and a fixed Cloudflare HTTPS gateway. Managed media uses private R2; selected-file Google Drive is a separate storage connection. Vercel is not the active application host.

[Using Noteweld](/manuals/noteweld/guide/) is the practical starting point. Verified email signup/recovery is live. Google/GitHub sign-in has passed genuine owner acceptance. Sensitive provider linking/removal retains separate ownership checks. Paid checkout stays disabled.

## Portable work

[Vault transport](/manuals/noteweld/portable-vault/) retains sources and exports current notes with actual available files. [History](/manuals/noteweld/history/) provides bounded recovery. [Local sync](/manuals/noteweld/local-sync/) uses stable identities, exact previews and explicit conflict decisions. [Agent proposals](/manuals/noteweld/agent-access/) require separate human acceptance.

The source-distributed [Linux desktop alpha](/manuals/noteweld/desktop/) adds offline local files and actual Neovim. [Anki handoff](/manuals/noteweld/anki/) exports reviewed text cards. A separate [private-server profile](/manuals/noteweld/private-server/) provides administrator setup and encrypted attachment copies. These do not imply public installers, macOS/Windows qualification, unlimited storage or end-to-end encryption.

The deployed hosted web uses schema 0015 / logical snapshot format 8; the newer Paymob source checkpoint is not a billing deployment. Real public cookie, media, archive, history, sync, proposal and keyboard journeys have separate recorded acceptance. Builds, browser checks, external consent and actual payments remain distinct evidence. The production repository is access-controlled; these manuals do not distribute its source or desktop binary.
