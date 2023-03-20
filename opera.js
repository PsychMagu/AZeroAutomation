'use strict';

const ranNum = Math.floor(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter the number';
  } else if (guess > ranNum) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = ranNum;
    }
  } else if (guess < ranNum) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = ranNum;
    }
  } else if (guess === ranNum) {
    document.querySelector('.message').textContent = 'Nin Akkan Correct';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = ranNum;
  }
});

function refresh() {
  location.reload();
}
