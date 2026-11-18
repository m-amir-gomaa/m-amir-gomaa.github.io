# amirgomaa.com — Personal Freelance Portfolio

Static, contact-free portfolio hosted on GitHub Pages (`amirgomaa.com`) showcasing two documented projects:

1. **Local Keep** — vanilla JavaScript browser notes & checklists app with validated JSON backup/import and embedded interactive demo (`demos/keep/`).
2. **NixOSenv** — reproducible NixOS, Home Manager, Hyprland, and Neovim development workbench (`manuals/development-environment/`).

## Build and Verify

Requires Hugo `v0.156.0` and Python 3.

```sh
python3 scripts/build-docs.py
python3 scripts/build-docs.py --check
python3 scripts/check-docs.py
```

`scripts/check-docs.py` verifies every HTML page has a single `<h1>`, zero broken internal links/assets/fragments, zero `<form>` elements, zero direct off-platform contact links (outbound owner link restricted to Upwork), and reproducible Hugo output.
