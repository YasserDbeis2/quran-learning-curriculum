import state from './state.js';
import { renderUnits } from './screens/units.js';
import { renderLessons } from './screens/lessons.js';
import { renderExercise } from './screens/exercise.js';

const app = () => document.getElementById('app');

const router = {
  navigate(screen, params = {}, back = false) {
    state.screen = screen;
    Object.assign(state, params);

    const container = app();
    container.innerHTML = '';
    container.className = back ? 'phone-screen screen-enter-back' : 'phone-screen screen-enter';

    // Force reflow for animation restart
    void container.offsetWidth;

    switch (screen) {
      case 'units':
        renderUnits(container);
        break;
      case 'lessons':
        renderLessons(container, state.unitId);
        break;
      case 'exercise':
        renderExercise(container, state.lessonId);
        break;
    }
  },

  goBack() {
    switch (state.screen) {
      case 'lessons':
        this.navigate('units', {}, true);
        break;
      case 'exercise':
        this.navigate('lessons', { unitId: state.unitId }, true);
        break;
    }
  },

  init() {
    state.load();
    this.navigate('units');
  },
};

export default router;
