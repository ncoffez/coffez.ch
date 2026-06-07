import { describe, test, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

vi.mock('#app', () => ({
	$auth: {
		onIdTokenChanged: vi.fn(),
		onAuthStateChanged: vi.fn(),
		currentUser: null,
	},
}))

describe('useCurrentUser', () => {
	let globalThisMock: any

	beforeEach(() => {
		vi.clearAllMocks()
	})

	test('returns null when no user is authenticated', async () => {
		const { useCurrentUser } = await import('./useCurrentUser')
		const result = await useCurrentUser()

		expect(result.value).toBeNull()
	})

	test('returns user when authenticated', async () => {
		const mockUser = {
			uid: 'test-uid',
			displayName: 'Test User',
			email: 'test@example.com',
		}

		const mockUnsubscribe = vi.fn()
		const $authMock: any = {
			onAuthStateChanged: vi.fn((callback: any) => {
				callback(mockUser)
				return mockUnsubscribe
			}),
		}

		vi.stubGlobal('$auth', $authMock)
		const { useCurrentUser } = await import('./useCurrentUser')
		const result = await useCurrentUser()

		expect(result.value).toEqual(mockUser)
	})

	test('waits for auth state initialization', async () => {
		let resolveCallback: any = null

		const mockUnsubscribe = vi.fn()
		const $authMock: any = {
			onAuthStateChanged: vi.fn((callback: any) => {
				new Promise(resolve => {
					resolveCallback = resolve
				}).then(() => {
					callback(null)
				})
				return mockUnsubscribe
			}),
		}

		vi.stubGlobal('$auth', $authMock)
		const { useCurrentUser } = await import('./useCurrentUser')
		const promise = useCurrentUser()
		resolveCallback()
		const result = await promise

		expect(result.value).toBeNull()
	})
})