export default defineNuxtRouteMiddleware(async (to, from) => {
	if (import.meta.server) return;
	const user = await useCurrentUser();
	if (!user.value) return navigateTo("/");
	else return true;
});
