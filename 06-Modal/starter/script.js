'use strict';
const buttons = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');

buttons.forEach(element => {
  element.addEventListener('click', function () {
    console.log(element.textContent);
    openModal();
  });
  console.log(element.textContent);
});
btnCloseModal.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

overlay.addEventListener('click', () => {
  closeModal();
});

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
