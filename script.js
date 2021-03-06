'use strict';

// Generate number to guess by player
let secretNumber;
let max;

// Create function to reset secret number
const generateNewSecretNumber = (maximum = 20) => {
  max = maximum;
  secretNumber = Math.trunc(Math.random() * maximum) + 1;
  console.log(secretNumber);
};

// Declare variable for the current score
let score = 20;
let highscore;

// Create function to update score
const updateScore = () => {
  const scoreEl = document.querySelector('.score');
  scoreEl.textContent = score;
};

const setScore = value => {
  score = value;
  updateScore();
};

const updateHighscore = () => {
  if (score > highscore) {
    highscore = score;
    displayHighscore();
  }
};

const displayHighscore = () => {
  document.querySelector('.highscore').textContent = highscore;
};

// Create function to adjust message
const updateMessage = msg => {
  document.querySelector('.message').textContent = msg;
};

// Create function to reset input
const resetInput = () => {
  const inputEl = document.querySelector('.guess');
  inputEl.value = '';
  inputEl.focus();
};

// Create function to reveal secret number
const adjustSecretNumberDisplay = (content, width) => {
  document.querySelector('.number').style.width = `${width}rem`;
  document.querySelector('.number').textContent = content;
};

// Create function to set background color
const setBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

// Create function to handle a winning scenario
const handleWinner = () => {
  updateMessage('Correct Number!');
  updateHighscore();
  setBackgroundColor('#60b347');
  adjustSecretNumberDisplay(secretNumber, 30);
};

// Add click event listener to check button
document.querySelector('.check').addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);

  if (!inputValue) {
    updateMessage('No number!');
  } else if (inputValue < 0 || inputValue > max) {
    updateMessage('Invalid number!');
  } else if (inputValue === secretNumber) {
    handleWinner();
  } else if (score > 1) {
    updateMessage(inputValue > secretNumber ? 'Too High!' : 'Too Low!');
    setScore(score - 1);
  } else {
    updateMessage('You lost the game!');
    setScore(score - 1);
  }

  resetInput();
});

// Create function to (re)start game
const initializeGame = (resetHighscore = false) => {
  updateHighscore();
  setScore(20);
  generateNewSecretNumber(30);
  updateMessage('Start guessing...');
  setBackgroundColor('#222');
  adjustSecretNumberDisplay('?', 15);
  resetInput();

  if (resetHighscore) {
    highscore = 0;
    displayHighscore();
  }
};

// Add click event listener to 'again' button
document
  .querySelector('.again')
  .addEventListener('click', () => initializeGame());

// Initialize game
initializeGame(true);
