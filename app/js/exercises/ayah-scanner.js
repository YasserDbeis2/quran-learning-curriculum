import { parseRef, playWord, playAyah, stopAudio } from '../audio.js';

// ============================================================
// AYAH SCANNER — two variants:
//
//  'find'  — "Find the word that means X" → tap the right Arabic word
//  'spot'  — Show ayah with word translations, one is wrong → tap the impostor
// ============================================================

export function renderAyahScanner(container, data, onComplete) {
  if (data.variant === 'spot') {
    renderSpot(container, data, onComplete);
  } else {
    renderFind(container, data, onComplete);
  }
}

// ── FIND variant ─────────────────────────────────────────────
// "Find the Arabic word that means: [English]"
// Tap the correct word in the ayah display
function renderFind(container, data, onComplete) {
  const { words, ayahRef, target, answerIndex, detail } = data;
  const ref = parseRef(ayahRef);
  let answered = false;

  container.innerHTML = `
    <div class="exercise-label">Ayah Scanner</div>
    <div class="surah-header"><div class="surah-ref">${ayahRef}</div></div>
    <div class="scanner-prompt">
      <div class="scanner-prompt-label">Find the word that means</div>
      <div class="scanner-target">${target}</div>
    </div>
    <div class="ayah-display scanner-ayah" id="scanner-words">
      ${words.map((w, i) =>
        `<span class="ayah-word scanner-word" data-idx="${i}">${w}</span>`
      ).join(' ')}
    </div>
    <div class="scanner-hint">↑ Tap the word ↑</div>
  `;

  // Auto-play if we have a ref
  if (ref) {
    setTimeout(() => playWord(ref.surah, ref.ayah, answerIndex + 1), 400);
  }

  container.querySelector('#scanner-words').addEventListener('click', (e) => {
    const word = e.target.closest('.scanner-word');
    if (!word || answered) return;
    answered = true;

    const idx = parseInt(word.dataset.idx);
    const correct = idx === answerIndex;

    if (ref) playWord(ref.surah, ref.ayah, idx + 1);

    // Animate all words
    container.querySelectorAll('.scanner-word').forEach((el, i) => {
      if (i === answerIndex) {
        el.classList.add('scanner-correct');
      } else if (i === idx && !correct) {
        el.classList.add('scanner-wrong');
      } else {
        el.style.opacity = '0.3';
      }
    });

    container.querySelector('.scanner-hint').style.display = 'none';

    if (detail) {
      const fb = document.createElement('div');
      fb.className = `feedback-banner ${correct ? 'correct' : 'incorrect'}`;
      fb.innerHTML = `
        <div class="feedback-title">${correct ? '🎯 Found it!' : '❌ Not that one'}</div>
        <div class="feedback-detail">${detail}</div>
      `;
      container.appendChild(fb);
    }

    stopAudio();
    onComplete(correct, detail || null);
  });
}

// ── SPOT variant ─────────────────────────────────────────────
// Each word is shown with an English translation underneath.
// ONE translation is wrong — find and tap the impostor.
function renderSpot(container, data, onComplete) {
  const { wordTranslations, ayahRef, errorIndex, detail } = data;
  const ref = parseRef(ayahRef);
  let answered = false;

  container.innerHTML = `
    <div class="exercise-label">Ayah Scanner</div>
    <div class="surah-header"><div class="surah-ref">${ayahRef}</div></div>
    <div class="scanner-prompt">
      <div class="scanner-prompt-label">One translation is wrong</div>
      <div class="scanner-target">Tap the impostor 🕵️</div>
    </div>
    <div class="spot-grid" id="spot-grid">
      ${wordTranslations.map((wt, i) => `
        <div class="spot-pair" data-idx="${i}">
          <div class="spot-arabic">${wt.ar}</div>
          <div class="spot-english">${wt.en}</div>
        </div>
      `).join('')}
    </div>
  `;

  if (ref) {
    setTimeout(() => playAyah(ref.surah, ref.ayah, wordTranslations.length), 400);
  }

  container.querySelector('#spot-grid').addEventListener('click', (e) => {
    const pair = e.target.closest('.spot-pair');
    if (!pair || answered) return;
    answered = true;

    const idx = parseInt(pair.dataset.idx);
    const correct = idx === errorIndex;

    container.querySelectorAll('.spot-pair').forEach((el, i) => {
      if (i === errorIndex) {
        el.classList.add(correct && i === idx ? 'spot-found' : 'spot-reveal');
      } else if (i === idx && !correct) {
        el.classList.add('spot-wrong');
      } else {
        el.style.opacity = '0.3';
      }
    });

    if (ref) playWord(ref.surah, ref.ayah, errorIndex + 1);

    if (detail) {
      const fb = document.createElement('div');
      fb.className = `feedback-banner ${correct ? 'correct' : 'incorrect'}`;
      fb.innerHTML = `
        <div class="feedback-title">${correct ? '🕵️ Caught it!' : '❌ Wrong suspect'}</div>
        <div class="feedback-detail">${detail}</div>
      `;
      container.appendChild(fb);
    }

    stopAudio();
    onComplete(correct, detail || null);
  });
}
