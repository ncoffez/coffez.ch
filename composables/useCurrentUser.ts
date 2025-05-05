export async function useCurrentUser() {
	const { $auth } = useNuxtApp();
	const { user } = await $auth();
	return user;
}
