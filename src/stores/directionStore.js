import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useDirectionStore = defineStore('direction', {
  state: () => ({
    pickup: null,
    destination: null,
  }),
  actions: {},
  persist: true,
});
