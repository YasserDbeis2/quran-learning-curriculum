export function renderFillTheGap(container, data, onComplete) {
  const { ayah, gapIndex, options, answer } = data;

  container.innerHTML = `
    <div class="exercise-label">Fill the Gap</div>
    <div class="exercise-question">Which word completes this ayah?</div>
    <div class="ayah-display" id="gap-ayah">
      ${ayah.map((w, i) => {
        if (i === gapIndex) {
          return `<span class="ayah-word gap" id="gap-slot"></span>`;
        }
        return `<span class="ayah-word">${w}</span>`;
      }).join(' ')}
    </div>
    <div class="options-list stagger-in">
      ${options.map(opt =>
        `<button class="option-card ar-option" data-value="${opt}">${opt}</button>`
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
    const slot = container.querySelector('#gap-slot');

    btn.classList.add(correct ? 'correct' : 'incorrect');
    if (!correct) {
      container.querySelector(`[data-value="${answer}"]`).classList.add('correct');
    }
    container.querySelectorAll('.option-card').forEach(b => b.classList.add('disabled'));

    // Fill the gap
    slot.textContent = correct ? answer : value;
    slot.classList.add('filled');
    if (!correct) slot.style.color = 'var(--red)';

    onComplete(correct);
  });
}
