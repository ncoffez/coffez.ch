import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads homepage successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle('Coffez.ch')
  })

  test('navigation menu is visible', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav')).toBeVisible()
  })

  test('scroll to contact button works', async ({ page }) => {
    await page.goto('/')
    const scrollButton = page.getByText(/contact/i)
    await scrollButton.click()
    await expect(page.locator('form')).toBeVisible()
  })
})

test.describe('Responsive Design', () => {
  test('mobile view loads correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await expect(page).toHaveTitle('Coffez.ch')
  })

  test('tablet view loads correctly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')
    await expect(page).toHaveTitle('Coffez.ch')
  })

  test('desktop view loads correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')
    await expect(page).toHaveTitle('Coffez.ch')
  })
})