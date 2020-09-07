import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/basics.vue')
  },
  {
    path: '/basics',
    name: 'basics',
    component: () => import(/* webpackChunkName: "about" */ '../views/basics.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
