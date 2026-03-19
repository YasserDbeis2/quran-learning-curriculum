export function renderTapToTranslate(container, data, onComplete) {
  const { ayah, ayahRef, translationWords } = data;
  const shuffled = [...translationWords].sort(() => Math.random() - 0.5);
  const placed = [];

  container.innerHTML = `
    <div class="exercise-label">Tap to Translate</div>
    <div class="surah-header">
      <div class="surah-ref">${ayahRef}</div>
    </div>
    <div class="ayah-display" style="font-size:24px; min-height:70px;">
      ${ayah}
    </div>
    <div class="exercise-question">Build the translation by tapping words in order</div>
    <div class="translation-zone" id="tz"></div>
    <div class="word-bank" id="wb">
      ${shuffled.map((w, i) =>
        `<span class="word-chip" data-idx="${i}" data-word="${w}">${w}</span>`
      ).join('')}
    </div>
  `;

  const tz = container.querySelector('#tz');
  const wb = container.querySelector('#wb');
  let done = false;

  // Tap to place
  wb.addEventListener('click', (e) => {
    const chip = e.target.closest('.word-chip');
    if (!chip || chip.classList.contains('used') || done) return;

    chip.classList.add('used');
    placed.push(chip.dataset.word);

    const placedChip = document.createElement('span');
    placedChip.className = 'word-chip in-zone placing';
    placedChip.textContent = chip.dataset.word;
    placedChip.dataset.word = chip.dataset.word;
    tz.appendChild(placedChip);

    // Tap to remove from zone
    placedChip.addEventListener('click', () => {
      if (done) return;
      placed.splice(placed.indexOf(placedChip.dataset.word), 1);
      chip.classList.remove('used');
      placedChip.remove();
    });

    // Check if complete
    if (placed.length === translationWords.length) {
      done = true;
      const correct = placed.every((w, i) => w === translationWords[i]);

      tz.classList.add(correct ? 'correct-zone' : 'incorrect-zone');

      if (!correct) {
        // Show correct order
        const fb = document.createElement('div');
        fb.className = 'feedback-banner incorrect';
        fb.innerHTML = `
          <div class="feedback-title">Not quite</div>
          <div class="feedback-detail">${translationWords.join(' ')}</div>
        `;
        container.querySelector('.exercise-body') ?
          container.appendChild(fb) :
          container.appendChild(fb);
      } else {
        const fb = document.createElement('div');
        fb.className = 'feedback-banner correct';
        fb.innerHTML = `<div class="feedback-title">Perfect!</div>`;
        container.appendChild(fb);
      }

      onComplete(correct);
    }
  });
}
