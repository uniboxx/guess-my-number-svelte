<script>
  import { onMount } from 'svelte';
  import Button from './lib/Button.svelte';

  localStorage.highscore = localStorage.highscore || 0;
  const secretNumberCover = '?';
  let secretNumber, guessNumber, msg, score;

  //^ check button

  function decrementScore(event) {
    if (!guessNumber) return;
    if (guessNumber !== secretNumber && score > 0) score--;
    if (score === 0) return (msg = `💥 You lost the game!`);
    if (guessNumber < secretNumber) msg = '📉 Too low';
    if (guessNumber > secretNumber) msg = '📈 Too high';
    if (guessNumber === secretNumber) {
      window.document.body.style.backgroundColor = '#60b347';
      msg = '🎉 Correct Number';
    }
    if (score > localStorage.highscore) localStorage.highscore = score;
  }

  //^ RESET FUNCTION

  function resetGame(event) {
    score = 4;
    msg = 'Start guessing...';
    secretNumber = Math.ceil(Math.random() * 20);
    window.document.body.style.backgroundColor = '#222';
    // secretNumberEl.style.width = '15rem';
    guessNumber = ``;
    console.log(secretNumber);
  }

  resetGame();

  // function resetGame() {
  //   body.style.backgroundColor = '#222';
  //   secretNumberEl.textContent = '?';
  //   guessInput.value = '';
  //   messageEl.textContent = 'Start guessing...';
  //   score = 3;
  //   highscoreEl.textContent = localStorage.highscore;
  // }

  //^ RESET THE GAME AT LOADING PAGE

  // resetGame();

  //^ RESET THE GAME CLICKING THE AGAIN BUTTON
  // againBtn.addEventListener('click', resetGame);

  //^ FIX FOR FIREFOX BUG ON CLICKING NO NUMBER KEYS
  // guessInput.addEventListener('keyup', e => {
  //   if (isNaN(e.key)) {
  //     e.target.value = '';
  //   }
  // });

  // checkBtn.addEventListener('click', e => {
  //   const guess = +document.querySelector(`.guess`).value;
  //   if (!guess) return (messageEl.textContent = `⛔️ No Number!`);

  //   if (guess < 1 || guess > 20)
  //     return (messageEl.textContent = `⛔️ Not in the range!`);

  //   let resultMsg;

  //   if (guess === secretNumber) {
  //     secretNumberEl.textContent = secretNumber;
  //     secretNumberEl.style.width = '30rem';
  //     body.style.backgroundColor = '#60b347';
  //     if (score > localStorage.highscore) localStorage.highscore = score;
  //     highscoreEl.textContent = localStorage.highscore;
  //     resultMsg = '🎉 Correct Number';
  //   } else {
  //     resultMsg = guess < secretNumber ? '📉 Too low' : '📈 Too high';
  //     if (score === 0) resultMsg = `💥 You lost the game!`;
  //   }
  //   messageEl.textContent = resultMsg;
  // });
</script>

<header>
  <Button type="" class="again" label={'Again!'} on:click={resetGame} />
  <p class="between">(Between 1 and 20)</p>
  <h1>Guess My Number!</h1>
  {#if secretNumber === guessNumber}
    <div class="number">{secretNumber}</div>
  {:else}
    <div class="number">{secretNumberCover}</div>
  {/if}
</header>
<main>
  <section class="left">
    <input
      type="number"
      class="guess"
      min="1"
      max="20"
      bind:value={guessNumber}
    />
    <Button
      type={'number'}
      class={'check'}
      label={'Check!'}
      on:click={decrementScore}
    />
  </section>
  <section class="right">
    <p class="message">{msg}</p>
    <p class="label-score">💯 Score: <span class="score">{score}</span></p>
    <p class="label-highscore">
      🥇 Highscore: <span class="highscore">{localStorage.highscore}</span>
    </p>
  </section>
</main>

<style lang="stylus">
  header
    position relative
    height 35vh
    border-bottom 7px solid #eee
    .again
      position absolute
      top 2rem
      left 2rem

  main
    height 65vh
    color #eee
    display flex
    align-items center
    justify-content space-around

  .left
    width 52rem
    display flex
    flex-direction column
    align-items center

  .right
    width 52rem
    font-size 2rem

  h1
    font-size 4rem
    text-align center
    position absolute
    width 100%
    top 52%
    left 50%
    transform translate(-50%, -50%)

  .number
    background #eee
    color #333
    font-size 6rem
    width 15rem
    padding 3rem 0rem
    text-align center
    position absolute
    bottom 0
    left 50%
    transform translate(-50%, 50%)

  .between
    font-size 1.4rem
    position absolute
    top 2rem
    right 2rem

  

  .guess
    background none
    border 4px solid #eee
    font-family inherit
    color inherit
    font-size 5rem
    padding 2.5rem
    width 25rem
    text-align center
    display block
    margin-bottom 3rem

  .message
    margin-bottom 8rem
    height 3rem

  .label-score
    margin-bottom 2rem
</style>
