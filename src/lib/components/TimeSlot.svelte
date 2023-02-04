<script>
  export let value = -1;
  export let label = "undefined";

  // Plurality
  let labelPlural = Math.abs(value) === 1 ? label.slice(0, -1) : label

</script>

<div class="time-slot">
  <div class="value"><b>{Math.abs(value)}</b></div>
  <div class="label">{labelPlural}</div>
</div>

<style>

    .time-slot {
        display: flex;
        flex-direction: column;
        flex: none;
        align-items: center;
        padding: 0 4px;
        min-width: 60px;
    }

    .value {
        font-size: 30px;
        font-weight: 500;
    }

</style>