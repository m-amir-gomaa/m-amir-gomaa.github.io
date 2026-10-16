(() => {
  'use strict';
  const root = document.querySelector('[data-workbench]');
  if (!root) return;
  const data = JSON.parse(document.querySelector('#wb-data').textContent);
  const $ = selector => root.querySelector(selector);
  const editor = $('#wb-editor');
  const announcement = $('#wb-announcement');
  const picker = $('#wb-picker');
  const buffers = data.files.map(file => ({ text: file.code, position: 0, undo: [] }));
  let active = 0;
  let mode = 'normal';
  let selectedLayer = 0;
  let leader = '';
  let leaderAt = 0;
  root.querySelectorAll('[data-wb-file], [data-wb-layer]').forEach(button => { button.disabled = false; });
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reducedMotion.matches;
  const announce = text => { announcement.textContent = text; };
  function setMotion() {
    root.dataset.motion = paused || reducedMotion.matches ? 'paused' : 'playing';
    const button = $('#wb-motion');
    button.textContent = reducedMotion.matches ? 'Motion off · system preference' : paused ? 'Resume motion' : 'Pause motion';
    button.setAttribute('aria-pressed', String(paused || reducedMotion.matches));
    button.disabled = reducedMotion.matches;
  }
  $('#wb-motion').hidden = false;
  $('#wb-motion').addEventListener('click', () => { paused = !paused; setMotion(); });
  reducedMotion.addEventListener('change', setMotion);
  document.addEventListener('visibilitychange', () => { root.dataset.background = String(document.hidden); });
  setMotion();
  const position = () => {
    const before = editor.value.slice(0, editor.selectionStart).split('\n');
    return { row: before.length, column: before[before.length - 1].length + 1 };
  };
  function update() {
    const buffer = buffers[active];
    const modified = editor.value !== data.files[active].code;
    $('#wb-dirty').hidden = !modified;
    $('#wb-mode').textContent = mode.toUpperCase();
    $('#wb-insert').textContent = mode === 'insert' ? 'Normal mode' : 'Insert mode';
    $('#wb-buffer-state').textContent = modified ? 'Temporary buffer' : 'Explanatory excerpt';
    const p = position();
    $('#wb-position').textContent = `${p.row}:${p.column}`;
    $('#wb-lines').textContent = Array.from({ length: editor.value.split('\n').length }, (_, i) => i + 1).join('\n');
    buffer.text = editor.value;
    buffer.position = editor.selectionStart;
  }
  function remember() {
    const buffer = buffers[active];
    buffer.undo.push({ text: editor.value, position: editor.selectionStart });
    if (buffer.undo.length > 80) buffer.undo.shift();
  }
  function load(index, focus = false) {
    update();
    leader = '';
    active = index;
    editor.value = buffers[index].text;
    editor.setSelectionRange(buffers[index].position, buffers[index].position);
    mode = 'normal';
    editor.scrollTop = 0;
    editor.scrollLeft = 0;
    $('#wb-filename').textContent = data.files[index].name;
    $('#wb-language').textContent = data.files[index].language;
    $('#wb-file-description').textContent = data.files[index].description;
    $('#wb-source').href = data.files[index].source;
    root.querySelectorAll('[data-wb-file]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.wbFile) === index)));
    update();
    if (focus) editor.focus();
    announce(`Opened ${data.files[index].name}. ${mode} mode.`);
  }
  root.querySelectorAll('[data-wb-file]').forEach(button => button.addEventListener('click', () => load(Number(button.dataset.wbFile))));
  $('#wb-controls').hidden = false;
  editor.readOnly = false;
  editor.addEventListener('beforeinput', event => { if (mode === 'normal') event.preventDefault(); else remember(); });
  editor.addEventListener('input', update);
  editor.addEventListener('click', update);
  editor.addEventListener('keyup', update);
  editor.addEventListener('scroll', () => { $('#wb-lines').scrollTop = editor.scrollTop; });
  function switchMode(next) { leader = ''; mode = next; update(); editor.focus(); announce(`${mode} mode.`); }
  $('#wb-insert').addEventListener('click', () => switchMode(mode === 'insert' ? 'normal' : 'insert'));
  $('#wb-reset').addEventListener('click', () => {
    remember(); editor.value = data.files[active].code; editor.setSelectionRange(0, 0); mode = 'normal'; update(); announce('This sample buffer has been reset.');
  });
  $('#wb-copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(editor.value); announce(`Copied ${data.files[active].name}.`); }
    catch { editor.focus(); editor.select(); announce('Clipboard access is unavailable. The code is selected; use your browser’s copy command.'); }
  });
  editor.addEventListener('keydown', event => {
    if (event.key === 'Tab' || event.metaKey || event.altKey || event.ctrlKey) return;
    if (event.key === 'Escape') { event.preventDefault(); switchMode('normal'); return; }
    if (mode === 'insert') return;
    const key = event.key;
    if (performance.now() - leaderAt > 1800) leader = '';
    if (key === ' ' || leader) {
      event.preventDefault(); leaderAt = performance.now();
      leader = key === ' ' ? ' ' : leader + key;
      if (leader === ' sf') { leader = ''; openPicker(); }
      else if (![' ', ' s'].includes(leader)) { leader = ''; announce('Shortcut cancelled. Use Space, s, f to find a file.'); }
      else announce(leader === ' ' ? 'Leader key. Press s, then f to find a file.' : 'Press f to find a file.');
      return;
    }
    if (key === 'i') { event.preventDefault(); switchMode('insert'); return; }
    if (key === 'u') {
      event.preventDefault(); const prior = buffers[active].undo.pop();
      if (prior) { editor.value = prior.text; editor.setSelectionRange(prior.position, prior.position); update(); announce('Undid the previous edit.'); }
      else announce('No edits to undo in this buffer.');
      return;
    }
    const start = editor.selectionStart;
    if (key === 'x') { event.preventDefault(); if (start < editor.value.length) { remember(); editor.value = editor.value.slice(0, start) + editor.value.slice(start + 1); editor.setSelectionRange(start, start); update(); } return; }
    if (['h', 'j', 'k', 'l', '0', '$'].includes(key)) {
      event.preventDefault(); const lines = editor.value.split('\n'); const p = position();
      let row = p.row - 1; let column = p.column - 1;
      if (key === 'h') column = Math.max(0, column - 1);
      if (key === 'l') column = Math.min(lines[row].length, column + 1);
      if (key === 'j') row = Math.min(lines.length - 1, row + 1);
      if (key === 'k') row = Math.max(0, row - 1);
      if (key === '0') column = 0;
      if (key === '$') column = lines[row].length;
      column = Math.min(column, lines[row].length);
      const offset = lines.slice(0, row).reduce((n, line) => n + line.length + 1, 0) + column;
      editor.setSelectionRange(offset, offset); update(); return;
    }
    if (key.length === 1 || ['Backspace', 'Delete', 'Enter'].includes(key)) event.preventDefault();
  });
  function renderFiles() {
    const query = $('#wb-picker-search').value.toLowerCase().trim();
    const results = $('#wb-picker-results'); results.replaceChildren();
    data.files.forEach((file, index) => {
      if (!`${file.name} ${file.language}`.toLowerCase().includes(query)) return;
      const button = document.createElement('button'); button.type = 'button';
      const name = document.createElement('strong'); name.textContent = file.name;
      const language = document.createElement('span'); language.textContent = file.language;
      button.append(name, language);
      button.addEventListener('click', () => { picker.close(); load(index, true); });
      results.append(button);
    });
    $('#wb-picker-status').textContent = results.children.length ? `${results.children.length} files` : 'No matching files. Try a different name.';
  }
  $('#wb-find').hidden = false;
  function openPicker() { $('#wb-picker-search').value = ''; renderFiles(); picker.showModal(); $('#wb-picker-search').focus(); }
  $('#wb-find').addEventListener('click', openPicker);
  $('#wb-picker-search').addEventListener('input', renderFiles);
  $('#wb-picker-search').addEventListener('keydown', event => {
    if (event.key === 'Enter') { const first = $('#wb-picker-results button'); if (first) { event.preventDefault(); first.click(); } }
  });
  $('#wb-picker-close').addEventListener('click', () => picker.close());
  picker.addEventListener('click', event => { if (event.target === picker) { const r = picker.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) picker.close(); } });
  root.querySelectorAll('[data-wb-layer]').forEach(button => button.addEventListener('click', () => {
    selectedLayer = Number(button.dataset.wbLayer); const layer = data.layers[selectedLayer];
    root.querySelectorAll('[data-wb-layer]').forEach(node => node.setAttribute('aria-pressed', String(node === button)));
    $('#wb-layer-tag').textContent = layer.tag; $('#wb-layer-title').textContent = layer.title; $('#wb-layer-body').textContent = layer.body;
    announce(`Selected ${layer.title}. ${layer.body}`);
  }));
  $('#wb-layer-open').addEventListener('click', () => load(data.layers[selectedLayer].file, true));
  update(); announce('Ready. Select a file or focus the editor to try the keyboard sketch.');
})();
