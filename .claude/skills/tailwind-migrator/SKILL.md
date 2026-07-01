---
name: tailwind-migrator
description: >-
  Converts legacy CSS, CSS modules, and styled-components into strict Tailwind v4 utility classes for
  the V2 Design System — mapping to semantic `@theme` tokens, dropping 💀 dead tokens, and merging
  classes safely with `cn()`. Use this whenever you're translating legacy styling into a V2 component:
  porting a `spendrups.css` block or `.module.css`, replacing `var(--legacy-name)` or hex literals with
  utilities, converting media queries to responsive prefixes, or resolving `className` conflicts. The
  `scaffold-component` skill calls this for its styling step, but reach for it directly any time legacy
  CSS needs to become Tailwind — even if "Tailwind" is never named.
---

## Purpose

Translate legacy styling into Tailwind v4 utilities that consume the project's semantic token layer, so
every V2 component shares one vocabulary of colour, type, and spacing instead of re-deriving raw values.
The goal isn't a literal pixel-for-pixel port — it's expressing the same design intent through the
vetted tokens in `.claude/docs/STYLE-GUIDE.md`.

## Execution rules

- **Read the Style Guide first.** `.claude/docs/STYLE-GUIDE.md` is the source of truth for every token
  name, the two-layer colour architecture, and the naming convention. Map to it before writing any
  class — guessing token names produces utilities that don't exist and fail silently.
- **Map to semantic tokens, never raw values.** Prefer `bg-action-primary` over the primitive
  `bg-blue-500`, and never inline a value. Arbitrary values (`text-[#003E51]`, `w-[300px]`, `z-[999]`)
  are forbidden because they bypass the token system: a future theme change can't reach them and they
  drift from the rest of the library. If a value has no token, that's a Style Guide gap to raise — not
  a reason to inline it.
- **Drop dead tokens.** Anything marked 💀 DEAD in `.claude/docs/EXTRACTED-VARIABLES.md` is not carried
  over. If a legacy style relies on one, substitute the live semantic equivalent from the Style Guide.
  Migrate only styles bound to the component's active DOM.
- **Prefer the standard scale.** Before minting anything custom, check whether a default Tailwind step
  already fits (`p-4`, `rounded-md`, `z-50`, `font-bold`) — only reach for a project token when the
  design genuinely deviates from the default scale.
- **Collapse media queries into responsive prefixes.** Mobile-first base utility plus `sm:`/`md:`/`lg:`
  overrides (e.g. `text-h-xl md:text-h-xl-lg`), using the desktop step tokens defined in the Style Guide.
- **Merge external classes with `cn()`.** When a component accepts a `className` prop, combine it via
  `cn()` (from `src/lib/cn`), never a raw template literal. `cn()` runs `tailwind-merge`, so a
  consumer's `bg-*` correctly *overrides* the default instead of both classes landing on the element and
  the browser picking by stylesheet order. That predictable override is what makes the component themeable.

## Worked example

**Input** — a legacy `spendrups.css` rule with a `var()` token, hard-coded hex values, and a media query:

```css
.cta-button {
  background: var(--cta-primary-default);   /* #003E51 */
  color: #ffffff;
  letter-spacing: var(--cta-l-letter-spacing);
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
@media (min-width: 768px) {
  .cta-button { font-size: 1rem; }
}
.cta-button:hover { background: #336574; }
```

**Output** — V2 React 19 + Tailwind, external `className` merged last:

```tsx
import { cn } from '../../../lib/cn'

<button
  className={cn(
    'rounded bg-action-primary px-4 py-2 text-text-on-primary',
    'text-cta-s md:text-cta-l tracking-cta-l',
    'hover:bg-action-primary-hover',
    className,
  )}
/>
```

What each move accomplished:

- `var(--cta-primary-default)` **and** the bare `#336574` hover both resolved to named `action` tokens
  (`bg-action-primary` / `hover:bg-action-primary-hover`) — never inlined as `bg-[#003E51]`.
- raw `#ffffff` → the semantic `text-text-on-primary` (the vetted on-surface pairing).
- the `font-size: 0.875rem → 1rem` jump → the CTA type tokens `text-cta-s md:text-cta-l`, and the
  `@media (min-width: 768px)` query → the `md:` prefix.
- `4px` radius and `0.5rem 1rem` padding → the standard scale (`rounded`, `px-4 py-2`) rather than
  custom tokens, since they land on default steps.
- the external `className` is passed last to `cn()`, so a consumer override wins the conflict.
