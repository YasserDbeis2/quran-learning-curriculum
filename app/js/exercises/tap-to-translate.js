import { parseRef, playAyah, playWord, stopAudio } from '../audio.js';

export function renderTapToTranslate(container, data, onComplete) {
  const { ayah, ayahRef, translationWords } = data;
  const ref = parseRef(ayahRef);
  const shuffled = [...translationWords].sort(() => Math.random() - 0.5);
  const placed = [];

  // Count words in the Arabic ayah for audio
  const arabicWords = ayah.trim().split(/\s+/);

  container.innerHTML = `
    <div class="exercise-label">Tap to Translate</div>
    <div class="surah-header">
      <div class="surah-ref">${ayahRef}</div>
    </div>
    <div class="ayah-display" style="font-size:24px; min-height:70px;">
      ${ref ? arabicWords.map((w, i) =>
        `<span class="ayah-word has-audio" data-word-idx="${i}">${w}</span>`
      ).join(' ') : ayah}
    </div>
    <div class="exercise-question">Build the translation by tapping words in order</div>
    <div class="translation-zone" id="tz"></div>
    <div class="word-bank" id="wb">
      ${shuffled.map((w, i) =>
        `<span class="word-chip" data-idx="${i}" data-word="${w}">${w}</span>`
      ).join('')}
    </div>
  `;

  // Tap Arabic word to hear it
  if (ref) {
    container.querySelectorAll('.ayah-word').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.wordIdx, 10);
        playWord(ref.surah, ref.ayah, idx + 1);
      });
    });
    // Auto-play the full ayah
    setTimeout(() => {
      playAyah(ref.surah, ref.ayah, arabicWords.length);
    }, 300);
  }

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
      stopAudio();
      const correct = placed.every((w, i) => w === translationWords[i]);

      tz.classList.add(correct ? 'correct-zone' : 'incorrect-zone');

      const detail = correct ? null : translationWords.join(' ');
      onComplete(correct, detail);
    }
  });
}
