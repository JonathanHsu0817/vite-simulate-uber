import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DirectionsView from '../views/DirectionsView.vue';
import MapView from '../views/MapView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/directions',
      name: 'directions',
      component: DirectionsView,
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
    },
  ],
});

export default router;
