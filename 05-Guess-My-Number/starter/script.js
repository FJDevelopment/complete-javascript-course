'use strict';

let secretNumber;
let score = 20;
let hiScore = 0;
const message = document.querySelector('.message');
const userInput = document.querySelector('.guess');
const middleNumber = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const hiScoreElement = document.querySelector('.highscore');

const checkGuess = async () => {
  const guess = userInput.value;
  const intguess = Number(guess);
  if (intguess == secretNumber) {
    middleNumber.textContent = secretNumber;
    message.textContent = 'yeah baby you got the number!';
    winRound();
    await new Promise(r => setTimeout(r, 2000));
    score = 20;
    beginFreshRound();
  } else {
    message.textContent =
      intguess > secretNumber ? 'Too high bby' : 'Too low bby';
    score--;
    scoreElement.textContent = score;
  }
};

const beginFreshGame = () => {
  score = 20;
  hiScore = 0;
  hiScoreElement.textContent = hiScore;

  beginFreshRound();
};

const beginFreshRound = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  middleNumber.textContent = '?';
  message.textContent = 'Guess My Number!';
  userInput.value = '';
  scoreElement.textContent = score;
  console.log(secretNumber + 'is the number');
};

const winRound = () => {
  if (score > hiScore) {
    hiScore = score;
    hiScoreElement.textContent = hiScore;
  }
  scoreElement.textContent = score;
};

beginFreshGame();

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', beginFreshGame);
