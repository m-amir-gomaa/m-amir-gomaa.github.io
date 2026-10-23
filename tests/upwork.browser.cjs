const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{createRequire}=require('node:module');
const packages=createRequire(path.resolve(__dirname,'../../noteweld/package.json')),{chromium}=packages('playwright');
const origin=(process.env.UPWORK_SITE_URL||'http://127.0.0.1:8326').replace(/\/$/,'');
const output=path.resolve(process.env.UPWORK_EVIDENCE_DIR||path.join(__dirname,'../.local/upwork-review'));fs.mkdirSync(output,{recursive:true,mode:0o700});
const profile='https://www.upwork.com/freelancers/~0173c5ce93bb9457ec';
(async()=>{
 const browser=await chromium.launch({executablePath:'/run/current-system/sw/bin/chromium',headless:true,chromiumSandbox:true}),results=[];
 try{
  for(const width of [320,390,768,1440]){
   const context=await browser.newContext({viewport:{width,height:950},reducedMotion:'reduce',acceptDownloads:true}),page=await context.newPage(),errors=[],external=[],failed=[];
   page.on('pageerror',e=>errors.push(e.message));
   page.on('request',r=>{if(!r.url().startsWith(origin+'/')&&!r.url().startsWith('data:'))external.push(r.url());});
   page.on('response',r=>{if(r.status()>=400)failed.push([r.status(),r.url()]);});
   const response=await page.goto(origin+'/',{waitUntil:'networkidle'});assert.equal(response.status(),200);
   assert.equal(await page.locator('.project').count(),4);
   assert.equal(await page.locator('a[href^="mailto:"],a[href*="linkedin.com"],form').count(),0);
   const outgoing=await page.locator('a[href^="https://"]').evaluateAll(nodes=>nodes.map(n=>n.href));assert(outgoing.every(x=>x===profile));
   await page.getByRole('button',{name:'Tools 02',exact:true}).click();assert.equal(await page.locator('.project:visible').count(),2);await page.getByRole('button',{name:'All work 04',exact:true}).click();
   await page.getByRole('button',{name:'Tools 02',exact:true}).click();await page.locator('#documentation a[href="#noteweld-case"]').click();assert(await page.locator('#noteweld-case').evaluate(x=>x.open));assert.equal(await page.locator('.project:visible').count(),4);
   const details=page.locator('#noteweld-case summary');await details.focus();await page.keyboard.press('Enter');assert.equal(await page.locator('#noteweld-case').evaluate(x=>x.open),false);await page.keyboard.press('Enter');assert(await page.locator('#noteweld-case').evaluate(x=>x.open));
   await page.getByRole('button',{name:'Explore sample output ↗',exact:true}).click();await page.getByRole('status').filter({hasText:'Showing original PDF page 1'}).waitFor();
   await page.getByRole('button',{name:'2 · Observations',exact:true}).click();assert.match(await page.locator('#sample-markdown').innerText(),/Site B: 18 plants/);
   assert((await page.locator('#demo-external').getAttribute('href')).endsWith('assets/document-sample/document.pdf'));
   if(width===1440){const [download]=await Promise.all([page.waitForEvent('download'),page.getByRole('link',{name:'Download complete ZIP ↓',exact:true}).click()]);assert(fs.statSync(await download.path()).size>100);}
   await page.keyboard.press('Escape');assert.equal(await page.locator('#demo-dialog').evaluate(x=>x.open),false);
   await page.getByRole('button',{name:'Try the local notebook ↗',exact:true}).click();const frame=page.frameLocator('#demo-frame');await frame.getByRole('button',{name:'Export backup',exact:true}).waitFor();assert.equal(await frame.getByText('Noteweld Local',{exact:true}).count(),1);
   if(width===1440){const [backup]=await Promise.all([page.waitForEvent('download'),frame.getByRole('button',{name:'Export backup',exact:true}).click()]);assert(Array.isArray(JSON.parse(fs.readFileSync(await backup.path(),'utf8')).notes));}
   assert((await page.locator('#demo-external').getAttribute('href')).endsWith('demos/keep/'));await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('#demo-dialog').open);assert.equal(await page.locator('#demo-frame').getAttribute('src'),null);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} home overflow`);
   await page.evaluate(fs.readFileSync(packages.resolve('axe-core/axe.min.js'),'utf8'));
   assert.deepEqual(await page.evaluate(async()=> (await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(x=>x.id)),[]);
   if(width===390||width===1440)await page.screenshot({path:path.join(output,'home-'+width+'.png'),fullPage:true});
   await page.goto(origin+'/demos/sonaweft/',{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>document.querySelectorAll('#example-segments button').length===22&&document.querySelector('audio').readyState>=1);
   assert(Math.abs(await page.locator('audio').evaluate(a=>a.duration)-63.65)<.2);await page.locator('audio').evaluate(async a=>{a.muted=true;await a.play();});await page.waitForFunction(()=>document.querySelector('audio').currentTime>.2);await page.locator('audio').evaluate(a=>a.pause());
   await page.locator('#example-segments button').nth(8).click();await page.getByRole('status').filter({hasText:'Recording moved'}).waitFor();await page.waitForFunction(()=>document.querySelector('audio').currentTime>20);
   if(width===1440){const range=await page.evaluate(async()=>{const response=await fetch('example/audio.mp3',{headers:{Range:'bytes=0-999'}});return {status:response.status,ranges:response.headers.get('accept-ranges'),bytes:(await response.arrayBuffer()).byteLength};});assert([200,206].includes(range.status));assert.equal(range.ranges,'bytes');assert.equal(range.bytes,range.status===206?1000:fs.statSync(path.join(__dirname,'../upwork/site/demos/sonaweft/example/audio.mp3')).size);}
   assert.equal(await page.locator('a[href^="/"],a[href^="mailto:"],a[href*="amirgomaa.com"]').count(),0);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} audio overflow`);
   await page.evaluate(fs.readFileSync(packages.resolve('axe-core/axe.min.js'),'utf8'));assert.deepEqual(await page.evaluate(async()=> (await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(x=>x.id)),[]);
   assert.deepEqual(errors,[]);assert.deepEqual(external,[]);assert.deepEqual(failed,[]);
   results.push({width,projectFilters:true,keyboardCaseStudy:true,pdfPreview:true,localNotebook:true,scientificAudio:true,automatedAccessibilityViolations:0,externalRequests:external,pageErrors:errors});await context.close();
  }
  const context=await browser.newContext({viewport:{width:1000,height:750},reducedMotion:'reduce'}),page=await context.newPage();await page.goto(origin+'/',{waitUntil:'networkidle'});await page.screenshot({path:path.join(output,'personal-portfolio.png')});await context.close();
  const nojs=await browser.newContext({javaScriptEnabled:false}),plain=await nojs.newPage();await plain.goto(origin+'/');assert.equal(await plain.locator('.project').count(),4);await plain.goto(origin+'/demos/sonaweft/');assert.equal(await plain.locator('audio').count(),1);await nojs.close();
  const failure=await browser.newContext(),retry=await failure.newPage();let abort=true;await retry.route('**/assets/document-sample/field-notes.md',r=>abort?r.abort():r.continue());await retry.goto(origin+'/');await retry.getByRole('button',{name:'Explore sample output ↗',exact:true}).click();await retry.locator('#sample-retry').waitFor({state:'visible'});abort=false;await retry.locator('#sample-retry').click();await retry.getByRole('status').filter({hasText:'Showing original PDF page 1'}).waitFor();await failure.close();
  fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({origin,results,noJavaScript:true,pdfFailureAndRetry:true},null,2));console.log('PASS contact-free edition at four widths: local demos/audio/PDF, keyboard, failure/retry, downloads, accessibility, no overflow/page errors or outside requests; no-JS reading/audio.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack);process.exitCode=1;});
