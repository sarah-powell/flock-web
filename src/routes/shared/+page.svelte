<script>
  import { page } from "$app/stores";
  import Flock from "$lib/components/Flock.svelte";
  import PageNav from "$lib/components/PageNav.svelte";
  import { goto } from "$app/navigation";
  import { v4 as uuidv5 } from "uuid";
  import { flockStore } from "$lib/stores/FlockStore.js";
  import { onDestroy } from "svelte";

  const titleParam = $page.url.searchParams.get('t');
  const dateParam = $page.url.searchParams.get('d');

  let timeStamp = Number(dateParam);
  let date = new Date(timeStamp);

  let flocks;
  const unsubscribe = flockStore.subscribe((flockList) => {
    flocks = flockList;
  });

  onDestroy(() => {
    unsubscribe();
  });

  /**
   * Saves the shared Flock you're viewing to your own Flock list
   */
  function saveFlock() {
    flockStore.update((flocks) => {

      // Add new flock
      let newFlock = {id: uuidv5(), title: titleParam, dateTimestamp: timeStamp};
      flocks.push(newFlock);

      return flocks;
    });

    goto('/');
  }

</script>


<PageNav flexDirection="space-between">
  <a id="myFlocksButton" href="/">My Flocks</a>
  <button id="#saveButton" on:click={saveFlock}>
    Save
  </button>
</PageNav>

<div class="main">
  <div class="content">
    <Flock title={titleParam} dateTimestamp={date} disableToolDrawer=true />
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

    #myFlocksButton {
        display: flex;
        margin: 0 8px;
        color: white;
        text-decoration: none;
        font-size: 16px;
    }

</style>