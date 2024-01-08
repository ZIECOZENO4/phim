import { useRouter } from 'vue-router';
import { useUser } from 'vue-clerk';

export function authMiddleware(to, from, next) {
 const router = useRouter();
 const { isSignedIn } = useUser();
 if (!isSignedIn.value && to.path !== '/signin') {
   router.push('/signin');
 } else {
   next();
 }
}
