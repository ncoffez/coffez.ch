import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default async function loginToFirebase() {
	const router = useRouter();
	const { $auth } = useNuxtApp();
	const { auth } = await $auth();
	const provider = new GoogleAuthProvider();

	signInWithPopup(auth, provider).then((result) => {
		router.push("/admin");
	});
}
