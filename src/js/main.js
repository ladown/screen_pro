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

  // VALIDATION THIRD FORM

  const thirdForm = document.querySelector(`.consultation__form`);
  const thirdFormFields = document.querySelectorAll(`.thirdFormField`);
  const thirdFormName = document.querySelector(`#thirdFormName`);
  const thirdFormTel = document.querySelector(`#thirdFormTel`);

  thirdForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    for (let i = 0; i < thirdFormFields.length; i++) {
      if (!thirdFormFields[i].value) {
        thirdFormFields[i].classList.add(`error`);
      } else {
        thirdFormFields[i].classList.remove(`error`);
      }
    }

    if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(thirdFormTel.value)) {
      thirdFormTel.classList.remove(`error`);
    } else {
      thirdFormTel.classList.add(`error`);
    }

    if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/giu.test(thirdFormName.value)) {
      thirdFormName.classList.remove(`error`);
    } else {
      thirdFormName.classList.add(`error`);
    }
  });

  // VALIDATION fouth FORM
  const fouthForm = document.querySelector(`.contacts__form`);
  const fouthFormFields = document.querySelectorAll(`.fouthFormField`);
  const fouthFormName = document.querySelector(`#fouthFormName`);
  const fouthFormEmail = document.querySelector(`#fouthFormEmail`);
  const fouthFormTel = document.querySelector(`#fouthFormTel`);

  fouthForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    for (let i = 0; i < fouthFormFields.length; i++) {
      if (!fouthFormFields[i].value) {
        fouthFormFields[i].classList.add(`error`);
      } else {
        fouthFormFields[i].classList.remove(`error`);
      }
    }

    if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(fouthFormTel.value)) {
      fouthFormTel.classList.remove(`error`);
    } else {
      fouthFormTel.classList.add(`error`);
    }

    if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/giu.test(fouthFormName.value)) {
      fouthFormName.classList.remove(`error`);
    } else {
      fouthFormName.classList.add(`error`);
    }

    if (
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
        fouthFormEmail.value,
      )
    ) {
      fouthFormEmail.classList.remove(`error`);
    } else {
      fouthFormEmail.classList.add(`error`);
    }
  });

  // FAQ POPUP

  const faqBtn = document.querySelectorAll(`.faq__item-btn`);
  const faqPopup = document.querySelectorAll(`.faq__item-subheader`);
  const faqDivider = document.querySelectorAll(`.faq__item-divider`);
  const faqImg = document.querySelectorAll(`.faq__item-btn`);

  faqBtn.forEach((btn, index) => {
    btn.addEventListener(`click`, () => {
      faqPopup[index].classList.toggle(`faq__item-subheader-active`);
      faqDivider[index].classList.toggle(`faq__item-divider-active`);
      faqImg[index].classList.toggle(`faq__item-btn-active`);
    });
  });

  // FOOTER CALL
  const footerBtn = document.querySelector(`.footer__phone-arrowdown`);
  const footerCall = document.querySelector(`.footer__phone-text`);

  footerBtn.addEventListener(`click`, () => {
    footerBtn.classList.toggle(`footer__phone-arrowdown-active`);
    footerCall.classList.toggle(`footer__phone-text-active`);
  });

  // SCROLL UP

  const scrollIcon = document.querySelector(`.up`);

  window.addEventListener(`scroll`, () => {
    scrollIcon.addEventListener(`click`, () => {
      scrollTo(0, 0);
    });
    if (window.pageYOffset >= 1000) {
      scrollIcon.classList.add(`up-active`);
    } else {
      scrollIcon.classList.remove(`up-active`);
    }
  });
});
