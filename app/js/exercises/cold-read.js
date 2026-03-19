export function renderColdRead(container, data, onComplete) {
  const { ayah, ayahRef, words } = data;
  const knownCount = words.filter(w => w.en !== null).length;
  const totalCount = words.length;
  let tappedCount = 0;
  let revealed = false;

  container.innerHTML = `
    <div class="exercise-label">Cold Read</div>
    <div class="cold-read-ref">${ayahRef}</div>
    <div class="cold-read-instruction">Tap the highlighted words you recognize</div>
    <div class="ayah-display" id="cr-ayah" style="position:relative;">
      ${words.map((w, i) => {
        const cls = w.en ? 'known' : 'unknown';
        return `<span class="ayah-word ${cls}" data-idx="${i}" style="position:relative;">${w.ar}</span>`;
      }).join(' ')}
    </div>
    <div id="cr-score" style="display:none;"></div>
    <button class="continue-btn" id="cr-reveal" style="margin-top:auto;">Show Full Meaning</button>
  `;

  const ayahEl = container.querySelector('#cr-ayah');
  const scoreEl = container.querySelector('#cr-score');
  const revealBtn = container.querySelector('#cr-reveal');

  // Tap known words to see meaning
  ayahEl.addEventListener('click', (e) => {
    const word = e.target.closest('.ayah-word.known');
    if (!word || word.classList.contains('tapped') || revealed) return;

    word.classList.add('tapped');
    tappedCount++;

    // Show tooltip
    const idx = parseInt(word.dataset.idx);
    const meaning = words[idx].en;

    // Remove any existing tooltip
    const old = ayahEl.querySelector('.word-tooltip');
    if (old) old.remove();

    const tooltip = document.createElement('div');
    tooltip.className = 'word-tooltip';
    tooltip.textContent = meaning;
    word.appendChild(tooltip);

    // Auto-remove tooltip after 2s
    setTimeout(() => tooltip.remove(), 2000);
  });

  revealBtn.addEventListener('click', () => {
    if (revealed) return;
    revealed = true;

    // Show score
    const pct = Math.round((knownCount / totalCount) * 100);
    scoreEl.style.display = 'block';
    scoreEl.innerHTML = `
      <div class="cold-read-score score-animate">
        <div class="score-num">${knownCount}/${totalCount}</div>
        <div class="score-label">words recognized (${pct}%)</div>
      </div>
    `;

    // Highlight all unknown words
    container.querySelectorAll('.ayah-word.unknown').forEach(w => {
      w.style.opacity = '1';
      w.style.color = 'var(--text-dim)';
    });

    // Show all known word meanings
    container.querySelectorAll('.ayah-word.known').forEach(w => {
      w.classList.add('tapped');
    });

    revealBtn.textContent = 'Continue';
    revealBtn.addEventListener('click', () => {
      onComplete(undefined); // Cold read doesn't have right/wrong
    }, { once: true });
  });
}
