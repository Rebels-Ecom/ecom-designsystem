# Design System V2 — Developer Wiki

Architectural context and conventions for the V2 migration. Skim this before
touching components or styling. (Spec/automation rules live in `.claude/CLAUDE.md`.)

## Component anatomy

Every component lives in `src/components/<atoms|molecules|organisms>/<ComponentName>/`
and ships three files:

- `ComponentName.tsx` — logic, UI, Tailwind classes.
- `ComponentName.stories.tsx` — Storybook 10 CSF with at least one `play`
  function — run as interaction + accessibility tests by `pnpm test-storybook`
  (see [Accessibility](#accessibility)).
- `index.ts` — exports the component **and** its prop type.

Each component is then re-exported from the flat public API in `src/index.ts`,
grouped by atomic category. Category is decided by the strict Atomic Design
rules in `CLAUDE.md` / `.claude/docs/ATOMIC-MAP.md`, **not** the legacy folder.

## Styling

- **Tokens are defined in `src/styles/index.css`** as the Tailwind v4 `@theme`
  implementation of `.claude/docs/STYLE-GUIDE.md` (primitives in `@theme`,
  semantic tokens in `@theme inline`, layering via named `z-*` utilities, dark
  mode via `.dark` overrides). The style guide is the source of truth; the CSS
  is its realization. Dead tokens (💀 in `EXTRACTED-VARIABLES.md`) are dropped.
- **No arbitrary values** (`text-[#…]`, `z-[999]`, `w-[15px]`). If a value has
  no token, add the token to `@theme` — don't inline it. Genuinely dynamic
  runtime values (e.g. a per-record colour) are the one exception and go through
  `style={{ … }}`.
- **Always merge external `className` through `cn()`** (`src/lib/cn.ts`) — never
  raw template literals.
- **Brand fonts** live in `src/styles/fonts/` (Edmondsans → `spendrups_primary`,
  RobotoSlab → `spendrups_secondary`) with `@font-face` rules at the top of
  `src/styles/index.css`; the `--font-primary` / `--font-secondary` tokens reference
  those families. Adding a weight means adding both the file and its `@font-face`.
- **The document defaults to `--font-primary`** via an `@layer base { html { … } }`
  rule in `src/styles/index.css`, mirroring legacy's global `html { font-family }`.
  So regular elements (headings, paragraphs, spans, divs) inherit Edmondsans for
  free — only reach for the `font-secondary` utility to opt out. **But form controls
  (`input`, `textarea`, `select`, `button`) do NOT inherit `font-family`** — the
  browser resets them — so any text *inside a form control* still needs an explicit
  `font-primary` utility (e.g. `DebounceInput`'s numeric field). Forgetting this is
  invisible under `tsc` and easy to miss on small text; the [review gallery](#reviewing-a-green-run--the-review-gallery)
  is how it gets caught.
- **The document base line-height is `normal`, not Tailwind's `1.5`.** The same
  `@layer base { html { … } }` rule also sets `line-height: normal`. Legacy `html`/`body`
  set no line-height, so all un-tokened text rendered at the font's `normal` (~1.2), but
  Tailwind v4 preflight forces `1.5` on `html` — which inflated every bare-text line-box
  vs the frozen baselines (taller text blocks; icon/text flex rows misaligning because the
  text line-box outgrew the glyph). Setting the base to `normal` realigns bare text to
  legacy. **This only affects text with no explicit leading** — components that need a
  specific line-height set it via a `text-*` type token (`text-body` = 1.25rem, the
  `text-h-*` scale, etc.), and those win over the base. So: rely on the type tokens for
  anything multi-line; the base just keeps stray single-line text faithful.
- **Form controls need an explicit surface too.** Tailwind's preflight leaves an
  `<input>` background transparent, so on the design system's off-white page a bare
  field shows the page through it. Set `bg-surface-default` (or the intended token)
  on inputs whose legacy counterpart relied on the browser's default white field.
- **Icons come from `lucide-react`**, exclusively through the `Icon` atom's
  `iconMap` (`src/components/atoms/Icon/Icon.tsx`) — never import a Lucide
  component directly in another component. The legacy icomoon font was built
  from the Feather set (Lucide's ancestor), so legacy `icon-*` names map 1:1;
  the map key type (`IconName`) preserves those names verbatim. To add an icon,
  add the name to the `IconName` union and its Lucide component to `iconMap`
  (the `Record` type enforces completeness). Glyphs render at `1em`, so they
  scale with font-size exactly like the old font icons. Three brand icons
  (facebook/instagram/linkedin) have no Lucide equivalent and are local SVGs
  extracted from the legacy set. `lucide-react` is a regular `dependency`,
  externalized in the library build (`vite.config.ts`) so consumers don't
  bundle a second copy.
- **Animations are theme tokens, and skeletons share one utility.** Custom
  keyframe animations live in `@theme` as `--animate-*` (+ their `@keyframes`),
  so they're used as `animate-<name>` utilities instead of arbitrary CSS —
  currently `animate-grow` (LoadingBar's bar grow-in), `animate-shimmer`
  (the loading pulse), and `animate-icon-pulse` (IconButton's `busy` scale
  throb). The decorative loading-skeleton look is a single
  `@utility skeleton-shimmer` (the gradient + background-size the shimmer sweeps),
  reused by `Placeholder` and `Picture`'s loading state — don't hand-roll a new
  skeleton gradient per component, and don't inline it as `bg-[…]`. **Always
  gate decorative motion with `motion-reduce:animate-none`** at the call site so
  `prefers-reduced-motion` is honoured (WCAG 2.3.3†); Playwright's
  `animations: 'disabled'` freezes these at their end state, so a one-shot
  `forwards` grow captures at full height deterministically.
- **Framer entrance/exit animations: gate on `useReducedMotion()`; the harness settles
  the frame by emulating reduced motion.** For a JS-driven Framer transition (e.g.
  DeliveryInfoBar's slide-down + fade), gate it on `useReducedMotion()` —
  `initial={reduce ? false : {…}}`, and make the reduced path instant/settled — so
  motion-sensitive users get the resting state (2.3.3†) **and** captures are deterministic.
  `useReducedMotion()` reads the `prefers-reduced-motion` **media query** — NOT a
  `MotionConfig reducedMotion` prop (that only tunes framer's own engine and leaves the
  hook untouched; an earlier note here claimed otherwise — it was wrong). So the lever is
  the harness: **`pnpm visual:review` creates its capture contexts with
  `reducedMotion: 'reduce'`**, which flips the hook true and renders the settled first
  frame (no mid-fade). The gate (`pnpm test:visual`) additionally uses Playwright's
  `animations: 'disabled'`. A per-story `MotionConfig` wrapper does nothing here — don't
  add one.
- **Container widths & the `--container-*` → `max-w-*` naming.** The content max-widths live in
  `@theme` as `--container-content-*` (`narrow` 73rem, `wide` 103rem, `text` 52rem, `lg` 77.5rem).
  Tailwind v4 exposes the `--container-*` namespace as `max-w-*` utilities **with the `--container-`
  prefix stripped** — so the class is `max-w-content-narrow`, **not** `max-w-container-content-narrow`
  (the latter silently generates nothing). Gotcha: **the `--container-*` namespace also feeds
  `@container` sizes and rejects a percentage-based `calc()`**, so the fluid content width
  (`calc(100% - 4rem)`, full width minus 2rem side gutters) can't be a `--container-*` token — it's a
  custom `@utility max-w-content-fluid` instead. `MaxWidth` and `ContentWrapper` are the reference
  consumers.
- **Breakpoints extend, not replace, Tailwind's defaults.** `@theme` adds `--breakpoint-3xl: 90rem`
  (1440px) — the legacy "big screen" cut-in — usable as the `3xl:` variant (e.g. ContentWrapper's
  max-width cap). Defining any `--breakpoint-*` merges with the defaults; it only clears them if you
  set the namespace to `initial`. 1440px/90rem is the same value as the `xl` JS breakpoint in the
  `Breakpoints` atom and the `isBigScreen` (`90em`) media query — keep the three in sync.
- **Layout primitives split enum props from runtime values.** `FlexContainer`, `ContentWrapper`,
  `MaxWidth`, `WaveDivider` are presentational `<div>`/`<svg>` atoms with **no role** (1.3.1) — they
  never disturb the a11y tree of the content they arrange. Map **enumerable** props (flex direction,
  alignment, justification, wrap, size) to Tailwind utilities via a `Record<Enum, string>`; apply
  **free-form runtime** props (`flex`, `gap`, `minHeight`, `padding`) inline via `style={{ … }}` —
  that's the sanctioned exception to no-arbitrary-values, since they're consumer-supplied at runtime.
  Off-scale design values still get tokenised: `WaveDivider`'s 20/30/40/50% desktop widths are
  `@utility wave-w-*` (30% has no standard Tailwind fraction) rather than `w-[30%]`. The
  `BoxWrapper`/`GroupWrapper`/`FlexItem` trio (final layout atoms) follow the same split; their
  off-scale `spacing='xs'` gap is the shared `--spacing-wrapper-xs: 0.3rem` token (`gap-wrapper-xs`)
  and `BoxWrapper`'s max-width cap is `--container-box: 43.75rem` (`max-w-box`).
- **Semi-transparent scrims: token + opacity modifier, reuse a primitive where it exists.** The
  loading-overlay light scrim (legacy `rgba(245,246,248,0.95)`) has no matching primitive, so it's the
  semantic token `--color-surface-overlay: #f5f6f8` consumed as `bg-surface-overlay/95`. The dark scrim
  (legacy `rgba(0,62,81,0.3)`) *is* an existing primitive, so it needs no new token — it's just
  `bg-blue-500/30`. Prefer `bg-<token>/<alpha>` over a bespoke rgba token; only mint a token when the
  base colour isn't already in the theme. `LoadingOverlay` is the reference.
- **A runtime value that must be *responsive* → CSS-var + a media-query `@utility`.** Inline
  `style={{ … }}` handles a single runtime dimension, but it can't carry breakpoints. When a runtime
  prop needs a different value per breakpoint (e.g. `FlexItem`'s `flex={{sm,md,lg}}`), set the values
  as inline CSS custom properties (`--flex-sm/md/lg`) and read them from a custom utility that owns
  the media queries — `@utility flex-responsive { flex: var(--flex-sm,1); @media (min-width:48rem){…} }`.
  Tailwind v4 `@utility` accepts nested `@media`, so the breakpoint logic stays in the theme and the
  component stays arbitrary-value-free. `FlexItem` is the reference. `Carousel` reuses the exact
  pattern for slide widths: it sets `--cs-per-sm/md/lg` (slides-per-page) on the scroll track and each
  `CarouselItem` reads the **inherited** var via `@utility carousel-slide` to derive its `flex-basis`
  per breakpoint — CSS custom properties inherit, so the parent sets them once and every slide picks
  them up.

### ⚠ `cn()` must know our custom font-size tokens

`tailwind-merge` only ships knowledge of the default Tailwind theme. Our custom
`text-*` font-size tokens (`text-h-xl`, `text-body`, `text-icon-xl`, the cta/tag
scale, …) are unknown to it, so by default it classifies them as text-**color**
utilities. A size token and a real colour token then collide in the same
conflict group and **one is silently dropped** — e.g. `cn('text-h-m',
'text-text-default')` would emit only one of the two.

`src/lib/cn.ts` fixes this by registering every custom font-size token in the
`font-size` class group via `extendTailwindMerge`. **When you add a new `--text-*`
token to `@theme`, add it to that list too**, or merges involving it will be
lossy.

## React 19 conventions

- Pass `ref` as a normal prop (`ref?: Ref<HTMLElement>`). Do **not** use
  `forwardRef`.
- Type `children` as `React.ReactNode`.
- Lean on the React Compiler — no reflexive `useMemo` / `useCallback`.
- `any` is forbidden; the build runs `tsc --noEmit` under `strict`.
- **Media queries use a native `useSyncExternalStore` hook, not `react-responsive`.** The
  `Breakpoints` atom exposes `useMediaQuery(query)` (subscribes to `window.matchMedia`, SSR-safe via a
  `false` server snapshot) and `useBreakpoint()` (the modern replacement for legacy `mediaQueryHelper`,
  returning `isMobile`/`isTablet`/`isDesktop`/`isBigScreen`). The legacy `Above`/`Below`/`Between`
  render-helpers are preserved (still supporting the render-prop `children`) but `@deprecated` in
  favour of the hooks. This keeps the "standard hooks, no new runtime deps" rule and drops the
  `react-responsive` dependency entirely.

## Molecules, organisms & composition

- **Molecules live in `src/components/molecules/` and may import atoms** (e.g. `Button` → `Icon`,
  `Loader`; `UiLink` → `Icon`) — the atom rule ("never import another component") applies only to
  atoms. Category is decided by Atomic-Design reclassification (`ATOMIC-MAP.md`), not the legacy
  folder, so many legacy `atoms/*` land in `molecules/`. **Organisms** live in
  `src/components/organisms/` (opened with `Carousel`) and may compose molecules + atoms.
- **Compose an existing V2 primitive rather than re-porting a third-party dependency.** When a legacy
  component's behaviour is already implemented by a migrated atom/molecule, wrap that — don't re-import
  the legacy library. `IconWithTooltip` is built on the `ComponentWithTooltip` atom (legacy's
  `@radix-ui/react-tooltip` is not a V2 dependency), inheriting its WCAG 1.4.13 tooltip contract for
  free; `Logotype` is a thin wrapper over the `Picture` atom.
- **A legacy dependency that isn't in `package.json` gets rewritten from scratch, not added.** V2's
  runtime deps are deliberately minimal (`clsx`, `lucide-react`, `tailwind-merge`). `Carousel`'s legacy
  impl was `@splidejs/react-splide` (absent from deps, and not React-19-compatible), so it's a
  dependency-free **CSS scroll-snap** rewrite. It keeps the full legacy **capability** surface —
  responsive `perPage`/`perMove`, `direction` (horizontal **and** vertical, i.e. Splide's `ttb`), `gap`,
  peek `padding`, `dotPerItem` pagination, per-breakpoint `hideArrows`, and the arrow-placement variants
  (`arrowsBottom`/`offsetArrows`/`lightArrows`) — but not Splide's implementation-internal knobs
  (`splideProps` passthrough, `noGrid` [our track is flex, not grid], `zeroOffset`, the Intersection
  auto-pause extension), which have no meaning in a flex/scroll-snap model. **Navigation is slide-index
  based, measured from real slide offsets** (`slide.offsetLeft − first.offsetLeft`), NOT
  `scrollLeft / clientWidth` — the pixel-division approach breaks when the last page is partial
  (`ceil(scrollWidth/clientWidth)` pages never line up with `round(scrollLeft/clientWidth)`, so the last
  dot/next-arrow desync). Real slide (`<button>`) arrows + dots are the keyboard/single-pointer non-drag
  alternative (2.5.1/2.5.7/2.1.1); the track is `tabIndex={0}` + `role="group"` + `aria-label` (axe
  `scrollable-region-focusable`) and moves slide-by-slide on arrow keys / Home / End; no auto-advance
  (2.2.2 n/a); `motion-reduce:scroll-auto` + `behavior:'auto'` under reduced motion. `perPage` is
  **derived from layout** (`round(clientSize/stride)`) so it auto-tracks the CSS breakpoints instead of
  being re-resolved in JS; only `perMove`/`hideArrows` are matched via `matchMedia`. This is the
  reference pattern for any future carousel/slider.
- **Rewrite-from-scratch vs. replace-with-a-vetted-lib is a judgment call — not always rewrite.** The
  default (above) is to rewrite an absent legacy dep dependency-free (Carousel←Splide;
  tooltip←radix). But when a faithful, *accessible* rewrite would be disproportionate or high-risk, add
  a vetted, React-19-ready, headless replacement instead. `UiDatePicker` did this: a from-scratch
  WCAG-2.2 calendar grid (dialog + `role=grid` + roving focus) is a large, easy-to-get-wrong surface, so
  it uses **`react-day-picker`** (legacy's `react-datepicker` is absent + not React-19-safe). It's a
  regular `dependency`, **externalized** in `vite.config.ts` like `lucide-react` (consumers install it;
  never bundled), and styled **headless** — base CSS not imported, only Tailwind tokens via
  `classNames`/`modifiersClassNames`. We still own the shell (trigger `aria-haspopup`/`aria-expanded`,
  `role="dialog"`, focus-in, Escape/outside-click close + focus return); the library owns the in-grid
  keyboard/ARIA. Prefer this over a bespoke calendar/date-grid; keep owning the wrapper's dialog a11y.
- **Hiding a scrollbar is WCAG-safe when operation is preserved — use the `scrollbar-none` `@utility`.**
  `@utility scrollbar-none` (in `index.css`: `scrollbar-width: none` + `-ms-overflow-style: none` +
  `&::-webkit-scrollbar { display: none }`) hides only the bar's *rendering*; the element stays
  scrollable by wheel/touch/keyboard/programmatic scroll. There is no SC requiring a visible scrollbar,
  so it's safe **as long as** the region keeps keyboard operation (2.1.1) and a visible single-pointer
  alternative to dragging (2.5.7) — `Carousel` has both (focusable track with arrow-key/Home/End + the
  arrow/dot buttons, whose dots also convey scroll position/count in the bar's place). Rule of thumb:
  hide the bar, never the operation. Reuse this utility for any horizontal scroll region (Carousel now;
  future ScrollableList / DropdownList / overflow tag rows).
- **Batches are picked from the dependency-ordered _Build queue_ in `MIGRATION-PROGRESS.md`**, not
  alphabetically — each entry's `needs:` are migrated in an earlier tier, so the next N unchecked are
  always buildable. Regenerate the tiers from the legacy import graph with the session scratch scripts
  if the map drifts.
- **⚠ The dependency graph is blind to story-only "GUIDELINE" templates — verify a `.tsx` exists before
  building a queued template/organism.** Several legacy `templates/*-page` folders ship **no component
  `.tsx`**, only a `*.stories.tsx` that composes organisms to document "how to lay out this page". The
  tier generator (`deps.cjs`) builds edges from `.tsx` imports, so a story-only entry has **zero edges
  and is mis-tiered as a `leaf`** even though its stories import wholly-unmigrated organisms. BrandPage
  and CampaignPage hit this in Batch 13 (their stories pull Header/Footer/Hero/BrandDetails/HeroCarousel,
  none migrated) and were **skipped and flagged `⛔ BLOCKED`** in the queue, not built. Before scaffolding
  a queued `[org]`/template: `ls legacy/.../<name>/` — **if there's no `<name>.tsx`, it is not a real
  leaf**; its true deps live in the stories file, so treat those as the gate and defer until they land.
  The remaining story-only pages (ContactPage, ContentPage, ChooseUserPage, InspirationPage,
  MySpendrupsPage, …) will hit the same wall.
- **Polymorphic links go through `src/lib/link.tsx`.** Any component that renders a navigational link
  (`UiLink`, and the button-as-link family) takes an optional `linkComponent?: LinkComponentType` prop
  and defaults to `DefaultLink` — a real semantic `<a>` (focusable, exposed as a link → 4.1.2).
  Consumers inject their router's link (adapted to accept `href`) for SPA navigation. This replaces the
  legacy `LinkComponent` `<div>` stub. `ref` forwards via a `ref` member on `LinkRenderProps` (React 19
  ref-as-prop). An interactive control that performs an *action* stays a `<button>` (e.g. `Button`'s
  `surface="link"` is a button styled as a link, not an anchor).
- **Render the legacy _intent_, not a legacy bug — then still map the baseline if the diff fits the
  gate.** Two divergences landed with the first molecules: legacy `Button` referenced an **undefined**
  font token (so its baselines rendered in the UA font) — V2 applies the brand `font-primary`; and
  legacy links are **orange** (fails AA) — V2 links (`UiLink`, `Text`) use accessible
  `text-text-blue` + `underline`. Both **are mapped**: the changed pixels are confined to a small
  label/glyph, a tiny fraction of the full-screen canvas, so the diff stays under the 2% gate and the
  `visual:review` gallery pairs current-vs-legacy for human sign-off. Don't pre-judge "the font/colour
  differs, so a diff is meaningless" — *measure* it; only genuinely **unreproducible** frames go
  unmapped (non-deterministic renders like `Picture`/`Video`, unmigrated children like `BoxWrapper`,
  or no legacy story at all). Note the legacy reference PNG is never axe-scanned — only the V2 story
  is — so "the legacy frame fails AA" is not a reason to skip the map; render the V2 frame accessibly
  and diff against the legacy image.
- **Disclosure-dropdown pattern — native controls in the popup, wrapper owns open/close only.** For
  every "trigger reveals a small set of choices" molecule (`MultiSelect`, `SelectList`, and the same
  shape in `AdminSearch`), the trigger is a real `<button>` with `aria-haspopup` + `aria-expanded` +
  `aria-controls`, and the popup holds **native** form controls — `<input type="checkbox">` for
  multi-select, `<input type="radio">` (shared `name`) for single-select — each wrapped in a `<label>`.
  That buys role, checked/selected state, and keyboard operation (radio **arrow-key** navigation!) for
  free, with no listbox `aria-activedescendant`/roving-tabindex machinery to hand-roll. The wrapper only
  owns: open on activation (not focus, 3.2.1), `Escape` → close **and return focus to the trigger**, and
  an outside-click `pointerdown` listener registered in a `useEffect` **gated on the open state** (so no
  global listener when closed). The legacy `useOnClickOutside`/`useCloseOnEscape` hooks were never
  migrated — reimplement that behaviour inline; it's ~8 lines and avoids a shared-hook dependency.
- **Consolidate legacy redundant/buggy interactivity — don't reproduce it.** Legacy `OrderItem`'s link
  mode rendered the order number **and** a chevron as two separate anchors to the same URL, both labelled
  `"Go to order ${orderNumber}"` — which read "Go to order undefined" whenever no number was supplied.
  V2 ships **one** link (the chevron; the order number is static text), gives it a `labels.goToOrder(n)`
  accessible name with a sensible fallback, keeps any download link as a **sibling** (never nest anchors),
  and promotes inline mode's `onClick`'d `<h4>` to a real `<button>`. Same principle as the a11y rule
  below: extract the *intent* (a card that navigates), regenerate the mechanics correctly.

## Accessibility

Generate a11y from scratch (don't copy legacy). `@storybook/addon-a11y` runs in
`error` mode (`parameters.a11y.test: 'error'` in `.storybook/preview.ts`), so any
axe/WCAG violation **fails the test**.

Run the suite with **`pnpm test-storybook`** (→ `vitest run --project=storybook`):
the `@storybook/addon-vitest` integration renders every story in a headless
Chromium browser, executes its `play` function (interaction test), and runs axe
against the rendered DOM (a11y test). Config lives in `vitest.config.ts` — note it
declares the React + Tailwind plugins **directly** rather than reusing the
library-mode `vite.config.ts` (which externalizes React and sets `build.lib`, both
wrong for rendering stories in a browser; Vitest browser mode uses Vite's
dev/transform pipeline, so those build options don't apply anyway).

**The WCAG 2.2 source of truth is the `wcag-reference` skill**
(`.claude/skills/wcag-reference/`) — a structured index of every Level A/AA
success criterion (plus five adopted AAA) mapped to React 19 / Tailwind v4
implementation logic and a verification method. Start from
`references/component-checklist.md` to get the criteria for a component's
archetype, then read the matching principle file (`perceivable`/`operable`/
`understandable`/`robust`). `scaffold-component` consults it automatically at its
Step 3, so new components inherit the correct `aria`, focus, keyboard, contrast,
and target-size patterns rather than re-deriving them ad hoc.

Patterns established so far:

- Decorative icons render `aria-hidden`; a meaningful `Icon` takes a `label`
  that becomes `role="img"` + `aria-label`.
- Clickable headings nest a real `<button>` inside the heading element for
  native keyboard support, rather than binding a click to a non-interactive tag.
- Custom overlays (e.g. the from-scratch tooltip) trigger on **hover and focus**,
  dismiss on `Escape`, and wire `aria-describedby` onto the focusable trigger. They
  stay **hoverable** (WCAG 2.2 SC 1.4.13): closing is deferred by a short grace
  period so the pointer can cross the gap from the trigger onto the tooltip body
  without it vanishing — never close synchronously on the trigger's `mouseleave`.
- **Tooltips must stay in the viewport (collision-aware positioning).** `ComponentWithTooltip`
  treats `side`/`align` as the *preferred* placement, then on open (and on scroll/resize) measures the
  trigger + tip rects and **flips** the side when the preferred one lacks room and **shifts** the tip
  on the cross axis to clamp it inside the viewport (idempotent — measured from the unshifted
  baseline). Applied via the resolved side class + an inline `transform` that composes with the align
  translate. The tip stays a **DOM descendant of the wrapper** (never portalled) so the hoverable
  grace period keeps working. `IconWithTooltip` and any other consumer inherit this for free — don't
  reimplement positioning per component.
- Collapsed/animated-away content is `inert` + `aria-hidden` so it leaves the
  tab order.
- **Auto-playing media carries a control (2.2.2).** A background/looping video (`Video`) always
  renders a keyboard-operable pause/play button (44px target, `focus-visible` ring, an `aria-label`
  that flips with state), stays `muted` (1.4.2), suppresses auto-play under
  `prefers-reduced-motion` (2.3.3), and exposes a `tracks` slot for captions/descriptions. Because
  atoms may not import other UI atoms (e.g. `Icon`), the control uses inline SVG glyphs. Stories
  pass a minimal WebVTT `<track>` so axe's `video-caption` rule stays green.
- **The a11y gate can conflict with a legacy baseline — fix the component, not the test.** With
  `a11y.test: 'error'`, a `Visual` parity story cannot reproduce a legacy frame that itself fails
  AA (every story, including `visual`-tagged ones, is axe-scanned). When that happens: (1) **fix**
  the component if the correct behaviour is unambiguous and the pixel delta stays under the diff
  gate — e.g. `Text`'s link moved from legacy orange/undecorated (~2:1, fails 1.4.1 + 1.4.3) to
  blue + underline; the mapping still passes because the change is confined to small glyphs. (2)
  Otherwise **don't map** the failing frame and flag the token for design review — e.g. `Tag`'s
  white-on-`tag-orange` (~2.6:1) round-L frame is unmapped, and sub-AA colour options (`Tag` orange,
  `Text` `warning`) are kept as props but never rendered in a scanned story. Record the call in
  `MIGRATION-PROGRESS.md`.
- **Decorative images carry no ARIA (`presentation-role-conflict`).** An `<img alt="">` is
  presentational, so any global ARIA attribute on it (e.g. `aria-busy`) is invalid and axe fails it.
  `Picture` therefore gates its loading flag on the alt — `aria-busy={alt ? isLoading : undefined}` —
  so decorative images stay clean while described images still expose load state. This first surfaced
  when `ArticleCard` rendered a decorative teaser image; the a11y gate caught a latent atom bug the
  moment a new consumer exercised the empty-`alt` path. When an image sits inside a link, prefer
  `alt=""` + a descriptive `aria-label` on the link (one accessible name, no double announcement).
- **Redundant card links: one AT/keyboard path, image as pointer-only.** When a card links its image
  *and* shows a read-more link to the same URL (`ArticleCard`), the read-more `UiLink` is the
  keyboard/AT path (its accessible name includes the heading, 2.4.4) and the image link is taken out of
  the tab order with `tabIndex={-1}` (still clickable by pointer), avoiding a duplicate keyboard stop.
- **A whole-row control that contains a heading → stretched overlay button, never a
  `<button>` wrapping the content.** A `<button>`'s content model is phrasing content, so it may not
  contain a heading (or any flow content) — legacy `SortableListItem` wrapped a `Heading` in a
  `<button>`, which is invalid HTML and makes AT mishandle the heading. The fix: render the rich content
  in a plain container (heading semantics preserved) and lay a single stretched
  `<button aria-label={name}>` over it (`relative` parent + `absolute inset-0`, canonical focus-visible
  ring). The button's accessible name comes from an explicit `name`/label prop (the visible content is
  not its label). Same overlay idea as the redundant-card-links pattern; requires the row's children to
  be **non-interactive** (a nested control would sit under the overlay and be unreachable). This is the
  general answer for any "click the whole card/row, but it has a heading inside" control.
- **A runtime layout grid Tailwind can't express → a named `@utility`, not `grid-cols-[…]`.**
  `SortableListItem`'s `grid-template-columns: 50% auto auto` (+ a `5%` column at `lg`) mixes a
  percentage, `auto`s, and a second percentage — not expressible with Tailwind's fraction-based grid
  utilities, and arbitrary literals are forbidden. Add a named `@utility` (`sortable-item-cols`) with the
  template (and its `@media` cut-in) instead, the same approach as `flex-responsive` / `carousel-slide`.
- **A "dim while busy" container must `inert` its content, not just scrim it.** A loading overlay that
  only lays a translucent `<div>` over a panel (legacy `CartDeliveryDetails`) leaves the underlying
  controls keyboard-focusable *behind* the scrim — the user can Tab into invisible/disabled-looking
  fields. The V2 pattern: keep the decorative scrim (`aria-hidden` — it conveys nothing), mark the busy
  region `aria-busy` (4.1.3, so AT announces the update), **and set `inert` on the content wrapper** so
  the dimmed controls are genuinely non-operable and drop out of the tab order. React 19 renders `inert`
  natively as a boolean prop (`inert={loading}` — omitted when false). Use this for any "block + dim
  while working" surface (`CartDeliveryDetails`; future Modal/Drawer busy states).
- **Uppercase display text is CSS, never `String.toUpperCase()`.** Baking all-caps into the DOM
  (legacy `UserInfoSummary` did `userName.toUpperCase()`) makes some screen readers spell the word out
  letter by letter. Render the original string and apply the `uppercase` utility — visually identical
  (the visual baseline still matches), but AT reads it naturally. Same class of fix as "colour is never
  the sole cue": keep the *semantic* content intact, style the *presentation*.
- **`Heading` is for the document outline, not for bold/large text — or the `heading-order` gate fails.**
  axe's `heading-order` is a hard-gate rule: heading levels may not skip (an `<h3>` followed by an
  `<h5>` fails). Reaching for `Heading order={5}` just to get bold emphasis inside a section that already
  has an `<h3>` fabricates an invalid outline and fails the gate — this bit the cart-product-row names in
  Batch 14 (a price/name row is a *label*, not an outline node → it became bold `Text`). Rule: use
  `Heading` only for real section headings at the correct sequential level; for emphasis that isn't an
  outline node, use `Text` with `font-bold`. (This also applies inside stories — every story is scanned.)
- **A clickable card that contains a form control → wrap it in a `<label>`, never a `<button>`
  (`nested-interactive`).** axe's `nested-interactive` is a hard-gate rule: an interactive element may
  not contain another (a `<button>` wrapping a `<RadioButton>` is two controls — invalid, and AT
  can't operate the inner one). Legacy `ProductVariant` did exactly this. The V2 **selectable-card**
  pattern: make the card a `<label htmlFor={id}>` that wraps the visual content **and** a single native
  radio/checkbox; the label is not interactive, so clicking anywhere on the card toggles the one real
  control (with `ariaLabel` for a concise accessible name). A non-labelable nested control (e.g. an
  `IconWithTooltip` button) is fine — it handles its own clicks and the label targets the input via
  `htmlFor`. Contrast with the *stretched-overlay-button* pattern above: use `<label>`+control when the
  card **selects** a form value; use the overlay button when it **triggers an action** and has no form
  control. Never carry a legacy "button-wraps-a-control" forward.
- **Constrained fields extend the shared input via typed handler props, not an `any` grab-bag.** A
  numeric quantity field must block sign/decimal/exponent keys and paste; legacy passed these through a
  loose `{ other: {...} }` prop. V2 added typed `onKeyDown`/`onPaste` passthroughs to the `InputText`
  molecule (general and reusable) and `ProductQuantityInput` wires its `preventDefault` guard through
  them. When a composed field needs a native handler the shared control doesn't expose, add the typed
  prop to the shared control — don't reach for an untyped escape hatch or a one-off wrapper.
- **A disclosure's trigger belongs OUTSIDE the collapsing region (which goes `inert`).**
  `ExpandableWrapper` sets `inert` + `aria-hidden` on its content while collapsed, so nothing inside is
  focusable or clickable. A trigger nested inside it would therefore become inert *while collapsed* —
  un-clickable, permanently trapping the panel shut (legacy `CampaignBox` nested its expand toggle in
  the wrapper). The correct structure: an always-visible header holding the trigger — a real
  `<button>` with `aria-expanded` bound to the open state and `aria-controls` pointing at the panel's
  `id` — sitting *above* the `ExpandableWrapper`, which contains only the revealed content.
  `ExpandableWrapper` takes an `id` for this; it stays presentational (it owns no button/`aria-expanded`
  — the consumer wires the trigger). Applies to any accordion/expander built on it.
- **A passive, persistent notice is a landmark, not a modal — don't trap focus.** The `wcag-reference`
  checklist files `cookie-bar` under the Overlay/dialog archetype, whose recipe is `role="dialog"` +
  `aria-modal` + a focus trap + move-focus-in-on-open. That's correct for a **blocking** dialog (Modal,
  DrawerSidebar), but wrong for a notice the user can ignore while they use the page: trapping focus or
  stealing it on mount blocks the content they came for. `CookieBar` is therefore a **non-modal named
  `region`** (`<section aria-label>`) — discoverable/skippable as a landmark, with `Escape`-to-dismiss
  as a convenience but **no** trap and **no** autofocus. The archetype card gives you the criteria;
  which subset applies is a judgement call (blocking vs passive) — same "apply judgement, don't copy the
  lookup blindly" call as the disclosure-trigger rule above. Reserve the full trap for genuinely modal
  overlays.
- **A field's helper/error must be programmatically tied to the control, not just placed near it.**
  `FormGroup` `cloneElement`-injects `aria-describedby` (pointing at generated helper + error ids) and
  `aria-invalid` onto the control passed as `children`; `Newsletter` wires its `role="alert"` message
  the same way. The message components carry `id`s for this (`InlineError`/`InlineHelper` both take one).
  This is the general fix wherever a validation/instruction message accompanies an input — legacy
  rendered them as loose siblings (or, worse, signalled errors with a red border only, failing 1.4.1).
- **Composing a component into a `cloneElement` wrapper needs it to forward the injected ARIA attr.**
  `ComponentWithTooltip` clones its trigger to add `aria-describedby` (linking the tip). A raw
  `<button>` accepts it, but a strict-interface component only forwards props it declares. This bit
  `Button` twice (tooltip's `aria-describedby`; the date-picker trigger's `aria-haspopup`/`aria-expanded`),
  so **`Button` now extends `ButtonHTMLAttributes` and rest-spreads all standard `<button>` attributes**
  onto the element (the `ClickableListItem` pattern) — DS-specific props (`surface`, `size`, `loading`, …)
  stay explicit/documented, everything else (`id`, `name`, `onClick`, `aria-*`, `data-*`) flows through.
  So `Button` composes into any ARIA-injecting wrapper. When wrapping a design-system component in a
  prop-injecting wrapper (`cloneElement`, or a dialog/tooltip trigger), confirm the target forwards
  arbitrary attributes rather than assuming it behaves like a native element.
- **The canonical modal overlay (`DrawerSidebar`) — and why `role="dialog"` goes on a `<div>`, not
  `<aside>`.** A blocking overlay (the counterpart to the passive-notice rule above) implements the full
  trap: `role="dialog"` + `aria-modal` (while a backdrop is shown), a required `ariaLabel` (a drawer has
  no inherent heading, so it would otherwise be an unnamed dialog), move focus to the close button on
  open, **trap Tab within the panel**, close on `Escape`/backdrop/outside-click, and **return focus to
  whatever was focused before it opened**. Because the trigger belongs to the *consumer* (unlike
  `MobileNavigation`, which owns its hamburger and can keep a `toggleRef`), capture the opener with
  `previouslyFocused.current = document.activeElement` on open and `.focus()` it on close — the general
  return-focus mechanism for any controlled overlay. Body scroll is locked (`document.body.style.overflow
  = 'hidden'`) unless opted out; the Framer slide is gated on `useReducedMotion`. **Put the dialog role on
  a `<div>`, not the legacy `<aside>`:** axe's `aria-allowed-role` is a hard-gate rule and rejects
  `role="dialog"` on `<aside>` (whose implicit role is `complementary`). This only surfaces on the *open*
  stories — a play test that opens then `Escape`-closes the drawer scans clean in `afterEach` because the
  panel has unmounted, so add an always-open `Visual`/a11y story to exercise the mounted dialog.
- **A row of small repeated controls (pagination dots) can't be as dense as legacy — 24px is the target
  floor (2.5.8).** `Carousel`'s dots are 8px visuals inside 24px-square button targets. WCAG 2.5.8
  requires each pointer target to be ≥24px *or* (if undersized) sit so a 24px-diameter circle centred on
  it doesn't intersect a neighbour — i.e. ≥24px centre-to-centre either way. Legacy packed the dots ~15px
  apart (sub-target), which fails; V2 matches the legacy dot *size* but caps density at `gap-0` (adjacent
  24px targets, ~24px pitch) — the tightest compliant spacing. Don't chase a legacy layout that only
  looks tight because its targets are too small. (`Carousel` also gained `arrowsWithDots`: the prev/next
  arrows render in-flow on the pagination row, vertically centred with the dots and pushed to the edges —
  a disabled arrow keeps its space via `opacity-0` so the dots stay centred, matching the legacy
  bottom-arrow layout. `OfferCardList` uses it.)
- **Reserve the error row so validation doesn't shift the layout (`FormGroup reserveErrorSpace`).** When
  a field's error appears/clears, an un-reserved slot pushes everything below it down (CLS) — and in a
  multi-column form grid it misaligns the row. `FormGroup` takes an opt-in `reserveErrorSpace` that keeps
  a fixed `min-h-6` (1.5rem, matching the legacy fixed-height error slot) under the control even with no
  error. Opt-in (default off) so single-field consumers and their frozen baselines are unaffected; `Form`
  enables it for every field. Reserve space where messages come and go in a laid-out group; skip it for a
  lone field where a shift is harmless.
- **A radio-group container names itself with `<fieldset>`/`<legend>`, and a scrollable list of controls
  needs no `tabindex`.** `ProductVariantList` renders its `ProductVariant` selectable-cards as one native
  radio group inside a `<fieldset>` named by a visually-hidden `<legend>` (1.3.1) — arrow-key selection
  and the group name come free, no custom `role="radiogroup"`/`aria-activedescendant` machinery. Its
  `max-h` scroll region carries no `tabindex`: axe's `scrollable-region-focusable` only fires when a
  scroll container has **no** focusable descendants, and the radios are focusable, so it's already
  operable. (Add `tabindex={0}` only to a scroll region of *non-focusable* content, as `Carousel`'s track
  does.)

## Internationalisation (i18n)

**No component may hardcode a human-readable UI string it renders itself.** This library ships to
consumers of any locale, so any text the component produces that the consumer doesn't already supply —
control accessible-names (`aria-label`s on arrows, steppers, close buttons), landmark names, visible
built-in labels, status messages — must be **overridable, with an English default**. Consumer-supplied
content (`children`, `alt`, label text passed in as a prop) is exempt; that's already theirs to localise.

The convention:

- Group a component's strings in **one optional `labels` object prop**, typed by an exported
  `ComponentNameLabels` interface (each field optional, `@default` documented in TSDoc).
- Define module-level `defaultXxxLabels` and merge at the top of the component:
  `const t = { ...defaultXxxLabels, ...labels }`. Use `t.previous` etc. in the markup.
- **Parameterised strings are functions, not templates** — `goToPage?: (page: number) => string`,
  default `(page) => \`Go to page ${page}\`` — so interpolation is type-safe and the consumer controls
  word order.
- Export the `Labels` type from the component `index.ts` **and** `src/index.ts`.
- Add a **`Localized` story** whose `play` passes a `labels` override and asserts the new accessible
  name, so the prop is exercised by the a11y/interaction gate (`pnpm test-storybook`).

Reference implementations: [`Carousel`](../src/components/organisms/Carousel/Carousel.tsx) (`CarouselLabels`)
and [`Pagination`](../src/components/molecules/Pagination/Pagination.tsx) (`PaginationLabels`).

> **Default language is English, deliberately.** A design system shouldn't bake in a locale, even though
> today's only consumer (the Spendrups storefront) is Swedish. **Migration note:** that app must now pass
> `labels` to keep Swedish AT announcements — otherwise these controls announce in English. This is the
> one intentional behaviour change from the label refactor.

## Documentation

Component docs are **written once as TSDoc** and surface in two places, so there's
no separate doc artefact to keep in sync:

- the emitted `.d.ts` — consumers get every prop description as IDE hover / IntelliSense;
- the Storybook **autodocs** page — a generated page per component (description +
  interactive props table + live stories). Enabled globally in `.storybook/preview.ts`
  (`tags: ['autodocs']`); the props table is built by `react-docgen-typescript`
  (configured in `.storybook/main.ts`), which reads the TSDoc off the TS types.

So the rule is simply **keep the TSDoc good**:

- **Component summary** — a `/** … */` block directly above `function ComponentName(`:
  one line on what it is, then its accessibility contract (roles/aria it sets, keyboard
  model, what the *consumer* must supply). This becomes the docs-page description.
- **Every prop** gets a TSDoc line — purpose, `@default`, units, a11y constraint. An
  undocumented prop renders a blank table row; even the conventional
  `className`/`ref`/`children` get a short standard note so no row is empty.
- **First non-`visual` story is the canonical one** — autodocs uses it as the primary preview.
- **`.mdx` only when warranted** — overlays, forms, or anything with a keyboard contract get
  a sibling `ComponentName.mdx` (`<Meta of>`, `<Canvas>`, an Accessibility section, a
  Do/Don't). Simple atoms don't need one.

`scaffold-component` drives all of this at its Step 5; verify with `pnpm build-storybook`.

## Build & verify

- `pnpm build` → `tsc --noEmit` (×2 configs) + `vite build` in library mode.
  Must pass with zero TS errors.
- `pnpm test-storybook` → `@storybook/addon-vitest` runs every story in headless
  Chromium: `play` functions (interaction) + axe (a11y, fails on violations).
- `pnpm build-storybook` → compiles Storybook incl. every component's **autodocs**
  page; the doc-specific check (a broken MDX or missing docgen surfaces here).
- `pnpm test:visual` → Playwright visual-regression against the **frozen** legacy
  baseline in `legacy-snapshots/` (see [Visual regression](#visual-regression)).
- React, React DOM and Framer Motion are **peerDependencies** and externalized
  by Vite — never bundled. `clsx` / `tailwind-merge` are regular deps (bundled).
- **`'use client'` banner:** the whole library is client components (hooks throughout), so
  `rollupOptions.output.banner: "'use client';"` prepends the directive to the bundled `.mjs`/`.cjs`
  entry. Without it, a React Server Components consumer (Next.js App Router) importing from the
  barrel fails to build (_"useState only works in a Client Component"_). `banner` is sourcemap-aware
  and applies to JS chunks only (not the CSS asset); the single-entry bundle emits it once. Verify
  after a build: `head -c 20 dist/index.mjs` and `dist/index.cjs` both start with `'use client';`.
- **CSS output:** `src/index.ts` imports `src/styles/index.css`, so the build emits a single
  `dist/ecom-designsystem.css` (Tailwind theme + utilities + `@font-face`). `package.json`
  `sideEffects: ["**/*.css"]` keeps that import through tree-shaking while JS stays
  tree-shakeable. Vite lib mode base64-inlines CSS assets, so a build-only plugin in
  `vite.config.ts` (`externalizeFonts`, guarded on `build.lib` — never runs in the Storybook
  build) extracts the woff2 fonts to `dist/assets/fonts/` and rewrites the CSS to relative
  `url()`s, keeping the CSS lean (~23 kB) and the fonts cacheable. Consumers import
  `@rebels-ecom/ecom-designsystem/styles.css`.

## Visual regression

`pnpm test:visual` (Playwright, `tests/visual/`) renders each migrated V2 component in Storybook
and pixel-diffs it against the **frozen** legacy screenshot in `legacy-snapshots/` — the definitive
baseline captured from `main` (desktop 1280×800, mobile 375×667, both at devicePixelRatio 1). It's a
migration parity check, independent of the a11y/interaction suite.

- **Baselines are read-only.** Playwright reads the PNGs directly via `snapshotPathTemplate` and
  never writes them. Do **not** run `--update-snapshots` — it would overwrite the reference images.
- **Story ↔ baseline map.** V2 story ids and renders don't match legacy 1:1, so the pairing is
  explicit in `tests/visual/baseline-map.ts`: each entry maps a static, `['visual']`-tagged `Visual`
  story to a legacy basename. `scaffold-component` adds one entry per migrated component that has a
  baseline; components with no legacy counterpart (e.g. `Icon`, `ExpandableWrapper`) get none.
  **One story may map to several baselines** — the spec's test title embeds both `storyId` and
  `legacyBaseline`, so a single `Visual` frame that legitimately reproduces two legacy captures (e.g.
  ArticleList's `Default` swipe-carousel frame is also Carousel's `carousel-story` frame; Breadcrumbs'
  shared `Start > Öl` row is both the `with-background` and `without-background` frames) gets one
  baseline-map entry per baseline, and `--grep <name>` still isolates a component.
- **A whole organism can be untestable when it's taller than the capture viewport.** The mobile
  `viewports: ['desktop']` opt-out assumes desktop still fits 1280×800. But a tall organism (e.g.
  `ArticleList` — a title over a stacked/rowed set of image cards) is captured **full-page** by legacy
  at *both* viewports (three-cards was 1280×918 desktop, 375×1950 mobile), and even a swipe carousel can
  come in a few px over (default was 1280×805 vs the fixed 800). The viewport-clipping harness can never
  match those dimensions, so the component is **gallery-only** (no baseline-map entry) even though every
  child is migrated and the frame reproduces faithfully by eye. This is measured, not assumed: build the
  `Visual` story, map it, run `playwright --grep`, and read the dimension mismatch / diff ratio before
  deciding — then drop the entries with a documented NOTE if they can't match.
- **Per-viewport opt-out.** An entry may restrict `viewports` when one legacy PNG is structurally
  incomparable — e.g. `InputFile`'s mobile baseline is 420px wide at a 375px viewport because the
  legacy component's absolutely-positioned hidden file input overflowed the capture; V2 fixes that
  overflow (`sr-only`), so only the desktop frame is diffed. Always leave a comment explaining why.
  A second, recurring cause: **a mobile story taller than the 375×667 viewport.** The legacy PNG was
  captured **full-page** (e.g. `Textarea`'s five-field stack → 375×705), but the V2 harness
  (`expect(page).toHaveScreenshot()`) captures the **viewport** (375×667), so the dimensions can
  never match — map such stories `viewports: ['desktop']`. Desktop content that fits in 1280×800 is
  unaffected. A third cause: **a high-contrast block amplifying the known vertical-rhythm drift on
  mobile.** The Edmondsans-vs-legacy line-height/margin offset is a fixed few-pixel shift; how many
  diff pixels it produces depends on what's *at* the shifted position. `OrderItem`'s `mina-ordrar-2`
  and `mina-ordrar-1` frames are structurally identical, but `-2`'s dark **blue** tag makes the shift
  read ~3% on the 375px canvas (over the gate) while `-1`'s near-white **yellow** tag hides the same
  shift under 2% — so the same drift crosses the gate for one frame and not the other. When a frame
  contains a dark/high-contrast element over stacked text, check the mobile diff specifically; if it's
  pure vertical ghosting (no structural/colour/size change) it's this drift, not a component bug →
  map `viewports: ['desktop']` with a comment. Desktop dilutes the offset across the wider canvas.
- **Dead legacy CSS ≠ design intent.** Several legacy modules contain selectors that never matched
  (broken `&input[…]` nesting in `radio-button`, non-existent `.button`/`.small` classes in
  `input-file`), so the frozen baseline shows the *effective* rendering, not the intended one. Rule of
  thumb when migrating: port the effective rendering when restoring intent would visibly diverge from
  the baseline (InputFile's plain-text affordance), but restore obvious intent when the pixel impact is
  within the diff gate (RadioButton's `accent-color`/sizing). Note the call in
  `.claude/docs/MIGRATION-PROGRESS.md` either way.
- **Threshold = the gate.** `playwright.config.ts` sets `maxDiffPixelRatio: 0.02` (+ per-pixel
  `threshold: 0.2`); a larger diff fails. A Tailwind rewrite is rarely pixel-identical, so review
  failures in `playwright-report/` and either drive the component toward parity or, for an
  intentional/approved change, widen the threshold with a comment.
- **Beware false-green on small frames.** `maxDiffPixelRatio` is a share of the *whole* 1280×800 /
  375×667 canvas, so a component that paints only a small element (a lone button, a single icon) can
  render **completely wrong** and still pass — the differing pixels never reach 2% of the frame.
  ComponentWithTooltip hit exactly this: its parity story showed a "Hover me" button while the legacy
  baseline was an `IconButton` close-icon, and the gate stayed green. Two defences: make `Visual`
  frames reproduce the legacy story faithfully (per `scaffold-component` Step 4), and eyeball them in
  the review gallery below rather than trusting the pass. If a faithful frame isn't buildable yet
  (e.g. it needs an unmigrated dependency), drop the baseline-map entry with a comment instead of
  shipping a trivially-green one.
- **Reproduce a `fixed` full-screen frame with an `absolute` overlay in a viewport-sized box.** A
  `position: fixed` overlay in a story escapes its Storybook block and covers the whole autodocs page
  (a 0.95-opaque scrim would bury the props table). Keep the component's API default `fixed`, but have
  its `['visual']` story render `position="absolute"` inside a `relative h-screen w-full` box — the
  absolute overlay fills the viewport-sized box, producing pixels identical to the legacy fixed scrim,
  without the page-covering layer. Use story-level `render` (not a meta `decorators`) so the Visual
  frame doesn't inherit the demo wrapper. `LoadingOverlay` is the reference (four scrim variants, both
  viewports).
- **Cadence.** Scoped per component during scaffolding (`pnpm exec playwright test --grep <component>`,
  reusing a running `pnpm storybook`), then the full `pnpm test:visual` suite as the batch gate.

### Reviewing a green run — the review gallery

`pnpm test:visual` passing means each diff was ≤ `maxDiffPixelRatio` (2%), **not** that the renders are
identical — up to 2% of drift can hide in a pass, and Playwright only attaches its expected/actual/diff
images on *failure*, so a green run leaves nothing to eyeball. `pnpm visual:review` fills that gap:

- It runs `scripts/visual-review.spec.ts` under its own scoped config
  (`scripts/visual-review.config.ts`, `testDir: ./scripts`) so it's **isolated from the gate** — the
  gate runs everything under `./tests/visual` and never touches the generator, and vice-versa.
- It reads the same `tests/visual/baseline-map.ts` (so it honours the `viewports` opt-out — InputFile
  shows desktop-only), captures the current V2 render at each viewport, pairs it with the legacy PNG,
  and writes `visual-review/index.html` (git-ignored, regenerated each run). It prints a `file://…` link.
- **It reports a per-frame Δ and ranks by it — you read numbers, not every image.** For each mapped
  frame it computes Δ = the share of perceptibly-different pixels, using the **same YIQ colour model
  pixelmatch (the gate) uses**, in-browser via a canvas (both PNGs passed as data URLs — no pngjs/
  pixelmatch dependency). Frames sort **worst-Δ first**, each carries a `Δ x%` badge (green ≤0.2% /
  amber / red "review" ≥2%), and the header summarises "N to review, M minor drift". So a sub-gate drift
  is surfaced as a sorted number instead of something you have to catch by eye.
  **Δ is a review-sensitivity metric, NOT the gate verdict:** it omits pixelmatch's anti-aliasing
  detection, so it reads a little high on text-heavy frames (it counts the Edmondsans-vs-legacy font-edge
  drift the gate forgives). Treat Δ≥2% as "look at this," not "failed" — `pnpm test:visual` is
  authoritative for pass/fail. (This is why the known Heading / GroupWrapper vertical-rhythm drift shows
  ~2–2.5% Δ yet passes the gate.)
- Each pair gets **Legacy | Current | Compare**; the Compare pane has an onion-skin opacity slider and a
  `mix-blend-mode: difference` toggle (matching pixels go black). Pure CSS — no extra deps.
- It also surfaces a **size-mismatch** badge (read straight from each PNG's IHDR) and renders any
  `['visual']`-tagged story that has *no* baseline entry as a current-only tile (discovered via the live
  Storybook `index.json`), so nothing with a Visual story silently escapes review.
- **The current batch is pinned on top.** With ~90 frames the gallery is long, and you almost always
  want the batch you just built. The generator parses the `Current Micro-Batch` bullet in
  `MIGRATION-PROGRESS.md` (which scaffold-component bold-lists every batch) for the batch's component
  names, then: (1) renders a `★ Latest — Batch N` group first, ahead of `Earlier batches`; (2) badges
  and green-accents those cards; (3) offers a header **filter** box (by component / story id) and a
  **"Batch N only"** toggle. No per-entry annotation — the migration log is the single source, and the
  feature degrades to a flat list if that line is ever missing. Matching is by story id (`-<name>--`),
  so it works for both mapped and no-baseline `['visual']` stories.
- Reuses a running `pnpm storybook` on :6006 if present; otherwise builds and serves the static book.
  This is a manual review aid, never a gate — don't wire it into CI.

**Two webServer gotchas both configs must respect** (they bit us once — a stale dual-stack `storybook
dev` on :6006 masked them all session, and only surfaced when it was killed and the `http-server`
fallback ran):
- **Probe `127.0.0.1`, not `localhost`.** `http-server` binds IPv4 `0.0.0.0` only, but Node resolves
  `localhost` to IPv6 `::1` first — so a `localhost` health check gets `ECONNREFUSED ::1:6006` forever
  and times out. Both `webServer.url` and `use.baseURL` use `http://127.0.0.1:6006`.
- **Pin `webServer.cwd` to the repo root for `scripts/visual-review.config.ts`.** Playwright defaults
  `cwd` to the *config file's* directory; for a config under `scripts/` that makes
  `http-server storybook-static` serve the nonexistent `scripts/storybook-static` → 404 on `/` → the
  health check never goes green. `cwd: process.cwd()` fixes it (`pnpm visual:review` runs from root).
  The gate's config lives at the root, so it doesn't need this — but it *did* need the 127.0.0.1 fix.

### CI (still to wire up)

Two environment issues must be handled before this gates CI:

1. **`legacy-snapshots/` is git-ignored**, so CI has no baselines. Commit them (they are the
   reference, ~650 PNGs), or restore them in the job from an artifact / LFS / dedicated branch before
   running.
2. **Font/anti-aliasing rendering differs across OS.** The baselines were captured on macOS; the same
   render on a Linux CI runner diffs heavily. Generate *and* run the visual tests in the pinned
   Playwright Linux container (`mcr.microsoft.com/playwright:v<version>-jammy`) so capture and
   comparison share one environment. `retries: 2` and `forbidOnly` are already set for CI in
   `playwright.config.ts`.
