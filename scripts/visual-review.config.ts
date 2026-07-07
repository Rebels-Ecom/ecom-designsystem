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
  // The single generator test captures every ['visual'] frame serially; `test.setTimeout` in the
  // spec sets the real budget — this matches it so the config never caps it lower.
  reporter: 'list',
  timeout: 600_000,
  use: {
    // 127.0.0.1, NOT localhost — see the note in playwright.config.ts: `http-server` is IPv4-only,
    // Node probes `localhost` as IPv6 `::1`, so a localhost health check times out with ECONNREFUSED.
    baseURL: 'http://127.0.0.1:6006',
    browserName: 'chromium',
    deviceScaleFactor: 1,
  },
  webServer: {
    // Reused if a Storybook is already on :6006 (e.g. `pnpm storybook`) so review runs are
    // fast; otherwise a clean static build is served. This is a local dev tool — always
    // reuse, even under CI.
    command: 'pnpm build-storybook && pnpm dlx http-server storybook-static -p 6006 --silent',
    // Pin cwd to the PROJECT ROOT. Playwright defaults `webServer.cwd` to the config file's
    // directory — which for this config is `scripts/`, so `http-server storybook-static` would
    // serve the nonexistent `scripts/storybook-static` and return 404 (the health check then
    // times out). `pnpm visual:review` runs from the repo root, so `process.cwd()` is correct.
    cwd: process.cwd(),
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
