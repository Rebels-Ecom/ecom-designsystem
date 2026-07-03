import { defineConfig } from '@playwright/test'

/**
 * Scoped Playwright config for the visual REVIEW gallery (`scripts/visual-review.spec.ts`).
 *
 * Deliberately separate from `playwright.config.ts`: `pnpm test:visual` (the gate) runs
 * everything under `./tests/visual`, so keeping the generator in `./scripts` with its own
 * config means building the review page never runs the gate, and the gate never runs the
 * generator. The gallery captures both viewports itself (via browser contexts), so no
 * `projects` are defined here — the test runs once.
 */
export default defineConfig({
  testDir: '.',
  testMatch: /visual-review\.spec\.ts$/,
  reporter: 'list',
  timeout: 180_000,
  use: {
    baseURL: 'http://localhost:6006',
    browserName: 'chromium',
    deviceScaleFactor: 1,
  },
  webServer: {
    // Reused if a Storybook is already on :6006 (e.g. `pnpm storybook`) so review runs are
    // fast; otherwise a clean static build is served. This is a local dev tool — always
    // reuse, even under CI.
    command: 'pnpm build-storybook && pnpm dlx http-server storybook-static -p 6006 --silent',
    url: 'http://localhost:6006',
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
