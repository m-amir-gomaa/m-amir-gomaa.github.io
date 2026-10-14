# Amir Gomaa — freelance portfolio

Static HTML, CSS, and JavaScript portfolio with project filters, case studies, an Upwork contact link, mobile navigation, and an interactive vanilla Keep demo. No site build or external font request is required.

The full-stack cover and Hermes diagram are illustrations, clearly labeled. Project descriptions distinguish implemented features from simulation and planned work.

## Preview and checks

From this directory, run `python -m http.server 8000` and open `http://localhost:8000`. The embedded app uses this portfolio’s origin for localStorage. The separately linked `/Keep/` demo shares storage only when served on the same scheme, host, and port.

```sh
node --check script.js
node tests/portfolio.test.mjs
```

The tests use jsdom installed in sibling `../Keep` (`npm ci` there first). They cover project links, filters, mobile navigation, demo cleanup, and bundled assets. Browser screenshots and visual review remain necessary before publication.

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
