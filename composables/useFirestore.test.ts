import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import { ref } from 'vue'
import { $db } from '#app'

vi.mock('#app', () => ({
	$db: {
		collection: vi.fn(),
		doc: vi.fn(),
	},
}))

describe('useFirestore', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	test('creates document reference from string path', () => {
		const { useFirestore } = require('./useFirestore')
		const mockDoc = vi.fn()
		vi.mocked($db).doc = mockDoc

		useFirestore('portraits/test-id')

		expect(mockDoc).toHaveBeenCalledWith($db, 'portraits/test-id')
	})

	test('handles query objects correctly', () => {
		const { useFirestore } = require('./useFirestore')
		const mockQuery = { type: 'query' }
		vi.mocked($db).collection = vi.fn(() => mockQuery)

		const result = useFirestore(mockQuery)
		expect(result).toBeDefined()
	})

	test('returns ref value from vueUse firestore', () => {
		const { useFirestore } = require('./useFirestore')
		const mockDoc = vi.fn(() => ({ id: 'test' }))
		vi.mocked($db).doc = mockDoc

		const result = useFirestore('portraits/test-id')
		expect(result).toBeDefined()
	})
})