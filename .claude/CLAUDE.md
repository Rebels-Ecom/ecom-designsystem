# Design System V2.0 AI Assistant Guidelines

## Core Directives

- **Stack**: React 19.0.0, Vite 6, Storybook 10, Tailwind CSS, TypeScript 5.6+, Framer Motion 11.
- **Legacy Code**: The `legacy/` directory is READ ONLY. Extract business logic and prop structures, but strictly rewrite the implementation using React 19 and Tailwind CSS.
- **Strict Typing**: You are strictly forbidden from using the `any` type. Always write explicit, strict TypeScript interfaces.
- **React 19 Implementation Rules**: Pass `ref` as a standard prop (Do NOT use `forwardRef`). `children` must be explicitly typed as `React.ReactNode`. Prefer standard hooks.
- **Explicit Dependency Handling**: Always verify peerDependencies in package.json against the React 19 target. Never include react or react-dom in dependencies.
- **Accessibility (WCAG)**: Strict adherence to semantic HTML and WCAG 2.2 AA. Do NOT copy accessibility patterns from legacy code. Independently generate correct `aria` attributes, `role` definitions, and ensure full keyboard navigation from scratch.
- **Performance**: Rely on the React 19 Compiler. Do not use manual `useMemo` or `useCallback` patterns unless strictly necessary. Keep DOM trees shallow.

## Tailwind CSS v4 & Styling Rules

- **CSS-First Engine**: Tailwind v4 uses a CSS-only configuration. Do NOT attempt to create or modify `tailwind.config.js`. Use `@theme` directives in the main CSS entry point if customizations are needed.
- **Migration Enforcement**: When converting legacy CSS/Styled Components, you MUST strictly follow the execution rules defined in the `tailwind_migrator` skill (dead code elimination, strict theming, no arbitrary values).
- **Class Merging**: Always use `tailwind-merge` (and optionally `clsx` or `cva`) to resolve utility class conflicts when combining default component styles with external `className` props.

## Build & Test Commands

- **Install**: `pnpm install`
- **Build**: `pnpm build` (Must pass without TS errors)
- **Storybook**: `pnpm storybook`
- **Visual Tests**: `pnpm test:visual` (Runs local Playwright tests)

## Component Structure

Every component directory must include:

- `Component.tsx` (Logic, UI, and Tailwind classes)
- `Component.stories.tsx` (Automated `play` functions required)
- `index.ts` (For clean encapsulation and public export)

## Atomic Design Reclassification

- Evaluate legacy components against strict Atomic Design principles before creating them in V2.
- Do NOT blindly trust the legacy folder structure.
- **Atoms**: Foundational UI elements (e.g., buttons, inputs). Atoms MUST NOT import any other internal UI components.
- **Molecules**: Simple UI combinations built primarily from Atoms.
- **Organisms**: Complex, distinct sections of an interface built from Molecules and Atoms.
- If a legacy component is misclassified (e.g., an Atom that imports another component), you MUST automatically correct its categorization and place it in the correct V2 directory (`src/components/atoms`, `src/components/molecules`, or `src/components/organisms`).

## Package & Distribution Rules

- **Project Context**: This repository produces a standalone UI component library (npm package).
- **Build Configuration**: Vite MUST be configured strictly in Library Mode (`build.lib`). Ensure CSS is extracted into a single standalone bundle.
- **Public API Strategy**: Use a "Flat Export" strategy. Maintain a central `src/index.ts` file that acts as the single entry point for all components.
  - Export format: `export { Component } from './components/category/Component';`
  - Always export both the component and its type definition (`export type { ComponentProps } ...`).
- **Performance**: Configure `package.json` with `"sideEffects": false` to ensure modern bundlers can perform effective tree-shaking for consumers.
- **Encapsulation**: Use the `exports` field in `package.json` to strictly map the public API to the central `src/index.ts` file, preventing deep imports from external applications.
- **Peer Dependencies**: React, React DOM, and Framer Motion must NEVER be bundled. List them strictly as `peerDependencies` in `package.json` and configure Vite to externalize them.

## Developer Wiki

- **Documentation**: The docs/DEVELOPMENT.md file contains the established human readable guidelines and workflows for this repository. Consult it for deep architectural context. If we establish new permanent development standards or solve recurring architectural problems during this migration, you MUST proactively update docs/DEVELOPMENT.md so human developers stay informed.
