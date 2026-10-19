# Extraction verification record

> Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 6321c59 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 6321c592f9cfbaa9cb758f85e63f140803087685
Reviewed: 2026-10-19

*Original record: Hosted trial evidence — 14 October 2026.*

Scope: owner-hosted PDF-to-Markdown trial, not live commerce, academic-document fidelity certification or full-book acceptance.

- Automated: `.venv/bin/python -m unittest discover -s tests -v` — 22 passed. Includes real SQLite persistence and 30 concurrent quota attempts; PDF/session/ownership/archive checks; fake CLI and mocked payment-provider boundaries explicitly remain simulated.
- Static: `node --check static/app.js`, Git whitespace check passed after removing one trailing space.
- Real private compute: original one-page PDF processed on A10G by pinned MinerU 2.7.6; readable expected text, original PDF, source mapping and review report in a 2,295-byte ZIP. No copyrighted book was submitted for this probe.
- Real hosted HTTP: /health and /api/session returned 200, billing_enabled=false, old /upload returned 404. Upload → job polling → completed ZIP download passed. Duplicate request returned the same job. Separate session received 404 for both status and download.
- Browser: Playwright 1.63.0 with system Chromium and `chromiumSandbox=true`, widths 320/390/768/1440. No horizontal overflow or page errors. Oversize file rejected in browser; invalid PDF rejected by real HTTP service without dispatch; retry reenabled; privacy disclosure keyboard action worked. Phone/desktop screenshots inspected. No physical iPhone or Safari certification.
- Deployment: `.venv/bin/python -m modal deploy app.py` succeeded; public URL https://m-amir-gomaa--mineru-pdf-extractor-web-app.modal.run. First startup failed due to missing modal_fn.py; explicit inclusion fixed it and checks above were run after redeployment.

Private artifacts live in ignored artifacts/: verification.pdf, verification-result.zip, public-verification-result.zip, public-verification.json, browser-verification.json and browser screenshots. No session cookies, CSRF values or provider credentials are in this evidence. One bounded real public trial was consumed; unit and browser-invalid-input checks did not submit additional GPU work.

Still required for commerce: metered funds accounting, payment/refund events and actual seller/product configuration. Still required for conversion differentiation: representative book/technical-PDF comparison and correction-time measurement. Full-book/range/retry/repair requirements are proposed in CONVERSION-PRODUCT.md, not marked implemented.
