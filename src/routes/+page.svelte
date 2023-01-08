<script>
  import Flock from '$lib/components/Flock.svelte'
  import { flockStore } from "$lib/stores/FlockStore.js";

  function sortFlocks() {
    return $flockStore.sort((a, b) => {
      return a.date - b.date;
    });
  }

</script>

<div class="main">
  <a href="/create">+</a>
  <div class="content">
    {#each sortFlocks() as flock}
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
