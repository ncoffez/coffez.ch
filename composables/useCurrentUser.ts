import type { Unsubscribe, User } from "firebase/auth";
import { onMounted, onUnmounted } from 'vue';

export function useCurrentUser() {
  const { $auth } = useNuxtApp();
  const user = useState<User | null>('user', () => null);
  let unsubscribe: Unsubscribe | undefined;

  onMounted(async () => {
    const auth = await $auth();
    await waitForAuthInit(auth);
    user.value = auth.currentUser;
  });

  onUnmounted(() => unsubscribe?.());

  async function waitForAuthInit(auth: any) {
    await new Promise<void>((resolve) => {
      unsubscribe = auth.onAuthStateChanged(() => resolve());
    });
  }

  return user;
}