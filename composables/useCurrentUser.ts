import type { Unsubscribe, User } from "firebase/auth";
import { onMounted } from 'vue';

export async function useCurrentUser() {
  const { $auth } = useNuxtApp();
  const user = useState('user')

  onMounted(async () => {
    await waitForAuthInit();
    user.value = $auth.currentUser;
  })
  let unsubscribe: Unsubscribe;

  async function waitForAuthInit() {
    await new Promise<void>((resolve) => {
      unsubscribe = $auth.onAuthStateChanged((_) => resolve());
    })
  }

  onUnmounted(() => unsubscribe?.());

  return useState('user') as Ref<User | null>;
}
