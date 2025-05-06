export default defineNuxtRouteMiddleware(async (to, from) => {
	const user = await useCurrentUser();
	if (!user.value) return navigateTo("/");
	else return true;
});
