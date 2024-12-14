import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000, // 30 seconds
  retries: 1, // Retry failed tests once
  use: {
    headless: true, // Run tests in headless mode by default
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000, // 10 seconds timeout for actions
    baseURL: 'https://example.com', // Base URL for tests
    trace: 'on-first-retry' // Record trace only on first retry
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome'
      }
    },
    {
      name: 'Mobile Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 375, height: 667 }
      }
    }
  ]
});
