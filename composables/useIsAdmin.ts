import type { Ref } from 'vue'
import type { User } from 'firebase/auth'

export async function useIsAdmin(): Promise<Ref<boolean>> {
	const { $auth } = useNuxtApp()
	const isAdmin = ref(false)

	await new Promise<void>((resolve) => {
		$auth.onIdTokenChanged(async (user: User | null) => {
			if (!user) {
				isAdmin.value = false
				resolve()
				return
			}

			try {
				const idTokenResult = await user.getIdTokenResult(true)
				isAdmin.value = idTokenResult.claims.admin === true
			} catch (error) {
				console.error('Error checking admin claims:', error)
				isAdmin.value = false
			} finally {
				resolve()
			}
		})
	})

	return isAdmin
}