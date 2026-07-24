/* Renders and filters publication lists. Reads JOURNALS / CONFERENCES from data/pub-data.js */
(function(){
  function escapeHtml(s){
    return (s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  function journalItemHTML(p){
    return `
      <div class="pub-item">
        <div class="pub-year">${p.year}</div>
        <div>
          <div class="pub-title">${escapeHtml(p.title)}</div>
          <div class="pub-meta">${escapeHtml(p.authors)} — <em>${escapeHtml(p.venue)}</em>${p.publisher ? ', ' + escapeHtml(p.publisher) : ''}</div>
        </div>
        ${p.quartile ? `<div class="pub-q">${p.quartile}</div>` : `<div class="pub-q" style="visibility:hidden">—</div>`}
      </div>`;
  }

  function confItemHTML(p){
    return `
      <div class="pub-item">
        <div class="pub-year">${p.year}</div>
        <div>
          <div class="pub-title">${escapeHtml(p.title)}</div>
          <div class="pub-meta">${escapeHtml(p.authors)} — <em>${escapeHtml(p.venue)}</em></div>
        </div>
        <div class="pub-q">${escapeHtml(p.type || '')}${p.citations ? ' · ' + p.citations + ' cit.' : ''}</div>
      </div>`;
  }

  function renderList(containerId, items, renderer, emptyMsg){
    const el = document.getElementById(containerId);
    if(!el) return;
    if(!items.length){
      el.innerHTML = `<div class="pub-empty">${emptyMsg || 'No publications match your filters.'}</div>`;
      return;
    }
    el.innerHTML = items.map(renderer).join('');
  }

  function renderRecent(containerId, count){
    const all = JOURNALS.slice().sort((a,b) => b.year - a.year).slice(0, count);
    renderList(containerId, all, journalItemHTML);
  }

  function initPublicationsPage(){
    const listEl = document.getElementById('pubList');
    const countEl = document.getElementById('pubCount');
    const searchEl = document.getElementById('pubSearch');
    const yearEl = document.getElementById('pubYear');
    const tabs = document.querySelectorAll('.pub-tabs button');
    if(!listEl) return;

    let mode = 'journals';

    function years(dataset){
      return Array.from(new Set(dataset.map(d => d.year))).sort((a,b)=>b-a);
    }

    function populateYears(){
      const dataset = mode === 'journals' ? JOURNALS : CONFERENCES;
      const ys = years(dataset);
      yearEl.innerHTML = '<option value="">All years</option>' + ys.map(y => `<option value="${y}">${y}</option>`).join('');
    }

    function apply(){
      const q = (searchEl.value || '').toLowerCase().trim();
      const y = yearEl.value;
      const dataset = mode === 'journals' ? JOURNALS : CONFERENCES;
      const renderer = mode === 'journals' ? journalItemHTML : confItemHTML;

      let items = dataset.filter(p => {
        const hay = (p.title + ' ' + p.authors + ' ' + p.venue).toLowerCase();
        const matchQ = !q || hay.includes(q);
        const matchY = !y || String(p.year) === y;
        return matchQ && matchY;
      }).sort((a,b) => b.year - a.year);

      countEl.textContent = `${items.length} of ${dataset.length} ${mode === 'journals' ? 'journal articles' : 'conference papers / edited volumes'}`;
      renderList('pubList', items, renderer);
    }

    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mode = btn.dataset.mode;
        populateYears();
        apply();
      });
    });

    searchEl.addEventListener('input', apply);
    yearEl.addEventListener('change', apply);

    populateYears();
    apply();
  }

  window.PubData = { renderRecent, initPublicationsPage };
})();
