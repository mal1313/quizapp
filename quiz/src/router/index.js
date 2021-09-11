import Vue from 'vue';
import Router from 'vue-router';
import Home from 'C://Users//ihmon//Documents//1004//quiz//src//components//Home.vue';
import List from 'C://Users//ihmon//Documents//1004//quiz//src//components//List.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
});