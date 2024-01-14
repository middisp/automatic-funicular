import { defineStore } from 'pinia';
import apiClient from '../services/apiClient';

export const useContentStore = defineStore('content', {
  state: () => ({
    content: []
  }),
  getters: {
    getContent: (state) => state.content
  },
  actions: {
    async fetchContent() {
      try {
        const response = await apiClient.get('/cards.json?key=462a4c50');
        if(response.status === 200) {
          this.content = response.data;
        }
      } catch (err) {
        console.error('error: ', err);
      }
    }
  }
});