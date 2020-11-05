const myApp = {};

myApp.score = 20;
myApp.secretNumber = '';

myApp.getSecretNum = function() {
  return Math.trunc(Math.random() * 20) + 1;
}

myApp.checkGuess = () => {
  console.log(myApp.secretNumber);
  console.log('cHECKING');
  const guess = parseInt(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  if(!guess){
    message.textContent = 'Please enter a number!'
  } else if(guess === myApp.secretNumber) {
    myApp.correctNumber(message);
  } else if(guess > myApp.secretNumber || guess < myApp.secretNumber) {
    myApp.wrongNumber(guess, message)
  }
}

myApp.correctNumber = (message) => {
  message.textContent = 'Correct Number!'
  document.querySelector('body').style.backgroundColor = "#60b347";
  document.querySelector('.number').style.width = '30rem';
}

myApp.wrongNumber = (guess, message) => {
  if(guess < myApp.secretNumber) {
    message.textContent = "Too Low!";
  } else {
    message.textContent = "Too High!";
  }
  if(myApp.score > 1) {
    myApp.score--;
    document.querySelector('.score').textContent = myApp.score;
  } else {
    message.textContent = '💥 You lost!';
    document.querySelector('.score').textContent = 0;
  }
}

myApp.startOver = function() {
  this.score = 20;
  document.querySelector('.score').textContent = this.score;
  this.secretNumber = this.getSecretNum();

  document.querySelector('.guess').value = null;
}

myApp.init = function(){
  this.secretNumber = this.getSecretNum();

  document.querySelector('.check').addEventListener('click', () => {
    this.checkGuess();
  })

  document.querySelector('.again').addEventListener('click', () => {
    this.startOver();
  } )
}

myApp.init();