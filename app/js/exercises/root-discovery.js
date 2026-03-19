export function renderRootDiscovery(container, data, onComplete) {
  const { rootMeaning, knownWords, newWord, question, options, answer } = data;
  const root = data.root || data.rootLetters;

  container.innerHTML = `
    <div class="exercise-label">Root Discovery</div>
    <div class="root-display">
      <div class="root-label">Shared Root</div>
      <div class="root-letters">${root}</div>
      ${rootMeaning ? `<div style="font-size:12px; color:var(--text-dim); margin-top:4px;">${rootMeaning}</div>` : ''}
    </div>
    <div class="root-words">
      ${knownWords.map(w => `
        <div class="root-word-card">
          <div class="ar">${w.ar}</div>
          <div class="en">${w.en}</div>
        </div>
      `).join('')}
    </div>
    <div style="text-align:center; margin:16px 0 8px;">
      <div style="font-size:13px; color:var(--text-dim); margin-bottom:8px;">${question}</div>
      <div class="root-new-word">${newWord.ar}</div>
    </div>
    <div class="options-list stagger-in">
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

    const fb = document.createElement('div');
    fb.className = `feedback-banner ${correct ? 'correct' : 'incorrect'}`;
    fb.innerHTML = `
      <div class="feedback-title">${correct ? 'Correct!' : 'Not quite'}</div>
      <div class="feedback-detail">${newWord.ar} = ${newWord.en} — from root ${root}</div>
    `;
    container.appendChild(fb);

    onComplete(correct);
  });
}
