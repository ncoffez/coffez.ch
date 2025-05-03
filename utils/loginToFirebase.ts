import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default async function loginToFirebase() {
	const router = useRouter();
	const { $auth } = useNuxtApp();
	const auth = await $auth();
	const provider = new GoogleAuthProvider();
	const user = useState("user");

	signInWithPopup(auth, provider).then((result) => {
		user.value = result.user;
		router.push("/admin");
	});
}
