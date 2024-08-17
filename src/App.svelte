<script>
  import Button from './lib/Button.svelte';
  import Header from './lib/Header.svelte';
  import { state } from './js/state.svelte';

  //^ check button

  // function checkNumber(event) {
  //   if (!guessNumber) return (msg = '⛔️ No number!');
  //   if (guessNumber !== secretNumber && score > 0) score--;
  //   if (score === 0) return (msg = `💥 You lost the game!`);
  //   if (guessNumber < secretNumber) msg = '📉 Too low';
  //   if (guessNumber > secretNumber) msg = '📈 Too high';
  //   if (guessNumber === secretNumber) {
  //     window.document.body.style.backgroundColor = '#60b347';
  //     win = true;
  //     secretNumberText = secretNumber;
  //     msg = '🎉 Correct Number';
  //     if (score > highscore) highscore = localStorage.highscore = score;
  //   }
  // }
</script>

<svelte:body style={`${isNew ? 'background-color:#222' : ''}`} />

<Header />

<!-- <main>
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
      on:click={checkNumber}
    />
  </section>
  <section class="right">
    <p class="message">{msg}</p>
    <p class="label-score">💯 Score: <span class="score">{score}</span></p>
    <p class="label-highscore">
      🥇 Highscore: <span class="highscore">{highscore}</span>
    </p>
  </section>
</main> -->

<style lang="scss">
  main {
    height: 65vh;
    color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;
    @media screen and (min-width: 640px) {
      flex-direction: row;
    }
    .left,
    .right {
      width: 100%;
      display: flex;
    }

    .left {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      @media screen and (min-width: 640px) {
        justify-content: center;
        flex-direction: column;
      }
    }
    .right {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    .guess {
      background: none;
      border: 4px solid #eee;
      font-family: inherit;
      color: inherit;
      font-size: 2.5rem;
      padding: 1rem;
      width: 11rem;
      text-align: center;

      @media screen and (min-width: 640px) {
        width: 25rem;
        font-size: 6rem;
        margin-bottom: 3rem;
        padding: 2.5rem;
      }
    }
    .message {
      margin-bottom: 6rem;
      height: 2rem;
      width: 100%;
      padding: 0 5rem;
      font-size: 2rem;
      @media screen and (min-width: 640px) {
        margin-bottom: 8rem;
      }
    }

    .label-score,
    .label-highscore {
      margin-bottom: 2rem;
      width: 100%;
      padding: 0 5rem;
      font-size: 1.5rem;
      @media screen and (min-width: 640px) {
        font-size: 2rem;
      }
    }
  }
</style>
