<script>
  import Flock from '$lib/Flock.svelte'
  import { onMount } from 'svelte';

  const storageKey = 'flockData';
  let flocks = [];

  // Retrieve flocks from storage when component loads
  onMount(() => {
    const storage = localStorage.getItem(storageKey) ?? '[{"test": 123}]';

    try {
      flocks = JSON.parse(storage)
    } catch(error) {
      console.error('Failed to parse storage: ' + error)
    }
  });

</script>

<div class="main">
  <a href="/create">+</a>
  <div class="content">
    {#each flocks as flock}
      <Flock title={flock.title} date={new Date(flock.date)}/>
    {/each}
  </div>
</div>

<style>

  .main {
      display: flex;
      justify-content: center;
  }

</style>
