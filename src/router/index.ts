import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
   {
      path: '/',
      redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
   path: '/login',
   name: 'login',
   component: () => import('../views/login.vue')
 },
  
 
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router