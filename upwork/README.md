# Contact-free portfolio edition

Canonical public target: **https://work.amirgomaa.com/**. This edition is separate
from the regular GitHub Pages portfolio at amirgomaa.com. Its only owner contact
destination is the existing Upwork profile; it contains no email/social contact
links and no route back to contact-bearing owner pages.

It preserves the four case studies, a clearly labeled Noteweld editor screenshot,
the actual browser-only local notebook, the original PDF/source comparison and
the attributed completed NOAA scientific recording/transcript. Demos and downloads
are served locally to this host. There is no sign-in, upload, API, payment or new
processing request, and no connection to the owner's guest allowance service.
No claim of Upwork moderation/approval follows from these technical checks.

## Build and inspect

From the portfolio root in Amir's existing workspace:

```sh
node scripts/build-upwork.mjs
node scripts/build-upwork.mjs --check
node scripts/check-upwork.mjs
node --test tests/portfolio.test.mjs
```

The generator reads explicit already-public inputs from this repository, the
published Sonaweft example and one approved screenshot in the workflow packet.
It uses the sibling vanilla project's installed jsdom, like existing portfolio
checks. A standalone public clone can serve the checked-in `site/` output without
those private workspace inputs; regenerating it requires the owner workspace.
Never point the build at a private project directory or recursively mirror uploads.
The build rejects unexpected generated files and contact-bearing output strings.
`site/build-manifest.json` records input and output hashes, without credentials.

The copied local notebook's favicon reference is repaired to its existing SVG.
The copied demo permits explicit backup downloads and forwards Escape to its
owning dialog after action-button use; the parent checks message origin/source.
Case-study links reveal filtered projects and open their native disclosure.
Sonaweft navigation is confined to this edition and its NOAA source attribution;
the original app, main portfolio and their existing links remain untouched.
The PDF preview retains loading/failure/retry and actual downloads. Each example
is labeled with its limits; a screenshot is not presented as a live hosted editor.

## Hosting and release

Deployment configuration is the existing owner edge project's
`../workflow/cloudflare-edge/wrangler.upwork.jsonc` (relative to the portfolio root).
Use its pinned Wrangler 4.151.1, existing authenticated account and only the named
`amir-work-portfolio` resource. It is an **assets-only** deployment, with no custom
Worker handler, bindings, secrets or new paid plan. Cloudflare documents static
asset requests/storage as free; there is no Modal inference in this edition.

From `../workflow/cloudflare-edge/`:

```sh
./node_modules/.bin/wrangler deploy -c wrangler.upwork.jsonc --dry-run
./node_modules/.bin/wrangler deploy -c wrangler.upwork.jsonc
```

Local dev uses the pinned runtime's supported date override, 2026-10-19; the release
configuration retains 2026-10-23. Do not upgrade global tooling just to silence a
local date warning. `tests/upwork.browser.cjs` accepts `UPWORK_SITE_URL` for the
local or actual deployed site and `UPWORK_EVIDENCE_DIR` for its private evidence.
It checks four widths, local demos, scientific audio, keyboard/focus, automated
accessibility, downloads, failure/retry, no-JavaScript reading and external requests.
Inspect captured screenshots separately before publication.

`_headers` supplies content/security/indexing rules. Unknown routes have a local
404 page and never fall through to the regular portfolio. Rollback deploys the
previous reviewed static directory to this same resource; it does not change
the main Pages site, product gateways, DNS for other hosts or app data.

The audio response advertises its actual byte-range capability. Without that
header, the tested browser treated the loaded audio as unseekable even though
its bytes were buffered; adding the header restores timestamp seeking. A range
request can return a valid full representation when the cache path does not
select partial delivery. Acceptance checks real playback/seek as well as valid
partial or complete response lengths, rather than assuming every request is206.

Local acceptance: reproducible37-file build,49 local links/assets/fragments,
36 manifest hashes and contact checks pass; the original portfolio's nine DOM
cases pass. Four-width actual local runtime checks pass for demos, audio seeking,
backup/PDF downloads, keyboard/focus, failure/retry, automated accessibility,
no-JavaScript reading and no external requests. Public acceptance is recorded
separately in the private release milestone after deployment.

## Sources checked 23 October 2026

- [Upwork portfolio guidance](https://support.upwork.com/hc/en-us/articles/360016144974-How-to-enhance-your-freelancer-profile): external portfolio links and contact-detail restrictions.
- [Cloudflare static assets](https://developers.cloudflare.com/workers/static-assets/): assets-only behavior and routing.
- [Headers](https://developers.cloudflare.com/workers/static-assets/headers/) and [billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/): static response configuration and the separation from dynamic Worker requests.

The Upwork project fields, screenshots and actual publication state belong in
the private workflow handoff, not this public static directory.
