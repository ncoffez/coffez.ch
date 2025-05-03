export default defineNuxtRouteMiddleware(async (to, from) => {
  return true
	// const user = await useCurrentUser();
	// if (!user.value) return navigateTo("/");
	// else return true;
});
