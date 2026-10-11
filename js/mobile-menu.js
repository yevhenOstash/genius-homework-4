const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.menu-btn-open');
const closeMenuBtn = document.querySelector('.menu-btn-close');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});
