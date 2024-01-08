import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { clerkPlugin } from 'vue-clerk/plugin'
import router from '../src/routers' // import the router

const app = createApp(App)

app.use(createPinia())

app.use(clerkPlugin, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
})

app.use(router) // use the router

app.mount('#app')
