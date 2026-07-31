# App flow map — `Spendrups-FrontendApp` → templates

Researched from the app (READ-ONLY: `Spendrups-FrontendApp/src`). Maps each flow to its Sitecore
renderings, the XState machine that drives it (with the real event vocabulary = the interaction taxonomy to
simulate), and the DS components that compose it. Use this instead of re-reading the whole app; confirm a
prop shape in the source only when needed.

App architecture: a **Sitecore JSS** app — pages are data-driven compositions of `src/sitecore-components/*`
renderings placed into `src/layouts/*` shells (`DefaultLayout`, `MainLayout`, `CheckoutLayout`,
`LoginLayout`, `SearchLayout`). Business logic is in `src/machines/*` (XState) exposed via `src/context/*`.
Data is normalised by `src/factories/*`. Templates reproduce the essential machine transitions locally
(see `state-harness.md`).

## Flow 0 — Shared chrome & shells

| App source | DS components |
|---|---|
| `sitecore-components/HeaderContainer`, `HeaderNavigation`, `HeaderSearch`, `MenuTop`, `LoginStatus`, `HeaderCalendarToolbar`; `context/HeaderContext.js` | `Header`, `DesktopNavigation`, `MobileNavigation`, `TopNavBar`, `MenuButton`, `Search`/`ProductSearch`, `UserProfileDropdown`, `Logotype`, `Breadcrumbs` |
| `sitecore-components/FooterMainContent`, `FooterSocialLink` | `Footer`, `FooterTopBar`, `Newsletter`, `SocialMediaLinks` |
| `sitecore-components/AgeVerification`, `UserStatusModalMessage`, cookie code | `CookieBar`, `AgeVerificationForm`, `Modal`, `PopUp` |
| `layouts/DefaultLayout.jsx`, `MainLayout.js`, `CheckoutLayout.js`, `LoginLayout.js` | `ContentWrapper`, `MaxWidth` (the `PageShell` wraps header+main+footer) |

## Flow 1 — Checkout & Cart (`machines/cartMachine` + `deliveryDateMachine`)

- **cartMachine states:** `idle`, `addingToCart`, `removingFromCart`, `updatingCart`, `updatingCartData`,
  `updatingCartProducts`, `applyingCampaign`, `updatingCampaignData`, `addingListToCart`,
  `addingRemainingCampaignItems`, `addingCustomOrderNumber`, `changingDeliveryAddress`, `clearingCart`,
  `gettingMiniCart`, `startingCheckout`, `orderComplete`, `failure`; parallel regions `CartPage`/`Checkout`
  and cart-drawer `Open`/`Closed`.
- **cartMachine events (the interaction taxonomy):** `ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_CART`
  (quantity), `CLEAR_CART`, `ADD_LIST_TO_CART`, `APPLY_CAMPAIGN`, `ADD_REMAINING_CAMPAIGN_ITEMS`,
  `UPDATE_CAMPAIGN_DATA`, `ADD_CUSTOM_ORDER_NUMBER`, `CHANGE_DELIVERY_ADDRESS`, `GET_MINI_CART`,
  `TOGGLE_CART`, `GO_TO_CHECKOUT`, `START_CHECKOUT`, `LEAVE_CHECKOUT`, `CLEAR_RECENT_ITEM(S)`,
  `UPDATE_RECENT_ITEM`, `POST`, `RESET`.
- **deliveryDateMachine events:** `FETCH_DELIVERY_DATES`, `SET_DELIVERY_DATE`, `CLEAR_ERROR_MESSAGE`.
- **Renderings (follow to the leaf — this is the markup to mirror):** `sitecore-components/Cart/index.js`
  delegates to `components/checkout/desktop-checkout.js` + `mobile-checkout.js`, which compose
  `components/checkout/checkout-cart/{order-overview,confirm-order,cart-products,checkout-cart-product,
  custom-order-number,delivery-address,free-shipping-message,cart-actions}` and
  `sitecore-components/Cart/{AccessoryPot,ShippingCost,CartDatePicker,CampaignAlerts,OngoingCampaigns}`.
  The real desktop layout: `FlexContainer gap={3}` → left `FlexContainer flex='1 1 60%'` wrapping a
  `BoxWrapper backgroundColor='light'` (heading row of two `Heading order={3}`, `OrderConfirmationDetails`
  "Översikt" = Price/ExternalCharges(=Pant)/Vat(=Moms), a `withStrongBorder` `BoxWrapper` with the terms
  `Checkbox` + `Button` "PlaceOrder", the `ProductCard` lines, a "Lägg till produkt" `ProductSearch`) and
  right `FlexContainer flex='1 1 40%'` (`Heading order={4}` "YourDeliveryDetails", `ClickableListItem` +
  `ExpandableWrapper` collapsibles for address / custom order no, `UiDatePicker`, `AccessoryPot`,
  recommendations). Also `CartToolbar`, `CartReceipt`, `DeliveryDays`, `components/cart/cart-notification`.
- **DS:** `Cart`, `CartSidebar`, `CartProductList`, `CartProduct`, `CartOrderDetails`,
  `CartDeliveryDetails`, `DeliveryForm`, `DeliveryInfoBar`, `UiDatePicker`, `InfoSummaryBox`,
  `QuantityChanger`, `CampaignBox`, `CampaignBanner`, `CampaignMessage`, `AlertBox`, `MessageBanner`,
  `MiniProductToast`, `ProductToast`, `ProductCard` (horizontal), `OrderConfirmation(Page|Details)`,
  `Modal`, `Button`.

## Flow 2 — Product discovery (`machines/productsMachine` + `recommendationsMachine`)

- **productsMachine events:** `FETCH_PRODUCTS`, `FETCH_CONTENT_PRODUCTS`, `FETCH_PRODUCT_DETAILS`,
  `FILTER_PRODUCTS`, `SORT_PRODUCTS`, `ITEMS_PER_PAGE` (page size / pagination), `RESET`. Context (via
  `context/ProductListingContext.js`): active filters, sort, page, results, loading.
- **recommendationsMachine events:** `FETCH_CATEGORY_RECS`, `FETCH_PRODUCT_PAGE_RECS`,
  `FETCH_PRODUCT_PAGE_REPLACEMENT_RECS`, `FETCH_REPLACEMENT_RECS`, `FETCH_CART_RECS`, `FETCH_BASKET_RECS`,
  `FETCH_START_PAGE_RECS`.
- **Renderings:** `CategoryProductList`, `CategoryProductFilters`, `ProductList`, `ProductListSelection`,
  `ProductListStart`, `ProductDisplay`, `SearchResults`, `RecommendedProductsSlideshow`,
  `UsuallyBoughtProductList`, `HeaderSearch`.
- **DS:** `DynamicFilter`, `RangeInput`, `Slider`, `Checkbox`, `SortableList`, `ProductCardList`,
  `ProductCard` family, `ProductCarousel`, `ProductBlock`, `ProductDetails`, `ProductDescription`,
  `ProductVariantList`, `AddToCartButton`, `Pagination`, `Breadcrumbs`, `Tabs`, `Search`, `ProductSearch`,
  `MessageBanner`.

## Flow 3 — Account & self-service

| Machine | Events (interactions) | Renderings | DS |
|---|---|---|---|
| `favoriteListMachine` | `ADD_PRODUCT_TO_FAVORITE_LIST`, `REMOVE_PRODUCT_FROM_FAVORITE_LIST`, `CONVERT_TO_PURCHASE_LIST`, `FETCH_FAVORITE_LIST(_WITH_PRODUCTS)` | `FavoriteList`, `FavoriteListToolBar` | `ProductCardList`, `ProductCard`, `Button` |
| `purchaseListsMachine` | `CREATE_NEW_PURCHASE_LIST`, `CREATE_PURCHASE_LIST_FROM_CART`, `CREATE_PURCHASE_LIST_WITH_ONE_ITEM`, `ADD_PRODUCT_TO_(SELECTED_)PURCHASE_LIST`, `UPDATE_SELECTED_PURCHASE_LIST`, `REMOVE_SELECTED_PURCHASE_LIST(S)`, `COPY_SELECTED_PURCHASE_LIST`, `ASSIGN_CUSTOMERS_TO_PURCHASE_LIST`, `DOWNLOAD_PURCHASE_LIST_AS_PDF/WORD`, `SEARCH_COMPANY`, `FETCH_*` | `PurchaseAndFavoriteList`, `ListPurchaseListForUser`, `PurchaseListTeaser` | `PurchaseList`, `CreateListForm`, `ProductCardList`, `Modal`, `Table` |
| `orderReturnMachine` | `FETCH_ORDERS`, `FETCH_ORDER`, `GO_TO_CHOOSE_ORDER`, `ORDER_SELECTED`, `GO_TO_CHOOSE_ORDER_ITEMS`, `ORDER_ITEM_SELECTED`, `UPDATE_ACCUMULATED_RETURN_INFO`, `CLEAR_ACCUMULATED_RETURN_INFO`, `NEXT` | `OrderReturn`, `GetReturnOrderTeaser` | `Table`, `OrderItem`, `QuantityChanger`, `SingleSelect`, `InfoSummaryBox`, `Tabs`, `Button` |
| `orderHistoryMachine` | `FETCH_ORDERS`, `ORDER_SELECTED`, `DOWNLOAD_INVOICE_PDF`, `RESET` | `OrderHistory`, `LatestOrder`, `OrderHistoryTeaser` | `Table`, `OrderItem`, `OrderConfirmationDetails`, `Pagination` |
| `invoiceMachine` | `FETCH_INVOICES`, `FETCH_PAID_INVOICES`, `DOWNLOAD_INVOICE_PDF(_BY_ORDER)`, `CLEAR_ERROR` | `Invoices`, `PaidInvoices` | `InvoiceList`, `Tabs`, `Pagination` |
| (form) | edit + submit `ADD_USER_DETAILS` | `UserDetails`, `UpdateUserDetails`, `ProfileNavigation`, `Balance`, `BonusMessages` | `Form`, `FormGroup`, `InputText`, `UserInfoSummary`, `AccountBox(List)`, `InfoSummaryBox` |

## Flow 4 — Marketing, content & entry (`authenticationMachine` + `brandMachine`)

- **authenticationMachine events:** `ENTER_USERNAME`, `ENTER_PASSWORD`, `SUBMIT`, `CHOOSE_USER`,
  `REQUEST_RESET_PASSWORD_LINK`, `INSTRUCTIONS_HAVE_BEEN_SENT`, `CHANGE_PASSWORD_BY_LINK`,
  `ADD_USER_DETAILS`, `LOG_OUT`, `LOG_OUT_RESTRICTED`, `RESET_USER`, `SET_PATH_FROM`, `GO_IDLE`.
- **Renderings:** `Login`, `LoginReset`, `BecomeCustomer`, `AgeVerification`; marketing:
  `ProductListStart`, `Brand`, `PromoBrands`, `InspirationPage`, `Intro`, `LatestArticles`, `FAQ`,
  `FAQSection`, `Banner`, `ShopperOffer`, `ExtendedProductTeaser`, `Wave`, `Cards`, `RichData`,
  `OneColumn`/`TwoColumn`/`ThreeColumn`, `Carousel`.
- **DS:** `LoginPage`, `LoginForm`, `ResetPasswordForm`, `AgeVerificationForm`, `AccountBoxList`,
  `ClickableListItem`, `HeroCarousel`, `Hero`, `OfferCardList`, `OfferCard`, `Teaser`, `CampaignBanner`,
  `CampaignBox`, `BrandDetails`, `RichText`, `IntroBlock`, `ArticleList`, `ArticleCard`, `FaqHero`,
  `FaqGroup`, `FaqList`, `Newsletter`, `WaveDivider`, `Video`, `Form`, `Button`.

## The 11 DS "blocked" page templates (from `MIGRATION-PROGRESS.md`) map here

`StartPageTemplate`→Flow 4 · `BrandPage`→Flow 4 · `CampaignPage`→Flow 4 · `ContentPage`/`InspirationPage`→
Flow 4 · `ContactPage`→Flow 4 · `ChooseUserPage`→Flow 4 · `ProductCategoryListingPage`→Flow 2 ·
`ProductPage`→Flow 2 · `ShoppingListPage`→Flow 3 · `MySpendrupsPage`→Flow 3. These were deferred during
migration because they are story-only Sitecore templates (no `.tsx`); this phase builds them for real as
functional templates composing the now-migrated components.

## Data shapes (from `src/factories/*`)

Confirm exact fields in the factory before writing a fixture, but broadly:
- **product / cart line** (`factories/product.js`, `order.js`): `partNo`, `productName`, `primaryImageUrl`,
  `packaging`, `pricePerUnit`, `priceStr`, `salesUnit`, `itemNumberPerSalesUnit`, `quantity`, `tags`,
  `productVariantList`, `activeCampaign`, `outOfStock` — matches the DS `ProductCardProduct`.
- **order / return** (`factories/order.js`): order header + lines (partNo, qty, price), return reasons.
- **invoice** (`factories/invoice.js`): number, date, due date, amount, paid/overdue status, pdf url.
- **purchase list** (`factories/purchaseList.js`): id, name, items[], assigned customers.
