import { getLocalStore } from "$lib/stores/LocalStorage.js";

export const STORAGE_KEY = 'flockData';

export const flockStore = getLocalStore(STORAGE_KEY, []);