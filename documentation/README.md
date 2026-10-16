# Fieldnotes — Hugo project documentation and journal

Source is here; generated output is `../manuals/`. The existing GitHub Pages root publishes both the portfolio and the library. Keeping reviewed generated files in Git avoids changing the working Pages deployment mode or requiring a new hosting account.

Use **Hugo 0.156.0** (already provided by this NixOS environment) and Python 3. The build refuses another Hugo version rather than silently changing generated output. On a different machine, obtain that version through the [official releases](https://github.com/gohugoio/hugo/releases/tag/v0.156.0), verify the official checksum, or use an appropriately pinned Nix package. No new global package or NixOS rebuild is required here.

```sh
python3 scripts/sync-manuals.py
python3 scripts/sync-manuals.py --check
python3 scripts/build-docs.py
python3 scripts/build-docs.py --check
python3 scripts/check-docs.py
node tests/portfolio.test.mjs
python3 -m http.server 8315 --bind 127.0.0.1
# In another shell:
node tests/docs.browser.cjs
```

Run commands from the portfolio root. Browser checks reuse the existing sibling Noteweld Playwright installation and system Chromium; the existing DOM suite uses the sibling vanilla project's jsdom. They do not contact processing APIs. Override `CHROMIUM_PATH` or `PORTFOLIO_TEST_URL` when needed. Browser artifacts stay ignored in `.local/docs-browser/`. Physical iOS/Safari and every assistive technology are not certified by Chromium checks.

Read the [publishing guide](content/journal/publishing.md) and explicit [manifest](manifest.json) before synchronizing new material. Source inspection and publication are deliberate steps: no cron job or automatic private-directory mirror is enabled. All 28 tracked README/docs records from five project implementations are accounted for. Five old/personal-planning documents are archive-reference pages; other imports are reviewed public editions. Source books, personal account questions, credentials, agent files, generated third-party transcripts and untracked work are excluded. Source revisions/hashes are visible in `manuals/sources.json`; the vanilla README is explicitly marked as a reviewed working-copy edition.

Public pages support project reading order, code copy, a table of contents, searchable static JSON, reviewed Markdown downloads, canonical URLs, sitemap, RSS and a no-JavaScript reading route. Tables/code deliberately scroll internally on narrow screens. Search has loading/error/retry/empty states and uses no external service, cookies or analytics. There is no theme dependency, CDN, remote font or application backend.

References checked 16 October 2026: [Hugo templates](https://gohugo.io/templates/types/), [link hooks](https://gohugo.io/render-hooks/links/), [Goldmark configuration](https://gohugo.io/configuration/markup/), [GitHub Pages deployment](https://gohugo.io/host-and-deploy/deploy-to-github-pages/). `manuals/` is generated; edit content/templates/assets or the source project and rebuild. Rollback is a normal reviewed portfolio commit; no app database or payment configuration is changed.
