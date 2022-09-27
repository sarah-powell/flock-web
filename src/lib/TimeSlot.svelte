<script>
  export let value;
  export let label;
</script>

<div class="time-slot">
  <div class="value">
    {value}
  </div>
  <div class="label">
    {label}
  </div>
</div>

<style>
  .time-slot {
      display: inline-block;
  }

  .label {
      display: inline-block;
  }
</style>