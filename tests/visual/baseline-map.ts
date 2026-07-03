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
  /**
   * Viewports to diff. Omit for both. Restrict when a legacy PNG is structurally
   * incomparable (e.g. captured wider than the viewport because of a legacy overflow bug
   * that V2 intentionally fixes) — the skipped viewport then has no visual test, like a
   * component with no baseline.
   */
  viewports?: readonly ('desktop' | 'mobile')[]
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
  // NOTE: ComponentWithTooltip has NO entry on purpose. The legacy
  // `component-with-tooltip-story` frame is an `IconButton icon='icon-x'` trigger (a molecule
  // not yet migrated), so a faithful parity frame can't be reproduced yet. The V2 Visual story
  // uses a plain "Hover me" button instead — which, being a tiny element on the mostly-empty
  // canvas, stays under the 2% gate no matter what it renders, i.e. the diff proved nothing.
  // Re-add a real mapping once IconButton lands and the Visual story can reproduce the legacy
  // trigger. Its behaviour is still covered by the interaction/a11y play tests.
  {
    storyId: 'design-system-atoms-icon--visual',
    legacyBaseline: 'design-system-atoms-icon--icon-story',
  },
  {
    storyId: 'design-system-atoms-checkbox--visual',
    legacyBaseline: 'design-system-atoms-inputs-checkbox--checkbox-story',
  },
  {
    storyId: 'design-system-atoms-debounceinput--visual',
    legacyBaseline: 'design-system-atoms-debounce-input--debounce-input-story',
  },
  {
    storyId: 'design-system-atoms-inputfile--visual',
    legacyBaseline: 'design-system-atoms-inputs-inputfile--input-file-story',
    // The legacy mobile PNG is 420px wide at a 375px viewport: the legacy component hid
    // its file input with `position: absolute`, whose ~240px static-position box overflowed
    // the viewport and widened the capture. V2 hides the input with `sr-only` (also fixing
    // keyboard reachability), so the overflow — and any comparable mobile frame — is gone.
    viewports: ['desktop'],
  },
  {
    storyId: 'design-system-atoms-loader--visual',
    legacyBaseline: 'design-system-atoms-loader--loader-story',
  },
  {
    storyId: 'design-system-atoms-radiobutton--visual',
    legacyBaseline: 'design-system-atoms-inputs-radio-button--radio-button-story',
  },
  {
    storyId: 'design-system-atoms-loadingbar--visual',
    legacyBaseline: 'design-system-atoms-loadingbar--loading-bar-story-beska',
  },
  {
    storyId: 'design-system-atoms-menubutton--visual',
    legacyBaseline: 'design-system-atoms-menubutton--menu-button-story',
  },
  {
    storyId: 'design-system-atoms-inlinehelper--visual',
    legacyBaseline: 'design-system-atoms-messages--inline-helper-text-story',
  },
  // NOTE: Picture has NO entry on purpose. The legacy `picture-story` PNGs were captured
  // with network-loaded images and a time-based skeleton/opacity transition, so a
  // deterministic V2 frame can't reproduce them. Its behaviour is covered by the
  // interaction/a11y play tests (load-settles-aria-busy, fallback-on-error).
  // NOTE: Placeholder has NO entry — the legacy component shipped no story and no
  // snapshot, so there is no baseline to diff against.
]
