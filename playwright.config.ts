import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://onlinelibrary.wiley.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  testDir: './tests',
});
