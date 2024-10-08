export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useState('user');
  if (!user) return navigateTo('/')
  else return true;
})