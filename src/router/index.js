import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('@/views/Courses'),
  },
  {
    path: '/courses/:id',
    name: 'course',
    component: () => import('@/views/Course'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/Users'),
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('@/views/User'),
  },
  {
    path: '/fix',
    name: 'fix',
    component: () => import('@/views/Fix'),
  },
  {
    path: '/fix/users',
    name: 'fixUsers',
    component: () => import('@/views/UsersFix'),
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
