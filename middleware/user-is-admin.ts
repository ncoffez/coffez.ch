export default defineNuxtRouteMiddleware(async (to, from) => {
	const { $auth } = useNuxtApp();
	const { isAuthenticated } = await $auth();
	return isAuthenticated.value;
});
