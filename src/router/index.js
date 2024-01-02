import { createRouter, createWebHistory } from 'vue-router'
import LoggedInView from '../views/LoggedInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoggedInView,
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/lease',
      name: 'lease',
      component: () => import('../views/LeaseView.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/Welcome.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue')
    }
  ]
})

export default router
