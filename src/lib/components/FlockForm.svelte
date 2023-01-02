<script>
  import { onDestroy, onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from '$app/stores';
  import { flockStore } from "$lib/stores/FlockStore.js";
  import { v4 as uuidv5 } from 'uuid';

  let flocks;
  const unsubscribe = flockStore.subscribe((flockList) => {
    flocks = flockList;
  });

  const idParam = $page.url.searchParams.get('id');
  let id;
  let title;
  let date;

  onMount(() => {
    // New Flock
    if (!idParam) {
      id = uuidv5();
      title = '';
      date = new Date();
    } else {
      // Editing an existing Flock
      let flock = flocks.find((f) => idParam === f.id);
      if (flock) {
        id = flock.id;
        title = flock.title;
        date = flock.date;
      }
    }
  });

  onDestroy(() => {
    unsubscribe();
  });

  function submitForm() {
    flockStore.update((flocks) => {
      // Delete existing flock ID if present
      flocks = flocks.filter((f) => f.id !== id);

      // Add new flock
      let newFlock = {id, title};
      newFlock.date = new Date(date).getTime();
      flocks.push(newFlock);

      return flocks;
    });

    // Redirect back to main page
    goto("/");
  }

</script>

<form on:submit|preventDefault={submitForm}>

  <label for="titleInput">Title</label>
  <input id="titleInput" type="text" name="title" bind:value="{title}">

  <label for="dateInput">Date</label>
  <input id="dateInput" type="datetime-local" name="date" bind:value="{date}">

  <input type="submit" value="Save">

</form>


<style>

    input {
        display: block;
    }

</style>