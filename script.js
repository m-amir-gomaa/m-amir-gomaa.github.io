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
let trigger;
document.querySelectorAll('[data-demo="keep"]').forEach(button => button.addEventListener('click', () => {
 trigger = button; frame.src = 'demos/keep/index.html';
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
