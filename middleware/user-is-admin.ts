export default defineNuxtRouteMiddleware(async (to, from) => {
	const user = await useCurrentUser();
	const isAdmin = await useIsAdmin();

	if (!user.value || !isAdmin.value) {
		return navigateTo("/");
	}
	return true;
});
