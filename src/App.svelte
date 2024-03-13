<script>
  import { onMount } from 'svelte';
  import Button from './lib/Button.svelte';

  onMount(resetGame);

  let secretNumber,
    secretNumberText,
    secretNumberElement,
    guessNumber,
    msg,
    score,
    highscore;

  //^ RESET FUNCTION

  function resetGame(event) {
    localStorage.highscore = localStorage.highscore || 0;
    highscore = localStorage.highscore;
    window.document.body.style.backgroundColor = '#222';
    secretNumberElement.style.width = '15rem';
    secretNumberText = '?';
    secretNumber = Math.ceil(Math.random() * 20);
    guessNumber = ``;
    msg = 'Start guessing...';
    score = 20;
  }

  //^ check button

  function checkNumber(event) {
    if (!guessNumber) return (msg = '⛔️ No number!');
    if (guessNumber !== secretNumber && score > 0) score--;
    if (score === 0) return (msg = `💥 You lost the game!`);
    if (guessNumber < secretNumber) msg = '📉 Too low';
    if (guessNumber > secretNumber) msg = '📈 Too high';
    if (guessNumber === secretNumber) {
      window.document.body.style.backgroundColor = '#60b347';
      secretNumberElement.style.width = '30rem';
      secretNumberText = secretNumber;
      msg = '🎉 Correct Number';
      if (score > highscore) highscore = localStorage.highscore = score;
    }
  }
</script>

<header>
  <Button type="" class="again" label={'Again!'} on:click={resetGame} />
  <p class="between">(Between 1 and 20)</p>
  <h1>Guess My Number!</h1>
  <div bind:this={secretNumberElement} class="number">{secretNumberText}</div>
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
</main>

<style lang="stylus">
  header
    display flex
    flex-direction column
    align-items center
    height 35vh
    border-bottom 7px solid #eee
    @media screen and (min-width 640px)
      display block
      position relative
    .between
      font-size 1.4rem
      width 100%
      text-align center
      margin 1rem 0
      @media screen and (min-width 640px)
        position absolute
        width auto
        top 2rem
        right 2rem
    h1
      font-size 4rem
      text-align center
      width 100%
      margin 3rem 0
      
      @media screen and (min-width 640px)
        position absolute
        margin 0
        transform translate(-50%, -50%)
        top 52%
        left 50%        
    .number
      position relative
      background #eee
      color #333
      font-size 6rem
      width 15rem
      padding 2rem 0rem
      text-align center
      border-radius 5px
      @media screen and (min-width 640px)
        position absolute
        bottom 0
        left 50%
        transform translate(-50%, 50%)
        padding 3rem 0  
  main
    height 65vh
    color #eee
    display flex
    flex-direction column
    align-items center
    justify-content center
    gap 2rem
    @media screen and (min-width 640px)
      flex-direction row
  .left,.right
    width 100%
    display flex
    flex-direction column      

  .left
    flex-direction row
    justify-content space-around
    align-items center
    @media screen and (min-width 640px)
      justify-content center
      flex-direction column
  .right
    align-items center
    justify-content center

      
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

  .right
    font-size 2rem 

  


  .message
    margin-bottom 8rem
    height 3rem

  .label-score
    margin-bottom 2rem
</style>
