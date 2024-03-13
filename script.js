//^ DOM ELEMENTS

const body = document.querySelector('body');
const againBtn = document.querySelector(`.again`);
const secretNumberEl = document.querySelector(`.number`);
const guessInput = document.querySelector(`.guess`);
const checkBtn = document.querySelector(`.check`);
const messageEl = document.querySelector(`.message`);
const scoreEl = document.querySelector(`.score`);
const highscoreEl = document.querySelector(`.highscore`);

//^ GLOBAL VARIABLES

let secretNumber,
  score = 20;
localStorage.highscore = localStorage.highscore || 0;

//^ RESET FUNCTION

function resetGame() {
  body.style.backgroundColor = '#222';
  secretNumberEl.textContent = '?';
  secretNumberEl.style.width = '15rem';
  secretNumber = Math.ceil(Math.random() * 20);
  guessInput.value = '';
  messageEl.textContent = 'Start guessing...';
  score = 20;
  scoreEl.textContent = score;
  highscoreEl.textContent = localStorage.highscore;
}

//^ RESET THE GAME AT LOADING PAGE

resetGame();

//^ RESET THE GAME CLICKING THE AGAIN BUTTON
againBtn.addEventListener('click', resetGame);

//^ FIX FOR FIREFOX BUG ON CLICKING NO NUMBER KEYS
guessInput.addEventListener('keyup', e => {
  if (isNaN(e.key)) {
    e.target.value = '';
  }
});

checkBtn.addEventListener('click', e => {
  const guess = +document.querySelector(`.guess`).value;
  if (!guess) return (messageEl.textContent = `⛔️ No Number!`);

  if (guess < 1 || guess > 20)
    return (messageEl.textContent = `⛔️ Not in the range!`);

  let resultMsg;

  if (guess === secretNumber) {
    secretNumberEl.textContent = secretNumber;
    secretNumberEl.style.width = '30rem';
    body.style.backgroundColor = '#60b347';
    if (score > localStorage.highscore) localStorage.highscore = score;
    highscoreEl.textContent = localStorage.highscore;
    resultMsg = '🎉 Correct Number';
  } else {
    scoreEl.textContent = --score;
    resultMsg = guess < secretNumber ? '📉 Too low' : '📈 Too high';
    if (score === 0) resultMsg = `💥 You lost the game!`;
  }
  messageEl.textContent = resultMsg;
});
