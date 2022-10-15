<script>
  import Flock from '$lib/Flock.svelte'
</script>

<div class="main">
  <div class="content">
    <Flock title="R.I.P." date={new Date(2016, 4, 28)}/>
    <Flock title="Test 2" date={new Date(2018, 3, 23)}/>
    <Flock title="Test 3" date={new Date(2022, 8, 1)}/>
    <Flock title="Test 3" date={new Date(2022, 8, 1)}/>
  </div>
</div>

<style>

  .main {
      display: flex;
      justify-content: center;
  }

</style>
