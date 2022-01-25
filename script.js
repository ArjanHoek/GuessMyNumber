'use strict';

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
  const messageEl = document.querySelector('.message');

  const inputEl = document.querySelector('.guess');
  const inputValue = Number(inputEl.value);
  console.log(inputValue);

  if (!inputValue) {
    messageEl.textContent = 'No number!';
  } else {
    messageEl.textContent = 'Try again!';
  }
});
