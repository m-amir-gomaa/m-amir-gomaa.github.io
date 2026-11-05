"""Publication guards operate on synthetic fixture documents, never owner secrets."""
import importlib.util
import json
import subprocess
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

spec=importlib.util.spec_from_file_location('manual_sync',Path(__file__).resolve().parents[1]/'scripts/sync-manuals.py')
sync=importlib.util.module_from_spec(spec);spec.loader.exec_module(sync)

class PublicationBoundary(unittest.TestCase):
    def test_private_document_stays_out_while_curated_public_summary_is_exact(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)/'site';repo=Path(tmp)/'app';docs=root/'documentation'
            (docs/'content').mkdir(parents=True);(repo/'docs').mkdir(parents=True)
            (repo/'README.md').write_text('# Fixture\n\nPublic text.\n')
            (repo/'docs/PRIVATE.md').write_text('# Private\nOWNER_SENTINEL_NOT_FOR_PUBLICATION\n')
            (repo/'docs/RELEASE.md').write_text('# Release\nINTERNAL_SENTINEL_NOT_FOR_PUBLICATION\n')
            subprocess.run(['git','init','-q',str(repo)],check=True)
            subprocess.run(['git','-C',str(repo),'add','.'],check=True)
            subprocess.run(['git','-C',str(repo),'-c','user.name=Fixture','-c','user.email=fixture@example.test','commit','-qm','Fixture'],check=True)
            manifest={'projects':[{'slug':'fixture','title':'Fixture','directory':'../app','repository':'private-fixture','source_access':'owner','notice':'Reviewed fixture.',
                'files':[{'path':'README.md','slug':'overview','title':'Overview','description':'Fixture'},
                         {'path':'docs/RELEASE.md','slug':'release','title':'Release','description':'Reviewed','mode':'curated','context':'Only this approved public summary.'}],
                'excluded_files':[{'path':'docs/PRIVATE.md','reason':'Private fixture.'}]}]}
            (docs/'manifest.json').write_text(json.dumps(manifest))
            with patch.object(sync,'ROOT',root),patch.object(sync,'DOCS',docs),patch('sys.argv',['sync-manuals.py']):sync.main()
            published='\n'.join(p.read_text() for p in docs.rglob('*') if p.is_file() and p.name!='manifest.json')
            self.assertNotIn('OWNER_SENTINEL',published);self.assertNotIn('INTERNAL_SENTINEL',published)
            self.assertIn('Only this approved public summary.',published)
            inventory=json.loads((docs/'static/sources.json').read_text())
            self.assertEqual({x['path'] for x in inventory['documents']},{'README.md','docs/RELEASE.md'})
            manifest['projects'][0]['excluded_files']=[];(docs/'manifest.json').write_text(json.dumps(manifest))
            with patch.object(sync,'ROOT',root),patch.object(sync,'DOCS',docs),patch('sys.argv',['sync-manuals.py']):
                with self.assertRaisesRegex(SystemExit,'Review new'):sync.main()

if __name__=='__main__':unittest.main()
