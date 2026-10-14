'use strict';
const menu = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
 const open = !navigation.classList.contains('open');
 navigation.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('.project[data-category]')];
filters.forEach(filter => filter.addEventListener('click', () => {
 const category = filter.dataset.filter;
 filters.forEach(button => { const active = button === filter; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
 let visible = 0;
 projects.forEach(project => { project.hidden = category !== 'all' && project.dataset.category !== category; if (!project.hidden) visible++; });
 document.getElementById('project-count').textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
}));

const dialog = document.getElementById('demo-dialog');
const frame = document.getElementById('demo-frame');
const sample = document.getElementById('document-sample');
const sampleStatus = document.getElementById('sample-status');
const sampleRetry = document.getElementById('sample-retry');
const sampleImage = document.getElementById('sample-image');
const sampleMarkdown = document.getElementById('sample-markdown');
const pageButtons = [...document.querySelectorAll('[data-sample-page]')];
const copySample = document.getElementById('copy-sample');
const demos = {
 keep: {
  title: 'Knowledge Workspace · local demo',
  description: 'Try notes, checklists, search, and backup. Data stays in this browser.',
  url: 'https://m-amir-gomaa.github.io/Keep/',
 },
 document: {
  title: 'Document Studio · sample output',
  description: 'An original three-page PDF and its actual text-only export. Precomputed sample; no upload or cloud job.',
  url: 'https://m-amir-gomaa--mineru-pdf-extractor-web-app.modal.run/?utm_source=portfolio',
 },
};
let samplePages;
let sampleLoading = false;
let selectedPage = 1;
function showSamplePage(number) {
 selectedPage = number;
 pageButtons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.samplePage) === number)));
 sampleMarkdown.textContent = samplePages[number - 1];
 sampleImage.src = `assets/document-sample/page-${number}.png`;
 sampleImage.alt = `Original PDF page ${number}, excerpt containing the demonstration text`;
 sampleImage.hidden = false;
 document.getElementById('sample-source-link').href = `assets/document-sample/document.pdf#page=${number}`;
 sampleStatus.textContent = `Showing original PDF page ${number} and its exported Markdown.`;
}
async function loadDocumentSample() {
 if (samplePages) { showSamplePage(selectedPage); return; }
 if (sampleLoading) return;
 sampleLoading = true;
 sampleRetry.hidden = true;
 sampleStatus.textContent = 'Loading the sample output…';
 try {
  const response = await fetch('assets/document-sample/field-notes.md');
  if (!response.ok) throw new Error('Sample unavailable');
  const text = await response.text();
  const matches = [...text.matchAll(/<!-- Original PDF page (\d+) -->\s*([\s\S]*?)(?=<!-- Original PDF page \d+ -->|$)/g)];
  if (matches.length !== 3 || matches.some((match, index) => Number(match[1]) !== index + 1)) throw new Error('Incomplete sample');
  samplePages = matches.map(match => `<!-- Original PDF page ${match[1]} -->\n\n${match[2].trim()}`);
  pageButtons.forEach(button => { button.disabled = false; });
  copySample.disabled = false;
  showSamplePage(selectedPage);
 } catch {
  sampleStatus.textContent = 'The preview could not load. Retry, download the sample files, or open the live converter.';
  sampleRetry.hidden = false;
 } finally { sampleLoading = false; }
}
pageButtons.forEach(button => button.addEventListener('click', () => showSamplePage(Number(button.dataset.samplePage))));
sampleRetry.addEventListener('click', loadDocumentSample);
sampleImage.addEventListener('error', () => {
 sampleImage.hidden = true;
 sampleStatus.textContent = 'The source image could not load. You can still read the Markdown or open the original PDF below.';
});
copySample.addEventListener('click', async () => {
 const number = selectedPage;
 try {
  await navigator.clipboard.writeText(sampleMarkdown.textContent);
  sampleStatus.textContent = `Markdown for page ${number} copied.`;
 } catch {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(sampleMarkdown);
  selection.removeAllRanges(); selection.addRange(range);
  sampleStatus.textContent = 'Automatic copying is unavailable. The Markdown is selected for manual copying.';
 }
});
let trigger;
document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', () => {
 const name = button.dataset.demo;
 const demo = demos[name];
 if (!demo) return;
 trigger = button;
 document.getElementById('demo-title').textContent = demo.title;
 document.getElementById('demo-description').textContent = demo.description;
 const external = document.getElementById('demo-external');
 external.href = demo.url;
 external.textContent = name === 'document' ? 'Open live converter in a new tab ↗' : 'Open live site in a new tab ↗';
 frame.hidden = name !== 'keep';
 sample.hidden = name !== 'document';
 if (name === 'keep') frame.src = 'demos/keep/index.html';
 else { frame.removeAttribute('src'); loadDocumentSample(); }
 if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
 document.getElementById('close-demo').focus();
}));
function closeDemo() {
 if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
 frame.removeAttribute('src'); trigger?.focus();
}
document.getElementById('close-demo').addEventListener('click', closeDemo);
dialog.addEventListener('click', event => { if (event.target === dialog) closeDemo(); });
dialog.addEventListener('cancel', event => { event.preventDefault(); closeDemo(); });
document.getElementById('year').textContent = new Date().getFullYear();
