<script>
  import Button from './lib/Button.svelte';
  import Header from './lib/Header.svelte';
  import { gstate, checkNumber } from './js/state.svelte';
  gstate.win;
</script>

<Header />

<main>
  <form class="left">
    <input
      type="number"
      class="guess"
      min="1"
      max="20"
      bind:value={gstate.guessNumber} />
    <Button
      type={'number'}
      class={'check'}
      label={'Check!'}
      onclick={checkNumber} />
  </form>
  <section class="right">
    <p class="message">{gstate.msg}</p>
    <p class="label-score">
      💯 Score: <span class="score">{gstate.score}</span>
    </p>
    <p class="label-highscore">
      🥇 Highscore: <span class="highscore">{gstate.highscore}</span>
    </p>
  </section>
</main>

<style lang="scss">
  main {
    height: 65svh;
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
