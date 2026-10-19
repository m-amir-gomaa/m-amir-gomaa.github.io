#!/usr/bin/env python3
"""Refresh only reviewed documentation sources. Never recursively copy a repository."""
import argparse
import hashlib
import json
import posixpath
import re
import subprocess
from pathlib import Path
from urllib.parse import quote, urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / 'documentation'
DATE = '2026-10-19'


def git(path, *args):
    return subprocess.check_output(['git', *args], cwd=path, text=True).strip()


def digest(text):
    return hashlib.sha256(text.encode()).hexdigest()


def frontmatter(values, body):
    # JSON is a supported Hugo front matter format and escapes titles safely.
    return json.dumps(values, ensure_ascii=False, indent=2) + '\n\n' + body.rstrip() + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Compare with reviewed local sources without writing')
    args = parser.parse_args()
    manifest = json.loads((DOCS / 'manifest.json').read_text())
    records = []
    artifact_records = []
    generated = {}
    for project in manifest['projects']:
        repo = (ROOT / project['directory']).resolve()
        revision = git(repo, 'rev-parse', 'HEAD')
        files = {entry['path']: entry for entry in project['files']}
        artifacts = {entry['path']: entry['public'] for entry in project.get('artifacts', [])}
        for source_path, public_path in artifacts.items():
            source = repo / source_path
            if source.is_symlink() or repo not in source.resolve().parents or not public_path.startswith('metadata/') or '..' in public_path.split('/') or not public_path.endswith('.json'):
                raise SystemExit('Unsafe reviewed metadata path')
            content = source.read_text()
            metadata = json.loads(content)
            if len(content.encode()) > 2 * 1024 * 1024 or not isinstance(metadata, dict) or metadata.get('schema') not in {'pageweft-image-inventory/v1', 'sonaweft-image-inventory/v1'}:
                raise SystemExit('Invalid reviewed metadata artifact')
            generated[DOCS / 'static' / public_path] = content
            artifact_records.append(dict(project=project['slug'], path=source_path, revision=revision,
                                         sha256=digest(content), url='/manuals/' + public_path))
        tracked = git(repo, 'ls-files', 'README.md', 'docs/*.md').splitlines()
        unreviewed = sorted(set(tracked) - files.keys())
        if unreviewed:
            raise SystemExit(f"Review new {project['title']} documents before publication: {', '.join(unreviewed)}")
        for number, entry in enumerate(project['files'], start=1):
            source = repo / entry['path']
            if source.is_symlink() or repo not in source.resolve().parents:
                raise SystemExit('A source path escaped its repository')
            text = source.read_text()
            source_url = f"https://github.com/m-amir-gomaa/{project['repository']}/blob/{revision}/{quote(entry['path'])}"
            working_copy = bool(git(repo, 'status', '--porcelain', '--', entry['path']))
            notice = project['notice']
            if project.get('source_access') == 'owner':
                source_url = ''
                notice += f' Source revision {revision[:7]} is retained for the owner; anonymous repository access is unavailable. This reviewed public edition is readable independently.'
            if entry.get('category') == 'Release record':
                notice = 'Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. ' + notice
            if entry.get('mode') == 'reference':
                body = '## Why this record is separate\n\n' + entry['context'] + '\n\nRead the current usage guide and project index first. Historical Markdown remains at the recorded source revision (repository access may be required); its commands, provider assumptions and completion claims are not current instructions.\n'
                notice = 'Historical reference; not part of the current setup or recommended execution path.'
            else:
                body = text
                if body.startswith('# '):
                    body = body.split('\n', 1)[1].lstrip()
                # Imported files live below a template-owned h1; preserve code fences verbatim.
                fence = None
                lines = []
                for line in body.splitlines():
                    marker = re.match(r'^\s*(`{3,}|~{3,})', line)
                    if marker:
                        token = marker.group(1)[0]
                        fence = None if fence == token else token if fence is None else fence
                    lines.append('#' + line if fence is None and line.startswith('# ') else line)
                body = '\n'.join(lines)
                # Keep personal conversation, unpublished evidence and home-directory identity out of the public edition.
                body = body.replace('/home/qwerty/Projects', '~/Projects')
                if project['slug'] == 'pageweft' and entry['path'] == 'docs/LAUNCH.md':
                    body = body.split('## Owner account status and remaining answer')[0].rstrip()
                # These headings refer to research snapshots, not current third-party fee quotations.
                if entry['path'] in ['docs/BOOK-RELEASE.md', 'docs/PAYMENT-ACTIVATION.md']:
                    notice += ' Earlier Lemon Squeezy material is historical; Paddle is the selected integration and checkout remains closed. External prices require fresh verification.'

                def link(match):
                    label, destination = match.group(1), match.group(2)
                    parsed = urlsplit(destination)
                    if project.get('source_access') == 'owner' and parsed.hostname == 'github.com' and (unquote(parsed.path) + '/').startswith(f"/m-amir-gomaa/{project['repository']}/"):
                        return label + ' (source repository requires access)'
                    if parsed.scheme or destination.startswith(('#', '/', '//')):
                        return match.group(0)
                    target = posixpath.normpath(posixpath.join(posixpath.dirname(entry['path']), unquote(parsed.path)))
                    suffix = ('#' + parsed.fragment) if parsed.fragment else ''
                    if target in files:
                        url = f"/manuals/{project['slug']}/{files[target]['slug']}/{suffix}"
                    elif target in artifacts:
                        url = '/manuals/' + artifacts[target] + suffix
                    elif target in ['.', 'docs']:
                        url = f"/manuals/{project['slug']}/"
                    else:
                        # Link to tracked code, never publish local evidence, credential files or books.
                        if not target.startswith('../') and git(repo, 'ls-files', '--', target):
                            if project.get('source_access') == 'owner':
                                return label + ' (source repository requires access)'
                            url = f"https://github.com/m-amir-gomaa/{project['repository']}/blob/{revision}/{quote(target)}{suffix}"
                        else:
                            return label + ' (local reference; not published)'
                    return f'[{label}]({url})'

                body = re.sub(r'\[([^\]\n]+)\]\(([^\s)]+)\)', link, body)
                if entry.get('category') == 'Release record':
                    heading = text.splitlines()[0].lstrip('# ')
                    body = f'*Original record: {heading}.*\n\n' + body
            # A hard stop for obvious credentials. This supplements the explicit human-reviewed allowlist.
            patterns = [r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----', r'\b(?:sk_live_|pdl_live_apikey_)[A-Za-z0-9_-]{12,}', r'postgres(?:ql)?://[^\s:@]+:[^\s@]+@', r'\bgh[pousr]_[A-Za-z0-9]{25,}']
            if any(re.search(pattern, body) for pattern in patterns):
                raise SystemExit(f"Potential credential: review {project['slug']}/{entry['path']} privately")
            relative = f"{project['slug']}/{entry['slug']}"
            download = f"markdown/{relative}.md"
            values = dict(title=entry['title'], description=entry['description'], date=DATE, weight=number * 10 + 20,
                          project=project['title'], category=entry.get('category', 'Reference'), notice=notice,
                          sourceurl=source_url, download=download)
            if working_copy:
                values['notice'] += ' This reviewed documentation snapshot includes local documentation edits; the recorded revision is the committed baseline.'
            generated[DOCS / 'content' / (relative + '.md')] = frontmatter(values, body)
            # Download the reviewed public edition with provenance, rather than any private original file.
            baseline = source_url or f"Owner-access repository, revision {revision}"
            generated[DOCS / 'static' / download] = f"# {entry['title']}\n\n> {values['notice']}\n\nSource baseline: {baseline}\nReviewed: {DATE}\n\n" + body.rstrip() + '\n'
            records.append(dict(project=project['slug'], path=entry['path'], revision=revision,
                                working_copy=working_copy, source_sha256=digest(text), public_sha256=digest(body),
                                url=f'/manuals/{relative}/', mode=entry.get('mode', 'public-edition')))
    for path in sorted((DOCS / 'content').rglob('*.md')):
        if path.name == '_index.md' or path in generated:
            continue
        text = path.read_text()
        values, end = json.JSONDecoder().raw_decode(text)
        if values.get('sourceurl'):
            continue
        relative = path.relative_to(DOCS / 'content')
        values['download'] = 'markdown/' + str(relative)
        body = text[end:].strip()
        generated[path] = frontmatter(values, body)
        generated[DOCS / 'static' / values['download']] = f"# {values['title']}\n\nReviewed: {DATE}\n\n{body}\n"
    generated[DOCS / 'static' / 'sources.json'] = json.dumps(dict(reviewed=DATE, documents=records, artifacts=artifact_records), indent=2) + '\n'
    differences = [str(path.relative_to(ROOT)) for path, content in generated.items() if not path.exists() or path.read_text() != content]
    if args.check:
        if differences:
            raise SystemExit(f'{len(differences)} documentation snapshot files differ; review and run scripts/sync-manuals.py')
        print(f'{len(records)} reviewed source documents match their snapshots.')
        return
    for path, content in generated.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content)
    print(f'Refreshed {len(records)} allowlisted documentation pages and public Markdown editions.')


if __name__ == '__main__':
    main()
