#!/usr/bin/env python3
"""Verify built site: internal links/fragments, headings, contact-free boundary, and forbidden terms."""
import re
import tomllib
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
SITE_URL = urlsplit(tomllib.loads((ROOT / 'documentation/hugo.toml').read_text())['baseURL'])
ORIGIN = f'{SITE_URL.scheme}://{SITE_URL.netloc}'
ALLOWED_EXTERNAL = {'https://www.upwork.com/freelancers/~0173c5ce93bb9457ec'}
FORBIDDEN_RE = re.compile(
    r'noteweld|mediaweft|pageweft|sonaweft|muxly|synote|carrier-relay|paymob|paddle|'
    r'mailto:|tel:|linkedin\.com|mo\.gomaa\.formal|github\.com/m-amir-gomaa',
    re.I,
)


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()
        self.h1 = 0
        self.forms = 0
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'form':
            self.forms += 1
        for name in ('href', 'src'):
            if name in attrs:
                self.links.append(attrs[name])


def local_target(url):
    path = ROOT / unquote(urlsplit(url).path).lstrip('/')
    if path.is_dir():
        path /= 'index.html'
    resolved = path.resolve()
    if ROOT != resolved and ROOT not in resolved.parents:
        raise ValueError(f'Route escaped root: {url}')
    return resolved


def main():
    html_files = sorted(
        p for p in [ROOT / 'index.html', ROOT / '404.html', *(ROOT / 'manuals').rglob('*.html')]
        if p.exists()
    )
    pages = {p.resolve(): Document(p.read_text(encoding='utf-8')) for p in html_files}
    errors = []
    links_checked = 0

    for path, doc in pages.items():
        rel = path.relative_to(ROOT).as_posix()
        base = f'{ORIGIN}/{rel}'
        if doc.h1 != 1:
            errors.append(f'{rel}: expected 1 <h1>, found {doc.h1}')
        if doc.forms != 0:
            errors.append(f'{rel}: found {doc.forms} <form> elements')
        for link in doc.links:
            if not link or link.startswith('data:'):
                continue
            resolved_url = urljoin(base, link)
            parts = urlsplit(resolved_url)
            if parts.scheme in ('http', 'https') and f'{parts.scheme}://{parts.netloc}' != ORIGIN:
                if resolved_url not in ALLOWED_EXTERNAL:
                    errors.append(f'{rel}: disallowed external link {resolved_url}')
                continue
            target = local_target(resolved_url)
            if not target.exists():
                errors.append(f'{rel}: missing local target {link} -> {target}')
                continue
            if parts.fragment and target in pages:
                if unquote(parts.fragment) not in pages[target].ids:
                    errors.append(f'{rel}: missing fragment #{parts.fragment} in {target.relative_to(ROOT)}')
            links_checked += 1

    # Scan ALL non-git text files for forbidden product or contact terms
    for path in ROOT.rglob('*'):
        if '.git' in path.parts or not path.is_file() or path.name == 'check-docs.py':
            continue
        if path.suffix.lower() in {'.png', '.jpg', '.jpeg', '.ico', '.webp', '.woff2'}:
            continue
        text = path.read_text(encoding='utf-8', errors='ignore')
        m = FORBIDDEN_RE.search(text)
        if m:
            errors.append(f'{path.relative_to(ROOT)}: forbidden match {m.group(0)!r}')

    if errors:
        raise SystemExit('FAILED:\n' + '\n'.join(f'  - {e}' for e in errors))
    print(f'PASS: {len(pages)} HTML pages, {links_checked} local links/assets/fragments, 0 forms, 0 forbidden terms, contact-free (Upwork only).')


if __name__ == '__main__':
    main()
