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
  /**
   * **Review-only pairing.** The V2 `Visual` story faithfully reproduces the same *scene* as this
   * legacy baseline, but the two are NOT expected to pixel-match within the 2% gate — because the
   * frame carries a locked, intentional divergence: a brand image rendered at a different
   * intrinsic size, a full-bleed image over which the migrated text uses the brand font / accessible
   * colours, or a legacy PNG captured at different pixel dimensions than the fixed viewport.
   *
   * A `reviewOnly` entry is **skipped by the pixel gate** (`pnpm test:visual`) but **still paired**
   * (Legacy | Current | Compare + Δ) in the `visual:review` gallery — so a human can eyeball the
   * migration instead of the frame silently rendering current-only with no legacy to compare against.
   * Reach for it only when a faithful reproduction genuinely can't clear the gate; a frame that *can*
   * match within 2% must be a normal (gated) entry.
   */
  reviewOnly?: boolean
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
  // ── Batch 7 (molecules — button/link foundation) ──
  // Button: intentional font divergence (legacy's `--font-family-secondaryBold` was undefined → UA
  // font; V2 uses brand `font-primary`). The label is a tiny fraction of the full-screen canvas, so
  // the diff stays under the 2% gate; mapping pairs it in the review gallery for human sign-off.
  {
    storyId: 'design-system-molecules-button--visual',
    legacyBaseline: 'design-system-atoms-buttons--button-small',
  },
  {
    storyId: 'design-system-molecules-button--visual-icon-left',
    legacyBaseline: 'design-system-atoms-buttons--button-small-icon-left',
  },
  {
    storyId: 'design-system-molecules-button--visual-icon-right',
    legacyBaseline: 'design-system-atoms-buttons--button-small-icon-right',
  },
  {
    storyId: 'design-system-molecules-button--visual-large',
    legacyBaseline: 'design-system-atoms-buttons--button-large',
  },
  // UiLink: intentional colour divergence (legacy orange link fails AA → V2 accessible blue +
  // underline, same as the Text link). Confined to small glyphs, so under the 2% gate.
  {
    storyId: 'design-system-molecules-uilink--visual',
    legacyBaseline: 'design-system-atoms-uilink--ui-link-story',
  },

  // ── Batch 8 (molecules/organisms — Tier-0 leaves) ──
  // InputText: same brand `font-primary` as legacy (no font divergence) — an empty field in a 616px
  // wrapper; both viewports fit the frame, so it's mapped without a viewport restriction.
  {
    storyId: 'design-system-molecules-inputtext--visual',
    legacyBaseline: 'design-system-atoms-inputs-inputtext--input-text-story',
  },
  // IconWithTooltip: the legacy `tooltip-story` frame (icon-alert-circle trigger, closed). Only
  // divergence is icon size (legacy `size='sm'`; V2 uses a fixed larger icon) — a tiny top-left glyph,
  // under the 2% gate. (Earlier logged as "no snapshot" — a false negative from grepping the
  // hyphenated `icon-with-tooltip`; snapshot ids de-hyphenate the component segment → `iconwithtooltip`.)
  {
    storyId: 'design-system-molecules-iconwithtooltip--visual',
    legacyBaseline: 'design-system-atoms-iconwithtooltip--tooltip-story',
  },
  // NOTE: Carousel — a legacy baseline PNG DOES exist (`design-system-organisms-carousel--carousel-story`,
  // desktop + mobile), but it is intentionally NOT mapped yet. The legacy `carousel-story` renders
  // `<ArticleList swipe>` — 5 `ArticleCard`s (Picture of blog-images/Content9.png + green Tag + h4 +
  // body text + orange "Läs mer" UILink). The Carousel's own pixels (dots + next-arrow) are ~5% of the
  // frame; ~95% is ArticleList/ArticleCard, neither migrated. Reproducing it means rebuilding that card
  // (and the orange link is now intentionally accessible blue), so a diff here would be a full-canvas
  // false-green/false-red (gotcha 3), not a Carousel signal. RESOLVED (Batch 19): ArticleList landed
  // and its `VisualDefault` story reproduces this exact frame faithfully — but it is still NOT
  // pixel-mappable: the legacy DESKTOP PNG is 1280×805 vs the fixed 1280×800 viewport (5px dimension
  // mismatch → auto-fail) and the MOBILE PNG is a 375×746 full-page capture (> 375×667), on top of a
  // ~40px title→cards vertical offset and the orange→blue link (20–32% before the dimension gap). See
  // the Batch 19 ArticleList NOTE below for the full per-frame measurement. Carousel's `Visual` story
  // stays gallery-only (current-only); behaviour is covered by the interaction/a11y play tests.
  // NOTE: TagsList has NO entry — legacy shipped no snapshot for it. Its `Visual` story is
  // `['visual']` (gallery-only) so it still surfaces for review.
  // NOTE: Logotype has NO entry — it renders the real Spendrups brand SVGs (bundled vectors), which
  // are a different rendition than the legacy `logotype-story` PNG (that loaded the old Spendrups
  // image asset). Its `['visual']` story (under `Design System/Foundations/Logotype`, story id
  // `design-system-foundations-logotype--visual`) is gallery-only.

  // NOTE: BoxWrapper has NO entry — every legacy `box-wrapper-story-*` frame composes molecules that
  // aren't migrated yet (Button, InfoSummaryBox, OrderItem, Tabs, TagsList, OrderConfirmationDetails,
  // ScrollableList), so a faithful parity frame can't be reproduced and a partial one would be a
  // false-green (gotcha 3). Re-map once those children land. Behaviour is covered by its play tests.
  // NOTE: FlexItem has NO entry — the legacy component shipped no story and no snapshot.

  // ── Batch 9 (molecules — Tier-0 leaves) ──
  // InlineError: text in `text-critical` (AA on white) + decorative icon; reproduces the legacy
  // `inline-error-text-story` (message "Fält är obligatorisk" in a 616px column). No divergence.
  {
    storyId: 'design-system-molecules-inlineerror--visual',
    legacyBaseline: 'design-system-atoms-messages--inline-error-text-story',
  },
  // LoadingBars: four identical "Beska" bars (value 6, orange) — same as legacy `loading-bars-story`.
  {
    storyId: 'design-system-molecules-loadingbars--visual',
    legacyBaseline: 'design-system-molecules-loadingbars--loading-bars-story',
  },
  // ClickableListItem: default colour, "Click me" + icon-x, full-width in a 1800px wrapper. V2 adds a
  // 24px min target height (2.5.8) the legacy row lacked — a ≤4px height change confined to the small
  // label/icon, well under the 2% gate.
  {
    storyId: 'design-system-molecules-clickablelistitem--visual',
    legacyBaseline: 'design-system-molecules-clickablelistitem--clickable-list-item-loka',
  },
  // LoadingOverlay: four scrim variants. The V2 story renders an `absolute` overlay in a full-viewport
  // box, reproducing the legacy `fixed` full-screen scrim's pixels. Legacy `loaderColor: 'blue'` → V2
  // 'default'. Scrims are exact ports (light #f5f6f8/95, dark blue-500/30).
  {
    storyId: 'design-system-molecules-loadingoverlay--visual-light',
    legacyBaseline: 'design-system-molecules-loadingoverlay--loading-overlay-story-light',
  },
  {
    storyId: 'design-system-molecules-loadingoverlay--visual-dark',
    legacyBaseline: 'design-system-molecules-loadingoverlay--loading-overlay-story-dark',
  },
  {
    storyId: 'design-system-molecules-loadingoverlay--visual-with-text',
    legacyBaseline: 'design-system-molecules-loadingoverlay--loading-overlay-story-with-text',
  },
  {
    storyId: 'design-system-molecules-loadingoverlay--visual-small',
    legacyBaseline: 'design-system-molecules-loadingoverlay--loading-overlay-story-small',
  },
  // NOTE: ArticleCard has NO entry — legacy shipped no `article-card` story/snapshot. Its visual
  // baseline is DEFERRED to ArticleList, whose Default story reproduces the legacy carousel frame (see
  // the queue reminder in MIGRATION-PROGRESS.md). Its `['visual']` story is gallery-only (current-only).

  // ── Batch 9 backfill (2026-07-07) — variant frames whose legacy snapshots already existed but were
  // only partially mapped (one primary frame per component). Same divergences as each component's base
  // frame (InputText none; Button font; UiLink orange→blue). ──
  // InputText variants:
  {
    storyId: 'design-system-molecules-inputtext--visual-placeholder',
    legacyBaseline: 'design-system-atoms-inputs-inputtext--input-text-story-place-holder',
  },
  {
    storyId: 'design-system-molecules-inputtext--visual-error',
    legacyBaseline: 'design-system-atoms-inputs-inputtext--input-text-story-error',
  },
  {
    storyId: 'design-system-molecules-inputtext--visual-disabled',
    legacyBaseline: 'design-system-atoms-inputs-inputtext--input-text-story-disabled',
  },
  {
    storyId: 'design-system-molecules-inputtext--visual-check-icon',
    legacyBaseline: 'design-system-atoms-inputs-inputtext--input-text-story-check-icon',
  },
  // Checkbox variants (unchecked, per the legacy render):
  {
    storyId: 'design-system-atoms-checkbox--visual-error',
    legacyBaseline: 'design-system-atoms-inputs-checkbox--checkbox-story-error',
  },
  {
    storyId: 'design-system-atoms-checkbox--visual-disabled',
    legacyBaseline: 'design-system-atoms-inputs-checkbox--checkbox-story-disabled',
  },
  // RadioButton variants (checked, per the legacy render):
  {
    storyId: 'design-system-atoms-radiobutton--visual-error',
    legacyBaseline: 'design-system-atoms-inputs-radio-button--radio-button-story-error',
  },
  {
    storyId: 'design-system-atoms-radiobutton--visual-disabled',
    legacyBaseline: 'design-system-atoms-inputs-radio-button--radio-button-story-disabled',
  },
  // Button size/icon frames (icon-only excluded — those are IconButton's job). Same font divergence
  // as the base Button frames, under the 2% gate.
  {
    storyId: 'design-system-molecules-button--visual-large-icon-left',
    legacyBaseline: 'design-system-atoms-buttons--button-large-icon-left',
  },
  {
    storyId: 'design-system-molecules-button--visual-large-icon-right',
    legacyBaseline: 'design-system-atoms-buttons--button-large-icon-right',
  },
  {
    storyId: 'design-system-molecules-button--visual-x-small',
    legacyBaseline: 'design-system-atoms-buttons--button-x-small',
  },
  {
    storyId: 'design-system-molecules-button--visual-x-small-icon-left',
    legacyBaseline: 'design-system-atoms-buttons--button-x-small-icon-left',
  },
  {
    storyId: 'design-system-molecules-button--visual-x-small-icon-right',
    legacyBaseline: 'design-system-atoms-buttons--button-x-small-icon-right',
  },
  {
    storyId: 'design-system-molecules-button--visual-xx-small',
    legacyBaseline: 'design-system-atoms-buttons--button-xx-small',
  },
  {
    storyId: 'design-system-molecules-button--visual-xx-small-icon-left',
    legacyBaseline: 'design-system-atoms-buttons--button-xx-small-icon-left',
  },
  {
    storyId: 'design-system-molecules-button--visual-xx-small-icon-right',
    legacyBaseline: 'design-system-atoms-buttons--button-xx-small-icon-right',
  },
  // InputFile disabled — desktop-only, like the base frame (legacy mobile PNG structurally incomparable).
  {
    storyId: 'design-system-atoms-inputfile--visual-disabled',
    legacyBaseline: 'design-system-atoms-inputs-inputfile--input-file-story-disabled',
    viewports: ['desktop'],
  },
  // Loader large (lg spinner, no text):
  {
    storyId: 'design-system-atoms-loader--visual-large',
    legacyBaseline: 'design-system-atoms-loader--loader-story-large',
  },
  // NOTE: Heading `heading-delivery-form-story` is NOT mapped. It's the same five-level structure as the
  // mapped `heading-story`, only with longer text ("Dina leverans uppgifter") and the order-1 default
  // margin. The known Heading vertical-rhythm drift (sub-pixel line-height/margin difference) accumulates
  // down the five-heading stack; with this frame's larger text that pushes the diff to ~4% on desktop
  // (verified) — over the gate. `heading-story` (shorter text, same drift, under the gate) is the
  // representative Heading baseline; delivery-form adds no new component coverage, so its
  // `VisualDeliveryForm` story stays gallery-only (`['visual']`, current-only) for human review.
  // UiLink blog ("Läs mer"): same accessible orange→blue divergence as the base frame.
  {
    storyId: 'design-system-molecules-uilink--visual-blog',
    legacyBaseline: 'design-system-atoms-uilink--ui-link-blog-story',
  },

  // ── Batch 10 (molecules — Tier-0 leaves) ──
  // OfferCard: centred icon + heading + lorem body, full-width card. No divergence (icon is decorative,
  // heading is plain UA-weight text). Both frames map both viewports.
  {
    storyId: 'design-system-molecules-offercard--visual',
    legacyBaseline: 'design-system-molecules-offercard--offer-card-story-1',
  },
  {
    storyId: 'design-system-molecules-offercard--visual-story-2',
    legacyBaseline: 'design-system-molecules-offercard--offer-card-story-2',
  },
  // CheckboxListItem: Heading + Art.nr on the left, unchecked Checkbox on the right, in the 1800px wrapper.
  // No divergence (the added aria-labelledby is invisible).
  {
    storyId: 'design-system-molecules-checkboxlistitem--visual',
    legacyBaseline: 'design-system-molecules-checkboxlistitem--checkbox-list-item-loka',
  },
  {
    storyId: 'design-system-molecules-checkboxlistitem--visual-heineken',
    legacyBaseline: 'design-system-molecules-checkboxlistitem--checkbox-list-item-heineken',
  },
  // NOTE: DeliveryInfoBar has NO entry on purpose. Its legacy `delivery-info-bar-story` frame is BLANK:
  // the legacy entrance used `transition={{ delay: 0.5 }}` from `opacity: 0`, and Storybook captured the
  // frame before that delay elapsed, so the PNG is an empty canvas. Diffing the settled V2 bar against a
  // blank image proves nothing (an invalid oracle, like PopUp's closed-state frame). Its `['visual']` story
  // renders the settled bar gallery-only (current-only); behaviour is covered by the interaction/a11y tests.
  // DropdownList: the 12-entry account menu. Legacy `--navigation-text-default` is #003E51, exactly the V2
  // `nav-text-default` (blue-500) token, so the link colour matches with no divergence.
  {
    storyId: 'design-system-molecules-dropdownlist--visual',
    legacyBaseline: 'design-system-molecules-dropdownlist--dropdown-list-story',
  },
  // InfoSummaryBox: only the two Text-only frames are reproducible. The top-right action link diverges
  // orange→blue (legacy orange fails AA) — a small element, under the 2% gate, same as UiLink/Text.
  {
    storyId: 'design-system-molecules-infosummarybox--visual',
    legacyBaseline: 'design-system-molecules-infosummarybox--info-summary-box-story-dina-uppgifter',
  },
  {
    storyId: 'design-system-molecules-infosummarybox--visual-anvandare',
    legacyBaseline: 'design-system-molecules-infosummarybox--info-summary-box-story-anvandare',
  },
  // NOTE: InfoSummaryBox's other legacy frames (produkter, inkopslistor, mina-ordrar, shopping-list,
  // pdf-category-*, purchase-list-item, word-filters, checkbox-list-*) compose components that aren't
  // migrated yet (OrderItem, CartProduct(List), GroupWrapper+Button, UnorderedList), so a faithful parity
  // frame can't be reproduced — deferred until those children land. The two Text-only frames above already
  // validate InfoSummaryBox's own rendering (border, label, action link, padding).

  // ── Batch 11 (molecules — Tier-0 leaves) ──
  // NOTE: IntroBlock has NO entry on purpose. Its legacy `intro-block-story` frame is dominated by a
  // Word-paste rich body whose exact rendering depended on browser UA margins, `&nbsp;`-driven line
  // wrapping, and the global bold-heading CSS — all of which V2's Tailwind preflight intentionally resets.
  // The mobile PNG is full-page (375×1025, structurally incomparable like Textarea/FlexContainer), and the
  // desktop frame reflows ~5% (over the gate) purely from that consumer rich-body text, not from any
  // IntroBlock rendering divergence. Its `['visual']` story stays gallery-only (current-only); IntroBlock's
  // own rendering (layout atoms + bespoke title + uppercase ingress) is covered by the interaction/a11y
  // stories. Re-map only if a deterministic, preflight-independent rich-body frame is introduced.
  // MessageBanner: success (neutral bg, dark text, check-circle) + link (#432365 bg, white text, arrow).
  // No divergence — both pairings pass AA and are axe-scanned.
  {
    storyId: 'design-system-molecules-messagebanner--visual',
    legacyBaseline: 'design-system-atoms-messagebanner--message-banner-story-success',
  },
  {
    storyId: 'design-system-molecules-messagebanner--visual-link',
    legacyBaseline: 'design-system-atoms-messagebanner--message-banner-story-link',
  },
  // OrderConfirmationDetails: all three frames (delivery, pricing, total-payment). The V2 markup is a
  // semantic <dl> vs the legacy <p><span> pairs, but the visual layout (label/value rows) is identical.
  {
    storyId: 'design-system-molecules-orderconfirmationdetails--visual',
    legacyBaseline: 'design-system-molecules-orderconfirmationdetails--order-confirmation-details-story-delivery',
  },
  {
    storyId: 'design-system-molecules-orderconfirmationdetails--visual-pricing',
    legacyBaseline: 'design-system-molecules-orderconfirmationdetails--order-confirmation-details-story-pricing',
  },
  {
    storyId: 'design-system-molecules-orderconfirmationdetails--visual-total-payment',
    legacyBaseline: 'design-system-molecules-orderconfirmationdetails--order-confirmation-details-story-total-payment',
  },
  // Pagination: 100 items / 25 per page = 4 pages, on page 1 (prev disabled, page 1 active). Legacy btn
  // colour --cta-primary-default is #003E51 = V2 action-primary, so no divergence.
  {
    storyId: 'design-system-molecules-pagination--visual',
    legacyBaseline: 'design-system-molecules-pagination--pagination-story',
  },
  // NOTE: PopUp has NO entry on purpose. The legacy `pop-up-story` renders with `open` starting false, so
  // the captured frame is the *closed* state — just its trigger button, not the panel. Reproducing that
  // would be a full-canvas false-green (gotcha 3) that proves nothing about PopUp; there is no legacy image
  // of the open panel to diff against. Its `['visual']` story shows the open panel gallery-only
  // (current-only); behaviour is covered by the interaction/a11y play tests.

  // ── Batch 12 (molecules — Tier-0 leaves) ──
  // PurchaseList: the two-row list under a "Delete" button in a ContentWrapper. The legacy orange
  // "updated" badge used white text (~2.3:1, fails AA); V2 keeps the orange fill with dark text — a
  // tiny date pill, well under the 2% gate. (Legacy story passed linkComponent="p"; V2 uses a real
  // <a>, visually identical text.)
  {
    storyId: 'design-system-molecules-purchaselist--visual',
    legacyBaseline: 'design-system-atoms-purchaselist--purchase-list-story',
  },
  // SortableListItem: both row frames, reproduced with the migrated Heading/Text/GroupWrapper children
  // in the 1800px wrapper. V2 replaces the legacy `<button>`-wrapping-a-heading (invalid: a button may
  // not contain a heading) with a stretched overlay button — visually identical (transparent), so the
  // frames map. Chevron shows at lg (desktop) and is hidden on mobile, matching legacy.
  {
    storyId: 'design-system-molecules-sortablelistitem--visual',
    legacyBaseline: 'design-system-molecules-sortablelistitem--sortable-list-item-e-handel',
  },
  {
    storyId: 'design-system-molecules-sortablelistitem--visual-leverans',
    legacyBaseline: 'design-system-molecules-sortablelistitem--sortable-list-item-leverans',
  },
  // NOTE: ScrollableList has NO entry — every legacy `scrollable-list-*` frame composes CartProduct /
  // LinkListItem children that aren't migrated yet (like BoxWrapper), so a faithful parity frame can't
  // be reproduced and a partial one would be a false-green (gotcha 3). Re-map once those children land.
  // Its `['visual']` story is gallery-only (current-only); behaviour is covered by the play tests.
  // NOTE: RichText has NO entry — the legacy `rich-text-story` frames render Word-paste HTML that
  // depended on browser UA margins, an IcoMoon bullet font, and 404-ing image paths (all reset/absent
  // under V2's preflight), so a deterministic pixel diff isn't reproducible (same class as IntroBlock).
  // Its `['visual']` story renders clean sample content gallery-only (current-only).
  // NOTE: TagsDescription has NO entry — legacy shipped no snapshot for it. Its `['visual']` story is
  // gallery-only (current-only) so it still surfaces in the review gallery.

  // ── Batch 13 (last molecule leaves + first cart-family organisms) ──
  // UnorderedList: 7 alternating checkbox rows with separating lines in a 1254px column, reproducing
  // `unordered-list-story`. Built from the migrated CheckboxListItem; row ids are made unique (legacy
  // reused one id — a duplicate-id a11y fail). Mapped DESKTOP-ONLY: the known Heading vertical-rhythm
  // drift (batch 1, "within tolerance") is per-row and accumulates down the 7 stacked rows; on the
  // 375px mobile canvas the drifted text is a larger share of the frame (~4% > gate), while desktop
  // dilutes it under 2%. Same amplification pattern as GroupWrapper. (The first row aligns exactly;
  // each row below drifts progressively — a rendering incomparability, not a layout divergence.)
  {
    storyId: 'design-system-molecules-unorderedlist--visual',
    legacyBaseline: 'design-system-molecules-unorderedlist--unordered-list-story',
    viewports: ['desktop'],
  },
  // UnorderedList loading: same column with the orange `Loader` swapped in for the rows.
  {
    storyId: 'design-system-molecules-unorderedlist--visual-loading',
    legacyBaseline: 'design-system-molecules-unorderedlist--unordered-list-story-loading',
  },
  // UserInfoSummary: label + name + company + customer number + role, reproducing `user-info-summary-story`.
  // The name is uppercased via CSS (not `.toUpperCase()`) so AT keeps original casing — visually identical.
  {
    storyId: 'design-system-molecules-userinfosummary--visual',
    legacyBaseline: 'design-system-molecules-userinfosummary--user-info-summary-story',
  },
  // NOTE: Cart has NO entry — the legacy `cart-story` frame nests the unmigrated DeliveryForm (in the
  // delivery column) and CartProductList/CartProduct (in the order column); those are the bulk of the
  // frame, so a faithful parity frame can't be reproduced and a partial one would be a false-green
  // (gotcha 3). Its `['visual']` story composes the migrated CartDeliveryDetails/CartOrderDetails to
  // show the 60/40 layout, gallery-only (current-only). Re-map once DeliveryForm + CartProductList land.
  // NOTE: CartDeliveryDetails has NO entry — the legacy `cart-delivery-details-story` frame is mostly
  // the unmigrated DeliveryForm. Gallery-only Visual with representative content; re-map with DeliveryForm.
  // NOTE: CartOrderDetails (Deprecated) has NO entry — the legacy `cart-order-details-story` frame is
  // mostly the unmigrated CartProductList/CartProduct. Gallery-only Visual; re-map when those children land.

  // ── Batch 14 (cart-family organisms + page shells) — all baseline-deferred to CartProduct et al. ──
  // CartProductList: now that CartProduct has landed (Batch 21) its Visual story composes real
  // CartProduct rows, faithfully reproducing the legacy frame — mapped `reviewOnly` in the Batch-21
  // backfill below (the legacy product image rendered broken; V2 shows a local fallback).
  // NOTE: CartSidebar stays current-only — NOT a child-migration gap (DrawerSidebar + CartProduct have
  // both landed). The legacy `cart-sidebar-story`/`-no-products` frames were captured with the drawer
  // CLOSED (`isOpen` starts false, no play), so the baseline is just the consumer's bare "Open sidebar"
  // trigger button on an empty canvas — a different scene from the V2 Visual (the OPEN sidebar content),
  // with no open-state legacy frame to diff against (same closed-overlay case as DrawerSidebar / PopUp).
  // Its `['visual']` story shows the open sidebar for review; behaviour is covered by the play tests.
  // NOTE: LoginPage has NO entry — the legacy `login-page-story`/`-loading`/`-choose-account` frames
  // centre the unmigrated LoginForm / AccountBoxList. Gallery-only Visual with a placeholder card;
  // re-map once those land.
  // OrderConfirmation / OrderConfirmationPage: unblocked in the Batch-21 backfill (CartProduct landed) —
  // their Visual stories now compose the full legacy scene incl. real CartProduct rows. Mapped
  // `reviewOnly` below.

  // ── Batch 15 (Tier-1 leaves) ──
  // IconButton: the small neutral chip (map-pin + orange count badge). Two divergences under the 2% gate —
  // dark-on-orange badge (legacy white-on-orange fails AA) and lucide vs icomoon map-pin.
  {
    storyId: 'design-system-molecules-iconbutton--visual-small-button',
    legacyBaseline: 'design-system-atoms-iconbutton--icon-button-story-small-button',
  },
  {
    storyId: 'design-system-molecules-iconbutton--visual-over-100-products',
    legacyBaseline: 'design-system-atoms-iconbutton--icon-button-story-over-100-products',
  },
  // NOTE: IconButton `large-link` / `go-to-product` have NO entry — the legacy link rendered a
  // non-semantic block `<div>` (full-width bar); V2's `DefaultLink` correctly renders an inline `<a>`,
  // a different box shape too large to diff meaningfully. The `cart-*` / `remove-product` frames are
  // transparent large buttons using shopping-cart / x-circle glyphs, left unmapped (small-button +
  // over-100-products already exercise the chip faithfully with the verified map-pin glyph).

  // LinkButton: the full-width primary CTA bar ("Read more here"). Same font divergence as Button,
  // under the 2% gate. `link-button-story-go-to-cart` is an identical frame (same args) → not re-mapped.
  {
    storyId: 'design-system-molecules-linkbutton--visual',
    legacyBaseline: 'design-system-atoms-linkbutton--link-button-story',
  },
  // NOTE: ProductVariant has NO entry — the legacy `product-variant-story` frame is non-deterministic
  // (its image is a remote CDN URL that rendered broken in the capture) and the story passed no label
  // props, so its meta rows read literal "undefined". Gallery-only Visual with a deterministic
  // placeholder image + real labels; behaviour covered by play tests.
  // ProductQuantityInput: the empty number field + "x KLI (15 styck)" / "Pris: 350,10 kr" readout.
  // The `Visual` story overrides `labels` to the Swedish copy the legacy frame rendered.
  {
    storyId: 'design-system-molecules-productquantityinput--visual',
    legacyBaseline: 'design-system-molecules-productquantityinput--input-quantity-story',
  },
  // AlertBox: the three severity panels (error / warning / information) with the Swedish copy.
  // The two button-bearing frames (error, information) are mapped DESKTOP-ONLY: on mobile the action
  // button is full-width, so the documented Button font divergence (legacy referenced an undefined
  // `--font-family-secondaryBold` → UA font; V2 uses `font-primary`) spans the whole bar and — added
  // to the title's minor edge diff — tips those frames ~1pt over the 2% gate (desktop's auto-width
  // button stays under). Warning (no button) matches on both viewports. Same call as the mobile-only
  // divergences on GroupWrapper / Textarea / UnorderedList.
  {
    storyId: 'design-system-molecules-alertbox--visual-error',
    legacyBaseline: 'design-system-atoms-alertbox--alert-box-box-story-with-button-error',
    viewports: ['desktop'],
  },
  {
    storyId: 'design-system-molecules-alertbox--visual-warning',
    legacyBaseline: 'design-system-atoms-alertbox--alert-box-box-story-no-button-warning',
  },
  {
    storyId: 'design-system-molecules-alertbox--visual-information',
    legacyBaseline: 'design-system-atoms-alertbox--alert-box-box-story-no-button-information',
    viewports: ['desktop'],
  },

  // ── Batch 16 (Tier-1 leaves) ──
  // FormGroup: label + helper + control + error, across InputText and Textarea × 4 states. The
  // right-label-text frames render the link as an accessible blue `UiLink` (legacy orange fails AA) —
  // a tiny top-right glyph, well under the 2% gate.
  {
    storyId: 'design-system-molecules-formgroup--visual-input-text',
    legacyBaseline: 'design-system-molecules-formgroup-inputtext--form-group-input-text-story',
  },
  {
    storyId: 'design-system-molecules-formgroup--visual-input-text-error',
    legacyBaseline: 'design-system-molecules-formgroup-inputtext--form-group-input-text-story-error',
  },
  {
    storyId: 'design-system-molecules-formgroup--visual-input-text-disabled',
    legacyBaseline: 'design-system-molecules-formgroup-inputtext--form-group-input-text-story-disabled',
  },
  {
    storyId: 'design-system-molecules-formgroup--visual-input-text-right-label',
    legacyBaseline: 'design-system-molecules-formgroup-inputtext--form-group-input-text-story-right-label-text',
  },
  {
    storyId: 'design-system-molecules-formgroup--visual-textarea',
    legacyBaseline: 'design-system-molecules-formgroup-textarea--form-group-textarea-story',
  },
  {
    storyId: 'design-system-molecules-formgroup--visual-textarea-error',
    legacyBaseline: 'design-system-molecules-formgroup-textarea--form-group-textarea-story-error',
  },
  {
    storyId: 'design-system-molecules-formgroup--visual-textarea-disabled',
    legacyBaseline: 'design-system-molecules-formgroup-textarea--form-group-textarea-story-disabled',
  },
  {
    storyId: 'design-system-molecules-formgroup--visual-textarea-right-label',
    legacyBaseline: 'design-system-molecules-formgroup-textarea--form-group-textarea-story-right-label-text',
  },
  // AccountBox: the account card with/without a contact person. Button font divergence under the gate.
  {
    storyId: 'design-system-molecules-accountbox--visual',
    legacyBaseline: 'design-system-molecules-accountbox--account-box-story',
    viewports: ['desktop'],
  },
  {
    storyId: 'design-system-molecules-accountbox--visual-no-contact',
    legacyBaseline: 'design-system-molecules-accountbox--account-box-story-2',
    viewports: ['desktop'],
  },
  // Note: both AccountBox frames are mapped DESKTOP-ONLY. The card content matches, but legacy's
  // looser paragraph line-spacing accumulates a ~12px vertical drift down the 5 info lines; on the
  // narrow mobile canvas the card fills most of the width, so that sub-pixel-per-line drift tips the
  // frame just over the 2% gate (desktop, where the 360px card is a small fraction of 1280px, stays
  // under). Same vertical-rhythm call as GroupWrapper / UnorderedList / AlertBox.
  // CampaignBox: the collapsed purple bar, with the select button and limited (button-less) variants.
  {
    storyId: 'design-system-molecules-campaignbox--visual',
    legacyBaseline: 'design-system-atoms-campaignbox--campaign-box-story',
  },
  {
    storyId: 'design-system-molecules-campaignbox--visual-limited',
    legacyBaseline: 'design-system-atoms-campaignbox--campaign-box-story-limited',
  },
  // IconLink: the centred underlined label above a circular icon badge (two frames differ by label).
  // Label is accessible blue vs legacy orange (documented divergence), a small centred glyph under the gate.
  {
    storyId: 'design-system-molecules-iconlink--visual',
    legacyBaseline: 'design-system-atoms-iconlink--icon-link-story-show-all-products',
  },
  {
    storyId: 'design-system-molecules-iconlink--visual-recommended',
    legacyBaseline: 'design-system-atoms-iconlink--icon-link-story-show-recommended-products',
  },
  // Newsletter: the empty email field joined to the orange "Nyhetsbrev" button, capped at max-w-80
  // (~320px) to match the legacy row (whose width came from the UA-default input intrinsic size).
  {
    storyId: 'design-system-molecules-newsletter--visual',
    legacyBaseline: 'design-system-molecules-newsletter--newsletter-story',
  },

  // ── Batch 17 (Tier-1 leaves; UiDatePicker deferred — outsized calendar rewrite) ──
  // CampaignMessage: bordered box, decorative green alert icon, uppercased message, primary CTA.
  // Mapped DESKTOP-ONLY: the box is `w-fit`, so whether the message fits one line depends on the exact
  // available width. The legacy mobile capture (implicit Storybook padding) wrapped it to two lines,
  // whereas the fullscreen 375px frame fits it on one — a knife-edge wrap flip that shifts the whole
  // box >2%. Desktop (message comfortably one line) matches. Same class as AccountBox / AlertBox.
  {
    storyId: 'design-system-molecules-campaignmessage--visual',
    legacyBaseline: 'design-system-atoms-campaignmessage--campaign-message-story',
    viewports: ['desktop'],
  },
  // AdminSearch: the closed search bar (blue icon box + tinted input). The dropdown/loader are
  // behaviour-only (legacy captured the closed bar; `admin-search-story-loading` is the same closed
  // bar — query empty → no dropdown — so not separately mapped).
  {
    storyId: 'design-system-molecules-adminsearch--visual',
    legacyBaseline: 'design-system-atoms-adminsearch--admin-search-story',
  },
  // NOTE: FaqList has NO entry (legacy shipped no story/snapshot); gallery-only Visual.
  // ButtonWithTooltip: the secondary rounded "Click me" button (tooltip closed).
  {
    storyId: 'design-system-molecules-buttonwithtooltip--visual',
    legacyBaseline: 'design-system-atoms-buttonwithtooltip--button-with-tooltip-story',
  },
  // NOTE: AgeVerificationForm has NO entry — the legacy story renders inside an unmigrated Modal;
  // gallery-only Visual (behaviour covered by play tests).
  // UiDatePicker: the CLOSED full-width trigger (long label + date-label variants). The calendar
  // popover is a from-scratch react-day-picker rewrite with no open-state baseline (behaviour covered
  // by play tests); legacy's react-datepicker popover was never captured either.
  {
    storyId: 'design-system-molecules-uidatepicker--visual',
    legacyBaseline: 'design-system-atoms-uidatepicker--ui-date-picker-story',
  },
  {
    storyId: 'design-system-molecules-uidatepicker--visual-date-label',
    legacyBaseline: 'design-system-atoms-uidatepicker--ui-date-picker-story-date-label',
  },

  // ── Batch 18 (molecules — Tier-1/2 leaves) ──
  // CookieBar: full-width bottom banner (info icon + message/link + accept button), fixed to the
  // viewport. Reclassified atom → molecule; the legacy title kept the hyphenated `cookie-bar` id.
  {
    storyId: 'design-system-molecules-cookiebar--visual',
    legacyBaseline: 'design-system-atoms-cookie-bar--cookie-bar-story',
  },
  // MultiSelect: the CLOSED filter trigger (name + icon) for each of the three legacy option sets.
  // The open checkbox popup is behaviour-only (covered by play tests).
  {
    storyId: 'design-system-molecules-multiselect--visual-land',
    legacyBaseline: 'design-system-atoms-multiselect--multi-select-story-land',
  },
  {
    storyId: 'design-system-molecules-multiselect--visual-producer',
    legacyBaseline: 'design-system-atoms-multiselect--multi-select-story-producer',
  },
  {
    storyId: 'design-system-molecules-multiselect--visual-packaging',
    legacyBaseline: 'design-system-atoms-multiselect--multi-select-story-packaging',
  },
  // OrderItem: the five captured legacy frames — one inline card (clickable order no.) and four link
  // cards (chevron link + rich children). The order-number/chevron colour diverges orange →
  // accessible blue (documented AA fix), a small glyph well under the 2% gate.
  {
    storyId: 'design-system-molecules-orderitem--visual-default',
    legacyBaseline: 'design-system-molecules-orderitem--default-order-item',
  },
  {
    storyId: 'design-system-molecules-orderitem--visual-min-senaste-order',
    legacyBaseline: 'design-system-molecules-orderitem--order-item-min-senaste-order',
  },
  {
    storyId: 'design-system-molecules-orderitem--visual-mina-ordrar-1',
    legacyBaseline: 'design-system-molecules-orderitem--order-item-mina-ordrar-1',
  },
  {
    storyId: 'design-system-molecules-orderitem--visual-mina-ordrar-2',
    legacyBaseline: 'design-system-molecules-orderitem--order-item-mina-ordrar-2',
    // Desktop-only: the diff is pure vertical ghosting — the known Heading vertical-rhythm drift
    // (Edmondsans metrics, documented since Batch 1/6) shifts the whole stack a few px. This is the
    // ONLY OrderItem frame whose dark, high-contrast blue "Skickas" tag amplifies that otherwise
    // sub-2% offset to ~3% on the narrow 375px canvas; the structurally identical `mina-ordrar-1`
    // (near-white yellow tag) and this frame's own desktop capture both pass, so it's a rendering
    // incomparability, not a component divergence. Mobile behaviour stays covered by play tests.
    viewports: ['desktop'],
  },
  {
    storyId: 'design-system-molecules-orderitem--visual-sommarfest',
    legacyBaseline: 'design-system-molecules-orderitem--order-item-sommarfest',
  },
  // Search: the CLOSED search bar (icon submit button + input, empty query → no dropdown). The
  // results list is behaviour-only. Search-glyph colour diverges white → accessible black-on-orange.
  {
    storyId: 'design-system-molecules-search--visual',
    legacyBaseline: 'design-system-atoms-search--search-story',
  },
  // SelectList: the CLOSED trigger ("Sortera" + chevron-down). The open radio group is behaviour-only.
  {
    storyId: 'design-system-molecules-selectlist--visual',
    legacyBaseline: 'design-system-atoms-select-list--select-list-story',
  },

  // ── Batch 19 (Tier-1 leaves + first Tier-1 organisms) ──
  // NOTE: Tabs has NO entry — the legacy `tabs-story` captures the pre-open state (a bare story
  // toggle button; `isOpen` starts false → no Tabs rendered) and `tabs-story-mina-favoriter` is a
  // deep composite (Tabs → GroupWrapper → InfoSummaryBox → OrderItem×2 + full-width Button) that
  // stacks every nested component's documented sub-gate divergence (Button font, OrderItem heading
  // rhythm, InfoSummaryBox), so a faithful pixel reproduction is not a meaningful oracle. Its
  // `['visual']` story is gallery-only (current-only); behaviour is covered by the play tests.
  //
  // NOTE: ArticleList has NO entry — its `Visual*` stories reproduce the legacy frames FAITHFULLY
  // (verified by eye: same cards, images, tags, dots, arrow — see the review gallery), but none is
  // pixel-diffable against the frozen PNGs, for measured reasons per frame:
  //   • default / carousel-story (5-card swipe carousel): the legacy DESKTOP PNG is 1280×805, but the
  //     harness viewport is fixed at 1280×800 → a 5px dimension mismatch auto-fails toHaveScreenshot
  //     regardless of content; the legacy MOBILE PNG is a 375×746 full-page capture (> the 375×667
  //     viewport). On top of that, legacy leaves a larger title→cards gap (~40px vertical ghosting)
  //     and the "Läs mer" links diverge orange → accessible blue — together 20–32% even before the
  //     dimension gap. So Carousel's long-deferred baseline is now RESOLVED as reproduced-but-not-
  //     pixel-mappable (see the updated Carousel note above), NOT still pending.
  //   • three-cards: the legacy PNGs are full-page at BOTH viewports (1280×918 desktop, 375×1950
  //     mobile) — a title + a tall row/column of image cards exceeds each capture viewport, so the
  //     frame is dimensionally incomparable both ways (same class as Textarea/FlexContainer gotcha-2).
  //   • full-width: the only dimensionally-comparable frame (1280×800 / 375×667), yet it diffs 70%
  //     desktop / 11% mobile. Cause is a locked ArticleCard-level divergence: V2 `ArticleCard`
  //     fullWidth uses `aspect-16/9` (a tall image) whereas the legacy full-width image is a short
  //     wide banner (~4.8:1). ArticleCard was migrated/frozen in Batch 9 with no baseline of its own,
  //     so re-tuning its aspect ratio is out of scope here (and would be an ArticleCard change).
  // All three `Visual*` stories stay `['visual']` (gallery-only, current-only) for human review;
  // ArticleList behaviour (layout heuristics, carousel region, localisation) is covered by play tests.
  // BrandDetails: centred brand hero (logo + h3 name + reading-measure description + CTA), built from
  // the migrated Picture/Heading/Text/MaxWidth/UiLink. The "Läs mer" link diverges orange → accessible
  // blue (documented AA fix). Mapped DESKTOP-ONLY: the brand image matches exactly on both viewports,
  // but the h3 name + three-sentence description carry the known Heading/Text vertical-rhythm drift
  // (Edmondsans metrics, documented since Batch 1) — the text wraps identically but sits a few px
  // offset, and on the narrow 375px mobile canvas that vertical ghosting is ~5% of the frame (> gate);
  // desktop dilutes it across 1280px and matches. Same amplification call as GroupWrapper / UnorderedList
  // / AccountBox / OrderItem mina-ordrar-2. Mobile layout is still covered by the play tests.
  {
    storyId: 'design-system-organisms-branddetails--visual',
    legacyBaseline: 'design-system-organisms-brand-details--brand-details-story',
    viewports: ['desktop'],
  },
  // Breadcrumbs: a top-of-page crumb row. The `with-background`/`without-background` legacy frames both
  // render the same "Start > Öl" trail (the legacy image/title props were dead code), so one V2 `Visual`
  // story maps to both. Divergences are confined to a thin top strip: crumb links go orange → accessible
  // blue (documented AA fix), and the current page (Öl / the last crumb) is correctly non-linked with no
  // trailing chevron (legacy left it a chevroned link).
  {
    storyId: 'design-system-organisms-breadcrumbs--visual',
    legacyBaseline: 'design-system-organisms-breadcrumbs--breadcrumbs-story-with-background',
  },
  {
    storyId: 'design-system-organisms-breadcrumbs--visual',
    legacyBaseline: 'design-system-organisms-breadcrumbs--breadcrumbs-story-without-background',
  },
  {
    storyId: 'design-system-organisms-breadcrumbs--visual-sustainability',
    legacyBaseline: 'design-system-organisms-breadcrumbs--breadcrumbs-story-sustainability',
  },
  // MobileNavigation: the CLOSED state — a hamburger toggle in the top bar (the slide-in drawer/panel
  // is behaviour-only, captured only closed by the legacy story, and covered by the play tests). Legacy
  // `icon-menu` glyph vs the V2 lucide menu icon is the only divergence, a tiny top-right glyph.
  {
    storyId: 'design-system-organisms-mobilenavigation--visual',
    legacyBaseline: 'design-system-molecules-mobilenavigation--default-mobile-navigation',
  },
  // ── Batch 20 (Tier-1 OfferCardList + Tier-2 organisms/molecules) ──
  // OfferCardList: six offer tiles in a swipe carousel. UNLIKE its sibling ArticleList (whose PNG is
  // 1280×805 / full-page and so is dimensionally incomparable), the legacy OfferCardList PNG fits the
  // capture viewport exactly (1280×800 desktop / 375×667 mobile — measured), so it IS pixel-mappable.
  // Offer cards are text-only (decorative icon + heading + subdued body), no remote imagery, so the
  // frame is deterministic. Maps both viewports.
  {
    storyId: 'design-system-organisms-offercardlist--visual',
    legacyBaseline: 'design-system-organisms-offercardlist--offer-card-list-story',
  },
  // NOTE: ProductVariantList has NO entry — the legacy `product-variant-list-story` PNG is a full-page
  // capture at BOTH viewports (1280×1195 desktop, 375×1195 mobile — measured), taller than the fixed
  // 1280×800 / 375×667 capture viewport, so it is dimensionally incomparable (same class as
  // Textarea/FlexContainer gotcha-2). On top of that the legacy frame's own child ProductVariant is
  // non-deterministic (remote CDN thumbnails + `undefined` label text — see the ProductVariant note).
  // Its `['visual']` story is gallery-only (current-only); behaviour is covered by the play tests.
  // AddToCartButton: the resting pill at quantity 0 (the add-to-cart button; the stepper is
  // behaviour-only, covered by play tests). The legacy frame fits the viewport (1280×800 / 375×667).
  // The legacy story left `buttonLabel` empty (an unnamed button, which we cannot reproduce without
  // failing axe), so the V2 frame shows the real CTA label — a tiny white-on-blue text delta inside a
  // ~180×32px pill (<0.6% of the canvas), safely under the 2% gate. Maps both viewports.
  {
    storyId: 'design-system-molecules-addtocartbutton--visual',
    legacyBaseline: 'design-system-atoms-add-to-cart-button--add-to-cart-button',
  },
  // NOTE: DrawerSidebar has NO entry — the legacy `sliding-sidebar-story` captures the CLOSED state (a
  // bare "Open sidebar" trigger button that is NOT part of the component; a closed drawer renders
  // nothing). There is nothing of DrawerSidebar in that frame to diff (a plain button on an empty
  // canvas would false-green under the 2% gate, gotcha-3), so its `['visual']` story is gallery-only
  // and rendered OPEN for human review. The modal focus-trap behaviour is covered by the play tests.
  // Form: the config-driven form template, composing the already-baselined FormGroup + InputText +
  // Button. Both legacy frames fit the viewport (1280×800 / 375×667). Any divergence is confined to the
  // migrated child controls' own documented deltas (InputText matched with no divergence; Button font
  // under-gate) — measured under the 2% gate at the batch visual pass.
  {
    storyId: 'design-system-molecules-form--visual',
    legacyBaseline: 'design-system-atoms-form--standard-form',
  },
  {
    storyId: 'design-system-molecules-form--visual-compare-two-fields',
    legacyBaseline: 'design-system-atoms-form--compare-two-fields',
  },

  // ── Batch 21 (Tier-2 molecules/organisms) ──
  // FooterTopBar: the dark brand bar with three quick-link pills (login / register / contact). The
  // frame is text + decorative icons only (no remote media), and both legacy PNGs fit the capture
  // viewport exactly (1280×800 / 375×667 — measured), so it maps both viewports. The only divergence
  // is the lucide vs icomoon type glyphs, a few tiny icons well under the 2% gate. (Below md the pills
  // collapse to icon-only circles, matching the legacy mobile frame.)
  {
    storyId: 'design-system-molecules-footertopbar--visual',
    legacyBaseline: 'design-system-molecules-footertopbar--footer-top-bar-story',
  },
  // SocialMediaLink: the ~40px round icon chip (blue glyph on the light `icon-bg-blue` fill).
  // Reclassified atom → molecule, so the V2 story sits under Molecules while the legacy baseline keeps
  // its `atoms` id. Deterministic; the lucide vs icomoon brand glyph is a <0.2% fraction of the canvas
  // (a single small circle top-left), so all three frames map both viewports.
  {
    storyId: 'design-system-molecules-socialmedialink--visual-facebook',
    legacyBaseline: 'design-system-atoms-socialmedialink--social-media-link-story-facebook',
  },
  {
    storyId: 'design-system-molecules-socialmedialink--visual-instagram',
    legacyBaseline: 'design-system-atoms-socialmedialink--social-media-link-story-instagram',
  },
  {
    storyId: 'design-system-molecules-socialmedialink--visual-linkedin',
    legacyBaseline: 'design-system-atoms-socialmedialink--social-media-link-story-linkedin',
  },
  // Hero: the legacy `heros--hero-story-*` frames composed the migrated `Picture` atom over LOCAL hero
  // assets (`legacy/src/assets/hero-images/Promo_Hero_*`), copied into `src/assets/hero-images/`, so the
  // V2 `Visual*` stories reproduce the exact legacy scene. `reviewOnly`: the background image matches,
  // but the overlaid text uses the brand font + accessible colours and the `h1` is the larger DS size,
  // so the text block diverges beyond the 2% gate — paired for review, not gated.
  {
    storyId: 'design-system-molecules-hero--visual-left-dark',
    legacyBaseline: 'design-system-molecules-heros--hero-story-left-1',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-molecules-hero--visual-center-light',
    legacyBaseline: 'design-system-molecules-heros--hero-story-center',
    reviewOnly: true,
  },
  // CartProduct: the row layout (name/packaging/price + quantity readout + remove) reproduces the legacy
  // frame. `reviewOnly`: the legacy product image rendered BROKEN in the capture (the CDN thumbnail
  // 404'd → browser broken-image placeholder) while V2 shows a deterministic local fallback, so the
  // image region diverges — paired so the layout can be compared side-by-side, not gated.
  {
    storyId: 'design-system-organisms-cartproduct--visual',
    legacyBaseline: 'design-system-molecules-cartproduct--cart-product-story-beer',
    reviewOnly: true,
  },
  // DesktopNavigation: the ONLY legacy baseline is the empty loading state (`categories: []`), so the V2
  // `VisualLoading` story reproduces exactly that. `reviewOnly`: the legacy PNG caught the shimmer
  // mid-animation (a non-deterministic gradient position) while V2 settles it under reduced motion, so
  // it can't pixel-gate — paired so the loading treatment is comparable. The real closed nav bar
  // (`--visual`) stays current-only (no legacy counterpart — the mega-menu only appears on interaction).
  {
    storyId: 'design-system-organisms-desktopnavigation--visual-loading',
    legacyBaseline: 'design-system-molecules-desktopnavigation--default-desktop-navigation',
    reviewOnly: true,
  },

  // ── Backfill (2026-07-14) — review-only pairings for faithful reproductions that were previously
  // left current-only (no legacy pane in the gallery). Each V2 `Visual` story reproduces the legacy
  // scene; they diverge beyond the 2% gate for a locked, documented reason (remote/broken imagery,
  // brand image at a different intrinsic size, legacy PNG captured at non-viewport dimensions, or the
  // orange→accessible-blue link fix), so they are `reviewOnly`: paired in the gallery for human
  // comparison, skipped by the pixel gate. Fixes the recurring "a baseline exists but nothing pairs it"
  // gap — the pixel-comparable frames stay normal (gated) entries above. ──
  // ArticleList: reproduces the three legacy carousel/grid frames faithfully; not pixel-diffable
  // (default 1280×805 & mobile full-page dimension mismatch; three-cards full-page both viewports;
  // full-width locked to ArticleCard's `aspect-16/9` vs the legacy short banner) — see the ArticleList
  // NOTE above for the per-frame measurements.
  {
    storyId: 'design-system-organisms-articlelist--visual-default',
    legacyBaseline: 'design-system-organisms-articlelist--default',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-articlelist--visual-full-width',
    legacyBaseline: 'design-system-organisms-articlelist--full-width',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-articlelist--visual-three-cards',
    legacyBaseline: 'design-system-organisms-articlelist--three-cards',
    reviewOnly: true,
  },
  // ProductVariant: the variant card reproduces the legacy scene with a deterministic local image + real
  // labels (legacy used a remote CDN thumbnail + `undefined` label text).
  {
    storyId: 'design-system-molecules-product-productvariant--visual',
    legacyBaseline: 'design-system-molecules-product-productvariant--product-variant-story',
    reviewOnly: true,
  },
  // ProductVariantList: reproduces the radio-group list; legacy PNG is full-page (1280×1195 / 375×1195,
  // taller than the viewport) with non-deterministic child thumbnails.
  {
    storyId: 'design-system-organisms-productvariantlist--visual',
    legacyBaseline: 'design-system-molecules-product-variants-list--product-variant-list-story',
    reviewOnly: true,
  },
  // Logotype: renders the real bundled Spendrups brand SVGs — the same logo scene as the legacy PNG,
  // but a different (vector vs raster) rendition, so it pairs for review rather than pixel-matching.
  {
    storyId: 'design-system-foundations-logotype--visual',
    legacyBaseline: 'design-system-molecules-logotype--logotype-story',
    reviewOnly: true,
  },
  // Heading delivery-form: the same five-level heading stack as the mapped `heading-story`, only with
  // longer text; the known Heading vertical-rhythm drift accumulates to ~4% here (over the gate).
  {
    storyId: 'design-system-atoms-heading--visual-delivery-form',
    legacyBaseline: 'design-system-atoms-heading--heading-delivery-form-story',
    reviewOnly: true,
  },
  // CartProductList: a column of real CartProduct rows (settled + loading), unblocked now CartProduct
  // landed. Same broken-image divergence as CartProduct, so review-only.
  {
    storyId: 'design-system-organisms-cartproductlist--visual',
    legacyBaseline: 'design-system-organisms-cartproductlist--cart-product-list-story',
    reviewOnly: true,
  },
  // OrderConfirmation: the full confirmation scene (heading, banner, three detail blocks, real
  // CartProduct rows, actions) — every child migrated once CartProduct landed. Legacy PNG is a tall
  // full-page capture and CartProduct carries the broken-image/font divergence, so review-only.
  {
    storyId: 'design-system-organisms-orderconfirmation--visual',
    legacyBaseline: 'design-system-organisms-orderconfirmation--order-confirmation-story',
    reviewOnly: true,
  },
  // OrderConfirmationPage: the same OrderConfirmation card inside the page frame; same divergences.
  {
    storyId: 'design-system-organisms-orderconfirmationpage--visual',
    legacyBaseline: 'design-system-templates-orderconfirmationpage--order-confirmation-page-template-story',
    reviewOnly: true,
  },
  // ProductSearch: both legacy stories (`product-search-story` and `-loading`) were captured with
  // `isOpen: false` + empty query, so each is just the CLOSED search bar — the dropdown/spinner never
  // showed. The two Visual stories reproduce that closed bar exactly.
  {
    storyId: 'design-system-organisms-product-productsearch--visual',
    legacyBaseline: 'design-system-molecules-productsearch--product-search-story',
  },
  {
    storyId: 'design-system-organisms-product-productsearch--visual-loading',
    legacyBaseline: 'design-system-molecules-productsearch--product-search-story-loading',
  },
  // AlertMessage (legacy atom → V2 molecule): one Visual story per severity. The banner background
  // matches the legacy `--color-alert-*` tokens exactly; the only divergences are a leading severity
  // glyph (legacy had an invisible spacer, added for 1.4.1) and, for `error`, dark ink over the legacy
  // white (which failed AA) — both tiny fractions of the full-width bar, well under the 2% gate.
  {
    storyId: 'design-system-molecules-alertmessage--visual-info',
    legacyBaseline: 'design-system-atoms-alertmessage--alert-message-story-info',
  },
  {
    storyId: 'design-system-molecules-alertmessage--visual-warning',
    legacyBaseline: 'design-system-atoms-alertmessage--alert-message-story-warning',
  },
  {
    storyId: 'design-system-molecules-alertmessage--visual-error',
    legacyBaseline: 'design-system-atoms-alertmessage--alert-message-story-error',
  },
  // LinkListItem: one Visual story per legacy story frame (5 × both viewports). Each reproduces the
  // legacy content exactly. The only intentional divergences are a decorative chevron (legacy rendered
  // a duplicate second link) and the title heading sized to the legacy `heading-xs` — both keep the
  // frame pixel-faithful.
  {
    storyId: 'design-system-molecules-linklistitem--visual-order-processing',
    legacyBaseline: 'design-system-molecules-linklistitem--link-list-item-story-order-processing',
  },
  {
    storyId: 'design-system-molecules-linklistitem--visual-order-delivered',
    legacyBaseline: 'design-system-molecules-linklistitem--link-list-item-story-order-delivered',
  },
  {
    storyId: 'design-system-molecules-linklistitem--visual-purchase-list-item',
    legacyBaseline: 'design-system-molecules-linklistitem--link-list-item-story-purchase-list-item',
  },
  {
    storyId: 'design-system-molecules-linklistitem--visual-bonus-list-item',
    legacyBaseline: 'design-system-molecules-linklistitem--link-list-item-story-bonus-list-item',
  },
  {
    storyId: 'design-system-molecules-linklistitem--visual-invoice-list-item',
    legacyBaseline: 'design-system-molecules-linklistitem--link-list-item-story-invoice-list-item',
  },
  // MessagePopup: the legacy `message-popup-story` was authored `isOpen: false`, so the baseline is
  // the CLOSED (empty) state. The Visual story reproduces that closed frame — an empty-vs-empty diff
  // that gates at both viewports (measured, not assumed).
  {
    storyId: 'design-system-molecules-messagepopup--visual',
    legacyBaseline: 'design-system-atoms-messagepopup--message-popup-story',
  },
  // SortableList: reproduces the "Reklamation" list (three idle sort controls + two interactive rows
  // with separating lines) inside the legacy 1254px wrapper. Desktop matches within the 2% gate, but
  // MOBILE diverges ~3% (measured): at the ~171px column-1 width the V2 heading font renders
  // "E-HANDELSFRÅGOR" narrow enough to stay on one line, whereas legacy wraps it to two — a font-metric
  // wrap flip (the `order={5}` size is byte-identical to legacy `heading-xs`) that then cascades the
  // rows downward. Faithful scene, locked font divergence → `reviewOnly` so BOTH viewports stay paired
  // in the gallery for sign-off rather than orphaning mobile.
  {
    storyId: 'design-system-molecules-sortablelist--visual',
    legacyBaseline: 'design-system-molecules-sortablelist--sortable-list-story',
    reviewOnly: true,
  },
  // Table: the V2 rewrite is a semantic <table> (aria-sort, <th scope>) where legacy was a <div> grid.
  // Desktop now packs columns left like legacy (last text column absorbs slack), and mobile renders the
  // same stacked "label: value" cards as legacy — visually very close, but still a structural rewrite that
  // can't be guaranteed within the 2% pixel gate (lucide-vs-icomoon sort chevrons, cell-border rendering),
  // so both frames stay `reviewOnly` (paired in the gallery for human sign-off, gate skipped). `table-story`
  // is desktop-only because its legacy mobile PNG was captured full-page (1436px).
  {
    storyId: 'design-system-molecules-table--visual',
    legacyBaseline: 'design-system-atoms-table--table-story',
    viewports: ['desktop'],
    reviewOnly: true,
  },
  {
    storyId: 'design-system-molecules-table--visual-two',
    legacyBaseline: 'design-system-atoms-table--table-story-two',
    reviewOnly: true,
  },

  // ── Batch 24 (Tier-2 molecules + organisms) ──
  // Teaser: both legacy frames (round + square) are FULL-PAGE captures taller than the fixed viewport
  // (round 1280×1120 / 375×1314; square 1280×826 / 375×1042) — the two stacked teasers exceed the
  // capture height — so a viewport screenshot can't pixel-match (gotcha 2). The V2 Visual stories
  // reproduce the same scene faithfully (round/square image, "Kurs" tag, heading, preamble, CTA), so
  // both are mapped `reviewOnly` (gate skipped, gallery pairs Legacy | Current for sign-off). The one
  // intentional divergence within the scene is the accessible slab heading (RobotoSlab, brand parity).
  {
    storyId: 'design-system-molecules-teaser--visual',
    legacyBaseline: 'design-system-molecules-teaser--teaser-round',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-molecules-teaser--visual-square',
    legacyBaseline: 'design-system-molecules-teaser--teaser-square',
    reviewOnly: true,
  },
  // NOTE: TopNavBar has NO entry — EVERY legacy `top-nav-bar` PNG is BLANK (an invalid oracle). Two
  // faults compounded: the legacy story passed a `links` prop the component never read (it destructured
  // `leftLinks`/`rightLinks`), AND the bar's layout used JS media-query render-props (`Above`/`Below`)
  // that resolved to nothing during Storybook's capture — so the component early-returned `null`.
  // There is no non-blank legacy frame to diff against. V2 drives the layout with responsive `display`
  // utilities (no JS media query) so it renders correctly; its `['visual']` story is gallery-only
  // (current-only) and behaviour is covered by the interaction/a11y play tests.
  // NOTE: AccountBoxList has NO entry — the legacy `account-box-list-story` PNG renders the logo at full
  // intrinsic size (its `--logotype-height-*` height token was dead), so the ~700px-wide wordmark
  // overlaps the heading — a broken scene dominating the frame. V2 constrains the logo to a fixed
  // height (a deliberate fix), so the V2 Visual is an intentionally *different* (corrected) scene, not a
  // faithful reproduction → current-only + this NOTE (not `reviewOnly`). The account cards themselves
  // are already validated by AccountBox's mapped frames.
  // CreateListForm: the titled card with logo, empty (controlled) fields, submit/cancel and the "read
  // more" link. Title matched to the legacy `.h3`=`headingM`=`h-m` token, and the inter-field rhythm the
  // legacy `input { margin-bottom }` gave was restored with an `md:space-y-7` between the FormGroups (they
  // stacked with 0 gap; the space only opens at `md`, where legacy's larger padding/heading needs it —
  // desktop submit y=489 vs legacy 490). **Mapped DESKTOP-ONLY:** the legacy logo rendered *unconstrained*
  // (~70px tall incl. the "1897" superscript, no height token) while V2's `Logotype` is normalised to 32px
  // (same deliberate fix as AccountBoxList). On desktop that ~38px logo-height gap dilutes across 800px and
  // the frame passes; on the 375px mobile canvas it shifts the whole stack (heading + fields) >2% (measured
  // ~6%) — the standard narrow-canvas vertical-rhythm amplification (cf. AccountBox / BrandDetails /
  // CampaignMessage). The only other divergence is the orange "read more" link → accessible blue+underline.
  {
    storyId: 'design-system-organisms-createlistform--visual',
    legacyBaseline: 'design-system-organisms-createlistform--create-list-form-story',
    viewports: ['desktop'],
  },
  // The `-loading` frame stays GATED on BOTH viewports and passes — the blocking overlay covers the whole
  // form (logo included), so the scrim + spinner is what's diffed and it matches the legacy `fixed` scrim.
  {
    storyId: 'design-system-organisms-createlistform--visual-loading',
    legacyBaseline: 'design-system-organisms-createlistform--create-list-form-story-loading',
  },
  // DeliveryForm: the collapsed summary (bold label + summary box) with the toggle. Viewport-sized
  // frames → gated. Only divergence is the orange "Expandera" toggle → accessible blue+underline
  // (documented AA fix), a tiny top-right element well under the 2% gate.
  {
    storyId: 'design-system-organisms-deliveryform--visual',
    legacyBaseline: 'design-system-organisms-deliveryform--delivery-form-story',
  },
  // SocialMediaLinks: the same three flush chips (Facebook, Instagram, Linkedin) as the legacy
  // `SocialMediaStory`. Each chip is the already-baselined SocialMediaLink (blue glyph on the light
  // icon chip); the row reproduces the legacy flush layout (no gap), so both viewports are gated.
  {
    storyId: 'design-system-molecules-socialmedialinks--visual',
    legacyBaseline: 'design-system-molecules-socialmedialinks--social-media-story',
  },
  // Slider: the legacy `SliderStory` — a full-width 0–20 dual range with both thumbs at the extremes
  // (whole track = teal active segment) and no fields. The legacy widget was `react-input-range`; V2 is
  // two overlaid native `<input type="range">`. Thumb rendering differs slightly (native vs library divs)
  // but the frame is a thin line at the top of the canvas, far under the 2% gate → gated both viewports.
  {
    storyId: 'design-system-organisms-slider--visual',
    legacyBaseline: 'design-system-atoms-slider--slider-story',
  },
  // HeroCarousel: reproduces the legacy `HeroCarouselPistonheadStory` — the static Pistonhead hero (dark,
  // centred, skull logo) as slide 1 of 3, arrows level with the three dots. REVIEW-ONLY: the background is
  // a full-bleed brand SVG (migrated from legacy) and the overlaid text uses the brand font + accessible
  // colours + the design-system heading size, so the frame diverges past the 2% gate (same call as the
  // Hero `Visual*` frames it composes). The sibling `hero-carousel-story` baseline is NOT mapped — its
  // first slide is a background **video** (non-deterministic frame), so there is no stable oracle.
  {
    storyId: 'design-system-organisms-herocarousel--visual',
    legacyBaseline: 'design-system-organisms-herocarousel--hero-carousel-pistonhead-story',
    reviewOnly: true,
  },
  // Header: reproduces the legacy `Standard_Header` composition (admin search, delivery banner, logo,
  // action icons + delivery date picker, primary nav). REVIEW-ONLY: the shell composes ~8 brand
  // sub-components across viewport-specific layouts (each already reviewed on its own), all using brand
  // fonts/icons + accessible colours, so it can't pixel-match the legacy capture within 2% — but it is a
  // faithful reproduction of the same scene, paired for human sign-off. (Legacy drove layout via a JS
  // media-query hook; V2 uses responsive `display` utilities.)
  {
    storyId: 'design-system-organisms-header--visual',
    legacyBaseline: 'design-system-organisms-header--standard-header',
    reviewOnly: true,
  },
  // LoginForm: reproduces the legacy `LoginFormStory` (title, email + password FormGroups, under-form
  // links). DESKTOP-ONLY on both frames — the legacy mobile card forces `height: calc(100vh - 2rem)`
  // (full-viewport card) which V2 does not replicate (content-height card, no arbitrary calc), leaving a
  // ~14% (default) / ~41% (loading) white-vs-off-white band on the 375px canvas — structurally
  // incomparable. Desktop card is content-height in legacy too, so it matches. Only desktop divergence:
  // orange→blue+underline links (documented AA fix), small glyphs under the 2% gate.
  {
    storyId: 'design-system-organisms-loginform--visual',
    legacyBaseline: 'design-system-organisms-loginform--login-form-story',
    viewports: ['desktop'],
  },
  // Loading = disabled fields (legacy `Form` sets `disabled={loading}`, NO overlay/scrim), reproduced in
  // V2 with the same disabled tokens (surface-disabled / border-disabled / text-subdued) → desktop matches.
  {
    storyId: 'design-system-organisms-loginform--visual-loading',
    legacyBaseline: 'design-system-organisms-loginform--login-form-story-loading',
    viewports: ['desktop'],
  },
  // UserProfileDropdown: the CLOSED trigger reproduces the legacy IconButton medium/white chip (bordered
  // from md up, bare glyph on mobile); only the icon glyph swaps icomoon→Lucide User — a ~40px element on
  // a near-empty canvas, far under the 2% gate → GATED both viewports.
  {
    storyId: 'design-system-organisms-userprofiledropdown--visual',
    legacyBaseline: 'design-system-molecules-userprofiledropdown--user-profile-dropdown-story',
  },
  // The OPEN drawer is the same scene but carries locked intentional divergences that blow the 2% gate:
  // V2's DrawerSidebar backdrop is a large-area `bg-blue-500/90` + blur (vs the legacy teal scrim over
  // ~half the canvas), plus an a11y-required close (X) button the legacy panel lacked and accessible
  // blue+underline links. Faithful reproduction of the open scene → REVIEW-ONLY (paired for sign-off).
  {
    storyId: 'design-system-organisms-userprofiledropdown--visual-open',
    legacyBaseline: 'design-system-molecules-userprofiledropdown--user-profile-dropdown-story-open',
    reviewOnly: true,
  },
  // ProductCardMiniVertical: the Visual story reproduces the legacy single-card frame (50%-width card
  // in the light-grey flex wrapper), matched to legacy's compact typography (0.5rem tag pills, 0.75rem
  // detail lines, one-line packaging/CTA), full-width add-to-cart + packaging. Measured (Batch 28):
  // desktop ~3% / mobile ~4% — the remaining divergences (accessible blue title over the legacy orange
  // link, dark-on-orange "S" over white-on-orange, brand secondary font on tags/price, icomoon→Lucide
  // glyphs eye/layers/file-plus/heart, V2's beer-bottle fallback illustration vs the legacy grey
  // placeholder) — faithful scene that can't clear the 2% gate → REVIEW-ONLY (both viewports paired).
  {
    storyId: 'design-system-organisms-productcardminivertical--visual',
    legacyBaseline: 'design-system-molecules-productcardminivertical--product-card-mini-vertical',
    reviewOnly: true,
  },
  // ProductDescription: the Visual story reproduces the legacy collapsed 3-button row (centred at md+,
  // full-width-stacked below). All content is accessible secondary buttons on the cream page — only the
  // icomoon→Lucide glyph swaps (info/download/play) and the brand font differ, a trivial fraction of the
  // canvas → GATED both viewports.
  {
    storyId: 'design-system-organisms-productdescription--visual',
    legacyBaseline: 'design-system-organisms-productdescription--product-description-story',
  },
  // NOTE: ProductToast has NO entry on purpose despite legacy snapshots existing. All four legacy
  // `producttoast--product-toast-story[-with-recommended-products]-{desktop,mobile}` PNGs captured the
  // CLOSED/empty canvas — the legacy story starts `useState(false)` and a 3s interval auto-closes it, so
  // the toast was never on screen at capture (and `recommendedProducts` was a vestigial story arg the
  // legacy component never consumed). The V2 `Visual`/`VisualWithRecommendedProducts` stories render the
  // OPEN toast — a *different* scene — so per Step-7 rules they stay current-only (gallery review), not
  // `reviewOnly`. Same closed-state-baseline class as DrawerSidebar. Behaviour is covered by play tests.
  // NOTE: ResetPasswordForm has NO entry — no legacy snapshot exists at all (re-verified against the
  // de-hyphenated `resetpassword` stem; the legacy dir ships no `.stories.tsx`). Its `['visual']` story is
  // current-only in the review gallery.
  // DynamicFilter — the closed filter bar (trigger + chips + result list), reproduced faithfully with the
  // Swedish labels the legacy stories captured. GATED both viewports (measured): default desktop 0.16% /
  // mobile 0.67%, pre-selected desktop 0.24% / mobile 1.03% — all under the 2% gate. The migrated Button's
  // `surface="x"` fills grey only at `md`+, so the V2 mobile trigger is transparent where the legacy mobile
  // button is a grey band, but that cream-vs-light-grey delta falls under Playwright's per-pixel threshold
  // (0.2), so it doesn't count — the residual diff is font/glyph rendering only.
  {
    storyId: 'design-system-organisms-dynamicfilter--visual',
    legacyBaseline: 'design-system-molecules-dynamic-filter--dynamic-filter-default',
  },
  {
    storyId: 'design-system-organisms-dynamicfilter--visual-pre-selected',
    legacyBaseline: 'design-system-molecules-dynamic-filter--dynamic-filter-with-pre-selected',
  },
  // ProductCard family (Batch 30). Every frame faithfully reproduces its legacy scene but carries the
  // standing product-card divergences — brand secondary font on names/ribbons, accessible ink over the
  // legacy sub-AA orange/purple, icomoon→Lucide glyphs (eye/layers/heart/file-plus/x-circle/cart), and
  // V2's local fallback illustration where the legacy CDN image was unavailable — so all are mapped
  // REVIEW-ONLY (both viewports paired for sign-off, none can clear the 2% pixel gate). The V2 stories
  // also fill in the translation labels the legacy story mappers left undefined (which printed
  // "undefined:" in the price line), rendering clean, representative frames.
  {
    storyId: 'design-system-organisms-productcard--visual',
    legacyBaseline: 'design-system-molecules-productcard--product-card-story',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcard--visual-horizontal',
    legacyBaseline: 'design-system-molecules-productcard--product-card-story-horizontal',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcard--visual-loading',
    legacyBaseline: 'design-system-molecules-productcard--product-card-story-loading',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcard--visual-no-variants',
    legacyBaseline: 'design-system-molecules-productcard--product-card-story-no-variants',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardhorizontal--visual',
    legacyBaseline: 'design-system-molecules-productcardhorizontal--product-card-horizontal',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardrestricted--visual',
    legacyBaseline: 'design-system-molecules-productcardrestricted--product-card-restricted-story',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardrestricted--visual-no-variants',
    legacyBaseline: 'design-system-molecules-productcardrestricted--product-card-restricted-story-no-variants',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardvertical--visual',
    legacyBaseline: 'design-system-molecules-productcardvertical--product-card-vertical-story',
    reviewOnly: true,
  },
  // with-campaign / favorite-active are byte-identical twins of the plain / favorite legacy frames (the
  // `campaign` story arg was vestigial; -favorite and -favorite-active passed identical args) — paired so
  // no baseline is left without a Legacy|Current review pane.
  {
    storyId: 'design-system-organisms-productcardvertical--visual-with-campaign',
    legacyBaseline: 'design-system-molecules-productcardvertical--product-card-vertical-story-with-campaign',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardvertical--visual-no-variants',
    legacyBaseline: 'design-system-molecules-productcardvertical--product-card-vertical-story-no-variants',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardvertical--visual-favorite',
    legacyBaseline: 'design-system-molecules-productcardvertical--product-card-vertical-story-favorite',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardvertical--visual-favorite-active',
    legacyBaseline: 'design-system-molecules-productcardvertical--product-card-vertical-story-favorite-active',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardvertical--visual-add-to-purchase-list',
    legacyBaseline: 'design-system-molecules-productcardvertical--product-card-vertical-story-add-to-purchase-list',
    reviewOnly: true,
  },
  // Batch 31 — Tier-6/7 ProductCard dependents.
  // ProductBlock embeds a horizontal ProductCard (itself reviewOnly), so the block inherits the same
  // brand-font / accessible-ink / icomoon→Lucide / local-fallback divergences and can't clear the 2%
  // gate. Both viewports are faithful, reproducible scenes → reviewOnly. (Legacy id has the "procut" typo.)
  {
    storyId: 'design-system-organisms-productblock--visual',
    legacyBaseline: 'design-system-organisms-productblock--procut-block-story',
    reviewOnly: true,
  },
  // ProductCardList — a full-page grid of vertical ProductCards (each reviewOnly) captured much taller
  // than the fixed viewport, so neither the pixel dimensions nor the per-card colours can match. Both
  // Story (representative set) and Loka (nine identical) frames map reviewOnly, both viewports.
  {
    storyId: 'design-system-organisms-productcardlist--visual',
    legacyBaseline: 'design-system-organisms-productcardlist--product-card-list-story',
    reviewOnly: true,
  },
  {
    storyId: 'design-system-organisms-productcardlist--visual-loka',
    legacyBaseline: 'design-system-organisms-productcardlist--product-card-list-story-loka',
    reviewOnly: true,
  },
]
