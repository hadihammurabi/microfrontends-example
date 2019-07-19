import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});

routes.beforeEach((to, from, next) => {
  const ev = new CustomEvent('route', { detail: { to } });
  document.dispatchEvent(ev);
  next();
});

export default routes;
