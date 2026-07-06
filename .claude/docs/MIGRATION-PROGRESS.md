## Instructions for AI Assistant

- **Pick the next batch from the dependency-ordered _Build queue_ below** (take the next unchecked
  entries top-to-bottom): every entry's `needs:` are migrated in an earlier tier, so the next N are
  always buildable. Composition within that window is free — group by archetype where you can. When a
  component lands, move its line up into _Completed_ (keep any per-component note).
- Update this file as you go — flip `[ ]` to `[x]` as each component lands, and always before starting
  the next one (the `scaffold-component` skill drives this at its Step 9).
- A component is done when it is fully generated, strictly typed, `pnpm build` is green, and it passes
  local verification: `pnpm test-storybook` (interaction + a11y) and, if it has a legacy baseline,
  `pnpm exec playwright test --grep <component>` (visual regression vs `legacy-snapshots/`). Note any diff
  that needs human sign-off, or components that have no baseline.
- Run the full `pnpm test:visual` as the gate at the end of each 5-component micro-batch.
- Never proceed to the next batch without updating this progress log.

## Current Batch Status

- **Active Category**: molecules
- **Last Updated**: 2026-07-06
- **Current Micro-Batch**: Batch 7 — molecules, button/link foundation (complete; **Button** + **UiLink**, the two Tier-0 keystones that unblock the most downstream molecules — Button 28, UiLink 6). `pnpm build` green, `pnpm build-storybook` green, scoped `test-storybook` 10/10 (interaction + a11y across every surface/size + link variants), full `pnpm test:visual` 52 passed / 4 documented skips. Both map single-frame visual baselines (Button → `button-small` + icon-left/right + `button-large`; UiLink → `ui-link-story`) reproducing one legacy story each — their divergences (Button's brand font, UiLink's accessible blue) are confined to small glyphs and stay under the 2% gate, so they pass and the `visual:review` gallery pairs each current-vs-legacy for human sign-off. The Tier-1 button/link variants (IconButton, LinkButton) are the natural next batch.
- **2026-07-06 — checklist restructured to a dependency-ordered build queue**: the legacy import graph was analysed (direct imports + JSX usage of barrel imports) and the 127 pending components tiered topologically (keystone-first within each tier). The `## Components Checklist` is now the queue — "next N unchecked" are always buildable. This replaced the old alphabetical by-category list, which was **unbuildable in order** (molecules import atoms/molecules that came later alphabetically). Scripts kept in the session scratchpad (`deps.cjs` → `emit.cjs`).
- **2026-07-06 — Batch 7 findings & harness changes**:
  - **Molecules layer opened + `src/components/molecules/` populated.** Public API (`src/index.ts`) gained a `── Molecules ──` section. Molecules may import atoms (Button → Icon, Loader; UiLink → Icon), unlike atoms.
  - **Shared polymorphic-link helper (new permanent util)**: `src/lib/link.tsx` exports `DefaultLink` (a real semantic `<a>`, replacing the legacy `LinkComponent` `<div>` stub → links are focusable + exposed as links, 4.1.2), plus `LinkComponentType`/`LinkRenderProps`. UiLink (and the coming IconButton/LinkButton/IconLink) take an optional `linkComponent` prop to inject a router link, defaulting to `DefaultLink`. Ref is forwarded via a `ref` member on `LinkRenderProps` (React 19 ref-as-prop). Documented in docs/DEVELOPMENT.md.
  - **Button — baseline mapped despite a font divergence** (initially skipped, then corrected after review feedback): legacy `button.module.css` set `font-family: var(--font-family-secondaryBold)`, a token that is **never defined**, and the global `button {}` reset only sets `color` (no `font-family: inherit`) — so the legacy baselines rendered in the **UA default font**, while V2 applies the brand `font-primary` (the undefined token was a bug). I first read that as "diff is meaningless, don't map" — wrong: the label is a tiny fraction of the full-screen canvas, so the diff is **well under the 2% gate**. `--visual` (→ `button-small`), `--visual-icon-left/right` and `--visual-large` are all mapped and pass, and the review gallery now pairs each current-vs-legacy so the minor type difference gets human sign-off instead of escaping review. New token `--spacing-button-min-l: 8.125rem` (`min-w-button-min-l`) for the off-scale large min-width. Also dropped legacy's `aria-label={name}` misuse — the visible `children` is the accessible name (4.1.2/2.5.3); `name` is now the real HTML attribute. Icon-only buttons → use IconButton. Sub-44px sizes (small/x-small/xx-small) rely on the 2.5.8 ≥24px-spacing exception (noted in-component); only `large` meets 2.5.5†.
  - **UiLink — baseline mapped despite a colour divergence**: the legacy link is orange (`--interactive-default`, fails 4.5:1 on white); V2 uses accessible `text-text-blue` + `underline` (1.4.1/1.4.3) — the same intentional divergence applied to the `Text` link in batch 4. The colour change is confined to the small link glyphs, so `--visual` (→ `ui-link-story`) diffs **under the 2% gate** and is mapped; the gallery surfaces the orange→blue change for sign-off. (The V2 story renders blue → passes the axe gate; the orange legacy PNG is only the reference image, never scanned — so "legacy fails AA" was never a reason not to map.) Icons are decorative (`aria-hidden`); accessible name is the visible text (no more `aria-label={children}`).
- **2026-07-06 — Batch 6 findings & harness changes**:
  - **Runtime responsive value → CSS-var + media-query `@utility` (new permanent standard)**: FlexItem's `flex` is a per-breakpoint runtime prop (`{sm,md,lg}`), which can't be a build-time Tailwind class. Ported the legacy CSS-var pattern: the component sets `--flex-sm/md/lg` inline, and a new `@utility flex-responsive` (in `src/styles/index.css`) reads them at the `md` (48rem) / `lg` (64rem) cut-ins. Confirms Tailwind v4 `@utility` accepts nested `@media` (emits correctly in `dist/ecom-designsystem.css`). This is the sanctioned way to make a runtime value responsive without an arbitrary literal — reuse it for any future per-breakpoint runtime dimension. Documented in docs/DEVELOPMENT.md.
  - **New shared tokens (permanent)**: `--spacing-wrapper-xs: 0.3rem` (the `spacing='xs'` cluster gap shared by GroupWrapper + BoxWrapper; 0.3rem is off the 0.25rem scale — sm/md/lg/xl map to standard `gap-2/4/6/8`; consumed as `gap-wrapper-xs`) and `--container-box: 43.75rem` (BoxWrapper's `hasMaxWidth` cap, ported from legacy `max-width: 43.75rem`; consumed as `max-w-box` — v4 strips the `--container-` prefix). Documented in docs/DEVELOPMENT.md.
  - **Dead legacy code dropped**: BoxWrapper's `direction` prop was a no-op (its `.direction-*` rules are scoped under `.groupWrapper`, never `.boxWrapper`) — dropped (BoxWrapper is always a column stack). Also dropped the never-referenced `.noPadding` class and the raw `style` passthrough (V2 exposes `className` + the specific runtime `padding` prop instead). GroupWrapper's numeric `spacing` (legacy silently mapped any number → `xl`) narrowed to the `xs|sm|md|lg|xl` enum.
  - **BoxWrapper — no visual baseline (unmigrated children)**: every legacy `box-wrapper-story-*` frame composes molecules not yet migrated (Button, InfoSummaryBox, OrderItem, Tabs, TagsList, OrderConfirmationDetails, ScrollableList), so a faithful parity frame is impossible and a partial one would be a false-green (full-canvas pitfall). Not mapped; re-map when those children land. Behaviour covered by play tests.
  - **GroupWrapper mobile — single-large-Heading amplifies the known rhythm drift (harness pattern)**: the legacy `group-wrapper-story` frame's only content is one `order=1` Heading. It inherits the Heading vertical-rhythm drift that batch-1 accepted "within tolerance" — but where the multi-heading `heading-story` averages that sub-10px offset under the 2% gate, a single large heading wrapping to two lines on the 375px mobile canvas magnifies it to ~4%. GroupWrapper adds no vertical box, so this is a Heading-rendering incomparability, not a wrapper divergence → mapped **desktop-only** (like FlexContainer/Textarea/InputFile). Desktop (one line, drift diluted) matches. Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 5 findings & harness changes**:
  - **New layout tokens (permanent)**: `src/styles/index.css` gained `--breakpoint-3xl: 90rem` (the legacy "big screen" cut-in — extends, doesn't replace, Tailwind's breakpoints; = the `xl` JS breakpoint & the `isBigScreen` 90em query) and a custom `@utility max-w-content-fluid` = `calc(100% - 4rem)` (full width minus 2rem gutters) plus `@utility wave-w-{sm,md,lg,xl}` for WaveDivider's 20/30/40/50% desktop widths (30% has no standard Tailwind fraction). All documented in docs/DEVELOPMENT.md.
  - **Tailwind `--container-*` → `max-w-*` naming gotcha**: the container tokens are consumed as `max-w-content-narrow`/`-wide`/`-text`/`-lg` — Tailwind v4 **strips the `--container-` prefix**, so `max-w-container-content-*` silently generates nothing. Separately, that namespace also feeds `@container` sizes and **rejects a percentage `calc()`**, which is why the fluid width is a custom `@utility`, not a `--container-content-fluid` token. First discovered this batch (first layout components); cost one build cycle. Documented in DEVELOPMENT.md.
  - **Breakpoints — `react-responsive` dropped for native hooks**: legacy `Above`/`Below`/`Between` + `mediaQueryHelper` depended on `react-responsive`. V2 implements `useMediaQuery` on `useSyncExternalStore` (concurrent- and SSR-safe: `false` server snapshot) and `useBreakpoint` (replaces `mediaQueryHelper`), per the React 19 "standard hooks, no new deps" rule. `Above`/`Below`/`Between` are preserved (render-prop `children` still supported) but `@deprecated` → the hooks. Utility module: no story/snapshot → baseline-less.
  - **FlexContainer mobile baseline incomparable (harness pattern, recurring)**: the legacy `flex-container-story` **mobile** PNG is 464×667 — six non-wrapping 4rem swatches (6×64 + 5×16 gap = 464px) overflow the 375px viewport, so legacy captured full-page; the V2 harness captures the viewport (375×667). Mapped **desktop-only** (`viewports: ['desktop']`, same class as InputFile/Textarea). Desktop (1280) fits and matches.
  - **Layout-primitive convention (new permanent standard)**: enum props → `Record<Enum, string>` Tailwind utility maps; free-form runtime props (`flex`/`gap`/`minHeight`/`padding`) → inline `style` (the sanctioned no-arbitrary exception); presentational `<div>`/`<svg>`, no role (1.3.1). Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 4 findings & harness changes**:
  - **New Tag dimension tokens (permanent)**: `src/styles/index.css` gained `--text-tag-sm` (0.625rem, the small rectangular-tag label — registered in `cn.ts`'s font-size group so twMerge keeps size + colour) plus five bespoke `--spacing-tag-*` box tokens (`-rect-min`/`-rect-md`/`-rect-lg`/`-round-sm`/`-round-lg`) — the legacy tag heights/diameters (2.063rem, 4.75rem, 8.625rem, 5.156rem) are off the 0.25rem scale, so they're tokens rather than arbitrary values. Documented in docs/DEVELOPMENT.md.
  - **a11y gate vs legacy baselines (recurring pattern)**: `a11y.test: 'error'` means axe **fails** `test-storybook`, so a Visual parity story can't reproduce a legacy frame that itself fails AA. Two low-contrast oranges hit this: **Tag** white-on-`tag-orange` (~2.6:1) and **Text**'s legacy orange link (~2:1, undecorated). Resolution: (1) Tag maps only the AA-passing frames (rectangular-l/s, round-s); the orange **round-L** frame is **not** mapped and the orange token is flagged for design review in-component. (2) **Text link fixed** to blue + underline (1.4.1 + 1.4.3) — an intentional divergence from the orange baseline; the change is confined to the small glyphs so the diff stays under the 2% gate and the mapping still passes. `warning` (orange) text is kept as a prop option but never rendered in a scanned story (sub-AA for normal-weight text). Documented in docs/DEVELOPMENT.md.
  - **Video — 2.2.2 restored over legacy autoplay**: legacy autoplayed a muted, looping background video with **no** pause control (fails 2.2.2). V2 always renders a keyboard-operable pause/play button (44px `size-11` target, `focus-visible` ring, `aria-label` that flips with state), suppresses auto-play under `prefers-reduced-motion` (2.3.3), stays muted (1.4.2), and exposes a `tracks` slot for captions/descriptions (1.2.2–1.2.5). Atoms can't import `Icon`, so the control uses inline SVG glyphs (like MenuButton). **No visual baseline mapped**: the legacy `video-story` PNG is a non-deterministic auto-playing frame (no poster) and V2 adds the control — a pixel diff is meaningless (same reasoning as Picture). The V2 Video stories pass a minimal WebVTT captions `<track>` so axe's `video-caption` rule stays green.
  - **SingleSelect**: `@deprecated` (→ SelectList) preserved. Native `<select>` restores a `focus-visible` ring over the legacy `outline:none`; accessible name via `ariaLabel` (no visible label in legacy); `onChange` reports only — never auto-navigates (3.2.2, play-tested). No legacy story/snapshot → baseline-less.
  - **Textarea mobile baseline incomparable (harness gotcha)**: the legacy `textarea-story` **mobile** PNG is 375×**705** — the five-field stack overflows the 375×667 viewport, so legacy captured it **full-page**, whereas the V2 harness captures the **viewport** (375×667). Any mobile story taller than the viewport is therefore structurally incomparable → mapped **desktop-only** (`viewports: ['desktop']`, like InputFile). Desktop (1280×800) fits and matches. Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 3 findings & harness changes**:
  - **Shared skeleton/animation tokens (new permanent standard)**: `src/styles/index.css` gained three reusable primitives used by this batch and every future skeleton/motion atom — `--animate-grow` (LoadingBar bar grow-in), `--animate-shimmer` + `@keyframes shimmer`, and an `@utility skeleton-shimmer` (the decorative loading gradient). They live in the theme so no component ships an arbitrary `bg-[…]`/keyframe. All are gated with `motion-reduce:animate-none` at call sites (2.3.3†). Documented in docs/DEVELOPMENT.md.
  - **LoadingBar**: legacy shipped zero a11y — it's really a value-on-a-scale bar (e.g. "Beska" bitterness 6/12), so V2 exposes `role="meter"` (`aria-valuemin=0`/`max=12`/`now`) named by its visible label. The fill height is data-driven (`value/12`) so it's an inline `style` (a runtime value, not a design token — the one allowed non-utility dimension). The `bar-fill-*`/`bar-bg-*` token pair's non-text contrast (1.4.11) is borderline and flagged in-component for design review; axe doesn't gate it.
  - **MenuButton**: legacy button was a 23px target with `outline:none` (fails 2.5.8 + 2.4.7). V2 wraps the 23px glyph in a 44px `size-11` touch target (2.5.5†) with a real `focus-visible` ring; SVG stroke via `stroke-action-primary`. Framer path morph honours `prefers-reduced-motion` and uses `initial={false}` so the closed frame is static for the visual capture. Visual diff passes both viewports despite the target growth (glyph shift ≪ 2% gate).
  - **Picture**: no visual baseline mapped — the legacy `picture-story` PNGs used network-loaded images + a time-based skeleton/opacity transition, so a deterministic V2 frame can't reproduce them (behaviour covered by load/fallback play tests instead). Ported the loading/fallback state machine to React 19 (ref-as-prop merged with the internal `complete`-check ref; `fetchPriority` camelCase; dropped legacy dead `onLoadStart`, `content-visibility`/`will-change` perf hints, and the bespoke blur-gradient skeleton in favour of the shared `skeleton-shimmer`). Opacity scrim uses `bg-white/30`/`bg-black/50` (token + opacity modifier, not arbitrary).
  - **Placeholder**: legacy had **no** `.stories.tsx` and no snapshot, so no baseline. Decorative skeleton → `aria-hidden`. Odd legacy percentages (90%) snapped to nearest standard fractions/steps (`w-11/12`, `h-5`, `mb-2.5`) to keep zero arbitrary values; cosmetically irrelevant with no baseline to match.
- **2026-07-02 — Batch 2 dead-CSS findings & harness changes**:
  - **RadioButton**: legacy `radio-button.module.css` never applied (broken `&input[type="radio"]` nesting → selector `.radioButtoninput[…]`), so legacy rendered an unstyled native radio. V2 restores the intended styling (`h-4 w-5`, `accent-action-primary`, error → `accent-surface-critical`); pixel impact is tiny and the visual diff passes both viewports.
  - **InputFile**: legacy referenced non-existent `.button`/`.small` button-module classes, so the "button" was effectively plain secondary-blue text — V2 ports that effective rendering (baseline parity), not the intended button chrome. Revisit the affordance once the V2 Button molecule lands (needs human/design sign-off). Legacy also hid the input with `visibility: hidden` (keyboard-unreachable, WCAG 2.1.1 fail); V2 uses `sr-only`, which fixes it but removes the layout-overflow bug that made the legacy **mobile** PNG 420px wide — that viewport is structurally incomparable, so the baseline entry is desktop-only (`viewports: ['desktop']`).
  - **Harness**: `baseline-map.ts` gained an optional per-entry `viewports` filter (documented skip instead of a red test), and the spec now waits with `toBeAttached` on the story's first child instead of `toBeVisible` on `#storybook-root` (absolutely-positioned stories like Loader leave the root zero-height). Both documented in docs/DEVELOPMENT.md.
  - **Checkbox/RadioButton target size**: 18px/16–20px visual boxes rely on the WCAG 2.5.8 ≥24px-spacing exception — consumers must keep neighbouring targets ≥24px apart (noted in component comments).
- **2026-07-03 — Batch-1 audit via review gallery**: re-checked all 5 batch-1 atoms now that the global font is in place. Heading (Edmondsans, minor pre-existing vertical-rhythm drift within tolerance), CampaignBanner (pixel-identical), and Icon (map-pin glyph) all match; ExpandableWrapper has no baseline. **The font gap never actually bit batch-1** — the only text-bearing atoms set `font-primary` explicitly. One real finding: **ComponentWithTooltip's visual test was meaningless** — its `Visual` story renders a "Hover me" button while the legacy baseline is an `IconButton icon='icon-x'` close button; it passed only because the trigger is <0.5% of the canvas (under the 2% gate). Resolution: **removed ComponentWithTooltip from `tests/visual/baseline-map.ts`** (documented) since a faithful frame needs the unmigrated `IconButton` molecule — **re-add its visual mapping when IconButton is migrated** and the Visual story can reproduce the legacy trigger. Behaviour stays covered by its interaction/a11y play tests. Full-canvas false-green pitfall documented in docs/DEVELOPMENT.md.
- **2026-07-03 — visual-review findings resolved (font + input background)**: eyeballing the new tool (`pnpm visual:review`) surfaced three "wrong font" reports (DebounceInput, InputFile, Loader) plus a DebounceInput input-background diff. Root cause of the font issue was systemic, not per-component: legacy set a global `html { font-family: var(--font-family-primary) }`, but V2's `src/styles/index.css` only defined `--font-primary` as a token and never applied it to the document, so Tailwind's preflight left everything that didn't set `font-primary` explicitly in system-sans (batch-1 atoms passed only because they set it). Fixed once for the whole library with an `@layer base { html { font-family: var(--font-primary) } }` rule; batch-1 unaffected (no-op), form atoms now inherit Edmondsans. Caveat captured in docs/DEVELOPMENT.md: **form controls don't inherit font-family**, so `DebounceInput`'s numeric field keeps its explicit `font-primary`. Separately, that field needed `bg-surface-default` — Tailwind preflight leaves inputs transparent, so the off-white page showed through where legacy relied on the browser's default white field. Re-verified: `pnpm build` green, full `pnpm test:visual` 17 passed / 1 skipped, all three findings confirmed fixed in the regenerated gallery.
- **2026-07-02 — Icon re-migrated to `lucide-react`**: the icomoon font class was dead in V2 (no `@font-face` shipped), so Icon rendered nothing. Now renders Lucide SVGs via a strict `Record<IconName, IconGlyph>` map (legacy icomoon set was Feather — Lucide's ancestor — so glyphs map 1:1). Exceptions kept working: `icon-facebook`/`icon-instagram`/`icon-linkedin` (Lucide ships no brand icons) use vectors extracted from legacy `selection.json`; `icon-heart-o` → Lucide `Heart`, `icon-heart1` → `Heart` filled. Visual baseline `design-system-atoms-icon--icon-story` wired and passing; `pnpm test-storybook` 16/16.

## Summary

- Total Components: 155
- Completed: 30 / 155
- Remaining: 125

## Components Checklist

**Ordering is dependency-first, not alphabetical.** Regenerated from the legacy import graph: each
entry's `needs:` list names the *pending* components it imports, and every one of those sits in an
earlier tier — so **to start a batch, take the next unchecked entries top-to-bottom and their deps are
guaranteed already done.** `[atom]`/`[mol]`/`[org]` is the V2 destination dir
(`src/components/<category>`, after Atomic-Design reclassification — many legacy `atoms/*` are V2
molecules). `unblocks N` = how many pending components import this one (higher = more foundational;
that's why each tier is keystone-first — e.g. Button unblocks 28, IconButton 22).

Regenerate after large changes with the scratch scripts (`deps.cjs` → `emit.cjs`), or just move a
finished line into _Completed_ by hand (tiers rarely shift).

> **Cycle note.** The legacy product-card family is mutually recursive — `ProductCard` ↔
> `ProductCardHorizontal`/`-Vertical`/`-Restricted`, and `ProductSearch` ↔
> `ProductSearchResultItem`. Tiering breaks these arbitrarily; when you reach that cluster, scaffold the
> shells first and wire the cross-references last rather than expecting one clean topological pass.

### Completed (30)

- [x] CampaignBanner (Legacy: legacy/src/design-system/components/atoms/campaign-banner)
- [x] ComponentWithTooltip (Legacy: legacy/src/design-system/components/atoms/component-with-tooltip)
- [x] ExpandableWrapper (Legacy: legacy/src/design-system/components/atoms/expandable-wrapper)
- [x] Heading (Legacy: legacy/src/design-system/components/atoms/heading)
- [x] Icon (Legacy: legacy/src/design-system/components/atoms/icon)
- [x] Checkbox (Legacy: legacy/src/design-system/components/atoms/inputs/checkbox)
- [x] DebounceInput (Legacy: legacy/src/design-system/components/atoms/inputs/debounce-input)
- [x] InputFile (Legacy: legacy/src/design-system/components/atoms/inputs/input-file) — visual: desktop only (legacy mobile PNG incomparable, see batch notes)
- [x] RadioButton (Legacy: legacy/src/design-system/components/atoms/inputs/radio-button) — intent restored over dead legacy CSS, see batch notes
- [x] Loader (Legacy: legacy/src/design-system/components/atoms/loader)
- [x] LoadingBar (Legacy: legacy/src/design-system/components/atoms/loading-bar) — role="meter" restored over dead legacy a11y, see batch notes
- [x] MenuButton (Legacy: legacy/src/design-system/components/atoms/menu-button)
- [x] InlineHelper (Legacy: legacy/src/design-system/components/atoms/messages/inline-helper)
- [x] Picture (Legacy: legacy/src/design-system/components/atoms/picture) — no visual baseline (network + skeleton non-deterministic, see batch notes)
- [x] Placeholder (Legacy: legacy/src/design-system/components/atoms/placeholder) — no legacy story/baseline
- [x] SingleSelect (Legacy: legacy/src/design-system/components/atoms/single-select) — `@deprecated`→SelectList preserved; no baseline (no legacy story), see batch notes
- [x] Tag (Legacy: legacy/src/design-system/components/atoms/tag) — 3 baselines mapped; orange round-L unmapped (white-on-orange fails AA), see batch notes
- [x] Text (Legacy: legacy/src/design-system/components/atoms/text) — link fixed to accessible blue+underline (intentional divergence), see batch notes
- [x] Textarea (Legacy: legacy/src/design-system/components/atoms/textarea) — visual desktop-only (legacy mobile PNG full-page 705px), see batch notes
- [x] Video (Legacy: legacy/src/design-system/components/atoms/video) — pause control restored over legacy autoplay (2.2.2); no baseline (non-deterministic), see batch notes
- [x] WaveDivider (Legacy: legacy/src/design-system/components/atoms/wave-divider) — decorative `aria-hidden` svg; bespoke `wave-w-*` widths (30% off the fraction scale); baseline mapped (size='sm')
- [x] Breakpoints (Legacy: legacy/src/design-system/components/layouts/breakpoints) — viewport-utility module; `react-responsive` replaced with native `useMediaQuery`/`useBreakpoint`; no baseline (utility, no story)
- [x] ContentWrapper (Legacy: legacy/src/design-system/components/layouts/content-wrapper) — fluid gutter + `3xl` cap; baseline mapped (both viewports)
- [x] FlexContainer (Legacy: legacy/src/design-system/components/layouts/flex-container) — enum props → utilities, runtime props inline; visual desktop-only (non-wrapping row overflows mobile viewport), see batch notes
- [x] MaxWidth (Legacy: legacy/src/design-system/components/layouts/max-width) — `max-w-content-*` presets; no baseline (no legacy story)
- [x] BoxWrapper (Legacy: legacy/src/design-system/components/molecules/box-wrapper) — reclassified molecule→atom; presentational vertical stack; dead `direction`/`style`/`.noPadding` dropped; no visual baseline (unmigrated child molecules), see batch notes
- [x] FlexItem (Legacy: legacy/src/design-system/components/molecules/flex-item) — reclassified molecule→atom; per-breakpoint runtime `flex` via `flex-responsive` @utility; no baseline (no legacy story)
- [x] GroupWrapper (Legacy: legacy/src/design-system/components/molecules/group-wrapper) — reclassified molecule→atom; enum→utility maps; visual desktop-only (single large Heading amplifies known rhythm drift on mobile), see batch notes
- [x] Button `[mol]` (Legacy: legacy/src/design-system/components/atoms/button) — keystone (unblocks 28); 5 surfaces × 4 sizes, icons, loading (`aria-busy` + sr-only label); `font-primary` over undefined legacy token; 4 baselines mapped (font divergence, under 2% gate), see batch notes
- [x] UiLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/ui-link) — polymorphic `<a>` via `src/lib/link` `DefaultLink`; accessible blue+underline over legacy orange; baseline mapped (colour divergence, under gate), see batch notes

### Build queue (125 pending, dependency-ordered)

#### Tier 0 — buildable now (deps already migrated)

- [ ] InputText `[mol]` (Legacy: legacy/src/design-system/components/atoms/inputs/input-text) — leaf · unblocks 8
- [ ] IconWithTooltip `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-with-tooltip) — leaf · unblocks 7
- [ ] Carousel `[org]` (Legacy: legacy/src/design-system/components/organisms/carousel) — leaf · unblocks 6
- [ ] TagsList `[mol]` (Legacy: legacy/src/design-system/components/molecules/tags-list) — leaf · unblocks 4
- [ ] Logotype `[mol]` (Legacy: legacy/src/design-system/components/molecules/logotype) — leaf · unblocks 3
- [ ] LoadingOverlay `[mol]` (Legacy: legacy/src/design-system/components/molecules/loading-overlay) — leaf · unblocks 2
- [ ] ArticleCard `[mol]` (Legacy: legacy/src/design-system/components/molecules/article-card) — leaf · unblocks 1
- [ ] ClickableListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/clickable-list-item) — leaf · unblocks 1
- [ ] InlineError `[mol]` (Legacy: legacy/src/design-system/components/atoms/messages/inline-error) — leaf · unblocks 1
- [ ] LoadingBars `[mol]` (Legacy: legacy/src/design-system/components/molecules/loading-bars) — leaf · unblocks 1
- [ ] OfferCard `[mol]` (Legacy: legacy/src/design-system/components/molecules/offer-card) — leaf · unblocks 1
- [ ] CheckboxListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/checkbox-list-item) — leaf
- [ ] DeliveryInfoBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/delivery-info-bar) — leaf
- [ ] DropdownList `[mol]` (Legacy: legacy/src/design-system/components/molecules/dropdown-list) — leaf
- [ ] InfoSummaryBox `[mol]` (Legacy: legacy/src/design-system/components/molecules/info-summary-box) — leaf
- [ ] IntroBlock `[mol]` (Legacy: legacy/src/design-system/components/molecules/intro-block) — leaf
- [ ] MessageBanner `[mol]` (Legacy: legacy/src/design-system/components/atoms/message-banner) — leaf
- [ ] OrderConfirmationDetails `[mol]` (Legacy: legacy/src/design-system/components/molecules/order-confirmation-details) — leaf
- [ ] Pagination `[mol]` (Legacy: legacy/src/design-system/components/molecules/pagination) — leaf
- [ ] PopUp `[mol]` (Legacy: legacy/src/design-system/components/molecules/pop-up) — leaf
- [ ] PurchaseList `[mol]` (Legacy: legacy/src/design-system/components/molecules/purchase-list) — leaf
- [ ] RichText `[mol]` (Legacy: legacy/src/design-system/components/organisms/rich-text) — leaf
- [ ] ScrollableList `[mol]` (Legacy: legacy/src/design-system/components/molecules/scrollable-list) — leaf
- [ ] SortableListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/sortable-list-item) — leaf
- [ ] TagsDescription `[mol]` (Legacy: legacy/src/design-system/components/molecules/tags-description) — leaf
- [ ] UnorderedList `[mol]` (Legacy: legacy/src/design-system/components/molecules/unordered-list) — leaf
- [ ] UserInfoSummary `[mol]` (Legacy: legacy/src/design-system/components/molecules/user-info-summary) — leaf
- [ ] BrandPage `[org]` (Legacy: legacy/src/design-system/components/templates/brand-page) — leaf
- [ ] CampaignPage `[org]` (Legacy: legacy/src/design-system/components/templates/campaign-page) — leaf
- [ ] Cart `[org]` (Legacy: legacy/src/design-system/components/templates/cart) — leaf
- [ ] CartDeliveryDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-delivery-details) — leaf
- [ ] CartOrderDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-order-details) — leaf
- [ ] CartProductList `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-product-list) — leaf
- [ ] CartSidebar `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-sidebar) — leaf
- [ ] ChooseUserPage `[org]` (Legacy: legacy/src/design-system/components/templates/choose-user-page) — leaf
- [ ] ContactPage `[org]` (Legacy: legacy/src/design-system/components/templates/contact-page) — leaf
- [ ] ContentPage `[org]` (Legacy: legacy/src/design-system/components/templates/content-page) — leaf
- [ ] InspirationPage `[org]` (Legacy: legacy/src/design-system/components/templates/inspiration-page) — leaf
- [ ] LoginPage `[org]` (Legacy: legacy/src/design-system/components/templates/login-page) — leaf
- [ ] MySpendrupsPage `[org]` (Legacy: legacy/src/design-system/components/templates/my-spendrups-page) — leaf
- [ ] OrderConfirmation `[org]` (Legacy: legacy/src/design-system/components/organisms/order-confirmation) — leaf
- [ ] OrderConfirmationPage `[org]` (Legacy: legacy/src/design-system/components/templates/order-confirmation-page) — leaf
- [ ] ProductCategoryListingPage `[org]` (Legacy: legacy/src/design-system/components/templates/product-category-listing-page) — leaf
- [ ] ProductPage `[org]` (Legacy: legacy/src/design-system/components/templates/product-page) — leaf
- [ ] ShoppingListPage `[org]` (Legacy: legacy/src/design-system/components/templates/shopping-list-page) — leaf
- [ ] StartPageTemplate `[org]` (Legacy: legacy/src/design-system/components/templates/start-page-template) — leaf

#### Tier 1 — unlocked after Tier 0

- [ ] IconButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-button) — needs: UiLink · unblocks 22
- [ ] LinkButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/link-button) — needs: UiLink · unblocks 6
- [ ] ProductVariant `[mol]` (Legacy: legacy/src/design-system/components/molecules/product-variant) — needs: IconWithTooltip · unblocks 5
- [ ] ProductQuantityInput `[mol]` (Legacy: legacy/src/design-system/components/molecules/product-quantity-input) — needs: InputText · unblocks 4
- [ ] AlertBox `[mol]` (Legacy: legacy/src/design-system/components/atoms/alert-box) — needs: Button · unblocks 3
- [ ] FormGroup `[mol]` (Legacy: legacy/src/design-system/components/molecules/form-group) — needs: InlineError · unblocks 2
- [ ] AccountBox `[mol]` (Legacy: legacy/src/design-system/components/molecules/account-box) — needs: Button · unblocks 1
- [ ] CampaignBox `[mol]` (Legacy: legacy/src/design-system/components/atoms/campaign-box) — needs: Button · unblocks 1
- [ ] IconLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-link) — needs: UiLink · unblocks 1
- [ ] Newsletter `[mol]` (Legacy: legacy/src/design-system/components/molecules/newsletter) — needs: InputText, Button · unblocks 1
- [ ] UiDatePicker `[mol]` (Legacy: legacy/src/design-system/components/atoms/ui-date-picker) — needs: Button · unblocks 1
- [ ] FaqList `[org]` (Legacy: legacy/src/design-system/components/molecules/faq-list) — needs: ClickableListItem · unblocks 1
- [ ] AdminSearch `[mol]` (Legacy: legacy/src/design-system/components/atoms/admin-search) — needs: InputText
- [ ] AgeVerificationForm `[mol]` (Legacy: legacy/src/design-system/components/molecules/age-verification-form) — needs: Button
- [ ] ButtonWithTooltop `[mol]` (Legacy: legacy/src/design-system/components/atoms/button-with-tooltop) — needs: Button
- [ ] CampaignMessage `[mol]` (Legacy: legacy/src/design-system/components/atoms/campaign-message) — needs: Button
- [ ] CookieBar `[mol]` (Legacy: legacy/src/design-system/components/atoms/cookie-bar) — needs: Button
- [ ] MultiSelect `[mol]` (Legacy: legacy/src/design-system/components/atoms/multi-select) — needs: Button
- [ ] OrderItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/order-item) — needs: Button
- [ ] Search `[mol]` (Legacy: legacy/src/design-system/components/atoms/search) — needs: InputText, Button
- [ ] SelectList `[mol]` (Legacy: legacy/src/design-system/components/molecules/select-list) — needs: Button
- [ ] Tabs `[mol]` (Legacy: legacy/src/design-system/components/molecules/tabs) — needs: Button
- [ ] ArticleList `[org]` (Legacy: legacy/src/design-system/components/organisms/article-list) — needs: ArticleCard, Carousel
- [ ] BrandDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/brand-details) — needs: TagsList
- [ ] Breadcrumbs `[org]` (Legacy: legacy/src/design-system/components/organisms/breadcrumbs) — needs: UiLink
- [ ] MobileNavigation `[org]` (Legacy: legacy/src/design-system/components/molecules/navigation/mobile-navigation) — needs: Button
- [ ] OfferCardList `[org]` (Legacy: legacy/src/design-system/components/organisms/offer-card-list) — needs: OfferCard, Carousel

#### Tier 2 — unlocked after Tier 1

- [ ] ProductVariantList `[org]` (Legacy: legacy/src/design-system/components/molecules/product-variant-list) — needs: ProductVariant, IconButton · unblocks 5
- [ ] Form `[mol]` (Legacy: legacy/src/design-system/components/molecules/form) — needs: UiLink, Button, LinkButton · unblocks 4
- [ ] AddToCartButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/add-to-cart-button) — needs: IconButton · unblocks 2
- [ ] DrawerSidebar `[mol]` (Legacy: legacy/src/design-system/components/molecules/drawer-sidebar) — needs: IconButton · unblocks 2
- [ ] FooterTopBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/footer-top-bar) — needs: LinkButton · unblocks 1
- [ ] Hero `[mol]` (Legacy: legacy/src/design-system/components/molecules/hero) — needs: LinkButton · unblocks 1
- [ ] SocialMediaLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/social-media-link) — needs: LinkButton · unblocks 1
- [ ] CartProduct `[org]` (Legacy: legacy/src/design-system/components/molecules/cart-product) — needs: ProductQuantityInput, IconButton · unblocks 1
- [ ] DesktopNavigation `[org]` (Legacy: legacy/src/design-system/components/molecules/navigation/desktop-navigation) — needs: IconButton · unblocks 1
- [ ] HorizontalVariant `[org]` (Legacy: legacy/src/design-system/components/molecules/horizontal-variant) — needs: ProductVariant, IconWithTooltip · unblocks 1
- [ ] ProductSearch `[org]` (Legacy: legacy/src/design-system/components/molecules/product-search) — needs: ProductVariant, InputText, ProductSearchResultItem · unblocks 1
- [ ] AlertMessage `[mol]` (Legacy: legacy/src/design-system/components/atoms/alert-message) — needs: IconButton
- [ ] FaqHero `[mol]` (Legacy: legacy/src/design-system/components/molecules/faq-hero) — needs: InputText, IconButton
- [ ] LinkListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/link-list-item) — needs: IconButton, IconLink
- [ ] MessagePopup `[mol]` (Legacy: legacy/src/design-system/components/atoms/message-popup) — needs: IconButton
- [ ] Modal `[mol]` (Legacy: legacy/src/design-system/components/molecules/modal) — needs: IconButton
- [ ] QuantityChanger `[mol]` (Legacy: legacy/src/design-system/components/molecules/quantity-changer) — needs: IconButton
- [ ] SortableList `[mol]` (Legacy: legacy/src/design-system/components/molecules/sortable-list) — needs: IconButton
- [ ] Table `[mol]` (Legacy: legacy/src/design-system/components/molecules/table) — needs: Button, IconButton
- [ ] Teaser `[mol]` (Legacy: legacy/src/design-system/components/molecules/teaser) — needs: LinkButton
- [ ] TopNavBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/top-nav-bar) — needs: UiDatePicker
- [ ] AccountBoxList `[org]` (Legacy: legacy/src/design-system/components/organisms/account-box-list) — needs: AccountBox
- [ ] CreateListForm `[org]` (Legacy: legacy/src/design-system/components/organisms/create-list-form) — needs: LoadingOverlay, Logotype, FormGroup, InputText, Button
- [ ] DeliveryForm `[org]` (Legacy: legacy/src/design-system/components/organisms/delivery-form) — needs: FormGroup, InputText
- [ ] FaqGroup `[org]` (Legacy: legacy/src/design-system/components/molecules/faq-group) — needs: FaqList
- [ ] InvoiceList `[org]` (Legacy: legacy/src/design-system/components/molecules/invoice-list) — needs: LoadingOverlay, IconButton, Button

#### Tier 3 — unlocked after Tier 2

- [ ] HorizontalVariants `[org]` (Legacy: legacy/src/design-system/components/molecules/horizontal-variants) — needs: ProductVariantList, HorizontalVariant, Carousel · unblocks 1
- [ ] ProductCardRestricted `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-restricted) — needs: ProductVariantList, TagsList, ProductCard, IconWithTooltip, Button · unblocks 1
- [ ] ProductCardVertical `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-vertical) — needs: ProductCard, ProductQuantityInput, ProductVariantList, TagsList, IconWithTooltip, Button, IconButton · unblocks 1
- [ ] ProductDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/product-details) — needs: ProductVariant, ProductQuantityInput, Button, IconButton, AddToCartButton, AlertBox, CampaignBox, IconWithTooltip, ProductVariantList, LoadingBars · unblocks 1
- [ ] ProductSearchResultItem `[org]` (Legacy: legacy/src/design-system/components/atoms/product-search-result-item) — needs: ProductSearch, IconButton, IconWithTooltip · unblocks 1
- [ ] Slider `[org]` (Legacy: legacy/src/design-system/components/atoms/slider) — needs: Form · unblocks 1
- [ ] VerticalVariants `[org]` (Legacy: legacy/src/design-system/components/molecules/vertical-variants) — needs: ProductVariant, ProductVariantList, Carousel · unblocks 1
- [ ] SocialMediaLinks `[mol]` (Legacy: legacy/src/design-system/components/molecules/social-media-links) — needs: SocialMediaLink
- [ ] Footer `[org]` (Legacy: legacy/src/design-system/components/organisms/footer) — needs: Newsletter, FooterTopBar, Logotype
- [ ] Header `[org]` (Legacy: legacy/src/design-system/components/organisms/header) — needs: DesktopNavigation
- [ ] HeroCarousel `[org]` (Legacy: legacy/src/design-system/components/organisms/hero-carousel) — needs: Hero, Carousel
- [ ] LoginForm `[org]` (Legacy: legacy/src/design-system/components/organisms/login-form) — needs: Button, Form, LinkButton, UiLink
- [ ] ProductToast `[org]` (Legacy: legacy/src/design-system/components/molecules/product-toast) — needs: CartProduct, IconButton
- [ ] ResetPasswordForm `[org]` (Legacy: legacy/src/design-system/components/organisms/reset-password-form) — needs: Logotype, Form
- [ ] UserProfileDropdown `[org]` (Legacy: legacy/src/design-system/components/molecules/user-profile-dropdown) — needs: DrawerSidebar, IconButton, Button

#### Tier 4 — unlocked after Tier 3

- [ ] ProductCardHorizontal `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-horizontal) — needs: ProductQuantityInput, TagsList, ProductCard, HorizontalVariants, IconWithTooltip, IconButton, Button, AlertBox · unblocks 1
- [ ] ProductCardMiniVertical `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-mini-vertical) — needs: VerticalVariants, IconButton, Button, AddToCartButton · unblocks 1
- [ ] RangeInput `[org]` (Legacy: legacy/src/design-system/components/atoms/range-input) — needs: Form, Slider · unblocks 1
- [ ] ProductDescription `[org]` (Legacy: legacy/src/design-system/components/organisms/product-description) — needs: Button, ProductDetails

#### Tier 5 — unlocked after Tier 4

- [ ] ProductCard `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card) — needs: AlertBox, ProductCardHorizontal, ProductCardRestricted, ProductCardVertical · unblocks 7
- [ ] DynamicFilter `[org]` (Legacy: legacy/src/design-system/components/molecules/dynamic-filter) — needs: DrawerSidebar, RangeInput, Button

#### Tier 6 — unlocked after Tier 5

- [ ] ProductCardMini `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-mini) — needs: ProductCard · unblocks 1
- [ ] ProductBlock `[org]` (Legacy: legacy/src/design-system/components/organisms/product-block) — needs: ProductCard
- [ ] ProductCardList `[org]` (Legacy: legacy/src/design-system/components/organisms/product-card-list) — needs: ProductCard
- [ ] ProductCarousel `[org]` (Legacy: legacy/src/design-system/components/molecules/product-carousel) — needs: Carousel, ProductCardMiniVertical, ProductCard

#### Tier 7 — unlocked after Tier 6

- [ ] MiniProductToast `[org]` (Legacy: legacy/src/design-system/components/molecules/mini-product-toast) — needs: ProductCardMini, IconButton

