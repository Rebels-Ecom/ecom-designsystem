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
  currently `animate-grow` (LoadingBar's bar grow-in) and `animate-shimmer`
  (the loading pulse). The decorative loading-skeleton look is a single
  `@utility skeleton-shimmer` (the gradient + background-size the shimmer sweeps),
  reused by `Placeholder` and `Picture`'s loading state — don't hand-roll a new
  skeleton gradient per component, and don't inline it as `bg-[…]`. **Always
  gate decorative motion with `motion-reduce:animate-none`** at the call site so
  `prefers-reduced-motion` is honoured (WCAG 2.3.3†); Playwright's
  `animations: 'disabled'` freezes these at their end state, so a one-shot
  `forwards` grow captures at full height deterministically.
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
- **A runtime value that must be *responsive* → CSS-var + a media-query `@utility`.** Inline
  `style={{ … }}` handles a single runtime dimension, but it can't carry breakpoints. When a runtime
  prop needs a different value per breakpoint (e.g. `FlexItem`'s `flex={{sm,md,lg}}`), set the values
  as inline CSS custom properties (`--flex-sm/md/lg`) and read them from a custom utility that owns
  the media queries — `@utility flex-responsive { flex: var(--flex-sm,1); @media (min-width:48rem){…} }`.
  Tailwind v4 `@utility` accepts nested `@media`, so the breakpoint logic stays in the theme and the
  component stays arbitrary-value-free. `FlexItem` is the reference.

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

## Molecules & composition

- **Molecules live in `src/components/molecules/` and may import atoms** (e.g. `Button` → `Icon`,
  `Loader`; `UiLink` → `Icon`) — the atom rule ("never import another component") applies only to
  atoms. Category is decided by Atomic-Design reclassification (`ATOMIC-MAP.md`), not the legacy
  folder, so many legacy `atoms/*` land in `molecules/`.
- **Batches are picked from the dependency-ordered _Build queue_ in `MIGRATION-PROGRESS.md`**, not
  alphabetically — each entry's `needs:` are migrated in an earlier tier, so the next N unchecked are
  always buildable. Regenerate the tiers from the legacy import graph with the session scratch scripts
  if the map drifts.
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
- **Per-viewport opt-out.** An entry may restrict `viewports` when one legacy PNG is structurally
  incomparable — e.g. `InputFile`'s mobile baseline is 420px wide at a 375px viewport because the
  legacy component's absolutely-positioned hidden file input overflowed the capture; V2 fixes that
  overflow (`sr-only`), so only the desktop frame is diffed. Always leave a comment explaining why.
  A second, recurring cause: **a mobile story taller than the 375×667 viewport.** The legacy PNG was
  captured **full-page** (e.g. `Textarea`'s five-field stack → 375×705), but the V2 harness
  (`expect(page).toHaveScreenshot()`) captures the **viewport** (375×667), so the dimensions can
  never match — map such stories `viewports: ['desktop']`. Desktop content that fits in 1280×800 is
  unaffected.
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
- Each pair gets **Legacy | Current | Compare**; the Compare pane has an onion-skin opacity slider and a
  `mix-blend-mode: difference` toggle (matching pixels go black). Pure CSS — no extra deps.
- It also surfaces a **size-mismatch** badge (read straight from each PNG's IHDR) and renders any
  `['visual']`-tagged story that has *no* baseline entry as a current-only tile (discovered via the live
  Storybook `index.json`), so nothing with a Visual story silently escapes review.
- Reuses a running `pnpm storybook` on :6006 if present; otherwise builds and serves the static book.
  This is a manual review aid, never a gate — don't wire it into CI.

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
