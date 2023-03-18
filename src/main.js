import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/my-home.vue';
import Repositories from './views/my-repositories.vue';
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/repositories', component: Repositories }
];

const router = new VueRouter({
  routes
});

createApp(App).use(router).mount('#app');

