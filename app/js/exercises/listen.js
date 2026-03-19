import { playAyahs, stopAudio } from '../audio.js';

export function renderListen(container, data, onComplete) {
  const { surahName, surahRef, ayahs, surah } = data;

  container.innerHTML = `
    <div class="exercise-label">Listen & Reflect</div>
    <div class="listen-screen">
      <div class="listen-icon" id="play-btn">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
      <div style="font-size:18px; font-weight:600; color:var(--text); margin-bottom:4px;">${surahName}</div>
      <div class="listen-label">${surahRef}</div>
      <div class="listen-ayahs" id="listen-ayahs">
        ${ayahs.map((a, i) =>
          `<div class="listen-ayah-line" data-ayah-idx="${i}" style="margin-bottom:12px; transition: opacity .3s, color .3s;">${a.ar} <span class="listen-ayah-num">﴿${a.num}﴾</span></div>`
        ).join('')}
      </div>
    </div>
    <button class="continue-btn" id="listen-continue" style="margin-top:auto;">Continue</button>
  `;

  const playBtn = container.querySelector('#play-btn');
  const ayahLines = container.querySelectorAll('.listen-ayah-line');
  let playing = false;

  function setPlayIcon() {
    playBtn.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    playBtn.style.background = '';
  }
  function setPauseIcon() {
    playBtn.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`;
    playBtn.style.background = 'rgba(200, 169, 81, .25)';
  }

  // Count words in each ayah by splitting on whitespace
  function wordCount(text) {
    return text.trim().split(/\s+/).length;
  }

  playBtn.addEventListener('click', () => {
    if (playing) {
      stopAudio();
      playing = false;
      setPlayIcon();
      ayahLines.forEach(el => { el.style.opacity = ''; el.style.color = ''; });
      return;
    }

    // If no surah number, just do visual toggle (non-Quranic content)
    if (!surah) {
      playing = !playing;
      playing ? setPauseIcon() : setPlayIcon();
      return;
    }

    playing = true;
    setPauseIcon();

    // Dim all ayahs initially
    ayahLines.forEach(el => { el.style.opacity = '0.4'; });

    const ayahData = ayahs.map(a => ({
      surah,
      ayah: a.num,
      wordCount: wordCount(a.ar),
    }));

    playAyahs(
      ayahData,
      // onAyahStart — highlight current ayah
      (ayahIdx) => {
        ayahLines.forEach((el, i) => {
          el.style.opacity = i === ayahIdx ? '1' : '0.4';
          el.style.color = i === ayahIdx ? 'var(--gold)' : '';
        });
      }
    ).then(() => {
      playing = false;
      setPlayIcon();
      ayahLines.forEach(el => { el.style.opacity = ''; el.style.color = ''; });
    });
  });

  container.querySelector('#listen-continue').addEventListener('click', () => {
    stopAudio();
    onComplete(undefined);
  });
}
