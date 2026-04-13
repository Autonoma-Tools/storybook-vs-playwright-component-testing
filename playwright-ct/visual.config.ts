/**
 * visual.config.ts
 *
 * Playwright CT visual regression configuration.
 * Place this alongside your playwright-ct.config.ts.
 *
 * PLAYWRIGHT CT approach:
 * - toHaveScreenshot() stores baseline PNGs next to test files
 * - Run `playwright test --update-snapshots` to accept new baselines
 * - Diffs appear in the HTML report under "expected" / "actual" / "diff"
 * - No external service required
 *
 * CHROMATIC (Storybook) equivalent:
 * - Chromatic captures every story on every CI run
 * - Diffs are reviewed in Chromatic's web UI (per-branch, per-story)
 * - Requires CHROMATIC_PROJECT_TOKEN in CI environment
 * - Pricing scales with snapshot count
 */

import { defineConfig, devices } from '@playwright/experimental-ct-react';

export default defineConfig({
  testDir: './playwright-ct',
  snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}{ext}',
  use: {
    ...devices['Desktop Chrome'],
    ctPort: 3100,
    toHaveScreenshot: { maxDiffPixelRatio: 0.01 },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // Uncomment to run VRT across multiple browsers
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});

/**
 * Example usage in a spec file:
 *
 * test('button matches visual baseline', async ({ mount, page }) => {
 *   await mount(<Button label="Primary" />);
 *   await expect(page).toHaveScreenshot('button-primary.png');
 * });
 *
 * Storybook + Chromatic equivalent (no code needed in spec -- Chromatic
 * captures stories automatically when you push to a branch):
 *
 *   npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN
 *
 * Key difference: Playwright VRT requires you to opt each component in
 * via an explicit toHaveScreenshot() call. Chromatic VRTs every story
 * automatically, giving broader coverage with zero per-component overhead.
 */
