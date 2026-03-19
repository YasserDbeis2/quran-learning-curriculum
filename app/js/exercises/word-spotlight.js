export function renderWordSpotlight(container, data, onComplete) {
  const { words, highlightIndex, question, options, answer, detail, ayahRef } = data;

  container.innerHTML = `
    <div class="exercise-label">Word Spotlight</div>
    <div class="surah-header">
      <div class="surah-ref">${ayahRef}</div>
    </div>
    <div class="ayah-display">
      ${words.map((w, i) =>
        `<span class="ayah-word${i === highlightIndex ? ' highlighted' : ''}">${w}</span>`
      ).join(' ')}
    </div>
    <div class="exercise-question">${question}</div>
    <div class="options-grid stagger-in">
      ${options.map(opt =>
        `<button class="option-card" data-value="${opt}">${opt}</button>`
      ).join('')}
    </div>
  `;

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

    // Feedback
    if (detail) {
      const fb = document.createElement('div');
      fb.className = `feedback-banner ${correct ? 'correct' : 'incorrect'}`;
      fb.innerHTML = `
        <div class="feedback-title">${correct ? 'Correct!' : 'Not quite'}</div>
        <div class="feedback-detail">${detail}</div>
      `;
      container.appendChild(fb);
    }

    onComplete(correct);
  });
}
