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

  // VALIDATION FIRST FORM
  const firstForm = document.querySelector(`.header__consultation-form`);
  const firstFormFields = document.querySelectorAll(`.firstFormField`);
  const firstFormName = document.querySelector(`#name`);
  const firstFormPhone = document.querySelector(`#tel`);

  firstForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    for (let i = 0; i < firstFormFields.length; i++) {
      if (!firstFormFields.value) {
        firstFormFields[i].classList.add(`error`);
      } else {
        firstFormFields[i].classList.remove(`error`);
      }
    }

    if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/giu.test(firstFormName.value)) {
      firstFormName.classList.remove(`error`);
    } else {
      firstFormName.classList.add(`error`);
    }

    if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(firstFormPhone.value)) {
      firstFormPhone.classList.remove(`error`);
    } else {
      firstFormPhone.classList.add(`error`);
    }
  });

  // VALIDATION SECOND FORM

  const secondForm = document.querySelector(`.calculation__form`);
  const secondFormFields = document.querySelectorAll(`.secondFormField`);
  const secondFormName = document.querySelector(`#secondFormName`);
  const secondFormEmail = document.querySelector(`#secondFormEmail`);

  secondForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    for (let i = 0; i < secondFormFields.length; i++) {
      if (!secondFormFields[i].value) {
        secondFormFields[i].classList.add(`error`);
      } else {
        secondFormFields[i].classList.remove(`error`);
      }
    }

    if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/giu.test(secondFormName.value)) {
      secondFormName.classList.remove(`error`);
    } else {
      secondFormName.classList.add(`error`);
    }

    if (
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
        secondFormEmail.value,
      )
    ) {
      secondFormEmail.classList.remove(`error`);
    } else {
      secondFormEmail.classList.add(`error`);
    }
  });
});
