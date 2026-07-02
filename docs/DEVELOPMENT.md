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

## Build & verify

- `pnpm build` → `tsc --noEmit` (×2 configs) + `vite build` in library mode.
  Must pass with zero TS errors.
- `pnpm test-storybook` → `@storybook/addon-vitest` runs every story in headless
  Chromium: `play` functions (interaction) + axe (a11y, fails on violations).
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
- **Threshold = the gate.** `playwright.config.ts` sets `maxDiffPixelRatio: 0.02` (+ per-pixel
  `threshold: 0.2`); a larger diff fails. A Tailwind rewrite is rarely pixel-identical, so review
  failures in `playwright-report/` and either drive the component toward parity or, for an
  intentional/approved change, widen the threshold with a comment.
- **Cadence.** Scoped per component during scaffolding (`pnpm exec playwright test --grep <component>`,
  reusing a running `pnpm storybook`), then the full `pnpm test:visual` suite as the batch gate.

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
