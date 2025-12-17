document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-toggle');
  if (!langButtons.length) return;

  const DEFAULT_LANG = 'EN';

  // Set default state on load
  langButtons.forEach(btn => {
    const isActive = btn.dataset.lang === DEFAULT_LANG;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  // Handle clicks
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;

      langButtons.forEach(b => {
        const isActive = b.dataset.lang === lang;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-pressed', isActive);
      });
    });
  });
});
