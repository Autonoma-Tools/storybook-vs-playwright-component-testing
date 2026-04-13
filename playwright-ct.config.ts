import { defineConfig, devices } from '@playwright/experimental-ct-react';

export default defineConfig({
  testDir: './playwright-ct',
  use: {
    ...devices['Desktop Chrome'],
    ctPort: 3100,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
