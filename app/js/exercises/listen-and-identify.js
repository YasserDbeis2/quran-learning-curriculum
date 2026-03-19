import { wordAudioUrl, playWord, stopAudio } from '../audio.js';

// ============================================================
// LISTEN & IDENTIFY
//
// Auto-plays a word. Student taps what they heard.
//
// variant: 'arabic'  — options are Arabic words  (pure listening)
// variant: 'english' — options are English meanings (listen + translate)
// ============================================================

export function renderListenAndIdentify(container, data, onComplete) {
  const { surah, ayah, wordIndex, wordAr, wordEn, options, answer, variant } = data;
  const isEnglish = variant === 'english';
  let playCount = 0;

  const optionClass = isEnglish ? 'option-card' : 'option-card ar-option';

  container.innerHTML = `
    <div class="exercise-label">Listen &amp; Identify</div>
    <div class="lai-prompt">${isEnglish ? 'What does the word mean?' : 'Which word did you hear?'}</div>

    <div class="lai-player" id="lai-player">
      <button class="lai-play-btn" id="lai-play" aria-label="Play word">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
      <div class="lai-play-label" id="lai-label">Tap to play</div>
    </div>

    <div class="${isEnglish ? 'options-grid' : 'lai-ar-options'} stagger-in" id="lai-options">
      ${options.map(opt =>
        `<button class="${optionClass}" data-value="${opt}">${opt}</button>`
      ).join('')}
    </div>
  `;

  const playBtn = container.querySelector('#lai-play');
  const label = container.querySelector('#lai-label');

  function play() {
    playBtn.classList.add('lai-playing');
    label.textContent = 'Listening…';
    playWord(surah, ayah, wordIndex).then(() => {
      playBtn.classList.remove('lai-playing');
      label.textContent = 'Tap to replay';
      playCount++;
    });
  }

  // Auto-play on load
  setTimeout(play, 350);

  playBtn.addEventListener('click', play);

  let answered = false;
  container.querySelector('#lai-options').addEventListener('click', (e) => {
    const btn = e.target.closest('.option-card');
    if (!btn || answered) return;
    answered = true;

    // Play the correct word when answered so they hear it again
    stopAudio();
    playWord(surah, ayah, wordIndex);

    const value = btn.dataset.value;
    const correct = value === answer;

    btn.classList.add(correct ? 'correct' : 'incorrect');
    if (!correct) {
      container.querySelector(`[data-value="${answer}"]`).classList.add('correct');
    }
    container.querySelectorAll('.option-card').forEach(b => b.classList.add('disabled'));

    // Show what the word is
    const reveal = document.createElement('div');
    reveal.className = 'lai-reveal';
    reveal.innerHTML = `
      <span class="lai-reveal-ar">${wordAr}</span>
      <span class="lai-reveal-en">${wordEn}</span>
    `;
    container.querySelector('#lai-player').after(reveal);

    onComplete(correct, correct ? null : `${wordAr} — ${wordEn}`);
  });
}
