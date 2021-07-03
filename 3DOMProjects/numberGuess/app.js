/* GAME FUNCTIONS
- player must guess a number between a min and a max
- player gets a certain amount of gusses
- notify player of the correct answer if they lose
- let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = Math.floor((Math.random() * (max - min + 1)) + min),
  guessesLeft = 3;
console.log(winningNum);

// UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});

// listen for submit event
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    message.style.color = 'red';
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if (guess === winningNum) {
    // GAME OVER WON
    // Disable input
    // guessInput.disabled = 'true';

    // // change border to green
    // guessInput.style.borderColor = 'green';

    // // let user know they won
    // setMessage(`${winningNum} is correct, you win!`, 'green');
    gameOver(true, `${winningNum} is correct, you win!`)

  } else {
    // wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // GAME OVER LOST
      // guessInput.disabled = 'true';

      // // change border to green
      // guessInput.style.borderColor = 'red';

      // // let user know they won
      // setMessage(`GAME OVER! You lost! the correct number was ${winningNum}`, 'red');
      gameOver(false, `GAME OVER! You lost! the correct number was ${winningNum}`);

    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      // game continues = answer wrong
      setMessage(`Guess is not correct, you have ${guessesLeft}`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  (won === true) ? color = 'green' : color = 'red';
  guessInput.disabled = 'true';
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again';
}

// set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}