#!/usr/bin/env python3
"""Build Hugo into a temporary directory, then replace only the generated manuals/."""
import argparse
import hashlib
import shutil
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def inventory(path):
    return {str(p.relative_to(path)): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in path.rglob('*') if p.is_file()}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    version = subprocess.check_output(['hugo', 'version'], text=True).split()[1]
    if not version.startswith('v0.156.0'):
        raise SystemExit('Use Hugo 0.156.0 for reproducible output; see documentation/README.md.')
    with tempfile.TemporaryDirectory(prefix='portfolio-hugo-') as temporary:
        output = Path(temporary) / 'manuals'
        subprocess.run(['hugo', '--source', str(ROOT / 'documentation'), '--destination', str(output),
                        '--minify', '--panicOnWarning'], check=True)
        destination = ROOT / 'manuals'
        if args.check:
            if inventory(output) != inventory(destination):
                raise SystemExit('Generated manuals differ. Run python3 scripts/build-docs.py and commit the result.')
            print('Generated Hugo output is reproducible and current.')
        else:
            if destination.is_symlink():
                raise SystemExit('Refusing a symlink output directory')
            if destination.exists():
                shutil.rmtree(destination)
            shutil.copytree(output, destination)
            print(f'Built {len(inventory(destination))} static files into manuals/.')


if __name__ == '__main__':
    main()
