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
