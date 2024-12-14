import { test, expect } from '@playwright/test';

test('Product search functionality', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://example.com');

  // Perform a search
  await page.fill('#search-bar', 'Laptop');
  await page.click('#search-button');

  // Verify search results are displayed
  const results = page.locator('.product-item');
  const resultCount = await results.count(); // Count the number of results
  expect(resultCount).toBeGreaterThan(0);

  // Check that a specific product appears in the results
  await expect(page.locator('text=Specific Laptop Model')).toBeVisible();
});

