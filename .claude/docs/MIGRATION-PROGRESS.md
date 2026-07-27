## Instructions for AI Assistant

- **Pick the next batch from the dependency-ordered _Build queue_ below** (take the next unchecked
  entries top-to-bottom): every entry's `needs:` are migrated in an earlier tier, so the next N are
  always buildable. Composition within that window is free — group by archetype where you can. When a
  component lands, move its line up into _Completed_ (keep any per-component note).
- Update this file as you go — flip `[ ]` to `[x]` as each component lands, and always before starting
  the next one (the `scaffold-component` skill drives this at its Step 9).
- A component is done when it is fully generated, strictly typed, `pnpm build` is green, and it passes
  local verification: `pnpm test-storybook` (interaction + a11y) and, if it has a legacy baseline,
  `pnpm exec playwright test --grep <component>` (visual regression vs `legacy-snapshots/`). Note any diff
  that needs human sign-off, or components that have no baseline.
- Run the full `pnpm test:visual` as the gate at the end of each 5-component micro-batch.
- Never proceed to the next batch without updating this progress log.

## Current Batch Status

- **Active Category**: organisms (Tier-6/7 → the `ProductCard` **dependents** landed; **only the ⛔ blocked story-only page templates remain**)
- **Last Updated**: 2026-07-27
- **Current Micro-Batch**: Batch 31 — **the Tier-6/7 `ProductCard` dependents** (complete;
  **ProductCardMini**, **ProductBlock**, **ProductCardList**, **ProductCarousel**, **MiniProductToast**
  `[org]` — the five entries the `ProductCard` cycle unblocked, built top-to-bottom in one micro-batch;
  all five reclassified/confirmed organisms). Each composes the already-migrated family + primitives:
  **ProductCardMini** (presentational summary; `Picture` + `Heading`, product typed as a `Pick` of
  `ProductCardProduct` so a full cart line passes straight through); **ProductBlock** (titled marketing
  section — `ContentWrapper`/`MaxWidth`/`FlexContainer` + `Text`/`Heading` + stacked horizontal
  `ProductCard`s forced `border`/`hideRemoveButton`; a **labelled `<section>` landmark only when
  titled**); **ProductCardList** (responsive **CSS grid** `grid-cols-1 md:2 lg:3 xl:4` over the legacy
  `calc()` item widths — no arbitrary values — on a `<ul role="list">`, framer opacity fade dropped);
  **ProductCarousel** (a `Carousel` of full `ProductCard` on tablet/desktop, **swapping to
  `ProductCardMiniVertical` on mobile** via a pure rich→compact adapter `toMiniProps`/`toMiniProduct`;
  legacy Splide `autoplay` dropped 2.2.2, the broken legacy `onViewportEnter` (fired during render)
  replaced with a correct `IntersectionObserver` impression hook); **MiniProductToast** (fixed slide
  toast — top on mobile, right on desktop — `role="status"` polite showing the last cart line as a
  `ProductCardMini` + a cart `IconButton` badge/`Loader`; **`inert` when closed**, so the off-screen
  content leaves the tab order + a11y tree, fixing the legacy off-screen-focusable button; slide gated on
  `useReducedMotion()`). `pnpm build` green (zero TS), `pnpm build-storybook` green, scoped
  `vitest --project=storybook` **21/21** (ProductCardMini 4 · MiniProductToast 5 · ProductBlock 4 ·
  ProductCardList 4 · ProductCarousel 4), full `pnpm test-storybook` **664 passed / 0 failed**
  (was 643 — +21 stories, all axe- and play-verified), full `pnpm test:visual` **280 passed / 94 skipped /
  0 failed** (was 280/88 — the **3 new reviewOnly baselines × 2 viewports = 6** correctly skipped by the
  pixel gate, no regression). **3 baselines mapped reviewOnly** — **ProductBlock** (`procut-block-story`,
  the legacy typo) inherits its embedded horizontal card's divergences; **ProductCardList** `--visual` +
  `--visual-loka` are full-page grids of reviewOnly vertical cards captured taller than the viewport.
  **ProductCarousel** (legacy baseline is **blank** — story passed `productCards: []`) and
  **MiniProductToast** (legacy baseline captured the toast **closed** — same class as `ProductToast`) are
  **not mapped → current-only** (their Visual stories render populated/open, a different scene);
  **ProductCardMini** has **no standalone baseline** (only captured inside the closed toast) → gallery-only.
  **The build queue is now down to the 11 ⛔ blocked story-only page templates** (`*Page`/`*Template`,
  no `.tsx`; their real deps live in the stories files and several — Breadcrumbs, Hero, BrandDetails,
  Newsletter, InfoSummaryBox, OrderConfirmationDetails, ScrollableList, OfferCardList, Teaser — are still
  unmigrated). **Next: verify each template's real story deps, then scaffold the templates whose deps have
  all landed.**
- **2026-07-27 — Batch 31 findings & harness changes**:
  - **Adapt a rich card config to a diverged compact-card API with pure functions, not inline JSX.**
    Legacy `ProductCarousel` spread the same `IProductCard` into both `ProductCard` (desktop) and
    `ProductCardMiniVertical` (mobile). In V2 the two have **diverged prop shapes**, so the carousel maps
    one `ProductCardProps` down to the mini's API with top-level `toMiniProps()`/`toMiniProduct()` — image
    via `productPicture()`, `favoriteProductsIds.includes(partNo)` → the mini's boolean `isFavorite`,
    `linkComponent==='a'` → `undefined`, campaign `title?` → required `title`. Keep such adapters
    side-effect-free and testable, out of the render tree.
  - **`inert` is the right tool for an off-screen slide-toast (React 19).** A toast that stays mounted and
    slides out (so the exit keeps its content) leaves focusable, announceable content off-screen — the
    legacy MiniProductToast bug. Gating the content wrapper with `inert={!open}` removes the subtree from
    the tab order **and** the a11y tree in a real browser, while the polite `role="status"` still announces
    the product when it opens (inert drops). **Gotcha:** Testing Library's role queries don't model `inert`,
    so assert on the observable `[inert]` attribute (`canvasElement.querySelector('[inert]')`), not on the
    control vanishing from `queryByRole`. (Documented in `docs/DEVELOPMENT.md`.)
  - **Responsive card grids: CSS grid over legacy `calc()` widths.** `ProductCardList`'s legacy
    `calc(50%-0.75rem)` / `calc(33%…)` per-item widths are **arbitrary values (forbidden)**; the identical
    1→2→3→4 column progression comes free from `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
    with `gap-4`. Same pattern the ProductCard templates' CategoryGrid already used; the vertical card is
    `w-full mx-auto` so it fills each cell.
  - **A landmark `<section>` only when it has a name.** `ProductBlock` renders `<section aria-label={title}>`
    when titled (a jump-to region for AT) but a plain, **unlabelled** `<section>` (not a landmark) when it
    has no title — so text-only blocks don't clutter the landmark map. `aria-label={title || undefined}`.
  - **A compact card reuses the family model via `Pick`, not a fresh interface.** `ProductCardMiniProduct =
    Pick<ProductCardProduct, …>` means a full product (a cart line) is structurally assignable with no
    adapter — `MiniProductToast` forwards its `cartProducts` straight down.
- **2026-07-27 — Batch 31 review fixes (user review follow-up)**: four issues raised while reviewing the
  gallery, all fixed and re-verified in-browser at both viewports. (a) **ProductBlock title too small** —
  the title had been snapped to `text-h-s` (1.375rem, the nearest existing token), reading small vs the
  legacy 1.625rem. Added the missing scale step **`--text-h-ms: 1.625rem`** (registered in `cn.ts`'s
  font-size group so merges aren't lossy) and applied `text-h-ms md:text-h-ms`; measured the title is now
  `<h2>` 26px, blue, left-aligned. (The user also left-aligned the rich-text intro — preserved.) (b) **No
  product component may show `undefined` / missing / broken values or images, even where legacy does** —
  root-caused a real **`Picture` atom bug**: its "new image → show skeleton again" effect keyed on the
  `sources` **array reference**, and consumers build a fresh `sources` each render (`productPicture()`
  inside a card that re-renders on state), so every parent re-render reset `isLoading = true` **after** the
  image had loaded, leaving a fully-loaded image stuck at `opacity-0` (blank/broken-looking). Fixed by
  keying the reset on content (`const sourcesKey = JSON.stringify(sources)`) — a general fix benefiting
  every image consumer. Also hardened `ProductCardMini` so a missing currency/unit/label never leaves a
  dangling `/`, `:` or `undefined` (assemble from present parts, omit the line when empty), and pointed the
  review stories at the bundled `beer-glass.jpg` so frames show a real photo, never a faint fallback.
  (c) **`productcardlist--visual-loka` bad tags** — the junk was in the *legacy* baseline ("Le Tag", three
  same-purple tags, "undefined" labels, broken "Placholder" image); the V2 reproduction now uses the El
  Esteco Malbec fixture with **only unique-coloured tags** (Eko green / Fairtrade blue / Vegan purple),
  full labels and a real image — a faithful-but-clean reproduction (still `reviewOnly`). (d) **ProductCarousel
  mobile arrows** — set `arrowsWithDots={isMobile}` so the prev/next arrows sit **inline on the dot row**
  on mobile (legacy bottom-arrow placement; measured `sameRow`), overlaying the track edges on larger
  viewports; and added the legacy dot-hiding rule (`hidePagination` on mobile when peek padding is on and
  `productCards.length > 14`). Gates re-run green: `pnpm build` 0 TS, full `pnpm test-storybook` **664/0**,
  full `pnpm test:visual` **280 passed / 94 skipped / 0 failed** (unchanged — the `Picture` fix regressed
  no baseline). The `Picture` effect-dependency gotcha is documented in `docs/DEVELOPMENT.md` (React 19
  conventions).
- **2026-07-23 — Batch 30 — the `ProductCard` cycle** (complete; **ProductCard** `[org]` +
  **ProductCardHorizontal** / **ProductCardVertical** / **ProductCardRestricted** `[org]`). The
  mutually-recursive family, scaffolded together and cross-wired last per the cycle note; the cycle was
  broken with a leaf `ProductCard/types.ts` seam the three children import **type-only**. **Per the
  user's "logic cannot differ from legacy" directive this batch preserved the legacy business logic
  byte-for-byte** — the dispatcher's `myProduct` state + partial-dep `useEffect` resync, the
  `convertNumToStr` total-price math, `getQuantity` clamp, the uncontrolled-unless-`onChangeQuantity`
  model, `handlePackageChange` re-deriving the product from the variant, and the horizontal
  `debounceQuantityVal` branch + `quantity <= '0'` check. Only markup/a11y was regenerated fresh (WCAG):
  `<article aria-label>` cards, image link `aria-hidden`/`tabIndex=-1` (pointer-only twin of the name
  link — the axe `link-name` fix), named `role="img"` seller/accessory markers, accessible-grey
  limited/out-of-stock ribbons (legacy white-on-orange fails AA), and every icon control given a `label`
  (localisable via a new `labels` object). `pnpm build` green (zero TS), `pnpm build-storybook` green,
  scoped `vitest --project=storybook` **34/34** (7 ProductCard · 3 Horizontal · 8 Vertical · 4
  Restricted, + fixtures), full `pnpm test-storybook` **618 passed / 0 failed** (was 590), full
  `pnpm test:visual` **280 passed / 88 skipped / 0 failed** (was 280/62 —
  the **13 new product-card baselines × 2 viewports = 26** frames all correctly skipped by the pixel
  gate, no regression) — **13 baselines mapped
  reviewOnly** (faithful scenes diverging via brand font + accessible ink over legacy sub-AA
  orange/purple + icomoon→Lucide glyphs + local fallback illustration vs the legacy CDN image; none can
  clear the 2% pixel gate). **Improvement notes for a future hardening pass gathered in
  [`PRODUCT-CARD-HARDENING.md`](./PRODUCT-CARD-HARDENING.md)** (per the user's request). **Next batch =
  the now-unblocked Tier-6/7 dependents** (`ProductCardMini`, `ProductBlock`, `ProductCardList`,
  `ProductCarousel`, `MiniProductToast`), then the ⛔ story-only page templates.
- **2026-07-23 — ProductCard hardening pass (Option A, in-place)**: worked
  [`PRODUCT-CARD-HARDENING.md`](./PRODUCT-CARD-HARDENING.md) end-to-end. **No new components — migration
  counts unchanged (113 completed).** An internal-only refactor of the ProductCard family held to strict
  runtime **and** DOM parity: 12 story DOM states were captured and diffed byte-for-byte before/after
  each structural phase, and the 13 reviewOnly product-card baselines were left untouched. Landed:
  (0) a **runtime contract lock** — `ProductCard.contract.stories.tsx` (a play-function story per audited
  v1.6.6 call shape: horizontal cart line, vertical category card, controlled order-return, uncontrolled
  add-to-cart, restricted, skeleton floor, raw order item, `linkComponent='a'`, `debounceQuantityVal=0`,
  variant change, horizontal campaign) + a compile-time `ProductCard.type-contract.ts` fixture;
  (1) centralised `productPicture()` and a single narrow→rich variant resolver (`onVariantSelect`),
  deleting the per-child lookup dance; (2) a tested `useProductCardState` hook owning all
  price/quantity/variant math — the legacy `quantity <= '0'` lexicographic check kept byte-for-byte and
  documented; (3) shared shells `CardMarkers` / `CardImage` / `CardName` / `CardRibbon` / `CardActions`
  + one `VariantPicker`, consumed by all three cards; (4) **Window-2 typing** — `quantity` optional
  (the skeleton floor), a `ResolvedProductCardProduct` for the merged shape, `linkComponent` accepts the
  `'a'` tag, `productArea` widened (`content-page`/`purchase-list`/any string), the v1-ignored props
  (`onClickRemoveProduct`/`variantsInCart`/`disabledNoBorder`/`iconButton`/`isAddingToCart`) accepted +
  `@deprecated`, `headingLevel` on the dispatcher, a dev-only campaign-contrast warning (fully stripped
  from the lib build), `ProductCardProduct` exported as the app-factory anchor; (5) fixtures →
  `productCardFixtures.ts` with deterministic local images (no CDN fetch). Gates: `pnpm build` (0 TS);
  `pnpm test-storybook` **630 passed / 0 failed** (was 618 — +12 contract-lock stories); `pnpm
  build-storybook` green; `pnpm test:visual` **280 passed / 88 skipped / 0 failed** (unchanged). See
  `docs/DEVELOPMENT.md` for the internal architecture, the JS↔TS two-window rule, and the `@deprecated`
  list.
- **2026-07-23 — variant-picker overlay restored (review follow-up, deliberate behaviour change)**: while
  reviewing the hardened output the user flagged that the variant picker no longer slid up over the card.
  Batch 30 had regressed the legacy `vertical-variants` / `horizontal-variants` behaviour (a bottom-anchored
  `position:absolute; inset:0` panel sliding `y:100%→0%` and covering the whole card) into an in-place
  `ProductVariantList` swap (vertical/restricted) and a non-covering carousel (horizontal). Restored it in
  the shared `VariantPicker`: an `absolute inset-0 z-20 bg-white` overlay using the `animate-slide-up`
  keyframe (resting frame `translateY(0)` — covering) gated behind `motion-reduce:animate-none`, so it is
  never stuck off-screen under reduced motion / a throttled tab; the card root clips while open. Companion
  layout fixes on the content-height horizontal row card (the fixed-height vertical/restricted cards are
  immune): (a) it gets `min-h-64` while the picker is open so the ~240px carousel never clips; (b)
  **variant-switch height stability** — `handlePackageChange` copies per-variant `tags`/`activeCampaign`,
  so switching to a variant lacking them used to collapse the markers row / drop the campaign `pt-10` and
  resize the card. Now the markers row is always rendered (reserves `min-h-9` like the vertical card) and
  the campaign state adds only the border+ribbon (no `pt-10` — the reserved markers band is the ribbon's
  clearance), so toggling tags/campaign between a product's variants no longer changes the card height.
  These are **behaviour changes vs Batch 30** (authorised during review), not parity refactors; closed-card
  DOM for the mapped frames is unchanged (their fixtures carry a tag + no campaign) so the 13 reviewOnly
  baselines still hold. Two further review fixes: (c) **product-level tags inherit** —
  `handlePackageChange` now uses `selectedVariant.tags ?? product.tags`, so Eko/Vegan/Fairtrade persist
  across variant switches instead of vanishing when a variant omits them (per-SKU
  `outOfStock`/`sellerOnly`/`activeCampaign` stay variant-specific). **Note:** this changes the product
  object emitted to `onVariantChange`/`addToCart` (tags now carry through) — a deliberate Window-1
  deviation, flagged for the app team in case their variant data intentionally varies tags. (d) the
  story fixtures point each variant thumbnail at the bundled placeholder SVG (was empty `src` → a
  broken-image glyph in the picker; real app supplies image URLs). Gates re-run green: `pnpm build`
  (0 TS), `pnpm test-storybook` 630/0, `pnpm test:visual` 280/88/0.
- **2026-07-23 — ProductCard app-scenario Templates (verification harness)**: audited every ProductCard
  rendering context in the consuming app (`spendrups-frontendapp`, read-only) and reproduced them as
  integration stories in `ProductCard.templates.stories.tsx` (title `…/ProductCard/Templates`), each
  driving the public `ProductCard` dispatcher with the app's exact props and product shapes
  (`productCardFactory` / `productFromCartItemFactory`), wrapped in the same kind of grid/list.
  Fixtures in `productCardTemplateFixtures.ts` (deterministic placeholder images, Swedish labels).
  Covered: category grid, content-page block, restricted/anonymous grid, recommended row, mini-cart
  line, checkout cart line (live debounced total), order-details line (`allowNegative`), order-return
  (`maxQuantity` cap), purchase-list line, favourites list, returnable-container webform
  (`linkComponent='a'`), + vertical/horizontal loading skeletons. Controlled screens (cart/checkout/
  order/return/purchase-list) held in local state via a `ControlledLine` wrapper so the steppers are
  live like the app. Stories are **untagged** → excluded from `test:visual` (no unpaired baselines).
  **Finding (not fixed — needs a parity decision):** the cards never forward their `labels` to the
  inner `ProductQuantityInput`, so its quantity/price readout (`Quantity` / `pcs` / `Price:` / `×`)
  renders in English regardless of the card's locale — visible in the Swedish templates. Flagged for
  the app team. Gates: `pnpm build` (0 TS), `pnpm test-storybook` **643 passed / 0 failed** (was 630 —
  +13 template stories, all axe- and play-verified), `pnpm build-storybook` green, `pnpm test:visual`
  280/88/0 (unchanged).
- **2026-07-24 — ProductCard layout fixes surfaced by the templates (review follow-up)**: (a)
  **variant-picker horizontal inset** — the grid picker overlay is `absolute inset-0` (edge to edge), so
  its rows sat flush against the card border; gave the grid `ProductVariantList` `px-4` to match the
  card's own `p-4`. (b) **vertical card bottom-padding spill** — the card is a fixed `h-product-card-v`
  with `justify-between`, and the special-card `border-2` (campaign/limited/out-of-stock) consumes 4px of
  the content box under `box-sizing: border-box`; a card whose content already filled the height then
  spilled its add-to-cart row ~9px past the bottom padding. Fixed by making the **image area the flexible
  element** — `h-2/5` → `min-h-0 flex-1` on the image (and its loading twin) — so the fixed chrome always
  fits and the media absorbs the slack (`object-contain` keeps the bottle proportional). A `min-h` on the
  card itself was rejected: the image's percentage height needs a *definite* parent, so `min-h` broke the
  sizing (cards ballooned to ~600px). Measured: all six grid cards now 488px, overflow 0, spill 0. Gates:
  `pnpm build` 0 TS, `pnpm test-storybook` 643/0, `pnpm test:visual` 280/88/0 (product-card baselines are
  `reviewOnly` → unaffected).
- **2026-07-27 — four more ProductCard fixes surfaced by the templates (review follow-up)**: (a)
  **RestrictedGrid template overlap** — the restricted card is a fixed `w-75` (300px, faithful to legacy's
  effective `--product-card-width-vertical`), but the listing-grid templates started at `grid-cols-2` on
  mobile (163px cells) so adjacent fixed-width cards overlapped by ~120px. The app's real
  `.product-listing__list` is **1 column on mobile**, going to 2 only ≥768px (≥~360px cells). Matched it:
  `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` on CategoryGrid / RestrictedGrid /
  CategoryGridLoading. **Template-only fix; the DS card is untouched** (its fixed width is correct within
  the app's real grid). (b) **horizontal campaign remove-button overlap** — the dark `icon-x-circle` sat
  half-on the brand-coloured ribbon band. Restored the legacy `.specialCard .iconLink` (lift `top-5`→`top-2`
  on any special card so the button centres in the band) + `.campaign .iconLink button { color:white }`
  (glyph `text-white` on campaign cards, ≥4.5:1 on `#9a576f`) — both dropped in migration. (c) **horizontal
  card grew when the variant picker opened** — `variantsOpen` floored the card to `min-h-64` (256px); the
  picker's true intrinsic height is ~200px (close row + one carousel variant card), so `min-h-64`→`min-h-50`
  (200px): every real horizontal card is already ≥200px (the `h-36` image forces it) so the floor never
  grows them (218px stays 218px), while genuinely-short cards are still guarded from clipping. (d)
  **focus-ring clipped on the quantity field & cart button** — the horizontal content column used
  `overflow-hidden` (doubling as the flex `min-width:0` shrink trick), which cropped the edge-hugging
  controls' `outline-offset-2` ring (2.4.7 / 2.4.11). Swapped to `min-w-0`: identical shrink/wrap behaviour
  (TagsList wraps, the name wraps → nothing overflows), ring no longer clipped, card's own `p-4` gives 12px
  clearance. Verified by in-browser geometry (grow=4px = the real ring → no clipping ancestor) at mobile and
  desktop. Gates: `pnpm build` 0 TS, `pnpm test-storybook` 643/0, arbitrary-value scan clean. `pnpm
  test:visual` full run showed 271/88/**9** — but the 9 are flaky **mobile** frames of components untouched
  this session (`messagebanner`, `orderconfirmationdetails`, `iconbutton`, `formgroup`, `campaignbox`,
  `iconlink`); re-running just those 11 mobile frames passed 11/0, so it's pre-existing mobile flake, not a
  regression. The product-card frames stay `reviewOnly` (skipped) and green.
- **2026-07-20 — Batch 30 findings & harness changes**:
  - **A cyclic component family breaks cleanly with a leaf `types.ts` seam.** `ProductCard` imports its
    three children (runtime); the children need the shared prop/product/variant types + default labels.
    Putting those in `ProductCard/types.ts` (a leaf importing only atom/molecule *types*) and having the
    children `import type` from it makes the cycle type-only → erased at compile, no runtime import loop.
    Reusable pattern for `ProductSearch`↔`ProductSearchResultItem` and any future recursive cluster.
  - **A link that wraps only a decorative image is a nameless link (axe `link-name`).** The card image is
    a redundant pointer affordance beside the real name link, so it must be `aria-hidden` + `tabIndex={-1}`
    (out of the a11y tree and tab order) — not left as an `<a>` whose sole child is an `alt=''` `Picture`.
    Same fix mini-vertical already used; all 23 first-run a11y failures were this one issue across every
    story with a `productUrl`.
  - **The V2 variant pickers take a NARROW `ProductVariantListItem` but the dispatcher's
    `handlePackageChange` needs the RICH variant.** Resolved by making `ProductCardVariant` a structural
    superset of `ProductVariantListItem` (so the rich list passes straight to the picker) and looking the
    rich variant back up by `variantId` on select. Works, but it's the friction that motivates hardening
    note #1 (one canonical product/variant model). See [`PRODUCT-CARD-HARDENING.md`](./PRODUCT-CARD-HARDENING.md).
  - **Preserved a latent legacy bug on purpose (documented).** Horizontal's add-to-cart disabled check is
    `quantity <= '0'` — a *lexicographic* string compare (`'10' <= '0'` is `false`), inconsistent with
    vertical/restricted's `quantity === '0'`. Kept byte-for-byte under the "logic cannot differ" directive
    and flagged in the hardening notes (#2) rather than silently "fixing" it.
- **2026-07-20 — Batch 29 — DynamicFilter** `[org]` (Tier-5, complete) — the sole genuinely
  unblocked queue entry after Batch 28 exhausted the Tier-4 leaves (its `needs: DrawerSidebar ✓ /
  RangeInput ✓ / Button ✓` all migrated). A one-component batch by necessity: **everything else remaining
  is blocked on the mutually-recursive `ProductCard` cycle** (`ProductCardHorizontal`/`-Restricted`/
  `-Vertical` → `ProductCard` → its 7 Tier-6/7 dependents). `pnpm build` green (zero TS),
  `pnpm build-storybook` green, scoped `vitest --project=storybook` **6/6**, full `pnpm test-storybook`
  **590 passed / 0 failed** (the Batch-26-noted `DebounceInput` failure is no longer present), full
  `pnpm test:visual` **280 passed / 62 skipped / 0 failed** (was 276/62 — **DynamicFilter ×2 GATED both
  viewports + green**). **Next batch = the `ProductCard` cycle**: scaffold the four shells
  (`ProductCard` + `-Horizontal`/`-Restricted`/`-Vertical`) together and wire the cross-references last,
  per the cycle note — then its Tier-6/7 dependents (`ProductCardMini`, `ProductBlock`, `ProductCardList`,
  `ProductCarousel`, `MiniProductToast`) unblock, followed by the ⛔ story-only page templates.
- **2026-07-20 — Batch 29 findings & harness changes**:
  - **A nested `<button><Checkbox/></button>` option row is an axe `nested-interactive` fail — split it
    into a native input + a real `<label htmlFor>`.** Legacy DynamicFilter wrapped a `Checkbox` atom in a
    `<button onClick>` (the button owned the toggle; the checkbox was decorative). V2 renders the native
    `Checkbox`/`RadioButton` and an external `<label htmlFor={id}>` as siblings inside a named
    `role="group"`/`radiogroup` panel — the label toggles the control natively, no nesting. Same class as
    the Batch-17 ProductVariant `<button>`-around-`<RadioButton>` fix. General rule: a "clickable row that
    contains a form control" is a `<label>` + control, never a `<button>` wrapping the control.
  - **A per-pixel `threshold` (0.2) absorbs a cream-vs-light-grey fill delta, so a "big" colour divergence
    can still clear the ratio gate — measure, don't assume.** The migrated `Button surface="x"` fills grey
    only at `md`+ (`md:bg-action-x`), so DynamicFilter's V2 **mobile** trigger is transparent where the
    legacy mobile button is a full-width grey band (~48px × full width ≈ a big area). I expected that to
    blow the 2% gate on mobile → provisionally mapped `reviewOnly`. But measuring showed pre-selected
    **mobile at only 1.03%** (default mobile 0.67%): Playwright's per-pixel `threshold: 0.2` treats
    cream (#faf9f6) vs light-grey (#ededed) as "same", so those band pixels never count — only the
    font/glyph rendering differs. Re-mapped **GATED** (the skill's rule: a frame that *can* clear 2% must
    be gated, not `reviewOnly`). Lesson: for a fill/colour divergence, run the diff before reaching for
    `reviewOnly` — the per-pixel threshold may already absorb it. (Reinforces the standing
    "measure both viewports" note.)
  - **Responsive dual-layout without duplicated DOM.** Prior responsive organisms (Header/TopNavBar) render
    BOTH layouts and `display:none` the inactive one (→ `getAll*` + `{hidden:true}` in tests). For
    DynamicFilter's selected-filter chips I rendered the chip list **once** and drove the mobile
    collapse purely with `display` classes on the single container (`hidden md:flex` + a `md:hidden`
    disclosure toggle that flips the base to `flex`), so there's no duplicate remove-button in the a11y
    tree and tests use plain `getByRole`. Works when the two layouts share identical content (only
    visibility differs); the duplicate-subtree pattern is still needed when the layouts differ structurally.

  **RangeInput** `[org]`, **ProductDescription** `[org]` — the three unblocked Tier-4 entries
  top-to-bottom; **ProductCardHorizontal** stays **blocked** on the unmigrated `ProductCard` cycle).
  `pnpm build` green (zero TS), `pnpm build-storybook` green, scoped `vitest --project=storybook`
  **13/13** across the three (ProductCardMiniVertical 5 · RangeInput 5 · ProductDescription 3), full
  `pnpm test:visual` **276 passed / 62 skipped / 0 failed** (was 274/60 — **ProductDescription ×2 gated
  + green**; **ProductCardMiniVertical ×2 reviewOnly**). **RangeInput = no baseline** (legacy shipped no
  story/snapshot) → gallery-only. **Tier-4 leaves are now exhausted.** Next buildable = **DynamicFilter**
  `[org]` (Tier-5) — its `needs: DrawerSidebar ✓ / RangeInput ✓ (this batch) / Button ✓` are all
  migrated; the whole **ProductCard family** (`ProductCardHorizontal`/`-Restricted`/`-Vertical` →
  `ProductCard` → its 7 dependents) stays **blocked** on the mutually-recursive `ProductCard` cycle
  (scaffold the shells + wire cross-refs last, per the cycle note).
- **2026-07-15 — Batch 28 findings & harness changes**:
  - **A `Heading order` size override must neutralise the `md:` variant too.** `sizeByOrder[3]` is
    `text-h-m md:text-h-m-lg`; an unprefixed `text-body-s` on the `Heading` className overrides the base
    but NOT the `md:text-h-m-lg` (a different tailwind-merge variant key), so the title rendered large on
    desktop only. Fix: pass **both** `text-body-s md:text-body-s`. (Found sizing ProductCardMiniVertical's
    small `bodyS` title; measured desktop diff dropped 3%→<2% after the fix.) General rule: to force a
    single size across breakpoints on a component whose size is responsive, override every active variant.
  - **RangeInput is a thin wrapper over the migrated `Slider`, not a re-implementation.** The legacy
    `rc-slider` stepped range maps to `Slider` by deriving `{min, max, step}` from the `steps` array
    (step = smallest consecutive gap) and **snapping every reported value to the nearest step** — so the
    fields, thumbs, two-way binding and all a11y (native `role="slider"` + `aria-valuemin/max/now`) come
    from `Slider` for free and **real values, not indices, are announced/typed**. Assumes ascending
    `steps`; documented the uniform-ish-step assumption. Dropped the legacy debounce (context-change-free
    reporting, 3.2.2). No legacy story/snapshot → gallery-only.
  - **ProductDescription's Framer accordion → plain `aria-expanded`/`aria-controls` disclosures over
    named `role="region"` panels, each `hidden` while collapsed** (always in the DOM, so `aria-controls`
    never dangles). A button with an `onClick` is a plain **action** (download/play) that fires + closes
    panels and exposes **no** `aria-expanded`; a button with `content` and no `onClick` is the disclosure.
    Open state is the filled **primary** surface (not colour-only — backed by `aria-expanded`). The
    migrated `ProductDetails` collapsed its `ProductSpecs` sub-component into itself, so there is no
    standalone specs renderer to reuse — panel `content` is a flexible `ReactNode` (consumer supplies the
    spec `<dl>`), and the "needs: ProductDetails" was build-order only, not a runtime dep. Collapsed frame
    is fully accessible + reproducible → **mapped GATED both viewports**.
  - **ProductCardMiniVertical (molecule→organism) is a controlled/presentational rewrite.** Dropped the
    legacy internal cart-quantity debounce + `variantsInCart` sync (app concerns) — quantity/selection are
    controlled, callbacks bubble up. Icon-only markers are named `role="img"` graphics (seller-only eye,
    accessory "S" as **dark-on-orange**, the IconButton-badge accessible pairing) — never colour-only
    (1.4.1); title → accessible dark (legacy orange fails AA); packaging button is an `aria-expanded`
    disclosure toggling a render-while-open `VerticalVariants`. Made the card **layout-agnostic** (`w-full`,
    fills its grid cell) instead of the legacy hard-coded 50%/100% width — column layout is the consumer's
    concern; the Visual story reproduces the legacy 50%-width frame via an inline-styled wrapper.
  - **ProductCardMiniVertical display fixes (user review).** Two ways the first cut diverged from legacy:
    (1) **the variant picker must be an absolute overlay covering the card, not an in-flow panel.** Legacy
    `vertical-variants` is `position:absolute; inset:0` sliding up over the card; composing the migrated
    `VerticalVariants` in normal flow appended it *below* the add-to-cart and (on a wide card) let its
    tiles spread the full width. Fix: pass `className="absolute inset-0 z-20 overflow-y-auto rounded-lg
    bg-white"` (the card is already `relative overflow-hidden`, so the overlay is clipped to it). (2)
    **the add-to-cart is full-width in this card** — the migrated `AddToCartButton` defaults to
    `max-w-45`, so it rendered as a small centred pill; override with `w-full max-w-none`. Also gave the
    interactive stories an `inCardCell` (~20rem) decorator — a full-viewport-wide mini card is unrealistic
    and was what made the (pre-overlay) variant tiles spread. Re-measured reviewOnly: desktop ~4% / mobile
    ~6% (the full-width CTA now matches legacy but sits at a slightly different vertical position → the
    small diff rise is expected; still a faithful scene past the gate). 5/5 scoped tests stay green.
  - **ProductCardMiniVertical variant-picker rebuilt as a grid-safe slide-up overlay (user review,
    follow-up — supersedes the earlier `min-h-112` attempt).** Composing `VerticalVariants` was the root
    problem: its carousel caps at `max-h-96` and scrolls internally, so an `absolute inset-0` overlay
    around it nested a second scroller (last variant unreachable), and growing the card (`min-h-112`) to
    fit it **changed the card's height → broke a grid of cards** (the user's report). Dropped
    `VerticalVariants` here and built a **self-contained slide-up panel** composing `ProductVariant`
    directly: `absolute inset-0` (the card's own height is NEVER touched → grid-safe), a `flex flex-col`
    where the close row is fixed and a `<fieldset>` (`flex-1 min-h-0 overflow-y-auto`, the radio group)
    is the **single scroll container**. Each variant tile is **`h-2/5` (~40%, legacy's `fixedHeight:40%`)**
    so ~2.5 show and the partial one signals more-to-scroll (verified: 3 tiles at 153px each in a 390px
    viewport, ~39%, uniform, no clipping). **Slide-up uses a CSS `@keyframes slide-up` (`--animate-slide-up`)
    with NO `to` frame** rather than Framer `initial={{y:'100%'}}` — the resting transform is the natural
    `translateY(0)`, so if the animation never runs (reduced motion, throttled rAF) the panel is left
    COVERING the card, never stuck off-screen (Framer's `initial` left it stuck at `y:100%`). `Escape` +
    outside-`pointerdown` (document-level) dismiss. General lesson: a slide-in overlay's *resting* state
    must be the visible one — animate via a `from`-only keyframe, never an `initial` off-screen state that
    becomes the fallback; and never resize a grid cell to fit transient content — overlay it with `absolute
    inset-0` and scroll inside.
  - **ProductCardMiniVertical compact-typography fix (user review, follow-up).** On the ~176px mobile
    card the content **wrapped** ("0 x Kolli (24 styck)" and the "33cl Engångsglas" packaging button
    each broke onto two lines) and the **tag pills were too big** — because V2 used the standard
    `text-body-s`/`text-body` (14–16px) where legacy's mini card is denser: `.detail` 0.75rem, `.price`
    0.875rem, tags **0.5rem**. Two reusable causes: (1) **`Tag` `shape="pill"` ignored the `size` prop**
    — it hard-coded `text-tag-rect md:text-tag-rect-lg` (0.75/1rem), so a `size="sm"` pill was NOT small.
    **Fixed follow-up:** the pill branch now honors `size` (sm→`text-tag-sm`, md→`text-tag-rect`, lg
    unchanged so existing pills don't shift), mirroring the rectangular branch; `PillSizes` story +
    assertion added. The mini card keeps its `text-tag-xs` override since it needs a sub-`sm` 0.5rem.
    (2) No sub-0.75rem body / sub-0.625rem tag token existed. Added
    **`--text-body-xs` (0.75rem)** and **`--text-tag-xs` (0.5rem)** to `@theme` (both registered in
    `cn.ts`'s font-size group so merges aren't lossy), then applied `text-body-xs` to the detail/quantity
    lines, `text-body-s` to the total, `text-tag-xs` to the tags, and a compact `h-8 px-3 text-body-xs`
    to the packaging button. Measured (browser): tags 8px, details 12px one-line, total 14px, packaging
    one-line — matching legacy; the reviewOnly diff dropped desktop 4%→3%, mobile 6%→4%. The card width
    itself was never wrong (176px = legacy's `calc(50% − 0.25rem)`); the "narrower/squeezed" report was
    the oversized text wrapping. 5/5 scoped tests + `pnpm build` green.
- **Current Micro-Batch**: Batch 27 — Tier-3 leaves (complete; **LoginForm** `[org]`, **ProductToast**
  `[org]`, **ResetPasswordForm** `[org]`, **UserProfileDropdown** `[org]` — the four remaining buildable
  Tier-3 leaves top-to-bottom; the ProductCard-family (`ProductCardRestricted`/`-Vertical`) stays
  **blocked** on the unmigrated `ProductCard`). `pnpm build` green (zero TS), `pnpm build-storybook` green,
  scoped `vitest --project=storybook` **21/21** across the four, full `pnpm test:visual` **274 passed /
  60 skipped / 0 failed** (was 270/56 — LoginForm ×2 **gated desktop-only** + UserProfileDropdown
  `--visual` ×2 **gated**; UserProfileDropdown `--visual-open` **reviewOnly**). **ProductToast** = no map
  (all four legacy PNGs are the closed/empty toast — a *different* scene → current-only) and
  **ResetPasswordForm** = no baseline (legacy shipped no story) → both gallery-only. **Tier-3 leaves are
  now exhausted.** Next buildable = the three unblocked **Tier-4** entries: **ProductCardMiniVertical**
  (VerticalVariants ✓ / IconButton ✓ / Button ✓ / AddToCartButton ✓), **RangeInput** (Form ✓ / Slider ✓),
  **ProductDescription** (Button ✓ / ProductDetails ✓); **ProductCardHorizontal** stays **blocked** on
  `ProductCard`.
- **2026-07-15 — Batch 27 findings & harness changes**:
  - **`IconButton` cannot be a disclosure/menu/dialog trigger — it doesn't spread rest props**, so
    `aria-expanded`/`aria-controls`/`id` never reach its `<button>`. An icon-only trigger that needs
    disclosure semantics must inline IconButton's class recipe on a native `<button>` (as
    UserProfileDropdown does) or use `MenuButton`. Candidate enhancement filed: add an aria/`id`
    passthrough to `IconButton`.
  - **A legacy story that gates its component behind a trigger + an auto-close timer snapshots the
    CLOSED/empty canvas** (the toast/drawer is never on screen at capture). Correct call: render the OPEN
    component in the Visual story for gallery review and leave it **current-only + NOTE**, never
    `reviewOnly` (which is for faithful reproductions of the *same* scene). Second occurrence
    (DrawerSidebar was first); **ProductToast** is the new case.
  - **Don't infer a prop API from vestigial legacy story args.** ProductToast's `recommendedProducts`/
    `recommendedProductsTitle` and LoginForm's submit-label props were passed by the legacy *stories* but
    **never rendered** by the legacy *components* — the real behaviour was `children`-after-divider (toast)
    and buttons-only-from-`actions` (form). Faithful parity frames therefore render **fewer** elements than
    the "correct" V2 component — which is why LoginForm's submit button is an **optional** prop the `Visual`
    frames omit while Default/Loading exercise the real submit.
  - **Legacy `height: calc(100vh - 2rem)` full-viewport cards → desktop-only baseline map.** LoginForm's
    legacy mobile card fills the viewport height where V2 is content-height, so the mobile frame is
    structurally incomparable (same full-page-capture class as InputFile/Textarea) — mapped desktop-only;
    desktop matches because the legacy desktop card is content-height too.
- **Current Micro-Batch**: Batch 26 — Tier-3 leaves (complete; **Slider** `[org]`, **ProductDetails**
  `[org]`, **Footer** `[org]`, **Header** `[org]`, **HeroCarousel** `[org]` — the next five buildable
  entries top-to-bottom, skipping the ProductCard-family (`ProductCardRestricted`/`-Vertical`) still
  **blocked** on the unmigrated `ProductCard`). `pnpm build` green (zero TS), `pnpm build-storybook`
  green, scoped `vitest --project=storybook` **25/25** across the five (Slider 5 · HeroCarousel 3 ·
  Footer 5 · Header 3 · ProductDetails 9), full `pnpm test:visual` **270 passed / 56 skipped / 0 failed**
  (was 268/52 — Slider ×2 **gated + green**; HeroCarousel + Header **reviewOnly**). **Three of the five are
  no-baseline because the legacy snapshots are Storybook _error frames_** (Footer: `logo`-object rendered
  as a child; ProductDetails ×4: `convertNumToStr(undefined)` `toFixed` crash) — gallery-only.
  **Pre-existing, unrelated:** `pnpm test-storybook` has 1 failing test (`DebounceInput` `DebouncedChange`
  — its story passes a plain fn where a `fn()` spy is asserted, commit `134076e6`); untouched by this
  batch, flagged as a separate task. Next buildable Tier-3 leaves: **LoginForm**, **ProductToast**,
  **ResetPasswordForm**, **UserProfileDropdown**.
- **2026-07-15 — Batch 26 findings & harness changes**:
  - **A "green" legacy PNG can be a Storybook _crash_ frame — always eyeball it before mapping.** Both
    Footer snapshots and all four ProductDetails snapshots are the red Storybook error boundary (a React
    render crash at capture: Footer rendered its `logo` *object* as a child; ProductDetails ran
    `convertNumToStr(undefined)`). Same "blank/broken frame = no valid oracle" class as TopNavBar /
    DeliveryInfoBar. Resolution: no map, gallery-only. The V2 rewrites fix the root cause (self-contained
    `Logotype`; guarded price math).
  - **`Carousel` gap must carry a unit — `gap="0"` silently breaks slide sizing.** The slide width is
    `calc((100% − (perPage−1)·var(--cs-gap)) / perPage)`; a unitless `--cs-gap: 0` makes the subtraction
    `100% − <unitless>` **invalid**, so `flex-basis` is dropped, slides collapse to content width (0), the
    track never overflows and the arrows/dots never render. Pass **`gap="0px"`**. (Found building
    HeroCarousel.) Recorded in docs/DEVELOPMENT.md.
  - **Range inputs don't step via `userEvent` arrow keys in vitest-browser.** `userEvent.keyboard(
    '{ArrowRight}')` on `<input type="range">` doesn't fire the native value step here — assert
    keyboard *focusability* (`.focus()` + `toHaveFocus`) and drive value changes with
    `fireEvent.change(input, { target: { value } })`, asserting the reported range + clamping. (Slider.)
  - **A conditionally-rendered popover can't be an `aria-controls` target.** ProductDetails' packaging
    button toggles a `ProductVariantList` rendered only while open; wiring `aria-controls` to its id
    would dangle (axe fail) while closed. Use `aria-expanded` alone (a valid standalone state) and
    render-while-open, as with the Batch-25 Variants pickers.
  **FaqGroup** `[org]`, **InvoiceList** `[org]` — the last two Tier-2 leaves — then **HorizontalVariants**
  `[org]`, **VerticalVariants** `[org]`, **SocialMediaLinks** `[mol]` from Tier-3). `pnpm build` green (zero
  TS), scoped `vitest --project=storybook` **20/20** (interaction + a11y), `pnpm build-storybook` green,
  full `pnpm test:visual` **268 passed / 52 skipped / 0 failed** (was 266 — **SocialMediaLinks ×2** added,
  gated + green). Four of the five are **no-baseline** (legacy shipped no story, or only rendered inside an
  unmigrated parent) → gallery-only; only **SocialMediaLinks** maps a legacy frame. The ProductCard-family
  Tier-3 leaves (`ProductCardRestricted`/`-Vertical`) stay **blocked** on the unmigrated `ProductCard`
  cycle; the next buildable entries are the remaining Tier-3 leaves (**ProductDetails**, **Slider**,
  **Footer**/**Header** groundwork, **LoginForm**, …).
- **2026-07-15 — Batch 25 findings & harness changes**:
  - **A named container + a child that self-names create a *duplicate* group — don't double-wrap.**
    HorizontalVariants/VerticalVariants first wrapped their `Carousel` in a `<fieldset>`/`<legend>` for
    the radio group, but the Carousel track already renders `role="group" aria-label={ariaLabel}`. Passing
    the *same* name to both produced two groups with one name → `getByRole('group', { name })` threw
    "found multiple elements" (and AT would double-announce). Fix: drop the fieldset — native radios group
    via their shared `name`, and the Carousel's own `role="group"` supplies the name. Lesson: before adding
    a grouping wrapper, check whether the composed child is *already* a named landmark/group.
  - **`aria-label` on a generic `<span>` is an axe HARD fail (`aria-prohibited-attr`).** InvoiceList's
    two-line date pill needs an accessible label ("Due date: 15 Mar, expired") distinct from its visible
    "Mar / 15". A bare `aria-label` on the `<span>` is prohibited (generic role doesn't support naming);
    adding `role="img"` makes the label valid *and* models the pill correctly (a graphic date badge whose
    text is presentational). This also keeps the overdue state off colour-only (1.4.1) — the label says
    "expired". Reusable rule: to name a non-interactive composite, give it a role that supports naming
    (`img`/`group`/…), never `aria-label` on a raw span/div.
  - **Locale-agnostic dates without baking month names.** Legacy `formatDateToDayMonthDMY` hard-coded
    Swedish abbreviations (`Maj`, `Okt`). V2 parses the ISO `dueDate` and formats via
    `Intl.DateTimeFormat(locale, …)` driven by a `locale` prop (default `en-US`) — day/month for the pill,
    month+year for the group headings — so the same component ships to any locale. Undated paid invoices
    fall into an overridable `labels.otherInvoices` bucket (deterministic — no `new Date()` "current
    month" fallback that would flake tests/snapshots).
  - **Legacy React-16 drawers → render-while-`open`, not translate-off-screen.** Both Variants pickers
    (and legacy generally) kept the panel mounted and slid it out with a Framer `y:100%` transform — so a
    "closed" panel's radios stayed in the a11y tree and tab order. V2 renders the panel only while `open`
    (mount = presence), so closed = gone from the a11y tree; the decorative slide is dropped rather than
    reduced-motion-gated. Same class as the TopNavBar/DeliveryInfoBar "off-screen but still announced"
    findings.
  **TopNavBar** `[mol]`, **AccountBoxList** `[org]`, **CreateListForm** `[org]`, **DeliveryForm** `[org]` —
  the next five unblocked queue entries top-to-bottom). `pnpm build` green (zero TS), scoped
  `vitest --project=storybook` **17/17** (interaction + a11y), `pnpm build-storybook` green, full
  `pnpm test:visual` **266 passed / 52 skipped / 0 failed** (was 261/47 — DeliveryForm ×2 +
  CreateListForm-loading ×2 + CreateListForm-desktop **gated**; Teaser ×2 **reviewOnly**; CreateListForm
  plain frame mapped desktop-only after a user-review spacing fix). **TopNavBar &
  AccountBoxList are no-baseline** (blank legacy oracle / intentionally-fixed scene — see queue notes).
  **CreateListForm was completed here, so Batch-23's Modal current-only note can be revisited** (its
  legacy frame wrapped CreateListForm, now migrated). The next batch continues Tier-2:
  **FaqGroup**, **InvoiceList**, then the ProductVariant-family organisms.
- **2026-07-14 — Batch 24 findings & harness changes**:
  - **A green-looking baseline can be an invalid oracle — always eyeball the legacy PNG before mapping.**
    Every `top-nav-bar` legacy frame is BLANK from two compounding faults: the story passed `links` (the
    component read `leftLinks`/`rightLinks`) AND the layout used `Above`/`Below` JS-media-query render-props
    that returned nothing during capture → the component early-returned `null`. Same "blank frame = no valid
    oracle" class as DeliveryInfoBar (delayed entrance) and PopUp (closed state). Resolution: no map,
    gallery-only. Migration lesson: V2 replaced the JS-media-query render-props with responsive `display`
    utilities (`lg:hidden` / `hidden lg:flex`) — the hidden branch leaves the a11y tree, so duplicated
    content isn't double-announced (but `getByText` still matches it in tests → assert with `getAllByText`).
  - **Dead CSS custom-property → runaway intrinsic image.** AccountBoxList's legacy logo set
    `height: var(--logotype-height-mobile)` where that token was never defined, so the height was dropped and
    the ~700px wordmark rendered at full size, overlapping the heading. V2 constrains it (`h-8 md:h-10`),
    making the V2 frame an intentionally *different* (corrected) scene → current-only + NOTE, not reviewOnly.
  - **The diff image tells you WHICH divergence to fix — don't guess from the total %.** CreateListForm's
    plain frame diffed 4% (h1/`h-xl` title too large vs legacy). Shrinking the title to the legacy `.h3`
    (=`headingM`=`h-m`) size made the *total* worse (6%) — but the diff PNG showed the heading now aligned
    and the growth was a cumulative vertical drift from the two composed `FormGroup`s below it (V2's
    label/control rhythm runs a few px taller than the legacy `input { margin }`). Kept the correct `h-m`
    title; the `-loading` frame was gated + green throughout (the overlay covers the drifting body).
  - **Field-spacing fix (user review) + why it's viewport-scoped.** Measured the drift (Playwright rects
    vs a canvas row-scan of the legacy PNG): the two `FormGroup`s stacked with **0** gap while legacy's text
    input carried `margin-bottom: 22px`, so V2's submit sat at y=461 vs legacy 490 (29px too high). Restored
    the inter-field rhythm with a `space-y` between the groups → submit y=489. But it's **`md:`-scoped**: the
    same measurement on mobile showed the *un-spaced* form already aligned (submit 431 vs 433) — legacy's
    larger desktop padding/heading is what opens the gap at `md`+, so a viewport-blind `space-y` over-shifted
    mobile by 28px. With `md:space-y-7`, desktop is now **gated + green**; the plain frame is mapped
    **desktop-only** because a separate legacy quirk (the unconstrained ~70px logo vs V2's normalised 32px
    `Logotype`) shifts the mobile stack >2% — the standard narrow-canvas amplification, same as AccountBoxList.
    Lesson: field/rhythm spacing that must match a legacy frame is often **viewport-specific** — measure both
    viewports before committing a spacing utility, or you fix one and break the other.
- **Current Micro-Batch**: Batch 23 — Tier-2 molecules (complete; **MessagePopup** `[mol]`,
  **Modal** `[mol]`, **QuantityChanger** `[mol]`, **SortableList** `[mol]`, **Table** `[mol]` — the next
  five unblocked queue entries top-to-bottom, all `needs: IconButton`/`Button`, both migrated).
  `pnpm build` green, full `vitest --project=storybook` **484/484** (interaction + a11y, was 457),
  `pnpm build-storybook` green, full `pnpm test:visual` **261 passed / 47 skipped / 0 failed** (was
  259/41 — MessagePopup +2 **gated**; SortableList ×2 + Table ×3 **reviewOnly**, paired for sign-off).
  **QuantityChanger is no-baseline** (no legacy story/snapshot). **Modal is current-only** (legacy frame
  wraps the unmigrated CreateListForm). The next batch continues Tier-2: **Teaser**, **TopNavBar**,
  **AccountBoxList**, then the rest of Tier-2.
- **2026-07-14 — Batch 23 design-fix follow-ups (user review)**:
  - **SortableList list heading now bold.** `text-h-s` carries only size/line-height; legacy `.listHeading`
    used class `h4` which is `font-weight: bold`. Added `font-bold` (the `Heading` atom does this itself; the
    plain styled div did not). Verified at mobile against the legacy frame.
  - **Table mobile → legacy stacked card layout (was horizontal scroll).** Legacy rendered two subtrees
    (`.mobile` stacked + `.desktop` columns); V2 now mirrors that: below `md` a stacked **"label: value"**
    card per row (bold capitalised label, group hairline borders, actions centred), at `md`+ the semantic
    `<table>`. `md:hidden` / `hidden md:table` toggle. Mobile now pixel-matches legacy (verified 375px).
  - **Table desktop columns flow from the left (were spread full-width).** Auto table-layout distributed
    slack across all columns; now the **last text column** gets `w-full` (mirrors legacy `.lastTextColumn
    { flex: 1 }`) so text columns pack left at natural width and trailing action columns are pushed to the
    right edge. Verified both the text-only (`table-story-two`) and iconed (`table-story`) frames at 1280px.
  - **ArticleList full-width card is full-bleed on mobile.** The static-layout container applied
    `px-4 md:px-8` to every case; the single full-width card's image must reach the screen edges on mobile
    (legacy adds no mobile gutter — the card's own `p-4` insets the copy). Gated `px-4` on `total > 1`;
    desktop keeps `md:px-8` (legacy full-width desktop has a 2rem gutter). Verified 375px full-bleed + 1280px
    gutter.
  - **Overlay entrances animate a TRANSFORM, not opacity — avoids the axe color-contrast flake.** An opacity
    fade makes the dialog surface semi-transparent mid-entrance, so an axe scan (`afterEach`) sees the dark
    scrim bleed through and flags color-contrast **intermittently** (the failing overlay varied run-to-run:
    Modal, PopUp…). Even the `reducedMotion: 'reduce'` context (which should settle the first frame) left
    residual flake. Switching Modal's entrance to a `y`-translate keeps the surface fully opaque every frame
    → deterministic. Required restructuring to a transparent `pointer-events-none` flex-centre layer (so the
    transform doesn't fight a translate-based centre, and backdrop clicks still fall through). Full
    `vitest --project=storybook` **484/484 twice** after the change.
- **2026-07-14 — Batch 23 findings & harness changes**:
  - **Overlay backdrop must be a SIBLING of the dialog, never its parent.** Modal was first built with the
    dialog nested inside a semi-transparent `aria-hidden` backdrop (the natural flex-centering structure).
    That silently broke a11y two ways: (1) `aria-hidden` on an ancestor removed the whole dialog from the
    accessibility tree, so `getByRole('dialog')` and the close button vanished; (2) with the dialog nested
    in a 90%-opacity dark layer, axe stopped crediting the dialog's opaque `bg-surface-default` and computed
    the text as dark-on-dark (contrast 1.01 → hard-gate fail). Fix mirrors **DrawerSidebar**: backdrop and
    dialog are **siblings** in a fragment, the dialog is `fixed`-centered with a new **`z-modal` (1000)**
    token above `z-modal-backdrop` (999). Lesson for every future overlay (drawer/popup/cart/cookie): the
    scrim is a sibling, and it is not `aria-hidden` when it contains focusable UI.
  - **`message-popup` is a callout, not a dialog — classify by behaviour, not the checklist row.** The
    checklist files `message-popup` under *Overlay/dialog*, but the legacy component is a non-modal inline
    bubble (no trap, no backdrop, `position: relative|absolute`). Built it as *Status/feedback* + *Interactive
    control*: `role="status"` polite live region + a localisable close button — correct and axe-clean, where a
    forced focus-trap dialog would have been wrong. (Same "union/override by behaviour" latitude the checklist
    itself grants in §2.)
  - **Semantic-`<table>` rewrite is a `reviewOnly` divergence.** Legacy Table was a `<div>` column grid; the
    accessible rewrite (`<th scope>`, `aria-sort`, keyboard sort buttons, horizontal-scroll on mobile) is a
    faithful reproduction of the same scene that can't pixel-match the div layout → mapped `reviewOnly` (both
    frames paired in the gallery, gate skipped). Same class as the vector-vs-raster / font-rendering cases.
  - **A font-metric wrap flip can push an otherwise-faithful frame over the 2% gate on ONE viewport only.**
    SortableList desktop matched within gate, but mobile hit ~3% because at the ~171px column-1 width (inside
    ContentWrapper) the V2 heading font renders "E-HANDELSFRÅGOR" narrow enough to stay on one line while
    legacy wraps it to two — the height delta then cascades every row down. The `order={5}` size is
    byte-identical to legacy `heading-xs`, so this is font-face metrics, not a sizing bug. Because a
    desktop-only gate (`viewports:['desktop']`) would **orphan** the mobile frame (the review gallery honours
    `viewports`), the whole entry is `reviewOnly` so BOTH viewports stay paired — measured, not eyeballed.
- **2026-07-14 — Batch 22 findings & harness changes**:
  - **Shared-type "circular" pair built together (ProductSearch ↔ ProductSearchResultItem).** The queue
    flagged ProductSearch `needs: ProductSearchResultItem` and the item `needs: ProductSearch` — a
    **type-only** cycle: the item imports only the `ProductSearchResult` *model* from ProductSearch, while
    the runtime dependency is one-way (ProductSearch renders the item). Same resolution as Batch 21's
    MobileNavigation↔DesktopNavigation: the **owning module (ProductSearch) declares + exports** the
    `ProductSearchResult`/`ProductSearchVariant` model; the sibling does `import type`. No runtime cycle
    (type imports are erased), so `pnpm build` is clean. Both reclassified atom/molecule → **organism**.
  - **Both product-search baselines captured the CLOSED bar.** `product-search-story` and
    `product-search-story-loading` were both authored with `isOpen: false` + empty query, so the dropdown
    (and, for `-loading`, the spinner — which needs `isOpen && query`) never rendered. Both legacy PNGs
    are therefore the same closed search bar; the two `Visual`/`VisualLoading` stories reproduce it and
    map **gated** (both viewports pass — measured, not assumed).
  - **AlertMessage: legacy `error` white-on-pink fails AA, and severity was colour-only.** White text on
    the `#cd8aa2` error surface is ~2.6:1 (fails 1.4.3) — a faithful reproduction would trip the axe
    hard-gate — so V2 uses dark ink on `error` (and `warning`); only the dark-green `info` keeps white.
    Legacy also carried a dead `getAlertIcon` and conveyed severity by **background colour alone** (1.4.1);
    V2 renders a **distinct severity glyph** (info/triangle/circle) with a localised label in place of the
    legacy invisible spacer. `role` is type-driven: `error`→`alert` (assertive), else `status` (polite).
    Both changes are tiny fractions of the full-width bar → all 6 baselines map **gated** (measured).
  - **LinkListItem: one link, not two; `IconButton type=link` for the compact download.** Legacy rendered
    the title *and* a chevron as two duplicate links to the same URL, both `aria-label="Navigate to …"`.
    V2 exposes **one** link — the title heading (its text is the accessible name, 2.4.4, with a focus
    ring) — and the chevron is a decorative affordance (`aria-hidden`). Legacy's download used `IconLink`
    with `children={undefined}` (an unnamed, vertical-layout link that doesn't fit a tag row); V2 uses
    **`IconButton type="link"`** with a title-specific `aria-label` — compact and named. Title heading is
    sized to the legacy `heading-xs` via a `text-h-xs` className over `Heading order` (level stays
    context-driven). 5 frames map gated (both viewports).
  - **Icon-only download/expand controls that IconButton can't express → raw button.** IconButton forwards
    only `aria-label`/`aria-busy`, not `aria-expanded`/`aria-controls`, so ProductSearchResultItem's
    variant **disclosure toggle** is a raw `<button aria-expanded aria-controls>` with an `Icon` (same
    pattern the `Search` molecule uses for its icon buttons); the add (+) controls stay as `IconButton`.
- **2026-07-14 — Batch 22 design-fix follow-ups (user review)**:
  - **LinkListItem mobile invoice frame reworked (mobile-only).** The legacy `align="center"` group floated
    the invoice amounts centred while the title was left-aligned, and the chevron floated mid-block. Fixed
    with `lg:`-guarded classes so **desktop stays byte-identical (gated)**: the row now top-aligns its
    trailing controls on mobile (`items-start lg:items-center`) and the amounts left-align + tighten
    (`items-start gap-2 lg:items-center lg:gap-4`). Mobile diff stays under the 2% gate (sparse text).
  - **IconButton `noBorder` now actually removes the border (real bug fix).** `surfaceClasses.white` adds
    `md:border-border-on-x md:bg-action-x` (a fill + border from `md` up, legacy parity), but `noBorder`
    only cleared the *base* border — so every `noBorder` icon button still drew a **border ring on desktop**
    (and `isTransparent` only killed the fill). Changed `noBorder` → `border-transparent md:border-transparent`.
    Fixes the "borders around icons" report batch-wide; full `test:visual` stayed **259/41** (removing the
    stray ring moved V2 *closer* to legacy, no regressions).
  - **AlertMessage close button de-chipped + info X made visible.** The close relied on `surface='white'`,
    whose `md:bg-action-x` fill won over the intended chip colour on desktop → a **white circle with a white
    (invisible) X** on the `info` bar. Dropped the coloured chip entirely: the close is now `isTransparent
    noBorder` with the X inheriting the type `ink` (white on `info`/green, dark on `warning`/`error`) — a
    bare, contrast-safe glyph. All 6 alert baselines still gated-pass.
  - **ProductSearch/ProductSearchResultItem thumbnails use a real product photo.** Replaced the grey
    placeholder data-URI with a downscaled (214×320, 12 KB) beer-glass photo bundled from the legacy assets
    (`src/assets/product-images/beer-glass.jpg`, from `legacy/.../rich-text-images/ol_glas_pils.jpg`) —
    still deterministic/offline for the review gallery, but a realistic beverage thumbnail.
- **2026-07-13 — Batch 21 findings & harness changes**:
  - **Icon-only-on-mobile links must carry an explicit accessible name (FooterTopBar).** The bar's pills
    collapse to icon-only circles below `md`, hiding the label with `display:none` — which also drops it
    from the a11y tree, so the legacy link became **unnamed on mobile**. V2 sets `ariaLabel={label}` on
    every `LinkButton` unconditionally (name survives the hide) and only visually hides the text span when
    a type icon is present. Reused the existing `--spacing-footer-bar-{mobile,desktop}` tokens
    (`h-footer-bar-*`) rather than inlining the 4.25rem/6rem heights. Both viewports map (text + decorative
    icons, deterministic — lucide vs icomoon glyph is a few px, under the 2% gate).
  - **SocialMediaLink (atom→molecule) = a round `LinkButton` + decorative `Icon`.** Icon-only link → the
    required `label` is the accessible name (`aria-label`), the platform glyph is `aria-hidden`; blue glyph
    on the light `bg-icon-bg-blue` chip clears 1.4.11. Deterministic → all three legacy frames mapped
    (the ~40px circle is <0.2% of the canvas, so the icon-set glyph delta is trivially under gate).
  - **Hero = gallery-only; text-over-media passes axe via `<img>` overlap, not a scrim.** Every legacy
    `heros--*` frame is a full-bleed REMOTE image/video (non-deterministic; a local placeholder is a
    different picture), so no baseline is mapped — `Visual*` stories use local assets for the gallery only.
    The overlaid heading/preamble sit over the media with no opaque ancestor bg, but the covering `<img>`
    makes axe return *incomplete* (not a violation) for those text nodes, so the a11y hard-gate passes with
    the faithful white/decorative-orange text. Coupled the heading's level+size behind a `headingLevel`
    prop (default `1`); **dropped the legacy `fadeIn` entrance** as non-essential motion (2.3.3†).
  - **CartProduct (molecule→organism) = gallery-only; the legacy product image is a *broken* remote image.**
    The captured legacy frame shows the browser's broken-image placeholder (the CDN thumbnail 404'd), so
    the image region (~4% of the canvas) is non-deterministic and unreproducible (same class as
    ProductVariant/ProductVariantList) → no baseline. Rendered as an `<article>`; the name is an `<h5>`
    that becomes a real `<a>` when `productUrl` is set; the remove control is an `IconButton` named via
    `labels.remove` (legacy hard-coded "Remove product"); `loading` swaps in the `role="status"` Loader.
    Verified `--color-purple` (#9a576f) price text clears 4.5:1 on white/cream.
  - **DesktopNavigation (molecule→organism) = the batch's big a11y rewrite; gallery-only.** Legacy
    hover-driven Framer mega-menu → an accessible **disclosure-nav**: labelled `<nav>` landmark, plain
    top-level items are `<a href>`, category items are `<button aria-expanded aria-controls>` toggling one
    panel at a time; `Escape` closes + **returns focus to the trigger**, a `pointerdown` outside closes,
    and the active item carries `aria-current="page"` + bold (never colour-only). **Legacy active/hover
    orange (#f08a00 ≈ 2.9:1 on white, fails 4.5:1) → accessible blue text + a blue underline indicator**
    (same orange→blue precedent as Button/UiLink/Text). Framer entrance dropped. Gallery-only because the
    *only* legacy baseline is the **empty loading state** (`categories: []`) captured mid-shimmer — the
    real menu only appears on interaction, which the static capture never triggered.
  - **Type reuse across two organisms (MobileNavigation ↔ DesktopNavigation).** Both consume the same
    `NavItem`/`NavLink`/`NavCategory` model. DesktopNavigation **imports** them from MobileNavigation (the
    owning module) instead of redeclaring — and `src/index.ts` exports them **once** (via MobileNavigation)
    to avoid a duplicate-export collision. Convention: when two components share a type model, the earlier/
    owning module owns the public export; siblings import it. (Documented for future shared-model batches.)
  - **2026-07-14 remediation — `reviewOnly` baselines + full gallery-pairing audit (fixes a recurring
    miss).** A `Visual` story that faithfully reproduces a legacy scene but can't clear the 2% pixel gate
    was previously dropped to *gallery-only* — which meant the `visual:review` gallery showed it
    **current-only, with no Legacy pane to compare against**. Added a **`reviewOnly: true`** flag to
    `baseline-map.ts`: the pixel gate (`components.visual.spec.ts`) skips it, the gallery still pairs
    Legacy | Current | Compare + Δ (badged "review-only"). **Root cause for Hero specifically:** its
    `Visual*` stories used arbitrary `Teaser*` placeholders instead of the actual legacy hero images —
    the legacy stories composed LOCAL assets (`Promo_Hero_C3/L1.png`), now copied into
    `src/assets/hero-images/` and reproduced exactly, then mapped `reviewOnly` (image matches; brand-font
    /larger-h1 text diverges). **Swept all 162 `['visual']` stories vs 326 legacy snapshots**: added 11
    `reviewOnly` pairings where the V2 story already/now reproduces the legacy scene — Hero ×2,
    ArticleList ×3, ProductVariant, ProductVariantList, Logotype, Heading (delivery-form), CartProduct,
    DesktopNavigation (its `VisualLoading` reproduces the empty-shimmer baseline), CartProductList (now
    composes real CartProduct rows — unblocked this batch). `pnpm test:visual` stays green (239 passed,
    review-only skipped). Remaining current-only stories are legitimately unpairable: genuinely no legacy
    snapshot (Placeholder, SingleSelect, ArticleCard, TagsList, TagsDescription, FaqList), or the legacy
    frame is a *different scene* (closed overlay: DrawerSidebar/PopUp/CartSidebar/Tabs; blank/animation:
    DeliveryInfoBar/Video; Word-paste/remote: RichText/IntroBlock/Picture) or composes still-unmigrated
    children (Cart, CartDeliveryDetails, CartOrderDetails, OrderConfirmation(Page), LoginPage,
    ScrollableList, AgeVerificationForm) — each carries a NOTE in `baseline-map.ts`.
  - **2026-07-14 follow-up — re-paired the cart-family unblocked by CartProduct.** **OrderConfirmation**
    and **OrderConfirmationPage** now compose the full legacy scene (heading, success banner, three
    OrderConfirmationDetails blocks, real CartProduct rows, action buttons) — mapped `reviewOnly` (+2).
    OrderConfirmationPage reuses OrderConfirmation's exact `confirmationContent` fragment (exported with
    `excludeStories`), mirroring the legacy story import. **Gave CartProduct a `headingLevel` prop**
    (default 5): the composed scene put its `<h5>` name under the `<h3>` "Grattis", tripping axe
    `heading-order` (skips h4) — the fix makes the card's outline level context-driven (`4` here), which
    a card should be anyway. **CartSidebar stays current-only** — NOT a child gap (DrawerSidebar +
    CartProduct both landed); its legacy baseline was captured with the drawer CLOSED, so the frame is
    just the consumer's bare "Open sidebar" trigger — a different scene from the open V2 sidebar, with no
    open-state legacy frame to diff (same closed-overlay case as DrawerSidebar/PopUp). Note updated.
  - **2026-07-14 visual-fidelity pass — 6 gallery diffs corrected against the legacy baselines** (found
    by reviewing the paired `visual:review` frames; verified in the live Storybook via the preview tools):
    1. **Hero** — heading was the DS `h1` size (`text-h-xl`, ~3.6rem); legacy is ~2.5rem, so overrode to
       `text-2xl md:text-h-l-lg` (keeps `<h1>` semantics). Overlay read too light (measured luminance 64
       vs legacy 40) — `Picture`'s `pictureWithOpacity` scrim under-darkened here, so replaced it with an
       explicit scrim div in Hero (`bg-black/50` dark, `bg-white/30` light), confirmed 0.5 alpha over the
       image.
    2. **CartProduct** — image sat far-left in a wide column (the `<picture>` shrank as a flex item);
       added `justify-center` + `self-stretch` and a fixed row height (`min-h-46 md:min-h-42`) so the 64px
       image centres like legacy. Remove `IconButton` moved to top-right (dropped the `py-4` that pushed
       it down; content is now `flex-1` so the icon is pushed to the far edge like legacy's `iconLink`).
    3. **FooterTopBar** — desktop pills are now equal width: the `<ul>` is `md:inline-grid
       md:grid-flow-col md:auto-cols-fr` (equal columns sized to the widest label → 3×181px).
    4. **SocialMediaLink** — was a rounded square (`LinkButton round` sets the size but not the radius);
       added `rounded-full` → a true circle.
    5. **ArticleList full-width** — `ArticleCard` fullWidth used `aspect-16/9` (tall); a very wide aspect
       box is overridden by the tall intrinsic image on a flex item, so switched to a fixed banner height
       (`h-64 overflow-hidden`) + `object-cover`; added `px-4 md:px-8` to the static layout so it's
       contained (not full-bleed) like the legacy ContentWrapper.
    6. **ProductVariant** (mobile) — shrank the radio row (`min-h-8` → `min-h-5`, legacy tag line-height)
       and top-aligned the content row (`items-center` → `items-start`) so the meta sits directly under
       the radio, not floating mid-column.
    The two GATED components (FooterTopBar, SocialMediaLink) still pass the 2% pixel gate — the changes
    move them CLOSER to their legacy baselines; the rest are review-only.
  - **2026-07-14 corrections (measured, not eyeballed — after review feedback).** The first Hero pass was
    verified on desktop only and shipped three still-wrong mobile frames. Corrected by canvas-measuring
    the mean RGB of each frame vs its legacy baseline at BOTH viewports:
    - **Hero light overlay is responsive.** Legacy is white/30 on desktop (my scrim matched exactly:
      current [214,172,121] vs legacy [214,173,122]) but ~white/78 on mobile — my flat white/30 left the
      mobile frame pink. Fixed to `bg-white/75 md:bg-white/30` → mobile now [240,226,208] vs legacy
      [242,231,216].
    - **Hero dark overlay** ≈ 60–65% both viewports (mine was 50% → too light); set to `bg-black/65` →
      mobile [53,51,39] vs legacy [49,47,31], desktop [54,49,47] vs [51,44,42].
    - **Hero centre title** was left-aligned: the `Heading` is a flex element with its own
      `justify-start`, so the parent `text-center` never reached it. Fixed by passing `align={alignContent}`
      to `Heading` — verified centred at both viewports (mobile h1 centred in its column; desktop h1 box
      centred on page centre 640).
    - **CartProduct spacing**: my fallback image rendered ~31px (half of legacy's 63px) floating in a
      20% column. Now the image fills a snug `w-20 md:w-24` column (`classNamePicture`/`classNameImg`
      = `h-full w-full object-contain`), so the thumbnail hugs the left with a 16px gap to the content
      (was 129px).
- **2026-07-13 — Batch 20 findings & harness changes**:
  - **Measure before inheriting a sibling's verdict — OfferCardList IS pixel-mappable where ArticleList
    wasn't.** Both compose Carousel, and the queue reminder warned OfferCardList "likely can't be
    pixel-diffed if the frame exceeds the capture viewport." Measured the legacy PNGs first: OfferCardList
    is **1280×800 / 375×667** — fits the capture viewport exactly (ArticleList's were 1280×**805** /
    full-page). Offer cards are text-only (decorative icon + heading + subdued body, no remote imagery), so
    the frame is deterministic. Built it (thin ContentWrapper→Carousel wrapper, `offsetArrows`, lg
    `perPage` = `maxPerPage`), mapped both viewports, and the diff passed clean. Rule reinforced: a
    same-archetype sibling's "gallery-only" is a hypothesis, not a given — `file`-check the PNG dims first.
  - **DrawerSidebar = the canonical modal focus-trap (deferred since CookieBar/MobileNavigation).** Full
    dialog contract: `role="dialog"` + `aria-modal` (while the backdrop shows), named by a required
    `ariaLabel`, focus moves to the close button on open and is trapped (Tab cycles), `Escape`/backdrop/
    outside-click close (respecting `disableCloseOnOutsideClick`) and **return focus to whatever was
    focused before open** (captured via `document.activeElement`, since the trigger is the consumer's — a
    generalisation of MobileNavigation's `toggleRef` return). Body scroll-locked unless
    `enableBackgroundScroll`; Framer slide gated on `useReducedMotion`. Legacy `useOnClickOutside` +
    `no-scroll` class reimplemented inline.
  - **`role="dialog"` on `<aside>` fails axe `aria-allowed-role` — use a `<div role="dialog">`.** The
    legacy drawer was a `<motion.aside>`; keeping the element while adding the dialog role tripped
    `aria-allowed-role` ("ARIA role dialog is not allowed for given element") in the a11y hard-gate (only
    surfaced on the *open* stories — the closed-then-Escaped play story scanned clean because the panel had
    unmounted by `afterEach`). Switched the panel to `motion.div`. Documented in DEVELOPMENT.md.
  - **ProductVariantList = one `<fieldset>` radiogroup + one scroll-toggle (gallery-only).** The variants
    are a single native radio group (shared `name`) inside a `<fieldset>` named by a visually-hidden
    `<legend>` — arrow-key selection + group name for free; a non-modal dismissible region (close button +
    `Escape` + outside-`pointerdown`, no focus trap). Collapsed the legacy two-swapping-Framer scroll
    buttons into one toggle (down/up by scroll position). The scrollable `<ul>` needs no `tabindex` (its
    radios are focusable descendants → axe `scrollable-region-focusable` satisfied). **Gallery-only**:
    the legacy PNG is a full-page 1280×**1195** / 375×**1195** capture (taller than the viewport,
    gotcha-2) and its child ProductVariant frame is non-deterministic (remote thumbnails + `undefined`
    labels).
  - **AddToCartButton = morphing add→stepper; the empty-label legacy frame is an axe fail we can't
    reproduce (map anyway, under gate).** Reclassified atom→molecule (imports IconButton). At qty 0 it is
    one `<button>` whose visible `buttonLabel` IS its accessible name (dropped the legacy empty label +
    redundant `aria-label`); qty >0 becomes a labelled `role="group"` stepper (−/+ IconButtons + a named
    number field, replacing the legacy conflicting `<label>`+`aria-label` pair). Framer scale animations
    dropped (non-essential). The legacy baseline shows an **empty** blue pill (`buttonLabel` defaulted to
    `''` → an unnamed button we cannot reproduce without failing axe), so the V2 frame renders the real
    CTA — a white-on-blue text delta inside a ~180×32px pill (<0.6% of the canvas), which measured **under
    the 2% gate** on both viewports (gotcha-10 in action).
  - **Form = config-driven template over the already-baselined FormGroup + InputText; both frames mapped
    clean.** Fields become `FormGroup`+`InputText` (grid `lg:grid-cols-2`, `size:'full'` → `col-span-2`);
    submit gated on validity (required + `pattern` + `matchField` compare, e.g. confirm-password);
    `role="alert"` general error, `role="status"` success panel replacing the form. Simplifications:
    dropped `dangerouslySetInnerHTML` (→ `ReactNode`), the autofill-detection dance, the per-field
    `focusOnRender` autofocus (no focus theft), and `noValidate` suppresses native bubbles in favour of
    the inline `aria-describedby` errors. **Both legacy frames (standard-form, compare-two-fields) mapped
    both viewports and passed** — the composed FormGroup/InputText carry their own already-verified
    styling, so the form-level diff stayed under gate (no need to pre-judge it unmappable).
  - **2026-07-13 design-diff follow-ups (all re-verified: build green, 401/401 storybook, scoped visual
    6/6).** (1) **Carousel `arrowsWithDots`** — new opt-in prop rendering the prev/next arrows in-flow on
    the pagination row (vertically centred with the dots, at the edges; disabled arrow keeps its space via
    `opacity-0`), matching the legacy bottom-arrow layout; OfferCardList switched from `offsetArrows` →
    `arrowsWithDots`. (2) **Dot spacing** tightened `gap-1` → `gap-0` — the tightest compliant pitch, since
    each dot is a 24px target and WCAG 2.5.8 forbids <24px centre-to-centre; legacy's ~15px dot density is
    a 2.5.8 violation V2 intentionally doesn't copy (matched dot *size*, not sub-target *density*). (3)
    **FormGroup `reserveErrorSpace`** — new opt-in prop keeping a fixed `min-h-6` error slot (legacy parity)
    so a field's error doesn't shift the layout / misalign the grid row; Form enables it per field. All
    three documented in DEVELOPMENT.md.
  `[mol]`, **ArticleList** `[org]`, **BrandDetails** `[org]`, **Breadcrumbs** `[org]`,
  **MobileNavigation** `[org]` — the next five unblocked queue entries top-to-bottom, skipping the
  ⛔ BLOCKED story-only Tier-0 templates; all `needs:` — Button, ArticleCard/Carousel, TagsList, UiLink
  — already migrated). `pnpm build` green, full `vitest --project=storybook` **380/380** (interaction +
  a11y), `pnpm build-storybook` green, full `pnpm test:visual` **223 passed / 13 skipped** (was 214/12 —
  **+9 baselines** [Breadcrumbs ×6, BrandDetails desktop ×1, MobileNavigation ×2], **+1 skip**
  [BrandDetails mobile]). **Tabs + ArticleList are gallery-only** (see findings). Carousel's long-deferred
  baseline is now **RESOLVED** (reproduced by ArticleList but not pixel-mappable — measured). The next
  batch continues Tier-1 with **OfferCardList**, then the Tier-2 organisms (ProductVariantList, Form,
  AddToCartButton, DrawerSidebar, AccountBoxList, DeliveryForm, FaqGroup, …).
- **2026-07-09 — Batch 19 findings & harness changes**:
  - **Tabs = compose the migrated Button as `role="tab"`, drop the `isOpen` self-mount anti-pattern.**
    Built the WCAG/APG tabs pattern (`tablist`/`tab`/`tabpanel`, `aria-selected`, roving `tabindex` +
    Arrow/Home/End). The active tab must stay focusable (legacy `disabled`-ed it — invalid for the
    pattern), so selection is styled via `surface` (`primary` selected / `secondary` not) not `disabled`.
    Panels render always with `hidden` on the inactive ones so every `aria-controls` target resolves and
    collapsed content leaves the tree. Dropped `isOpen` (a component gating its own mount is redundant —
    the consumer conditionally renders). **Gallery-only**: legacy `tabs-story` captures the pre-open
    state (bare toggle, no Tabs) and `mina-favoriter` is a deep composite (Tabs → InfoSummaryBox →
    OrderItem×2 + Button) that stacks every child's sub-gate divergence — not a meaningful oracle.
  - **One story can now map to MANY legacy baselines (harness generalization).** The visual spec keyed
    tests by `storyId` alone, so a story mapped to two baselines collided. Titles now embed `storyId` +
    `legacyBaseline`, so `--grep <component>` still works AND ArticleList's Default frame can be diffed
    against both `articlelist--default` and `carousel--carousel-story`. Documented in DEVELOPMENT.md.
  - **ArticleList reproduces Carousel's frame faithfully but it's still not pixel-mappable — MEASURE,
    don't pre-judge (and don't force a map either).** The queue reminder said "map carousel-story here."
    I built it, mapped all 4 frames, and RAN the diff: default/carousel desktop legacy PNG is 1280×**805**
    vs the fixed 800px viewport (dimension mismatch → auto-fail); mobile PNGs are full-page captures
    (746–1950px > viewport); full-width diffs 70% because V2 `ArticleCard` fullWidth uses `aspect-16/9`
    while legacy used a ~4.8:1 banner (a locked ArticleCard-level divergence, out of scope). So
    **ArticleList is gallery-only**, and Carousel's deferral is resolved with evidence, not left dangling.
    Rule reinforced: a from-scratch organism taller than the capture viewport can't be diffed by the
    viewport-clipping harness even when every child is migrated.
  - **Breadcrumbs = the correct `nav`/`ol` pattern; the last crumb is the current page.** Legacy rendered
    a `FlexContainer` div of orange (fails-AA) links with a trailing chevron after the current page and a
    redundant `aria-label="Go to X"`. V2: `<nav aria-label>` + `<ol>`, links → accessible blue `UiLink`,
    the last crumb is `aria-current="page"` plain text (no link, no trailing chevron), chevrons decorative.
    Dropped the dead `image`/`title`/`textWidth`/`location` props (all commented-out in legacy). All 3
    frames map both viewports (tiny top-strip divergences under the gate).
  - **BrandDetails desktop-only — the recurring vertical-rhythm amplification.** Brand image matches
    exactly; the h3 name + description carry the Edmondsans rhythm drift (wraps identically, sits a few px
    off) → ~5% on the 375px mobile canvas, under gate on desktop. Same call as GroupWrapper/AccountBox/etc.
    Also typed `richText` as `ReactNode` (legacy passed an un-rendered FC — a bug) and dropped the CDN-only
    `?w=300` suffix (a library can't assume a consumer's image CDN).
  - **MobileNavigation = native overlay drawer (Framer/`useOnClickOutside` reimplemented).** Hamburger
    toggle (`aria-expanded`/`-controls`) opens a mounted `<nav>` panel over a click-to-dismiss backdrop;
    focus moves to the close button and is trapped, `Escape`/backdrop close and return focus to the
    toggle, body scroll-locks. Categories are nested `aria-expanded` disclosures whose collapsed sub-list
    is `hidden` (leaves the tree + tab order). Entrance simplified to a mount (non-essential; only the
    closed hamburger is pixel-tested → maps both viewports). The canonical full modal trap still lands
    with Modal/DrawerSidebar.
- **Current Micro-Batch**: Batch 18 — Tier-1 molecule leaves (complete; **CookieBar**, **MultiSelect**,
  **OrderItem**, **Search**, **SelectList** — the next five unblocked leaves top-to-bottom, all `needs:
  Button`/`InputText` already migrated; **UiDatePicker left untouched — owned by another session**).
  `pnpm build` green, scoped `vitest --project=storybook` **23/23** (interaction + a11y), `pnpm
  build-storybook` green, full `pnpm test:visual` **214 passed / 12 skipped** (was 193/11 — +21 new
  baselines, +1 documented skip). 11 of 12 new Visual frames map a legacy baseline (only OrderItem
  `mina-ordrar-2` mobile is desktop-only). The next batch continues Tier-1: **Tabs**, then the Tier-2
  organisms unlocked so far (AccountBoxList, DeliveryForm, Footer, FaqGroup, ArticleList, …).
- **2026-07-09 — Batch 18 findings & harness changes**:
  - **Disclosure-dropdown pattern (reused 3×: MultiSelect, SelectList, MultiSelect's cousins).** A
    trigger `<button aria-haspopup aria-expanded aria-controls>` + a **native** checkbox/radio group in
    the popup gives role/state/keyboard (incl. radio arrow-key nav) for free — no custom listbox
    `aria-activedescendant` machinery. The wrapper only owns Escape-to-close-with-focus-return and an
    outside-click `pointerdown` listener (the legacy `useOnClickOutside`/`useCloseOnEscape` hooks were
    unmigrated → reimplemented inline with `useEffect`, gated on `open`). Documented in DEVELOPMENT.md.
  - **Cookie bar is a landmark, not a modal.** The WCAG checklist files `cookie-bar` under
    Overlay/dialog, but a *passive, persistent* consent notice must NOT trap focus or steal it on mount
    (that blocks the page the user came for). Implemented as a non-modal named `region` with
    Escape-to-dismiss — the same "apply judgement, don't copy the archetype blindly" call as CampaignBox
    (trigger outside the ExpandableWrapper). Blocking modals (Modal, DrawerSidebar) will get the full
    trap when they land.
  - **Consolidating legacy redundant/buggy links (OrderItem).** Legacy link-mode rendered the order
    number AND the chevron as two links to the same URL, both with `aria-label="Go to order ${n}"` that
    read "Go to order undefined" when no number was supplied. V2 ships ONE chevron link with a
    `labels.goToOrder(n)` fallback name, keeps the download link as a sibling (no nested anchors), and
    turns inline-mode's `onClick`'d `<h4>` into a real `<button>`. Dead `title`/`onDownload` props
    dropped.
  - **Dark-tag amplification of the Heading rhythm drift (new baseline-mapping nuance).** OrderItem
    `mina-ordrar-2` and `-1` are structurally identical, but `-2`'s high-contrast **blue** tag makes the
    (documented, sub-2%) Edmondsans vertical-rhythm offset read as ~3% on the 375px canvas, while `-1`'s
    near-white **yellow** tag hides the same offset. So a dark element can push an otherwise-passing
    frame over the gate on mobile only → mapped **desktop-only** (like GroupWrapper/Heading-delivery).
    A high-contrast block in a frame is a signal to check the mobile diff. Documented in DEVELOPMENT.md.
- **2026-07-08 — UiDatePicker built (post-Batch-17 follow-up, directed).** The Batch-17 deferral was
  resolved by an explicit library decision from the user: **`react-day-picker` v10** (React-19-ready,
  accessible grid/ARIA + keyboard built in, headless). Added as a regular dependency and **externalized
  in the Vite lib build** (like `lucide-react`), base CSS *not* imported — styled with Tailwind tokens
  via `classNames`/`modifiersClassNames`. Full-width Button trigger (the two frozen baselines, closed
  popover) → `role="dialog"` with `<DayPicker mode="single">` restricted to delivery days; the library
  owns in-grid keyboard/ARIA, the wrapper owns focus-in / Escape+outside-click close + focus return.
  While wiring the trigger, **generalised `Button` to forward all standard `<button>` attributes**
  (rest-spread — supersedes the ad-hoc `aria-describedby` prop; lets ARIA-injecting wrappers compose).
  `pnpm build` green (bundle +~4.5KB → react-day-picker externalized, not bundled), full
  `vitest --project=storybook` **334/334**, full `pnpm test:visual` **193 passed / 11 skipped**. Both
  closed-trigger baselines mapped both viewports; open calendar covered by play tests. The next batch:
  the Tier-2 organisms unlocked so far (AccountBoxList, DeliveryForm, Footer, FaqGroup, ArticleList, …).
- **Current Micro-Batch**: Batch 17 — Tier-1 leaves (complete; **CampaignMessage**, **FaqList** `[org]`,
  **AdminSearch**, **AgeVerificationForm**, **ButtonWithTooltip** — 4 molecules + 1 organism, three
  reclassified `atoms/*`→molecules). **UiDatePicker was DEFERRED** (see below), so the next genuine
  leaves were pulled forward. `pnpm build` green, `pnpm build-storybook` green, full
  `vitest --project=storybook` **328/328** (interaction + a11y), full `pnpm test:visual`
  **189 passed / 11 skipped**. **4 new baselines mapped**: AdminSearch (closed bar) + ButtonWithTooltip
  (both viewports), CampaignMessage (**desktop-only** — mobile wrap flip). **FaqList + AgeVerificationForm
  are baseline-less** (no legacy story / renders inside an unmigrated Modal) — gallery-only. Extended
  two shared components: **Button** now forwards `aria-describedby` (tooltip association — later
  generalised to all attrs, see the follow-up note above); **InputText** gained a `'search'` type. New
  `--color-highlight` token (FaqList `<mark>`). UiDatePicker (deferred at batch close) was then built as
  a directed follow-up (see the note above).
- **2026-07-08 — Batch 17 findings & harness changes**:
  - **Deferring a component is a legitimate, documented call — not silent skipping.** UiDatePicker is
    the next queue entry but is an outlier: a faithful port means rewriting `react-datepicker` (a heavy
    dep V2 doesn't carry) as a from-scratch WCAG calendar grid, *and* it needs a UX-direction decision
    (calendar grid vs. restricted-date listbox). It only unblocks 1. Rushing it into a shared batch slot
    would under-serve its a11y. Flagged **⏸️ DEFERRED** in the queue (deps met, not BLOCKED) and pulled
    the next genuine leaf forward. Rule: when the top entry is disproportionately large or needs a
    product decision, defer-with-documentation and continue — don't stall the batch or rush the build.
  - **Reuse the from-scratch primitive; drop the legacy 3rd-party dep.** ButtonWithTooltip dropped
    `@radix-ui/react-tooltip` for the existing `ComponentWithTooltip` atom (same as Carousel dropped
    Splide, UiDatePicker will drop react-datepicker). Composing it surfaced that the V2 `Button` didn't
    forward `aria-describedby` (its interface is closed) — so the tooltip couldn't associate. Fixed by
    adding the one prop to Button. Lesson: composing a strict-interface component into a
    prop-injecting wrapper (cloneElement) needs the target to forward the injected ARIA attr.
  - **A legacy component whose only story renders inside an unmigrated parent has no usable baseline.**
    AgeVerificationForm's legacy story mounts it inside an (unmigrated) Modal, so the snapshot is the
    modal, not the form → gallery-only Visual, behaviour covered by play tests. (Same spirit as the
    cart-family deferrals: don't map a frame dominated by an unmigrated ancestor/child.)
- **Current Micro-Batch**: Batch 16 — Tier-1 leaves (complete; **FormGroup**, **AccountBox**,
  **CampaignBox**, **IconLink**, **Newsletter** — all `[mol]`, reclassifying the two `atoms/*` legacy
  entries that import components into molecules). `pnpm build` green, `pnpm build-storybook` green,
  full `vitest --project=storybook` **312/312** (interaction + a11y), full `pnpm test:visual`
  **184 passed / 10 skipped**. **13 new baselines mapped**: FormGroup ×8 (InputText/Textarea × 4
  states, both viewports), CampaignBox ×2 + IconLink ×2 + Newsletter ×1 (both viewports), AccountBox
  ×2 (**desktop-only** — mobile line-spacing drift >2%). Extended three shared components with reusable
  props: InlineError + ExpandableWrapper gained an `id` (for `aria-describedby`/`aria-controls`),
  InputText gained `onKeyDown`/`onPaste` (Batch 15). The next batch continues Tier-1:
  **UiDatePicker**, then the Tier-2 organisms unlocked by this batch (AccountBoxList, DeliveryForm,
  Footer, ArticleList, …).
- **2026-07-08 — Batch 16 findings & harness changes**:
  - **A disclosure trigger must live OUTSIDE the collapsing region when that region goes `inert`.**
    V2 `ExpandableWrapper` sets `inert`/`aria-hidden` on its content while collapsed (so no hidden
    focusable descendants). Legacy `CampaignBox` nested its expand toggle *inside* the wrapper — under
    the V2 wrapper that toggle would become inert while collapsed, i.e. un-clickable, trapping the
    component shut. Rebuilt to the correct shape: an always-visible header (title + toggle + action)
    above the `ExpandableWrapper` panel, with the toggle a real `<button aria-expanded aria-controls>`
    pointing at the panel's `id`. Rule: header/trigger outside the collapsible; only the revealed
    content inside. Documented in DEVELOPMENT.md.
  - **Wire field messages to the control; never signal by colour/border alone (recurring 1.4.1/3.3.1).**
    Legacy `FormGroup` rendered helper/error as loose siblings and `Newsletter` showed invalid email as
    a red border only. V2 `FormGroup` `cloneElement`-injects `aria-describedby` (→ helper + error ids)
    and `aria-invalid` onto its child control; `Newsletter` renders a `role="alert"` message wired the
    same way. The messages carry `id`s, so InlineError gained an `id` prop.
  - **Give migrated form controls a real accessible name (recurring).** Both `Newsletter`'s email field
    and (Batch 15) `ProductQuantityInput`'s number field shipped nameless in legacy (placeholder-only,
    3.3.2). V2 names them via a localisable `labels.*` prop. Placeholders are never labels.
- **Current Micro-Batch**: Batch 15 — first Tier-1 leaves (complete; **IconButton**, **LinkButton**,
  **ProductVariant**, **ProductQuantityInput**, **AlertBox** — all `[mol]`, reclassifying the four
  `atoms/*` legacy entries that import other components into molecules). `pnpm build` green,
  `pnpm build-storybook` green, full `vitest --project=storybook` **287/287** (interaction + a11y),
  full `pnpm test:visual` **156 passed / 8 skipped**. **7 new baselines mapped**: IconButton
  `small-button` + `over-100-products` (both viewports), LinkButton (both), ProductQuantityInput
  (both), AlertBox `warning` (both) + `error`/`information` (**desktop-only** — mobile full-width
  button amplifies the Button font divergence >2%). **ProductVariant is baseline-less** (legacy frame
  non-deterministic: remote CDN image + `undefined` labels). **Tier-0 is now exhausted** — before
  building, confirmed all four remaining `templates/*-page` "leaves" (ProductCategoryListingPage,
  ProductPage, ShoppingListPage, StartPageTemplate) are **story-only (no `.tsx`)** → flagged
  ⛔ BLOCKED, same false-leaf flaw as BrandPage/CampaignPage. The next batch continues Tier-1:
  **FormGroup**, **AccountBox**, **CampaignBox**, **IconLink**, **Newsletter**.
- **2026-07-08 — Batch 15 findings & harness changes**:
  - **A `<button>` must never wrap another interactive control (axe `nested-interactive`, hard gate).**
    Legacy ProductVariant nested a `<RadioButton>` inside a clickable `<button>` — two controls, invalid
    HTML. V2 rebuilds it as the **selectable-card pattern**: a `<label>` wraps the visual content *and*
    a single native radio, so the whole card is the radio's click target with exactly one control. Same
    class of fix as SortableListItem's `<button>`-wrapping-a-heading. Documented in DEVELOPMENT.md.
  - **Icon-only / previously-unnamed controls MUST be given an accessible name on migration.** Legacy
    IconButton's *link* variant set no `aria-label`, and ProductQuantityInput's number field had no
    label at all — both would fail axe. V2 makes the name a **required** prop (IconButton `label`) or a
    localisable one (`labels.quantity`). Never carry a legacy control's missing name forward.
  - **Extend a shared atom via standard props when a molecule needs a real handler (recurring).** The
    quantity field needed to block illegal keys/paste; legacy used a `{ other: {...} }` grab-bag. V2
    added typed `onKeyDown`/`onPaste` passthroughs to **InputText** (general, reusable) rather than an
    `any`-typed escape hatch — same methodology as earlier atom extensions.
  - **Legacy block-level "links" (`display:flex` on a `<div>`/`<a>`) render full-width; keep the width
    but fix the element.** LinkButton's baseline is a full-width bar because legacy's `LinkComponent`
    was a block `<div>`. V2 renders a semantic `<a>` but stays full-width by default to match the
    design intent; IconButton's link baselines are the *opposite* lesson — its legacy block-`<div>`
    link is a shape V2's correct inline `<a>` can't reproduce, so those frames go unmapped.
- **Current Micro-Batch**: Batch 14 — cart-family organisms + page shells (complete; **CartProductList**,
  **CartSidebar**, **LoginPage**, **OrderConfirmation**, **OrderConfirmationPage** — all `[org]`,
  reclassifying the two `templates/*-page` entries with real `.tsx` files into organisms). `pnpm build`
  green, `pnpm build-storybook` green, scoped `vitest --project=storybook` **11/11** (interaction + a11y),
  full `pnpm test:visual` **144 passed / 6 skipped** (unchanged — **no new baselines mapped this batch**).
  **All 5 are baseline-deferred**: every legacy frame's bulk is the not-yet-migrated **CartProduct**
  molecule (or DrawerSidebar / LoginForm / AccountBoxList) — gallery-only Visuals with placeholder
  content, re-map when those children land. New `--container-order-confirmation` (58.125rem) token.
  **Applied the Batch-13 story-only-template rule**: verified each queue entry against its legacy source
  first, then **flagged 5 more false-leaf pages `⛔ BLOCKED`** (ChooseUserPage, ContactPage, ContentPage,
  InspirationPage, MySpendrupsPage — all story-only, no `.tsx`). The next batch continues Tier-0 with the
  next genuine `.tsx` leaves: **ProductCategoryListingPage**, **ProductPage**, **ShoppingListPage**,
  **StartPageTemplate** (verify each has a `.tsx` first) — then Tier-1 opens with **IconButton**.
- **2026-07-08 — Batch 14 findings & harness changes**:
  - **A product-row name is a label, not a document heading (heading-order gate catch).** First cut
    rendered cart-product-row names as `Heading order={5}` inside stories that already had an `order={3}`
    section heading — axe's `heading-order` (a hard-gate rule) failed on the h3→h5 jump. A price/name row
    in a summary list isn't a section of the document outline, so it became bold `Text`, not a heading.
    Rule: only use `Heading` for real outline nodes; don't reach for it just to get bold/large text —
    that fabricates an invalid outline the a11y gate rejects.
  - **Restore dead-CSS *intent* when it's the accessible choice.** Legacy `CartProductList` declared
    `.list`/`.listItem` CSS (a `<ul>` of bordered rows) but the component rendered a plain `<div>` of
    children — the list CSS never applied. V2 renders the intended `<ul role="list">`/`<li>` (1.3.1),
    which is both the legacy design intent *and* the correct semantics for a product list. Dead code can
    encode intent worth reviving — but only when it aligns with the a11y target (same call as UnorderedList).
  - **Page-shell templates with a real `.tsx` reclassify to organisms and own no landmark.** LoginPage /
    OrderConfirmationPage are full-page layout shells (centred card on `bg-blue-500`). They stay
    presentational `<div>`s — the consumer's app shell owns `<main>`, so the component adds no landmark
    (nesting `<main>` would fail axe `landmark-unique`). Landmarks/headings come from the card inside.
- **Current Micro-Batch**: Batch 13 — last molecule leaves + first cart-family organisms (complete;
  **UnorderedList**, **UserInfoSummary** `[mol]` + **Cart**, **CartDeliveryDetails**, **CartOrderDetails**
  `[org]`). `pnpm build` green, `pnpm build-storybook` green, scoped `vitest --project=storybook`
  **14/14** (interaction + a11y), full `pnpm test:visual` **144 passed / 6 documented skips**. **3 new
  baselines mapped**: UnorderedList `-story` **desktop-only** (7 stacked Headings amplify the known
  vertical-rhythm drift to ~4% on mobile — GroupWrapper pattern) + `-story-loading` both viewports, and
  UserInfoSummary both viewports (no divergence). **Cart / CartDeliveryDetails / CartOrderDetails are
  baseline-less** (deferred — their legacy frames are mostly the unmigrated DeliveryForm /
  CartProductList / CartProduct; gallery-only Visuals, re-map when those land). **⛔ BrandPage +
  CampaignPage were SKIPPED, not built** — they are story-only "GUIDELINE" templates (no `.tsx`), so
  the dep graph wrongly marked them leaves; their real deps (Header/Footer/Hero/BrandDetails/HeroCarousel)
  are unmigrated. Flagged BLOCKED in the queue. The next batch continues Tier-0: **CartProductList**,
  **CartSidebar**, **LoginPage**, **OrderConfirmation**, **OrderConfirmationPage** (all genuine
  component leaves with `.tsx` files + 0 internal deps).
- **2026-07-08 — Batch 13 findings & harness changes**:
  - **Dependency graph is blind to story-only "GUIDELINE" templates (queue-ordering flaw, recurring).**
    Several legacy `templates/*-page` entries ship **no `.tsx`** — they are pure `*.stories.tsx` that
    compose organisms as documentation of "how to lay out a page". `deps.cjs` builds the tier graph from
    `.tsx` import edges, so a component with no `.tsx` has zero edges and is mis-tiered as a **leaf**,
    even though its stories import wholly-unmigrated organisms. BrandPage/CampaignPage tripped this. Rule
    going forward: **before building a queued `[org]`/template, confirm it has a `.tsx`**; if it's
    story-only, its true deps live in the stories file — treat those as the gate and defer until they're
    migrated. The other story-only pages downstream (ContactPage, ContentPage, ChooseUserPage,
    InspirationPage, MySpendrupsPage, and the rest) will hit the same wall. Documented in DEVELOPMENT.md.
  - **Loading overlay → `inert` content + `aria-busy` (new a11y standard for busy containers).**
    CartDeliveryDetails' legacy `loading` scrim only *dimmed* the panel; the underlying controls stayed
    keyboard-focusable *behind* the overlay (a focus trap in reverse). V2 keeps the decorative
    `aria-hidden` scrim but adds `aria-busy` on the region (4.1.3 announces the update) **and `inert` on
    the content wrapper** so the dimmed controls are genuinely non-operable — React 19 renders `inert`
    natively as a boolean prop. This is the correct pattern for any "dim + block while busy" container.
  - **Uppercase display text belongs in CSS, not `String.toUpperCase()`.** UserInfoSummary's legacy
    `userName.toUpperCase()` bakes all-caps into the DOM, which some screen readers spell out letter by
    letter. V2 renders the original string and applies the `uppercase` utility — visually identical (the
    baseline still matches both viewports), but AT reads the name naturally. Same class of fix as
    "colour is never the sole cue".
- **Current Micro-Batch**: Batch 12 — Tier-0 molecule leaves (complete; **PurchaseList**, **RichText**,
  **ScrollableList**, **SortableListItem**, **TagsDescription** — the top-5 unchecked queue entries).
  `pnpm build` green, `pnpm build-storybook` green, full `pnpm exec vitest --project=storybook` **230/230**
  (interaction + a11y), full `pnpm test:visual` **139 passed / 5 documented desktop-only skips**. **3 new
  baselines mapped, both viewports**: PurchaseList ×1 (orange "updated" badge white→dark text, under the
  gate) and SortableListItem ×2 (overlay-button rewrite is visually identical). **TagsDescription,
  RichText, ScrollableList are baseline-less** (documented — no snapshot / unmigrated children / Word-paste
  HTML). One new `@utility sortable-item-cols`. The next batch continues Tier-0: **UnorderedList**,
  **UserInfoSummary**, then the first template/organism leaves (**BrandPage**, **CampaignPage**, **Cart**).
- **2026-07-07 — Batch 12 findings & harness changes**:
  - **Clickable row that contains a heading → stretched overlay button (not `<button>`-wrapping-heading).**
    SortableListItem's legacy row wrapped a `Heading` inside a `<button>` — invalid HTML (a `<button>`'s
    content model is phrasing content, so it may not contain a heading) and AT mishandles heading semantics
    inside a control. V2 renders the content in a `<div>` (heading stays valid) and overlays a stretched
    `<button aria-label={name}>` (`absolute inset-0`, focus-visible ring) as the row's single click target —
    the same overlay pattern ArticleCard uses. This **restored the previously-dead `name` prop** as the
    button's accessible name (the legacy `id`/`name` were declared but never used). Visually identical
    (transparent button), so both `e-handel`/`leverans` baselines map both viewports. New
    `@utility sortable-item-cols` ports the legacy `grid-template-columns: 50% auto auto` (+ a `5%` chevron
    column at lg) — a 50%/auto/5% mix that Tailwind's fraction grid utilities can't express. Chevron is
    CSS-gated `hidden lg:flex` (no JS/`isMobile` branch, no hydration divergence). Documented in DEVELOPMENT.md.
  - **PurchaseList — duplicate nav links deduped, checkbox named, orange badge fixed, dead code dropped.**
    Each row had two same-destination links (name + chevron); V2 keeps the name link as the keyboard/AT path
    (accessible name = the visible name) and makes the chevron a pointer-only duplicate (`aria-hidden` +
    `tabIndex={-1}`), the ArticleCard pattern. The selection checkbox is now named via `aria-labelledby` →
    the row name (legacy left it unlabelled — only a form `name`). The legacy `updated` badge was white on
    `--cta-tertiary-default` (#f08a00, ~2.3:1, **fails AA**); V2 keeps the orange fill with **dark text**
    (1.4.3) — a tiny date pill, under the 2% gate, so it's mapped (same accessible-divergence class as
    IconWithTooltip's badge). Dead `loading` prop dropped (declared, never used); `linkComponent: any` →
    shared `LinkComponentType`/`DefaultLink`.
  - **RichText (reclassified organism→molecule) — baseline-less prose renderer.** `dangerouslySetInnerHTML`
    is kept (inherent to a CMS renderer) but typed `string` (was `any`). The bespoke legacy widths
    (37.5rem/73rem/70%) collapse to the canonical `MaxWidth` reading measure (`text`, 52rem); prose styling
    is descendant utilities (`[&_p]`/`[&_h2]`/`[&_li]`…), links upgraded to accessible blue+underline, and
    the IcoMoon `li:before` bullet (font absent in V2) replaced by real `list-disc`. **No baseline** (like
    IntroBlock): the legacy `rich-text-story` frames are Word-paste HTML dependent on UA margins, an IcoMoon
    bullet font, and 404-ing image paths — all reset/absent under V2 preflight. Markup a11y (heading order,
    `alt`, link purpose) is the consumer's responsibility (documented); **stories model clean, valid HTML**
    because the legacy dummy content's empty `<h2></h2>`/`<strong></strong>` would fail the axe hard gate.
  - **ScrollableList — dead fade dropped, random keys fixed, scroll region made keyboard-operable.** The
    legacy `hasFade` gated an **entirely commented-out** mask (dead CSS) via a scroll-state machine that
    rendered nothing — dropped (dead-code elimination). `key={Math.random()}` replaced with
    `Children.toArray` stable keys. Height now caps via the measured first-item height × `visibleItemsNumber`
    as `maxHeight` (shows ≤N; shorter lists don't stretch). The scroll region is now keyboard-operable and
    named — `role="list"` + `tabIndex={0}` + `aria-label` + focus-visible ring (2.1.1, axe
    `scrollable-region-focusable`; the Carousel pattern) — which the legacy row lacked. **No baseline**
    (every legacy `scrollable-list-*` frame composes unmigrated CartProduct/LinkListItem children).
  - **TagsDescription — type-only Tag dependency.** Imports just the `TagColor` *type* from the Tag atom
    (no runtime coupling) and renders a `<ul role="list">` of decorative colour swatches (`aria-hidden`) +
    meaning text, so colour is never the sole cue (1.4.1). No legacy snapshot → gallery-only `['visual']`.
- **Current Micro-Batch**: Batch 11 — Tier-0 molecule leaves (complete; **IntroBlock**, **MessageBanner**,
  **OrderConfirmationDetails**, **Pagination**, **PopUp** — the top-5 unchecked queue entries). `pnpm build`
  green, `pnpm build-storybook` green, full `pnpm exec vitest --project=storybook` **215/215** (interaction +
  a11y, stable over 2 reruns — one earlier failure was port contention from concurrent servers), full
  `pnpm test:visual` **135 passed / 5 documented desktop-only skips**. **6 new baselines mapped both
  viewports** (MessageBanner ×2, OrderConfirmationDetails ×3, Pagination ×1). **IntroBlock and PopUp are
  intentionally unmapped** (see findings). Four tokens added (`--text-intro-title(-lg)`,
  `--color-surface-banner`, `--color-surface-cream`). The next batch continues Tier-0: **PurchaseList**,
  **RichText**, **ScrollableList**, **SortableListItem**, **TagsDescription**.
- **2026-07-07 — Systemic base line-height fix (library-wide vertical rhythm)**: a second visual-review
  pass flagged that icon/text rows (MessageBanner) and text blocks across *many* components sat with
  slightly-too-tall spacing. Root cause was global, not per-component: **Tailwind v4 preflight forces
  `html { line-height: 1.5 }`, but legacy `html`/`body` set no line-height** (bare text rendered at the
  font's `normal`, ~1.2). So every un-tokened text element (spans, strings, labels) had inflated line-boxes
  vs the frozen baselines — and in icon+text flex rows the oversized text line-box pushed the glyph out of
  alignment (MessageBanner mobile was off by 4px). **Fixed once for the whole library**: the base layer now
  sets `html { line-height: normal }` (tokened `text-*` line-heights still win, so this only realigns bare
  text). Also set MessageBanner to `items-center` on all viewports (legacy only centered at `md`). Verified:
  full `pnpm test:visual` **133 passed / 5 skipped (no regressions)**, `vitest --project=storybook` 215/215;
  MessageBanner icon/text offset now 0 on both viewports. Documented in docs/DEVELOPMENT.md.
- **2026-07-07 — Batch 10/11 visual-review pass (sub-gate diffs fixed)**: eyeballing `pnpm visual:review`
  surfaced real divergences that passed the 2% gate but looked wrong. Fixed:
  - **OfferCard heading** rendered at `text-body` (1rem) — I'd assumed a UA-default `<h4>`, but legacy has
    a **global heading stylesheet** (`h4`/`.headingS` = `--text-h-s` 1.375rem bold). Any raw heading in
    legacy inherits it. Fixed to `text-h-s`. (Lesson: legacy raw headings are NOT UA-sized — check
    `styles/typography/spendrups.css`.)
  - **InfoSummaryBox box fill** was `bg-surface-default` (white) over the cream page — a visible rectangle.
    Legacy `--background` was undefined → transparent. Fixed the default to transparent (only
    `withBackground`/`backgroundColor` paint).
  - **OrderConfirmationDetails total row** inflated its neighbours — `text-h-l` carries a 2.875rem
    line-height, but the legacy total inherits the compact `.body` 1.25rem line-height. Fixed with
    `leading-5` on the `isTotal` value.
  - **DeliveryInfoBar** unmapped — the legacy baseline is **blank** (delay:0.5 entrance from opacity:0 →
    captured pre-animation), an invalid oracle. Also hardened its reduced-motion path to always settle at
    `opacity:1,y:0`.
  - **Fixed the visual-review gallery capturing Framer entrances mid-animation** (the faint DeliveryInfoBar/
    PopUp tiles). Root cause: the `MotionConfig reducedMotion="always"` story wrappers were no-ops —
    `useReducedMotion()` reads `prefers-reduced-motion`, not the config prop. Fix: `visual:review` capture
    contexts now set `reducedMotion: 'reduce'`, which flips the hook true so gated entrances render settled;
    the `MotionConfig` wrappers were removed from the DeliveryInfoBar/PopUp stories. (Lesson: a green gate
    isn't proof a frame is right — the mid-fade slipped under the 2% gate against a blank baseline.)
  - Verified: full `pnpm test:visual` 133 passed / 5 skipped, `vitest --project=storybook` 215/215.
    CheckboxListItem, DropdownList, MessageBanner, Pagination were already faithful (no change).
- **2026-07-07 — Batch 11 findings & harness changes**:
  - **Legacy `<p><span>` key/value pairs → semantic `<dl>` (a11y upgrade).** OrderConfirmationDetails now
    renders a real description list (`<dl>`/`<dt>`/`<dd>`), so AT announces each value against its term
    (1.3.1) — the legacy generic paragraphs had no term/description relationship. Visual layout is
    unchanged, so all three frames (delivery/pricing/total-payment) map cleanly.
  - **A stray heading level in consumer content fails the axe heading-order gate.** IntroBlock's legacy
    rich body (Word-paste) contained a lone `<h5>` jumping straight from the `<h1>` title → axe
    `heading-order`. It's emphasised body copy, not a section heading, so the parity story renders it as
    **bold text** (visually identical, no bogus heading in the outline). General rule: don't carry stray
    heading levels from CMS/Word content into V2 markup.
  - **IntroBlock is baseline-less — the frame depends on CSS V2 intentionally drops.** Its legacy
    `intro-block-story` is dominated by Word-paste rich body whose rendering relied on browser UA margins,
    `&nbsp;`-driven line wrapping, and global bold-heading rules — all reset by V2's Tailwind preflight.
    Mobile PNG is full-page (375×1025, structurally incomparable); desktop reflows ~5% (over gate) purely
    from that consumer text, not an IntroBlock divergence. Gallery-only `['visual']`; own rendering covered
    by play tests. (New bespoke `--text-intro-title(-lg)` tokens, 2rem→2.875rem, match the legacy `.title`
    which overrode the heading scale.)
  - **PopUp is baseline-less — the legacy story captures the *closed* state.** `pop-up-story` renders with
    `open` starting false, so the frozen PNG is just a bare trigger button (the panel never shows).
    Reproducing that is a full-canvas false-green (gotcha 3); there's no legacy image of the open panel.
    Gallery-only Visual shows it open. PopUp stays a **presentational** animated panel (reduced-motion
    gated) — dialog role/labelling/focus-trap belong to the future **Modal** molecule (Tier 2), not this
    low-level primitive.
  - **New tokens (permanent):** `--text-intro-title`/`-lg` (+ line-heights, registered in `cn.ts`),
    `--color-surface-banner` (#f2efea, MessageBanner default = the nav/footer neutral),
    `--color-surface-cream` (#fffdf8, OrderConfirmationDetails highlight — distinct from the yellower
    `yellow-50`). Reused `--spacing-wrapper-xs` (0.3rem) for the detail-row margin. Legacy
    `--cta-primary-default` resolved to #003E51 = V2 `action-primary`, so Pagination needed no colour
    divergence.
- **Current Micro-Batch**: Batch 10 — Tier-0 molecule leaves (complete; **OfferCard**, **CheckboxListItem**,
  **DeliveryInfoBar**, **DropdownList**, **InfoSummaryBox** — the top-5 unchecked queue entries). `pnpm build`
  green, `pnpm build-storybook` green, full `pnpm exec vitest --project=storybook` **197/197** (interaction +
  a11y), full `pnpm test:visual` **123 passed / 5 documented desktop-only skips**. **8 new baselines mapped,
  all both-viewport, all with real legacy comparisons**: OfferCard ×2 (no divergence), CheckboxListItem ×2
  (no divergence), DeliveryInfoBar (settled-motion capture), DropdownList (nav colour is an exact token
  match), InfoSummaryBox ×2 (orange→blue action link, under the gate). Two shared atoms were extended to
  serve these molecules (Checkbox `ariaLabelledBy`; new `--text-icon-2xl` token) — see findings. The next
  batch continues Tier-0: **IntroBlock**, **MessageBanner**, **OrderConfirmationDetails**, **Pagination**,
  **PopUp**.
- **2026-07-07 — Batch 10 findings & harness changes**:
  - **Deterministic visual capture of a Framer *entrance* animation.** A Framer entrance (slide-down +
    fade) can be captured mid-animation. The component gates the entrance on `useReducedMotion()` (2.3.3† —
    required anyway) and makes the reduced path instant/settled. **⚠️ Correction (2026-07-07 visual-review
    pass):** the original fix here wrapped the `Visual` story in `<MotionConfig reducedMotion="always">`,
    claiming it forces `useReducedMotion()` true — **it does not**. `useReducedMotion()` reads the
    `prefers-reduced-motion` media query, not the `MotionConfig` prop, so the entrance still ran and the
    gallery captured a faint mid-fade frame. The real lever: **`pnpm visual:review` creates its capture
    contexts with `reducedMotion: 'reduce'`** (the gate additionally uses `animations: 'disabled'`). The
    `MotionConfig` wrappers were removed. Documented correctly now in docs/DEVELOPMENT.md + CHEATSHEET.
  - **Extending an atom when a new molecule surfaces an a11y gap (recurring methodology).** Like Batch-9's
    Picture `aria-busy` fix, CheckboxListItem needed to name a native checkbox with **rich** label content
    (a Heading + article number) that can't live inside a `<label>` (phrasing-content rule). Added a small,
    backward-compatible **`ariaLabelledBy`** prop to the Checkbox atom (`aria-labelledby` wins over
    `aria-label` per ARIA name computation); the molecule points it at a `useId()` wrapper around its
    children. The legacy row left the checkbox entirely unlabelled — a real AT gap now closed at the atom
    level for every future consumer.
  - **New `--text-icon-2xl: 3.5rem` token (permanent) + `cn.ts` registration.** OfferCard's centred feature
    glyph is 3.5rem — off the Icon atom's `size` scale (max `xlarge` = 1.75rem). Added the token and
    registered `icon-2xl` in `cn.ts`'s `font-size` group so twMerge keeps both the size and the
    `text-icon-decorative-orange` colour when both are passed to the Icon via `className` (the CHEATSHEET
    twMerge trap). OfferCard passes `text-icon-2xl text-icon-decorative-orange`.
  - **`useId` + `role="group"` replaces the invalid legacy `<label htmlFor="infoSummary">`.** InfoSummaryBox's
    legacy label pointed a `<label>` at a non-form `<div>` **with a hard-coded id** (broke with >1 instance).
    V2 makes the box a `role="group"` named by the label via `aria-labelledby` + a per-instance `useId()`.
    Only the two Text-only frames (dina-uppgifter, anvandare) are baseline-mapped; the composite frames wait
    on OrderItem/CartProduct/GroupWrapper/UnorderedList.
  - **Dead legacy code dropped.** DeliveryInfoBar's unused `altText` prop and the story's phantom
    `isAnonymousUser`/`position` args; DropdownList's defined-but-unused Framer `itemVariants` and its
    `linkComponent: any` (→ the shared `LinkComponentType`). DropdownList's nav colour needed **no**
    divergence — legacy `--navigation-text-default` is `#003E51`, exactly V2's `nav-text-default` (blue-500),
    which clears AA on white.
- **Current Micro-Batch**: Batch 9 — Tier-0 molecule leaves (complete; **InlineError**, **LoadingBars**,
  **ClickableListItem**, **LoadingOverlay**, **ArticleCard** — the top-5 unchecked queue entries,
  unblocking FaqList/FormGroup and the ArticleList carousel-baseline chain). `pnpm build` green,
  `pnpm build-storybook` green, full `pnpm test-storybook` 158/158 (interaction + a11y), full
  `pnpm test:visual` 68 passed / 4 documented skips. **7 new baselines mapped** (InlineError,
  LoadingBars, ClickableListItem + LoadingOverlay ×4 scrim variants), all passing both viewports;
  **ArticleCard has no baseline** (legacy shipped no story — its visual comparison is deferred to
  ArticleList, per the queue reminder). The Tier-1 button/link variants (IconButton unblocks 22,
  LinkButton 6) are the natural next batch.
- **2026-07-07 — Batch 9 findings & harness changes**:
  - **a11y hard-gate caught a latent Picture bug via a new consumer.** ArticleCard is the first
    component to render a **decorative** `<img alt="">` through the `Picture` atom, which surfaced
    `presentation-role-conflict` in axe: `Picture` unconditionally set `aria-busy` on the `<img>`, but a
    global ARIA attribute on a presentational (empty-`alt`) image is invalid. Fixed **in `Picture`**
    (`aria-busy={alt ? isLoading : undefined}`) so decorative images carry no ARIA — a durable fix for
    every consumer, test-safe (all Picture stories use non-empty `alt`). Documented in docs/DEVELOPMENT.md.
  - **New `--color-surface-overlay` scrim token (permanent).** LoadingOverlay's light scrim
    (`rgba(245,246,248,0.95)`) has no existing token → added `--color-surface-overlay: #f5f6f8`, consumed
    as `bg-surface-overlay/95`. The dark scrim reuses `bg-blue-500/30` (= legacy `rgba(0,62,81,0.3)`), so
    it needs no new token. Both are exact ports, so all 4 LoadingOverlay baselines pass. Documented.
  - **Reproducing a `fixed` full-screen overlay without polluting autodocs (harness pattern).** A
    `position: fixed` overlay in a Storybook story escapes its block and covers the whole docs page
    (a 0.95-opaque scrim would hide the props table). LoadingOverlay's API default stays `fixed`, but its
    **stories render `position="absolute"` inside a sized relative box** — a full-viewport
    (`h-screen w-full`) box for the `['visual']` frames (identical pixels to the legacy fixed scrim) and a
    contained (`h-80`) box for the demos. Story-level `render` (not decorators) keeps the Visual frames
    from inheriting the demo wrapper. Documented in docs/DEVELOPMENT.md.
  - **ClickableListItem — 24px min target restored (2.5.8).** The legacy row was a ~20px-tall full-width
    `<button>` with `outline:none` (fails 2.5.8 + 2.4.7). V2 adds `min-h-6` + the standard `focus-visible`
    ring; the ≤4px height change is confined to the small label/icon, well under the 2% gate, so the
    baseline still maps. `orange` (orange-600, ~3:1 on white) is kept as a prop for parity but flagged
    sub-AA and never rendered in a scanned story.
  - **ArticleCard — `text` de-HTML'd; layout deferred to the parent list.** Legacy rendered `text` via
    `dangerouslySetInnerHTML` (CMS excerpt) and applied a dead `.maxHeight` class; V2 renders `text` as
    escaped plain text with a real `maxChar` truncation, routing rich content through `richText: ReactNode`.
    The card is a real `<article>` with an `<h3>`; when linked it exposes one read-more `UiLink` (keyboard/AT
    path, name includes the heading, 2.4.4) plus a secondary pointer-only image link (`tabIndex={-1}`);
    overlaid tags are `pointer-events-none`. The legacy per-breakpoint flex-basis calc columns are dropped
    as the *list's* responsibility (Atomic-Design correction) — no baseline enforces them.
  - **Baseline-coverage audit (all 40 migrated components) + the hyphenation grep trap.**
    `legacy-snapshots/` is the **complete** frozen set (652 PNGs / all 155 legacy components), so any
    unmapped snapshot for a *migrated* component is a coverage gap. Audit result: **IconWithTooltip was a
    real miss** — `iconwithtooltip--tooltip-story` exists but was logged "no snapshot" because the grep
    used the hyphenated `icon-with-tooltip` while snapshot ids **de-hyphenate** the component segment
    (`iconwithtooltip`). Now mapped + passing. **ArticleCard is correctly baseline-less** — legacy shipped
    no `article-card` story; its coverage lives in `articlelist--{default,full-width,three-cards}`
    (organism, unmigrated) → still deferred, confirmed by the audit. All other 0-mapped components are
    **intentional, documented deferrals** (Picture ×31 non-deterministic, Video, BoxWrapper ×11 unmigrated
    children, Carousel→ArticleList, Logotype real-brand-SVG, ComponentWithTooltip→IconButton, Tag round-L
    fails-AA). **Variant frames (backfilled 2026-07-07):** (disabled/error/large/blog/place-holder for
    Checkbox, RadioButton, InputText, InputFile, Loader, Heading, UiLink, Button sizes) exist but only the
    primary frame was mapped per component. **All now backfilled: 19 new mapped frames** added as static
    `Visual<Variant>` stories (Button icon-only excluded → IconButton's; Heading `delivery-form` left
    gallery-only — its longer text amplifies the accumulated vertical-rhythm drift to ~4% on desktop, so
    `heading-story` stays the representative Heading baseline). Full `pnpm test:visual` 107 passed / 5
    desktop-only skips; `pnpm test-storybook` 178/178. CHEATSHEET updated with the de-hyphenate rule so
    this trap can't recur.
- **2026-07-07 — post-Batch-8 fixes (Logotype + tooltip positioning)**:
  - **Logotype reworked to ship the real brand mark.** Dropped the `Picture`-URL-wrapper (it required consumers to pass an image URL); it now renders the actual Spendrups **vector** SVGs (`src/assets/logos/spendrups-logo-{horizontal,vertical}.svg`, pulled from `legacy/src/logotypes/`, SVGO'd ~71KB→~38KB) via a responsive `<picture>`/`<img>` (`variant` prop). **The frontend-app "logo components" (`SpendrupsLogoSmall/Large.js`) and its `public/logotypes/*.svg` are base64 PNGs** — rejected; only the legacy DS repo had true vectors. **Vite lib mode inlines all JS-imported assets regardless of size** (documented; it's why `externalizeFonts` exists for CSS), so the ~38KB traces currently inline — acceptable as an interim because the design team is supplying a fully-optimized brand SVG (~3–4KB), after which inlining is a non-issue. `--spacing-logo` token removed (no longer needed). Stories moved to `Design System/Foundation/Logotype` (brand foundation) with a `Design System/Molecules/Logotype` reference kept (exported component).
  - **Tooltip made viewport-aware (`ComponentWithTooltip`).** `IconWithTooltip` delegates positioning to `ComponentWithTooltip`, which used static CSS side/align classes with no collision handling → the tip could render off-screen. Added measured **flip** (to the opposite side when the preferred side lacks room) + cross-axis **shift** to clamp inside the viewport (recomputed on scroll/resize, idempotent), applied via the resolved side class + an inline transform composed with the align translate. All existing behavior preserved (role="tooltip", `aria-describedby`, Escape, hover-grace — the tip stays a wrapper descendant, never portalled). New `StaysInViewport` story asserts the corner-placed tip's rect is fully in-bounds. Documented in docs/DEVELOPMENT.md.
- **Current Micro-Batch**: Batch 8 — Tier-0 leaves, molecules + first organism (complete; **InputText**, **IconWithTooltip**, **Carousel**, **TagsList**, **Logotype** — the top-5 unchecked queue entries, unblocking 8/7/6/4/3). `pnpm build` green, `pnpm build-storybook` green, scoped `test-storybook` 17/17 (interaction + a11y), full `pnpm test:visual` 54 passed / 4 documented skips. Only **InputText** maps a legacy baseline (`input-text-story`, both viewports — same brand font, no divergence). The other four are gallery-only `['visual']` (no reproducible legacy PNG — see per-component notes). **Opened `src/components/organisms/`** with Carousel; the public API gained an `── Organisms ──` section. The Tier-1 button/link variants (IconButton unblocks 22, LinkButton 6) are the natural next batch — they were unblocked once Button/UiLink landed but sit below the Tier-0 leaves in the top-to-bottom queue, which this batch cleared.
- **2026-07-06 — Batch 8 findings & harness changes**:
  - **`src/components/organisms/` opened.** Carousel is the first organism; `src/index.ts` gained an `── Organisms ──` section. Organisms may compose molecules + atoms.
  - **Carousel — Splide dropped for a dependency-free scroll-snap rewrite (new permanent standard).** `@splidejs/react-splide` is **not** in `package.json` (deps are only clsx, lucide-react, tailwind-merge) and isn't React-19-compatible, so per CLAUDE.md the carousel is rewritten from scratch: a CSS scroll-snap track (swipe for free) + real `<button>` arrows/dots as the non-drag, keyboard-operable alternative (2.5.1/2.5.7/2.1.1, incl. arrow-key/Home/End on the focusable track). No auto-advance → 2.2.2 n/a; smooth scroll gated by `motion-reduce`; track `tabIndex={0}` + `role="group"` + `aria-label` (axe `scrollable-region-focusable`). Documented in docs/DEVELOPMENT.md. **Full legacy capability parity**: responsive `perPage`/`perMove`, `direction` horizontal+vertical (Splide `ttb`), `gap`, peek `padding`, `dotPerItem`, per-breakpoint `hideArrows`, and the `arrowsBottom`/`offsetArrows`/`lightArrows` placements + `onNavigation`/`onSlideChange`. Only Splide implementation-internals (`splideProps` passthrough, `noGrid`, `zeroOffset`, Intersection auto-pause) are dropped — no equivalent in a flex/scroll-snap model.
  - **Carousel navigation is slide-index based (correctness).** Nav/pagination measure real slide offsets (`slide.offsetLeft − first.offsetLeft`), NOT `scrollLeft / clientWidth`: the pixel-division approach desyncs the last dot/next-arrow whenever the final page is partial (`ceil(scrollWidth/clientWidth)` pages don't line up with `round(scrollLeft/clientWidth)`). `perPage` is derived from layout so it auto-tracks the CSS breakpoints; scroll handling is rAF-throttled; a `KeyboardToEnd` play test proves `End` reaches `maxIndex` and disables "next" on a partial last page.
  - **New `carousel-slide` `@utility` + `--spacing-logo` token (permanent).** `perPage` is a per-breakpoint runtime value, so — exactly like FlexItem's `flex-responsive` — Carousel sets `--cs-per-sm/md/lg` inline on the track and each `CarouselItem` (with the `carousel-slide` utility) reads the inherited var to derive its `flex-basis` at the md/lg cut-ins (no arbitrary literal). Documented in docs/DEVELOPMENT.md. (Logotype's `--spacing-logo` token was dropped when it stopped being a Picture wrapper — see the 2026-07-07 Logotype rework below.)
  - **IconWithTooltip — composes the `ComponentWithTooltip` atom instead of re-porting Radix.** Legacy used `@radix-ui/react-tooltip` (not a V2 dep); the migrated molecule wraps a real `<button aria-label={content}>` (icon or text-badge trigger) in the existing tooltip atom, inheriting its 1.4.13 contract. **Badge contrast fixed**: legacy white-on-orange (~2.3:1) → dark-on-orange (`text-text-default`), the same accessible-divergence pattern as Text/UiLink; no baseline exists, so no pixel gate constrains it.
  - **TagsList — dead legacy CSS eliminated.** The legacy `.tagsList` combined `overflow-x: scroll` + `max-width: 80vw` + `white-space: nowrap` with `flex-wrap: wrap`, but wrap makes the tags wrap before they can overflow, so the scroll/max-width was dead. V2 is a clean wrapping `<ul>`/`<li>` (`flex flex-wrap gap-1`) — proper list semantics (1.3.1), no arbitrary `80vw`.
  - **No mapped baseline, gallery-only (recurring).** IconWithTooltip, Carousel, TagsList, Logotype aren't mapped: IconWithTooltip/TagsList have no legacy snapshot; Logotype renders the real brand vectors (a different rendition than the legacy PNG — see the 2026-07-07 rework); **Carousel's legacy PNG *does* exist but is an `ArticleList` of 5 cards (~95% unmigrated content), so its mapping is *deferred* to ArticleList migration — not absent.** Each still ships a `['visual']` `Visual` story (gallery-only, current-only per gotcha 9) and a documented note in `baseline-map.ts`, so they stay in the `visual:review` surface without a false-green diff.
- **2026-07-06 — checklist restructured to a dependency-ordered build queue**: the legacy import graph was analysed (direct imports + JSX usage of barrel imports) and the 127 pending components tiered topologically (keystone-first within each tier). The `## Components Checklist` is now the queue — "next N unchecked" are always buildable. This replaced the old alphabetical by-category list, which was **unbuildable in order** (molecules import atoms/molecules that came later alphabetically). Scripts kept in the session scratchpad (`deps.cjs` → `emit.cjs`).
- **2026-07-06 — Batch 7 findings & harness changes**:
  - **Molecules layer opened + `src/components/molecules/` populated.** Public API (`src/index.ts`) gained a `── Molecules ──` section. Molecules may import atoms (Button → Icon, Loader; UiLink → Icon), unlike atoms.
  - **Shared polymorphic-link helper (new permanent util)**: `src/lib/link.tsx` exports `DefaultLink` (a real semantic `<a>`, replacing the legacy `LinkComponent` `<div>` stub → links are focusable + exposed as links, 4.1.2), plus `LinkComponentType`/`LinkRenderProps`. UiLink (and the coming IconButton/LinkButton/IconLink) take an optional `linkComponent` prop to inject a router link, defaulting to `DefaultLink`. Ref is forwarded via a `ref` member on `LinkRenderProps` (React 19 ref-as-prop). Documented in docs/DEVELOPMENT.md.
  - **Button — baseline mapped despite a font divergence** (initially skipped, then corrected after review feedback): legacy `button.module.css` set `font-family: var(--font-family-secondaryBold)`, a token that is **never defined**, and the global `button {}` reset only sets `color` (no `font-family: inherit`) — so the legacy baselines rendered in the **UA default font**, while V2 applies the brand `font-primary` (the undefined token was a bug). I first read that as "diff is meaningless, don't map" — wrong: the label is a tiny fraction of the full-screen canvas, so the diff is **well under the 2% gate**. `--visual` (→ `button-small`), `--visual-icon-left/right` and `--visual-large` are all mapped and pass, and the review gallery now pairs each current-vs-legacy so the minor type difference gets human sign-off instead of escaping review. New token `--spacing-button-min-l: 8.125rem` (`min-w-button-min-l`) for the off-scale large min-width. Also dropped legacy's `aria-label={name}` misuse — the visible `children` is the accessible name (4.1.2/2.5.3); `name` is now the real HTML attribute. Icon-only buttons → use IconButton. Sub-44px sizes (small/x-small/xx-small) rely on the 2.5.8 ≥24px-spacing exception (noted in-component); only `large` meets 2.5.5†.
  - **UiLink — baseline mapped despite a colour divergence**: the legacy link is orange (`--interactive-default`, fails 4.5:1 on white); V2 uses accessible `text-text-blue` + `underline` (1.4.1/1.4.3) — the same intentional divergence applied to the `Text` link in batch 4. The colour change is confined to the small link glyphs, so `--visual` (→ `ui-link-story`) diffs **under the 2% gate** and is mapped; the gallery surfaces the orange→blue change for sign-off. (The V2 story renders blue → passes the axe gate; the orange legacy PNG is only the reference image, never scanned — so "legacy fails AA" was never a reason not to map.) Icons are decorative (`aria-hidden`); accessible name is the visible text (no more `aria-label={children}`).
- **2026-07-06 — Batch 6 findings & harness changes**:
  - **Runtime responsive value → CSS-var + media-query `@utility` (new permanent standard)**: FlexItem's `flex` is a per-breakpoint runtime prop (`{sm,md,lg}`), which can't be a build-time Tailwind class. Ported the legacy CSS-var pattern: the component sets `--flex-sm/md/lg` inline, and a new `@utility flex-responsive` (in `src/styles/index.css`) reads them at the `md` (48rem) / `lg` (64rem) cut-ins. Confirms Tailwind v4 `@utility` accepts nested `@media` (emits correctly in `dist/ecom-designsystem.css`). This is the sanctioned way to make a runtime value responsive without an arbitrary literal — reuse it for any future per-breakpoint runtime dimension. Documented in docs/DEVELOPMENT.md.
  - **New shared tokens (permanent)**: `--spacing-wrapper-xs: 0.3rem` (the `spacing='xs'` cluster gap shared by GroupWrapper + BoxWrapper; 0.3rem is off the 0.25rem scale — sm/md/lg/xl map to standard `gap-2/4/6/8`; consumed as `gap-wrapper-xs`) and `--container-box: 43.75rem` (BoxWrapper's `hasMaxWidth` cap, ported from legacy `max-width: 43.75rem`; consumed as `max-w-box` — v4 strips the `--container-` prefix). Documented in docs/DEVELOPMENT.md.
  - **Dead legacy code dropped**: BoxWrapper's `direction` prop was a no-op (its `.direction-*` rules are scoped under `.groupWrapper`, never `.boxWrapper`) — dropped (BoxWrapper is always a column stack). Also dropped the never-referenced `.noPadding` class and the raw `style` passthrough (V2 exposes `className` + the specific runtime `padding` prop instead). GroupWrapper's numeric `spacing` (legacy silently mapped any number → `xl`) narrowed to the `xs|sm|md|lg|xl` enum.
  - **BoxWrapper — no visual baseline (unmigrated children)**: every legacy `box-wrapper-story-*` frame composes molecules not yet migrated (Button, InfoSummaryBox, OrderItem, Tabs, TagsList, OrderConfirmationDetails, ScrollableList), so a faithful parity frame is impossible and a partial one would be a false-green (full-canvas pitfall). Not mapped; re-map when those children land. Behaviour covered by play tests.
  - **GroupWrapper mobile — single-large-Heading amplifies the known rhythm drift (harness pattern)**: the legacy `group-wrapper-story` frame's only content is one `order=1` Heading. It inherits the Heading vertical-rhythm drift that batch-1 accepted "within tolerance" — but where the multi-heading `heading-story` averages that sub-10px offset under the 2% gate, a single large heading wrapping to two lines on the 375px mobile canvas magnifies it to ~4%. GroupWrapper adds no vertical box, so this is a Heading-rendering incomparability, not a wrapper divergence → mapped **desktop-only** (like FlexContainer/Textarea/InputFile). Desktop (one line, drift diluted) matches. Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 5 findings & harness changes**:
  - **New layout tokens (permanent)**: `src/styles/index.css` gained `--breakpoint-3xl: 90rem` (the legacy "big screen" cut-in — extends, doesn't replace, Tailwind's breakpoints; = the `xl` JS breakpoint & the `isBigScreen` 90em query) and a custom `@utility max-w-content-fluid` = `calc(100% - 4rem)` (full width minus 2rem gutters) plus `@utility wave-w-{sm,md,lg,xl}` for WaveDivider's 20/30/40/50% desktop widths (30% has no standard Tailwind fraction). All documented in docs/DEVELOPMENT.md.
  - **Tailwind `--container-*` → `max-w-*` naming gotcha**: the container tokens are consumed as `max-w-content-narrow`/`-wide`/`-text`/`-lg` — Tailwind v4 **strips the `--container-` prefix**, so `max-w-container-content-*` silently generates nothing. Separately, that namespace also feeds `@container` sizes and **rejects a percentage `calc()`**, which is why the fluid width is a custom `@utility`, not a `--container-content-fluid` token. First discovered this batch (first layout components); cost one build cycle. Documented in DEVELOPMENT.md.
  - **Breakpoints — `react-responsive` dropped for native hooks**: legacy `Above`/`Below`/`Between` + `mediaQueryHelper` depended on `react-responsive`. V2 implements `useMediaQuery` on `useSyncExternalStore` (concurrent- and SSR-safe: `false` server snapshot) and `useBreakpoint` (replaces `mediaQueryHelper`), per the React 19 "standard hooks, no new deps" rule. `Above`/`Below`/`Between` are preserved (render-prop `children` still supported) but `@deprecated` → the hooks. Utility module: no story/snapshot → baseline-less.
  - **FlexContainer mobile baseline incomparable (harness pattern, recurring)**: the legacy `flex-container-story` **mobile** PNG is 464×667 — six non-wrapping 4rem swatches (6×64 + 5×16 gap = 464px) overflow the 375px viewport, so legacy captured full-page; the V2 harness captures the viewport (375×667). Mapped **desktop-only** (`viewports: ['desktop']`, same class as InputFile/Textarea). Desktop (1280) fits and matches.
  - **Layout-primitive convention (new permanent standard)**: enum props → `Record<Enum, string>` Tailwind utility maps; free-form runtime props (`flex`/`gap`/`minHeight`/`padding`) → inline `style` (the sanctioned no-arbitrary exception); presentational `<div>`/`<svg>`, no role (1.3.1). Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 4 findings & harness changes**:
  - **New Tag dimension tokens (permanent)**: `src/styles/index.css` gained `--text-tag-sm` (0.625rem, the small rectangular-tag label — registered in `cn.ts`'s font-size group so twMerge keeps size + colour) plus five bespoke `--spacing-tag-*` box tokens (`-rect-min`/`-rect-md`/`-rect-lg`/`-round-sm`/`-round-lg`) — the legacy tag heights/diameters (2.063rem, 4.75rem, 8.625rem, 5.156rem) are off the 0.25rem scale, so they're tokens rather than arbitrary values. Documented in docs/DEVELOPMENT.md.
  - **a11y gate vs legacy baselines (recurring pattern)**: `a11y.test: 'error'` means axe **fails** `test-storybook`, so a Visual parity story can't reproduce a legacy frame that itself fails AA. Two low-contrast oranges hit this: **Tag** white-on-`tag-orange` (~2.6:1) and **Text**'s legacy orange link (~2:1, undecorated). Resolution: (1) Tag maps only the AA-passing frames (rectangular-l/s, round-s); the orange **round-L** frame is **not** mapped and the orange token is flagged for design review in-component. (2) **Text link fixed** to blue + underline (1.4.1 + 1.4.3) — an intentional divergence from the orange baseline; the change is confined to the small glyphs so the diff stays under the 2% gate and the mapping still passes. `warning` (orange) text is kept as a prop option but never rendered in a scanned story (sub-AA for normal-weight text). Documented in docs/DEVELOPMENT.md.
  - **Video — 2.2.2 restored over legacy autoplay**: legacy autoplayed a muted, looping background video with **no** pause control (fails 2.2.2). V2 always renders a keyboard-operable pause/play button (44px `size-11` target, `focus-visible` ring, `aria-label` that flips with state), suppresses auto-play under `prefers-reduced-motion` (2.3.3), stays muted (1.4.2), and exposes a `tracks` slot for captions/descriptions (1.2.2–1.2.5). Atoms can't import `Icon`, so the control uses inline SVG glyphs (like MenuButton). **No visual baseline mapped**: the legacy `video-story` PNG is a non-deterministic auto-playing frame (no poster) and V2 adds the control — a pixel diff is meaningless (same reasoning as Picture). The V2 Video stories pass a minimal WebVTT captions `<track>` so axe's `video-caption` rule stays green.
  - **SingleSelect**: `@deprecated` (→ SelectList) preserved. Native `<select>` restores a `focus-visible` ring over the legacy `outline:none`; accessible name via `ariaLabel` (no visible label in legacy); `onChange` reports only — never auto-navigates (3.2.2, play-tested). No legacy story/snapshot → baseline-less.
  - **Textarea mobile baseline incomparable (harness gotcha)**: the legacy `textarea-story` **mobile** PNG is 375×**705** — the five-field stack overflows the 375×667 viewport, so legacy captured it **full-page**, whereas the V2 harness captures the **viewport** (375×667). Any mobile story taller than the viewport is therefore structurally incomparable → mapped **desktop-only** (`viewports: ['desktop']`, like InputFile). Desktop (1280×800) fits and matches. Documented in docs/DEVELOPMENT.md.
- **2026-07-03 — Batch 3 findings & harness changes**:
  - **Shared skeleton/animation tokens (new permanent standard)**: `src/styles/index.css` gained three reusable primitives used by this batch and every future skeleton/motion atom — `--animate-grow` (LoadingBar bar grow-in), `--animate-shimmer` + `@keyframes shimmer`, and an `@utility skeleton-shimmer` (the decorative loading gradient). They live in the theme so no component ships an arbitrary `bg-[…]`/keyframe. All are gated with `motion-reduce:animate-none` at call sites (2.3.3†). Documented in docs/DEVELOPMENT.md.
  - **LoadingBar**: legacy shipped zero a11y — it's really a value-on-a-scale bar (e.g. "Beska" bitterness 6/12), so V2 exposes `role="meter"` (`aria-valuemin=0`/`max=12`/`now`) named by its visible label. The fill height is data-driven (`value/12`) so it's an inline `style` (a runtime value, not a design token — the one allowed non-utility dimension). The `bar-fill-*`/`bar-bg-*` token pair's non-text contrast (1.4.11) is borderline and flagged in-component for design review; axe doesn't gate it.
  - **MenuButton**: legacy button was a 23px target with `outline:none` (fails 2.5.8 + 2.4.7). V2 wraps the 23px glyph in a 44px `size-11` touch target (2.5.5†) with a real `focus-visible` ring; SVG stroke via `stroke-action-primary`. Framer path morph honours `prefers-reduced-motion` and uses `initial={false}` so the closed frame is static for the visual capture. Visual diff passes both viewports despite the target growth (glyph shift ≪ 2% gate).
  - **Picture**: no visual baseline mapped — the legacy `picture-story` PNGs used network-loaded images + a time-based skeleton/opacity transition, so a deterministic V2 frame can't reproduce them (behaviour covered by load/fallback play tests instead). Ported the loading/fallback state machine to React 19 (ref-as-prop merged with the internal `complete`-check ref; `fetchPriority` camelCase; dropped legacy dead `onLoadStart`, `content-visibility`/`will-change` perf hints, and the bespoke blur-gradient skeleton in favour of the shared `skeleton-shimmer`). Opacity scrim uses `bg-white/30`/`bg-black/50` (token + opacity modifier, not arbitrary).
  - **Placeholder**: legacy had **no** `.stories.tsx` and no snapshot, so no baseline. Decorative skeleton → `aria-hidden`. Odd legacy percentages (90%) snapped to nearest standard fractions/steps (`w-11/12`, `h-5`, `mb-2.5`) to keep zero arbitrary values; cosmetically irrelevant with no baseline to match.
- **2026-07-02 — Batch 2 dead-CSS findings & harness changes**:
  - **RadioButton**: legacy `radio-button.module.css` never applied (broken `&input[type="radio"]` nesting → selector `.radioButtoninput[…]`), so legacy rendered an unstyled native radio. V2 restores the intended styling (`h-4 w-5`, `accent-action-primary`, error → `accent-surface-critical`); pixel impact is tiny and the visual diff passes both viewports.
  - **InputFile**: legacy referenced non-existent `.button`/`.small` button-module classes, so the "button" was effectively plain secondary-blue text — V2 ports that effective rendering (baseline parity), not the intended button chrome. Revisit the affordance once the V2 Button molecule lands (needs human/design sign-off). Legacy also hid the input with `visibility: hidden` (keyboard-unreachable, WCAG 2.1.1 fail); V2 uses `sr-only`, which fixes it but removes the layout-overflow bug that made the legacy **mobile** PNG 420px wide — that viewport is structurally incomparable, so the baseline entry is desktop-only (`viewports: ['desktop']`).
  - **Harness**: `baseline-map.ts` gained an optional per-entry `viewports` filter (documented skip instead of a red test), and the spec now waits with `toBeAttached` on the story's first child instead of `toBeVisible` on `#storybook-root` (absolutely-positioned stories like Loader leave the root zero-height). Both documented in docs/DEVELOPMENT.md.
  - **Checkbox/RadioButton target size**: 18px/16–20px visual boxes rely on the WCAG 2.5.8 ≥24px-spacing exception — consumers must keep neighbouring targets ≥24px apart (noted in component comments).
- **2026-07-03 — Batch-1 audit via review gallery**: re-checked all 5 batch-1 atoms now that the global font is in place. Heading (Edmondsans, minor pre-existing vertical-rhythm drift within tolerance), CampaignBanner (pixel-identical), and Icon (map-pin glyph) all match; ExpandableWrapper has no baseline. **The font gap never actually bit batch-1** — the only text-bearing atoms set `font-primary` explicitly. One real finding: **ComponentWithTooltip's visual test was meaningless** — its `Visual` story renders a "Hover me" button while the legacy baseline is an `IconButton icon='icon-x'` close button; it passed only because the trigger is <0.5% of the canvas (under the 2% gate). Resolution: **removed ComponentWithTooltip from `tests/visual/baseline-map.ts`** (documented) since a faithful frame needs the unmigrated `IconButton` molecule — **re-add its visual mapping when IconButton is migrated** and the Visual story can reproduce the legacy trigger. Behaviour stays covered by its interaction/a11y play tests. Full-canvas false-green pitfall documented in docs/DEVELOPMENT.md.
- **2026-07-03 — visual-review findings resolved (font + input background)**: eyeballing the new tool (`pnpm visual:review`) surfaced three "wrong font" reports (DebounceInput, InputFile, Loader) plus a DebounceInput input-background diff. Root cause of the font issue was systemic, not per-component: legacy set a global `html { font-family: var(--font-family-primary) }`, but V2's `src/styles/index.css` only defined `--font-primary` as a token and never applied it to the document, so Tailwind's preflight left everything that didn't set `font-primary` explicitly in system-sans (batch-1 atoms passed only because they set it). Fixed once for the whole library with an `@layer base { html { font-family: var(--font-primary) } }` rule; batch-1 unaffected (no-op), form atoms now inherit Edmondsans. Caveat captured in docs/DEVELOPMENT.md: **form controls don't inherit font-family**, so `DebounceInput`'s numeric field keeps its explicit `font-primary`. Separately, that field needed `bg-surface-default` — Tailwind preflight leaves inputs transparent, so the off-white page showed through where legacy relied on the browser's default white field. Re-verified: `pnpm build` green, full `pnpm test:visual` 17 passed / 1 skipped, all three findings confirmed fixed in the regenerated gallery.
- **2026-07-02 — Icon re-migrated to `lucide-react`**: the icomoon font class was dead in V2 (no `@font-face` shipped), so Icon rendered nothing. Now renders Lucide SVGs via a strict `Record<IconName, IconGlyph>` map (legacy icomoon set was Feather — Lucide's ancestor — so glyphs map 1:1). Exceptions kept working: `icon-facebook`/`icon-instagram`/`icon-linkedin` (Lucide ships no brand icons) use vectors extracted from legacy `selection.json`; `icon-heart-o` → Lucide `Heart`, `icon-heart1` → `Heart` filled. Visual baseline `design-system-atoms-icon--icon-story` wired and passing; `pnpm test-storybook` 16/16.

## Summary

- Total Components: 155
- Completed: 131 / 155
- Remaining: 24

## Components Checklist

**Ordering is dependency-first, not alphabetical.** Regenerated from the legacy import graph: each
entry's `needs:` list names the *pending* components it imports, and every one of those sits in an
earlier tier — so **to start a batch, take the next unchecked entries top-to-bottom and their deps are
guaranteed already done.** `[atom]`/`[mol]`/`[org]` is the V2 destination dir
(`src/components/<category>`, after Atomic-Design reclassification — many legacy `atoms/*` are V2
molecules). `unblocks N` = how many pending components import this one (higher = more foundational;
that's why each tier is keystone-first — e.g. Button unblocks 28, IconButton 22).

Regenerate after large changes with the scratch scripts (`deps.cjs` → `emit.cjs`), or just move a
finished line into _Completed_ by hand (tiers rarely shift).

> **Cycle note.** The legacy product-card family is mutually recursive — `ProductCard` ↔
> `ProductCardHorizontal`/`-Vertical`/`-Restricted`, and `ProductSearch` ↔
> `ProductSearchResultItem`. Tiering breaks these arbitrarily; when you reach that cluster, scaffold the
> shells first and wire the cross-references last rather than expecting one clean topological pass.

### Completed (118)

- [x] CampaignBanner (Legacy: legacy/src/design-system/components/atoms/campaign-banner)
- [x] ComponentWithTooltip (Legacy: legacy/src/design-system/components/atoms/component-with-tooltip)
- [x] ExpandableWrapper (Legacy: legacy/src/design-system/components/atoms/expandable-wrapper)
- [x] Heading (Legacy: legacy/src/design-system/components/atoms/heading)
- [x] Icon (Legacy: legacy/src/design-system/components/atoms/icon)
- [x] Checkbox (Legacy: legacy/src/design-system/components/atoms/inputs/checkbox)
- [x] DebounceInput (Legacy: legacy/src/design-system/components/atoms/inputs/debounce-input)
- [x] InputFile (Legacy: legacy/src/design-system/components/atoms/inputs/input-file) — visual: desktop only (legacy mobile PNG incomparable, see batch notes)
- [x] RadioButton (Legacy: legacy/src/design-system/components/atoms/inputs/radio-button) — intent restored over dead legacy CSS, see batch notes
- [x] Loader (Legacy: legacy/src/design-system/components/atoms/loader)
- [x] LoadingBar (Legacy: legacy/src/design-system/components/atoms/loading-bar) — role="meter" restored over dead legacy a11y, see batch notes
- [x] MenuButton (Legacy: legacy/src/design-system/components/atoms/menu-button)
- [x] InlineHelper (Legacy: legacy/src/design-system/components/atoms/messages/inline-helper)
- [x] Picture (Legacy: legacy/src/design-system/components/atoms/picture) — no visual baseline (network + skeleton non-deterministic, see batch notes)
- [x] Placeholder (Legacy: legacy/src/design-system/components/atoms/placeholder) — no legacy story/baseline
- [x] SingleSelect (Legacy: legacy/src/design-system/components/atoms/single-select) — `@deprecated`→SelectList preserved; no baseline (no legacy story), see batch notes
- [x] Tag (Legacy: legacy/src/design-system/components/atoms/tag) — 3 baselines mapped; orange round-L unmapped (white-on-orange fails AA), see batch notes
- [x] Text (Legacy: legacy/src/design-system/components/atoms/text) — link fixed to accessible blue+underline (intentional divergence), see batch notes
- [x] Textarea (Legacy: legacy/src/design-system/components/atoms/textarea) — visual desktop-only (legacy mobile PNG full-page 705px), see batch notes
- [x] Video (Legacy: legacy/src/design-system/components/atoms/video) — pause control restored over legacy autoplay (2.2.2); no baseline (non-deterministic), see batch notes
- [x] WaveDivider (Legacy: legacy/src/design-system/components/atoms/wave-divider) — decorative `aria-hidden` svg; bespoke `wave-w-*` widths (30% off the fraction scale); baseline mapped (size='sm')
- [x] Breakpoints (Legacy: legacy/src/design-system/components/layouts/breakpoints) — viewport-utility module; `react-responsive` replaced with native `useMediaQuery`/`useBreakpoint`; no baseline (utility, no story)
- [x] ContentWrapper (Legacy: legacy/src/design-system/components/layouts/content-wrapper) — fluid gutter + `3xl` cap; baseline mapped (both viewports)
- [x] FlexContainer (Legacy: legacy/src/design-system/components/layouts/flex-container) — enum props → utilities, runtime props inline; visual desktop-only (non-wrapping row overflows mobile viewport), see batch notes
- [x] MaxWidth (Legacy: legacy/src/design-system/components/layouts/max-width) — `max-w-content-*` presets; no baseline (no legacy story)
- [x] BoxWrapper (Legacy: legacy/src/design-system/components/molecules/box-wrapper) — reclassified molecule→atom; presentational vertical stack; dead `direction`/`style`/`.noPadding` dropped; no visual baseline (unmigrated child molecules), see batch notes
- [x] FlexItem (Legacy: legacy/src/design-system/components/molecules/flex-item) — reclassified molecule→atom; per-breakpoint runtime `flex` via `flex-responsive` @utility; no baseline (no legacy story)
- [x] GroupWrapper (Legacy: legacy/src/design-system/components/molecules/group-wrapper) — reclassified molecule→atom; enum→utility maps; visual desktop-only (single large Heading amplifies known rhythm drift on mobile), see batch notes
- [x] Button `[mol]` (Legacy: legacy/src/design-system/components/atoms/button) — keystone (unblocks 28); 5 surfaces × 4 sizes, icons, loading (`aria-busy` + sr-only label); `font-primary` over undefined legacy token; 4 baselines mapped (font divergence, under 2% gate), see batch notes
- [x] UiLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/ui-link) — polymorphic `<a>` via `src/lib/link` `DefaultLink`; accessible blue+underline over legacy orange; baseline mapped (colour divergence, under gate), see batch notes
- [x] InputText `[mol]` (Legacy: legacy/src/design-system/components/atoms/inputs/input-text) — native input + optional decorative trailing icon; number-input spinner styling ported from DebounceInput; baseline mapped both viewports (no divergence), see batch notes
- [x] IconWithTooltip `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-with-tooltip) — composes the ComponentWithTooltip atom (Radix dropped); dark-on-orange badge over legacy white-on-orange; **baseline mapped** (`iconwithtooltip--tooltip-story`, both viewports; icon-size divergence under the gate — corrected 2026-07-07, was a false "no snapshot" from the hyphenation grep trap)
- [x] Carousel `[org]` (Legacy: legacy/src/design-system/components/organisms/carousel) — **first organism**; Splide dropped for a dependency-free scroll-snap rewrite + `carousel-slide` @utility; legacy baseline PNG exists but is an ArticleList of 5 cards (~95% unmigrated content) → mapping **deferred to ArticleList migration**, not "no baseline"; see batch notes
- [x] TagsList `[mol]` (Legacy: legacy/src/design-system/components/molecules/tags-list) — clean wrapping `<ul>`/`<li>` of Tags; dead legacy overflow/max-width CSS eliminated; no baseline (no legacy snapshot), see batch notes
- [x] InlineError `[mol]` (Legacy: legacy/src/design-system/components/atoms/messages/inline-error) — reclassified atom→molecule; `role="alert"` live region, icon+text (never colour-only), `text-critical` (AA); baseline mapped both viewports, see batch notes
- [x] LoadingBars `[mol]` (Legacy: legacy/src/design-system/components/molecules/loading-bars) — flex-col stack of LoadingBar meters (each self-labelled); keyed by index; baseline mapped both viewports (4 Beska bars), see batch notes
- [x] ClickableListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/clickable-list-item) — full-width `<button>`; `min-h-6` (2.5.8) + `focus-visible` ring restored over dead legacy a11y; `orange` kept but flagged sub-AA; baseline mapped both viewports, see batch notes
- [x] LoadingOverlay `[mol]` (Legacy: legacy/src/design-system/components/molecules/loading-overlay) — scrim + Loader (status live region); new `--color-surface-overlay` token, dark = `blue-500/30`; 4 baselines mapped both viewports; stories render `absolute` to avoid `fixed`-overlay autodocs pollution, see batch notes
- [x] ArticleCard `[mol]` (Legacy: legacy/src/design-system/components/molecules/article-card) — composes Picture+Tag+UiLink; `<article>`/`<h3>`, one read-more link + pointer-only image link; `text` de-HTML'd → escaped + `maxChar`; **no baseline** (legacy shipped no story; deferred to ArticleList), see batch notes. Surfaced+fixed a latent `Picture` `aria-busy`/decorative-image conflict.
- [x] OfferCard `[mol]` (Legacy: legacy/src/design-system/components/molecules/offer-card) — composes the Icon atom (decorative `aria-hidden`); centred icon + configurable-level heading + `richText` (legacy `& p` subdued styling ported as `[&_p]` so a bare string still matches the baseline); new `--text-icon-2xl` (3.5rem) token; both `offer-card-story-1/2` baselines mapped, both viewports (no divergence)
- [x] CheckboxListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/checkbox-list-item) — Heading/Text content + Checkbox atom; **checkbox now named** via `aria-labelledby` → item content (added `ariaLabelledBy` to the Checkbox atom; legacy left it unlabelled); loka + heineken baselines mapped both viewports
- [x] DeliveryInfoBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/delivery-info-bar) — full-width `<button>` (truck Icon + message = accessible name) in ContentWrapper; framer entrance gated by `prefers-reduced-motion` (animates to a settled `opacity:1,y:0`; reduced-motion = instant); dead `altText` prop dropped. **No baseline** — the legacy frame is blank (its `delay:0.5` entrance from `opacity:0` meant Storybook captured it before the animation ran); gallery-only Visual (unmapped 2026-07-07 during the batch-10/11 visual-review pass), behaviour covered by play tests
- [x] DropdownList `[mol]` (Legacy: legacy/src/design-system/components/molecules/dropdown-list) — `<ul role="list">` of polymorphic links (shared `DefaultLink`/`linkComponent`, `any` dropped); dead framer `itemVariants` removed; active link → `aria-current="page"` + bold (not colour); legacy `--navigation-text-default` #003E51 == V2 `nav-text-default`, so baseline maps with **no divergence** both viewports
- [x] InfoSummaryBox `[mol]` (Legacy: legacy/src/design-system/components/molecules/info-summary-box) — labelled `role="group"` via `aria-labelledby` + `useId` (fixed invalid legacy `<label htmlFor=div>`); action button orange→accessible blue+underline; `dina-uppgifter` + `anvandare` (Text-only) frames mapped both viewports; composite frames (OrderItem/CartProduct/GroupWrapper/UnorderedList children) deferred until those land
- [x] IntroBlock `[mol]` (Legacy: legacy/src/design-system/components/molecules/intro-block) — composes ContentWrapper/MaxWidth/FlexContainer atoms; `<h1>` title on new bespoke `--text-intro-title(-lg)` tokens (2rem→2.875rem, off the heading scale) + uppercase `font-secondary` ingress; **no baseline** (legacy frame is Word-paste rich body dependent on UA margins/`&nbsp;` wrapping/global heading CSS that V2 preflight resets — mobile PNG full-page, desktop reflows ~5%); gallery-only Visual, behaviour covered by play tests
- [x] MessageBanner `[mol]` (Legacy: legacy/src/design-system/components/atoms/message-banner) — reclassified atom→molecule; `role="status"` live region + decorative type icon; new `--color-surface-banner` (#f2efea) default, custom `color` inline→white text; success + link frames mapped both viewports (no divergence)
- [x] OrderConfirmationDetails `[mol]` (Legacy: legacy/src/design-system/components/molecules/order-confirmation-details) — legacy `<p><span>` pairs upgraded to a semantic `<dl>`/`<dt>`/`<dd>` (1.3.1); new `--color-surface-cream` (#fffdf8) highlight; reused `--spacing-wrapper-xs` (0.3rem) row margin; delivery/pricing/total-payment frames mapped both viewports
- [x] Pagination `[mol]` (Legacy: legacy/src/design-system/components/molecules/pagination) — `<nav aria-label>` landmark of real buttons; prev/next `aria-label` + `disabled`, active page `aria-current="page"` + bold/underline (not colour); `useBreakpoint().isMobile` window (5 desktop/3 mobile); legacy `name=` misuse dropped; baseline mapped both viewports (btn colour #003E51 == action-primary, no divergence)
- [x] PopUp `[mol]` (Legacy: legacy/src/design-system/components/molecules/pop-up) — presentational animated bottom panel (AnimatePresence, reduced-motion-gated); **no baseline** (legacy `pop-up-story` captures the *closed* state — a bare trigger button, no open-panel image to diff, gotcha 3); gallery-only Visual shows it open; dialog semantics/focus deferred to the future Modal molecule
- [x] PurchaseList `[mol]` (Legacy: legacy/src/design-system/components/molecules/purchase-list) — `<ul role="list">` of saved lists; name link is the AT path (chevron = pointer-only `aria-hidden`/`tabIndex=-1` duplicate), checkbox named via `aria-labelledby`→row name (legacy unlabelled); orange "updated" badge white→dark text (AA); dead `loading` dropped, `linkComponent: any`→`LinkComponentType`; baseline mapped both viewports (badge divergence under gate), see batch notes
- [x] RichText `[mol]` (Legacy: legacy/src/design-system/components/organisms/rich-text) — reclassified organism→molecule; CMS `dangerouslySetInnerHTML` typed `string` (was `any`) in a `MaxWidth` reading measure; prose via descendant utilities, accessible blue+underline links, IcoMoon bullet→`list-disc`; **no baseline** (Word-paste HTML depends on UA margins/IcoMoon/404 images — like IntroBlock); stories model clean valid HTML, markup a11y is the consumer's, see batch notes
- [x] ScrollableList `[mol]` (Legacy: legacy/src/design-system/components/molecules/scrollable-list) — height-capped scroll region; dead commented-out fade + `hasFade` machinery dropped, `Math.random()` keys→`Children.toArray`; `role="list"`+`tabIndex=0`+`aria-label`+focus ring make it keyboard-operable (2.1.1) over legacy's none; **no baseline** (legacy frames compose unmigrated CartProduct/LinkListItem), see batch notes
- [x] SortableListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/sortable-list-item) — clickable row via a stretched overlay `<button aria-label={name}>` (legacy `<button>`-wrapping-a-heading is invalid HTML); restores the dead `name` prop; new `@utility sortable-item-cols` (50%/auto/auto+5%); chevron CSS-gated `hidden lg:flex`; both frames mapped both viewports (visually identical), see batch notes
- [x] TagsDescription `[mol]` (Legacy: legacy/src/design-system/components/molecules/tags-description) — `<ul role="list">` colour legend; imports only the `TagColor` *type* from Tag; decorative swatches (`aria-hidden`) + meaning text (colour never sole cue, 1.4.1); no snapshot → gallery-only Visual, see batch notes
- [x] Logotype `[mol]` (Legacy: legacy/src/design-system/components/molecules/logotype) — renders the **official Spendrups logos** (from the brand EPS, exported via Illustrator, SVGO-safe) via responsive `<picture>`/`<img>`; stories under **Foundations** (main) + a Molecules reference; no baseline (different rendition than legacy PNG), see batch notes. **⚠️ Known tradeoff (accepted 2026-07-07):** each SVG embeds a ~33KB PNG raster (the "1897" gradient — the brand source stores it as raster, not vector), so the two logos add ~96KB raw to the bundle and don't gzip. Safe SVGO only; raster untouched for fidelity. **The design team that made this logo is gone**, so no clean vector source exists. Future levers (lossy pngquant ~halves it, or a vector redraw) are documented in [`src/assets/logos/README.md`](../../../src/assets/logos/README.md).
- [x] UnorderedList `[mol]` (Legacy: legacy/src/design-system/components/molecules/unordered-list) — `<ul role="list">` container; `Math.random()` keys→`Children.toArray`; dead `number` spacing dropped (legacy switch never matched a number → always fell to xl); loading swaps in the orange `Loader`; `unordered-list-story` mapped **desktop-only** (7 stacked Headings accumulate the known vertical-rhythm drift → ~4% on mobile, like GroupWrapper) + `-loading` mapped both viewports, see batch notes
- [x] UserInfoSummary `[mol]` (Legacy: legacy/src/design-system/components/molecules/user-info-summary) — label + `<h5>` name + detail `<p>`s; name uppercased via CSS `uppercase` (not `.toUpperCase()`) so AT keeps original casing; all text consumer-supplied (no hardcoded strings); baseline mapped both viewports (no divergence), see batch notes
- [x] Cart `[org]` (Legacy: legacy/src/design-system/components/templates/cart) — presentational 60/40 two-column shell (`[&>*:first-child]:lg:w-3/5` child-selector variants); no role, DOM order preserved; **no baseline** (legacy `cart-story` nests unmigrated DeliveryForm + CartProductList/CartProduct — the bulk of the frame); gallery-only Visual composes the migrated cart panels, deferred, see batch notes
- [x] CartDeliveryDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-delivery-details) — container with a busy state: `loading` lays a decorative `aria-hidden` scrim (`bg-surface-overlay/80`) + `aria-busy` region + **`inert` content** (legacy left dimmed controls focusable — a11y fix); **no baseline** (legacy frame is mostly the unmigrated DeliveryForm); gallery-only Visual, deferred, see batch notes
- [x] CartOrderDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-order-details) — `@deprecated` preserved (story under `Design System/Deprecated/`); white flex-col surface (`bg-surface-default`); **no baseline** (legacy frame is mostly the unmigrated CartProductList/CartProduct); gallery-only Visual, deferred, see batch notes
- [x] CartProductList `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-product-list) — **restored the dead-CSS list intent**: `<ul role="list">`/`<li>` (legacy named `.list`/`.listItem` but rendered a plain div); `Math.random()` keys→`Children.toArray`; dead `.collapsed`/`.expanded` scroll CSS dropped; **no baseline** (legacy frame composes unmigrated CartProduct), gallery-only Visual, deferred, see batch notes
- [x] CartSidebar `[org]` (Legacy: legacy/src/design-system/components/organisms/cart-sidebar) — presentational white vertical stack; non-idiomatic `classNames: string[]`→standard `className`; dead sibling CSS (`.headingWrapper`/`.text`/`.buttonsWrapper`) dropped; **no baseline** (legacy frame is inside the unmigrated DrawerSidebar, captured closed; nests CartProduct), gallery-only Visual, deferred, see batch notes
- [x] LoginPage `[org]` (Legacy: legacy/src/design-system/components/templates/login-page) — reclassified template→organism; full-viewport centred shell (`min-h-screen`, `bg-blue-500`); presentational (consumer owns `<main>`); **no baseline** (legacy frames centre the unmigrated LoginForm/AccountBoxList), gallery-only Visual, deferred, see batch notes
- [x] OrderConfirmation `[org]` (Legacy: legacy/src/design-system/components/organisms/order-confirmation) — centred content card, new `--container-order-confirmation` (58.125rem) token + `bg-background`; **no baseline** (all children migrated **except** the unmigrated CartProduct, which is a large part of the frame), gallery-only Visual, deferred, see batch notes
- [x] OrderConfirmationPage `[org]` (Legacy: legacy/src/design-system/components/templates/order-confirmation-page) — reclassified template→organism; centred shell on `bg-blue-500`; **no baseline** (nests the full OrderConfirmation → unmigrated CartProduct), gallery-only Visual, deferred, see batch notes
- [x] IconButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-button) — reclassified atom→molecule; keystone (unblocks 22); `type: 'button' | 'link'` union (link renders a semantic `<a>` via `src/lib/link` `DefaultLink` — legacy's link stub was a non-semantic `<div>`); **required `label`** → `aria-label` (legacy's link variant had NO accessible name); count badge dark-on-orange (white fails AA) + decorative (fold count into `label`); `busy` pulse via new `--animate-icon-pulse` token, motion-reduce gated; dropped dead `weight`/`animate:'updated'`. `small-button` + `over-100-products` baselines mapped both viewports (badge divergence under gate); `large-link`/`go-to-product` unmapped (legacy block-`<div>` link ≠ V2 inline `<a>`), see batch notes
- [x] LinkButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/link-button) — reclassified atom→molecule; button-styled semantic `<a>` (via `DefaultLink`), same surface tokens as Button; full-width block CTA by default (legacy `display:flex` parity — dropped dead `fullWidth`); disabled drops `href`/`onClick` + `aria-disabled` + leaves tab order; `link-button-story` baseline mapped both viewports (font divergence under gate; `-go-to-cart` is an identical frame), see batch notes
- [x] ProductVariant `[mol]` (Legacy: legacy/src/design-system/components/molecules/product-variant) — **restored valid semantics**: legacy wrapped a `<button>` around a `<RadioButton>` (nested interactive → axe `nested-interactive` fail); V2 is a `<label>`-wrapped single radio (selectable-card), `ariaLabel={variantName}`; dropped 6 dead props (country/salesUnit/itemNumberPerSalesUnit/outOfStock/isAccessoryPotItem/tags); decorative thumbnail; **no baseline** (legacy frame non-deterministic — remote CDN image + `undefined` label text), gallery-only Visual, see batch notes
- [x] ProductQuantityInput `[mol]` (Legacy: legacy/src/design-system/components/molecules/product-quantity-input) — number field (composes InputText) + price readout; **named the previously-unnamed input** via `labels.quantity` (3.3.1/4.1.2); illegal-char/paste guard via new InputText `onKeyDown`/`onPaste` passthrough props; all Swedish copy → `labels` object (English defaults); `input-quantity-story` baseline mapped both viewports (Visual overrides `labels` to Swedish), see batch notes
- [x] AlertBox `[mol]` (Legacy: legacy/src/design-system/components/atoms/alert-box) — reclassified atom→molecule; live region (`role="alert"` for error, `role="status"` for warning/information) + `aria-busy` loading over decorative Placeholder skeleton; icon+text (never colour-only); all contrast tokens ≥4.5:1; error/warning/information baselines mapped — **error + information desktop-only** (mobile full-width button amplifies the Button font divergence >2%, like GroupWrapper/UnorderedList), warning both viewports, see batch notes
- [x] FormGroup `[mol]` (Legacy: legacy/src/design-system/components/molecules/form-group) — labelled field wrapper; `cloneElement`-injects `aria-describedby` (→ helper + error ids) and `aria-invalid` onto the child control — the a11y upgrade over legacy's loose sibling messages (3.3.1); helper linked, error is a `role="alert"`; `labelRightText` (a link) renders beside the `<label>`, not inside it; extended InlineError with an `id` prop. All 8 baselines mapped (InputText/Textarea × 4 states); right-label link is accessible blue (orange fails AA, under gate), see batch notes
- [x] AccountBox `[mol]` (Legacy: legacy/src/design-system/components/molecules/account-box) — account-summary card + primary Button (label from `chooseAccountBtn.children`); presentational `<p>` lines (company name is bold `Text`, not a heading — no `heading-order` perturbation); both baselines mapped **desktop-only** (legacy's looser line-spacing drifts ~12px down the 5 info lines → >2% on the narrow mobile canvas only), see batch notes
- [x] CampaignBox `[mol]` (Legacy: legacy/src/design-system/components/atoms/campaign-box) — reclassified atom→molecule; expandable disclosure card — **restructured so the header/trigger sit OUTSIDE the ExpandableWrapper** (its collapsed content is `inert`; legacy nested the toggle inside → it would trap the trigger); toggle is a `<button aria-expanded aria-controls>` (extended ExpandableWrapper with an `id` prop); white-on-`color` text (consumer supplies ≥4.5:1); both baselines mapped both viewports, see batch notes
- [x] IconLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/icon-link) — reclassified atom→molecule; vertical CTA — underlined label above a circular icon badge, one `<a>` (via `DefaultLink`); label accessible blue+underline (legacy orange fails AA, small centred glyph under gate), badge glyph decorative; both baselines mapped both viewports, see batch notes
- [x] Newsletter `[mol]` (Legacy: legacy/src/design-system/components/molecules/newsletter) — email field + tertiary submit in a real `<form>` (Enter submits); **named the previously-unnamed input** (`labels.input`) and **added a `role="alert"` error message** wired via `aria-invalid`/`aria-describedby` — legacy signalled invalid email by red border only (1.4.1); Swedish copy → `labels` object; capped at `max-w-80` to match the legacy UA-intrinsic-width row; baseline mapped both viewports, see batch notes
- [x] CampaignMessage `[mol]` (Legacy: legacy/src/design-system/components/atoms/campaign-message) — reclassified atom→molecule; bordered box (decorative icon + uppercased message + primary CTA); message uppercased via CSS (`uppercase`, not `.toUpperCase()`) so AT reads it naturally; new `--color-highlight` token added this batch (for FaqList's `<mark>`); baseline mapped **desktop-only** (mobile `w-fit` box wraps the message one/two lines on a knife-edge vs the legacy capture), see batch notes
- [x] FaqList `[org]` (Legacy: legacy/src/design-system/components/molecules/faq-list) — reclassified molecule→organism; `role="list"` accordion of ClickableListItem disclosures (`aria-expanded`/`aria-controls`) + ExpandableWrapper panels (`role="region"`/`aria-labelledby`, APG pattern); `==kw==`→`<mark class="bg-highlight">`; answer typed `ReactNode` (legacy rendered an FC reference — a bug); **no baseline** (legacy shipped no story), gallery-only Visual, see batch notes
- [x] AdminSearch `[mol]` (Legacy: legacy/src/design-system/components/atoms/admin-search) — reclassified atom→molecule; controlled search + results dropdown; **named the previously-unnamed field** (`labels.input`), focusable labelled clear button, `role="status"` result-count announcement (`labels.results`), Escape/outside-click close; results are action `<button>`s in a labelled `role="list"` (not a formal combobox — results are actions, documented); added `'search'` to `InputTextType`; baseline = the closed bar mapped both viewports (dropdown behaviour-only), see batch notes
- [x] AgeVerificationForm `[mol]` (Legacy: legacy/src/design-system/components/molecules/age-verification-form) — title (`<h3>`) + description + choice Buttons + a persistent `role="alert"` error slot (announced on appear, never colour-only); **no baseline** (legacy story renders inside an unmigrated Modal), gallery-only Visual, see batch notes
- [x] ButtonWithTooltip `[mol]` (Legacy: legacy/src/design-system/components/atoms/button-with-tooltop) — reclassified atom→molecule; Button trigger inside `ComponentWithTooltip` (dropped the legacy `@radix-ui/react-tooltip` dep for the V2 tooltip — SC 1.4.13 hover+focus/dismissible/hoverable); **extended Button with `aria-describedby` forwarding** so the tip associates with the button (name=label, description=tip); `disabled` renders without the wrapper; baseline (closed button) mapped both viewports, see batch notes
- [x] UiDatePicker `[mol]` (Legacy: legacy/src/design-system/components/atoms/ui-date-picker) — reclassified atom→molecule; **built as a directed follow-up after Batch 17** per an explicit library decision. Dropped legacy `react-datepicker` for **`react-day-picker` v10** (regular dep, externalized in the Vite lib build like `lucide-react`; base CSS not imported — styled via `classNames`/`modifiersClassNames` with Tailwind tokens). Full-width Button trigger (surface x, calendar icon, `aria-haspopup="dialog"`/`aria-expanded`) opens a `role="dialog"` popover with `<DayPicker mode="single">` `disabled={(d) => !isDeliveryDay(d)}` (delivery-only) + a **custom `DayButton`** that styles the delivery/holiday/selected/today states through `cn()` (deterministic precedence — selected wins) at a fixed 40px centred box, with **free month navigation**; the library owns in-grid keyboard/ARIA, this wrapper owns focus-in / Escape+outside-click close + focus return. Selected day uses dark-on-orange (legacy white-on-orange fails AA). **Browser-verified** (spacing, day selection with a stateful trigger-label update, and Nov↔Dec navigation) after headless tests alone missed UX gaps. **This batch also generalised `Button` to forward all standard `<button>` attributes** (rest-spread — so ARIA-injecting wrappers compose). Both baselines (closed trigger) mapped both viewports; open calendar has no baseline (from-scratch), covered by play tests.
- [x] CookieBar `[mol]` (Legacy: legacy/src/design-system/components/atoms/cookie-bar) — reclassified atom→molecule; a **non-modal** `region` landmark (`<section aria-label>`), NOT a focus-trapping dialog — a passive cookie notice must not block the page (documented divergence from the naive "cookie-bar = modal" reading); info icon decorative, message + inline link + tertiary accept Button; `Escape` inside the bar dismisses (no trap); `labels.region` overridable (English default); baseline (fixed bottom bar) mapped both viewports, see batch notes
- [x] MultiSelect `[mol]` (Legacy: legacy/src/design-system/components/atoms/multi-select) — reclassified atom→molecule; disclosure `<button>` (`aria-haspopup`/`-expanded`/`-controls`) revealing a native checkbox group labelled by `name`; Escape + outside-click close with focus return to the trigger; hardcoded Swedish "valda" → overridable `labels.selectedCount` (English default); 3 closed-trigger baselines (land/producer/packaging) mapped both viewports (open popup behaviour-only), see batch notes
- [x] OrderItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/order-item) — two modes: **link card** (one chevron link — consolidated legacy's redundant double-link and fixed its `aria-label="Go to order undefined"` via a `labels.goToOrder` fallback; download link is a sibling, no nested anchors) and **inline card** (order-number/action are real `<button>`s, not an `onClick`'d `<h4>`); status text chip (never colour-only) + decorative icon; dropped dead `title`/`onDownload` props; order-number/chevron orange→accessible blue; 5 baselines mapped, **`mina-ordrar-2` desktop-only** (its dark blue tag amplifies the known Heading rhythm drift to ~3% on the 375px canvas only; the identical `mina-ordrar-1` + its own desktop frame pass), see batch notes
- [x] Search `[mol]` (Legacy: legacy/src/design-system/components/atoms/search) — reclassified atom→molecule; `<form role="search">` landmark, visually-hidden field label (placeholder≠label, 3.3.2), icon-only submit + focusable clear button with action `aria-label`s, results = labelled list of real links, Escape + outside-click close; typing only reports (no context change, 3.2.2); added `labels` (field/submit/clear/results, English defaults) + optional `onSubmit`/`linkComponent`; search glyph white→accessible black-on-orange; baseline (closed bar) mapped both viewports (results behaviour-only), see batch notes
- [x] SelectList `[mol]` (Legacy: legacy/src/design-system/components/molecules/select-list) — reclassified atom→molecule; disclosure `<button>` (`aria-haspopup`/`-expanded`/`-controls`) revealing a native radio group (single-select, native arrow-key nav, labelled by `placeholder`); Escape + outside-click close with focus return; dropped legacy JS left/right reposition + the no-op framer wrapper (documented simplification); no built-in UI strings; baseline (closed "Sortera" trigger) mapped both viewports (open group behaviour-only), see batch notes
- [x] Tabs `[mol]` (Legacy: legacy/src/design-system/components/molecules/tabs) — WCAG/APG tabs pattern (`tablist`/`tab`/`tabpanel`, `aria-selected`, roving `tabindex` + Arrow/Home/End); composes the migrated Button as `role="tab"` (selected = `surface="primary"`, kept focusable — legacy invalidly `disabled`-ed it); panels always rendered with `hidden` on inactive so `aria-controls` resolves; dropped the `isOpen` self-mount anti-pattern; **gallery-only** (legacy `tabs-story` = pre-open toggle, `mina-favoriter` = deep composite), see batch notes
- [x] ArticleList `[org]` (Legacy: legacy/src/design-system/components/organisms/article-list) — composes ArticleCard + Carousel; legacy per-count size/height/width heuristics ported; `swipe` → responsive Carousel, else wrapping flex grid; presentational (no landmark), `<h2>` title over the cards' `<h3>`. **Gallery-only**: reproduces the legacy frames faithfully but none is pixel-diffable — carousel/default legacy PNG is 805px vs the 800px viewport (auto-fail) + mobile is full-page; three-cards is full-page both viewports; full-width diffs 70% (locked ArticleCard `aspect-16/9` vs legacy ~4.8:1 banner). **Resolves Carousel's deferred baseline** (reproduced, not mappable — measured), see batch notes. Copied `pang.png`? no — reused existing `content9.webp`.
- [x] BrandDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/brand-details) — centred brand hero composing Picture/TagsList/Heading/Text/MaxWidth/UiLink; presentational (no landmark); `richText` typed `ReactNode` (legacy passed an un-rendered FC — a bug); dropped the CDN-only `?w=300` suffix; "Läs mer" orange→accessible blue. Copied `pang.png` into `src/assets/blog-images/`. Baseline mapped **desktop-only** (mobile Heading/Text vertical-rhythm drift ~5%, same amplification as GroupWrapper/AccountBox), see batch notes
- [x] Breadcrumbs `[org]` (Legacy: legacy/src/design-system/components/organisms/breadcrumbs) — correct WCAG breadcrumb pattern: `<nav aria-label>` + `<ol>`, links via UiLink (orange→accessible blue), **last crumb = current page** (`aria-current="page"` plain text, no link, no trailing chevron), decorative chevron separators; dropped the dead `image`/`title`/`textWidth`/`location` props (legacy commented-out); 3 frames (with-bg/without-bg share one V2 story, sustainability) mapped both viewports, see batch notes
- [x] MobileNavigation `[org]` (Legacy: legacy/src/design-system/components/molecules/navigation/mobile-navigation) — reclassified molecule→organism; native overlay drawer (Framer/`useOnClickOutside` reimplemented): hamburger toggle (`aria-expanded`/`-controls`) → mounted `<nav>` panel over a click-to-dismiss backdrop, focus-in + trap + `Escape`/backdrop close + focus return + body scroll-lock; nested `aria-expanded` accordion categories with `hidden` collapsed sub-lists; entrance simplified to a mount (non-essential); baseline = the CLOSED hamburger mapped both viewports (open panel behaviour-only), see batch notes
- [x] OfferCardList `[org]` (Legacy: legacy/src/design-system/components/organisms/offer-card-list) — thin ContentWrapper→Carousel wrapper composing OfferCard (`offsetArrows`, lg `perPage` = `maxPerPage`); presentational (no landmark; Carousel owns the labelled region + keyboard + swipe), required `ariaLabel`, `carouselLabels` forwarded. **Unlike its ArticleList sibling it IS pixel-mappable** — the legacy PNG fits the viewport (1280×800 / 375×667, measured) and offer cards are text-only/deterministic; baseline mapped both viewports (passed clean), see batch notes
- [x] ProductVariantList `[org]` (Legacy: legacy/src/design-system/components/molecules/product-variant-list) — reclassified molecule→organism; single native radio group (`<fieldset>` + sr-only `<legend>`) of ProductVariant cards, non-modal dismiss (close IconButton + `Escape` + outside-`pointerdown`, no trap), legacy two-swapping-Framer scroll buttons collapsed into one scroll-toggle; **gallery-only** (legacy PNG full-page 1280×1195 / 375×1195 + non-deterministic child thumbnails), see batch notes
- [x] AddToCartButton `[mol]` (Legacy: legacy/src/design-system/components/atoms/add-to-cart-button) — reclassified atom→molecule; morphs qty-0 add `<button>` (visible `buttonLabel` = accessible name; dropped the legacy empty label + redundant `aria-label`) ↔ a labelled `role="group"` stepper (−/+ IconButtons + one-named number field); Framer scale drops. Legacy baseline is an **empty** pill (unnamed button — an axe fail), so the V2 frame shows the real CTA: a ~180×32px white-on-blue text delta (<0.6% canvas) **under the 2% gate**, mapped both viewports, see batch notes
- [x] DrawerSidebar `[mol]` (Legacy: legacy/src/design-system/components/molecules/drawer-sidebar) — the canonical modal focus-trap: `<div role="dialog">` + `aria-modal`, required `ariaLabel`, focus-in to close button + Tab trap + `Escape`/backdrop/outside-click close + **focus return to the pre-open element** (`document.activeElement`, since the trigger is the consumer's), body scroll-lock, Framer slide gated on reduced-motion. `role="dialog"` on `<aside>` fails axe `aria-allowed-role` → panel is a `<div>`. **Gallery-only** (legacy captures only the closed state = a bare consumer trigger; Visual shown open), see batch notes
- [x] Form `[mol]` (Legacy: legacy/src/design-system/components/molecules/form) — config-driven template composing FormGroup + InputText (grid, `size:'full'`→`col-span-2`) + Button/LinkButton/UiLink; submit gated on validity (required + `pattern` email/password/age + `matchField` compare), `role="alert"` general error, `role="status"` success panel; dropped `dangerouslySetInnerHTML`→`ReactNode`, autofill dance, `focusOnRender` autofocus, native bubbles (`noValidate`). Both baselines (standard-form + compare-two-fields) mapped both viewports (passed clean — composed children carry their own verified styling), see batch notes
- [x] FooterTopBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/footer-top-bar) — labelled `<nav>` + `<ul>` of `LinkButton` pills (login/register/contact type→icon); pills collapse to icon-only circles below `md` and the label is `display:none`-hidden, so each link carries an explicit `ariaLabel={label}` (fixes the legacy unnamed-on-mobile link); reused `--spacing-footer-bar-*` tokens; baseline mapped both viewports (deterministic), see batch notes
- [x] Hero `[mol]` (Legacy: legacy/src/design-system/components/molecules/hero) — full-bleed Picture/Video + overlaid content column (eyebrow, `Heading`, preamble, up to two `LinkButton` CTAs) in a ContentWrapper; `headingLevel` couples level+size; dropped the non-essential `fadeIn` entrance; text-over-media passes axe via `<img>` overlap (incomplete, not violation). **Gallery-only** (legacy frames are remote media — non-deterministic; local-asset `Visual*` for the gallery only), see batch notes
- [x] SocialMediaLink `[mol]` (Legacy: legacy/src/design-system/components/atoms/social-media-link) — reclassified atom→molecule; round `LinkButton` (`noBorder`, `bg-icon-bg-blue`) around a decorative `Icon`; required `label` = accessible name; three baselines (facebook/instagram/linkedin) mapped both viewports (the ~40px chip is <0.2% of the canvas → icon-set glyph delta under gate), see batch notes
- [x] CartProduct `[org]` (Legacy: legacy/src/design-system/components/molecules/cart-product) — reclassified molecule→organism; `<article>` with a `<h5>` name (becomes an `<a>` when `productUrl` set) + purple price line + grey meta + read-only `ProductQuantityInput`; optional remove `IconButton` named via `labels.remove`; `loading`→`role="status"` Loader; consolidated legacy conflicting label/name pairs. **Gallery-only** (legacy product image is a broken remote CDN thumbnail — non-deterministic), see batch notes
- [x] DesktopNavigation `[org]` (Legacy: legacy/src/design-system/components/molecules/navigation/desktop-navigation) — reclassified molecule→organism; legacy hover Framer mega-menu → accessible disclosure-nav: labelled `<nav>`, plain `<a>` top-levels + category `<button aria-expanded/aria-controls>` (one panel open), `Escape` closes + focus return, outside-`pointerdown` close, `aria-current` active item; legacy active-orange (fails AA on white) → accessible blue text + blue underline + bold; reuses MobileNavigation's `NavItem`/`NavLink`/`NavCategory` (exported once). **Gallery-only** (only legacy baseline is the empty loading shimmer; real menu needs interaction), see batch notes

### Build queue (11 pending, dependency-ordered)

#### Tier 0 — buildable now (deps already migrated) — **Tier-0 is exhausted: every remaining entry is a ⛔ BLOCKED story-only template.** Real leaves continue in Tier 1.

- [ ] ⛔ **BLOCKED** BrandPage `[org]` (Legacy: legacy/src/design-system/components/templates/brand-page) — **NOT a leaf.** Story-only "GUIDELINE" template (no `.tsx`); the dep graph mis-marked it a leaf because `deps.cjs` only reads `.tsx` imports and this component has none. Its real deps live in `brand-page.stories.tsx`: Header, Footer, Hero, BrandDetails (all **unmigrated**). Build after those organisms land.
- [ ] ⛔ **BLOCKED** CampaignPage `[org]` (Legacy: legacy/src/design-system/components/templates/campaign-page) — **NOT a leaf** (same story-only flaw). Real deps in `campaign-page.stories.tsx`: Header, Footer, HeroCarousel (all **unmigrated**). Build after those land.
- [ ] ⛔ **BLOCKED** ChooseUserPage `[org]` (Legacy: legacy/src/design-system/components/templates/choose-user-page) — story-only "GUIDELINE" template (no `.tsx`; dep-graph false leaf). Real deps live in the stories file (unmigrated organisms). Build after those land — verify against source before scaffolding.
- [ ] ⛔ **BLOCKED** ContactPage `[org]` (Legacy: legacy/src/design-system/components/templates/contact-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ⛔ **BLOCKED** ContentPage `[org]` (Legacy: legacy/src/design-system/components/templates/content-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ⛔ **BLOCKED** InspirationPage `[org]` (Legacy: legacy/src/design-system/components/templates/inspiration-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ⛔ **BLOCKED** MySpendrupsPage `[org]` (Legacy: legacy/src/design-system/components/templates/my-spendrups-page) — story-only (no `.tsx`; false leaf). Deps in stories, unmigrated. Defer.
- [ ] ⛔ **BLOCKED** ProductCategoryListingPage `[org]` (Legacy: legacy/src/design-system/components/templates/product-category-listing-page) — **NOT a leaf** (story-only, no `.tsx`; dep-graph false leaf, verified 2026-07-08). Real deps in `product-category-listing-page.stories.tsx`: Header, Footer, Breadcrumbs, DynamicFilter + atoms/molecules barrels (all **unmigrated**). Build after those land.
- [ ] ⛔ **BLOCKED** ProductPage `[org]` (Legacy: legacy/src/design-system/components/templates/product-page) — **NOT a leaf** (story-only, no `.tsx`). Real deps in `product-page.stories.tsx`: Header, Footer, ProductDescription, ProductDetails (all **unmigrated**). Defer.
- [ ] ⛔ **BLOCKED** ShoppingListPage `[org]` (Legacy: legacy/src/design-system/components/templates/shopping-list-page) — **NOT a leaf** (story-only, no `.tsx`). Real deps in `shopping-list-page.stories.tsx`: Header, Footer, MessagePopup, InfoSummaryBox, OrderConfirmationDetails, ScrollableList (all **unmigrated**). Defer.
- [ ] ⛔ **BLOCKED** StartPageTemplate `[org]` (Legacy: legacy/src/design-system/components/templates/start-page-template) — **NOT a leaf** (story-only, no `.tsx`). Real deps in `start-page-template.stories.tsx`: Header, Footer, HeroCarousel, OfferCardList, Teaser (all **unmigrated**). Defer.

#### Tier 1 — unlocked after Tier 0 — **exhausted** (OfferCardList landed in Batch 20; real leaves continue in Tier 2)

#### Tier 2 — unlocked after Tier 1

- [x] HorizontalVariant `[org]` (Legacy: legacy/src/design-system/components/molecules/horizontal-variant) — Batch 22; reuses `ProductVariantProps` (radio-in-group model, `<label>`+hidden native radio); no baseline (gallery-only — only rendered inside the unmigrated `horizontal-variants` carousel)
- [x] ProductSearch `[org]` (Legacy: legacy/src/design-system/components/molecules/product-search) — Batch 22; built as a pair with ProductSearchResultItem (owns the `ProductSearchResult`/`ProductSearchVariant` model + export); 2 baselines mapped (both legacy stories captured the CLOSED bar)
- [x] AlertMessage `[mol]` (Legacy: legacy/src/design-system/components/atoms/alert-message) — Batch 22; contrast fix (error white→dark ink) + distinct severity glyph (legacy severity was colour-only, 1.4.1); 3 baselines mapped
- [x] FaqHero `[mol]` (Legacy: legacy/src/design-system/components/molecules/faq-hero) — Batch 22; real `ariaLabel` field name (not placeholder-as-label); no baseline (gallery-only — never captured standalone)
- [x] LinkListItem `[mol]` (Legacy: legacy/src/design-system/components/molecules/link-list-item) — Batch 22; one row link (decorative chevron, dropped legacy's duplicate 2nd link) + `IconButton type=link` download; 5 baselines mapped
- [x] MessagePopup `[mol]` (Legacy: legacy/src/design-system/components/atoms/message-popup) — Batch 23; reclassified atom→molecule. Not a modal — a non-modal `role="status"` callout (blue bubble + downward tail + decorative leading icon + localisable close `IconButton`). 1 baseline mapped **gated** (legacy story was `isOpen:false` → the CLOSED/empty frame; reproduced faithfully, both viewports pass)
- [x] Modal `[mol]` (Legacy: legacy/src/design-system/components/molecules/modal) — Batch 23; full accessible dialog rewrite (`role="dialog"` + `aria-modal`, required `ariaLabel`, focus-trap + move-in/return, `Escape` always closes, `dismissable` gates backdrop click, scroll-lock, reduced-motion). **Backdrop is a SIBLING of the dialog, not a parent** — a semi-transparent `aria-hidden` backdrop wrapping the dialog hides it from AT and fails contrast; new `z-modal` (1000) token. No baseline (legacy frame wraps the unmigrated CreateListForm → current-only, revisit when it lands)
- [x] QuantityChanger `[mol]` (Legacy: legacy/src/design-system/components/molecules/quantity-changer) — Batch 23; labelled `role="group"` stepper (−/+ `IconButton`s + native number field with `aria-label`, spinner-hide, focus ring); bounds enforced by disabling at 0/`maxQuantity` (state not colour-only). No baseline (no legacy story/snapshot → no `['visual']` story)
- [x] SortableList `[mol]` (Legacy: legacy/src/design-system/components/molecules/sortable-list) — Batch 23; composes migrated SortableListItem. Sort controls merged legacy's duplicate name-button+arrow into ONE `<button aria-pressed>` per option (bold+underline+chevron, never colour-only); `<ul>`/`<li>` + labelled sort row; `Loader` for loading. 1 baseline mapped **reviewOnly**: desktop matches within gate, but mobile ~3% (measured) from a font-metric wrap flip at the ~171px column ("E-HANDELSFRÅGOR" wraps in legacy, one line in V2; `order={5}` size is byte-identical) — both viewports stay paired for sign-off
- [x] Table `[mol]` (Legacy: legacy/src/design-system/components/molecules/table) — Batch 23; reclassified atom→molecule + **div-grid → semantic `<table>`** (`<th scope>`, `aria-sort`, keyboard sort `<button>`s), action cells are named `IconButton`s, `role="status"` loading skeleton. **Desktop** columns pack left at natural width with the last text column absorbing slack (legacy `.lastTextColumn{flex:1}`) so actions push right; **mobile (< md)** gives way to the legacy **stacked "label: value" card** per row (matches the legacy mobile design pixel-close). 2 baselines mapped **reviewOnly** (semantic `<table>` still can't fully pixel-match the legacy `<div>` grid on desktop — lucide-vs-icomoon chevrons, cell borders; `table-story` desktop-only — its legacy mobile PNG was full-page 1436px)
- [x] Teaser `[mol]` (Legacy: legacy/src/design-system/components/molecules/teaser) — Batch 24. Both legacy frames (round + square) are full-page captures taller than the viewport → **reviewOnly** (faithful scene; RobotoSlab `font-secondary` heading for brand parity). `richText` typed as `ReactNode` (no RichText molecule dep).
- [x] TopNavBar `[mol]` (Legacy: legacy/src/design-system/components/molecules/top-nav-bar) — Batch 24. **No baseline** — every legacy PNG is blank (the story passed a `links` prop the component never read AND its layout used JS-media-query render-props that resolved to nothing at capture → early-returned `null`). V2 drives layout with responsive `display` utilities; gallery-only, behaviour covered by play tests.
- [x] AccountBoxList `[org]` (Legacy: legacy/src/design-system/components/organisms/account-box-list) — Batch 24. **No baseline** — the legacy logo rendered at full intrinsic size (dead `--logotype-height-*` token) overlapping the heading; V2 constrains it → intentionally different (fixed) scene → gallery-only. Cards validated by AccountBox's mapped frames.
- [x] CreateListForm `[org]` (Legacy: legacy/src/design-system/components/organisms/create-list-form) — Batch 24. **Gated + green.** Field spacing fixed (user review): the two `FormGroup`s stacked with 0 gap, so restored the legacy `input { margin-bottom }` rhythm with `md:space-y-7` between them → desktop submit y=489 vs legacy 490. Plain frame mapped **desktop-only** (legacy logo rendered unconstrained ~70px vs V2's normalised 32px `Logotype`; on the 375px canvas that shifts the stack >2% — same call as AccountBoxList's logo). `-loading` frame gated + green on both viewports (overlay covers the form). Title matched to legacy `.h3`=`h-m`; orange "read more" link → accessible blue+underline.
- [x] DeliveryForm `[org]` (Legacy: legacy/src/design-system/components/organisms/delivery-form) — Batch 24. **Gated + green, both viewports.** Disclosure toggle (`aria-expanded`/`aria-controls`, `hidden` collapsed region); summary uses `role="group"` + `aria-labelledby` (legacy `<label htmlFor>`→`<div>` was invalid). Orange toggle → accessible blue+underline.
- [x] FaqGroup `[org]` (Legacy: legacy/src/design-system/components/molecules/faq-group) — Batch 25; composes migrated FaqList. Rewritten as a named `<section aria-label={title}>` region + `<h3>` (`Heading`), an optional **decorative** category icon (`alt=""` by default — the visible title already names the group, so legacy's redundant `alt="Icon for {title}"` was dropped; consumer can pass `imgAlt`), and an optional `UiLink` "view more" (orange legacy link → accessible blue). Legacy's bare `<li>` (invalid standalone) + `<article>` wrapper → `<section>` + plain `<div>`. **No baseline** (legacy shipped no story/snapshot) → gallery-only. No built-in strings (all copy consumer-supplied) → no `labels`.
- [x] InvoiceList `[org]` (Legacy: legacy/src/design-system/components/molecules/invoice-list) — Batch 25; reclassified molecule→organism. Full React 19 rewrite: dropped `framer-motion` (download-spinner swap) and the JS `mediaQueryHelper` (responsive Tailwind instead). Unpaid rows first (capped at 4, overflow behind an `aria-expanded`/`aria-controls` disclosure `<button>`), then paid rows grouped by month under `<h3>`s. **Date pill is `role="img"` + `aria-label`** — a bare `aria-label` on a `<span>` is an axe `aria-prohibited-attr` fail, and role=img keeps overdue state off colour-only (1.4.1). Per-row detail toggle is a native `<button>`+`Icon` (IconButton forwards no `aria-*`). Download = `IconButton` (link when `downloadUrl`, else button), swapped for a `LoadingOverlay` spinner while `downloadingId` matches, optionally wrapped in `ComponentWithTooltip`. Skeleton is a decorative `<div aria-hidden>` + a persistent polite `role="status"`. **All built-in strings (were Swedish/English) → overridable `labels` (English defaults); dates via a `locale` prop + `Intl` — no baked month names.** No baseline → gallery-only. **Styling-fidelity pass (user review):** overdue date pill matches legacy solid `#ce0b0b` + white (the `icon-critical` token, ~5.7:1 AA); row titles `font-semibold` (legacy 600, not bold); **paid** amounts drop their border on desktop (`lg:border-transparent`, legacy `.paidAmount`) while **unpaid** amounts keep the pill — the paid-vs-unpaid emphasis distinction. **Date pill + credit chip + skeleton were `bg-action-secondary`, which resolves to WHITE** (near-invisible on the page); corrected to `bg-grey-300` (legacy `--grey-300` = #e6ecee, the cool blue-grey confirmed against a production screenshot). Unpaid row relaid out as a 2-column flex (title + collapsible details + "expires" note on the left with **no column-gap**, amount/credit/download on the right) — the old `gap-2` column left a double gap around the *collapsed* `ExpandableWrapper`, pushing "Due in …" far below the title (user review). Split into dedicated **`Unpaid`** and **`Paid`** `['visual']` stories (plus the mixed `Visual`) so each type is reviewable in isolation.

#### Tier 3 — unlocked after Tier 2

- [x] HorizontalVariants `[org]` (Legacy: legacy/src/design-system/components/molecules/horizontal-variants) — Batch 25; reclassified molecule→organism. Dismissible variant picker = a horizontal `Carousel` of `HorizontalVariant` cards forming ONE native radio group. **Dropped the fieldset/legend**: the Carousel track is already `role="group"`, so a same-named fieldset produced a duplicate named group (`getByRole('group')` ambiguity) — the Carousel `ariaLabel` names the group; radios group via shared `name`. Non-modal dismiss (Escape + outside pointer + close `IconButton`), **rendered only while `open`** (legacy stayed mounted translated off-screen → stale a11y tree). Dropped the framer slide + the on-select reorder (moving radios on selection breaks keyboard focus order). No baseline → gallery-only.
- [x] ProductCardRestricted `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-restricted) — Batch 30; reclassified molecule→organism. The trimmed vertical card for restricted users (no price/quantity) — status markers, thumbnail, name, country, packaging disclosure, add-to-cart. `<article aria-label>`; image link is `aria-hidden`/`tabIndex=-1` (pointer-only twin of the name link, so it isn't a nameless link); seller/accessory markers are named `role="img"` graphics; opens `ProductVariantList` (`isRestrictedUser`) in place of the card. Fixed width `w-container-product-card` (18.75rem, legacy `--product-card-width-vertical`), `h-104`. **2 baselines mapped reviewOnly** (`-story`, `-no-variants`). 4/4 scoped tests.
- [x] ProductCardVertical `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-vertical) — Batch 30; reclassified molecule→organism. Standard vertical card composing `Picture`+`TagsList`+`Button`+`IconButton`+`ProductQuantityInput`+`ProductVariantList`. `<article aria-label>`; ribbon precedence campaign>limited>outOfStock (campaign = runtime colour, limited/outOfStock = accessible grey over legacy white-on-orange which fails AA); packaging button is an `aria-expanded`/`aria-haspopup` disclosure (`ButtonWithTooltip`) that replaces the card with `ProductVariantList` when open; favourite/purchase-list `IconButton`s named via `labels`+`tooltips`. `h-product-card-v` (30.5rem). **6 baselines mapped reviewOnly** (`-story`, `-with-campaign`, `-no-variants`, `-favorite`, `-favorite-active`, `-add-to-purchase-list`; with-campaign/favorite-active are byte-identical twins — the `campaign` arg was vestigial). 8/8 scoped tests.
- [x] ProductDetails `[org]` (Legacy: legacy/src/design-system/components/organisms/product-details) — Batch 26; full React 19 rewrite composing the migrated molecules (Picture, Tag, LoadingBars, CampaignBox, AlertBox, AddToCartButton, Button, IconButton, IconWithTooltip, ProductVariantList). Legacy split into 7 sub-components (Icons/ProductInfo/ProductSpecs/CampaignsAlerts/Actions/MobileActions/VariantSelector) + a JS `mediaQueryHelper` + a scroll-observer-driven sticky mobile action bar + Framer transitions — all collapsed into one responsive component (the sticky mobile bar + Framer are **dropped** as non-essential). Rendered as an `<article aria-labelledby>`; add-to-cart is the morphing `AddToCartButton` (disabled — not hidden — when out-of-stock/unavailable so state reaches AT); the packaging button toggles a **render-while-open** `ProductVariantList` (no dangling `aria-controls`); seller-only/accessory markers use `IconWithTooltip` (meaning not colour-only). **All built-in strings → overridable `labels` (English defaults)**; price total via an injectable `formatPrice` (no baked locale). **No baseline — all four legacy `product-details` snapshots are Storybook error frames** (`convertNumToStr(undefined)` → "Cannot read properties of undefined (reading 'toFixed')"), so gallery-only. 9/9 scoped tests (interaction + a11y).
- [x] ProductSearchResultItem `[org]` (Legacy: legacy/src/design-system/components/atoms/product-search-result-item) — Batch 22; built together with ProductSearch (the "needs: ProductSearch" was a **type-only** cycle — imports the `ProductSearchResult` model, no runtime dep); disclosure toggle for variants; no baseline (only rendered inside the ProductSearch dropdown, whose baseline is the closed bar)
- [x] Slider `[org]` (Legacy: legacy/src/design-system/components/atoms/slider) — Batch 26; reclassified atom→organism (composes the `InputText` molecule for the optional `withFields` inputs). Dual-thumb range rebuilt as **two overlaid native `<input type="range">`** (dropping the `react-input-range` dep), so each thumb gets `role="slider"` + `aria-valuemin/max/now` + arrow-key operation for free; each carries an overridable `aria-label` (`labels.minThumb`/`maxThumb`), thumbs stay strictly ordered unless `allowSameValues`, and the focused thumb shows a `focus-visible` ring. Thumbs are 16px (2.5.8 spacing exception — far apart across the track). Legacy floating value labels dropped (read values from the fields). **1 baseline mapped, GATED + green both viewports** (`design-system-atoms-slider--slider-story`). 5/5 scoped tests. **Test note:** `userEvent.keyboard('{ArrowRight}')` does **not** step a range input in the vitest-browser env — drive value changes with `fireEvent.change` and assert the reported range instead.
- [x] VerticalVariants `[org]` (Legacy: legacy/src/design-system/components/molecules/vertical-variants) — Batch 25; reclassified molecule→organism. Same shape as HorizontalVariants but a **vertical** `Carousel` (`direction="vertical"`, `trackClassName="max-h-96"`, `hidePagination`) of `ProductVariant` tiles — legacy's `vertical-variant` wrapper collapses into the migrated `ProductVariant` per ATOMIC-MAP. Same fieldset-drop / render-while-open / dismiss model as HorizontalVariants. No baseline → gallery-only. **Close button fix (user review):** moved from an `absolute top-2 right-2` overlay into a normal-flow header row — the overlay sat on top of the first variant's right-edge radio; same fix applied to HorizontalVariants.
- [x] SocialMediaLinks `[mol]` (Legacy: legacy/src/design-system/components/molecules/social-media-links) — Batch 25; composes migrated SocialMediaLink. Semantic `<ul role="list">` with each link in its own `<li>` (legacy put anchors directly under `<ul>` — invalid), named via an overridable `label` (default "Social media"). Flush layout (no gap) reproduces the legacy frame. **1 baseline mapped, gated + green both viewports** (`social-media-story`).
- [x] Footer `[org]` (Legacy: legacy/src/design-system/components/organisms/footer) — Batch 26; composes migrated FooterTopBar + Logotype + Newsletter. One `<footer>` (contentinfo) wraps the quick-links bar, a body (self-contained `Logotype` home link, optional `Newsletter`, `<address>`, social children) and a blue bottom bar — so every region is inside the landmark; the link columns are a labelled `<nav>` of `<ul>`/`<li>` under real headings, links are real `<a>`/`linkComponent` with a non-colour-only hover. Replaced the legacy `logo`-**object** slot (which rendered a raw object → the reason **both legacy snapshots are Storybook error frames**: "Objects are not valid as a React child") with the `Logotype` component. **No baseline** (both frames are crashes) → gallery-only. 5/5 scoped tests.
- [x] Header `[org]` (Legacy: legacy/src/design-system/components/organisms/header) — Batch 26; slot-based `<header>` (banner) shell. Replaced the legacy JS `mediaQueryHelper` (rendered one layout at a time; left the header blank when it resolved to nothing) with responsive `display` utilities — the inactive layout is `display:none` (out of the a11y tree; duplicated controls need `getAll*` in tests). No built-in strings (all slots consumer-supplied) → no `labels`. While `loading`, the mobile menu → `Loader` and the desktop nav → `DesktopNavigation` busy placeholder. **1 baseline mapped, `reviewOnly`** (`standard-header`): the Visual story composes ~8 brand sub-components across viewport-specific layouts (brand fonts/icons + accessible colours) — faithful scene, can't pixel-match within 2%. 3/3 scoped tests.
- [x] HeroCarousel `[org]` (Legacy: legacy/src/design-system/components/organisms/hero-carousel) — Batch 26; thin wrapper — one `Hero` per slide in a single-per-page `Carousel` with `arrowsWithDots`. Legacy Splide `autoplay`/`loop` **dropped** (no auto-advance → nothing to pause (2.2.2) / no motion to suppress). Migrated the `Pistonhead_Hero.svg` + `pistonhead_logo.svg` assets so the Visual story reproduces `HeroCarouselPistonheadStory`; **1 baseline mapped, `reviewOnly`** (`hero-carousel-pistonhead-story`) — full-bleed brand SVG + brand-font text past the 2% gate. The sibling `hero-carousel-story` is **NOT mapped** — its first slide is a background **video** (non-deterministic). 3/3 scoped tests. **Reusable bug found:** passing `gap="0"` (unitless) to `Carousel` makes the slide-width `calc(100% − …·0)` invalid (CSS can't subtract a unitless `0` from a `%`), so `flex-basis` drops and slides collapse to 0 → no overflow → no arrows/dots. Use **`gap="0px"`**.
- [x] LoginForm `[org]` (Legacy: legacy/src/design-system/components/organisms/login-form) — Batch 27; composes `FormGroup`+`InputText`+`Button` directly (like CreateListForm), native `<form>` with `preventDefault` (credentials never hit a URL). Accessible-auth (3.3.8): `autoComplete` username/current-password, paste allowed, no CAPTCHA. Loading = disabled fields + form `aria-busy` + sr-only `role=status` + submit spinner (legacy `Form` disables fields, has **no** overlay/scrim — unlike CreateListForm). Orange links → accessible blue+underline; `errorMessage` retyped `ReactNode` (was legacy `any`+`dangerouslySetInnerHTML`). **`primarySubmitLabel` is optional** — the legacy `Visual`/loading frames rendered **no** button (the legacy `Form` only renders buttons from `actions`, which the stories never passed), so the parity stories omit it while Default/Loading/Localized supply + test the real submit. Only self-rendered string is `labels.loadingStatus`. **2 baselines mapped, GATED desktop-only** (`login-form-story`, `login-form-story-loading`): the legacy **mobile** card forces `height:calc(100vh-2rem)` (full-viewport) vs V2 content-height → ~14%/41% white-band mismatch; desktop card is content-height in legacy too → matches (loading = same disabled tokens, confirmed pixel-match, not reviewOnly). 6 stories.
- [x] ProductToast `[org]` (Legacy: legacy/src/design-system/components/molecules/product-toast) — Batch 27; reclassified molecule→organism. Non-modal **`role=status` polite** "added to cart" confirmation (NOT `alert`; no focus move, no trap) composing migrated `CartProduct` + `IconButton`. Dismiss via a visible close button shown at **all** breakpoints (legacy hid it `display:none`@64em, leaving only click-outside), `Escape`, and outside-pointer press (document listeners wired only when `onClose` is supplied). Recommended slot = consumer-supplied `children` after a divider (+ optional `recommendedProductsTitle`) — legacy's `recommendedProducts` story args were **vestigial** (never consumed by the component), so no unmigrated card is imported. Slide-in gated on `useReducedMotion()`; auto-dismiss timing is the consumer's. **No baseline** — all four legacy PNGs (`product-toast-story[-with-recommended-products]-{desktop,mobile}`) captured the **CLOSED/empty** canvas (story `useState(false)` + a 3s auto-close interval → toast never on screen at capture), so the V2 open-toast Visual is a *different* scene → current-only + NOTE (same closed-state-baseline class as DrawerSidebar), **not** reviewOnly. Deterministic Visual via CartProduct's own local `defaultFallbackImage.svg`. 6 stories.
- [x] ResetPasswordForm `[org]` (Legacy: legacy/src/design-system/components/organisms/reset-password-form) — Batch 27; a thin branded card composing `Logotype` + the migrated `Form` molecule, which already implements the confirm-password match gate (`aria-invalid` + `aria-describedby` mismatch `role=alert`, submit disabled while invalid) and the success `role=status` region — so the organism only adds the card + logo + reset-specific `labels`. Password fields `type=password` + `autoComplete=new-password`; purpose-shaped `onSubmit(password)` maps the Form's `Record<string,string>` submit down. `defaultResetPasswordFormLabels` kept module-private (mirrors `Form`'s `defaultFormLabels`); the `Labels` **type** is exported. **No baseline** — the legacy dir ships no `.stories.tsx`/snapshot (re-verified vs the de-hyphenated `resetpassword` stem) → gallery-only. 5 stories (Default/ErrorState/SuccessState/Localized/Visual).
- [x] UserProfileDropdown `[org]` (Legacy: legacy/src/design-system/components/molecules/user-profile-dropdown) — Batch 27; reclassified molecule→organism. Icon-only **disclosure trigger** = a native `<button aria-haspopup="dialog" aria-expanded aria-controls aria-label>` (the `MenuButton` precedent) — **NOT `IconButton`**, which doesn't spread rest props so `aria-expanded`/`aria-controls`/`id` can't reach the element (inlined IconButton's medium/white class recipe for parity). Opens a composed `DrawerSidebar` that owns focus move-in / trap / `Escape`-close / **focus-return-to-trigger** / scroll-lock (not duplicated). Hybrid API: controlled `open`+`onOpenChange` OR uncontrolled `defaultOpen` (`const isOpen = open ?? uncontrolledOpen`) — lets the play-less `VisualOpen` render open purely from `args`. Menu links `text-text-blue`+underline (legacy was colour-only navy). `aria-controls`→unmounted content is axe-safe while `aria-expanded="false"`. **2 baselines mapped**: `--visual` (closed trigger) **GATED both viewports** (icomoon→Lucide User glyph swap on a near-empty canvas, far under gate); `--visual-open` **reviewOnly** — DrawerSidebar's large-area `bg-blue-500/90`+blur backdrop, an a11y-required close (X) the legacy panel lacked, and accessible links exceed 2%; drawer content is an authored stand-in for the unmigrated `UserInfoSummary`/`DropdownList`. 4 stories.

#### Tier 4 — unlocked after Tier 3

- [x] ProductCardHorizontal `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-horizontal) — Batch 30; reclassified molecule→organism. Row card composing `Picture`+`TagsList`+`ProductQuantityInput`/`DebounceInput`+`IconButton`+`Button`+`AlertBox`+`HorizontalVariants`. `<article aria-label>`; every icon control (remove/open-variants/purchase-list/favourite/cart) carries an explicit `label` (+ optional tooltip via `ComponentWithTooltip`); the mobile alert-box affordance is a non-modal slide-up panel gated on `useReducedMotion()` with Escape/outside-pointer dismiss (mobile via `useBreakpoint().isMobile`, matching legacy `mediaQueryHelper`); desktop uses `ButtonWithTooltip`. Preserved the legacy `debounceQuantityVal` branch, the `quantity <= '0'` disabled check, and `getQuantityLabel` interpolation. **1 baseline mapped reviewOnly** (`product-card-horizontal`). 3/3 scoped tests.
- [x] ProductCardMiniVertical `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-mini-vertical) — Batch 28; reclassified molecule→organism. Controlled/presentational rewrite composing `Picture`+`Tag`+`Button`+`IconButton`+`AddToCartButton`+`VerticalVariants` — dropped the legacy internal cart-quantity debounce + `variantsInCart` sync (app concerns). `<article aria-label={productName}>`; name → accessible dark link (legacy orange fails AA); seller-only/accessory("S", dark-on-orange) markers are named `role="img"` graphics (not colour-only); packaging button is an `aria-expanded` disclosure toggling a render-while-open `VerticalVariants`; skeleton + polite `role="status"` while `loading`. **Layout-agnostic** (`w-full`, fills its grid cell — legacy hard-coded 50%/100%, now the consumer's concern). The **variant picker is an absolute overlay covering the card** (`absolute inset-0 z-20 bg-white`, legacy `position:absolute; inset:0`) — NOT an in-flow panel below the CTA — and the **add-to-cart is full-width** (`w-full max-w-none` over AddToCartButton's default `max-w-45`), both matching legacy (user-review fixes). All built-in strings → overridable `labels` (interpolated `quantitySummary` is a function); children take `addToCartLabels`/`variantsLabels`. **1 baseline mapped reviewOnly** (`product-card-mini-vertical`): measured desktop ~4% / mobile ~6% (accessible-colour fixes + brand secondary font + icomoon→Lucide glyphs + V2 fallback illustration vs legacy grey placeholder + minor CTA-bar vertical drift). 5/5 scoped tests. Interactive stories carry an `inCardCell` decorator (~20rem) so the mini card + overlay review at a realistic grid-cell width.
- [x] RangeInput `[org]` (Legacy: legacy/src/design-system/components/atoms/range-input) — Batch 28; reclassified atom→organism. A **thin wrapper over the migrated `Slider`**: derives `{min, max, step}` from the `steps` array (step = smallest consecutive gap) and **snaps every reported value to the nearest step**, delegating the fields/thumbs/two-way-binding/a11y to `Slider` (so real values — not indices — are announced/typed, replacing the legacy `rc-slider` index domain). Adds the two end format labels; dropped the legacy debounce (3.2.2 context-change-free). Assumes ascending steps. **No baseline** (legacy shipped no story/snapshot) → gallery-only. 5/5 scoped tests.
- [x] ProductDescription `[org]` (Legacy: legacy/src/design-system/components/organisms/product-description) — Batch 28; accordion composing `Button`. Legacy Framer `AnimatePresence` slide → plain `aria-expanded`/`aria-controls` disclosures over named `role="region"` panels, each `hidden` while collapsed (always in DOM → no dangling `aria-controls`); one open at a time. A button with `onClick` is a plain action (download/play, no `aria-expanded`); a button with `content` and no `onClick` is the disclosure. Open = filled primary surface (not colour-only, backed by `aria-expanded`). Panel `content` is a flexible `ReactNode` (the migrated `ProductDetails` collapsed its `ProductSpecs` into itself → no standalone renderer to reuse; "needs: ProductDetails" was build-order only). No built-in strings (all copy consumer-supplied). **1 baseline mapped GATED both viewports** (`product-description-story`): the collapsed 3-button row is fully accessible + reproducible (only glyph-swap/font deltas). 3/3 scoped tests.

#### Tier 5 — unlocked after Tier 4

- [x] ProductCard `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card) — Batch 30; reclassified molecule→organism. The **stateful dispatcher** — this batch preserved the legacy business logic byte-for-byte (per the "logic cannot differ" directive): internal `myProduct` state + partial-dep `useEffect` resync, the `convertNumToStr` total-price math (`pricePerUnit × itemNumberPerSalesUnit × qty`, comma decimal), `getQuantity` clamp, `handleOnChangeQuantity` (uncontrolled unless `onChangeQuantity` passed), and `handlePackageChange` re-deriving the whole product from the chosen variant. Dispatches to `ProductCardHorizontal` / `ProductCardVertical` / `ProductCardRestricted` (vertical + `isRestrictedUser`). The mutually-recursive cycle was broken with a leaf `ProductCard/types.ts` seam that the three children import **type-only**. Dead legacy props dropped (`productImage` prop — the dispatcher derives it; `handlePackageChange`/`onCloseVariants` props — it builds its own). Accessibility owned by the rendered child. **4 baselines mapped reviewOnly** (`-story` vertical, `-horizontal`, `-loading`, `-no-variants`). 7/7 scoped tests. **Unblocks the Tier-6/7 dependents** (ProductCardMini, ProductBlock, ProductCardList, ProductCarousel, MiniProductToast).
- [x] DynamicFilter `[org]` (Legacy: legacy/src/design-system/components/molecules/dynamic-filter) — Batch 29; faceted filter drawer composing the migrated `Button` + `DrawerSidebar` + `RangeInput` + `Checkbox`/`RadioButton` + `ExpandableWrapper`. Legacy nested `<button><Checkbox/></button>` option rows (an axe `nested-interactive` fail) → native inputs paired with real `<label htmlFor>` in a named `role="group"`/`radiogroup` panel; each filter group is an APG accordion header (`<h3>`+`<button aria-expanded/aria-controls>`) over an `ExpandableWrapper`; show-more is a nested disclosure. Legacy JS-media-query render-props (`Above`/`Below`) for the selected-filter chips → responsive `display` utilities (single-render, `md:`-toggled — no duplicated DOM). Chips are remove-`<button>`s whose `aria-label` names the filter they clear (2.5.3); range selection delegates the two `role="slider"` thumbs + fields to `RangeInput`. **All built-in Swedish copy → overridable `labels` (English defaults; interpolated ones are functions)**; the drawer's dialog/focus-trap/`Escape`/focus-return come from `DrawerSidebar`. **2 baselines mapped, GATED both viewports** (`--visual`, `--visual-pre-selected` — the closed filter bar + result list, Swedish labels reproduce the legacy frame): default desktop 0.16% / mobile 0.67%, pre-selected desktop 0.24% / mobile 1.03%, all under the 2% gate. 6/6 scoped tests. **Tier-5 now has only the blocked `ProductCard` cycle left.**

#### Tier 6 — unlocked after Tier 5

- [x] ProductCardMini `[org]` (Legacy: legacy/src/design-system/components/molecules/product-card-mini) — Batch 31; reclassified molecule→organism. Presentational compact summary — a thumbnail beside the name, packaging, a price line and an article-no/country line. Composes only `Picture` + `Heading`. **Product typed as `Pick<ProductCardProduct, …>`** so a full cart line passes straight through (used by `MiniProductToast`). Name is a real `Heading` at a caller-controlled level (default 3); thumbnail decorative `alt=''` (legacy hard-coded "Placholder" alt was a bug); empty meta lines omitted (no stray "undefined"/dangling separators). **No standalone baseline** (only captured inside the closed `miniproducttoast` frame) → gallery-only (current-only Visual). 4 scoped tests.
- [x] ProductBlock `[org]` (Legacy: legacy/src/design-system/components/organisms/product-block) — Batch 31; titled marketing section composing `ContentWrapper`/`MaxWidth`/`FlexContainer` + `Text` (eyebrow) + `Heading` (title) + `richText` + stacked horizontal `ProductCard`s forced `border`/`hideRemoveButton`. **Labelled `<section aria-label={title}>` landmark only when titled** (a plain non-landmark `<section>` otherwise, so text-only blocks don't clutter the landmark map). Title's semantic level decoupled from its fixed visual size (`headingLevel` prop, size `text-h-s`). Legacy `mediaQueryHelper` → `useBreakpoint()` for the desktop `MaxWidth` no-margin/no-padding. **1 baseline mapped reviewOnly** (`procut-block-story`, the legacy typo): the embedded `ProductCardHorizontal` is itself reviewOnly, so the block can't clear the 2% gate. 4 scoped tests.
- [x] ProductCardList `[org]` (Legacy: legacy/src/design-system/components/organisms/product-card-list) — Batch 31; responsive **CSS grid** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`) of `ProductCard`s on a `<ul role="list">` of `<li>`. Replaced the legacy per-item `calc(50%-0.75rem)`/`calc(33%…)` widths (**arbitrary values, forbidden**) with the identical column progression from grid; dropped the framer opacity fade (decorative, meaningless). A list-level `addToCart` overrides every card's uniformly. **2 baselines mapped reviewOnly** (`--visual`, `--visual-loka`): full-page grids of reviewOnly vertical cards captured taller than the fixed viewport. 4 scoped tests.
- [x] ProductCarousel `[org]` (Legacy: legacy/src/design-system/components/molecules/product-carousel) — Batch 31; reclassified molecule→organism. A `Carousel` of full `ProductCard` on tablet/desktop, **swapping to `ProductCardMiniVertical` on mobile** (`useBreakpoint().isMobile`) via pure rich→compact adapters `toMiniProps`/`toMiniProduct` (the two card APIs diverged in V2). Responsive `perPage` (mobile/tablet/desktop) via `Carousel` `breakpoints`. Legacy Splide `autoplay` **dropped** (no auto-advance → nothing to pause 2.2.2 / no motion to suppress); the broken legacy `onViewportEnter` (fired during render) **replaced with a correct `IntersectionObserver` impression hook** (fires once at ≥50% visible). **Not mapped** — the legacy `product-carousel-story` baseline is **blank** (story passed `productCards: []`); the V2 Visual renders a populated carousel (different scene) → current-only. 4 scoped tests.

#### Tier 7 — unlocked after Tier 6

- [x] MiniProductToast `[org]` (Legacy: legacy/src/design-system/components/molecules/mini-product-toast) — Batch 31; reclassified molecule→organism. Fixed slide toast (top on mobile, right on desktop) surfacing the **last** cart line as a `ProductCardMini` above a cart-shortcut `IconButton` (badge, name folds in the count) + a busy `Loader`. Non-modal polite `role="status"` (announces without stealing focus). **`inert` when closed** — the off-screen content leaves the tab order + a11y tree (fixing the legacy off-screen-focusable cart button), while the slide-out still keeps its content; slide gated on `useReducedMotion()`. **Not mapped** — the legacy `mini-product-toast-story` baseline captured the toast **closed** (empty cart → `open=false`); the V2 Visual renders it **open** (different scene, same closed-toast class as `ProductToast`) → current-only. 5 scoped tests.

