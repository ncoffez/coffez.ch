export default defineNuxtRouteMiddleware(async (to, from) => {
  const id = await $fetch('/api/getEvent/latest');

  if (!id) return true;
  if (to.path === '/live' || to.path === '/live/') {
    return navigateTo(`/live/${id}`)
  }
})