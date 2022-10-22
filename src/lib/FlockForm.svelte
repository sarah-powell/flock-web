<script>
  const storageKey = 'flockData';

  let title = '';
  let date = new Date();

  function submitForm() {
    saveFlock({title, date})
  }

  /**
   * Retrieves an object from storage
   * @param key the key the object is stored under
   * @returns the object. Never null.
   */
  function getStorage(key) {
    let storage
    try {
      storage = JSON.parse(localStorage.getItem(key) ?? '[]')
    } catch (error) {
      console.error('Unable to save Flock: '+ error);
      return {};
    }
    return storage;
  }

  /**
   * @param object the object to save in storage
   */
  function setStorage(object) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(object));
    } catch (error) {
      console.error('Unable to save Flock: '+ error);
    }
  }

  /**
   * Saves the given flock object to storage
   * @param flock
   */
  function saveFlock(flock) {
    let storage = getStorage(storageKey);
    storage = [... storage, flock];
    setStorage(storage);

    // redirect back to main page
    window.location = '/'
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