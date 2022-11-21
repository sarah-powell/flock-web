<script>
  import Flock from '$lib/Flock.svelte'
  import { onMount } from 'svelte';
  import { getStorage, STORAGE_KEY } from "$lib/StorageUtils.svelte";

  let flocks = [];

  // Retrieve flocks from storage when component loads
  onMount(() => {
    try {
      flocks = getStorage(STORAGE_KEY);
    } catch(error) {
      console.error('Failed to parse storage: ' + error)
    }
  });

</script>

<div class="main">
  <a href="/create">+</a>
  <div class="content">
    {#each flocks as flock}
      <Flock id={flock.id} title={flock.title} date={new Date(flock.date)}/>
    {/each}
  </div>
</div>

<style>

  .main {
      display: flex;
      justify-content: center;
  }

</style>
