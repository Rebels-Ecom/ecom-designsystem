---
name: scaffold-component
description: >-
  Generates a fully compliant React 19 component for the V2 Design System — the component file,
  Storybook stories with play functions, and a clean index export — wired to the project's atomic
  classification, strict TypeScript, Tailwind semantic tokens, and a WCAG spec from `wcag-reference`.
  Use this whenever you're asked to build, scaffold, create, migrate, or port a component into `src/`
  (e.g. "scaffold the Button", "build the Card", "migrate the Modal from legacy", "add a new atom"),
  even if the word "scaffold" is never used. This is the canonical way to create a V2 component — don't
  hand-roll the file structure, because a one-off component drifts from the library conventions.
---

## Purpose

Create a fully compliant React 19 component so every component lands with identical structure, strict
typing, token-based styling, and accessible, tested stories. That consistency is the whole point of a
design system — it's what lets the library scale and what consumers depend on — so route every new
component through this flow rather than building it by hand.

## Execution steps

**Step 1 — Locate the component**

- **First, once per session/batch:** read `reference/CHEATSHEET.md` (in this skill's directory) — the
  batch primer: the per-batch reading map, a token quick-map, the reference-component-per-archetype table,
  the gotchas that fail the build, and the verify commands. It exists so you don't re-read STYLE-GUIDE /
  `cn.ts` / `index.css` / the four WCAG principle files wholesale every batch. Skip if it's already in
  context this session.
- Read `.claude/docs/ATOMIC-MAP.md` to find the target and its V2 category (atom / molecule / organism).
- Derive the destination, e.g. `src/components/atoms/Button`, and note the legacy source path.

**Step 2 — Extract intent from legacy (not its implementation)**

- Read the legacy source. Keep the prop shape, business logic, and the behaviour it supports.
- Discard legacy styling, React 16 patterns, `forwardRef` wrappers, and any legacy accessibility code —
  `CLAUDE.md` requires a11y to be generated fresh in Step 3, never copied from `legacy/`.

**Step 3 — Derive the Accessibility Spec (consult `wcag-reference`)**

`wcag-reference` is where "correct" accessibility is defined for this repo, so source the spec there
rather than from memory:

- Read `.claude/skills/wcag-reference/references/component-checklist.md`. Find the component in the §3
  lookup (or classify it by behaviour via §2) to get its **archetype(s)** — a component can match
  several; union them.
- **Fast path:** read the matching card(s) in `.claude/skills/wcag-reference/references/archetype-cards.md`
  — each pre-unions the Universal baseline with the archetype's criteria and distils the **Implementation**
  + **Verify** into what to write. Union multiple cards when the component matches several. Open a principle
  file (`perceivable.md` / `operable.md` / `understandable.md` / `robust.md`) only for an unusual criterion
  the card doesn't cover, or to confirm the normative text.
- Write a short **Accessibility Spec**: the semantic element, `aria`/`role` + state, focus treatment,
  keyboard model, contrast tokens, and target sizes — plus the checks to encode in stories.

Carry this spec into Steps 4–8 — it drives the implementation (4), the documented accessibility
contract (5), and the verification (8).

**Step 4 — Generate the three files**

Match the conventions already in `src/components/` (see the skeleton below): an explicit `ref` prop,
typed `ReactNode` children, a named function with a bottom `export`, no semicolons, and `cn()` for
class merging.

*1. `ComponentName.tsx`* — logic, UI, Tailwind classes.

- **Typing:** an explicit `interface ComponentNameProps`; `children: ReactNode`. The `any` type is
  forbidden — it erases the type safety the published package promises its consumers.
- **React 19:** pass `ref` as a normal prop (`ref?: Ref<HTMLxxxElement>`), no `forwardRef`. Lean on the
  React 19 compiler; skip manual `useMemo`/`useCallback` unless profiling shows a real need.
- **Styling:** Tailwind utilities via semantic tokens only. Invoke the `tailwind-migrator` skill to
  convert legacy styles — it enforces `.claude/docs/STYLE-GUIDE.md`, drops 💀 dead tokens, and merges
  with `cn()`.
- **Accessibility:** implement every item in the Step 3 spec — correct element, `aria`/`role`/state,
  full keyboard operation, and a visible keyboard focus ring via `focus-visible:` utilities per
  `2.4.7`/`2.4.13` (e.g. `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary`).
- **Localisation (no hardcoded UI strings):** any human-readable text the component renders that the
  consumer does **not** already supply — control accessible-names (`aria-label`s on arrows/steppers/
  close buttons), landmark names, visible built-in labels, status messages — must be an **overridable
  prop with an English default**, never a baked-in literal (this library ships to consumers of any
  locale). Group a component's strings in one optional `labels` object prop typed by a
  `ComponentNameLabels` interface, merge over module-level `defaultXxxLabels`
  (`const t = { ...defaultXxxLabels, ...labels }`), and type any interpolated string as a **function**
  (`goToPage?: (page: number) => string`), not a template. Export the `Labels` type from `index.ts` and
  `src/index.ts`, and add a `Localized` story whose `play` overrides `labels` and asserts the new name —
  so the prop is covered by the a11y/interaction gate. Consumer-supplied content (`children`, `alt`,
  `label` text passed in) is exempt — that's already the consumer's to localise. See the i18n convention
  in docs/DEVELOPMENT.md; Carousel and Pagination are the reference implementations.

*2. `ComponentName.stories.tsx`* — Storybook 10 CSF.

- **Interaction test:** at least one `play` function (imports come from `storybook/test`) that drives
  real interaction — click, keyboard, focus. The Vitest Storybook project (`pnpm test-storybook`)
  executes these, so they're how behaviour stays verified as the library grows.
- **Accessibility verification:** turn each **Verify** note from the spec into something runnable — add
  an a11y story rendering the variants/states the criteria call out so `@storybook/addon-a11y`'s axe
  pass scans them, and add `play` assertions for the behavioural checks (keyboard activation, focus
  move/return on overlays, `aria-*` toggling, `Escape`-to-dismiss).
- **Visual parity:** add one static story `export const Visual` tagged `['visual']`, with **no `play`**
  (the captured frame must not mutate) and `parameters: { layout: 'fullscreen' }` (the legacy baselines
  were captured with no Storybook padding). **Read the legacy `*.stories.*` file and reproduce that
  story's exact frame** — same variants, props, and text — because a mismatched frame produces a
  meaningless diff (e.g. legacy `heading-story` renders all five levels with the text "Heading here", so
  the parity story renders exactly that, not a lone heading). The canvas background already matches
  legacy globally via `.storybook/preview.css`, so you don't set it per story. This is the frame the
  visual-regression suite diffs against the legacy baseline (wired in Step 7, run in Step 8).

*3. `index.ts`* — re-export the component and every exported type.

Canonical shape — an interactive atom; mirror these conventions and import sources exactly:

```tsx
// Button.tsx
import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
  /** Button label / content. */
  children: ReactNode
  /** Visual emphasis. @default 'primary' */
  variant?: ButtonVariant
  /** Native button type. @default 'button' */
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<button>`. */
  ref?: Ref<HTMLButtonElement>
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-action-primary text-text-on-primary hover:bg-action-primary-hover',
  secondary: 'bg-action-secondary text-text-on-secondary border border-border-on-secondary',
}

/**
 * Primary call-to-action button. Renders a native `<button>` (role + keyboard operation for
 * free) with a visible `focus-visible` ring (2.4.7) and a ≥44px touch target (2.5.5†).
 * Consumers pass a text label via `children`; an icon-only button must add an `aria-label`.
 */
function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled,
  onClick,
  className,
  ref,
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded px-4 font-cta-l',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  )
}

export { Button }
```

```ts
// index.ts
export { Button } from './Button'
export type { ButtonProps, ButtonVariant } from './Button'
```

```tsx
// Button.stories.tsx — note the import sources (storybook/test, @storybook/react-vite)
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const KeyboardActivation: Story = {
  args: { children: 'Add to cart' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Add to cart' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}
```

**Step 5 — Document the public API**

Documentation is written **once as TSDoc** and surfaces in two places: the emitted `.d.ts` (so
consumers get it as IDE hover / IntelliSense) and the Storybook **autodocs** page (component
description + interactive props table + live stories). Autodocs is enabled globally in
`.storybook/preview.ts` (`tags: ['autodocs']`), so you don't tag stories — you make the TSDoc good.
The docs table is generated by `react-docgen-typescript` (configured in `.storybook/main.ts`), which
reads these comments from the TS types.

- **Component summary:** a `/** … */` block immediately above the `function ComponentName(`
  declaration — one line on what it is and its atomic level, then the **accessibility contract**: the
  role/semantics it sets, its keyboard model, and what the *consumer* must supply (e.g. "provide a
  non-empty `alt` unless decorative"; "render a region whose id matches `controls`"). Distil this from
  the Step-3 spec — it becomes the docs-page description.
- **Every prop:** a TSDoc line on each member of `ComponentNameProps` — what it does, `@default` where
  there is one, units, and any accessibility constraint. This is what fills the props table; an
  undocumented prop renders a blank description. The conventional `className` (merged via `cn()`),
  `ref` (the forwarded element), and `children` get a brief standard note so no row is empty.
- **Canonical-first stories:** order the exports so the first **non-`visual`** story is the most
  representative — autodocs uses it as the primary preview. Add `argTypes` only to label a control,
  constrain it, or hide a non-authoring prop.
- **Rich docs (conditional):** for components with real usage nuance — overlays/dialogs, forms,
  anything with a keyboard contract or a Do/Don't — add a sibling `ComponentName.mdx` (`<Meta of={…} />`,
  `<Canvas>`, an **Accessibility** section, a Do/Don't). Simple atoms are fully served by the TSDoc +
  autodocs; don't add an MDX just to have one.

**Step 6 — Update the public API (`src/index.ts`)**

- Read `src/index.ts` first; if an export already exists, skip it (no duplicates).
- Append in the flat-export format:
  - `export { ComponentName } from './components/category/ComponentName'`
  - `export type { ComponentNameProps } from './components/category/ComponentName'`

**Step 7 — Register the visual baseline**

The visual-regression suite (`pnpm test:visual`) renders each mapped story and pixel-diffs it against
the **frozen** legacy PNG in `legacy-snapshots/` — the definitive baseline. Wire the new component in:

- Find its legacy baseline: `ls legacy-snapshots | grep -i <component>`. Pick the file whose render your
  Step-4 `Visual` story reproduces, then strip the `-desktop`/`-mobile` suffix to get the basename
  (e.g. `design-system-atoms-heading--heading-story`).
- Append a strictly-typed entry to `tests/visual/baseline-map.ts` mapping the `Visual` story id (the
  kebab-cased `title` + export, e.g. `design-system-atoms-heading--visual`) to that basename.
- **A legacy baseline exists but your faithful frame can't clear the 2% gate** (full-bleed brand
  image + brand-font/accessible-colour text, a PNG captured at non-viewport dimensions, a legacy image
  that rendered broken, a non-deterministic loading/animation frame, a vector-vs-raster rendition) →
  add the entry with **`reviewOnly: true`**. The pixel gate skips it, but the `visual:review` gallery
  still pairs Legacy | Current | Compare so a human can sign off. **Do NOT silently drop it to
  gallery-only** (current-only, no Legacy pane) — that is the recurring "a baseline exists but nothing
  pairs it" miss. `reviewOnly` is only for *faithful reproductions* of the legacy scene; if your
  `Visual` story renders a *different* scene (a closed overlay where the legacy captured the open panel,
  a placeholder standing in for an unmigrated child), leave it current-only with a NOTE and revisit once
  the dependency lands.
- **If no legacy baseline exists at all** (a brand-new component, or one only ever rendered inside a
  legacy parent that has no snapshot), add no entry — it simply gets no visual test, and the `['visual']`
  story is current-only in the gallery. Record that in the migration log (Step 9). ⚠ Confirm the snapshot
  truly doesn't exist — grep the **de-hyphenated** component segment (`social-media-link` →
  `socialmedialink`), since a hyphenated grep gives a false "no baseline".
- Never run `playwright test --update-snapshots`: the legacy PNGs are the reference and must not be
  overwritten.

**Step 8 — Verify**

- All three files exist; no duplicate exports in `src/index.ts`.
- Every criterion in the Accessibility Spec has an implementation and a matching story / `play` check.
- Every prop is documented (Step 5) and the component has a summary block — no blank rows in the table.
- Type-check and run the new component's tests:
  - `pnpm build` — must pass with zero TypeScript errors (it runs `tsc --noEmit` before the Vite build).
  - `pnpm test-storybook` — runs the play functions and the `@storybook/addon-a11y` axe pass.
  - `pnpm build-storybook` — the doc-specific check: the autodocs page compiles and renders a populated
    props table + component description (a broken MDX or missing docgen surfaces here). Run once per
    batch, not per component.
  - `pnpm exec playwright test --grep <component>` — visual regression for **just this component**
    against its legacy baseline (the `pnpm test:visual -- --grep` form does **not** forward the flag).
    A diff beyond the configured threshold fails; open the Playwright HTML report to review it. Keep
    `pnpm storybook` running so this reuses the live server instead of rebuilding. (Skip only if the
    component has no baseline — Step 6.)
- **Cadence:** run the scoped `test:visual` per component (above) for tight feedback while you're in
  context, then run the **full** suite once at the end of the 5-component batch (`pnpm test:visual`) as
  the regression gate before moving on.

**Step 9 — Update the migration log**

`.claude/docs/MIGRATION-PROGRESS.md` is the batch's source of truth — keep it in lockstep:

- Flip the component's `[ ]` to `[x]` once all three files exist, `pnpm build` is green, and its
  `test-storybook` + scoped `test:visual` have run. Add a short note if the visual diff needs human
  sign-off, or if the component has no baseline.
- Bump the **Completed / Remaining** counts and the **Current Micro-Batch** line.
- Do this before starting the next component; never advance a batch with a stale log.

## Output

Write the files directly; don't paste the generated code into the chat. Confirm completion in one
sentence, noting what the `play` function covers, whether the autodocs page is populated, and whether a
legacy visual baseline was mapped.
