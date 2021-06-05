import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Albums from '../views/Albums.vue'
import NewAlbum from '../views/NewAlbum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/new',
    name: 'NewAlbum',
    component: NewAlbum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
