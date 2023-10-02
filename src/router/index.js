import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/UserLoginView.vue';
import DashboardView from '../views/DashboardView.vue'
import SelfServiceView from '../views/SelfServiceView.vue'
import UserRegistrationView from '../views/UserRegistrationView.vue'
import RecPublishmentView from '../views/RecPublishmentView.vue'
import PersonnelView from '../views/PersonnelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/login'
    }, // Redirect to login by default
    {
      path: '/login', component: () => import('@/views/UserLoginView.vue')
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: UserRegistrationView
    },
    {
      path: '/selfservice',
      name: 'selfservice',
      component: SelfServiceView
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: PersonnelView
    },

  ]
})



export default router
