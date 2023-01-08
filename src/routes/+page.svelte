<script>
  import Flock from '$lib/components/Flock.svelte'
  import { flockStore } from "$lib/stores/FlockStore.js";
  import PageNav from "$lib/components/PageNav.svelte";

  function sortFlocks() {
    return $flockStore.sort((a, b) => {
      return a.date - b.date;
    });
  }

</script>

<PageNav flexDirection="flex-end">
  <a id="createLink" href="/create">+</a>
</PageNav>
<div class="main">
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

    #createLink {
        display: flex;
        margin: 0 8px;
        color: white;
        text-decoration: none;
        font-size: 16px;
    }

</style>
