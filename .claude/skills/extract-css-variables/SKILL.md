---
name: extract-css-variables
description: Scans legacy spendrups.css files to extract, deduplicate, and consolidate global CSS variables into a review document.
---

## Purpose

Scan the `legacy/` directory to extract global CSS variables exclusively from the core theme files, identify duplicates, and consolidate them into a single review document.

## Execution Rules

- Target ONLY files named `spendrups.css` (typically found in directories like `themes/`, `typography/`, and `layout/`).
- Strictly ignore all other style files, including any `.module.css` or `.module.scss` files.
- Extract every CSS variable declaration (strings starting with `--`).
- Remove exact duplicates to create a unified list.
- Group the extracted variables logically (e.g., Colors, Typography, Layout, Unknown) based on the folder where they were found.
- Highlight any variables that contain warning comments in the legacy code.

## Output Requirement

Do not modify any source code. Generate a new file named `.claude/docs/EXTRACTED-VARIABLES.md` containing the consolidated list. Format it as a clean markdown checklist so the user can easily review, delete, and rename variables before implementing the Tailwind v4 `@theme`.

## Post-Extraction Analysis

After generating the list, perform a quick audit:

- Identify and flag any "competitor" variables that share similar semantic names or values but are defined differently (e.g., `--color-brand-blue` vs `--blue-primary`).
- Provide a brief recommendation for which version to keep as the "single source of truth" for the new Tailwind @theme.
