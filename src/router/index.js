import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
import user from './modules/user'
import menu from './modules/menu'
import role from './modules/role'
import dept from './modules/dept'
import leave from './modules/leave'
import approve from './modules/approve'
// 共有路由
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: {
          title: '欢迎体验Vue3全栈课程'
        },
        component: () => import('@/views/other/welcome')
      }
    ]
  }
]
// 私有路由
export const prviteRoutes = [user, menu, role, dept, leave, approve]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
