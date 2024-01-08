import { createRouter, createWebHistory } from 'vue-router'
import SignInComponent from '../src/components/SignIn.vue'
import SignUpComponent from '../src/components/SingnUp.vue'
import Home from '../src/components/MainApp.vue'
import { authMiddleware } from './authMiddleware'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignInComponent
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
