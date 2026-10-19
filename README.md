# Amir Gomaa — freelance portfolio

19 October 2026: the [source-workflow release journal](https://amirgomaa.com/manuals/journal/source-workflows-20261019/) connects current Pageweft/Sonaweft review/export/diagnostics and Noteweld atomic source imports/session controls. Public guides distinguish disabled real OAuth/payment acceptance from implemented code. The current sample ZIP uses the importable v1 schema. Pageweft's inaccessible anonymous code link now leads to its readable implementation manual; repository access settings were preserved. Two reviewed image-inventory JSON artifacts are explicitly allowlisted, without copying private evidence or source books.


Static HTML, CSS, and JavaScript portfolio with project filters, case studies, Upwork/email contact links, mobile navigation, an interactive vanilla Keep demo and an embedded Pageweft sample-output viewer. The companion **Fieldnotes** library is built with Hugo; its generated files are committed, so serving the portfolio does not require a runtime build.

## Current portfolio scope — 18 October 2026

Four active product cards remain: **Noteweld, Noteweld Local, Sonaweft and Pageweft**. The former Go study has been removed at the owner's request, together with its category, cover styles, manual pages, search/feed entries and download editions. No replacement is scheduled. Development Workbench remains a separate environment case study. The library now has **49 indexed articles and 33 reviewed source records**. Earlier milestone counts below are dated history.

The updated payment manuals require separate Paddle approval for both current product subdomains and genuine isolated provider testing; public billing remains closed.

## Custom-domain configuration — 18 October 2026

The selected domain is **amirgomaa.com**, registered by the owner through Cloudflare for one year. `CNAME` declares the GitHub Pages hostname; `documentation/hugo.toml` supplies the matching manuals canonical URLs, feeds and sitemap. The original GitHub repository/hosting remain in place. The static checker validates both the selected host and historical GitHub Pages links. Product links now use pageweft.amirgomaa.com, sonaweft.amirgomaa.com and noteweld.amirgomaa.com after independent gateway/session/CSRF/upload/recovery checks. Existing Modal endpoints remain available. Paid checkout and external OAuth remain separate approval/acceptance gates. The manuals include individual domain/access/rollback guides.

Publication requires verified GitHub domain ownership, the actual Pages repository binding, four DNS-only apex A records and DNS-only `www` CNAME, followed by GitHub certificate issuance and Enforce HTTPS. Configuration in Git alone does not establish those provider states. Domain acceptance and release evidence are recorded in the workspace milestone; do not equate a local build with public HTTPS success. DNSSEC is checked independently of the website certificate. No paid Cloudflare or Modal plan upgrade is required for this portfolio mapping.

Browser-local demo notes belong to their original scheme/hostname. A changed hostname has a separate localStorage area; it does not automatically transfer old notes. Keep original exports/backups when changing addresses. Hosted product accounts and storage are not migrated by this static configuration.

## Workbench and factual resume review — 16 October 2026

[The Workbench](https://m-amir-gomaa.github.io/manuals/development-environment/) links the NixOS and Neovim repositories, explains the actual configured workflow and offers a browser-only keyboard sketch. Four configuration samples retain temporary edits/undo when switching files, with a filterable Space–s–f picker, clipboard fallback and an animated configuration-layer explorer. Motion can be paused and follows reduced-motion preferences. Three new guides bring Fieldnotes to **46 indexed articles**. This guide distinguishes explanatory snippets and the published configuration baseline from local maintenance; it does not expose or execute personal configuration.

The portfolio navigation/manuals library link the Workbench. Confirmed low-contrast labels were corrected. The former resume downloads were plain text with PDF/DOCX extensions and unconfirmed claims; private originals were preserved, the download link removed, and those misleading public files withdrawn. Real one-page resume drafts and the factual interview stay outside this public repository until Mohamed approves the details.

Local verification: reproducible Hugo generation; 28 source-snapshot checks; 56 HTML pages / 1,174 local link, asset and fragment checks; eight DOM regressions; 24 grouped manuals browser checks across 46 routes/four widths; Workbench edit/buffer/undo, leader picker, empty result, clipboard permission failure, focus/Tab, pause/reduced-motion, no-JavaScript and no external-request/page-error checks. Automated axe-core WCAG A/AA/2.1 AA checks pass on the Workbench; desktop/phone screenshots were reviewed. This is system Chromium evidence, not universal assistive-technology or physical iOS certification. Live release evidence is recorded separately in milestone 008.

Supporting UI review also corrected Noteweld's explicit editor tab stop and Pageweft's named retained-PDF region, independently tested and deployed in their own repositories. Their data/accounts/billing were not changed. Sonaweft's public example and Noteweld's graph had no detected automated WCAG violations in reviewed views. The separate vanilla demo still has recorded accessibility/parity work; this release does not claim every project is finished.

## Build histories and provider guide — 16 October 2026

Every project card now links its own build history. Four project histories and a portfolio/Hugo history reconstruct recorded steps, commands, actual evidence and failures; a separate provider guide explains Neon, current Modal cost calculations and Paddle's remaining setup. The library now contains **43 articles** while preserving the reviewed source-record inventory for active projects. Histories identify where private provisioning or missing old evidence prevents a literal self-service replay; no secret values or fictional past commands are supplied.


The previous section below records the initial Hugo release, not the current article count.

## Fieldnotes — 16 October 2026

[Open the manuals and journal](https://m-amir-gomaa.github.io/manuals/). Navigation, all four project cards and a dedicated portfolio section link the library. It contains four current usage guides, reviewed source-document records (including five explicitly historical references), three journal entries, browser-local search, a table of contents, Markdown downloads, RSS and sitemap. Imported references identify exact source revisions; the vanilla README's reviewed working-copy edition is marked. Private books, credentials, personal account questions and untracked work are excluded. Older release records retain their original milestone/date and current context.

Hugo **0.156.0** source is in `documentation/`; generated output is `manuals/`. [Build/update instructions](documentation/README.md) and the [publication guide](documentation/content/journal/publishing.md) explain the explicit refresh and existing GitHub Pages workflow. No new hosting account, application server, payment activation, NixOS edit or provider setup is needed. Rollback is a normal portfolio Git commit; application data is unchanged. Source documents in other repositories and their existing working changes were not modified.

Local verification passed: reproducible Hugo build; 28 source snapshot checks; 45 HTML pages and 862 local link/asset/fragment checks; eight DOM regressions; 24 grouped Chromium checks covering four viewport widths, all 36 article routes, search/error/retry/no-results, real Markdown download and clipboard copying, keyboard navigation and no-JavaScript reading. The Hugo pages made no external requests. Desktop/phone screenshots were inspected. System Chromium evidence does not certify physical iOS/Safari or every assistive technology. Publication and actual public checks are recorded in the release milestone rather than inferred from these local results.

Current update — 16 October 2026: Noteweld now includes stable wiki links, outgoing/backlink panels, authenticated linked-note pages and a bounded/filterable graph. Its card links the account-free editor, original graph example, private workspace and `feat/connected-notes` source. The separate vanilla implementation is unchanged. The cover remains an illustration; graph limits and future import/revision work are explicit.

The full-stack cover is an illustration, clearly labeled. Project descriptions distinguish implemented features from simulation and planned work.

## Preview and checks

From this directory, run `python -m http.server 8000` and open `http://localhost:8000`. The embedded app uses this portfolio’s origin for localStorage. The separately linked `/Keep/` demo shares storage only when served on the same scheme, host, and port.

```sh
node --check script.js
node tests/portfolio.test.mjs
```

The tests use jsdom installed in sibling `../Keep` (`npm ci` there first). They cover project links, filters, mobile navigation, demo cleanup, and bundled assets. Browser screenshots and visual review remain necessary before publication.

## Pageweft preview — 15 October 2026

The project card has an explicit **Open live converter** link and **Explore sample output** button. The latter opens a portfolio-native dialog comparing actual PDF raster excerpts against all three pages of actual exported Markdown, with copy and Markdown/ZIP downloads. It is a precomputed original public example, not a simulated conversion or an upload form. It requires no account or cloud job. Asset provenance and regeneration commands are in [assets/document-sample/README.md](assets/document-sample/README.md).

Contact email is `mo.gomaa.formal@gmail.com`. On 15 October 2026 Amir approved **Pageweft — PDF to Markdown**, replacing Document Studio across the app and portfolio. The local project is `../pageweft` with a `../document-studio` compatibility symlink; existing public GitHub/Modal URLs and the portfolio's `#document-studio` bookmark are retained. Preliminary exact-name searches found no matching Pageweft result; no domain/trademark clearance is claimed. The existing [Suntof Document Studio](https://suntof.com/en/apps/suntof-document-studio/) also converts documents to Markdown, confirming that the current title overlaps a related product.

Seven DOM tests passed, including page comparison, retry after a failed sample load, focus restoration and switching back to Keep. System Chromium checks passed at 320/360/390/768/1440 pixels: no page/dialog horizontal overflow, sample switching, actual clipboard readback, actual ZIP download, Escape/focus restoration, Keep open/close and no page errors or failed HTTP responses. Deliberately interrupted sample loading recovered through Retry. Desktop/phone screenshots were visually reviewed. These are Chromium checks, not Safari/iPhone device certification. The preview's source excerpt has an intentional internal horizontal scroller at narrow widths to preserve readable source text.

## Update the embedded demo

After changing Keep:

```sh
cd ../Keep
npm run build
cd ../portfolio
rsync -a --delete ../Keep/dist/ demos/keep/
```

Commit site assets and publish through this repository's GitHub Pages configuration after reviewing locally. Publication is authorized by Amir on 14 October 2026; the release evidence is recorded below. Historical note: the resume was later reviewed and its misleading public file formats withdrawn; see the current Workbench/resume entry above.

## Release review — 14 October 2026

Current titles: Noteweld, Noteweld Local, Sonaweft and Pageweft. The Go study was removed at Amir’s request on 18 October 2026. Existing repo URLs remain unchanged. Document Studio now links its bounded public trial; its persistent ledger, source-aware exports and paid/full-book limitations are described explicitly. A real public synthetic upload/conversion/download and session isolation passed in the Document Studio repository; the portfolio itself does not certify document fidelity or payment readiness.

The older resume files are preserved but their public download link is hidden pending factual review. No resume claims were silently rewritten. Source/demo HTTP checks passed for Document Studio; no cloud extraction was run by this portfolio release.

Browser checks passed at 320, 360, 390, 768 and 1440 CSS pixels: no horizontal overflow, mobile navigation, project filters, demo open/close and no page errors. Screenshots were inspected. These are system Chromium checks, not Safari/iPhone device certification. Evidence: ../../environment/observations/portfolio-release-20261014/.

## Sonaweft release — 15 October 2026

Transcript Studio is now Sonaweft — audio to source-linked notes. The existing #instascript anchor and GitHub source URL are preserved. Its card links the actual regional Modal deployment and describes original/corrected/AI outputs, private credit accounting and concrete limits. The example VTT remains a format illustration, not a newly claimed model result. Paid packs await seller/domain approval and real payment delivery. Noteweld is proposed for Keep; Keep titles remain unchanged until that project is active.

The card also links Sonaweft's completed original recording example: actual audio, ASR, optional saved review and portable bundle without a new processing job. The original VTT format illustration remains available in assets but is no longer the card's main sample link. Four local Chromium widths and seven DOM checks passed before the first release; the added sample link is checked separately.

## Noteweld update — 15 October 2026

The professional workspace card is now **Noteweld — a connected writing workspace**, linking the verified [free preview](https://m-amir-gomaa--noteweld-web-app.us-east.modal.run/) and its current reliability branch. The existing `#keep-stack` bookmark is preserved. Its description covers real transactions/revisions, recovery, export/deletion and tested failure handling; Markdown/Vim/graph/imports and closed billing are explicitly distinguished. The vanilla demo remains its own implementation and is not claimed to have these server features.

Seven DOM checks passed. Actual Chromium review passed at 320/390/768/1440, including the updated link/case study and overflow/page-error checks; the phone card screenshot was visually reviewed. The app itself has separate actual hosted-cookie/database evidence and [successful source CI](https://github.com/m-amir-gomaa/keep-nextjs/actions/runs/38801749405). No private app was embedded or authentication frame policy weakened.

## Markdown/Vim editor update — 16 October 2026

Seven DOM checks and actual local Chromium review at 320/390/768/1440 passed, including updated links/source, case study, contact and no horizontal overflow or page errors. The phone card was visually reviewed. Noteweld code `cbd60fe` passed [actual source CI](https://github.com/m-amir-gomaa/keep-nextjs/actions/runs/38872939594), and all 11 app browser checks passed against its real HTTPS deployment. The public scratchpad downloads actual Markdown without requiring an account or uploading draft content. Published UI `394b6c3` passed [Pages deployment 38873434205](https://github.com/m-amir-gomaa/m-amir-gomaa.github.io/actions/runs/38873434205). Actual public Chromium review at all four widths passed, including the three Noteweld links, contact, case study and no overflow/page errors. Subsequent README evidence edits do not change the tested interface.

## Connected notes update — 16 October 2026

The Noteweld case study now covers identity-preserving links, explicit ambiguous/unavailable targets, backlinks and graph focus/filter/camera/keyboard behavior. Seven DOM checks and actual local Chromium review at 320/390/768/1440 passed, including all four app/source links, contact and no page overflow/errors. Application code `e1b8740` passed [actual source CI](https://github.com/m-amir-gomaa/keep-nextjs/actions/runs/38877398787); all 14 browser checks passed against the actual Modal HTTPS deployment, including the two-account connection/deletion journey. The graph example uses six original static notes and reads no private API.
