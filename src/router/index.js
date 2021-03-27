import Vue from 'vue'
import VueRouter from 'vue-router'
//import AuthPage from '../views/AuthPage.vue'

Vue.use(VueRouter)

const routes = [
  //{
  //  path: '/auth',
  //  name: 'AuthPage',
  //  component: AuthPage
  //},
  //{
  //  path: '/about',
  //  name: 'About',
  //  component: function () {
  //    return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //  }
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
