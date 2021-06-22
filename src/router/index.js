import Albums from '../views/Albums.vue'
import Configuration from '../views/Configuration.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import NewAlbum from '../views/NewAlbum.vue'
import AlbumDetail from '../views/AlbumDetail.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetail',
    component: AlbumDetail
  },
  {
    path: '/new',
    name: 'NewAlbum',
    component: NewAlbum,
    beforeEnter(to, from, next) {
      store.commit('resetData');
      next();
    }
  },
  {
    path: '/configuration',
    name: 'Configuration',
    component: Configuration
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
