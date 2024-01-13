import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
    name: 'Home'
  },
  {
    path: '/:contentId',
    component: () => import('../views/content.vue'),
    name: 'ContentPage',
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;