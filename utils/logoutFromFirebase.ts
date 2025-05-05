import { signOut } from "firebase/auth";
export default async function logoutFromFirebase() {
	const { $auth } = useNuxtApp();
	const { auth } = await $auth();

	signOut(auth);
}
