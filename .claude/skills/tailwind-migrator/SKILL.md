---
name: tailwind-migrator
description: Converts legacy CSS to strict Tailwind CSS utility classes, adhering to project style guides and ensuring safe class merging.
---

## Purpose

Convert legacy CSS, CSS modules, or styled components into strict Tailwind CSS utility classes while enforcing semantic theming, eliminating dead code, and ensuring safe class merging.

## Execution Rules

- **Dead Code Exclusion:** Do not migrate any tokens or styles identified as 'dead' (💀) in `.claude/docs/EXTRACTED-VARIABLES.md`. If a component relies on a dead token, replace it with the appropriate semantic equivalent defined in `.claude/docs/STYLE-GUIDE.md`. Only migrate styles explicitly bound to the component's active DOM elements.
- **Strict Style Guide Adherence:** Before executing any migration, mapping, or class generation task, you MUST read and strictly adhere to the naming conventions, namespaces, and semantic token rules defined in `.claude/docs/STYLE-GUIDE.md`. Never deviate from the Style Guide.
- **Class Merging:** When accepting external `className` strings via component props, ALWAYS use a utility combination like `clsx` and `tailwind-merge` (typically abstracted as a `cn()` utility) to prevent class collisions. Never use raw template literals for merging external classes.
- **Output:** Output the resulting `className` strings directly into the new React 19 component structure, consolidating legacy media queries into standard Tailwind responsive prefixes (`sm:`, `md:`, `lg:`).
