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
    item.className = `lesson-item${!isUnlocked ? ' locked' : ''}`;

    const numClass = isComplete ? 'done' : isCurrent ? 'current' : 'todo';
    const numContent = isComplete ? '&#10003;' : lesson.number;

    item.innerHTML = `
      <div class="lesson-num ${numClass}">${numContent}</div>
      <div class="lesson-info">
        <div class="lesson-name">${lesson.name}</div>
        <span class="lesson-type ${lesson.type}">${lesson.typeLabel}</span>
      </div>
      ${!isUnlocked ? '<span class="lesson-lock">&#128274;</span>' : ''}
    `;

    if (isUnlocked) {
      item.addEventListener('click', () => {
        state.lessonId = lessonId;
        state.resetLesson();
        router.navigate('exercise', { lessonId, unitId });
      });
    }

    div.appendChild(item);
  });

  container.appendChild(div);

  // Back button
  div.querySelector('#lessons-back').addEventListener('click', () => {
    router.goBack();
  });
}
