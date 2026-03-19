import { UNITS } from '../data/units.js';
import { LESSONS } from '../data/lessons.js';
import state from '../state.js';
import router from '../router.js';

export function renderLessons(container, unitId) {
  const unit = UNITS.find(u => u.id === unitId);
  if (!unit) return;

  const div = document.createElement('div');
  div.className = 'lesson-list';

  // Header
  div.innerHTML = `
    <div class="header">
      <button class="header-back" id="lessons-back">&larr;</button>
      <div>
        <div class="header-title">${unit.titleEn}</div>
        <div class="header-subtitle" style="margin-left:0; font-size:11px; color:var(--text-dim);">Unit ${unit.number}</div>
      </div>
    </div>
  `;

  // Find first incomplete lesson to determine which are unlocked
  let firstIncompleteFound = false;

  unit.lessonIds.forEach((lessonId, idx) => {
    const lesson = LESSONS[lessonId];
    if (!lesson) return;

    const isComplete = state.isLessonComplete(lessonId);
    const prevComplete = idx === 0 || state.isLessonComplete(unit.lessonIds[idx - 1]);
    const isUnlocked = isComplete || prevComplete;
    const isCurrent = !isComplete && prevComplete && !firstIncompleteFound;
    if (isCurrent) firstIncompleteFound = true;

    const item = document.createElement('div');
    item.className = 'lesson-item';

    const numClass = isComplete ? 'done' : isCurrent ? 'current' : 'todo';
    const numContent = isComplete ? '&#10003;' : lesson.number;

    item.innerHTML = `
      <div class="lesson-num ${numClass}">${numContent}</div>
      <div class="lesson-info">
        <div class="lesson-name">${lesson.name}</div>
        <span class="lesson-type ${lesson.type}">${lesson.typeLabel}</span>
      </div>
    `;

    const hasExercises = lesson.exercises && lesson.exercises.length > 0;
    item.addEventListener('click', () => {
      if (hasExercises) {
        state.lessonId = lessonId;
        state.resetLesson();
        router.navigate('exercise', { lessonId, unitId });
      } else {
        showComingSoonModal(container, lesson.name);
      }
    });

    div.appendChild(item);
  });

  container.appendChild(div);

  // Back button
  div.querySelector('#lessons-back').addEventListener('click', () => {
    router.goBack();
  });
}

function showComingSoonModal(container, lessonName) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-card">
      <div style="font-size:32px; margin-bottom:12px;">🚧</div>
      <div style="font-size:16px; font-weight:600; color:var(--text); margin-bottom:6px;">${lessonName}</div>
      <div style="font-size:13px; color:var(--text-dim); line-height:1.5; margin-bottom:20px;">
        This lesson is not available yet.<br>Exercises are being crafted.
      </div>
      <button class="continue-btn modal-dismiss" style="width:100%; padding:12px;">Got it</button>
    </div>
  `;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('modal-dismiss')) {
      overlay.remove();
    }
  });
  container.appendChild(overlay);
}
