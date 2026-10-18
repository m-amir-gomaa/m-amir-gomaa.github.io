const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const { resolve } = require('node:path');
const requireTools = createRequire(resolve(__dirname, '../../noteweld/package.json'));
const { chromium } = requireTools('playwright');
const origin = (process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8315').replace(/\/$/, '');
const artifacts = resolve(__dirname, '../.local/docs-browser');
require('node:fs').mkdirSync(artifacts, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/run/current-system/sw/bin/chromium', headless: true, chromiumSandbox: true });
  const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await context.newPage();
  const errors = [];
  const unexpected = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => {
    // The existing portfolio's separate embedded demo has its own assets; this gate covers the new Hugo library.
    if (page.url().startsWith(origin + '/manuals/') && !request.url().startsWith(origin + '/') && !request.url().startsWith('data:')) unexpected.push(request.url());
  });
  const noOverflow = async () => assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Page overflow at ${page.url()}`);
  let checks = 0;
  try {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 950 });
      await page.goto(origin + '/manuals/');
      await page.getByRole('heading', { level: 1, name: /Understand the work/ }).waitFor();
      assert.equal(await page.locator('.project-card').count(), 4);
      await noOverflow();
      await page.screenshot({ path: `${artifacts}/home-${width}.png`, fullPage: true });
      await page.getByLabel('Search the manuals').fill('Vim');
      await page.waitForFunction(() => document.querySelector('#search-results li'));
      assert(await page.locator('#search-results').innerText().then(text => text.includes('Noteweld')));
      await page.getByLabel('Search the manuals').fill('noresultzzqv');
      await page.getByRole('status').filter({ hasText: 'No matching' }).waitFor();
      await page.getByLabel('Search the manuals').fill('<img src=x onerror=alert(1)>');
      assert.equal(await page.locator('#search-results img').count(), 0);
      await page.getByLabel('Search the manuals').fill('');
      assert.equal(await page.locator('#search-results li').count(), 0);
      await page.goto(origin + '/manuals/noteweld/connections/');
      await page.getByRole('heading', { level: 1, name: 'Links, backlinks and graphs' }).waitFor();
      await noOverflow();
      assert(await page.locator('.toc a').count() > 0);
      await page.screenshot({ path: `${artifacts}/article-${width}.png`, fullPage: true });
      await page.goto(origin + '/manuals/pageweft/book-release/');
      assert(await page.locator('.table-wrap').count() > 0);
      await noOverflow();
      await page.goto(origin + '/#documentation');
      assert.equal(await page.locator('.project a[href^="manuals/"]').count(), 8);
      assert.equal(await page.locator('.project a[href$="/build-history/"]').count(), 4);
      await noOverflow();
      await page.locator('#documentation').screenshot({ path: `${artifacts}/portfolio-${width}.png` });
      await page.goto(origin + '/manuals/noteweld/build-history/');
      await noOverflow();
      await page.screenshot({ path: `${artifacts}/history-${width}.png`, fullPage: true });
      checks += 4;
    }
    // Loading, failed static-index fetch, retry and subsequent successful results.
    let reject = true;
    await page.route('**/manuals/index.json', async route => {
      if (reject) await route.abort('failed'); else await route.continue();
    });
    await page.goto(origin + '/manuals/');
    await page.getByLabel('Search the manuals').fill('backups');
    await page.getByRole('button', { name: 'Retry', exact: true }).waitFor();
    reject = false;
    await page.getByRole('button', { name: 'Retry', exact: true }).click();
    await page.waitForFunction(() => document.querySelector('#search-results li'));
    assert.equal(await page.getByRole('button', { name: 'Retry', exact: true }).isVisible(), false);
    await page.unroute('**/manuals/index.json');
    // Real Markdown download has expected content and public provenance.
    await page.goto(origin + '/manuals/noteweld/connections/');
    const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('link', { name: 'Download Markdown' }).click()]);
    const text = await require('node:fs/promises').readFile(await download.path(), 'utf8');
    assert(text.startsWith('# Links, backlinks and graphs'));
    assert(text.includes('github.com/m-amir-gomaa/keep-nextjs/blob/'));
    assert(!text.includes('/home/qwerty/'));
    await page.goto(origin + '/manuals/pageweft/overview/');
    const copy = page.getByRole('button', { name: 'Copy code', exact: true }).first();
    const expectedCode = await page.locator('.highlight pre code').first().textContent();
    await copy.click();
    await page.getByRole('button', { name: 'Copied', exact: true }).waitFor();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), expectedCode);
    await page.goto(origin + '/manuals/sonaweft/demo-history/');
    assert(await page.locator('.notice').innerText().then(text => text.includes('Historical')));
    assert.equal(await page.locator('.prose pre').count(), 0);
    // Keyboard can reach the skip link and primary navigation.
    await page.goto(origin + '/manuals/');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to content');
    await page.keyboard.press('Enter');
    await page.getByRole('link', { name: 'Manuals', exact: true }).focus();
    await page.keyboard.press('Enter');
    assert(page.url().endsWith('#library'));
    // Every indexed article route really loads, beyond merely resolving its HTML file.
    const index = await (await context.request.get(origin + '/manuals/index.json')).json();
    for (const item of index) {
      const response = await page.goto(origin + item.url);
      assert.equal(response.status(), 200);
      assert.equal(await page.locator('main h1').count(), 1);
    }
    checks += 7;
    const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 900 } });
    const plain = await noScript.newPage();
    await plain.goto(origin + '/manuals/');
    assert.equal(await plain.locator('.project-card').count(), 4);
    await plain.locator('.project-noteweld').click();
    await plain.getByRole('link', { name: /Using Noteweld/ }).click();
    assert(await plain.getByRole('heading', { name: 'Connect the work' }).isVisible());
    await plain.goto(origin + '/manuals/pageweft/book-release/');
    assert(await plain.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await noScript.close();
    assert.deepEqual(errors, []);
    assert.deepEqual(unexpected, []);
    console.log(`Passed ${checks + 1} grouped browser checks: four widths, ${index.length} article routes, search/failure/retry, real download/clipboard, keyboard, no-JS and no external requests/page errors.`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
