const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const packages = createRequire(path.resolve(__dirname, '../../noteweld/package.json'));
const { chromium } = packages('playwright');
const origin = (process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8346').replace(/\/$/, '');
const artifacts = path.resolve(__dirname, '../.local/theme-review');
fs.mkdirSync(artifacts, { recursive: true });
const routes = ['/', '/apps/', '/manuals/', '/manuals/journal/', '/manuals/noteweld/connections/', '/manuals/pageweft/book-release/', '/manuals/development-environment/'];
const toggle = page => page.getByRole('button', { name: 'Dark mode', exact: true });
const theme = page => page.locator('html').getAttribute('data-theme');

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/run/current-system/sw/bin/chromium', headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: 'dark', reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin + '/');
    assert.equal(await theme(page), 'light', 'Dark OS preference must not override the light default');
    await toggle(page).focus();
    await page.keyboard.press('Space');
    assert.equal(await theme(page), 'dark');
    assert.equal(await toggle(page).getAttribute('aria-pressed'), 'true');
    await page.reload();
    assert.equal(await theme(page), 'dark');

    for (const route of routes) {
      await page.goto(origin + route);
      assert.equal(await theme(page), 'dark', `Preference lost at ${route}`);
      assert.equal(await toggle(page).getAttribute('aria-pressed'), 'true');
      for (const width of [320, 390, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const mode of ['dark', 'light']) {
          if (await theme(page) !== mode) await toggle(page).click();
          assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow ${route} ${width} ${mode}`);
          const box = await toggle(page).boundingBox();
          assert(box && box.x >= 0 && box.x + box.width <= width && box.height >= 44, `Toggle clipped at ${route} ${width}`);
        }
      }
      await toggle(page).click(); // Leave the next page in dark mode.
      if (['/', '/apps/', '/manuals/', '/manuals/noteweld/connections/', '/manuals/development-environment/'].includes(route)) {
        await page.addScriptTag({ path: packages.resolve('axe-core/axe.min.js') });
        const violations = await page.evaluate(async () => (await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } })).violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) })));
        assert.deepEqual(violations, [], `Accessibility ${route} dark`);
      }
    }

    await page.goto(origin + '/manuals/');
    await page.getByLabel('Search the manuals').fill('Vim');
    await page.waitForFunction(() => document.querySelector('#search-results li'));
    await page.emulateMedia({ media: 'print' });
    assert.equal(await page.locator('body').evaluate(e => getComputedStyle(e).backgroundColor), 'rgb(246, 245, 240)');
    assert.equal(await toggle(page).isVisible(), false);
    await page.emulateMedia({ media: 'screen' });

    const other = await context.newPage();
    await other.goto(origin + '/apps/');
    await toggle(other).click();
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'light');
    assert.equal(await toggle(page).getAttribute('aria-pressed'), 'false');
    await page.goto(origin + '/');
    await page.setViewportSize({ width: 768, height: 1000 });
    await page.getByRole('button', { name: /Menu/ }).click();
    assert(await page.getByRole('navigation').isVisible());
    await page.getByRole('button', { name: /Menu/ }).click();
    assert.equal(await page.getByRole('navigation').isVisible(), false);
    assert.deepEqual(errors, []);
    await context.close();

    const blocked = await browser.newContext();
    await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } }));
    const privatePage = await blocked.newPage();
    await privatePage.goto(origin + '/manuals/');
    await toggle(privatePage).click();
    assert.equal(await theme(privatePage), 'dark');
    await blocked.close();

    const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 900 } });
    const plain = await noJS.newPage();
    for (const route of ['/', '/manuals/', '/apps/']) {
      await plain.goto(origin + route);
      assert.equal(await plain.locator('[data-theme-toggle]').isVisible(), false);
      assert(await plain.getByRole('heading', { level: 1 }).isVisible());
    }
    await noJS.close();
    console.log('PASS themes: seven routes, five widths/both modes, keyboard and mobile menu, persistence/navigation/tab sync, dark accessibility, search, light print, blocked storage and no-JS fallback.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
