<script>
  let { onclick, classProp, type, label } = $props();
</script>

<button {type} class={`btn ${classProp}`} {onclick}>{label}</button>

<style lang="scss">
  .btn {
    border: none;
    background-color: #eee;
    color: #222;
    font-size: 1.8rem;
    font-family: inherit;
    padding: 2rem 0;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    width: 40%;
    @media screen and (min-width: 640px) {
      width: auto;
      padding: 2rem 3rem;
      font-size: 2rem;
    }

    &:hover {
      background-color: #ccc;
    }
  }

  .again {
    width: 100%;
    @media screen and (min-width: 640px) {
      width: auto;
    }
  }

  .check {
    width: 11rem;
    @media screen and (min-width: 640px) {
      width: auto;
    }
  }
</style>
