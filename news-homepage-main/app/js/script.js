const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.menu-link');

// Open Hamburger menu
const openSideMenu = function () {
  header.classList.add('open');
  overlay.classList.add('fade-in');
  overlay.classList.remove('fade-out');
  body.classList.add('noscrol');
  menu.classList.add('from-right');
  menu.classList.remove('to-right');
};

// Close Hamburger menu
const closeSideMenu = function () {
  header.classList.remove('open');
  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');
  body.classList.remove('noscrol');
  menu.classList.add('to-right');
  menu.classList.remove('from-right');
};

btnHamburger.addEventListener('click', function () {
  header.classList.contains('open') ? closeSideMenu() : openSideMenu();
});
menuLinks.forEach((link) => {
  link.addEventListener('click', function () {
    header.classList.contains('open') ? closeSideMenu() : openSideMenu();
  });
});
