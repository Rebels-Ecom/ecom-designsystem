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

- Read `.claude/docs/ATOMIC_MAP.md` to find the target component.
- Identify its correct V2 destination (e.g., `src/components/atoms/Button`).
- Identify its legacy source path for reference.

**Step 2: Reference Extraction**

- Read the legacy source code.
- Extract prop interfaces, aria attributes, and core business logic.
- Discard all legacy styling, deprecated React 16 patterns, and forwardRef wrappers.

**Step 3: File Generation**
Create the following three files in the target V2 directory.

### 1. The Component File (`ComponentName.tsx`)

- **Strict Typing:** Write a strict TypeScript interface for props. The `any` type is strictly forbidden.
- **React 19:** Pass `ref` as a standard prop. Explicitly type `children` as `React.ReactNode`.
- **Styling:** Implement styling exclusively using Tailwind CSS classes.
- **Accessibility:** Include all necessary `aria` attributes and ensure visible focus states for keyboard navigation.

### 2. The Storybook File (`ComponentName.stories.tsx`)

- **Format:** Use the Storybook 10 Component Story Format (CSF).
- **Testing:** You MUST write at least one `play` function using `@storybook/test` to simulate user interaction (e.g., clicking, focusing). This is strictly required for the local Playwright visual regression tests.

### 3. The Export File (`index.ts`)

- Export the component and its prop interface cleanly.

**Step 4: Update Public API (src/index.ts)**

- Open the package entry file: `src/index.ts`. (Create it if it does not exist).
- Safely append the named export for the newly created component AND its strict TypeScript interface.
- Use clean, explicit relative paths. Format exactly like this:
  `export { ComponentName } from './components/category/ComponentName';`
  `export type { ComponentNameProps } from './components/category/ComponentName';`
- Strictly verify that you do NOT create duplicate exports or overwrite the existing content in the file.

## Output Requirement

Do not output the generated code in the chat. Write the files directly to the file system and confirm when the scaffolding is complete, including a brief summary of the generated `play` function.
