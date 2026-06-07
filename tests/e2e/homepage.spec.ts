import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
	test('loads successfully', async ({ page }) => {
		await page.goto('/')

		await expect(page).toHaveTitle(/Coffez\.ch/)

		await expect(page.locator('header')).toBeVisible()

		const footer = page.locator('footer')
		await expect(footer).toBeVisible()
		await expect(footer).toContainText('Coffez.ch')
	})

	test('has navigation', async ({ page }) => {
		await page.goto('/')

		await expect(page.locator('nav')).toBeVisible()
	})

	test('displays events section', async ({ page }) => {
		await page.goto('/')

		const eventsSection = page.locator('[id="events"]')
		await expect(eventsSection).toBeVisible()
	})

	test('displays gallery section', async ({ page }) => {
		await page.goto('/')

		await expect(page.locator('section')).toContainText(/gallery|galerie|galerie/i)
	})

	test('has contact functionality', async ({ page }) => {
		await page.goto('/')

		await expect(page.locator('text=/kontakt|contact/i')).toBeVisible()
	})
})