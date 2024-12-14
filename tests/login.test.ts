import { test, expect } from '@playwright/test';

test('User login with valid credentials', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://example.com/login');

  // Fill in valid login credentials
  await page.fill('#username', 'validUser');
  await page.fill('#password', 'validPassword');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Verify successful login
  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.locator('text=Welcome, validUser')).toBeVisible();
});
