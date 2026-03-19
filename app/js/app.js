import router from './router.js';

// Initialize app
router.init();

// Tab bar (only Learn tab is functional)
document.getElementById('tab-bar').addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (!tab) return;

  const tabName = tab.dataset.tab;
  if (tabName === 'learn') {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    router.navigate('units');
  }
});
