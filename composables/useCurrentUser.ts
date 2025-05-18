import type { Unsubscribe, User } from "firebase/auth";

export async function useCurrentUser() {
	const { $auth } = useNuxtApp();
	const user = ref<User | null>(null);
	let unsubscribe: Unsubscribe | undefined;

	await new Promise<void>((resolve) => {
		unsubscribe = $auth.onAuthStateChanged((u: any) => {
			user.value = u;
			resolve();
		});
	});

	return user;
}
