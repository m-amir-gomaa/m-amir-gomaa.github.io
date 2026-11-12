/* Shared by the portfolio, app chooser and Fieldnotes. Run before styles paint. */
(() => {
  'use strict';
  const key = 'amirgomaa:theme';
  const root = document.documentElement;
  const read = () => {
    try { return localStorage.getItem(key) === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  };
  const apply = theme => {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    const color = document.querySelector('meta[name="theme-color"]');
    if (color) color.content = dark ? '#18211c' : '#f6f5f0';
    for (const button of document.querySelectorAll('[data-theme-toggle]')) {
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Turn dark mode off' : 'Turn dark mode on';
    }
  };
  apply(read());
  const start = () => {
    for (const button of document.querySelectorAll('[data-theme-toggle]')) {
      button.hidden = false;
      button.addEventListener('click', () => {
        const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        apply(theme);
        try { localStorage.setItem(key, theme); }
        catch { /* The switch still works when this browser blocks storage. */ }
      });
    }
    apply(root.dataset.theme);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) apply(read());
  });
  window.addEventListener('pageshow', event => { if (event.persisted) apply(read()); });
})();
