const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navListEl = document.querySelector('[data-action="navList"]');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
  document.body.style.overflow = '';
});

burgerMenuEl.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    burgerMenuEl.dataset.visible = 'close';
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && burgerMenuEl.dataset.visible === 'open') {
    burgerMenuEl.dataset.visible = 'close';
    document.body.style.overflow = '';
  }
});

navListEl.addEventListener('click', e => {
  if (e.target.closest('[data-nav-link]')) {
    burgerMenuEl.dataset.visible = 'close';
    document.body.style.overflow = '';
  }
});
