import { expect, test } from '@playwright/test'
import { visualBaselines } from './baseline-map'

/**
 * Renders each mapped V2 story in isolation (the Storybook preview iframe) and pixel-diffs
 * it against the frozen legacy baseline. The viewport — and therefore which
 * `-<viewport>.png` reference is used — comes from the Playwright project (`desktop` /
 * `mobile`); see `playwright.config.ts`.
 *
 * Titles embed the story id, so a single component can be run in isolation:
 *   pnpm test:visual --grep heading
 */
for (const { storyId, legacyBaseline } of visualBaselines) {
  test(`${storyId} matches legacy baseline`, async ({ page }) => {
    await page.goto(`/iframe.html?id=${storyId}&viewMode=story`)

    // Wait until Storybook has rendered the story into its root before capturing.
    await expect(page.locator('#storybook-root')).toBeVisible()
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot(`${legacyBaseline}.png`)
  })
}
