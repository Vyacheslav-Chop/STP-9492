const cookiesModalBackdropEl = document.querySelector(
  '[data-cookies-visible="close"]'
);
const acceptBtnEl = document.querySelector('[data-action="accept"]');
const declineBtnEl = document.querySelector('[data-action="decline"]');

const COOKIES_ACCEPTED_KEY = 'cookiesAccepted';

document.addEventListener('DOMContentLoaded', e => {
  const hasAcceptedCookies = localStorage.getItem(COOKIES_ACCEPTED_KEY);

  if (hasAcceptedCookies) {
    return hideCookiesModal();
  }

  setTimeout(() => {
    showCookiesModal();
  }, 1500);
});

acceptBtnEl.addEventListener('click', handleAcceptCookies);
declineBtnEl.addEventListener('click', handleAcceptCookies);

function handleAcceptCookies() {
  setCookiesAccepted();
  hideCookiesModal();
}

function showCookiesModal() {
  cookiesModalBackdropEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden';
}

function hideCookiesModal() {
  cookiesModalBackdropEl.dataset.visible = 'close';
  document.body.style.overflow = '';
}

function setCookiesAccepted() {
  localStorage.setItem(COOKIES_ACCEPTED_KEY, 'true');
}
