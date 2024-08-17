<script lang="ts">
  import { onMount } from 'svelte';
  import { gstate, resetGame } from '../js/state.svelte';
  import Button from './Button.svelte';

  onMount(resetGame);
  // let secretNumberElement = $state();
</script>

<header>
  <section class="top">
    <Button type="" classProp="again" label={'Again!'} onclick={resetGame} />
    <p class="between">(Between 1 and 20)</p>
  </section>
  <h1>Guess My Number!</h1>
  <div class={`number ${gstate.win ? 'win' : ''}`}>
    {gstate.secretNumberText}
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 35svh;
    border-bottom: 7px solid #eee;
    .top {
      display: flex;
      flex-direction: column;
      justify-content: start;
      @media screen and (min-width: 640px) {
        margin: 2rem;
        flex-direction: row;
        justify-content: space-between;
      }
    }
    .between {
      font-size: 1.4rem;
      text-align: center;
      margin-top: 0.5rem;
    }
    h1 {
      font-size: 1.9rem;
      text-align: center;
      min-height: 5rem;
      padding: 2rem 0;
      @media screen and (min-width: 640px) {
        font-size: 4rem;
        margin: 1rem;
      }
    }
    .number {
      align-self: center;
      background: #eee;
      color: #333;
      font-size: 3rem;
      padding: 1rem 0rem;
      text-align: center;
      border-radius: 5px;
      transform: translateY(50%);
      transition: all 1s ease;
      @media screen and (min-width: 640px) {
        padding: 2rem 0;
        font-size: 6rem;
      }
      &:not(.win) {
        width: 6rem;
        @media screen and (min-width: 640px) {
          width: 15rem;
        }
      }
      &.win {
        width: 100%;
        padding: 2rem 0;
        z-index: 1;
      }
    }
  }
</style>
