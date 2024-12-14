import { test, expect } from '@playwright/test';

test('Browsing through the website', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://example.com');

  // Verify the homepage loaded
  await expect(page.locator('h1')).toHaveText('Welcome to Example');

  // Navigate to another page
  await page.click('a[href="/about"]');
  await expect(page).toHaveURL('https://example.com/about');

  // Verify content on the About page
  await expect(page.locator('h2')).toHaveText('About Us');
});
