import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/pagina1',
      component: () => import('@/views/pagina1.vue'),
    },
    {
      path: '/pagina2',
      component: () => import('@/views/pagina2.vue'),
    },
    {
      path: '/detalhes/aviao',
      component: () => import('@/views/detalhes/aviao.vue'),
    },
    {
      path: '/detalhes/casa',
      component: () => import('@/views/detalhes/casa.vue'),
    },
    {
      path: '/detalhes/helicoptero',
      component: () => import('@/views/detalhes/helicoptero.vue'),
    },
  ],
})
