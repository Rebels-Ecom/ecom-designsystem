# Product-card hardening — execution plan (Option A)

**This file is self-contained and executable.** When told *"process the product-card-hardening.md"*, treat
this as the full task spec: work the phases **in order**, gate each on its **Done-when** before moving on,
and finish the whole thing. No further approval is needed — processing this file *is* the go-ahead.

## Execution protocol (read first)

1. Read this whole file. Then read the scope files (below) and, once, the scaffold-component batch primer
   `/.claude/skills/scaffold-component/reference/CHEATSHEET.md` for the token map, conventions, and verify
   commands. `CLAUDE.md` is already in context.
2. **Match the existing product-card files' style exactly** (they were written no-semicolon, single-quote,
   `cn()` for class merges, semantic Tailwind tokens, **no arbitrary values** — `grep -rE '\b[a-z-]+\[' src`
   must stay clean). Strict TypeScript, no `any`, `ref` as a prop (no `forwardRef`).
3. **The one rule that governs every change (the JS↔TS core):** every edit must be **runtime-invisible**
   (types, TSDoc/`@deprecated`, internal refactor) **or** **runtime-parity-preserving**. Never require a
   runtime prop/default the app doesn't already pass; never change v1.6.6 observable behaviour. If a step
   can't be done without breaking that rule, **stop and ask** — don't smuggle a behaviour change in.
4. Keep a Storybook server on `:6006` for scoped visual runs (`pnpm build-storybook && pnpm dlx http-server
   storybook-static -p 6006 -s`), per the CHEATSHEET.
5. The consumer audit is captured in §"v1.6.6 behavioural contract" below — trust it. The app is **readable**
   at `/Users/bobby/Desktop/code/spendrups-frontendapp` (via `additionalDirectories`) if you need to
   spot-check a call shape; **do not edit it**.

## Files in scope

```
src/components/organisms/ProductCard/            ProductCard.tsx  types.ts  dummyProduct.ts  ProductCard.stories.tsx  index.ts
src/components/organisms/ProductCardHorizontal/  ProductCardHorizontal.tsx  ProductCardHorizontal.stories.tsx  index.ts
src/components/organisms/ProductCardVertical/    ProductCardVertical.tsx    ProductCardVertical.stories.tsx    index.ts
src/components/organisms/ProductCardRestricted/  ProductCardRestricted.tsx  ProductCardRestricted.stories.tsx  index.ts
```
Also touched: `src/index.ts` (exports), `tests/visual/baseline-map.ts` (unchanged unless a story id changes),
`.claude/docs/MIGRATION-PROGRESS.md` + `docs/DEVELOPMENT.md` (Phase 6).

## Decision: Option A (in-place, API-stable internal refactor)

Chosen over B (a new parallel card family). The app installs V2 **while still JavaScript** and must keep
working unchanged, which *requires* a `ProductCard` that behaves like v1.6.6 to exist in V2 — exactly what A
produces in place. B would need that same drop-in card **plus** a second family → A + pure extra cost. The
Batch-30 `ProductCard` already accepts ~100% of the app's real runtime usage; the backlog is ~90% internal.
Single source of truth; the legacy visual baselines stay attached as the safety net.

Out of scope (app team owns it): React 17→19 / framer-motion 6→11 / Sitecore-JSS-on-React-19 and any other
dependency/environment compatibility. This plan concerns only the design system's own JS↔TS compatibility.

## The core constraint: two compatibility windows

The app transitions **install V2 (still JS) → migrate JS→TS later**. Each window gates different things:

| Window | When | Enforced | Hard requirement |
|---|---|---|---|
| **1 — JS install** | app installs V2 while JS | **runtime only** (types invisible) | **behavioural parity with v1.6.6** for every audited call shape |
| **2 — TS migration** | app later adopts TS on the installed V2 | **exported types** at every call site + the app's factories | V2 types **accept all real usage** with no churn; cruft is `@deprecated`, not removed |

Phase 0 locks both. The governing rule (protocol §3) is what keeps Window 1 safe while Phase 4 prepares
Window 2.

## v1.6.6 behavioural contract to preserve (from the consumer audit)

Source of truth = the `legacy/` tree (it *is* v1.6.6) + the Batch-30 components (already preserve this logic).

- **One product shape**, app-built via factories (`productCardFactory` / `productFromDepictDisplayFactory` /
  `productFromCartItemFactory`, in the app's `src/factories/product.js`) then `.toJS()`-ed. The field names the
  card reads must not change.
- **Variants are 100% uncontrolled** — the app never passes `selectedVariantId` / `variantsOpen` /
  `handlePackageChange` / `onCloseVariants`. The card owns variant state and emits the resolved product on
  `addToCart`; `onVariantsButtonClick` / `onVariantChange` are analytics-only.
- **Quantity is dual-mode:** uncontrolled add-to-cart (`defaultQuantity:'1'`, card owns it) · seed-via-
  `defaultQuantity`-and-notify-via-`onChangeQuantity` (purchase lists, order history/return) · checkout escape
  hatch `debounceQuantityVal={0}` (app runs its own 1000ms debounce). `allowNegative` (OrderDetails) and
  `maxQuantity` (OrderReturn) each have exactly one caller. All must survive.
- **The emitted product** (to `addToCart`/`onChangeQuantity`) must carry the original product fields + updated
  `quantity`/`totalPrice` (the app forwards it straight on, incl. fields like `netPriceBeforeDiscount`).
- **Must render without crashing:** the 11-field **skeleton floor** `{ partNo, productName,
  primaryImageUrl:'', country:'', packaging:'', priceStr:'', price:0, salesUnit:'', itemNumberPerSalesUnit:0,
  tags:[], productVariantList:[] }` + a `loading` prop; **and raw order-item** products (extra
  `netPriceBeforeDiscount`/`validAssortment`/`reasonCode`).
- **`linkComponent`** is polymorphic: a component **or** the string `'a'`.
- **`cardDisplay`** is sometimes dynamic (`isDesktop ? 'vertical' : 'horizontal'`) → keep the **flat**
  `ProductCardProps` interface (not a `vertical|horizontal` discriminated union).
- **Props v1 ignored (V2 must keep ignoring, to match behaviour):** `onClickRemoveProduct` at the dispatcher,
  `variantsInCart`, `disabledNoBorder`, `iconButton`, `isAddingToCart`.
- Prop union in use: `cardDisplay, product, isRestrictedUser, addToCart, addToCartBtnLabel, loading,
  linkComponent, defaultQuantity, onClick, onChangeQuantity, onRemoveProduct, showFavoriteIcon,
  favoriteProductsIds, onFavoriteIconClick, isAddingToFavorites, onSaveToPurchaseListClick,
  showAddToPurchaseListIcon, tooltips, showPackaging, disabled, productQuantityDisabled, hideRemoveButton,
  hideCartButton, hidePrice, allowNegative, maxQuantity, imagePriority, productArea, buttonLoading,
  onVariantsButtonClick, onVariantChange` (+ the ignored props above).

---

## Phase 0 — Contract lock (do first; the proof of zero consumer impact)

Two artifacts, both under `src/components/organisms/ProductCard/`:

**(a) Runtime lock = play-function stories** (the repo's only test vehicle is the Storybook browser project).
Add stories **without** the `['visual']` tag, one per audited config: horizontal cart line, vertical category
card, controlled order-return (`maxQuantity` + `onChangeQuantity`), uncontrolled add-to-cart list, restricted
user, skeleton floor, **raw order-item product**, `linkComponent='a'`, `debounceQuantityVal={0}`. **Put these in
the existing `ProductCard.stories.tsx`** (adding a second CSF file with the same `title` collides in Storybook;
if you want a separate file, give it a distinct `title` like `Design System/Organisms/ProductCard/Contract`).
Each `play` asserts the v1.6.6-observable result: roles/accessible names, price text, quantity seeding from
`defaultQuantity`, **the `addToCart`/`onChangeQuantity` payload (via a `fn()` spy) carries the original product
fields + updated `quantity`/`totalPrice`**, remove firing (`onRemoveProduct`), no crash on the skeleton/raw
shapes. These run under `pnpm test-storybook` and are axe-scanned like any story (so they must be a11y-clean).

**(b) Type lock = a compile-time fixture** `src/components/organisms/ProductCard/ProductCard.type-contract.ts`
(NOT a test file, NOT a `.stories.` file). For each real call shape write
`export const x = { …audited props… } satisfies ProductCardProps` — `export` dodges `noUnusedLocals` (TS6133);
the file is never imported, so `tsc --noEmit` (via `pnpm build`) checks it but Vite never bundles it.
**`@ts-expect-error` lifecycle (important):** at Phase 0 only assert shapes the *current* Batch-30 API already
accepts (proves the baseline), and reserve `// @ts-expect-error` for shapes that should be **permanently**
invalid (e.g. omitting the required `product`). Do **not** `@ts-expect-error` a real shape that's merely
not-yet-accepted — instead **add** those shapes to this fixture in **Phase 4**, as the type widens to accept
them (a `@ts-expect-error` left on a now-valid line becomes its own error).

**Done-when:** `pnpm build` green (incl. the type fixture), `pnpm exec vitest run --project=storybook
src/components/organisms/ProductCard` green, and the 13 existing product-card visual frames still green
(reviewOnly-skipped, 0 failures: `pnpm exec playwright test --grep productcard`). These stay green through every
later phase — they are the gate.

## Phase 1 — Internal model + image helper (backlog #1, #8)

Unify the internal variant/product plumbing so the pickers and dispatcher share one internal shape (remove the
narrow-`ProductVariantListItem`-vs-rich-`ProductCardVariant` lookup-by-id dance). Centralise a `productPicture()`
helper. **Public input field names unchanged.**
**Done-when:** Phase-0 suites + `pnpm build` green; no diff in observable output.

## Phase 2 — Tested state hook (backlog #2)

Extract `useProductCardState` (price/quantity/variant math, the clamp, the dual quantity mode, the internal
debounce + the `debounceQuantityVal=0` bypass). Keep the `quantity <= '0'` lexicographic check **byte-for-byte**
(documented in a comment) — do NOT fix it (behaviour change → forbidden by protocol §3 unless separately asked).
Since the repo has no plain-unit-test project, cover the hook via the Phase-0 stories (add cases if needed),
not a new vitest project.
**Done-when:** Phase-0 suites + `pnpm build` green.

## Phase 3 — Shared shells + one picker (backlog #4, #5)

Extract shared subcomponents `<CardMarkers>` / `<CardImage>` / `<CardName>` / `<CardRibbon>` / `<CardActions>`
and one grid-safe overlay `<VariantPicker>`, consumed by all three cards. Keep the rendered roles/names/DOM-
observable behaviour identical so Phase 0 + a11y stay green.
**Done-when:** Phase-0 suites, `pnpm exec vitest run --project=storybook src/components/organisms/ProductCard*`,
and `pnpm exec playwright test --grep productcard` all green.

## Phase 4 — Typed & additive API + deprecations (Window-2 work; runtime-invisible)

- **Reconcile required-vs-optional product fields** to the skeleton floor + raw order items — e.g. make
  `quantity` **optional** (the skeleton omits it). Required set ⊆ the 11 skeleton fields.
- Type `linkComponent` as component **or** intrinsic tag string.
- Widen `productArea` to include `'content-page'` / `'purchase-list'` (or `string`).
- Accept + `@deprecated` the v1-ignored props (`onClickRemoveProduct`, `variantsInCart`, `disabledNoBorder`,
  `iconButton`, `isAddingToCart`) so Window-2 compiles and the team is guided to drop them — **behaviour still
  mirrors v1 (ignored)**.
- Additive: `headingLevel` on the dispatcher; a dev-only campaign-contrast warning; shape `labels` (unused by
  the app → free); keep `tooltips` fully working; keep the flat interface.
- Export the cleaned `ProductCardProduct` type from `src/index.ts` as the anchor the app's factory can
  annotate against.
- Extend the Phase-0(b) type fixture to assert all of the above compiles.
**Done-when:** `pnpm build` green (fixture included); Phase-0 runtime suite unchanged (no behaviour drift).

## Phase 5 — Deterministic fixtures (backlog #7)

One `productCardFixtures` module (clean labels + local deterministic images) reused by the stories.
**Done-when:** stories still render; `pnpm build-storybook` green.

## Phase 6 — Verify + document

- Full gate: `pnpm build` · `pnpm test-storybook` · `pnpm build-storybook` · `pnpm test:visual` — all green;
  then browser-eyeball the four `--visual` stories (they must look unchanged vs Batch 30).
- Update `.claude/docs/MIGRATION-PROGRESS.md` (a maintenance entry noting the hardening + counts unchanged)
  and `docs/DEVELOPMENT.md` (internal architecture + the JS↔TS two-window rule + the `@deprecated` list).
  Log a `BLOG-NOTES.md` insight if a reusable lesson emerged.

## Task complete when

- [ ] Phase-0 runtime stories + type fixture exist and are green, and stayed green through every phase.
- [ ] Phases 1–5 landed; `grep -rE '\b[a-z-]+\[' src/components/organisms/ProductCard*` is clean (no arbitrary values).
- [ ] `pnpm build` (0 TS), `pnpm test-storybook` (0 fail), `pnpm test:visual` (0 fail; the 13 product-card frames still reviewOnly-skipped), `pnpm build-storybook` all green.
- [ ] The four `--visual` stories render unchanged vs Batch 30 (browser-verified).
- [ ] MIGRATION-PROGRESS.md + DEVELOPMENT.md updated.

## Will NOT touch

- **App-side bugs** (the consumer's — flag them for the app team, don't fix from the DS): `PurchaseListDetails`
  `onClick` referencing undefined `i`; the `variantListFactory` `PartNo` vs `partNo` casing that suppresses the
  pre-checked variant; `totalPrice` left unset by `productCardFactory`.
- The `quantity <= '0'` behaviour (kept; Phase 2).
- Dependency/environment compatibility (app team owns it).
- The consuming app itself (read-only).

## Keep: the `types.ts` cycle seam

The mutually-recursive family is de-cycled by a leaf `ProductCard/types.ts` the children import type-only. Keep
it and document as the standard for recursive component clusters (e.g. `ProductSearch` ↔ `ProductSearchResultItem`).
