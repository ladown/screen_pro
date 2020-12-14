'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // HAMBURGER MENU

  const hamburgerBtn = document.querySelector(`.header__nav-hamburger`);
  const headerMenu = document.querySelector(`.header__nav-list`);
  const menuItem = document.querySelectorAll(`.header__nav-link`);

  hamburgerBtn.addEventListener(`click`, () => {
    headerMenu.classList.toggle(`header__nav-list-active`);
    hamburgerBtn.classList.toggle(`header__nav-hamburger-active`);
  });

  menuItem.forEach((item) => {
    item.addEventListener(`click`, () => {
      headerMenu.classList.toggle(`header__nav-list-active`);
      hamburgerBtn.classList.toggle(`header__nav-hamburger-active`);
    });
  });

  // POPUP MENU

  const arrowBtn = document.querySelector(`.header__contacts-arrowdown`);
  const text = document.querySelector(`.header__contacts-text`);
  const social = document.querySelector(`.header__contacts-mess`);

  arrowBtn.addEventListener(`click`, () => {
    arrowBtn.classList.toggle(`header__contacts-arrowdown-active`);
    text.classList.toggle('header__contacts-text-active');
    social.classList.toggle(`header__contacts-mess-active`);
  });
});
