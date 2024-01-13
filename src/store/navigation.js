import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    nav: [
      {
        path: '/',
        name: 'Home'
      },
      {
        path: 'about',
        name: 'What we do'
      },
      {
        path: '/digital-divide',
        name: 'The digital divide'
      },
      {
        path: '/get-involved',
        name: 'Get involved'
      },
      {
        path: '/our-network',
        name: 'Our network'
      },
      {
        path: '/insights',
        name: 'Insights'
      }
    ]
  }),
  getters: {
    getNav: (state) => state.nav
  }
});