import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  base:'/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Homepage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/Aboutpage.vue')
    },
    {
      path: '/products',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/Gallerypage.vue')
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
    {
      path: '/gallery',
      name: 'gallery',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Gallerypage.vue')
    },
  ]
})

export default router
