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
    
  ]
})

export default router
