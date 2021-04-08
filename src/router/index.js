import { createRouter, createWebHistory } from 'vue-router'
import main from '../page/main.vue'

const routes = [
  {
    path: '/', component: main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
