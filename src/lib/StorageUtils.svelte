<script context="module">
  export const STORAGE_KEY = 'flockData';

  /**
   * Retrieves an object from storage
   * @param key the key the object is stored under
   * @returns the object. Never null.
   */
  export function getStorage(key) {
    let storage
    try {
      storage = JSON.parse(localStorage.getItem(key) ?? '[]')
    } catch (error) {
      console.error('Unable to retrieve Flock data: ' + error);
      return {};
    }
    return storage;
  }

  /**
   * @param object the object to save in storage
   */
  export function setStorage(object) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(object));
    } catch (error) {
      console.error('Unable to set storage: ' + error);
    }
  }

  /**
   * Saves the given Flock object to storage
   * @param flock
   */
  export function saveFlock(flock) {
    // Storage is the array of Flocks
    let storage = getStorage(STORAGE_KEY);

    // Delete the existing Flock if present
    for (const f of storage) {
      if (f.id === flock.id) {
        storage = deleteFlock(f);
      }
    }

    storage = [... storage, flock];
    setStorage(storage);

    // redirect back to main page
    window.location = '/'
  }

  /**
   * Deletes a flock from storage
   * @returns the new storage object
   */
  export function deleteFlock(flockId) {
    let storage = getStorage(STORAGE_KEY);
    const index = storage.findIndex(f => {
      return f.id === flockId;
    });
    if (index > -1) {
      storage.splice(index, 1);
    }
    setStorage(storage);
    return storage;
  }

  /**
   * Finds a specific Flock in storage
   * @param id the UUID of the Flock to find
   * @returns the Flock from storage, null if not found
   */
  export function findFlockInStorage(id) {
    let storage = getStorage(STORAGE_KEY);
    for (const f of storage) {
      if (f.id === id) {
        return f;
      }
    }
    return null;
  }

</script>