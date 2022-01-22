const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const noJsWrap = document.querySelector('.no-js');

if (noJsWrap) {
  noJsWrap.classList.remove('no-js');
}


navToggle.addEventListener('click', () => nav.classList.toggle('nav--opened'));
