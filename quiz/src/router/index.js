import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Qua1 from '../components/Qua1'

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
    },
    {
      path:'/qua1',
      name:'qua1',
      component: Qua1
    }
  ]
});