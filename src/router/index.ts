import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/login.vue'
import Login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      redirect: '/'
    }
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // }
  ]
})

export default router
