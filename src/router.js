import { createRouter, createWebHistory } from 'vue-router'

import viewHome from './views/viewHome.vue'
import viewCarro from './views/viewCarro.vue'
import viewCarro2 from './views/viewCarro2.vue'

const routes = [
  { path: '/', component: viewHome },
  { path: '/veiculos', component: viewCarro },
  { path: '/veiculos2', component: viewCarro2 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
