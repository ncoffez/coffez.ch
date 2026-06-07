export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/index.html') {
    return navigateTo('/')
  }
})