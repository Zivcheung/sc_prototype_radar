import Vue from 'vue';
import Router from 'vue-router';
import RadarPage from '@/pages/RadarPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: RadarPage,
    },
  ],
});
