import LoginView from '@/views/auth/LoginView.vue'
import SignupView from '@/views/auth/SignupView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import AddDepartment from '@/components/prospectus/AddDepartment.vue'
import IT_Dashboard from '@/components/dashboard/IT_Dashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView,
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView,
    },
    {

      path: '/dashboard/CS',
      name: 'CS_Dashboard',
      component: Dashboard,
    },

    {
      path: '/dashboard/IT',
      name: 'IT_Dashboard',
      component: IT_Dashboard,
    },

    {
      path: '/add-department',
      name: 'AddDepartment',
      component: AddDepartment,
    },

 

  ],
})

export default router
