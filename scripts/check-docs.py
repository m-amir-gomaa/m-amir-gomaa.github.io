#!/usr/bin/env python3
"""Check the built library, local routes/fragments, provenance and publication boundary."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://m-amir-gomaa.github.io'


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()
        self.h1 = 0
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'h1':
            self.h1 += 1
        for name in ['href', 'src']:
            if name in attrs:
                self.links.append(attrs[name])


def target(url):
    path = ROOT / unquote(urlsplit(url).path).lstrip('/')
    if path.is_dir():
        path /= 'index.html'
    if ROOT not in path.resolve().parents:
        raise ValueError('Route escaped the public root')
    return path


def main():
    pages = {p: Document(p.read_text()) for p in (ROOT / 'manuals').rglob('*.html')}
    pages[ROOT / 'index.html'] = Document((ROOT / 'index.html').read_text())
    errors = []
    checked = 0
    for path, document in pages.items():
        if document.h1 != 1:
            errors.append(f'{path.relative_to(ROOT)}: expected one h1, found {document.h1}')
        base = ORIGIN + '/' + str(path.relative_to(ROOT))
        for link in document.links:
            url = urlsplit(urljoin(base, link))
            if url.netloc != 'm-amir-gomaa.github.io':
                continue
            if url.path == '/Keep/':
                # A separately deployed GitHub project site, outside this repository's artifact.
                continue
            file = target(url.geturl())
            if not file.exists():
                errors.append(f'{path.relative_to(ROOT)}: missing local route {link}')
            elif url.fragment and file.suffix == '.html':
                ids = pages[file].ids if file in pages else Document(file.read_text()).ids
                if unquote(url.fragment) not in ids:
                    errors.append(f'{path.relative_to(ROOT)}: missing fragment {link}')
            checked += 1
    inventory = json.loads((ROOT / 'manuals/sources.json').read_text())
    if len(inventory['documents']) != 28:
        errors.append('Source coverage changed: review the manifest and documentation.')
    manifest = json.loads((ROOT / 'documentation/manifest.json').read_text())
    if len(manifest['projects']) != 5:
        errors.append('Expected five project implementations')
    for record in inventory['documents']:
        if not target(ORIGIN + record['url']).exists():
            errors.append(f"Missing documented source {record['project']}/{record['path']}")
    for file in (ROOT / 'manuals').rglob('*'):
        if not file.is_file():
            continue
        if file.suffix not in ['.html', '.css', '.js', '.json', '.xml', '.txt', '.md']:
            errors.append(f'Unexpected public artifact: {file.relative_to(ROOT)}')
        content = file.read_text()
        if '/home/qwerty/' in content or 'general fear of failure' in content:
            errors.append(f'Private context in {file.relative_to(ROOT)}')
        if re.search(r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|postgres(?:ql)?://[^\s:@]+:[^\s@]+@|\b(?:ghp_|pdl_live_apikey_)[A-Za-z0-9_-]{25,}', content):
            errors.append(f'Potential secret in {file.relative_to(ROOT)}; inspect privately')
    search = json.loads((ROOT / 'manuals/index.json').read_text())
    if len(search) != 36 or not all(item['url'].startswith('/manuals/') for item in search):
        errors.append('Search index coverage/routes differ from the reviewed library')
    if errors:
        raise SystemExit('\n'.join(errors))
    print(f'{len(pages)} HTML pages, {checked} local links/assets/fragments, 28 source records and 36 indexed articles passed.')


if __name__ == '__main__':
    main()
