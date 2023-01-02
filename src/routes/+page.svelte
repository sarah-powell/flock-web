<script>
  import Flock from '$lib/components/Flock.svelte'
  import { flockStore } from "$lib/stores/FlockStore.js";
</script>

<div class="main">
  <a href="/create">+</a>
  <div class="content">
    {#each $flockStore as flock}
      <Flock id={flock.id} title={flock.title} dateTimestamp={flock.date}/>
    {/each}
  </div>
</div>

<style>

    .main {
        display: flex;
        justify-content: center;
    }

</style>
