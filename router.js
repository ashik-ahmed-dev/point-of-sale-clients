import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
  { path: '/', name: 'index', component: page('index') },
  { path: '/login', name: 'login', component: page('auth/login') },
  { path: '/register', name: 'register', component: page('auth/register') },
  { path: '/forgot', name: 'forgot', component: page('auth/forgot') },
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  });
}

