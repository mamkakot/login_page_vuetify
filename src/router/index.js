import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/charts',
    name: 'Charts',
    component: () => import('../views/Charts.vue')
  },
  
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
