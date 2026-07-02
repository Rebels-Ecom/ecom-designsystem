/**
 * Maps a V2 Storybook story to the frozen legacy visual baseline it must match.
 *
 * The reference images live in `legacy-snapshots/` (captured from `main`) and are named
 * `<legacyBaseline>-<viewport>.png`. Playwright reads them directly — see
 * `playwright.config.ts` `snapshotPathTemplate` — and never regenerates them.
 *
 * `storyId` is the id Storybook derives from a story's `title` + export name, kebab-cased
 * (title `Design System/Atoms/Heading` + `export const Visual` → `design-system-atoms-heading--visual`).
 * The referenced story MUST be static (no `play`, so nothing mutates the frame) and tagged
 * `['visual']`, and should reproduce whatever the legacy baseline captured.
 *
 * `scaffold-component` appends one entry here per migrated component that has a legacy
 * baseline. Components with no legacy counterpart (e.g. brand-new or icon-only atoms) are
 * intentionally absent — they get no visual test.
 */
export interface VisualBaseline {
  /** V2 story id, e.g. `design-system-atoms-heading--visual`. */
  storyId: string
  /** Legacy baseline basename WITHOUT the `-<viewport>.png` suffix. */
  legacyBaseline: string
}

export const visualBaselines: readonly VisualBaseline[] = [
  {
    storyId: 'design-system-atoms-heading--visual',
    legacyBaseline: 'design-system-atoms-heading--heading-story',
  },
  {
    storyId: 'design-system-atoms-campaignbanner--visual',
    legacyBaseline: 'design-system-atoms-campaignbanner--campaign-banner-story',
  },
  {
    storyId: 'design-system-atoms-componentwithtooltip--visual',
    legacyBaseline: 'design-system-atoms-componentwithtooltip--component-with-tooltip-story',
  },
  {
    storyId: 'design-system-atoms-icon--visual',
    legacyBaseline: 'design-system-atoms-icon--icon-story',
  },
]
