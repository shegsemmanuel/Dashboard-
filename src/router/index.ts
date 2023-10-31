import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/dash-board.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/transaction-details',
      name: 'Transaction Details',
      component: () => import('../views/TransactionDetails.vue')
    }
  ]
})

export default router
