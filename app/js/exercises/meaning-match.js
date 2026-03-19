export function renderMeaningMatch(container, data, onComplete) {
  const { pairs } = data;
  const shuffledAr = [...pairs].sort(() => Math.random() - 0.5);
  const shuffledEn = [...pairs].sort(() => Math.random() - 0.5);

  let selectedAr = null;
  let selectedEn = null;
  let matchedCount = 0;
  const matched = new Set();

  container.innerHTML = `
    <div class="exercise-label">Meaning Match</div>
    <div class="exercise-question">Match the Arabic words with their meanings</div>
    <div class="match-container">
      <div class="match-column" id="ar-col">
        ${shuffledAr.map((p, i) =>
          `<div class="match-item ar-match" data-ar-idx="${i}" data-pair="${p[0]}">${p[0]}</div>`
        ).join('')}
      </div>
      <div class="match-column" id="en-col">
        ${shuffledEn.map((p, i) =>
          `<div class="match-item" data-en-idx="${i}" data-pair="${p[0]}">${p[1]}</div>`
        ).join('')}
      </div>
    </div>
  `;

  container.addEventListener('click', (e) => {
    const item = e.target.closest('.match-item');
    if (!item || item.classList.contains('matched')) return;

    const isAr = item.hasAttribute('data-ar-idx');
    const isEn = item.hasAttribute('data-en-idx');

    if (isAr) {
      // Deselect previous
      if (selectedAr) selectedAr.classList.remove('selected');
      selectedAr = item;
      item.classList.add('selected');
    } else if (isEn) {
      if (selectedEn) selectedEn.classList.remove('selected');
      selectedEn = item;
      item.classList.add('selected');
    }

    // Check if we have a pair
    if (selectedAr && selectedEn) {
      const arKey = selectedAr.dataset.pair;
      const enKey = selectedEn.dataset.pair;

      if (arKey === enKey) {
        // Correct match
        selectedAr.classList.remove('selected');
        selectedEn.classList.remove('selected');
        selectedAr.classList.add('matched');
        selectedEn.classList.add('matched');
        matchedCount++;
        matched.add(arKey);

        if (matchedCount === pairs.length) {
          const fb = document.createElement('div');
          fb.className = 'feedback-banner correct';
          fb.innerHTML = `<div class="feedback-title">All matched!</div>`;
          container.appendChild(fb);
          onComplete(true);
        }
      } else {
        // Wrong match
        selectedAr.classList.add('wrong');
        selectedEn.classList.add('wrong');
        setTimeout(() => {
          if (selectedAr) selectedAr.classList.remove('wrong', 'selected');
          if (selectedEn) selectedEn.classList.remove('wrong', 'selected');
          selectedAr = null;
          selectedEn = null;
        }, 500);
        return;
      }
      selectedAr = null;
      selectedEn = null;
    }
  });
}
