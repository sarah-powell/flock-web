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
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 4px;
    }

</style>