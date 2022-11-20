import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
    children: [
        {
            path: '',
            name: 'dashboard',
            component: () => HomeView
        },
        {
          path: '/payrol.html',
          name: 'payrol',
          component: () => import('../views/Payroll.vue')
        },
        {
          path: '/kelola-pph-21.html',
          name: 'pph',
          component: () => import('../views/Pph21.vue')
        },
        {
          path: '/bpjs.html',
          name: 'bpjs',
          component: () => import('../views/Bpjs.vue')
        },
        {
          path: '/akuntansi.html',
          name: 'akuntansi',
          component: () => import('../views/Acounting.vue')
        },
        {
          path: '/tentang-gajihub.html',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/register.html',
          name: 'register',
          component: () => import('../views/Register.vue')
        }
      ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
