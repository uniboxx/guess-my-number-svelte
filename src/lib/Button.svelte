<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch('click', 'button1');
  }
  export let type, label;
</script>

<button {type} class="btn {$$props.class}" on:click>{label}</button>

<style lang="stylus">
  .btn
    border none
    background-color #eee
    color #222
    font-size 2rem
    font-family inherit
    padding 2rem 3rem
    cursor pointer
    border-radius 5px
    @media screen and (min-width 640px)

      margin 0 auto

      
    &:hover 
      background-color #ccc
    
  .again
    width 100%
    @media screen and (min-width 640px) 
      position absolute
      width auto
      top 2rem
      left 2rem
</style>
