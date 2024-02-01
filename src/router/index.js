import { createRouter, createWebHistory } from 'vue-router'
  import Homepage from '@/views/Homepage.vue'
  import aboutpage from '@/views/aboutpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/about',
      name: 'About',
      component: aboutpage
    },
    {
      path: '/products',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue')
    },

  ]
})

export default router
