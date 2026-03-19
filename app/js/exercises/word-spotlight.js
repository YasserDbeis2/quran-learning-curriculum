import { parseRef, playWord, stopAudio } from '../audio.js';

export function renderWordSpotlight(container, data, onComplete) {
  const { words, highlightIndex, question, options, answer, detail, ayahRef, hint } = data;
  const ref = parseRef(ayahRef);

  container.innerHTML = `
    <div class="exercise-label">Word Spotlight</div>
    <div class="surah-header">
      <div class="surah-ref">${ayahRef}</div>
    </div>
    <div class="ayah-display">
      ${words.map((w, i) =>
        `<span class="ayah-word${i === highlightIndex ? ' highlighted' : ''}${ref ? ' has-audio' : ''}" data-word-idx="${i}">${w}</span>`
      ).join(' ')}
    </div>
    ${hint ? `<div class="spotlight-hint">${hint}</div>` : ''}
    <div class="exercise-question">${question}</div>
    <div class="options-grid stagger-in">
      ${options.map(opt =>
        `<button class="option-card" data-value="${opt}">${opt}</button>`
      ).join('')}
    </div>
  `;

  // Tap any word to hear it
  if (ref) {
    container.querySelectorAll('.ayah-word').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.wordIdx, 10);
        playWord(ref.surah, ref.ayah, idx + 1);
      });
    });
    // Auto-play the highlighted word after a short delay
    setTimeout(() => {
      playWord(ref.surah, ref.ayah, highlightIndex + 1);
    }, 400);
  }

  let answered = false;
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-card');
    if (!btn || answered) return;
    answered = true;

    const value = btn.dataset.value;
    const correct = value === answer;

    btn.classList.add(correct ? 'correct' : 'incorrect');
    if (!correct) {
      container.querySelector(`[data-value="${answer}"]`).classList.add('correct');
    }
    container.querySelectorAll('.option-card').forEach(b => b.classList.add('disabled'));

    stopAudio();
    onComplete(correct, detail || null);
  });
}
