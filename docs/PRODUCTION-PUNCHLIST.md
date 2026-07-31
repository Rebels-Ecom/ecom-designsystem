# V2 Production-Readiness Punch-List

Outcome of the full-repo audit (2026-07-08, migration ~35% complete). Current grade: **B+** — an
A− foundation held back from ship-ready by the finite, non-architectural list below.

## How to use this list

Most items are a **pre-publish hardening pass**, not mid-migration work. The audit split two kinds:

- **Fix-the-factory** items compound with every new component, so they were done immediately
  (see _Done_). Don't defer this class.
- **Everything else** is either publish-time or localized to already-built components — it does **not**
  compound with the ~100 components still to migrate. **Recommendation: keep migrating; clear this list
  in one focused pass before publishing.** The CI gate catches per-batch regressions in the meantime.

Two items are compounding-ish and worth doing *sooner* (flagged 🔸 below): the Video hydration bug
(shared primitive) and ESLint (consistency across remaining components).

Severity: **MED-HIGH** > **MED** > **LOW** > **INFO**.

---

## ✅ Done (this session)

- [x] Picture blanked relative/root-relative `src` (`new URL()` with no base) — fixed + regression test
- [x] Library shipped no `'use client'` directive — added banner to the bundled entry (RSC/Next consumers)
- [x] i18n: hardcoded Swedish control strings — established overridable `labels` convention (English
      defaults), applied to Carousel + Pagination, baked into the scaffold skill + DEVELOPMENT.md
- [x] No automated CI gate — wired `build` + `test-storybook`, scoped to `Upgrade/**` (see punch-list item)

## Code bugs

- [ ] 🔸 **MED-HIGH** — [Video.tsx:109](../src/components/atoms/Video/Video.tsx) reads `matchMedia` in a
      `useState` initializer → SSR hydration mismatch for reduced-motion + `autoPlay` clients. Derive
      initial state the way `Breakpoints` does (`useSyncExternalStore`, `false` server snapshot).
- [ ] **MED** — [TagsList.tsx:25](../src/components/molecules/TagsList/TagsList.tsx) `<ul list-none>` has
      no `role="list"` but its docstring claims list semantics (Safari+VoiceOver drop the role).
- [ ] **MED** — [ClickableListItem.tsx:33](../src/components/molecules/ClickableListItem/ClickableListItem.tsx)
      public `color="orange"` option is documented sub-AA and excluded from every axe-scanned story, so
      the gate can't catch a consumer using it. Remove it or make it pass AA.
- [ ] **MED** — [Picture.tsx:164](../src/components/atoms/Picture/Picture.tsx) `pictureWithOpacity` scrim
      is a sibling of `<picture>`, not a child, so it won't align to the image.
- [ ] **LOW** — [Button.tsx:58](../src/components/molecules/Button/Button.tsx) `surface="x"` is unstyled
      below `md` and omitted from the a11y sweep (looks like an unfinished legacy carryover).
- [ ] **LOW** — [SingleSelect.tsx:70](../src/components/atoms/SingleSelect/SingleSelect.tsx) can flip
      uncontrolled→controlled (`value` resolves `undefined` then defined) → React warning.
- [ ] **LOW** — [Loader.tsx:57](../src/components/atoms/Loader/Loader.tsx) `role="status"` has no
      announceable content when `text` is omitted (spinner is `aria-hidden`).
- [ ] **LOW** — [ScrollableList.tsx:44](../src/components/molecules/ScrollableList/ScrollableList.tsx)
      item height measured once on mount (no `ResizeObserver`); late content growth leaves the cap stale.
- [ ] **LOW** — [PopUp.tsx:43](../src/components/molecules/PopUp/PopUp.tsx) hardcoded `zIndex:995` magic
      number, bypassing the semantic z-token scale (three z-index strategies coexist library-wide).
- [ ] **LOW** — [Video.tsx:112](../src/components/atoms/Video/Video.tsx) mobile-source swap reads
      `innerWidth` once on mount; no resize listener, never reverts to desktop source.
- [ ] **LOW** — [DebounceInput.tsx:91](../src/components/atoms/DebounceInput/DebounceInput.tsx) treats
      `maxQuantity === 0` as "no cap" (falsy short-circuit); also uses arbitrary `[&::-webkit-…]` selectors.
- [ ] **LOW** — [ArticleCard.tsx:150](../src/components/molecules/ArticleCard/ArticleCard.tsx) overlaid
      tags `<ul>` lacks `role="list"` (low impact — decorative/`pointer-events-none`).
- [ ] **LOW** — [MessageBanner.tsx:41](../src/components/molecules/MessageBanner/MessageBanner.tsx) always
      `role="status"` (live region); wrong/noisy for a static banner, no opt-out prop.
- [ ] **LOW** — a few Framer entrances skip `useReducedMotion` (ExpandableWrapper, CampaignBanner) —
      inconsistent with MenuButton/Picture/etc. (2.3.3 is AAA, so not an AA failure).
- [ ] **INFO** — [RichText.tsx](../src/components/molecules/RichText/RichText.tsx) `dangerouslySetInnerHTML`
      is typed/trusted-by-contract but offers no sanitization hook (XSS if an app pipes untrusted HTML).
- [ ] **INFO** — [Logotype.tsx](../src/components/molecules/Logotype/Logotype.tsx) "vector" SVG embeds a
      ~33KB PNG raster (bundle weight; awaiting the design team's optimized ~3–4KB brand SVG).
- [ ] **INFO** — [Icon.tsx](../src/components/atoms/Icon/Icon.tsx) style-drifted (semicolons/quotes) vs the
      rest of the codebase — would be caught by ESLint.

## Packaging & process

- [ ] 🔸 Add **ESLint + a `lint` script** (compounds: consistency across the remaining components).
- [x] Add a **consumer README** — `README.md` added (install from GH Packages, peer deps, CSS import,
      usage, dev + release instructions). Doubles as the GH-Packages landing page.
- [x] Add a **CHANGELOG + release workflow**; guard the empty-package publish. **Done:**
      `CHANGELOG.md` (Keep a Changelog + SemVer, seeded `2.0.0`); tag-driven
      [release.yml](../.github/workflows/release.yml) (build + a11y/interaction gate → `pnpm publish`
      to GitHub Packages → GitHub Release). The empty-package risk is closed by a **`prepack: "pnpm build"`**
      script (verified: `pnpm pack` rebuilds `dist/` and the tarball ships JS+CJS+types+CSS+README+CHANGELOG).
      The `{NPM_TOKEN}` placeholder is gone — auth is injected by `setup-node` (`registry-url` + `scope`)
      from `secrets.GITHUB_TOKEN` via `NODE_AUTH_TOKEN`; nothing sensitive is committed. Registry confirmed
      **GitHub Packages** (not public npm). Also added: `engines`, `packageManager`, object-form `repository`,
      `homepage`/`bugs`/`keywords`, `publishConfig.access: restricted`, `exports["./package.json"]`.
- [ ] Consider Rollup **`preserveModules`** for finer consumer tree-shaking (single-file bundle today).
- [x] Fix the pre-existing [storybook.yml](../.github/workflows/storybook.yml): it used `npm ci` on a
      **pnpm** repo (would fail on the next `main` push). **Done:** migrated to `pnpm/action-setup` +
      `setup-node` (pnpm cache) + `pnpm build-storybook`; bumped pinned action versions and added a
      concurrency guard. (Adding `packageManager` to package.json also required dropping the explicit
      `version:` input from `pnpm/action-setup` in all workflows — corepack now drives the pnpm version.)
- [ ] **Restore CI production triggers** before merging to `main`: add back the `main` push trigger +
      `pull_request:` in [ci.yml](../.github/workflows/ci.yml) (exact snippet is in its `on:` TODO comment).
- [ ] Stand up the **visual-regression V2 baseline** (post-migration): delete `legacy-snapshots/`, retire
      `tests/visual/baseline-map.ts` + the legacy-diff spec, and generate the new approved baselines
      **inside the pinned Playwright Linux container** (else macOS/Linux font diffs recur). Uncomment the
      stubbed `visual` job in `ci.yml`.

## Suggested additions

- [ ] Light **unit tests** for the framework-free utilities: `cn`, `mergeRefs`, `useMediaQuery`.
