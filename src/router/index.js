import { createRouter, createWebHistory } from 'vue-router'
  import Homepage from '@/views/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/products',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPageView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue')
    },
  ]
})

export default router
