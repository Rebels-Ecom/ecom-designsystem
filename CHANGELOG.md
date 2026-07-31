# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-07-31

Ground-up rewrite of the design system (`v1.x` → `v2.0`). The public API, styling engine, and
distribution format all changed — treat this as a new baseline rather than an incremental upgrade.

### Added

- Complete component library rebuilt on **React 19** — `ref` passed as a standard prop (no
  `forwardRef`), standard hooks, and reliance on the React Compiler.
- **Tailwind CSS v4** CSS-first theming via `@theme` semantic tokens (no `tailwind.config.js`, no
  arbitrary values); classes merged safely with `tailwind-merge`.
- **Atomic Design** structure — components reclassified into `atoms`, `molecules`, and `organisms`.
- **Accessibility to WCAG 2.2 AA** — semantic HTML, generated ARIA/roles, and full keyboard support,
  enforced by an axe accessibility gate running in **error mode** on every Storybook story plus
  `play` interaction tests.
- **i18n**: user-facing control strings expose an overridable `labels` prop (English defaults).
- **Distribution**: dual ESM (`index.mjs`) + CJS (`index.cjs`) output with a bundled `index.d.ts`, a
  single extracted stylesheet (`@rebels-ecom/ecom-designsystem/styles.css`), a `"use client"` banner
  for RSC/Next consumers, and an `exports` map that blocks deep imports.
- Consumer `README`, this changelog, and a tag-driven GitHub Packages release workflow.

### Changed

- **BREAKING** — peer dependencies now require **React 19** and **Framer Motion 11** (was React 16 /
  Framer Motion 6.3.3).
- **BREAKING** — import surface is flat and root-only: import all components and their prop types from
  the package root; deep imports into `dist/` are no longer allowed.
- **BREAKING** — the stylesheet is a single extracted bundle imported from
  `@rebels-ecom/ecom-designsystem/styles.css` (the v1 per-theme CSS entry points were removed).
- Toolchain modernized to Vite 6 (library mode), Storybook 10, and TypeScript 5.6+ in strict mode
  (the `any` type is disallowed across the codebase).

### Removed

- Legacy v1 implementation and its per-theme/typography/icon CSS export paths.

[Unreleased]: https://github.com/Rebels-Ecom/ecom-designsystem/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/Rebels-Ecom/ecom-designsystem/releases/tag/v2.0.0
