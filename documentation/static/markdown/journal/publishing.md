# Maintaining this documentation library

Reviewed: 2026-10-16

## Source and publication

The actual portfolio repository contains `documentation/` for Hugo source and `manuals/` for generated static output. The existing GitHub Pages root serves both the portfolio and `/manuals/`. No application server, visitor login, external font, analytics service or search API is needed.

Hugo 0.156.0 is the recorded build version. Imported project README/docs files are explicitly listed in `documentation/manifest.json`; this is not a recursive copy of the workspace. Current usage guides and journal entries are authored directly in Hugo content.

## Refresh a reviewed source snapshot

From the portfolio repository, inspect the documentation changes in the sibling project first. New files require an explicit manifest review. Then run:

```sh
python3 scripts/sync-manuals.py
python3 scripts/sync-manuals.py --check
python3 scripts/build-docs.py
python3 scripts/build-docs.py --check
python3 scripts/check-docs.py
node tests/portfolio.test.mjs
```

Source revisions and content hashes are recorded in [the source inventory](/manuals/sources.json). Imported links point to the corresponding manual or exact GitHub source revision. Downloads contain the reviewed public edition and provenance. Synchronization is explicit; this is not a live mirror of private workspace changes.

## Review and publish

Preview the repository with a local static HTTP server. Check mobile layout, search, keyboard navigation, Markdown downloads and relevant portfolio controls. Review the diff for secrets, personal notes, source books and misleading claims before committing. Push the reviewed portfolio main branch to use its existing Pages publication; check the completed deployment and actual public pages.

The build script uses a temporary directory, verifies the pinned Hugo version and replaces only generated `manuals/` output. Its check mode compares every generated file. Source Markdown and existing portfolio/demo assets are not deleted by that build. Restoring a previous portfolio commit rolls back the static publication without changing application databases.

## Included and excluded material

All 28 reviewed README/docs records from the five portfolio implementations are represented. Current guides, technical references, operations and release records are rendered. Five obsolete/personal-planning documents get clearly labeled archive entries that link their existing source instead of copying obsolete commands or personal conversation. Owner-specific questions at the end of the Pageweft launch register are omitted.

Agent instructions, private environment files, customer uploads, untracked work, generated transcripts, extracted books, original source PDFs and startup/business paperwork are outside this library. Existing unrelated working changes remain in their own repositories. Private evidence files are not uploaded to the site.

## Future entries

Add ordinary Markdown under `documentation/content/journal/` with a title, date and description, then rebuild. The home page lists new entries and publishes an RSS feed. Search reads a static generated JSON index in the visitor's browser; no query is sent to a search provider. Without JavaScript, project navigation and manuals remain readable.
