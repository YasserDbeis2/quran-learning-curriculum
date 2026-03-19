export function renderListen(container, data, onComplete) {
  const { surahName, surahRef, ayahs } = data;

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
      <div class="listen-ayahs">
        ${ayahs.map(a =>
          `<div style="margin-bottom:12px;">${a.ar} <span class="listen-ayah-num">﴿${a.num}﴾</span></div>`
        ).join('')}
      </div>
    </div>
    <button class="continue-btn" id="listen-continue" style="margin-top:auto;">Continue</button>
  `;

  // Play button visual toggle (no actual audio)
  const playBtn = container.querySelector('#play-btn');
  let playing = false;
  playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.innerHTML = playing
      ? `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`
      : `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    playBtn.style.background = playing ? 'rgba(200, 169, 81, .25)' : '';
  });

  container.querySelector('#listen-continue').addEventListener('click', () => {
    onComplete(undefined);
  });
}
