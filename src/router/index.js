import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/UserLoginView.vue';
import DashboardView from '../views/DashboardView.vue'
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
      meta: { requiresAuth: true },
    },
    {
      path: '/registration',
      name: 'registration',
      component: UserRegistrationView
    },
    {
      path: '/publishment',
      name: 'publishment',
      component: RecPublishmentView
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: PersonnelView
    },

  ]
})

// Add a navigation guard to check authentication status
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated (you can implement your own logic here)
    const isAuthenticated = /* Implement your authentication logic here */ true;

    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      next('/login');
    } else {
      // Proceed to the requested route if authenticated
      next();
    }
  } else {
    next(); // Allow access to routes that don't require authentication
  }
});

export default router
