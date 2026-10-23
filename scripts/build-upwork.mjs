// Build a self-contained edition from approved public inputs; never mirror private folders.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, dirname, relative, join } from 'node:path';
import { createHash } from 'node:crypto';
const packages=createRequire(resolve(import.meta.dirname,'../../Keep/package.json'));
const {JSDOM}=packages('jsdom');
const root=resolve(import.meta.dirname,'..'),destination=join(root,'upwork/site');
const profile='https://www.upwork.com/freelancers/~0173c5ce93bb9457ec';
const site='https://work.amirgomaa.com/';
const output=new Map(),inputs=[];
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
function input(path){const data=readFileSync(path);inputs.push({path:relative(root,path),sha256:digest(data)});return data;}
function put(name,data){assert(!name.startsWith('/')&&!name.split('/').includes('..'));output.set(name,Buffer.from(data));}
function copy(from,to){put(to,input(from));}
function replaceOnce(text,from,to){assert.equal(text.split(from).length,2,`Expected one occurrence: ${from}`);return text.replace(from,to);}
function fragment(document,html){const template=document.createElement('template');template.innerHTML=html;return template.content;}
function fill(document,selector,html){const node=document.querySelector(selector);assert(node,selector);node.replaceChildren(fragment(document,html));}

const dom=new JSDOM(input(join(root,'index.html')).toString()),document=dom.window.document;
document.title='Mohamed Amir Gomaa · Selected Work';
document.querySelector('link[rel="canonical"]').href=site;
document.querySelector('meta[property="og:url"]').content=site;
const robots=document.createElement('meta');robots.name='robots';robots.content='noindex, nofollow';document.head.append(robots);
fill(document,'#navigation',`<a href="#projects">Selected work</a><a href="#documentation">Case studies</a><a href="#approach">How I work</a><a class="nav-contact" href="${profile}" target="_blank" rel="noopener noreferrer">Discuss on Upwork ↗</a>`);
fill(document,'.guest-launch',`<div class="guest-launch-heading"><div><p class="eyebrow">TRY SOMETHING USEFUL</p><h2 id="guest-launch-title">A small first step. No account needed.</h2></div><a href="#projects">Explore the projects →</a></div><div class="guest-launch-links"><a href="#keep-local"><span>NOTEWELD LOCAL</span>Try a local notebook <b aria-hidden="true">→</b></a><a href="demos/sonaweft/"><span>SONAWEFT</span>Explore a recording <b aria-hidden="true">→</b></a><a href="#document-studio"><span>PAGEWEFT</span>Work with a PDF <b aria-hidden="true">→</b></a></div><p class="guest-launch-note">Completed examples and local interaction. No account, upload or new processing.</p>`);
const cases=[['keep-stack','noteweld-case'],['keep-local','local-case'],['instascript','sonaweft-case'],['document-studio','pageweft-case']];
for(const [id,caseId] of cases)document.querySelector('#'+id+' details').id=caseId;
fill(document,'#keep-stack .project-links',`<a class="project-link primary" href="assets/screenshots/noteweld.png" target="_blank" rel="noopener noreferrer">See the editor screenshot ↗</a><a class="project-link" href="#noteweld-case">Read the case study →</a>`);
fill(document,'#keep-local .project-links',`<button class="project-link primary" type="button" data-demo="keep">Try the local notebook ↗</button><a class="project-link" href="#local-case">Read the case study →</a>`);
fill(document,'#instascript .project-links',`<a class="project-link primary" href="demos/sonaweft/">Hear the scientific example ↗</a><a class="project-link" href="demos/sonaweft/example/sonaweft-example.zip" download>Download transcript bundle ↓</a><a class="project-link" href="#sonaweft-case">Read the case study →</a>`);
fill(document,'#document-studio .project-links',`<button class="project-link primary" type="button" data-demo="document">Explore sample output ↗</button><a class="project-link" href="#pageweft-case">Read the case study →</a>`);
fill(document,'#documentation',`<div><p class="eyebrow">THE WORK, EXPLAINED</p><h2 id="docs-title">Useful software.<br><em>Clear decisions.</em></h2><p>Each project includes its problem, implementation, recorded checks and current boundaries. Explore the examples and expand the case studies.</p><a class="button button-dark" href="#projects">Read the work <span aria-hidden="true">↑</span></a></div><div class="docs-topics"><a href="#noteweld-case"><span>01 / NOTEWELD</span>Writing, connected notes &amp; recovery →</a><a href="#local-case"><span>02 / LOCAL NOTEBOOK</span>Browser state &amp; portable backups →</a><a href="#sonaweft-case"><span>03 / SONAWEFT</span>Recordings, transcripts &amp; source-linked exports →</a><a href="#pageweft-case"><span>04 / PAGEWEFT</span>PDF conversion &amp; source review →</a></div>`);
fill(document,'.contact-actions',`<a class="button button-light" href="${profile}" target="_blank" rel="noopener noreferrer">Start a conversation on Upwork ↗</a><p>For work discussed on Upwork, keep messages and project arrangements there.</p>`);
document.querySelector('#demo-external').href='demos/keep/';
document.querySelector('#demo-external').textContent='Open local notebook in a new tab ↗';
document.querySelector('#demo-frame').setAttribute('sandbox','allow-scripts allow-same-origin allow-downloads');
for(const link of document.querySelectorAll('a[href]')){
 const url=new URL(link.getAttribute('href'),site);
 assert(url.origin===new URL(site).origin||url.href===profile,`Unexpected owner navigation: ${url}`);
}
put('index.html',dom.serialize());
copy(join(root,'style.css'),'style.css');
let script=input(join(root,'script.js')).toString();
script=replaceOnce(script,'https://m-amir-gomaa.github.io/Keep/','demos/keep/');
script=replaceOnce(script,'https://pageweft.amirgomaa.com/?utm_source=portfolio','assets/document-sample/document.pdf');
script=replaceOnce(script,'Open live converter in a new tab ↗','Open original PDF in a new tab ↗');
script=replaceOnce(script,'Open live site in a new tab ↗','Open local notebook in a new tab ↗');
script=replaceOnce(script,'or open the live converter.','or open the original PDF.');
script+=`\nfunction revealCase(hash) {\n const target=document.getElementById(hash.slice(1));\n if(target?.tagName!=='DETAILS')return;\n if(target.closest('.project')?.hidden)document.querySelector('[data-filter="all"]').click();\n target.open=true;\n}\ndocument.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(link)revealCase(link.hash);});\nwindow.addEventListener('hashchange',()=>revealCase(location.hash));\nrevealCase(location.hash);\nwindow.addEventListener('message',event=>{\n if(event.origin===location.origin&&event.source===frame.contentWindow&&event.data?.type==='portfolio:close-demo'&&dialog.open)closeDemo();\n});\n`;
put('script.js',script);

// The four already-public local-demo files; repair the copied favicon reference.
const localBundle=[...input(join(root,'demos/keep/index.html')).toString().matchAll(/src=([^ >]+)/g)].map(x=>x[1]);
assert.equal(localBundle.length,1);
const localDom=new JSDOM(readFileSync(join(root,'demos/keep/index.html'),'utf8'));
localDom.window.document.querySelector('link[rel="icon"]').setAttribute('href','assets/noteweld-local.svg');
localDom.window.document.querySelector('link[rel="icon"]').setAttribute('type','image/svg+xml');
const bridge=localDom.window.document.createElement('script');bridge.src='frame-bridge.js';bridge.defer=true;localDom.window.document.head.append(bridge);
put('demos/keep/index.html',localDom.serialize());
put('demos/keep/frame-bridge.js',`'use strict';\nwindow.addEventListener('keydown',event=>{\n if(event.key==='Escape'&&!event.defaultPrevented&&!document.querySelector('.take-note--active')&&window.parent!==window)window.parent.postMessage({type:'portfolio:close-demo'},location.origin);\n});\n`);
for(const name of [localBundle[0],localBundle[0]+'.LICENSE.txt','assets/noteweld-local.svg'])copy(join(root,'demos/keep',name),'demos/keep/'+name);
for(const name of ['document.pdf','field-notes.md','field-notes.zip','page-1.png','page-2.png','page-3.png','README.md'])copy(join(root,'assets/document-sample',name),'assets/document-sample/'+name);
copy(resolve(root,'../workflow/upwork-profile-20261023/assets/noteweld.png'),'assets/screenshots/noteweld.png');

// Only the published Sonaweft example, CSS and script; no web/API runtime or private data.
const sona=resolve(root,'../sonaweft/sonaweft_web');
const exampleDom=new JSDOM(input(join(sona,'templates/example.html')).toString()),example=exampleDom.window.document;
example.title='Scientific recording example · Sonaweft';
example.querySelector('link[rel="stylesheet"]').href='style.css';
example.querySelector('script[src]').src='example.js';
fill(example,'header',`<a class="brand" href="../../#instascript">Sonaweft</a><nav aria-label="Example navigation"><a href="#example-segments">Read the transcript</a><a href="../../#projects">Back to selected work</a></nav>`);
fill(example,'footer',`<span>Sonaweft · completed scientific example</span><a href="../../#instascript">Back to selected work →</a>`);
const next=example.querySelector('main > p:last-child');assert(next);next.innerHTML=`<a href="${profile}" target="_blank" rel="noopener noreferrer">Discuss a recording workflow on Upwork ↗</a>`;
for(const node of example.querySelectorAll('[href],[src]'))for(const attr of ['href','src']){
 const val=node.getAttribute(attr);if(val?.startsWith('/static/example/'))node.setAttribute(attr,val.replace('/static/example/','example/'));
}
put('demos/sonaweft/index.html',exampleDom.serialize().replace(/[ \t]+$/gm,''));
copy(join(sona,'static/style.css'),'demos/sonaweft/style.css');
put('demos/sonaweft/example.js',replaceOnce(input(join(sona,'static/example.js')).toString(),'/static/example/view.json','example/view.json'));
for(const name of ['audio.mp3','view.json','transcript.json','source.json','transcript.md','transcript.txt','transcript.srt','transcript.vtt','manifest.json','corrections.json','speakers.json','listening-notes.md','README.md','sonaweft-example.zip'])copy(join(sona,'static/example',name),'demos/sonaweft/example/'+name);
put('404.html',`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found · Selected work</title><link rel="stylesheet" href="/style.css"><main class="shell" style="padding:5rem 1.5rem"><h1>That page is unavailable.</h1><p><a href="/">Return to selected work</a> or <a href="${profile}">start a conversation on Upwork</a>.</p></main></html>`);
put('robots.txt','User-agent: *\nDisallow: /\n');
put('_headers',`/*\n  Cache-Control: public, max-age=0, must-revalidate, no-transform\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Robots-Tag: noindex, nofollow\n  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self'; font-src 'self' data:; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'self' https://www.upwork.com\n/demos/sonaweft/example/audio.mp3\n  Accept-Ranges: bytes\n`);

const forbidden=[/mailto:/i,/tel:/i,/linkedin\.com/i,/mo\.gomaa\.formal/i,/github\.com\/m-amir-gomaa/i,/https?:\/\/(?:www\.)?amirgomaa\.com(?:\/|["'\s])/i,/https?:\/\/(?:noteweld|pageweft|sonaweft)\.amirgomaa\.com/i];
for(const [name,bytes] of output){
 if(/\.(html|js|css|md|json|txt|svg)$/.test(name))for(const pattern of forbidden)assert(!pattern.test(bytes.toString()),`Contact/navigation boundary in ${name}: ${pattern}`);
}
put('build-manifest.json',JSON.stringify({version:1,canonical:site,inputs,files:Object.fromEntries([...output].map(([name,bytes])=>[name,digest(bytes)]))},null,2)+'\n');
function files(dir){return existsSync(dir)?readdirSync(dir,{withFileTypes:true}).flatMap(x=>x.isDirectory()?files(join(dir,x.name)):[join(dir,x.name)]):[];}
const actual=files(destination).map(p=>relative(destination,p));
assert(actual.every(name=>output.has(name)),'Unrecognized files in generated site; inspect before publishing.');
if(process.argv.includes('--check')){
 assert.equal(actual.length,output.size,'Run node scripts/build-upwork.mjs');
 for(const [name,bytes] of output)assert(readFileSync(join(destination,name)).equals(bytes),`Outdated generated file ${name}`);
 console.log(`Contact-free build current: ${output.size} files; regular portfolio source untouched.`);
}else{
 for(const [name,bytes] of output){mkdirSync(dirname(join(destination,name)),{recursive:true});writeFileSync(join(destination,name),bytes);}
 console.log(`Built ${output.size} contact-free files for ${site}`);
}
