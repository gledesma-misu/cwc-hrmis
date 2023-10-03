import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/UserLoginView.vue';
import DashboardView from '../views/DashboardView.vue'
import SelfServiceView from '../views/SelfServiceView.vue'
import UserRegistrationView from '../views/UserRegistrationView.vue'
import RecPublishmentView from '../views/RecPublishmentView.vue'
import PersonnelView from '../views/PersonnelView.vue'
import ReportsView from '../views/ReportsView.vue'
import AttendanceView from '../views/AttendanceView.vue'
import LibrariesView from '../views/LibrariesView.vue'
import AccessControlView from '../views/AccessControlView.vue'

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
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: AttendanceView
    },
    {
      path: '/libraries',
      name: 'libraries',
      component: LibrariesView
    },
    {
      path: '/accesscontrol',
      name: 'accesscontrol',
      component: AccessControlView
    },

  ]
})



export default router
