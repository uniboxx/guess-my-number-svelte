export function resetGame(state) {
  localStorage.highscore = localStorage.highscore || 0;
  state.highscore = localStorage.highscore;
  state.win = false;
  state.secretNumberText = '?';
  state.secretNumber = Math.ceil(Math.random() * 20);
  state.guessNumber = ``;
  state.msg = 'Start guessing...';
  state.score = 20;
}