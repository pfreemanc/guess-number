'use strict';

//

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);

// const test = document.querySelector('.message').textContent;
// console.log(test);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

const again = document.querySelector('.again');

again.addEventListener('click', function() {

  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;

  // clearing guess field
  document.querySelector('.guess').value = null;
  // resetting score
  score = 20;
  document.querySelector('.score').textContent = score;

  // resetting styles
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
})

document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) { // no guess, user didn't enter a number
    document.querySelector('.message').textContent = 'Please enter a number!';
  } else if (guess === secretNumber) { // correct number
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) { // guess greater than hidden num
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) { // guess less than hidden num
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').tPextContent = '💥 You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
