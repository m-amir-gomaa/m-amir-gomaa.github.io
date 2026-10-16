# Building the portfolio and Fieldnotes

Reviewed: 2026-10-16

## Portfolio publication

The active site source is the standalone `m-amir-gomaa.github.io` repository. Its static HTML/CSS/JavaScript redesign was published before adding the source-aware Pageweft sample viewer, corrected contact address, Sonaweft audio example and Noteweld links. Covers that illustrate a workflow remain labeled illustrations.

Selected published revisions give useful audit anchors:

| Revision | Change |
|---|---|
| `52154f9` | Document Studio sample and contact correction |
| `946645e` | Pageweft branding |
| `5ca6dc8`, `9bb3adb` | Sonaweft workbench and completed example |
| `5ef281e` | Noteweld reliability preview |
| `394b6c3` | Public Markdown/Vim editor |
| `ca00da5` | Connected notes and graph example |
| `bc141c3` | Hugo Fieldnotes library |

Each source/application release has separate evidence; a passing portfolio check does not establish private persistence, model accuracy or payment delivery.

## Building the Hugo library

Hugo 0.156.0 was already installed on the NixOS machine. An explicit allowlist covered 28 README/docs records from five implementations. Five obsolete/personal-planning documents received archive-reference pages. Five current usage guides and three initial journal entries were authored. Private books, credentials, source media and personal account questions were excluded.

The existing GitHub Pages root was preserved. Hugo source lives in `documentation/`, generated files in `manuals/`, and `.nojekyll` permits direct static publication. No provider account, application server, NixOS rebuild or paid service was added.

## Exact release entrypoints

From the portfolio repository:

```sh
python3 scripts/sync-manuals.py
python3 scripts/sync-manuals.py --check
python3 scripts/build-docs.py
python3 scripts/build-docs.py --check
python3 scripts/check-docs.py
node tests/portfolio.test.mjs
python3 -m http.server 8315 --bind 127.0.0.1
```

In another shell, using the documented existing Playwright/system-Chromium tools:

```sh
node tests/docs.browser.cjs
```

After source review, the working feature branch was committed, fast-forwarded to `main` and pushed through existing SSH Git access. [Actual Pages run 38882300701](https://github.com/m-amir-gomaa/m-amir-gomaa.github.io/actions/runs/38882300701) succeeded for `bc141c3`. The same browser checks were then run on public HTTPS:

```sh
PORTFOLIO_TEST_URL=https://m-amir-gomaa.github.io node tests/docs.browser.cjs
```

Twenty-four grouped local and hosted checks covered four widths, all then-existing 36 articles, search/failure/retry, real downloads/clipboard, keyboard and no-JavaScript reading. Eight public files matched the committed bytes; an actual missing route returned the custom HTTP 404. The task-owned local server was stopped.

## Actual mistakes corrected during this work

| Symptom | Cause and correction |
|---|---|
| An initial portfolio-edit script failed before writing | It assumed the vanilla card ID/markup; inspect actual IDs and update the real article blocks |
| Static validation found two h1 headings | An imported design note had a later top-level heading; demote document headings outside code fences |
| Local route checking rejected `/Keep/` | It is a separate GitHub project deployment, not a file in this artifact; verify its HTTP 200 separately |
| Clipboard test expected Python code but copied a diagram | The first code block was legitimately a text diagram; compare clipboard bytes to the selected block |
| External-font assertion failed while visiting the old embedded demo | Scope the new library's no-external-request assertion to the library; do not pretend the old iframe had the same boundary |
| A screenshot caught the page before smooth scrolling finished | Capture the actual new section element instead of assuming the viewport has reached an anchor |

The test corrections are not product bugs disguised as fixes. They make the acceptance claims match the exercised boundary. This page records that earlier release; later history/cost additions require their own checks and publication record.
