import { createRouter, createWebHistory } from 'vue-router'
import main from '../page/main.vue'
import blogPage from '../page/blog-page.vue'

const routes = [
  {
    path: '/', component: main,
  },
  {
    path: '/:slug', component: blogPage, params: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
