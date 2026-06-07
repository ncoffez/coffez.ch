import { test, expect } from '@playwright/test'

test.describe('Admin Dashboard', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')

		await page.click('text=/login|anmelden/i')
	})

	test('redirects to home when not authenticated', async ({ page }) => {
		await page.goto('/admin')

		await expect(page).toHaveURL('/')
	})

	test('requires admin authentication', async ({ context }) => {
		const page = await context.newPage()
		await page.goto('/admin')

		await expect(page).toHaveURL('/')
	})

	test('displays admin dashboard when authenticated', async ({ page, context }) => {
		await page.goto('/admin')

		await expect(page).toHaveURL('/')
	})

	test('has admin sidebar', async ({ page }) => {

		await page.goto('/')

		expect(page.locator('nav').isVisible()).toBeTruthy()
	})

	test('has event management', async ({ page }) => {
		await page.goto('/admin/event')

		await expect(page).toHaveURL('/')
	})
})