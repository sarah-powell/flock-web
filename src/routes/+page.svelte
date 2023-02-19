<script>
  import Flock from '$lib/components/Flock.svelte'
  import { flockStore } from "$lib/stores/FlockStore.js";
  import PageNav from "$lib/components/PageNav.svelte";
  import PageHead from "$lib/PageHead.svelte";

  $: sortedFlocks = $flockStore.sort((a, b) => {
      return a.dateTimestamp - b.dateTimestamp;
  });

</script>

<PageHead/>

<PageNav flexDirection="flex-end">
  <a id="createLink" href="/create">+</a>
</PageNav>
<div class="main">
  <div class="content">
    {#each sortedFlocks as flock}
      <Flock id={flock.id} title={flock.title} dateTimestamp={flock.dateTimestamp}/>
    {/each}
  </div>
</div>

<style>

    .main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .content {
        width: 100%;
        max-width: 420px;
        margin: 0 16px;
    }

    #createLink {
        display: flex;
        margin: 0 8px;
        color: white;
        text-decoration: none;
        font-size: 16px;
    }

</style>
