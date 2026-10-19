/* Actual public-facing journeys; fresh browser contexts, no account/payment actions. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createRequire}=require('node:module');
const packages=createRequire(path.resolve(__dirname,'../../noteweld/package.json'));
const {chromium}=packages('playwright');
const origin=(process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8315').replace(/\/$/,'');
const output=path.resolve(process.env.PORTFOLIO_EVIDENCE_DIR||path.join(__dirname,'../.local/commercial-evidence'));
fs.mkdirSync(output,{recursive:true,mode:0o700});
(async()=>{
 const browser=await chromium.launch({executablePath:'/run/current-system/sw/bin/chromium',headless:true,chromiumSandbox:true});
 const results=[];
 try{
  for(const width of [320,390,768,1440]){
   const context=await browser.newContext({viewport:{width,height:950},reducedMotion:'reduce',acceptDownloads:true});
   const page=await context.newPage(),errors=[];page.on('pageerror',error=>errors.push(error.message));
   page.setDefaultTimeout(20000);
   await page.addInitScript(()=>{
    window.renderLab={lcp:null,nonInputLayoutShiftSum:0};
    new PerformanceObserver(list=>{for(const entry of list.getEntries())window.renderLab.lcp=entry.startTime;}).observe({type:'largest-contentful-paint',buffered:true});
    new PerformanceObserver(list=>{for(const entry of list.getEntries())if(!entry.hadRecentInput)window.renderLab.nonInputLayoutShiftSum+=entry.value;}).observe({type:'layout-shift',buffered:true});
   });
   await page.goto(origin+'/');await page.waitForLoadState('networkidle');
   const render=await page.evaluate(()=>({
    ...window.renderLab,ttfb:performance.getEntriesByType('navigation')[0].responseStart,
    fcp:performance.getEntriesByName('first-contentful-paint')[0]?.startTime??null,
    resources:performance.getEntriesByType('resource').length,
    transferredBytes:performance.getEntriesByType('resource').reduce((sum,entry)=>sum+entry.transferSize,0),
   }));
   const noOverflow=async()=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${width} at ${page.url()}`);
   await noOverflow();
   const card=page.locator('.project').filter({has:page.getByRole('heading',{name:/Sonaweft/})});
   const details=card.locator('summary');await details.focus();await page.keyboard.press('Enter');
   assert.equal(await card.locator('details').evaluate(element=>element.open),true);
   assert.match(await card.textContent(),/conflict-safe restore/);
   await card.screenshot({path:path.join(output,`sonaweft-card-${width}.png`),animations:'disabled'});
   await page.evaluate(fs.readFileSync(packages.resolve('axe-core/axe.min.js'),'utf8'));
   const cardIssues=await page.evaluate(()=>axe.run(document.querySelector('#instascript'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
   assert.deepEqual(cardIssues.violations.map(item=>item.id),[]);
   await card.getByRole('link',{name:'Review recovery & evidence →'}).click();
   await page.getByRole('heading',{level:1,name:'Recoverable transcript review'}).waitFor();await noOverflow();
   const [download]=await Promise.all([page.waitForEvent('download'),page.getByRole('link',{name:'Download Markdown'}).click()]);
   assert.match(fs.readFileSync(await download.path(),'utf8'),/latest 20 saved states/);
   await page.goto(origin+'/manuals/journal/recoverable-review/');
   await page.getByRole('heading',{level:1,name:'Making transcript review recoverable'}).waitFor();await noOverflow();
   await page.screenshot({path:path.join(output,`journal-${width}.png`),fullPage:true});
   assert.deepEqual(errors,[]);
   results.push({width,keyboardCaseStudy:true,manualAndMarkdown:true,journal:true,cardAccessibilityViolations:0,render});
   await context.close();
  }
  fs.writeFileSync(path.join(output,'result.json'),JSON.stringify({origin,scope:'Fresh-context unthrottled browser lab observations with reduced motion; not field Core Web Vitals/INP or a completed DevTools trace.',results},null,2));
  console.log('PASS four widths: keyboard case study, recovery guide, actual Markdown download, journal, automated card accessibility, no overflow/page errors; native render/network observations saved.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
