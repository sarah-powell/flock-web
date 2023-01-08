<script>
  export let flexDirection = "flex-start";
</script>

<div class="topBar" style:justify-content="{flexDirection}">
  <slot></slot>
</div>

<style>

    .topBar {
        display: flex;
        height: 30px;
        border-bottom: 1px white solid;
        margin-bottom: 8px;
        align-items: center;
    }

</style>