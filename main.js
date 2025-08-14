"use strict";
const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const section = document.querySelector('section');
const modal = document.querySelector('dialog');
const dismissBtn = document.querySelector('#dismiss-btn');
const userEmail = document.querySelector('#user-email');
let email;
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value.trim() === "") {
        emailInput.setCustomValidity('Oye esto está vacío');
    }
    else {
        userEmail.innerHTML = emailInput.value;
        section === null || section === void 0 ? void 0 : section.classList.add('hidden');
        section === null || section === void 0 ? void 0 : section.classList.remove('lg:flex');
        modal === null || modal === void 0 ? void 0 : modal.showModal();
    }
});
emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
});
dismissBtn === null || dismissBtn === void 0 ? void 0 : dismissBtn.addEventListener('click', () => {
    modal === null || modal === void 0 ? void 0 : modal.close();
    emailInput.value = "";
    section === null || section === void 0 ? void 0 : section.classList.remove('hidden');
    section === null || section === void 0 ? void 0 : section.classList.add('lg:flex');
});
