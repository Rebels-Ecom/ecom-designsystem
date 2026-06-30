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
- `pnpm test:visual` → Playwright visual-regression (`tests/visual/*.spec.ts`).
  **Scaffolded but not yet implemented** — `playwright.config.ts` exists, but there
  are no specs/baselines, so it currently reports "No tests found". Planned approach:
  seed baselines from the already-approved legacy components on the `main` branch
  (legacy needs Radix/`classnames`/React 16, so it must be rendered in main's own
  environment, not this toolchain), diff V2 against them, then let accepted V2 renders
  become the ongoing drift baseline. A separate concern from the a11y/interaction tests.
- React, React DOM and Framer Motion are **peerDependencies** and externalized
  by Vite — never bundled. `clsx` / `tailwind-merge` are regular deps (bundled).
