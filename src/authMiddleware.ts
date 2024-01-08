import { useUser } from 'vue-clerk'

export function authMiddleware(to, from, next) {
  const { isSignedIn } = useUser()
  if (!isSignedIn.value && to.path !== '/signin') {
    next('/signin')
  } else {
    next()
  }
}
