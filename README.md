# @rebels-ecom/ecom-designsystem

Next-generation design system — a standalone React 19 component library built with Tailwind CSS v4,
TypeScript, and Storybook. Published to **GitHub Packages**.

- **Live component gallery:** [Storybook on GitHub Pages](https://rebels-ecom.github.io/ecom-designsystem/)
- **Package:** `@rebels-ecom/ecom-designsystem`

---

## Installation

This package is hosted on **GitHub Packages**, not the public npm registry, so consuming apps need a
scoped registry entry and an authenticated token.

### 1. Point the `@rebels-ecom` scope at GitHub Packages

Add this to the **consuming app's** `.npmrc`:

```ini
@rebels-ecom:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

### 2. Provide a token

Export a GitHub personal access token (classic) with the `read:packages` scope before installing:

```bash
export NPM_TOKEN=ghp_your_token_here
```

In CI, set `NPM_TOKEN` from a secret (e.g. `secrets.GITHUB_TOKEN`). The env var name is arbitrary — it
just has to match the `.npmrc` reference above (`NPM_TOKEN` matches the existing Spendrups-FrontendApp setup).

### 3. Install

```bash
pnpm add @rebels-ecom/ecom-designsystem
# or: npm install / yarn add
```

### Peer dependencies

Install these in the consuming app — they are intentionally **not** bundled:

```bash
pnpm add react@^19 react-dom@^19 framer-motion@^11
```

| Peer          | Version   |
| ------------- | --------- |
| `react`       | `^19.0.0` |
| `react-dom`   | `^19.0.0` |
| `framer-motion` | `^11.0.0` |

Requires **Node.js ≥ 20**.

---

## Usage

Import the component you need and the stylesheet **once** at your app's entry point. The CSS is shipped
as a single extracted bundle (not injected by JS), so it must be imported explicitly:

```tsx
// App entry (e.g. main.tsx) — import the stylesheet once.
import '@rebels-ecom/ecom-designsystem/styles.css'

import { Button, Heading } from '@rebels-ecom/ecom-designsystem'

export function Example() {
  return (
    <section>
      <Heading level={2}>Welcome</Heading>
      <Button onClick={() => console.log('clicked')}>Add to cart</Button>
    </section>
  )
}
```

Every component ships with its TypeScript prop types (e.g. `import type { ButtonProps } from '@rebels-ecom/ecom-designsystem'`).
Deep imports are blocked by the package `exports` map — import everything from the package root.

### Localization (i18n)

User-facing control strings default to **English**. Components that render built-in copy expose an
overridable `labels` prop (and Swedish storefronts should pass it) — see the `docs/DEVELOPMENT.md`
i18n section and each component's Storybook docs.

---

## Development

```bash
pnpm install         # install dependencies
pnpm storybook       # run Storybook locally on :6006
pnpm build           # typecheck (x2 configs) + build the library into dist/
pnpm test-storybook  # interaction (play) + accessibility (axe, error mode) tests
pnpm test:visual     # Playwright visual-regression checks
```

Architecture, conventions, and contribution guidelines live in
[`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md). Component authoring is driven by the project skills and
the atomic classification in `.claude/docs/ATOMIC-MAP.md`.

---

## Releasing

Releases publish to GitHub Packages via the [`Release`](./.github/workflows/release.yml) workflow:

1. Bump `version` in `package.json` (SemVer) and move the `CHANGELOG.md` **Unreleased** notes into a new
   dated section.
2. Commit, then tag and push — for example:

   ```bash
   git tag v2.0.1 && git push origin v2.0.1
   ```

3. The workflow verifies the tag matches `package.json`, runs the full build + a11y/interaction gate,
   publishes the package, and opens a GitHub Release. The `dist/` output is compiled at pack time by the
   `prepack` script, so the tarball is never empty.

See [`CHANGELOG.md`](./CHANGELOG.md) for the release history.

---

## License

UNLICENSED — private to Rebels-Ecom. Not for public distribution.
