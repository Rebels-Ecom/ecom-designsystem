---
name: wcag-reference
description: >-
  Structured WCAG 2.2 reference engine for the V2 Design System — looks up the exact accessibility
  success criteria, React 19 / Tailwind v4 implementation logic, and verification method for a given
  component or topic. Use this skill whenever accessibility is in play: building or reviewing a
  component, writing aria attributes / roles / labels, deciding focus and keyboard behaviour, checking
  colour contrast or target size, interpreting an axe finding, or when a developer mentions WCAG, a11y,
  accessibility, screen readers, "AA conformance", contrast ratios, focus rings, or keyboard navigation.
  The scaffold-component skill consults this skill on every component it generates, so keep it
  authoritative. Do NOT answer accessibility questions for this repo from memory — query this index.
---

## Purpose

This skill is the single source of truth for **how WCAG 2.2 applies to this design system**. The W3C
spec is written for whole web pages; this engine translates each success criterion into concrete
React 19 + Tailwind v4 + Framer Motion implementation guidance and a verification method that matches
this repo's tooling (`@storybook/addon-a11y`, `pnpm test:visual` Playwright runs).

It exists because `CLAUDE.md` requires us to **independently generate correct accessibility patterns from
scratch** (never copy them from `legacy/`). This index is where "correct" is defined.

## Conformance scope

The target is **WCAG 2.2 Level AA** (per `CLAUDE.md`). The index covers:

- **All 31 Level A** criteria (required for AA).
- **All 24 Level AA** criteria (the formal target).
- **5 curated Level AAA** criteria the team voluntarily adopts because they materially improve a
  component library: `1.4.6` Contrast (Enhanced), `2.3.3` Animation from Interactions,
  `2.4.12` Focus Not Obscured (Enhanced), `2.4.13` Focus Appearance, `2.5.5` Target Size (Enhanced).
  These are tagged **`AAA (adopted)`** so they are never mistaken for AA requirements.

Note: **`4.1.1` Parsing was removed in WCAG 2.2** and is intentionally absent. The remaining ~26 AAA
criteria are out of scope; if asked about one, say so and link the spec rather than inventing an entry.

## Knowledge base layout

The criteria live in reference files, grouped by WCAG principle. Read only the file(s) you need.

| File | Covers | When to read |
|---|---|---|
| `references/perceivable.md` | Principle 1 — text alternatives, media, adaptable, distinguishable (contrast, reflow, spacing) | Contrast, colour, images, responsive text, hover/focus content |
| `references/operable.md` | Principle 2 — keyboard, timing, seizures, navigable (focus), input modalities (target size, dragging) | Keyboard, focus order/visibility, motion, pointer/touch targets, overlays |
| `references/understandable.md` | Principle 3 — readable, predictable, input assistance (forms, errors, auth) | Forms, labels, errors, language, consistent UI, authentication |
| `references/robust.md` | Principle 4 — compatible (name/role/value, status messages) | ARIA correctness, custom widgets, live regions / toasts |
| `references/component-checklist.md` | Archetype → applicable criteria map | **Start here when working on a specific component** |
| `references/archetype-cards.md` | Pre-unioned archetype recipes (baseline + criteria + distilled Implementation/Verify + snippets) | **Fast path when scaffolding** — read the one card for your archetype instead of the four principle files; deep-dive a principle file only for an unusual criterion |

## Entry schema

Every criterion entry follows this exact shape so it reads predictably:

```markdown
### <ID> <Title> — <Level>
**Requirement:** <concise plain-language summary of the normative criterion>
**Implementation (React/Tailwind):** <how this is satisfied in our stack — tokens, ARIA, hooks, structure>
**Verify:** <how to confirm it: axe via Storybook a11y addon · play function in pnpm test:visual · manual check>
```

`<Level>` is one of `A`, `AA`, or `AAA (adopted)`.

## How to query

**By component (most common — this is what scaffold-component does):**
1. Open `references/component-checklist.md` and find the archetype(s) matching the component
   (e.g. Button → *Interactive control*; Modal → *Overlay*; InputText → *Form field*). A component can
   match several archetypes — union their criteria.
2. **Fast path:** read the matching card(s) in `references/archetype-cards.md` — each pre-unions the
   Universal baseline with the archetype criteria and distils Implementation + Verify. Fall back to the
   principle file for a criterion the card doesn't cover or to confirm the normative text.
3. Apply every **Implementation** note to the component, and turn every **Verify** note into an a11y
   story / `play` assertion.

**By criterion ID** (e.g. "what does 1.4.3 require?"): go straight to the principle file for that ID
(`1.x` → perceivable, `2.x` → operable, `3.x` → understandable, `4.x` → robust).

**By topic** (e.g. "contrast", "focus", "form errors"): use the *When to read* column above to pick the
file, then scan its headings.

## Integration contract with `scaffold-component`

`scaffold-component` is wired to consult this skill before it generates a component. When invoked from
that flow, return a focused **Accessibility Spec** for the target component:

- The matched archetype(s) and the union of applicable criterion IDs.
- For each: the one-line Requirement + the concrete Implementation note (the *specific* aria attributes,
  roles, tokens, and keyboard handlers to write — not generic advice).
- The Verify note for each, phrased as something to encode in the `.stories.tsx` (an a11y story that the
  addon scans, or a `play` assertion run by `pnpm test:visual`).

Keep the spec scoped to the component's archetype(s). Do not dump all 60 criteria — surface only what
applies, so the guidance is actionable.

## Maintenance

WCAG 2.2 is a stable W3C Recommendation, but if the spec is revised or the team adopts more AAA criteria,
update the relevant principle file and this scope section together, and re-run the integration test in
`evals/`. Source of truth for the normative text: <https://www.w3.org/TR/WCAG22/>.
