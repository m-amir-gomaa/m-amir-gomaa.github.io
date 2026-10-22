const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module'),packages=createRequire(path.resolve(__dirname,'../../noteweld/package.json'));
const {chromium}=packages('playwright');
const origin=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8322';
const output=path.resolve(__dirname,'../.local/guest-review');fs.mkdirSync(output,{recursive:true,mode:0o700});
(async()=>{
 const browser=await chromium.launch({executablePath:'/run/current-system/sw/bin/chromium',headless:true,chromiumSandbox:true});
 try{
  for(const width of [320,390,768,1440]){
   const context=await browser.newContext({viewport:{width,height:950},reducedMotion:'reduce'}),page=await context.newPage(),errors=[],external=[];
   page.on('pageerror',error=>errors.push(error.message));page.on('request',r=>{if(!r.url().startsWith(origin+'/')&&!r.url().startsWith('data:'))external.push(r.url());});
   for(const route of ['/','/apps/']){
    await page.goto(origin+route);await page.getByRole('heading',{level:1}).waitFor();
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${route} ${width}`);
    await page.evaluate(fs.readFileSync(packages.resolve('axe-core/axe.min.js'),'utf8'));
    const issues=await page.evaluate(async()=> (await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>({id:v.id,targets:v.nodes.map(n=>n.target)})));
    assert.deepEqual(issues,[],`${route} ${width}`);
    if(width===390||width===1440)await page.screenshot({path:path.join(output,(route==='/'?'home':'apps')+'-'+width+'.png'),fullPage:true});
   }
   assert.equal(await page.locator('.app-choice').count(),3);
   for(const brand of ['noteweld','sonaweft','pageweft']){
    assert.equal(await page.locator(`.app-choice a[href="https://${brand}.amirgomaa.com/example"]`).count(),1);
    assert.equal(await page.locator(`.app-choice a[href="https://${brand}.amirgomaa.com/help"]`).count(),1);
   }
   await page.getByText('Where do example edits go?',{exact:true}).click();await page.getByText(/They stay in your browser/).waitFor();
   assert.deepEqual(errors,[]);assert.deepEqual(external,[]);await context.close();
  }
  const context=await browser.newContext(),page=await context.newPage();await page.goto(origin+'/');
  await page.getByRole('link',{name:'Find the right app'}).click();await page.waitForURL(origin+'/apps/');
  await page.getByRole('link',{name:'Try the local notebook'}).click();await page.waitForURL(origin+'/#keep-local');
  const nojs=await browser.newContext({javaScriptEnabled:false}),plain=await nojs.newPage();await plain.goto(origin+'/apps/');await plain.getByRole('heading',{name:/Bring a thought/}).waitFor();assert.equal(await plain.locator('.app-choice').count(),3);await nojs.close();await context.close();
  console.log('PASS portfolio and simple app guide at four widths: whole-page automated accessibility, correct example/help links, local navigation, no overflow/page errors/external requests, no-JS guide.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
