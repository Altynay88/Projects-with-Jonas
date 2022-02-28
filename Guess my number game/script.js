'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Refactoring codes that repeat
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No number!'; (refactored)
    displayMessage('⛔No number!');

    //When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent ='🎉Correct number!'
    displayMessage('🎉Correct number!');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    // change background-color and color of numberwhen the player wins
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Refactoring the code below( When guess is wrong)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high 🔼!' : 'Too low! 🔽';
      displayMessage(guess > secretNumber ? 'Too high 🔼!' : 'Too low! 🔽');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent ='You lost the game!😥'(refactored)
      displayMessage('You lost the game!😥');
      document.querySelector('.score').textContent = 0;
    }
  }
  //     //when score is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high 🔼!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!😥';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     //when score is too low
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low! 🔽';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!😥';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // });

  // Again button (initial page)
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.message').textContent ='Start guessing...'😥'(refactored)
    displayMessage('Start guessing...');
    // document.querySelector('.number').textContent = '?';
    displayNumber('?');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').style.width = '15rem';
  });
});
