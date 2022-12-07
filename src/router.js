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
      path: '/detalhes/citation',
      component: () => import('@/views/detalhes/citation.vue'),
    },
    {
      path: '/detalhes/alphaville',
      component: () => import('@/views/detalhes/alphaville.vue'),
    },
    {
      path: '/detalhes/eurocopter',
      component: () => import('@/views/detalhes/eurocopter.vue'),
    },
    {
      path: '/detalhes/pascoe',
      component: () => import('@/views/detalhes/pascoe.vue'),
    },
    {
      path: '/detalhes/belassi',
      component: () => import('@/views/detalhes/belassi.vue'),
    },
    {
      path: '/detalhes/bugatti',
      component: () => import('@/views/detalhes/bugatti.vue'),
    },
  ],
})