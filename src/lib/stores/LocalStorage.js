import { writable } from 'svelte/store'

/**
 * Creates a store that is driven by localStorage.
 * @param key the localStorage key to store the data under
 * @param initial the initial value to give to storage
 */
export const getLocalStore = (key, initial) => {
  const browser = typeof(window) !== 'undefined' && typeof(document) !== 'undefined'
  if (!browser) {
    return writable(initial);
  }

  const persist = localStorage.getItem(key);
  const data = persist ? JSON.parse(persist) : initial;

  const store = writable(data, () => {
    return store.subscribe(value => {
      localStorage.setItem(key, JSON.stringify(value))
    });
  });

  return store;
}