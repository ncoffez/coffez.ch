import type { Unsubscribe, User } from "firebase/auth";

export async function useCurrentUser() {
	const { $auth } = useNuxtApp();
	const user = ref<User | null>(null);
	let unsubscribe: Unsubscribe | undefined;

	// Robustesse : en dev local sans clés Firebase, $auth est null (mode
	// dégradé du plugin useFirebase). On rend alors "personne connecté"
	// au lieu de faire planter toute page qui utilise ce composable.
	if (!$auth) {
		return user;
	}

	await new Promise<void>((resolve) => {
		unsubscribe = $auth.onAuthStateChanged((u: any) => {
			user.value = u;
			resolve();
		});
	});

	return user;
}
