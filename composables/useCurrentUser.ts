import type { Unsubscribe, User } from "firebase/auth";

export async function useCurrentUser() {
	const { $auth } = useNuxtApp();
	const user = ref<User | null>(null);
	let unsubscribe: Unsubscribe | undefined;

	const auth = await $auth();
	await new Promise<void>((resolve) => {
		unsubscribe = auth.onAuthStateChanged((u) => {
			user.value = u;
			resolve();
		});
	});

	return user;
}
