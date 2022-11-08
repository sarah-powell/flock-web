<script>
  import { v4 as uuidv5 } from 'uuid';
  import { page } from '$app/stores';
  import { onMount } from "svelte";
  import { findFlockInStorage, saveFlock } from "$lib/StorageUtils.svelte";

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
      let flock = findFlockInStorage(idParam)
      console.log("From storage: " + flock);
      if (flock) {
        id = flock.id;
        title = flock.title;
        date = flock.date;
      }
    }
  })

  function submitForm() {
    saveFlock({id, title, date})
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