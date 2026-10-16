(() => {
  'use strict';
  // No remote analytics, external search service, HTML insertion or user-data uploads.
  const search = document.querySelector('[data-search]');
  if (search) {
    const input = document.querySelector('#search');
    const status = document.querySelector('#search-status');
    const results = document.querySelector('#search-results');
    const retry = document.querySelector('#search-retry');
    let index;
    let pending;
    let generation = 0;
    const normalize = value => value.normalize('NFKC').toLocaleLowerCase('en');
    const show = async () => {
      const current = ++generation;
      const query = normalize(input.value.trim()).slice(0, 160);
      results.replaceChildren();
      retry.hidden = true;
      if (query.length < 2) {
        status.textContent = 'Type at least two characters. Titles and document text are searched.';
        return;
      }
      try {
        if (!index) {
          status.textContent = 'Loading the document index…';
          pending ??= fetch(search.dataset.index, { credentials: 'omit' }).then(response => {
            if (!response.ok) throw new Error('Index unavailable');
            return response.json();
          }).then(value => {
            if (!Array.isArray(value) || value.some(item => typeof item.title !== 'string' || typeof item.text !== 'string' || typeof item.url !== 'string' || !item.url.startsWith('/manuals/'))) throw new Error('Invalid index');
            return value.map(item => ({ ...item, haystack: normalize(item.title + ' ' + item.project + ' ' + item.text), titleSearch: normalize(item.title) }));
          }).finally(() => { pending = undefined; });
          index = await pending;
        }
        if (current !== generation) return;
        const words = query.split(/\s+/);
        const matches = index.filter(item => words.every(word => item.haystack.includes(word))).sort((a, b) => Number(b.titleSearch.includes(query)) - Number(a.titleSearch.includes(query)) || a.title.localeCompare(b.title));
        status.textContent = matches.length ? `${matches.length} matching document${matches.length === 1 ? '' : 's'}${matches.length > 20 ? '; showing the first 20' : ''}.` : 'No matching documents. Try a shorter term or browse the project library.';
        for (const item of matches.slice(0, 20)) {
          const li = document.createElement('li');
          const link = document.createElement('a');
          link.href = item.url;
          const context = document.createElement('span');
          context.textContent = `${item.project} / ${item.category}`;
          const title = document.createElement('strong');
          title.textContent = item.title;
          const detail = document.createElement('p');
          detail.textContent = item.description;
          link.append(context, title, detail);
          li.append(link);
          results.append(li);
        }
      } catch {
        if (current !== generation) return;
        status.textContent = 'Search could not load. Retry, or use the project library above.';
        retry.hidden = false;
      }
    };
    input.addEventListener('input', show);
    retry.addEventListener('click', show);
    status.textContent = 'Type at least two characters. Titles and document text are searched.';
  }
  for (const table of document.querySelectorAll('.prose table')) {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrap';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', 'Scrollable reference table');
    table.before(wrapper);
    wrapper.append(table);
  }
  if (navigator.clipboard && window.isSecureContext) {
    for (const block of document.querySelectorAll('.highlight')) {
      const code = block.querySelector('pre code');
      if (!code) continue;
      const copy = document.createElement('button');
      copy.className = 'copy-code';
      copy.type = 'button';
      copy.textContent = 'Copy code';
      copy.setAttribute('aria-live', 'polite');
      copy.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(code.textContent); copy.textContent = 'Copied'; }
        catch { copy.textContent = 'Select code to copy'; }
        setTimeout(() => { copy.textContent = 'Copy code'; }, 2500);
      });
      block.append(copy);
    }
  }
})();
