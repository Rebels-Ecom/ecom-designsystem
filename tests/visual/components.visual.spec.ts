import { expect, test } from '@playwright/test'
import { visualBaselines } from './baseline-map'

/**
 * Renders each mapped V2 story in isolation (the Storybook preview iframe) and pixel-diffs
 * it against the frozen legacy baseline. The viewport — and therefore which
 * `-<viewport>.png` reference is used — comes from the Playwright project (`desktop` /
 * `mobile`); see `playwright.config.ts`.
 *
 * Titles embed the story id AND the baseline name, so a single component can be run in isolation
 * (`pnpm test:visual --grep heading`) and one story mapped to several baselines (e.g. ArticleList's
 * Default frame is also Carousel's baseline) stays a unique, non-clashing test title.
 */
for (const { storyId, legacyBaseline, viewports, reviewOnly } of visualBaselines) {
  test(`${storyId} matches legacy baseline ${legacyBaseline}`, async ({ page }, testInfo) => {
    test.skip(
      reviewOnly === true,
      'Review-only pairing: faithfully reproduced but diverges beyond the 2% gate — compare in the visual:review gallery (see baseline-map.ts)',
    )
    test.skip(
      viewports !== undefined && !viewports.includes(testInfo.project.name as 'desktop' | 'mobile'),
      'No usable legacy baseline for this viewport (see baseline-map.ts)',
    )

    await page.goto(`/iframe.html?id=${storyId}&viewMode=story`)

    // Wait until Storybook has rendered the story into its root before capturing.
    // (`toBeAttached`, not `toBeVisible`: absolutely-positioned stories like Loader take
    // the root out of flow, leaving it zero-height and technically "hidden".)
    await expect(page.locator('#storybook-root > *').first()).toBeAttached()
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot(`${legacyBaseline}.png`)
  })
}
