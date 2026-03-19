import { parseRef, playWord } from '../audio.js';

export function renderFillTheGap(container, data, onComplete) {
  const { ayah, gapIndex, options, answer, ayahRef } = data;
  const ref = ayahRef ? parseRef(ayahRef) : null;
  const shuffled = [...options].sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <div class="exercise-label">Fill the Gap</div>
    <div class="exercise-question">Tap the missing word</div>
    <div class="ayah-display" id="gap-ayah">
      ${ayah.map((w, i) => {
        if (i === gapIndex) {
          return `<span class="ayah-word gap" id="gap-slot"></span>`;
        }
        return `<span class="ayah-word${ref ? ' has-audio' : ''}" data-word-idx="${i}">${w}</span>`;
      }).join(' ')}
    </div>
    <div class="gap-bank" id="gap-bank">
      ${shuffled.map(opt =>
        `<span class="word-chip ar-chip gap-chip" data-value="${opt}">${opt}</span>`
      ).join('')}
    </div>
  `;

  // Tap context words to hear them
  if (ref) {
    container.querySelectorAll('.ayah-word:not(.gap)').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.wordIdx, 10);
        playWord(ref.surah, ref.ayah, idx + 1);
      });
    });
  }

  const slot = container.querySelector('#gap-slot');

  let answered = false;
  container.querySelector('#gap-bank').addEventListener('click', (e) => {
    const chip = e.target.closest('.gap-chip');
    if (!chip || answered) return;
    answered = true;

    const value = chip.dataset.value;
    const correct = value === answer;

    // Fill the slot with the tapped word
    slot.textContent = value;
    slot.classList.add('filled', correct ? 'slot-correct' : 'slot-wrong');

    // Dim unused chips; reveal correct if wrong
    container.querySelectorAll('.gap-chip').forEach(c => {
      c.classList.add('disabled');
      if (c.dataset.value === answer && !correct) {
        c.classList.add('chip-reveal');
      }
    });
    chip.classList.add(correct ? 'chip-correct' : 'chip-wrong');

    if (ref) playWord(ref.surah, ref.ayah, gapIndex + 1);

    onComplete(correct, correct ? null : `The missing word was ${answer}`);
  });
}
