import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'
import router from './router';

import './styles/index.scss';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
