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
  const intGuess = Number(userInput.value);
  if (intGuess == secretNumber) {
    middleNumber.textContent = secretNumber;
    message.textContent = 'yeah baby you got the number!';
    winRound();
    await new Promise(r => setTimeout(r, 2000));
    score = 20;
    beginFreshRound();
  } else {
    document.querySelector('header').style.backgroundColor = 'red';
    message.textContent =
      intGuess > secretNumber ? 'Too high bby' : 'Too low bby';
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
  document.querySelector('header').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  middleNumber.textContent = '?';
  message.textContent = 'Guess My Number!';
  userInput.value = '';
  scoreElement.textContent = score;
  console.log(secretNumber + 'is the number');
};

const winRound = () => {
  document.querySelector('header').style.backgroundColor = 'green';
  if (score > hiScore) {
    hiScore = score;
    hiScoreElement.textContent = hiScore;
  }
  scoreElement.textContent = score;
};

beginFreshGame();

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', beginFreshGame);
