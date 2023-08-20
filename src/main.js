import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';

import App from './App.vue';
import router from './router';

axios.defaults.baseURL = import.meta.env.VITE_VUE_APP_API_URL;

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
