import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function loginToFirebase() {
  const { $auth } = useNuxtApp();
  const provider = new GoogleAuthProvider();
  const user = useState('user')

  signInWithPopup($auth, provider).then((result) => {
    user.value = result.user;
  })
}