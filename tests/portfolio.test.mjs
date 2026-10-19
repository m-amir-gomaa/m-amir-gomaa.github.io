// Uses the sibling Keep project's installed jsdom in this shared workspace.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
const require = createRequire(resolve(import.meta.dirname, '../../Keep/package.json'));
const { JSDOM } = require('jsdom');
const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const script = readFileSync(resolve(root, 'script.js'), 'utf8');
await test('documentation library is connected from navigation and every project', () => {
 const document = new JSDOM(html).window.document;
 assert.ok(document.querySelector('#navigation a[href="manuals/"]'));
 assert.ok(document.querySelector('#documentation a[href="manuals/"]'));
 for (const project of document.querySelectorAll('.project')) {
  const manual = project.querySelector('a[href^="manuals/"]');
  assert.ok(manual);
  assert.ok(existsSync(resolve(root, manual.getAttribute('href'), 'index.html')));
  const history = project.querySelector('a[href$="/build-history/"]');
  assert.ok(history);
  assert.ok(existsSync(resolve(root, history.getAttribute('href'), 'index.html')));
 }
});
function page() { const dom = new JSDOM(html, { url: 'https://m-amir-gomaa.github.io/', runScripts: 'outside-only' }); dom.window.eval(script); return dom; }
await test('all four projects expose demos and readable source or implementation guides', () => {
 const dom = page(); const document = dom.window.document;
 assert.equal(document.querySelectorAll('.project').length, 4);
 assert.equal(document.querySelectorAll('.project[hidden]').length, 0);
 assert.ok(document.querySelector('a[href="https://www.upwork.com/freelancers/~0173c5ce93bb9457ec"]'));
 for (const project of document.querySelectorAll('.project')) {
  const source = project.querySelector('a[href*="github.com/"]');
  const architecture = project.querySelector('a[href^="manuals/"][href$="/overview/"]');
  assert.ok(source || architecture, 'Every project needs readable implementation evidence');
  if (architecture) assert.ok(existsSync(resolve(root, architecture.getAttribute('href'), 'index.html')));
 }
 for (const repository of ['keep-nextjs', 'ig_intel', 'PDF2Markdown-']) {
  assert.equal(document.querySelector(`.project a[href*="github.com/m-amir-gomaa/${repository}"]`), null,
   'Commercial cards should lead to public evidence, rather than owner-access repositories');
 }
 assert.ok(document.querySelector('a[href="manuals/journal/source-access/"]'));
 for (const anchor of document.querySelectorAll('a[href^="#"]')) assert.ok(document.querySelector(anchor.getAttribute('href')), 'anchor must resolve');
 dom.window.close();
});
await test('project filters update results and accessible pressed state', () => {
 const dom = page(); const document = dom.window.document;
 document.querySelector('[data-filter="web"]').click();
 assert.equal(document.querySelectorAll('.project:not([hidden])').length, 2);
 assert.equal(document.querySelector('#project-count').textContent, '2 projects');
 assert.equal(document.querySelector('[data-filter="all"]').getAttribute('aria-pressed'), 'false');
 document.querySelector('[data-filter="tools"]').click();
 assert.equal(document.querySelectorAll('.project:not([hidden])').length, 2);
 assert.equal(document.querySelector('#project-count').textContent, '2 projects');
 document.querySelector('[data-filter="all"]').click();
 assert.equal(document.querySelectorAll('.project:not([hidden])').length, 4);
 dom.window.close();
});
await test('mobile navigation closes on selection, outside clicks, and Escape', () => {
 const dom = page(); const document = dom.window.document; const menu = document.querySelector('#menu-toggle');
 menu.click(); assert.equal(menu.getAttribute('aria-expanded'), 'true');
 document.querySelector('#navigation a').click(); assert.equal(menu.getAttribute('aria-expanded'), 'false');
 menu.click(); document.body.click(); assert.equal(menu.getAttribute('aria-expanded'), 'false');
 menu.click(); document.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
 assert.equal(menu.getAttribute('aria-expanded'), 'false'); dom.window.close();
});
await test('interactive demo opens local app, unloads on close, and restores focus', () => {
 const dom = page(); const document = dom.window.document; const trigger = document.querySelector('[data-demo]');
 trigger.click(); assert.equal(document.querySelector('#demo-frame').getAttribute('src'), 'demos/keep/index.html');
 assert.ok(document.querySelector('#demo-dialog').hasAttribute('open'));
 document.querySelector('#close-demo').click();
 assert.equal(document.querySelector('#demo-frame').hasAttribute('src'), false);
 assert.equal(document.activeElement, trigger); dom.window.close();
});
await test('document preview uses actual local output, switches pages and restores the Keep demo', async () => {
 const dom = page(); const document = dom.window.document; const requests = [];
 dom.window.fetch = async url => {
  requests.push(url);
  return { ok: true, text: async () => readFileSync(resolve(root, url), 'utf8') };
 };
 const trigger = document.querySelector('[data-demo="document"]');
 trigger.click();
 await new Promise(resolve => setImmediate(resolve));
 assert.deepEqual(requests, ['assets/document-sample/field-notes.md']);
 assert.ok(document.querySelector('#demo-frame').hidden);
 assert.equal(document.querySelector('#demo-frame').hasAttribute('src'), false);
 assert.equal(document.querySelector('#document-sample').hidden, false);
 assert.match(document.querySelector('#sample-markdown').textContent, /Field notes: vegetation survey/);
 document.querySelector('[data-sample-page="2"]').click();
 assert.match(document.querySelector('#sample-markdown').textContent, /Site B: 18 plants/);
 assert.equal(document.querySelector('#sample-source-link').getAttribute('href'), 'assets/document-sample/document.pdf#page=2');
 assert.equal(document.querySelector('[data-sample-page="1"]').getAttribute('aria-pressed'), 'false');
 assert.ok(document.querySelector('#demo-external').href.startsWith('https://pageweft.amirgomaa.com/'));
 document.querySelector('#close-demo').click();
 assert.equal(document.activeElement, trigger);
 document.querySelector('[data-demo="keep"]').click();
 assert.equal(document.querySelector('#document-sample').hidden, true);
 assert.equal(document.querySelector('#demo-frame').hidden, false);
 assert.equal(document.querySelector('#demo-frame').getAttribute('src'), 'demos/keep/index.html');
 assert.match(document.querySelector('#demo-title').textContent, /Knowledge Workspace/);
 dom.window.close();
});
await test('unavailable sample can be retried without disabling downloads or live access', async () => {
 const dom = page(); const document = dom.window.document;
 dom.window.fetch = async () => ({ ok: false });
 document.querySelector('[data-demo="document"]').click();
 await new Promise(resolve => setImmediate(resolve));
 assert.equal(document.querySelector('#sample-retry').hidden, false);
 assert.match(document.querySelector('#sample-status').textContent, /could not load/);
 assert.ok(document.querySelector('#document-sample a[download]'));
 assert.equal(new URL(document.querySelector('#demo-external').href).origin, 'https://pageweft.amirgomaa.com');
 dom.window.fetch = async url => ({ ok: true, text: async () => readFileSync(resolve(root, url), 'utf8') });
 document.querySelector('#sample-retry').click();
 await new Promise(resolve => setImmediate(resolve));
 assert.equal(document.querySelector('#sample-retry').hidden, true);
 assert.match(document.querySelector('#sample-markdown').textContent, /Field notes: vegetation survey/);
 assert.equal(document.querySelector('#copy-sample').disabled, false);
 dom.window.close();
});
await test('published downloads are valid targets and unreviewed resume is not offered', () => {
 const dom = page(); const document = dom.window.document;
 assert.equal(document.querySelectorAll('a[href$=".pdf"][href*="resume"]').length, 0);
 assert.ok(document.querySelector('#navigation a[href="manuals/development-environment/"]'));
 for (const anchor of document.querySelectorAll('a[download]')) assert.ok(existsSync(resolve(root, anchor.getAttribute('href'))));
 const app = readFileSync(resolve(root, 'demos/keep/index.html'), 'utf8');
 const embedded = new JSDOM(app);
 for (const source of embedded.window.document.querySelectorAll('script[src]')) assert.ok(existsSync(resolve(root, 'demos/keep', source.getAttribute('src'))));
 assert.ok(readdirSync(resolve(root, 'demos/keep/assets')).length > 0);
 embedded.window.close();dom.window.close();
});

await test('retired Go project has no card, filter, styling or published manual', () => {
 const document = new JSDOM(html).window.document;
 assert.equal(document.querySelector('#hermes'), null);
 assert.equal(document.querySelector('[data-filter="backend"]'), null);
 assert.equal(document.querySelector('[data-filter="all"] span').textContent, '04');
 assert.equal(document.querySelector('#project-count').textContent, '4 projects');
 assert.doesNotMatch(html, /batchlark|portfolio-hermes|queue-lab/i);
 assert.doesNotMatch(readFileSync(resolve(root, 'style.css'), 'utf8'), /hermes-cover|queue-art|worker-row/);
 assert.equal(existsSync(resolve(root, 'manuals/queue-lab')), false);
});
