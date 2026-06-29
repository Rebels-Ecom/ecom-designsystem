---
name: tailwind-migrator
description: Converts legacy CSS to strict Tailwind CSS utility classes, handling dead code elimination, native theming, and safe class merging.
---

## Purpose

Convert legacy CSS, css modules or styled components into strict Tailwind CSS utility classes while eliminating dead code, implementing native theming, and ensuring safe class merging.

## Execution Rules

- **Dead Code Elimination:** Actively identify and discard unused CSS variables, unused classes, and orphaned styles from the legacy files. Only migrate styles that are explicitly bound to the component's DOM elements.
- **Theming (Dark/Light Mode):** Implement dark mode support by default using Tailwind's `dark:` modifier. Map legacy colors strictly to the exact semantic tokens defined in the project's global `@theme` configuration.
- **Spacing and Typography:** Map padding, margin, font sizes, and layouts strictly to standard Tailwind scales.
- **Strict Adherence:** NEVER use arbitrary values (e.g., `w-[150px]` or `text-[#123456]`). Consolidate all media queries into standard responsive prefixes (`sm:`, `md:`, `lg:`).
- **Class Merging:** When accepting external `className` strings via component props, ALWAYS use a utility combination like `clsx` and `tailwind-merge` (typically abstracted as a `cn()` utility) to prevent class collisions. Never use raw template literals for merging external classes.
- **Output:** Output the resulting `className` strings directly into the new React 19 component structure.
