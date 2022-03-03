'use strict';

// SELECTING ELEMENTS (to get element by id can be in two ways by querySelector or by getElementByID, these two ways are the same below, but getting by querySelector can take more time) здесь мы привели цифры (баллы) ы изначальную цифру 0)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;

// // здесь воздействуем на dice (на косточку) тронута css .hidden: display: none. то есть скрываем косточку когда баллы на 0 (игра в самом начале)
// diceEl.classList.add('hidden');

// //it must not be inside the function beacause each time we roll the dice it will not save to the current score but will keep showing 0
// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// //to finish the game
// let playing = true;

let scores, currentScore, activePlayer, playing;

//Starting condition and again
const init = function () {
  //it must not be inside the function beacause each time we roll the dice it will not save to the current score but will keep showing 0
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  //to finish the game
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // здесь воздействуем на dice (на косточку) тронута css .hidden: display: none. то есть скрываем косточку когда баллы на 0 (игра в самом начале)
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// run the function
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice fanctionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // so that if game is running, but if smbd wins it will become false and be not be able to press the btn
    // 1. Generating dice roll
    // (we create new const inside the function beacause each time we roll the dice we need new number)
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    // we should now make the dice appear from the hidden display
    diceEl.classList.remove('hidden');
    // make the picture of dice appear according to its number
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1:if true, switch to the next player
    if (dice !== 1) {
      // add dice to current score
      // currentScore = currentScore + dice;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // add roll score to current window according to which player is active now
    } else {
      // switch next player, whenever dice is number 1
      // but first we need to make the score of the previous player to become zero again (here we put it into function)
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
});

// Holding the players score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active palyer's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      // to finish the game, so that when one of the player wins to make button impossible to press
      playing = false;
      diceEl.classList.add('hidden'); // to hidden the dice when smd wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
    //Finish the game
  }
});

btnNew.addEventListener('click', init);
//{
//created the function so that initialize everything
// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// player0El.classList.add('player--active');
// player1El.classList.remove('player--active');
//}
