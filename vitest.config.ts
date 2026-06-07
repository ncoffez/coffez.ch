import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'node_modules/',
				'.nuxt/',
				'.output/',
				'functions/',
				'tests/',
				'**/*.d.ts',
				'**/*.config.*',
				'**/mockData/**',
			],
		},
		include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: [
			'node_modules',
			'.nuxt',
			'.output',
			'functions',
			'dist',
		],
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./', import.meta.url)),
			'~': fileURLToPath(new URL('./', import.meta.url)),
		},
	},
})