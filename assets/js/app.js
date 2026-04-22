
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.highlight-word').forEach(el => {
    el.setAttribute('tabindex', '0');
    const toggle = (e) => {
      e.preventDefault();
      document.querySelectorAll('.highlight-word.active').forEach(other => {
        if (other !== el) other.classList.remove('active');
      });
      el.classList.toggle('active');
    };
    el.addEventListener('click', toggle);
    el.addEventListener('touchstart', toggle, { passive: false });
    el.addEventListener('blur', () => el.classList.remove('active'));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.highlight-word')) {
      document.querySelectorAll('.highlight-word.active').forEach(el => el.classList.remove('active'));
    }
  });

  document.querySelectorAll('[data-toggle-answer]').forEach(button => {
    button.addEventListener('click', () => {
      const box = button.closest('.question');
      box.classList.toggle('open');
      button.textContent = box.classList.contains('open') ? 'Скрыть ответ' : 'Показать ответ';
    });
  });
});
