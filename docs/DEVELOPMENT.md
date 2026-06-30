# Design System V2 — Developer Wiki

Architectural context and conventions for the V2 migration. Skim this before
touching components or styling. (Spec/automation rules live in `.claude/CLAUDE.md`.)

## Component anatomy

Every component lives in `src/components/<atoms|molecules|organisms>/<ComponentName>/`
and ships three files:

- `ComponentName.tsx` — logic, UI, Tailwind classes.
- `ComponentName.stories.tsx` — Storybook 10 CSF with at least one `play`
  function (drives the Playwright visual/a11y suite).
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

Generate a11y from scratch (don't copy legacy). Storybook runs `addon-a11y`
in `error` mode, so stories fail on WCAG violations. Patterns established so far:

- Decorative icons render `aria-hidden`; a meaningful `Icon` takes a `label`
  that becomes `role="img"` + `aria-label`.
- Clickable headings nest a real `<button>` inside the heading element for
  native keyboard support, rather than binding a click to a non-interactive tag.
- Custom overlays (e.g. the from-scratch tooltip) trigger on **hover and focus**,
  dismiss on `Escape`, and wire `aria-describedby` onto the focusable trigger.
- Collapsed/animated-away content is `inert` + `aria-hidden` so it leaves the
  tab order.

## Build & verify

- `pnpm build` → `tsc --noEmit` (×2 configs) + `vite build` in library mode.
  Must pass with zero TS errors.
- `pnpm test:visual` → Playwright visual/a11y regression over the stories.
- React, React DOM and Framer Motion are **peerDependencies** and externalized
  by Vite — never bundled. `clsx` / `tailwind-merge` are regular deps (bundled).
