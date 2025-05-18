export default async function logoutFromFirebase() {
	const { $auth } = useNuxtApp();
	const user = useState("user");
	user.value = null;
	$auth.signOut();
	reloadNuxtApp();
}
