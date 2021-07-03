/* GAME FUNCTIONS
- player must guess a number between a min and a max
- player gets a certain amount of gusses
- notify player of the correct answer if they lose
- let player choose to play again
*/

let min = 1,
  max = 10,
  guessCount = 3,
  randomNum = randomNumber();
console.log(randomNum);

const dom = {
  min: document.querySelector('.min-num'),
  max: document.querySelector('.max-num'),
  input: document.querySelector('#guess-input'),
  btn: document.querySelector('#guess-btn'),
  msg: document.querySelector('.message'),
  playAgain: document.querySelector('.play-again')
}

dom.min.textContent = min;
dom.max.textContent = max;

document.body.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});

dom.btn.addEventListener('click', function (e) {
  let guess = parseFloat(dom.input.value);

  if (guess % 1 !== 0) {
    message('Please enter an integer', 'red');
    dom.input.value = '';
    dom.input.style.borderColor = 'red';
  } else if (isNaN(guess) || guess < min || guess > max) {
    message(`Please enter a number between ${min} and ${max}`, 'red');
    dom.input.value = '';
    dom.input.style.borderColor = 'red';

  } else {
    game();
  }

  function game() {
    if (guess === randomNum) {
      gameOver(true, 'You have WON! Congratulations that is the correct number!');
    } else {
      guessCount -= 1;
      if (guessCount === 0) {
        gameOver(false, 'Game over you LOST!');
      } else {
        message(`Please try again! you have ${guessCount} guesses left`, 'red');
        dom.input.value = '';
        dom.input.style.borderColor = 'red';
      }
    }
  }


  e.preventDefault();
});

function gameOver(won, msg) {
  let color;
  (won === true) ? color = 'green' : color = 'red';
  dom.input.disabled = 'true';
  dom.input.style.borderColor = color;
  dom.btn.value = 'Play Again?';
  dom.btn.className += 'play-again';

  message(msg, color);
}

function message(msg, color) {
  dom.msg.style.color = color;
  dom.msg.textContent = msg;
}

function randomNumber() {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}