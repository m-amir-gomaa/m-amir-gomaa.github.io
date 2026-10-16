# Amir Gomaa — freelance portfolio

Static HTML, CSS, and JavaScript portfolio with project filters, case studies, Upwork/email contact links, mobile navigation, an interactive vanilla Keep demo and an embedded Pageweft sample-output viewer. The companion **Fieldnotes** library is built with Hugo; its generated files are committed, so serving the portfolio does not require a runtime build.

## Fieldnotes — 16 October 2026

[Open the manuals and journal](https://m-amir-gomaa.github.io/manuals/). Navigation, all five project cards and a dedicated portfolio section link the library. It contains five current usage guides, 28 reviewed source-document records (including five explicitly historical references), three journal entries, browser-local search, a table of contents, Markdown downloads, RSS and sitemap. Imported references identify exact source revisions; the vanilla README's reviewed working-copy edition is marked. Private books, credentials, personal account questions and untracked work are excluded. Older release records retain their original milestone/date and current context.

Hugo **0.156.0** source is in `documentation/`; generated output is `manuals/`. [Build/update instructions](documentation/README.md) and the [publication guide](documentation/content/journal/publishing.md) explain the explicit refresh and existing GitHub Pages workflow. No new hosting account, application server, payment activation, NixOS edit or provider setup is needed. Rollback is a normal portfolio Git commit; application data is unchanged. Source documents in other repositories and their existing working changes were not modified.

Local verification passed: reproducible Hugo build; 28 source snapshot checks; 45 HTML pages and 862 local link/asset/fragment checks; eight DOM regressions; 24 grouped Chromium checks covering four viewport widths, all 36 article routes, search/error/retry/no-results, real Markdown download and clipboard copying, keyboard navigation and no-JavaScript reading. The Hugo pages made no external requests. Desktop/phone screenshots were inspected. System Chromium evidence does not certify physical iOS/Safari or every assistive technology. Publication and actual public checks are recorded in the release milestone rather than inferred from these local results.

Current update — 16 October 2026: Noteweld now includes stable wiki links, outgoing/backlink panels, authenticated linked-note pages and a bounded/filterable graph. Its card links the account-free editor, original graph example, private workspace and `feat/connected-notes` source. The separate vanilla implementation is unchanged. The cover remains an illustration; graph limits and future import/revision work are explicit.

The full-stack cover and Hermes diagram are illustrations, clearly labeled. Project descriptions distinguish implemented features from simulation and planned work.

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

Commit site assets and publish through this repository's GitHub Pages configuration after reviewing locally. Publication is authorized by Amir on 14 October 2026; the release evidence is recorded below. The existing resume PDF is preserved and should be reviewed for current accuracy.

## Release review — 14 October 2026

Approved titles: Knowledge Workspace, Knowledge Workspace — Vanilla JS Demo, Queue Lab, Transcript Studio and Document Studio. Existing repo URLs remain unchanged. Document Studio now links its bounded public trial; its persistent ledger, source-aware exports and paid/full-book limitations are described explicitly. A real public synthetic upload/conversion/download and session isolation passed in the Document Studio repository; the portfolio itself does not certify document fidelity or payment readiness.

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
