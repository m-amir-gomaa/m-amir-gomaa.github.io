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
function page() { const dom = new JSDOM(html, { url: 'https://m-amir-gomaa.github.io/', runScripts: 'outside-only' }); dom.window.eval(script); return dom; }
await test('all five projects are visible with working source and demo links', () => {
 const dom = page(); const document = dom.window.document;
 assert.equal(document.querySelectorAll('.project').length, 5);
 assert.equal(document.querySelectorAll('.project[hidden]').length, 0);
 assert.ok(document.querySelector('a[href="https://www.upwork.com/freelancers/~0173c5ce93bb9457ec"]'));
 for (const project of document.querySelectorAll('.project')) assert.ok(project.querySelector('a[href*="github.com/"]'));
 for (const anchor of document.querySelectorAll('a[href^="#"]')) assert.ok(document.querySelector(anchor.getAttribute('href')), 'anchor must resolve');
 dom.window.close();
});
await test('project filters update results and accessible pressed state', () => {
 const dom = page(); const document = dom.window.document;
 document.querySelector('[data-filter="web"]').click();
 assert.equal(document.querySelectorAll('.project:not([hidden])').length, 2);
 assert.equal(document.querySelector('#project-count').textContent, '2 projects');
 assert.equal(document.querySelector('[data-filter="all"]').getAttribute('aria-pressed'), 'false');
 document.querySelector('[data-filter="backend"]').click();
 assert.equal(document.querySelectorAll('.project:not([hidden])').length, 1);
 assert.equal(document.querySelector('#project-count').textContent, '1 project');
 document.querySelector('[data-filter="all"]').click();
 assert.equal(document.querySelectorAll('.project:not([hidden])').length, 5);
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
await test('resume, subtitle sample, and embedded app assets exist', () => {
 const dom = page(); const document = dom.window.document;
 for (const anchor of document.querySelectorAll('a[download]')) assert.ok(existsSync(resolve(root, anchor.getAttribute('href'))));
 const app = readFileSync(resolve(root, 'demos/keep/index.html'), 'utf8');
 const embedded = new JSDOM(app);
 for (const source of embedded.window.document.querySelectorAll('script[src]')) assert.ok(existsSync(resolve(root, 'demos/keep', source.getAttribute('src'))));
 assert.ok(readdirSync(resolve(root, 'demos/keep/assets')).length > 0);
 embedded.window.close();dom.window.close();
});
