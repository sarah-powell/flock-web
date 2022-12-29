import { writable } from 'svelte/store'

/**
 * Creates a store that is driven by localStorage.
 * @param key the localStorage key to store the data under
 * @param initial the initial value to give to storage. Should be the raw value,
 * not stringified JSON.
 */
export const getLocalStore = (key, initial) => {
  // Can't access local storage on the server
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