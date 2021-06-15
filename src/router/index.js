import Albums from '../views/Albums.vue'
import Configuration from '../views/Configuration.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import NewAlbum from '../views/NewAlbum.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

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
