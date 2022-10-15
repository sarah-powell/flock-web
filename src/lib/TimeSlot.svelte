<script>
  export let value = 0;
  export let label = "undefined";

  // Drop the 's' when needed
  let labelPlural = value === 1 ? label.slice(0, -1) : label

</script>

<div class="time-slot">
  <div class="value">{value}</div>
  <div class="label">{labelPlural}</div>
</div>

<style>

    .time-slot {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 4px;
    }

</style>