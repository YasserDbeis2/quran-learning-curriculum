// ============================================================
// AUDIO UTILITY — Word-by-word Quran audio via Surahpedia
//
// URL pattern: https://resources.surahpedia.com/Word_by-Word/{surah}/{surah3}{ayah3}{word3}.mp3
// Example: Surah 1, Ayah 1, Word 1 → /Word_by-Word/1/001001001.mp3
// ============================================================

const BASE = 'https://resources.surahpedia.com/Word_by-Word';

let currentAudio = null;
let currentSequence = null; // track sequential playback so we can cancel

/**
 * Build the URL for a single word's audio.
 * @param {number} surah  — 1-114
 * @param {number} ayah   — 1-based ayah number
 * @param {number} word   — 1-based word index within the ayah
 */
export function wordAudioUrl(surah, ayah, word) {
  const s = String(surah).padStart(3, '0');
  const a = String(ayah).padStart(3, '0');
  const w = String(word).padStart(3, '0');
  return `${BASE}/${surah}/${s}${a}${w}.mp3`;
}

/**
 * Parse an ayahRef like "1:1" or "112:3" into { surah, ayah }.
 * Returns null for non-standard refs (e.g. "Takbir", "Surah 1 — ...").
 */
export function parseRef(ayahRef) {
  const m = ayahRef && ayahRef.match(/^(\d+):(\d+)$/);
  if (!m) return null;
  return { surah: parseInt(m[1], 10), ayah: parseInt(m[2], 10) };
}

/** Stop any currently playing audio */
export function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  if (currentSequence) {
    currentSequence.cancelled = true;
    currentSequence = null;
  }
}

/**
 * Play a single word's audio.
 * @returns {Promise<void>} resolves when playback finishes
 */
export function playWord(surah, ayah, word) {
  stopAudio();
  return new Promise((resolve, reject) => {
    const audio = new Audio(wordAudioUrl(surah, ayah, word));
    currentAudio = audio;
    audio.addEventListener('ended', () => { currentAudio = null; resolve(); });
    audio.addEventListener('error', () => { currentAudio = null; resolve(); }); // swallow errors gracefully
    audio.play().catch(() => { currentAudio = null; resolve(); });
  });
}

/**
 * Play all words of an ayah sequentially.
 * @param {number} surah
 * @param {number} ayah
 * @param {number} wordCount — how many words in this ayah
 * @param {function} [onWordStart] — called with (wordIndex) 0-based as each word starts
 * @returns {Promise<void>}
 */
export function playAyah(surah, ayah, wordCount, onWordStart) {
  stopAudio();
  const seq = { cancelled: false };
  currentSequence = seq;

  return (async () => {
    for (let i = 0; i < wordCount; i++) {
      if (seq.cancelled) return;
      if (onWordStart) onWordStart(i);
      await playWordRaw(surah, ayah, i + 1, seq);
    }
    currentSequence = null;
  })();
}

/**
 * Play multiple ayahs sequentially (for listen exercise).
 * @param {Array<{surah: number, ayah: number, wordCount: number}>} ayahs
 * @param {function} [onAyahStart] — called with (ayahIndex) as each ayah starts
 * @param {function} [onWordStart] — called with (ayahIndex, wordIndex) as each word starts
 * @returns {Promise<void>}
 */
export function playAyahs(ayahs, onAyahStart, onWordStart) {
  stopAudio();
  const seq = { cancelled: false };
  currentSequence = seq;

  return (async () => {
    for (let a = 0; a < ayahs.length; a++) {
      if (seq.cancelled) return;
      if (onAyahStart) onAyahStart(a);
      const { surah, ayah, wordCount } = ayahs[a];
      for (let w = 0; w < wordCount; w++) {
        if (seq.cancelled) return;
        if (onWordStart) onWordStart(a, w);
        await playWordRaw(surah, ayah, w + 1, seq);
      }
    }
    currentSequence = null;
  })();
}

/** Internal: play one word, respecting cancellation */
function playWordRaw(surah, ayah, word, seq) {
  return new Promise((resolve) => {
    if (seq.cancelled) { resolve(); return; }
    const audio = new Audio(wordAudioUrl(surah, ayah, word));
    currentAudio = audio;
    const done = () => { currentAudio = null; resolve(); };
    audio.addEventListener('ended', done);
    audio.addEventListener('error', done);
    audio.play().catch(done);
  });
}
