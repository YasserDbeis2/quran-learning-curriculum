import { UNITS } from '../data/units.js';
import { LESSONS } from '../data/lessons.js';
import state from '../state.js';
import router from '../router.js';

export function renderUnits(container) {
  const div = document.createElement('div');
  div.className = 'units-screen';

  // Greeting
  div.innerHTML = `
    <div class="units-greeting">
      <h1>Learn</h1>
      <p>Understand the Quran, word by word</p>
    </div>
  `;

  UNITS.forEach(unit => {
    const completedCount = unit.lessonIds.filter(id => state.isLessonComplete(id)).length;
    const totalCount = unit.lessonIds.length;
    const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const phaseClass = unit.phase === 1 ? 'p1' : unit.phase === 2 ? 'p2' : 'p3';

    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
      <div class="unit-card-top">
        <div>
          <div class="unit-number">Unit ${unit.number}</div>
          <div class="unit-title">${unit.titleEn}</div>
          <div class="unit-arabic">${unit.titleAr}</div>
        </div>
        <span class="phase-badge ${phaseClass}">${unit.phaseLabel}</span>
      </div>
      <div class="unit-meta">
        <span>${completedCount}/${totalCount} lessons</span>
        <div class="unit-progress-bar">
          <div class="unit-progress-fill" style="width:${pct}%"></div>
        </div>
        <span>${pct}%</span>
      </div>
    `;

    card.addEventListener('click', () => {
      state.unitId = unit.id;
      router.navigate('lessons', { unitId: unit.id });
    });

    div.appendChild(card);
  });

  container.appendChild(div);
}
