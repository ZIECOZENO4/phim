import { createRouter, createWebHistory } from 'vue-router'
import SignInComponent from '../src/components/SignIn.vue'
import SignUpComponent from '../src/components/SingnUp.vue'
import Home from '../src/components/MainApp.vue'
import Audio from "../src/components/DropDownPages/SmAudio.vue"
import Video from "../src/components/DropDownPages/SmVideo.vue"
import Screen from "../src/components/DropDownPages/SmScreen.vue"
import { authMiddleware } from './authMiddleware'

import SmSetting from "../src/components/DropDownPages/SmSettin.vue"
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
    path: '/audio',
    name: 'Audio',
    component: Audio,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/video',
    name: 'Video',
    component: Video,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/screen',
    name: 'Screen',
    component: Screen,
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
    path: '/setting',
    name: 'Setting',
    component: SmSetting
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
