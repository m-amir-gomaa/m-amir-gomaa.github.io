import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
const packages=createRequire(resolve(import.meta.dirname,'../../Keep/package.json')),{JSDOM}=packages('jsdom');
const root=resolve(import.meta.dirname,'../upwork/site'),origin='https://work.amirgomaa.com';
const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(join(dir,x.name)):[join(dir,x.name)]);
let links=0;
const pages=new Map(walk(root).filter(x=>x.endsWith('.html')).map(path=>{
 const route=path.slice(root.length).replace(/index\.html$/,'');
 return [path,new JSDOM(readFileSync(path,'utf8'),{url:origin+route}).window.document];
}));
function local(url){let path=join(root,decodeURIComponent(url.pathname));if(url.pathname.endsWith('/'))path=join(path,'index.html');return path;}
for(const [file,document] of pages){
 const base=origin+file.slice(root.length).replace(/index\.html$/,'');
 assert(!/mailto:|tel:|linkedin\.com|mo\.gomaa\.formal|github\.com\/m-amir-gomaa/i.test(document.documentElement.outerHTML));
 for(const node of document.querySelectorAll('[href],[src]'))for(const attr of ['href','src']){
  const value=node.getAttribute(attr);if(!value)continue;const url=new URL(value,base);
  if(url.origin!==origin){assert(url.href==='https://www.upwork.com/freelancers/~0173c5ce93bb9457ec'||url.hostname==='oceanservice.noaa.gov',`Unexpected outbound link: ${url}`);continue;}
  const target=local(url);assert(existsSync(target),`Missing local asset: ${url}`);
  if(url.hash&&target.endsWith('.html'))assert(pages.get(target)?.getElementById(decodeURIComponent(url.hash.slice(1))),`Missing fragment: ${url}`);
  links++;
 }
 assert.equal(document.querySelectorAll('form').length,0);
}
const manifest=JSON.parse(readFileSync(join(root,'build-manifest.json'),'utf8'));
for(const [name,hash] of Object.entries(manifest.files))assert.equal(createHash('sha256').update(readFileSync(join(root,name))).digest('hex'),hash,name);
assert.equal(pages.get(join(root,'index.html')).querySelectorAll('.project').length,4);
console.log(`PASS ${pages.size} contact-free HTML pages, ${links} local links/assets/fragments and ${Object.keys(manifest.files).length} manifest hashes; outbound owner contact is Upwork only.`);
