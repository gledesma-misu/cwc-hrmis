import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import UserLoginView from '../views/UserLoginView.vue'
import UserRegistrationView from '../views/UserRegistrationView.vue'
import RecPublishmentView from '../views/RecPublishmentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: UserLoginView
    },
    {
      path: '/registration',
      name: 'registration',
      component: UserRegistrationView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/publishment',
      name: 'publishment',
      component: RecPublishmentView
    },
   
  ]
})

export default router
