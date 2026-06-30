---
name: scaffold-component
description: Automates the creation of a fully compliant React 19 component for the V2 Design System, including structure, TS definitions, and tests.
---

## Purpose

Automate the creation of a fully compliant React 19 component for the V2 Design System. This tool ensures absolute consistency in file structure, strict TypeScript definitions, and automated testing setups.

## Execution Triggers

Run this skill when instructed to migrate or build a specific component (e.g., "Scaffold the Button component").

## Execution Steps

**Step 1: Location Verification**

- Read `.claude/docs/ATOMIC-MAP.md` to find the target component.
- Identify its correct V2 destination (e.g., `src/components/atoms/Button`).
- Identify its legacy source path for reference.

**Step 2: Reference Extraction**

- Read the legacy source code.
- Extract prop interfaces, aria attributes, and core business logic.
- Discard all legacy styling, deprecated React 16 patterns, and forwardRef wrappers.

**Step 3: Accessibility Requirements (consult `wcag-reference`)**

Before writing any code, derive the component's accessibility spec from the `wcag-reference` skill. `CLAUDE.md` requires that we generate accessibility patterns **independently** (never copy them from `legacy/`), and `wcag-reference` is where "correct" is defined for this repo.

- Read `.claude/skills/wcag-reference/references/component-checklist.md`. Find the target component in the §3 lookup (or classify it by behaviour using §2) to get its **archetype(s)**.
- Union the archetype's criteria with the **Universal baseline** (§1). A component may match several archetypes — combine them.
- For each criterion ID in the union, read its entry in the matching principle file (`references/perceivable.md`, `operable.md`, `understandable.md`, or `robust.md`) and note its **Implementation** and **Verify** guidance.
- Produce a short **Accessibility Spec** for this component: the concrete semantic element, `aria`/`role` attributes and state, focus treatment, keyboard model, contrast tokens, and target sizes it must implement — plus the specific checks to encode in its stories.

Carry this Accessibility Spec into Steps 4–6.

**Step 4: File Generation**
Create the following three files in the target V2 directory.

### 1. The Component File (`ComponentName.tsx`)

- **Strict Typing:** Write a strict TypeScript interface for props. The `any` type is strictly forbidden.
- **React 19:** Pass `ref` as a standard prop. Explicitly type `children` as `React.ReactNode`.
- **Imports:** Use explicit relative imports. Ensure all imports follow the V2 structure, not legacy paths.
- **Styling:** Implement styling using Tailwind CSS classes. For the conversion of styles from the legacy source, invoke the tailwind-migrator skill to ensure strict adherence to .claude/docs/STYLE-GUIDE.md and to automatically exclude dead tokens.
- **Accessibility:** Implement every item in the **Accessibility Spec** from Step 3 — the correct semantic element, `aria`/`role` attributes and live state, full keyboard operation, and a visible focus ring using `focus-visible:` utilities per `2.4.7`/`2.4.13` (e.g. `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary`). Generate these patterns from `wcag-reference`, not from legacy code.

### 2. The Storybook File (`ComponentName.stories.tsx`)

- **Format:** Use the Storybook 10 Component Story Format (CSF).
- **Testing:** You MUST write at least one `play` function using `@storybook/test` to simulate user interaction (e.g., clicking, focusing). This is strictly required for the local Playwright visual regression tests.
- **Accessibility verification:** Encode the **Verify** methods from the Accessibility Spec. Add an a11y-focused story that renders the variants/states the criteria call out (so `@storybook/addon-a11y`'s axe pass scans them), and add `play` assertions for the behavioural checks — keyboard activation, focus move/return on overlays, `aria-*` state toggling, `Escape`-to-dismiss — that `pnpm test:visual` executes.

### 3. The Export File (`index.ts`)

- Export the component and its prop interface cleanly.

**Step 5: Update Public API (src/index.ts)**

- **Safe Append:** Read `src/index.ts` entirely before modification to check for existing exports. If an export already exists, skip it.
- **Formatting:** Append named exports cleanly. Format exactly like this:
  `export { ComponentName } from './components/category/ComponentName';`
  `export type { ComponentNameProps } from './components/category/ComponentName';`

**Step 6: Cleanup & Verification**

- Verify that all files have been created.
- Ensure no duplicate exports exist in `src/index.ts`.
- Confirm the **Accessibility Spec** is satisfied: every criterion in the union has a corresponding implementation, and its Verify method is covered by either the a11y story (axe) or a `play` assertion.
- Run a brief validation to confirm the component is ready for linting.

## Output Requirement

Do not output the generated code in the chat. Write the files directly to the file system and confirm when the scaffolding is complete, including a brief summary of the generated `play` function.
