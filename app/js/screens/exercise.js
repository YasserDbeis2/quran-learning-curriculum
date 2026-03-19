import { LESSONS } from '../data/lessons.js';
import state from '../state.js';
import router from '../router.js';
import { renderWordSpotlight } from '../exercises/word-spotlight.js';
import { renderMeaningMatch } from '../exercises/meaning-match.js';
import { renderFillTheGap } from '../exercises/fill-the-gap.js';
import { renderTapToTranslate } from '../exercises/tap-to-translate.js';
import { renderRootDiscovery } from '../exercises/root-discovery.js';
import { renderAyahAssembly } from '../exercises/ayah-assembly.js';
import { renderTransformPredict } from '../exercises/transform-predict.js';
import { renderColdRead } from '../exercises/cold-read.js';
import { renderListen } from '../exercises/listen.js';
import { renderAyahScanner } from '../exercises/ayah-scanner.js';
import { renderListenAndIdentify } from '../exercises/listen-and-identify.js';
import { stopAudio } from '../audio.js';

const RENDERERS = {
  'word-spotlight': renderWordSpotlight,
  'meaning-match': renderMeaningMatch,
  'fill-the-gap': renderFillTheGap,
  'tap-to-translate': renderTapToTranslate,
  'root-discovery': renderRootDiscovery,
  'ayah-assembly': renderAyahAssembly,
  'transform-predict': renderTransformPredict,
  'cold-read': renderColdRead,
  'listen': renderListen,
  'ayah-scanner': renderAyahScanner,
  'listen-and-identify': renderListenAndIdentify,
};

export function renderExercise(container, lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;

  const exercises = lesson.exercises;
  const idx = state.exerciseIndex;

  // Stop any playing audio and clear previous content
  stopAudio();
  container.innerHTML = '';
  container.scrollTop = 0;

  // Empty lesson — content not yet built
  if (!exercises || exercises.length === 0) {
    renderComingSoon(container, lesson);
    return;
  }

  // Lesson complete?
  if (idx >= exercises.length) {
    renderLessonComplete(container, lesson);
    return;
  }

  const ex = exercises[idx];
  const total = exercises.length;

  const div = document.createElement('div');
  div.className = 'exercise-screen';

  // Progress bar
  div.innerHTML = `
    <div class="exercise-progress">
      <button class="exercise-progress-close" id="ex-close">&times;</button>
      <div class="progress-track">
        <div class="progress-fill" style="width:${Math.round((idx / total) * 100)}%"></div>
      </div>
      <span class="progress-count">${idx + 1}/${total}</span>
    </div>
  `;

  const body = document.createElement('div');
  body.className = 'exercise-body';
  div.appendChild(body);

  container.appendChild(div);

  // Close button
  div.querySelector('#ex-close').addEventListener('click', () => {
    router.navigate('lessons', { unitId: state.unitId }, true);
  });

  // Render exercise
  const renderer = RENDERERS[ex.type];
  if (renderer) {
    renderer(body, ex, (correct, detail) => {
      if (correct !== undefined) {
        state.score.total++;
        if (correct) state.score.correct++;
      }

      // For reflective exercises (cold-read, listen), auto-advance
      if (correct === undefined) {
        setTimeout(() => {
          state.exerciseIndex++;
          const target = document.getElementById('app');
          target.innerHTML = '';
          renderExercise(target, lessonId);
        }, 400);
        return;
      }

      // Duolingo-style bottom feedback panel with Continue button
      showFeedbackPanel(div, correct, detail, () => {
        state.exerciseIndex++;
        const target = document.getElementById('app');
        target.innerHTML = '';
        renderExercise(target, lessonId);
      });
    });
  } else {
    body.innerHTML = `<p>Unknown exercise type: ${ex.type}</p>`;
  }
}

function showFeedbackPanel(exerciseScreen, correct, detail, onContinue) {
  const panel = document.createElement('div');
  panel.className = `feedback-panel ${correct ? 'correct' : 'incorrect'}`;
  panel.innerHTML = `
    <div class="feedback-panel-header">
      <div class="feedback-panel-icon">${correct ? '✓' : '✗'}</div>
      <div class="feedback-panel-title">${correct ? 'Correct!' : 'Incorrect'}</div>
    </div>
    ${detail ? `<div class="feedback-panel-detail">${detail}</div>` : ''}
    <button class="continue-btn" id="feedback-continue">Continue</button>
  `;
  exerciseScreen.appendChild(panel);

  panel.querySelector('#feedback-continue').addEventListener('click', onContinue);
}

function renderLessonComplete(container, lesson) {
  state.completeLesson(lesson.id);

  const pct = state.score.total > 0
    ? Math.round((state.score.correct / state.score.total) * 100)
    : 100;

  const div = document.createElement('div');
  div.className = 'lesson-complete';
  div.innerHTML = `
    <div class="complete-icon">${lesson.type === 'surah' ? '🌟' : '✅'}</div>
    <div class="complete-title">Lesson Complete!</div>
    <div class="complete-subtitle">${lesson.name}</div>
    <div class="complete-stats">
      <div class="stat-card">
        <div class="stat-value">${pct}%</div>
        <div class="stat-label">Accuracy</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${lesson.newWords.length || '—'}</div>
        <div class="stat-label">Words${lesson.newWords.length ? ' Learned' : ''}</div>
      </div>
    </div>
    ${lesson.newWords.length ? `
      <div style="width:100%; text-align:center; margin-bottom:24px;">
        <div style="font-size:12px; color:var(--text-dim); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">New Vocabulary</div>
        <div style="font-family:var(--font-ar); font-size:26px; color:var(--gold); direction:rtl; line-height:2;">
          ${lesson.newWords.join(' · ')}
        </div>
      </div>
    ` : ''}
    <button class="continue-btn" id="lesson-done">Continue</button>
  `;

  container.innerHTML = '';
  container.appendChild(div);

  div.querySelector('#lesson-done').addEventListener('click', () => {
    router.navigate('lessons', { unitId: state.unitId }, true);
  });
}

function renderComingSoon(container, lesson) {
  const div = document.createElement('div');
  div.className = 'lesson-complete';
  div.innerHTML = `
    <div class="complete-icon">🚧</div>
    <div class="complete-title">Coming Soon</div>
    <div class="complete-subtitle">${lesson.name}</div>
    <div style="color:var(--text-dim); text-align:center; margin:16px 0; font-size:14px; line-height:1.6;">
      This lesson's exercises are being crafted.<br>
      ${lesson.newWords.length ? `<div style="font-family:var(--font-ar); font-size:22px; color:var(--gold); direction:rtl; margin-top:12px; line-height:2;">${lesson.newWords.join(' · ')}</div>` : ''}
    </div>
    <button class="continue-btn" id="coming-soon-back">Go Back</button>
  `;

  container.innerHTML = '';
  container.appendChild(div);

  div.querySelector('#coming-soon-back').addEventListener('click', () => {
    router.navigate('lessons', { unitId: state.unitId }, true);
  });
}
