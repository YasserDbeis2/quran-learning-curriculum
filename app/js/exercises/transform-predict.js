export function renderTransformPredict(container, data, onComplete) {
  const { given, instruction, result, question, options, answer } = data;

  container.innerHTML = `
    <div class="exercise-label">Transform & Predict</div>
    <div class="transform-box">
      <div class="transform-given">
        <span class="transform-arabic">${given.ar}</span>
        <span class="transform-equals">=</span>
        <span class="transform-english">${given.en}</span>
      </div>
    </div>
    <div class="transform-instruction">${instruction}</div>
    <div class="transform-arrow">↓</div>
    ${result ? `<div class="transform-result">${result.ar}</div>` : ''}
    <div class="exercise-question" style="margin-top:12px;">${question}</div>
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

    onComplete(correct, correct ? null : `Answer: ${answer}`);
  });
}
