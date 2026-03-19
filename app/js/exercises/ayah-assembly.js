export function renderAyahAssembly(container, data, onComplete) {
  const { translation, words, isAyahLevel } = data;
  const correctOrder = [...words];
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  const placed = [];

  container.innerHTML = `
    <div class="exercise-label">Ayah Assembly</div>
    <div class="exercise-question">${translation}</div>
    <div class="translation-zone rtl" id="az" style="min-height:${isAyahLevel ? '120px' : '70px'}; font-family:var(--font-ar); font-size:${isAyahLevel ? '16px' : '20px'};"></div>
    <div class="word-bank" id="awb">
      ${shuffled.map((w, i) =>
        `<span class="word-chip ${isAyahLevel ? '' : 'ar-chip'}" data-idx="${i}" data-word="${w}" style="${isAyahLevel ? 'font-family:var(--font-ar); font-size:15px; direction:rtl;' : ''}">${w}</span>`
      ).join('')}
    </div>
  `;

  const az = container.querySelector('#az');
  const awb = container.querySelector('#awb');
  let done = false;

  awb.addEventListener('click', (e) => {
    const chip = e.target.closest('.word-chip');
    if (!chip || chip.classList.contains('used') || done) return;

    chip.classList.add('used');
    placed.push(chip.dataset.word);

    const placedChip = document.createElement('span');
    placedChip.className = `word-chip in-zone placing ${isAyahLevel ? '' : 'ar-chip'}`;
    if (isAyahLevel) {
      placedChip.style.cssText = 'font-family:var(--font-ar); font-size:15px; direction:rtl;';
    }
    placedChip.textContent = chip.dataset.word;
    placedChip.dataset.word = chip.dataset.word;
    az.appendChild(placedChip);

    placedChip.addEventListener('click', () => {
      if (done) return;
      const idx = placed.indexOf(placedChip.dataset.word);
      if (idx > -1) placed.splice(idx, 1);
      chip.classList.remove('used');
      placedChip.remove();
    });

    if (placed.length === correctOrder.length) {
      done = true;
      const correct = placed.every((w, i) => w === correctOrder[i]);
      az.classList.add(correct ? 'correct-zone' : 'incorrect-zone');

      const fb = document.createElement('div');
      fb.className = `feedback-banner ${correct ? 'correct' : 'incorrect'}`;
      fb.innerHTML = correct
        ? `<div class="feedback-title">Perfect order!</div>`
        : `<div class="feedback-title">Not quite</div><div class="feedback-detail" style="font-family:var(--font-ar); direction:rtl; font-size:18px; margin-top:4px;">${correctOrder.join(' ')}</div>`;
      container.appendChild(fb);

      onComplete(correct);
    }
  });
}
