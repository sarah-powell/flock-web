<script>

  export let clickFunction = () => {};

</script>


<button on:click={clickFunction}>
  <slot></slot>
</button>

<style>

    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 65px;
        padding: 6px 14px;
        border-radius: 6px;
        border: none;

        color: #A844E2;
        background: white;
        background-origin: border-box;
    }

</style>