'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Manipulate classes with JS
// refactoring of the code below
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//   for (let i = 0; i < btnsOpenModal.length; i++)
//  btnsOpenModal[i].addEventListener;
//   ('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   )};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden'); // чтобы вернуть прежнюю страницу. то есть убрать модальное окно
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden'); // чтобы при нажатии за модальным окно (где блюр) можно было выйти из модального окна
// });

// Listen keyboard event ESC
document.addEventListener(
  'keydown', //execute when you press any key in the keyboard
  function (e) {
    //to get information from a key(to know which key was pressed)
    console.log(e);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(); // если нажать esc и если страница в в модальном окне, то закрыть его
    }
  }
);
