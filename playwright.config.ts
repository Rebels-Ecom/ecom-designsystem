import { defineConfig } from '@playwright/test'

/**
 * Visual regression against the FROZEN legacy baseline in `legacy-snapshots/`.
 *
 * Each mapped V2 story (see `tests/visual/baseline-map.ts`) is rendered in Storybook and
 * pixel-diffed against the legacy PNG captured from `main`. Playwright reads those PNGs
 * directly via `snapshotPathTemplate` — it never regenerates them, so DO NOT run with
 * `--update-snapshots`: that would overwrite the reference images.
 *
 * Baselines are named `<legacyBaseline>-<viewport>.png`. `{projectName}` supplies the
 * viewport (`desktop` | `mobile`) and each test passes `<legacyBaseline>.png` as `{arg}`,
 * so a `desktop` run of the Heading story resolves to
 * `legacy-snapshots/design-system-atoms-heading--heading-story-desktop.png`.
 *
 * The legacy PNGs were captured at devicePixelRatio 1 (desktop 1280×800, mobile 375×667),
 * so the projects below pin the same viewport + scale to keep the diff apples-to-apples.
 */
export default defineConfig({
  testDir: './tests/visual',
  snapshotPathTemplate: 'legacy-snapshots/{arg}-{projectName}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  expect: {
    toHaveScreenshot: {
      // A Tailwind v4 rewrite is rarely pixel-identical to the legacy CSS, so allow a small
      // per-pixel colour tolerance and cap the share of differing pixels. This is the gate:
      // a diff beyond `maxDiffPixelRatio` fails the test. Tune per the CI notes in
      // docs/DEVELOPMENT.md.
      threshold: 0.2,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
      caret: 'hide',
    },
  },
  use: {
    baseURL: 'http://localhost:6006',
    trace: 'on-first-retry',
    browserName: 'chromium',
    deviceScaleFactor: 1,
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 800 } } },
    { name: 'mobile', use: { viewport: { width: 375, height: 667 } } },
  ],
  webServer: {
    // Reused if a Storybook is already on :6006 (e.g. `pnpm storybook`) so per-component
    // scoped runs are fast; CI always does the clean static build.
    command: 'pnpm build-storybook && pnpm dlx http-server storybook-static -p 6006 --silent',
    url: 'http://localhost:6006',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
