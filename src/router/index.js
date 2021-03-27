import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthPage from '../views/AuthPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage,
    children: [
      {
        path: '/signin',
        name: 'SignIn',
        component: function () {
              return import(/* webpackChunkName: "singIn" */ '../views/SignIn.vue')
        }
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: function () {
              return import(/* webpackChunkName: "singUp" */ '../views/SignUp.vue')
        }
      }
    ],
  },
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

router.beforeEach((to,from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.user) {
      next({name: 'SignIn'})
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})
export default router
