'use strict';
const p0Element = document.querySelector('.player--0');
const p1Element = document.querySelector('.player--1');
const newGameButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');

let activePlayer, p0Score, p1Score, playing, currentScore;

const startNewGame = () => {
  p0Element.classList.contains('player--active')
    ? (activePlayer = 0)
    : changeActivePlayer();
  p0Element.classList.remove('player--winner');
  p1Element.classList.remove('player--winner');
  p0Score = 0;
  p1Score = 0;
  clearCurrentScore();
  updateScore();
  playing = true;
};

const changeActivePlayer = function () {
  activePlayer = (activePlayer - 1) * -1;
  p0Element.classList.toggle('player--active');
  p1Element.classList.toggle('player--active');
};

const rollDice = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

const processDiceResult = diceRoll => {
  if (diceRoll == 1) {
    clearCurrentScore();
    changeActivePlayer();
  }
  currentScore += diceRoll;
  if (activePlayer == 0) {
    p0Element.querySelector('#current--0').textContent = currentScore;
  } else {
    p1Element.querySelector('#current--1').textContent = currentScore;
  }
};

const updateScore = () => {
  if (activePlayer == 0) {
    p0Score += currentScore;
  } else {
    p1Score += currentScore;
  }
  document.querySelector(`#score--0`).textContent = p0Score;
  document.querySelector(`#score--1`).textContent = p1Score;
  clearCurrentScore();
};

const clearCurrentScore = () => {
  currentScore = 0;
  p0Element.querySelector('#current--0').textContent = currentScore;
  p1Element.querySelector('#current--1').textContent = currentScore;
};

const gameOver = () => {
  playing = false;
  if (activePlayer == 0) {
    p0Element.classList.add('player--winner');
  } else {
    p1Element.classList.add('player--winner');
  }
};

newGameButton.addEventListener('click', () => {
  startNewGame();
});

rollButton.addEventListener('click', () => {
  if (!playing) return;
  let diceRoll = rollDice();
  diceImage.setAttribute('src', `dice-${diceRoll}.png`);
  processDiceResult(diceRoll);
});

holdButton.addEventListener('click', () => {
  updateScore();
  if (p1Score >= 10 || p0Score >= 10) {
    gameOver();
  } else {
    changeActivePlayer();
  }
});

startNewGame();
