// Simple state management with localStorage persistence

const STORAGE_KEY = 'yawm-learn-progress';

const state = {
  screen: 'units',       // 'units' | 'lessons' | 'exercise'
  unitId: null,
  lessonId: null,
  exerciseIndex: 0,
  score: { correct: 0, total: 0 },
  completedLessons: new Set(),
  listeners: [],

  load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (saved.completedLessons) {
        this.completedLessons = new Set(saved.completedLessons);
      }
    } catch (e) { /* ignore */ }
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completedLessons: [...this.completedLessons],
      }));
    } catch (e) { /* ignore */ }
  },

  completeLesson(lessonId) {
    this.completedLessons.add(lessonId);
    this.save();
  },

  isLessonComplete(lessonId) {
    return this.completedLessons.has(lessonId);
  },

  resetLesson() {
    this.exerciseIndex = -2;  // -2 = intro page, -1 = context page, 0+ = exercises
    this.score = { correct: 0, total: 0 };
  },

  subscribe(fn) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter(l => l !== fn); };
  },

  notify() {
    this.listeners.forEach(fn => fn(this));
  },
};

export default state;
