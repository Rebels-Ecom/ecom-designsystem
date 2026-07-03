## Instructions for AI Assistant

- Update this file as you go — flip `[ ]` to `[x]` as each component lands, and always before starting
  the next one (the `scaffold-component` skill drives this at its Step 9).
- A component is done when it is fully generated, strictly typed, `pnpm build` is green, and it passes
  local verification: `pnpm test-storybook` (interaction + a11y) and, if it has a legacy baseline,
  `pnpm exec playwright test --grep <component>` (visual regression vs `legacy-snapshots/`). Note any diff
  that needs human sign-off, or components that have no baseline.
- Run the full `pnpm test:visual` as the gate at the end of each 5-component micro-batch.
- Never proceed to the next batch without updating this progress log.

## Current Batch Status

- **Active Category**: atoms
- **Last Updated**: 2026-07-03
- **Current Micro-Batch**: Batch 3 — atoms 11–15 (complete; LoadingBar, MenuButton, InlineHelper, Picture, Placeholder. `pnpm build` green, `pnpm test-storybook` 56/56, full `pnpm test:visual` 21 passed / 1 documented skip. 3 of 5 mapped to legacy baselines — Picture & Placeholder documented as baseline-less.)
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
- Completed: 15 / 155
- Remaining: 140

## Components Checklist

### src/components/atoms

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
- [ ] SingleSelect (Legacy: legacy/src/design-system/components/atoms/single-select)
- [ ] Tag (Legacy: legacy/src/design-system/components/atoms/tag)
- [ ] Text (Legacy: legacy/src/design-system/components/atoms/text)
- [ ] Textarea (Legacy: legacy/src/design-system/components/atoms/textarea)
- [ ] Video (Legacy: legacy/src/design-system/components/atoms/video)
- [ ] WaveDivider (Legacy: legacy/src/design-system/components/atoms/wave-divider)
- [ ] Breakpoints (Legacy: legacy/src/design-system/components/layouts/breakpoints)
- [ ] ContentWrapper (Legacy: legacy/src/design-system/components/layouts/content-wrapper)
- [ ] FlexContainer (Legacy: legacy/src/design-system/components/layouts/flex-container)
- [ ] MaxWidth (Legacy: legacy/src/design-system/components/layouts/max-width)
- [ ] BoxWrapper (Legacy: legacy/src/design-system/components/molecules/box-wrapper)
- [ ] FlexItem (Legacy: legacy/src/design-system/components/molecules/flex-item)
- [ ] GroupWrapper (Legacy: legacy/src/design-system/components/molecules/group-wrapper)

### src/components/molecules

- [ ] AddToCartButton (Legacy: legacy/src/design-system/components/atoms/add-to-cart-button)
- [ ] AdminSearch (Legacy: legacy/src/design-system/components/atoms/admin-search)
- [ ] AlertBox (Legacy: legacy/src/design-system/components/atoms/alert-box)
- [ ] AlertMessage (Legacy: legacy/src/design-system/components/atoms/alert-message)
- [ ] Button (Legacy: legacy/src/design-system/components/atoms/button)
- [ ] ButtonWithTooltop (Legacy: legacy/src/design-system/components/atoms/button-with-tooltop)
- [ ] CampaignBox (Legacy: legacy/src/design-system/components/atoms/campaign-box)
- [ ] CampaignMessage (Legacy: legacy/src/design-system/components/atoms/campaign-message)
- [ ] CookieBar (Legacy: legacy/src/design-system/components/atoms/cookie-bar)
- [ ] IconButton (Legacy: legacy/src/design-system/components/atoms/icon-button)
- [ ] IconLink (Legacy: legacy/src/design-system/components/atoms/icon-link)
- [ ] IconWithTooltip (Legacy: legacy/src/design-system/components/atoms/icon-with-tooltip)
- [ ] InputText (Legacy: legacy/src/design-system/components/atoms/inputs/input-text)
- [ ] LinkButton (Legacy: legacy/src/design-system/components/atoms/link-button)
- [ ] MessageBanner (Legacy: legacy/src/design-system/components/atoms/message-banner)
- [ ] MessagePopup (Legacy: legacy/src/design-system/components/atoms/message-popup)
- [ ] InlineError (Legacy: legacy/src/design-system/components/atoms/messages/inline-error)
- [ ] MultiSelect (Legacy: legacy/src/design-system/components/atoms/multi-select)
- [ ] Search (Legacy: legacy/src/design-system/components/atoms/search)
- [ ] SocialMediaLink (Legacy: legacy/src/design-system/components/atoms/social-media-link)
- [ ] UiDatePicker (Legacy: legacy/src/design-system/components/atoms/ui-date-picker)
- [ ] UiLink (Legacy: legacy/src/design-system/components/atoms/ui-link)
- [ ] AccountBox (Legacy: legacy/src/design-system/components/molecules/account-box)
- [ ] AgeVerificationForm (Legacy: legacy/src/design-system/components/molecules/age-verification-form)
- [ ] ArticleCard (Legacy: legacy/src/design-system/components/molecules/article-card)
- [ ] CheckboxListItem (Legacy: legacy/src/design-system/components/molecules/checkbox-list-item)
- [ ] ClickableListItem (Legacy: legacy/src/design-system/components/molecules/clickable-list-item)
- [ ] DeliveryInfoBar (Legacy: legacy/src/design-system/components/molecules/delivery-info-bar)
- [ ] DrawerSidebar (Legacy: legacy/src/design-system/components/molecules/drawer-sidebar)
- [ ] DropdownList (Legacy: legacy/src/design-system/components/molecules/dropdown-list)
- [ ] FaqHero (Legacy: legacy/src/design-system/components/molecules/faq-hero)
- [ ] FooterTopBar (Legacy: legacy/src/design-system/components/molecules/footer-top-bar)
- [ ] Form (Legacy: legacy/src/design-system/components/molecules/form)
- [ ] FormGroup (Legacy: legacy/src/design-system/components/molecules/form-group)
- [ ] Hero (Legacy: legacy/src/design-system/components/molecules/hero)
- [ ] InfoSummaryBox (Legacy: legacy/src/design-system/components/molecules/info-summary-box)
- [ ] IntroBlock (Legacy: legacy/src/design-system/components/molecules/intro-block)
- [ ] LinkListItem (Legacy: legacy/src/design-system/components/molecules/link-list-item)
- [ ] LoadingBars (Legacy: legacy/src/design-system/components/molecules/loading-bars)
- [ ] LoadingOverlay (Legacy: legacy/src/design-system/components/molecules/loading-overlay)
- [ ] Logotype (Legacy: legacy/src/design-system/components/molecules/logotype)
- [ ] Modal (Legacy: legacy/src/design-system/components/molecules/modal)
- [ ] Newsletter (Legacy: legacy/src/design-system/components/molecules/newsletter)
- [ ] OfferCard (Legacy: legacy/src/design-system/components/molecules/offer-card)
- [ ] OrderConfirmationDetails (Legacy: legacy/src/design-system/components/molecules/order-confirmation-details)
- [ ] OrderItem (Legacy: legacy/src/design-system/components/molecules/order-item)
- [ ] Pagination (Legacy: legacy/src/design-system/components/molecules/pagination)
- [ ] PopUp (Legacy: legacy/src/design-system/components/molecules/pop-up)
- [ ] ProductQuantityInput (Legacy: legacy/src/design-system/components/molecules/product-quantity-input)
- [ ] ProductVariant (Legacy: legacy/src/design-system/components/molecules/product-variant)
- [ ] PurchaseList (Legacy: legacy/src/design-system/components/molecules/purchase-list)
- [ ] QuantityChanger (Legacy: legacy/src/design-system/components/molecules/quantity-changer)
- [ ] ScrollableList (Legacy: legacy/src/design-system/components/molecules/scrollable-list)
- [ ] SelectList (Legacy: legacy/src/design-system/components/molecules/select-list)
- [ ] SocialMediaLinks (Legacy: legacy/src/design-system/components/molecules/social-media-links)
- [ ] SortableList (Legacy: legacy/src/design-system/components/molecules/sortable-list)
- [ ] SortableListItem (Legacy: legacy/src/design-system/components/molecules/sortable-list-item)
- [ ] Table (Legacy: legacy/src/design-system/components/molecules/table)
- [ ] Tabs (Legacy: legacy/src/design-system/components/molecules/tabs)
- [ ] TagsDescription (Legacy: legacy/src/design-system/components/molecules/tags-description)
- [ ] TagsList (Legacy: legacy/src/design-system/components/molecules/tags-list)
- [ ] Teaser (Legacy: legacy/src/design-system/components/molecules/teaser)
- [ ] TopNavBar (Legacy: legacy/src/design-system/components/molecules/top-nav-bar)
- [ ] UnorderedList (Legacy: legacy/src/design-system/components/molecules/unordered-list)
- [ ] UserInfoSummary (Legacy: legacy/src/design-system/components/molecules/user-info-summary)
- [ ] RichText (Legacy: legacy/src/design-system/components/organisms/rich-text)

### src/components/organisms

- [ ] ProductSearchResultItem (Legacy: legacy/src/design-system/components/atoms/product-search-result-item)
- [ ] RangeInput (Legacy: legacy/src/design-system/components/atoms/range-input)
- [ ] Slider (Legacy: legacy/src/design-system/components/atoms/slider)
- [ ] CartProduct (Legacy: legacy/src/design-system/components/molecules/cart-product)
- [ ] DynamicFilter (Legacy: legacy/src/design-system/components/molecules/dynamic-filter)
- [ ] FaqGroup (Legacy: legacy/src/design-system/components/molecules/faq-group)
- [ ] FaqList (Legacy: legacy/src/design-system/components/molecules/faq-list)
- [ ] HorizontalVariant (Legacy: legacy/src/design-system/components/molecules/horizontal-variant)
- [ ] HorizontalVariants (Legacy: legacy/src/design-system/components/molecules/horizontal-variants)
- [ ] InvoiceList (Legacy: legacy/src/design-system/components/molecules/invoice-list)
- [ ] MiniProductToast (Legacy: legacy/src/design-system/components/molecules/mini-product-toast)
- [ ] DesktopNavigation (Legacy: legacy/src/design-system/components/molecules/navigation/desktop-navigation)
- [ ] MobileNavigation (Legacy: legacy/src/design-system/components/molecules/navigation/mobile-navigation)
- [ ] ProductCard (Legacy: legacy/src/design-system/components/molecules/product-card)
- [ ] ProductCardHorizontal (Legacy: legacy/src/design-system/components/molecules/product-card-horizontal)
- [ ] ProductCardMini (Legacy: legacy/src/design-system/components/molecules/product-card-mini)
- [ ] ProductCardMiniVertical (Legacy: legacy/src/design-system/components/molecules/product-card-mini-vertical)
- [ ] ProductCardRestricted (Legacy: legacy/src/design-system/components/molecules/product-card-restricted)
- [ ] ProductCardVertical (Legacy: legacy/src/design-system/components/molecules/product-card-vertical)
- [ ] ProductCarousel (Legacy: legacy/src/design-system/components/molecules/product-carousel)
- [ ] ProductSearch (Legacy: legacy/src/design-system/components/molecules/product-search)
- [ ] ProductToast (Legacy: legacy/src/design-system/components/molecules/product-toast)
- [ ] ProductVariantList (Legacy: legacy/src/design-system/components/molecules/product-variant-list)
- [ ] UserProfileDropdown (Legacy: legacy/src/design-system/components/molecules/user-profile-dropdown)
- [ ] VerticalVariants (Legacy: legacy/src/design-system/components/molecules/vertical-variants)
- [ ] AccountBoxList (Legacy: legacy/src/design-system/components/organisms/account-box-list)
- [ ] ArticleList (Legacy: legacy/src/design-system/components/organisms/article-list)
- [ ] BrandDetails (Legacy: legacy/src/design-system/components/organisms/brand-details)
- [ ] Breadcrumbs (Legacy: legacy/src/design-system/components/organisms/breadcrumbs)
- [ ] Carousel (Legacy: legacy/src/design-system/components/organisms/carousel)
- [ ] CartDeliveryDetails (Legacy: legacy/src/design-system/components/organisms/cart-delivery-details)
- [ ] CartOrderDetails (Legacy: legacy/src/design-system/components/organisms/cart-order-details)
- [ ] CartProductList (Legacy: legacy/src/design-system/components/organisms/cart-product-list)
- [ ] CartSidebar (Legacy: legacy/src/design-system/components/organisms/cart-sidebar)
- [ ] CreateListForm (Legacy: legacy/src/design-system/components/organisms/create-list-form)
- [ ] DeliveryForm (Legacy: legacy/src/design-system/components/organisms/delivery-form)
- [ ] Footer (Legacy: legacy/src/design-system/components/organisms/footer)
- [ ] Header (Legacy: legacy/src/design-system/components/organisms/header)
- [ ] HeroCarousel (Legacy: legacy/src/design-system/components/organisms/hero-carousel)
- [ ] LoginForm (Legacy: legacy/src/design-system/components/organisms/login-form)
- [ ] OfferCardList (Legacy: legacy/src/design-system/components/organisms/offer-card-list)
- [ ] OrderConfirmation (Legacy: legacy/src/design-system/components/organisms/order-confirmation)
- [ ] ProductBlock (Legacy: legacy/src/design-system/components/organisms/product-block)
- [ ] ProductCardList (Legacy: legacy/src/design-system/components/organisms/product-card-list)
- [ ] ProductDescription (Legacy: legacy/src/design-system/components/organisms/product-description)
- [ ] ProductDetails (Legacy: legacy/src/design-system/components/organisms/product-details)
- [ ] ResetPasswordForm (Legacy: legacy/src/design-system/components/organisms/reset-password-form)
- [ ] BrandPage (Legacy: legacy/src/design-system/components/templates/brand-page)
- [ ] CampaignPage (Legacy: legacy/src/design-system/components/templates/campaign-page)
- [ ] Cart (Legacy: legacy/src/design-system/components/templates/cart)
- [ ] ChooseUserPage (Legacy: legacy/src/design-system/components/templates/choose-user-page)
- [ ] ContactPage (Legacy: legacy/src/design-system/components/templates/contact-page)
- [ ] ContentPage (Legacy: legacy/src/design-system/components/templates/content-page)
- [ ] InspirationPage (Legacy: legacy/src/design-system/components/templates/inspiration-page)
- [ ] LoginPage (Legacy: legacy/src/design-system/components/templates/login-page)
- [ ] MySpendrupsPage (Legacy: legacy/src/design-system/components/templates/my-spendrups-page)
- [ ] OrderConfirmationPage (Legacy: legacy/src/design-system/components/templates/order-confirmation-page)
- [ ] ProductCategoryListingPage (Legacy: legacy/src/design-system/components/templates/product-category-listing-page)
- [ ] ProductPage (Legacy: legacy/src/design-system/components/templates/product-page)
- [ ] ShoppingListPage (Legacy: legacy/src/design-system/components/templates/shopping-list-page)
- [ ] StartPageTemplate (Legacy: legacy/src/design-system/components/templates/start-page-template)
