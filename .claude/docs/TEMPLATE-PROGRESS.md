# Template Scaffolding Progress

The component migration is complete (118 components — see [`MIGRATION-PROGRESS.md`](./MIGRATION-PROGRESS.md)).
This log tracks the **next phase**: assembling those components into **fully-functional page & section
templates** that reproduce the real screens of the consuming app (`Spendrups-FrontendApp`), with their
interactions *simulated live in Storybook* — add to cart, change quantity, remove, apply
discounts/campaigns, filter, sort, log in, return an order, and so on. A template is not a static mock: a
reviewer must be able to *use* it the way they'd use the real app.

## Purpose & scope

- **Prove the library composes.** Each template is an integration test of the design system — if a real
  screen can't be built cleanly from the exported components, that's a finding (a missing prop, a gap, an
  a11y hole) surfaced here rather than in the app.
- **Document the intended assembly.** The templates are the reference for how the app should wire the
  components together — the canonical composition plus the state contract each screen needs.
- **Simulate, don't depend.** The app's logic lives in XState machines + redux (`src/machines/*`,
  `src/context/*`). Templates do **not** import those. They reproduce the *essential* transitions with a
  small local state harness (a `useReducer` whose actions are named for the machine's real events), so the
  screen is interactive without pulling app infrastructure into the library. The harness distilled from a
  machine is the "what state does this screen need" contract.
- **Read-only sources.** `Spendrups-FrontendApp/` and `legacy/` are strictly READ-ONLY references — extract
  the scenario, prop shapes and transitions; never edit them.

## Instructions for AI Assistant

- **Pick the next template from the _Build queue_ below**, top-to-bottom. Flows are ordered by value and
  dependency: shared chrome first (needed by every page), then Checkout (the flagship), then discovery,
  account, and marketing/entry. Within a flow, **sections before the pages that compose them**, so a page
  template reuses section templates already built.
- **Before building, use the `scaffold-template` skill** — the canonical workflow (map the app scenario →
  design the state harness → compose the DS components → cover every interaction with a `play` test →
  a11y → update this log). Don't hand-roll a template; a one-off drifts from conventions and misses
  interactions.
- **A template is done** when it composes only exported DS components (no re-implemented UI), every
  interaction in its checklist is wired live and asserted by a `play` test, `pnpm build` is green (0 TS),
  `pnpm test-storybook` passes (interaction + the `error`-mode a11y scan) for its stories, and this log is
  updated (checkbox + note + counts) with any gap recorded under _Findings & gaps_.
- **Flip `[ ]` → `[x]`** as each template lands; update the counts in _Current Status_ and the flow
  headers. Never start the next template without updating this log.
- **Record gaps.** When a real interaction can't be built from the current components (missing prop,
  missing component, an a11y conflict), log it under _Findings & gaps_ with the template, what's missing,
  and a proposed fix. That backlog is a primary output of this phase.

## Conventions

### Directory & files

Templates live in a new top tier `src/templates/<TemplateName>/` (Atomic Design's templates/pages layer,
above organisms):

- `<TemplateName>.tsx` — a **stateless, prop-driven composition** (data in, callbacks out, no business
  logic). It arranges DS components into the screen and forwards events, exactly like the thin
  `LoginPage` / `OrderConfirmationPage` shells, but larger.
- `<TemplateName>.stories.tsx` — the **functional simulation**: a state harness wraps the stateless
  template, holds the screen state locally, and wires callbacks to reducer actions so the screen is live.
  One story per real scenario/state (default, empty, loading, error, campaign, restricted …), each with a
  `play` test exercising the interactions.
- `index.ts` — a **local** barrel (component + prop types) for clean cross-template imports only (e.g. a
  page template importing a section template).

**Templates are Storybook-only — NEVER exported from `src/index.ts`.** They are reference/integration
artifacts, not part of the published component library. Living in `src/templates/` keeps them
type-checked (`tsconfig` includes `src`) and picked up by Storybook (glob covers `src/**`), while the
Vite lib build — whose only entry is `src/index.ts` — naturally excludes anything not reachable from
there, so no template code ships in the npm package. Do **not** add a template to `src/index.ts`.
- `<TemplateName>.fixtures.ts` — deterministic, app-shaped fixtures (Swedish copy, bundled local images, no
  network). Reuse component-level fixtures (`productCardFixtures`, etc.) where they fit.

Title stories `Design System/Templates/<Flow>/<TemplateName>`; set `parameters: { layout: 'fullscreen',
controls: { disable: true } }`.

### The state-harness pattern

The heart of a functional template — see [`scaffold-template`](../skills/scaffold-template/SKILL.md) and its
`references/state-harness.md`. In short: model the screen's state with a `useReducer` whose actions are
named for the machine's real events (`ADD_TO_CART`, `UPDATE_CART`, `REMOVE_FROM_CART`, `APPLY_CAMPAIGN`,
`SET_DELIVERY_DATE` …); derive totals/campaign math in the reducer so editing a quantity re-computes the
total *live* (the `ControlledLine` precedent in `ProductCard.templates.stories.tsx`); keep the harness in
the **stories**, not the component. Inject a `Link` stand-in and Swedish `labels`/`tooltips` (the app
localises via i18next).

### Interaction coverage (`play` tests are the spec)

Every interaction in a template's checklist must be **driven and asserted** by a `play` test — add-to-cart
increments the line and updates the total; remove empties the row; a campaign shows its ribbon and the
discounted total; an invalid coupon shows the error. The `play` test *is* the proof the screen works (and
the coverage gate for this phase — there is no separate unit-test project). Assert on roles and
visible/announced text, not implementation details.

### Accessibility

The Storybook a11y addon runs in **`error` mode** (axe fails the story on any violation; every story is
scanned). Composed screens must have correct landmarks (`<header>`/`<nav>`/`<main>`/`<footer>`), monotonic
heading order, labelled controls, live regions for async feedback, and focus management for
dialogs/drawers. A composition-level break (duplicate landmarks, skipped heading level, dangling
`aria-controls`) is a common finding — fix it in the template or record a gap against the component.

### Visual regression

Templates are **untagged** (no `['visual']`): new compositions with no frozen legacy baseline, so
`pnpm test:visual` correctly skips them (it only pixel-diffs `['visual']`-tagged frames). Their gate is the
`play` + a11y run under `pnpm test-storybook`. (If one faithfully reproduces a legacy page snapshot, it may
be mapped `reviewOnly` — but default to untagged.)

### Done criteria (per template)

- [ ] Composes only exported DS components (no re-implemented UI).
- [ ] Stateless `.tsx` (props/callbacks) + state-harness `.stories.tsx`.
- [ ] Every checklist interaction wired live and covered by a `play` test.
- [ ] All screen states have a story (default / empty / loading / error / edge scenarios).
- [ ] `pnpm build` green; `pnpm test-storybook` green (interaction + a11y) for the template's stories.
- [ ] This log updated (checkbox + note + counts); any gap recorded under _Findings & gaps_.

## Current Status

- **Phase**: Template scaffolding — **Flow 0 done (4/4); Flow 1 done (4/4)**. Next up: Flow 2 (Product
  discovery).
- **Active flow**: Flow 2 — next up `ProductFilterBar`, `ProductListingGrid`, then the pages that compose
  them. Same method: read the real app component (`sitecore-components/CategoryProductFilters` /
  `CategoryProductList`) and mirror its markup.
- **Last Updated**: 2026-07-29.
- **Completed**: 8 / ~30 templates — Flow 0 (AppHeader, AppFooter, ConsentAndGates, PageShell) + Flow 1
  (CheckoutPage, MiniCartDrawer, CartRecommendations, OrderConfirmationPage). Gate per template:
  `pnpm build` 0 TS + scoped `vitest --project=storybook` (interaction + a11y) green; `pnpm build-storybook`
  green.
- **Shared infra built:** `src/templates/_shared/cartModel.ts` (the `cartMachine`-derived reducer +
  `selectCartTotals` + fixtures — reused by every Flow-1 template) and `src/templates/_shared/chrome.tsx`
  (`DemoHeader`/`DemoFooter`/`DemoLink` — the live chrome page templates slot into `PageShell`).

---

## Build queue

Legend: **[sec]** section template · **[page]** full-page template. Each entry lists the **real app
source**, the **scenario**, the **interaction checklist** (derived from the driving XState machine's
events), the **state to simulate**, and the **DS components** composed.

### Flow 0 — Shared chrome & layout shells (prerequisite for every page) — 4/4 ✅

- [x] **AppHeader** `[sec]` — done, **grounded in the real `HeaderContainer` markup.** `src/templates/AppHeader/`.
  Composes `Header` (slot shell) with the slots the app fills: `salesTool` = `AdminSearch` customer-search
  bar (from `SalesTool`), `topNavBar` = `TopNavBar` utility row ("Kontakta oss/Vanliga frågor" +
  "Inloggad som 377693, SPENDRUPS EHANDEL"), `Logotype` home link, a `Search` type-ahead, the
  `HeaderCalendarToolbar`-style **delivery-deadline pill**, favourites heart + cart `IconButton`s,
  `UserProfileDropdown`, and `DesktopNavigation`/`MobileNavigation` with the real nav tree (Nyheter · Mina
  mest köpta · Drycker · Tillbehör · Event & Nätverk · Utbildningar · Inspiration · Varumärken · Om
  Spendrups). Fully controlled by the harness (`_shared/chrome.tsx` supplies the live pieces incl. the
  sales-tool + product searches — two `role=search` landmarks coexist cleanly). 3 stories, scoped `vitest`
  **3/3** (interaction + a11y). _(orig spec below)_
  App: `sitecore-components/HeaderContainer` · `HeaderNavigation` ·
  `HeaderSearch` · `MenuTop` · `LoginStatus` · `HeaderCalendarToolbar`; `context/HeaderContext.js`.
  **Scenario:** the global banner — logo, mega-menu, search, mini-cart trigger, login/profile status.
  **Interactions:** open/close mega menu + navigate; open mobile menu; type-ahead search
  (show/hide results); open the user-profile drawer; open the mini-cart; sticky/scrolled state.
  **State:** `menuOpen`/`activeMenu`, `searchQuery`+results, `profileOpen`, `cartOpen`, auth status.
  **DS:** `Header`, `DesktopNavigation`, `MobileNavigation`, `TopNavBar`, `MenuButton`, `Search`/`ProductSearch`,
  `UserProfileDropdown`, `Logotype`, `IconButton`, `Breadcrumbs`.
- [x] **AppFooter** `[sec]` — done. `src/templates/AppFooter/`. Composes `Footer` (top-bar links, link
  columns, address, bottom bar, built-in newsletter) + `SocialMediaLinks` in the body. Live newsletter
  sign-up: a valid email clears the field + shows a polite `role="status"` confirmation; an invalid email
  raises the `role="alert"` error and never submits. 2 stories (Default / NewsletterError). Scoped `vitest`
  **2/2**. **Gap found:** `Footer` doesn't forward the newsletter's `labels` — see _Findings & gaps_.
- [x] **ConsentAndGates** `[sec]` — done. `src/templates/ConsentAndGates/`. Composes `CookieBar` +
  `AgeVerificationForm` (in a non-dismissable `Modal`) + a dismissable status `Modal`. Live: age gate must
  be answered — "Nej" surfaces the under-age error and keeps it open, "Ja" closes it; cookie banner
  accept/decline dismisses it (decline non-essential is a first-class control); status modal dismisses via
  `Escape`. 3 stories (FirstVisit / CookieConsent / StatusModal). Scoped `vitest` **3/3**. **Gap found:**
  `CookieBar` has no first-class decline action — see _Findings & gaps_.
- [x] **PageShell** `[page]` — done. `src/templates/PageShell/`. The layout frame: a skip-to-content link
  + slotted `header` + a single focusable `<main id="main-content">` (optional breadcrumbs) + slotted
  `footer`, full-height. Purely presentational (owns no state); the stories slot live `AppHeader` /
  `AppFooter` harnesses + `Breadcrumbs` + demo main. `play` asserts exactly one banner/main/contentinfo,
  the working skip link, and the breadcrumb trail. Scoped `vitest` **1/1**. Browser-verified as a complete
  Spendrups page frame. **This is the shell every Flow 1–4 page template composes.**

### Flow 1 — Checkout & Cart (FLAGSHIP · driven by `cartMachine` + `deliveryDateMachine`) — 4/4 ✅

- [x] **MiniCartDrawer** `[sec]` — **done, mirrors the app's `CartToolbar` markup.** `src/templates/MiniCartDrawer/`.
  Read the real render tree (`CartToolbar` → `IconButton` + `components/cart/cart-notification` (`MiniProductToast`)
  + `DrawerSidebar` → `components/cart` (`CartSidebar`)) and copied its exact composition: a header cart
  `IconButton` with a live count badge, the "added to cart" `MiniProductToast`, and a `DrawerSidebar` (named
  dialog "Varukorg") whose body is the `CartSidebar` — `GroupWrapper`+`Heading order={3}` "Varukorg", a "Till
  kassan" `LinkButton`, a `Text` product-count row + a "Töm varukorg" `Button` (`surface='link'`, trash icon),
  and the lines as **price-less, quantity-locked** horizontal `ProductCard`s (`hidePrice`,
  `productQuantityDisabled`, `hideCartButton` — exactly as the real mini-cart) with remove + favourite +
  save-to-list. Driven by the shared `_shared/cartModel.ts` reducer for the lines; the harness holds the
  drawer-open (`TOGGLE_CART`) + `recentItem` UI state locally. Live & play-tested: open/close the drawer;
  `ADD_TO_CART` raises the toast + bumps the badge (4→5); remove a line → count drops (4→3); `CLEAR_CART` →
  empty state. 5 stories, scoped `vitest` **5/5** (interaction + a11y). **Faithful-source divergences:** the
  real mini-cart **locks quantity** (`productQuantityDisabled`) and **hides price** (`hidePrice`), so there is
  no in-drawer qty-edit or subtotal (the queue's "edit line qty / running subtotal" belong to the CartPage, not
  the mini-cart — source wins); added a short "Din varukorg är tom." empty message (minor, the app shows only
  the "0 produkter" count). **Shared refactor:** extracted `toProductCardProduct` + `productCardLineLabels` into
  `_shared/cartModel.ts` (was inline in CheckoutPage) so the checkout lines, mini-cart lines and the toast card
  all map from one helper; CheckoutPage re-verified 4/4. _(orig spec below.)_
  App: `sitecore-components/Cart` · `CartToolbar` ·
  `components/cart/cart-notification`; `machines/cartMachine` (`TOGGLE_CART`/`Open`/`Closed`,
  `GET_MINI_CART`). **Scenario:** the slide-in cart summary opened from the header + the "added to cart"
  toast. **Interactions:** `TOGGLE_CART` open/close; edit line qty (`UPDATE_CART`); remove line
  (`REMOVE_FROM_CART`); running subtotal; `GO_TO_CHECKOUT`; recent-item toast after `ADD_TO_CART`
  (`CLEAR_RECENT_ITEM`); empty-cart state. **State:** `open`, `lines[]`, `subtotal`, `recentItem`.
  **DS:** `CartSidebar`, `CartProductList`, `CartProduct`, `MiniProductToast`, `ProductToast`,
  `QuantityChanger`, `Button`, `DrawerSidebar`.
- [x] **CheckoutPage** `[page]` — **done (flagship), rebuilt to mirror the real app markup.**
  `src/templates/CheckoutPage/`. **First cut was wrong** — I invented a subtotal/discount/coupon/campaign
  layout instead of reading the app. Rebuilt by following the real render tree
  (`sitecore-components/Cart` → `components/checkout/desktop-checkout.js` →
  `checkout-cart/{order-overview,confirm-order,cart-products,…}`) and mirroring its exact composition:
  `FlexContainer gap={3}` split `flex='1 1 60%'` / `'1 1 40%'`; left column a `BoxWrapper
  backgroundColor='light'` with the two-`Heading order={3}` "Varukorg" + total row, `OrderConfirmationDetails`
  **Översikt (Pris/Pant/Moms)**, a `withStrongBorder` `BoxWrapper` with the terms `Checkbox` + "Lägg
  beställning" `Button`, the horizontal `ProductCard` lines (S marker, favourite/save, remove), and a "Lägg
  till produkt" `ProductSearch`; right column `Heading order={4}` "Dina leveransuppgifter" +
  `ClickableListItem`/`ExpandableWrapper` collapsibles (address / custom order no) + `UiDatePicker` +
  `InfoSummaryBox` "Tillbehörspott" + a "Du kanske även gillar" list. Driven by the shared
  `_shared/cartModel.ts` reducer (Pris/Pant/Moms + terms gate). Live & play-tested: qty edit re-computes
  Pris (738,20→957,20); terms gate → submit → confirmation; remove line → count drops; empty cart.
  4 stories, scoped `vitest` **4/4** (interaction + a11y). **Verified vs the user's real screenshot at a
  wide viewport.** _(orig spec below.)_ App: `sitecore-components/Cart` (CartPage/Checkout
  states) · `CartReceipt` · `DeliveryDays` · `components/checkout` · `layouts/CheckoutLayout.js`;
  `machines/cartMachine` + `deliveryDateMachine`. **Scenario:** the full cart/checkout screen — the user
  edits their basket and places the order. **Interactions (the complete set the user asked for):**
  add product (`ADD_TO_CART`); change quantity per line with live total recompute (`UPDATE_CART`); remove
  a line (`REMOVE_FROM_CART`); clear the whole cart (`CLEAR_CART`); apply a campaign/discount and see the
  ribbon + discounted total (`APPLY_CAMPAIGN`); "add the remaining items to unlock the campaign"
  (`ADD_REMAINING_CAMPAIGN_ITEMS`, `UPDATE_CAMPAIGN_DATA`); add a custom order number
  (`ADD_CUSTOM_ORDER_NUMBER`); pick a delivery date (`FETCH_DELIVERY_DATES`/`SET_DELIVERY_DATE`) and change
  the delivery address (`CHANGE_DELIVERY_ADDRESS`); min-order-value threshold gating the submit; order
  summary totals (subtotal, VAT, freight, discount, grand total); empty-cart, loading and error states;
  place order (`GO_TO_CHECKOUT`→`START_CHECKOUT`→`orderComplete`). **State:** `lines[]{partNo,qty,price,
  campaign}`, `campaigns[]`, `discount`, `customOrderNo`, `deliveryDate`, `deliveryAddress`, `totals`,
  `status(idle|updating|submitting|complete|failure)`. **DS:** `Cart`, `CartProductList`, `CartProduct`,
  `CartOrderDetails`, `CartDeliveryDetails`, `DeliveryForm`, `DeliveryInfoBar`, `UiDatePicker`,
  `InfoSummaryBox`, `QuantityChanger`, `CampaignBox`, `CampaignBanner`, `AlertBox`, `MessageBanner`,
  `Button`, `Modal`, `ProductCard` (horizontal cart lines).
- [x] **CartRecommendations** `[sec]` — **done, mirrors the app's cart-recs markup.** `src/templates/CartRecommendations/`.
  The `RecommendedProductsSlideshow` sitecore rendering is a stub; the real cart recommendations live in
  `sitecore-components/Cart` → `renderRecommendedProducts` → `ProductCarousel`, so I mirrored that: a
  `ContentWrapper` with a centred `Heading order={3}` and a `ProductCarousel` of **vertical** `ProductCard`s
  (`cardDisplay='vertical'`, `hideRemoveButton`, an "Lägg i varukorg" add button, `productsPerPageDesktop={3}`,
  `arrowsBottom`, `noPadding`) — the exact card config the app builds. The carousel's own
  `addToCart(product, index)` (which overrides each card's) dispatches `ADD_TO_CART` into the shared
  `cartReducer`; a `role=status` line reports the running cart count so the add is observable (feeds the cart
  in the app). 1 story, scoped `vitest` **1/1** (interaction + a11y — carousel region named, heading h3→h4
  monotonic). Carousel arrow/dot navigation is `Carousel`'s own tested behaviour. _(orig spec below.)_
  App: `sitecore-components/RecommendedProductsSlideshow` (cart
  placement); `machines/recommendationsMachine` (`FETCH_CART_RECS`/`FETCH_BASKET_RECS`). **Scenario:**
  "you might also want" strip under the cart. **Interactions:** navigate the carousel; add a recommended
  product to the cart (feeds the cart harness). **State:** `recs[]`. **DS:** `ProductCarousel`,
  `ProductBlock`, `ProductCard`.
- [x] **OrderConfirmationPage** `[page]` — **done, composes the DS receipt shells.** `src/templates/OrderConfirmationPage/`.
  The app's `CartReceipt` sitecore rendering is a stub, so (per the spec) I wired the existing DS shells:
  `OrderConfirmationPage` (blue full-bleed backdrop) → `OrderConfirmation` (centred card) around the
  confirmation content — an `h1` "Tack för din beställning!", a `role=status` `MessageBanner` with the order
  number, an `OrderConfirmationDetails` summary (Ordernummer / Leveransdatum / Pris / Pant / Moms / Totalt
  `isTotal`), the ordered lines as read-only `ProductCardMini`s inside a `CartProductList`, and the "Ladda ner
  kvitto" (`Button`) / "Fortsätt handla" (`LinkButton`) actions. Frozen order from the shared cart model
  (`selectCartTotals`); "download receipt" is made observable via a `downloadMessage` status banner (the app
  streams a PDF). Rendered inside `PageShell` with the shared chrome. Heading order h1→h2→h3 monotonic.
  1 story, scoped `vitest` **1/1** (interaction + a11y). Note: template component name `OrderConfirmationPage`
  aliases the DS shell import as `OrderConfirmationPageShell` to avoid the name clash. _(orig spec below.)_
  App: `sitecore-components/CartReceipt`; `cartMachine`
  `orderComplete`. **Scenario:** post-order confirmation. **Interactions:** view order summary; download
  receipt; continue shopping. (`OrderConfirmationPage`/`OrderConfirmation` shells already exist —
  wire them to the CheckoutPage's completed state.) **State:** the frozen submitted order. **DS:**
  `OrderConfirmationPage`, `OrderConfirmation`, `OrderConfirmationDetails`, `CartProductList`, `Button`.

### Flow 2 — Product discovery (driven by `productsMachine` + `recommendationsMachine`) — 0/6

- [ ] **ProductFilterBar** `[sec]` — App: `sitecore-components/CategoryProductFilters`;
  `machines/productsMachine` (`FILTER_PRODUCTS`, `SORT_PRODUCTS`), `context/ProductListingContext.js`.
  **Scenario:** the faceted filter + sort controls for a listing. **Interactions:** toggle facet
  checkboxes; drag a price range; change sort; change page size (`ITEMS_PER_PAGE`); clear-all; the
  selected-filter chips; mobile filter drawer. **State:** `activeFilters`, `sort`, `pageSize`.
  **DS:** `DynamicFilter`, `RangeInput`, `Slider`, `Checkbox`, `SortableList`, `DrawerSidebar`, `Tag`.
- [ ] **ProductListingGrid** `[sec]` — App: `sitecore-components/CategoryProductList` · `ProductList` ·
  `ProductListSelection`. **Scenario:** the responsive product grid + pagination. **Interactions:**
  add-to-cart from a card; select a packaging variant; toggle favourite; add to purchase list; restricted-user
  variant; grid/list density; paginate. **State:** `results[]`, `page`, `favorites[]`, `loading`.
  **DS:** `ProductCardList`, `ProductCard` (+ family), `Pagination`, `Loader`.
- [ ] **ProductCategoryListingPage** `[page]` — App: DS blocked template `ProductCategoryListingPage`
  (`templates/product-category-listing-page`). **Scenario:** the full category page. **Interactions:**
  everything from `ProductFilterBar` + `ProductListingGrid`, wired together — filtering/sorting updates the
  grid + result count + pagination live; breadcrumbs; a recommendations strip. **State:** the merged
  filter+listing model. **DS:** `PageShell`, `Breadcrumbs`, `ProductFilterBar`, `ProductListingGrid`,
  `ProductCarousel`, `IntroBlock`.
- [ ] **ProductPage** `[page]` — App: `sitecore-components/ProductDisplay`; `productsMachine`
  (`FETCH_PRODUCT_DETAILS`), `recommendationsMachine` (`FETCH_PRODUCT_PAGE_RECS`/`..._REPLACEMENT_RECS`).
  **Scenario:** the product detail page. **Interactions:** select variant/packaging; change quantity;
  add-to-cart (with the morphing button); campaign & out-of-stock/alert states; expand spec/description
  accordion; replacement/related recommendations; breadcrumbs; favourite/purchase-list. **State:**
  `selectedVariant`, `qty`, `stock/campaign`, `recs[]`. **DS:** `ProductDetails`, `ProductDescription`,
  `ProductVariantList`, `AddToCartButton`, `CampaignBox`, `AlertBox`, `ProductCarousel`, `Breadcrumbs`,
  `Tabs`, `Picture`.
- [ ] **SearchResultsPage** `[page]` — App: `sitecore-components/SearchResults` · `HeaderSearch`;
  `layouts/SearchLayout.js`. **Scenario:** the search results screen. **Interactions:** search-as-you-type
  → results; filter/sort the results; paginate; empty/no-results state; add-to-cart. **State:** `query`,
  `results[]`, filters. **DS:** `ProductSearch`, `Search`, `ProductListingGrid`, `ProductFilterBar`,
  `Pagination`, `MessageBanner`.
- [ ] **StartPageProductStrips** `[sec]` — App: `sitecore-components/ProductListStart` ·
  `UsuallyBoughtProductList`; `recommendationsMachine` (`FETCH_START_PAGE_RECS`). **Scenario:** the start
  page's "usually bought" / recommended strips. **Interactions:** carousel navigation; add-to-cart.
  **State:** `products[]`. **DS:** `ProductCarousel`, `ProductBlock`, `ProductCard`.

### Flow 3 — Account & self-service — 0/8

- [ ] **PurchaseListManager** `[sec]` — App: `sitecore-components/PurchaseAndFavoriteList` ·
  `ListPurchaseListForUser`; `machines/purchaseListsMachine`. **Scenario:** manage saved purchase lists.
  **Interactions:** create a list (`CREATE_NEW_PURCHASE_LIST`/`..._FROM_CART`); rename/update
  (`UPDATE_SELECTED_PURCHASE_LIST`); delete (`REMOVE_SELECTED_PURCHASE_LIST(S)`); copy
  (`COPY_SELECTED_PURCHASE_LIST`); add/remove items (`ADD_PRODUCT_TO_SELECTED_PURCHASE_LIST`); adjust
  quantities; add the whole list to cart (`ADD_LIST_TO_CART`); assign customers
  (`ASSIGN_CUSTOMERS_TO_PURCHASE_LIST`); download as PDF/Word. **State:** `lists[]`, `selectedList`,
  `items[]`. **DS:** `PurchaseList`, `CreateListForm`, `ProductCardList`, `Modal`, `Table`, `Button`,
  `IconButton`.
- [ ] **FavoriteList** `[sec]` — App: `sitecore-components/FavoriteList` · `FavoriteListToolBar`;
  `machines/favoriteListMachine`. **Scenario:** the user's favourites. **Interactions:** toggle favourite
  (`ADD_/REMOVE_PRODUCT_FROM_FAVORITE_LIST`); convert to a purchase list (`CONVERT_TO_PURCHASE_LIST`);
  add-to-cart. **State:** `favorites[]`. **DS:** `ProductCardList`, `ProductCard`, `Button`.
- [ ] **OrderHistory** `[sec]` — App: `sitecore-components/OrderHistory` · `LatestOrder` ·
  `OrderHistoryTeaser`; `machines/orderHistoryMachine`. **Scenario:** past orders. **Interactions:**
  list + select an order (`ORDER_SELECTED`); reorder into the cart; download the invoice PDF
  (`DOWNLOAD_INVOICE_PDF`); filter/paginate. **State:** `orders[]`, `selectedOrder`. **DS:** `Table`,
  `OrderItem`, `OrderConfirmationDetails`, `Pagination`, `IconButton`.
- [ ] **OrderReturnWizard** `[page]` — App: `sitecore-components/OrderReturn` · `GetReturnOrderTeaser`;
  `machines/orderReturnMachine`. **Scenario:** a multi-step return flow. **Interactions:** choose an order
  (`GO_TO_CHOOSE_ORDER`, `ORDER_SELECTED`); choose the items to return (`GO_TO_CHOOSE_ORDER_ITEMS`,
  `ORDER_ITEM_SELECTED`); set per-item return quantity + reason (`UPDATE_ACCUMULATED_RETURN_INFO`);
  review summary; go `NEXT`/back through steps; submit; clear (`CLEAR_ACCUMULATED_RETURN_INFO`). **State:**
  `step`, `selectedOrder`, `returnLines[]{qty,reason}`. **DS:** `Table`, `OrderItem`, `QuantityChanger`,
  `SingleSelect`, `InfoSummaryBox`, `Tabs`/step indicator, `Button`, `Modal`.
- [ ] **InvoiceCenter** `[sec]` — App: `sitecore-components/Invoices` · `PaidInvoices`;
  `machines/invoiceMachine`. **Scenario:** unpaid + paid invoices. **Interactions:** tab between
  unpaid/paid (`FETCH_INVOICES`/`FETCH_PAID_INVOICES`); download an invoice PDF (`DOWNLOAD_INVOICE_PDF`);
  overdue highlighting; paginate. **State:** `invoices[]`, `tab`. **DS:** `InvoiceList`, `Tabs`, `Pagination`.
- [ ] **ProfileForm** `[sec]` — App: `sitecore-components/UserDetails` · `UpdateUserDetails`.
  **Scenario:** view + edit account details. **Interactions:** edit fields; validate; submit
  (`ADD_USER_DETAILS`); success/error. **State:** `fields`, `dirty`, `status`. **DS:** `Form`, `FormGroup`,
  `InputText`, `UserInfoSummary`, `AccountBox`, `Button`.
- [ ] **MySpendrupsPage** `[page]` — App: DS blocked template `MySpendrupsPage`; `sitecore-components/
  ProfileNavigation` · `Balance` · `BonusMessages`. **Scenario:** the account dashboard. **Interactions:**
  navigate profile sections; view balance/bonus; jump into orders/lists/invoices. **State:** `activeSection`.
  **DS:** `PageShell`, `AccountBoxList`, `ProfileNavigation`→`DesktopNavigation`, `InfoSummaryBox`,
  `MessageBanner`, teasers.
- [ ] **ShoppingListPage** `[page]` — App: DS blocked template `ShoppingListPage`. **Scenario:** the
  standalone shopping-list screen. **Interactions:** edit list lines + quantities; add all to cart;
  summary. **State:** the purchase-list model. **DS:** `PageShell`, `PurchaseList`, `OrderConfirmationDetails`,
  `ScrollableList`, `MessagePopup`, `InfoSummaryBox`.

### Flow 4 — Marketing, content & entry (driven by `authenticationMachine` + `brandMachine`) — 0/8

- [ ] **LoginPage** `[page]` — App: `sitecore-components/Login` · `LoginReset`;
  `machines/authenticationMachine`, `layouts/LoginLayout.js`. **Scenario:** sign in / reset password.
  **Interactions:** enter username/password (`ENTER_USERNAME`/`ENTER_PASSWORD`); submit (`SUBMIT`) with
  success + error; request reset link (`REQUEST_RESET_PASSWORD_LINK`, `INSTRUCTIONS_HAVE_BEEN_SENT`); set
  new password by link (`CHANGE_PASSWORD_BY_LINK`); accessible-auth (autocomplete, no CAPTCHA). **State:**
  `phase(idle|password|submitting|error|resetSent)`. **DS:** `LoginPage`, `LoginForm`, `ResetPasswordForm`,
  `Logotype`, `AlertBox`. _(shells `LoginPage`/`LoginForm`/`ResetPasswordForm` already exist — wire them.)_
- [ ] **ChooseUserPage** `[page]` — App: DS blocked template `ChooseUserPage`; `authenticationMachine`
  (`CHOOSE_USER`, `REPORT_CHOOSE_USER`). **Scenario:** a multi-account user picks which customer to act as
  after login. **Interactions:** select an account (`CHOOSE_USER`); search/filter accounts; confirm.
  **State:** `accounts[]`, `selected`. **DS:** `PageShell`, `AccountBoxList`, `ClickableListItem`, `Search`,
  `Button`.
- [ ] **BecomeCustomerPage** `[page]` — App: `sitecore-components/BecomeCustomer`. **Scenario:**
  prospective-customer registration. **Interactions:** multi-field form validation; submit; success/error.
  **State:** `fields`, `status`. **DS:** `PageShell`, `Form`, `FormGroup`, `InputText`, `Checkbox`, `Button`,
  `AlertBox`.
- [ ] **StartPageTemplate** `[page]` — App: DS blocked template `StartPageTemplate`. **Scenario:** the
  logged-in start/home page. **Interactions:** hero carousel navigate; offer-card CTAs; teaser CTAs;
  recommended-products strips (add-to-cart); brand promos. **State:** `activeSlide`, plus reused strips.
  **DS:** `PageShell`, `HeroCarousel`, `Hero`, `OfferCardList`, `Teaser`, `StartPageProductStrips`,
  `BrandDetails`/`PromoBrands`, `WaveDivider`, `CampaignBanner`.
- [ ] **BrandPage** `[page]` — App: DS blocked template `BrandPage`; `sitecore-components/Brand` ·
  `PromoBrands`; `machines/brandMachine`. **Scenario:** a brand landing page. **Interactions:** hero;
  brand story; product block (add-to-cart); related brands. **State:** brand content + products.
  **DS:** `PageShell`, `BrandDetails`, `Hero`, `ProductBlock`, `Teaser`.
- [ ] **CampaignPage** `[page]` — App: DS blocked template `CampaignPage`. **Scenario:** a campaign
  landing page. **Interactions:** hero carousel; campaign messaging; campaign product block (add-to-cart
  with campaign pricing). **State:** campaign + products. **DS:** `PageShell`, `HeroCarousel`,
  `CampaignBanner`, `CampaignBox`, `CampaignMessage`, `ProductBlock`.
- [ ] **ContentPage / InspirationPage** `[page]` — App: DS blocked templates `ContentPage` /
  `InspirationPage`; `sitecore-components/InspirationPage` · `Intro` · `LatestArticles` · `RichData`.
  **Scenario:** editorial/inspiration content. **Interactions:** rich text; article-list navigation;
  teaser CTAs; embedded product/brand blocks. **State:** mostly static. **DS:** `PageShell`, `RichText`,
  `IntroBlock`, `ArticleList`, `ArticleCard`, `Teaser`, `WaveDivider`, `Video`.
- [ ] **ContactPage / FaqPage** `[page]` — App: DS blocked template `ContactPage`;
  `sitecore-components/FAQ` · `FAQSection` · `WebForm`. **Scenario:** support/FAQ + contact form.
  **Interactions:** expand/collapse FAQ items; search FAQ; submit the contact form (validation, success,
  error). **State:** `openFaq`, `formFields`, `status`. **DS:** `PageShell`, `FaqHero`, `FaqGroup`,
  `FaqList`, `Form`, `FormGroup`, `InputText`, `Textarea`, `Button`, `AlertBox`.

---

## Completed

_(none yet)_

## Findings & gaps

Component/prop gaps discovered while building templates, with a proposed fix — the pre-publish hardening
backlog for this phase. (Templates are Storybook-only, so these do **not** block, but they are real
library limitations the app would hit.)

- **Process correction (2026-07-27): mirror the real app component's markup — don't invent from the flow
  map or a screenshot.** Flow 0/1 first cuts were rebuilt because they were plausible-but-wrong: the real
  layout is only knowable by reading `Spendrups-FrontendApp` component JSX to the leaf (e.g. `Cart` →
  `desktop-checkout.js` → `checkout-cart/*`) and copying the exact DS composition. Codified in the
  `scaffold-template` skill (Step 1) and its `app-flow-map.md`.
- **`ProductCardHorizontal` didn't forward `ProductQuantityInput` labels — FIXED.** The cart line's
  quantity readout was hard-stuck in English ("× st (6 pcs) / Price:"). `ProductCardHorizontal` now
  forwards the card's localised `quantity`/`pieces` + the product's `currencyLabel`/`priceLabel` to
  `ProductQuantityInput`, so it reads "Antal 6 st à 36,50 kr / × st (6 st) / Pris:". (Defaults unchanged;
  only localizes when labels are passed — no regression to the 8 ProductCardHorizontal tests.)

- **`Footer` doesn't forward the newsletter's `labels`.** (Found: AppFooter.) `Footer` renders a built-in
  `Newsletter` from `newsletterId` / `newsletterPlaceholder` / `onNewsletterSubmit`, but exposes no way to
  pass the `Newsletter` `labels` (`button` / `input` / `error`), so the submit button, the field's
  `aria-label` and the validation error stay the English defaults — un-localisable in a Swedish footer.
  **Proposed fix:** add `newsletterLabels?: Partial<NewsletterLabels>` to `FooterProps` and forward it.
- **`CookieBar` has no first-class decline/reject action.** (Found: ConsentAndGates.) `CookieBar` exposes a
  single accept `onClick` + a generic `linkComponent` `ReactNode` slot; a compliant consent banner needs an
  explicit "reject non-essential" control with equal standing (GDPR/privacy). The template works around it
  by passing a `<button>` into the link slot, which is a semantic/visual hack. **Proposed fix:** add a
  first-class secondary action (`onDecline` + `declineLabel`, or an `actions` array), styled as a peer of
  accept.
- **`CampaignBox`'s built-in select button fails color-contrast.** (Found: CheckoutPage.) The box paints
  its `color` background with white text (fine), but its `surface="x"` select button is a transparent,
  absolutely-positioned control with white text + white border — axe can't resolve the brand background
  behind it and reports white-on-page-background (1.04:1), failing the `error`-mode a11y gate. The template
  hides it (`hideSelectBtn`) and pairs a display-only `CampaignBox` with a properly-contrasted `Button`.
  **Proposed fix:** give the select button an opaque, ≥4.5:1 fill (or derive readable ink from `color`),
  so it doesn't depend on axe resolving an absolutely-positioned ancestor background.
- **`AgeVerificationForm` isn't a dialog on its own; and `Modal` `Escape` always closes.** (Found:
  ConsentAndGates.) The age gate is only accessible/blocking because the template wraps
  `AgeVerificationForm` in a `Modal` with `dismissable={false}` + `hideCloseButton`. But `Modal` still
  closes on `Escape`, so a hard gate leaks a bypass; the template neutralises it with a no-op `onClose`.
  **Proposed fix (minor):** a `Modal` `disableEscapeClose?` for true "must-answer" gates, or ship an
  `AgeGate` organism that owns the dialog semantics.

## Conventions note discovered while building

- **Render-driven template stories still need `meta.args`.** Every template story renders a stateful
  harness and ignores Storybook `args`, but `satisfies Meta<typeof Template>` requires the template's
  required props somewhere. Supply them once at `meta.args` (fixtures + no-op callbacks) purely to satisfy
  the type — the render never reads them. (Same pattern the ProductCard templates use.)
