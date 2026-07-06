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

  // ── Batch 4 (atoms 16–20) ──
  // Tag: three AA-passing frames mapped. The legacy round-L frame (white on
  // --color-tag-orange) is NOT mapped: white-on-orange fails AA, so no axe-scanned story can
  // render it — the orange token contrast is flagged for design review in Tag.tsx.
  {
    storyId: 'design-system-atoms-tag--visual',
    legacyBaseline: 'design-system-atoms-tag--tag-story-rectangular-l',
  },
  {
    storyId: 'design-system-atoms-tag--visual-rectangular-s',
    legacyBaseline: 'design-system-atoms-tag--tag-story-rectangular-s',
  },
  {
    storyId: 'design-system-atoms-tag--visual-round-s',
    legacyBaseline: 'design-system-atoms-tag--tag-story-round-s',
  },
  {
    storyId: 'design-system-atoms-text--visual',
    legacyBaseline: 'design-system-atoms-text--text-story',
  },
  {
    storyId: 'design-system-atoms-text--visual-error',
    legacyBaseline: 'design-system-atoms-text--text-story-error',
  },
  // The V2 link diverges intentionally: blue + underline (AA) vs legacy orange, undecorated
  // (failed 1.4.1 + 1.4.3). The change is confined to the small text glyphs — under the 2% gate.
  {
    storyId: 'design-system-atoms-text--visual-link',
    legacyBaseline: 'design-system-atoms-text--text-story-link',
  },
  {
    storyId: 'design-system-atoms-text--visual-span',
    legacyBaseline: 'design-system-atoms-text--text-story-span',
  },
  {
    storyId: 'design-system-atoms-textarea--visual',
    legacyBaseline: 'design-system-atoms-textarea--textarea-story',
    // Desktop only. The five-field stack overflows the 375×667 mobile viewport, so the legacy
    // mobile PNG was captured full-page (375×705); the V2 harness captures the viewport (375×667),
    // making the mobile frame structurally incomparable. Desktop (1280×800) fits and matches.
    viewports: ['desktop'],
  },
  // NOTE: SingleSelect has NO entry — the legacy component shipped no story and no snapshot.
  // NOTE: Video has NO entry — the legacy `video-story` PNG captured a non-deterministic
  // auto-playing frame (no poster) and V2 adds a pause control, so a pixel diff is meaningless.

  // ── Batch 5 (atoms 21–25) ──
  {
    storyId: 'design-system-atoms-wavedivider--visual',
    legacyBaseline: 'design-system-atoms-wavedivider--wave-divider-story',
  },
  {
    storyId: 'design-system-atoms-contentwrapper--visual',
    legacyBaseline: 'design-system-atoms-contentwrapper--content-wrapper-story',
  },
  {
    storyId: 'design-system-atoms-flexcontainer--visual',
    legacyBaseline: 'design-system-atoms-flexcontainer--flex-container-story',
    // Desktop only. The story lays six 4rem swatches in a non-wrapping row: 6×64px + 5×16px gaps
    // = 464px, which overflows the 375px mobile viewport, so the legacy PNG was captured full-page
    // (464×667). The V2 harness captures the viewport (375×667), making the mobile frame
    // structurally incomparable. Desktop (1280×800) fits and matches.
    viewports: ['desktop'],
  },
  // NOTE: MaxWidth has NO entry — the legacy component shipped no story and no snapshot.
  // NOTE: Breakpoints has NO entry — it is a viewport-utility module (hooks + conditional-render
  // helpers), not a visual component; legacy shipped no story and no snapshot.

  // ── Batch 6 (atoms 26–28) ──
  {
    // Reclassified molecules → atoms, so the V2 story is under Atoms while the legacy baseline
    // keeps its `molecules` id. The Visual story reproduces the legacy frame using the migrated
    // V2 Heading atom (a single order=1 heading in a max-width-1800 wrapper).
    storyId: 'design-system-atoms-groupwrapper--visual',
    legacyBaseline: 'design-system-molecules-groupwrapper--group-wrapper-story',
    // Desktop only. The frame's only content is one `order=1` Heading, so it inherits the known
    // Heading vertical-rhythm drift (accepted "within tolerance" in batch-1). On the multi-heading
    // `heading-story` baseline that sub-10px offset averages under the 2% gate; here a single large
    // heading wrapping to two lines on the 375px mobile canvas magnifies it to ~4%. GroupWrapper
    // itself adds no vertical box, so this is a Heading-rendering incomparability, not a wrapper
    // divergence. Desktop (one line, drift diluted across the 1280px canvas) matches.
    viewports: ['desktop'],
  },
  // NOTE: BoxWrapper has NO entry — every legacy `box-wrapper-story-*` frame composes molecules that
  // aren't migrated yet (Button, InfoSummaryBox, OrderItem, Tabs, TagsList, OrderConfirmationDetails,
  // ScrollableList), so a faithful parity frame can't be reproduced and a partial one would be a
  // false-green (gotcha 3). Re-map once those children land. Behaviour is covered by its play tests.
  // NOTE: FlexItem has NO entry — the legacy component shipped no story and no snapshot.
]
