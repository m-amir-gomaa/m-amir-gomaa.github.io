Noteweld is the writing workspace. Pageweft converts PDFs into reviewed source
bundles; Sonaweft turns recordings into timestamped transcripts and derived notes.
Each service owns its accounts, authorization and processing credit. A matching
email address does not merge accounts or balances.

```text
Web / Electron desktop
          |
      Noteweld ---------- reviewed PDF bundles -------- Pageweft
          |                                           FastAPI / MinerU
          +------------- reviewed audio bundles ------ Sonaweft
          |                                           FastAPI / Whisper
          +-- PostgreSQL: notes, revisions, sync and receipts

Optional MCP clients -> separate Noteweld / Pageweft / Sonaweft tools
```

## What changed

The connected Pageweft and Sonaweft APIs now expose scoped quote, approval,
processing, status, cancellation and export operations. Separate MCP namespaces
wrap those contracts. The shared Noteweld web/desktop processing screen implements
the same sequence: obtain a quote, approve the exact work, follow its status,
then inspect an export before importing it. Imports keep source provenance and
recover from interrupted or repeated delivery.

**The newest Noteweld work is implemented and locally verified; its integrated
hosted and final platform release is still being qualified.** It adds an
interactive graph, PDF.js reading, reviewed Anki text exports, bounded
selected-note assistant actions, prepaid-credit reservations and time-based
storage funding. The existing hosted preview remains a separate checkpoint.

Managed attachment encryption uses client-held keys and authenticated streaming
chunks. The new transfer format supports source files up to 512 MiB with bounded
resumable parts. Recovery and locking are explicit. This protects attachment
contents; note text, filenames and all service metadata are not covered by that
claim. It is not a claim that the current hosted preview has already shipped it.

Sonaweft also has a separate bounded evidence-chat implementation: transcript
citations, approved inference and durable usage receipts. It does not rewrite
original recognition or guarantee factual verdicts. Hosted paid inference remains
disabled pending provider and quality qualification.

## Technologies in the implementation

| Area | Technologies and purpose |
| --- | --- |
| Noteweld web | TypeScript, React, Next.js, CodeMirror 6, Markdown/GFM and optional Vim keys |
| Noteweld data | Drizzle ORM, PostgreSQL, transactional revisions, account isolation and conflict-preserving sync |
| Desktop | Electron, sandboxed renderer, SQLite, node-pty, xterm.js and real Neovim |
| Reading and portability | PDF.js, reviewed Anki TSV/JSON exports, ZIP manifests, stable source identities |
| Attachment privacy | libsodium, XChaCha20-Poly1305 secretstream and Argon2id-based recovery/key wrapping |
| Processing apps | Python, FastAPI, SQLite, HTTPX, MinerU, faster-whisper and FFmpeg |
| Agent interfaces | MCP, mcp-use v2, React widgets, explicit approvals and bounded operation receipts |
| Verification | Node test runner, PostgreSQL integration tests, Playwright, axe-core, native and packaged desktop journeys |

NestJS and Prisma belong to the separate
[Carrier Relay API project](https://github.com/m-amir-gomaa/carrier-relay-api).
Noteweld continues to use Next.js and Drizzle.

## Providers and their current roles

| Provider | Role and availability |
| --- | --- |
| Modal | Existing application hosting and bounded on-demand processing |
| Cloudflare | HTTPS gateways and static portfolio hosting; R2 supplies private managed object storage through the S3-compatible API |
| Neon | Hosted PostgreSQL for Noteweld |
| Resend | Application email verification and recovery |
| Google / GitHub | Optional sign-in; Google Drive is a separate user-owned storage connection |
| GitHub / GitHub Actions | Source control and automated checks |
| Sentry | Application error and operational telemetry; this is not a guarantee of zero defects |
| Manufact Cloud | Hosted MCP endpoints and widgets; private payload-handling qualification remains separate |
| Codemagic | macOS ARM64 build qualification; earlier successful builds do not certify the newest source |
| Paymob | Selected checkout integration in test configuration; genuine payment qualification and live activation remain separate |
| Google Gemini API | Implemented optional bounded inference adapter; hosted paid inference remains disabled |

Earlier Paddle integration and historical optional DeepSeek review records remain
separate from the selected Paymob and Gemini work. They are not evidence that
those providers are currently enabled or that a payment or new inference ran.

## What the checks establish

The connected processing services and MCP discovery have deployed checks and
source CI. Local Noteweld checks exercise real PostgreSQL transactions, encrypted
file transfer, interrupted imports, browser workflows and native Linux journeys.
Provider fixtures establish failure handling, not genuine payment delivery or
model accuracy. Final macOS/Flatpak distribution, commercial activation and
private hosted MCP grants retain their own acceptance steps.

Start with the [Noteweld manual](/manuals/noteweld/),
[Pageweft manual](/manuals/pageweft/) or
[Sonaweft manual](/manuals/sonaweft/) for the currently published usage guides.
