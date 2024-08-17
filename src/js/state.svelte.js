function createState() {
  let state = $state({
    isNew: true,
    highscore: null,
    secretNumberText: '?',
    secretNumber: Math.ceil(Math.random() * 20),
    guessNumber: '',
    msg: 'Start guessing...',
    score: 20,
    win: false,
  });

  function resetGame() {
    localStorage.highscore = localStorage.highscore || 0;
    state.highscore = localStorage.highscore;
    state.win = false;
    state.secretNumberText = '?';
    state.secretNumber = Math.ceil(Math.random() * 20);
    state.guessNumber = '';
    state.msg = 'Start guessing...';
    state.score = 20;
    document.body.style.backgroundColor = '#222';
  }

  function checkNumber(e) {
    e.preventDefault();
    if (+state.guessNumber < 1 || +state.guessNumber > 20)
      return (state.msg = '⛔️ No valid number');
    if (!+state.guessNumber) return (state.msg = '⛔️ No number!');
    if (+state.guessNumber !== state.secretNumber && state.score > 0)
      state.score--;
    if (state.score === 0) return (state.msg = `💥 You lost the game!`);
    if (+state.guessNumber < state.secretNumber) state.msg = '📉 Too low';
    if (+state.guessNumber > state.secretNumber) state.msg = '📈 Too high';
    if (+state.guessNumber === state.secretNumber) {
      window.document.body.style.backgroundColor = '#60b347';
      state.win = true;
      state.secretNumberText = state.secretNumber;
      state.msg = '🎉 Correct Number';
      if (state.score > state.highscore)
        state.highscore = localStorage.highscore = state.score;
    }
  }

  return {
    get state() {
      return state;
    },
    resetGame,
    checkNumber,
  };
}

export const { state: gstate, resetGame, checkNumber } = createState();
