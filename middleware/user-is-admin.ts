export default defineNuxtRouteMiddleware(() => {
	const user = useState("user");
	if (!user) return navigateTo("/");
	else return true;
});
