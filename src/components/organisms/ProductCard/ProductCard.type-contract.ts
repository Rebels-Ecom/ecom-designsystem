/**
 * Compile-time type contract for {@link ProductCardProps} (Phase 0(b) of the product-card hardening).
 *
 * This is NOT a test file and NOT a story — it is never imported, so Vite never bundles it, but
 * `tsc --noEmit` (via `pnpm build`) type-checks it. Each `export const … satisfies ProductCardProps`
 * pins one real, audited consumer call shape so a future API change that would break v1.6.6 usage
 * fails the build instead of the app. `export` dodges `noUnusedLocals` (TS6133).
 *
 * Phase 0 asserts only shapes the current Batch-30 API already accepts (this proves the baseline) and
 * reserves `// @ts-expect-error` for shapes that must be **permanently** invalid. Real shapes that the
 * type does not yet accept (the string `linkComponent='a'`, the `'content-page'` / `'purchase-list'`
 * product areas, the skeleton floor that omits `quantity`, raw order items with extra fields, and the
 * accepted-but-`@deprecated` v1-ignored props) are added in Phase 4 as the type widens to accept them —
 * do NOT `@ts-expect-error` them here, or the suppression becomes its own error once the line compiles.
 */
import type { ProductCardProduct } from './types'
import type { ProductCardProps } from './ProductCard'

/** A fully-populated product (the shape the app's factories emit once `.toJS()`-ed). */
const productFull = {
  partNo: '2543824',
  productName: 'El Esteco Malbec',
  productUrl: '/Product/2543824',
  primaryImageUrl: 'https://example.test/img',
  country: 'Argentina',
  packaging: '75cl Engångsglas',
  price: 136,
  priceStr: '136',
  pricePerUnit: 136,
  pricePerUnitString: '136',
  salesUnit: 'ST',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  totalPrice: '136,00',
  tags: [{ text: 'Eko', color: 'green' }],
  productVariantList: [],
  partNoLabel: 'Art.nr.',
  unitLabel: 'st',
  currencyLabel: 'kr',
  priceLabel: 'Pris',
  aLabel: 'à',
} satisfies ProductCardProduct

/** Vertical category card — the default grid card (uncontrolled quantity). */
export const verticalCategoryCard = {
  cardDisplay: 'vertical',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  productArea: 'category',
  showFavoriteIcon: true,
  favoriteProductsIds: ['2543824'],
  onFavoriteIconClick: () => {},
  onClick: () => {},
} satisfies ProductCardProps

/** Horizontal cart line — remove button, packaging line, an internal debounce. */
export const horizontalCartLine = {
  cardDisplay: 'horizontal',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  onRemoveProduct: () => {},
  showPackaging: true,
  productArea: 'cart',
  debounceQuantityVal: 300,
} satisfies ProductCardProps

/** Controlled order-return line — seeded quantity, notify-on-change, upper bound. */
export const controlledOrderReturn = {
  cardDisplay: 'horizontal',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Add',
  addToCart: () => {},
  onChangeQuantity: () => {},
  defaultQuantity: '2',
  maxQuantity: 99,
  productArea: 'details',
  hideCartButton: true,
} satisfies ProductCardProps

/** Order-details line — allows negative quantities (the single `allowNegative` caller). */
export const orderDetailsLine = {
  cardDisplay: 'horizontal',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Add',
  addToCart: () => {},
  onChangeQuantity: () => {},
  allowNegative: true,
  productArea: 'details',
} satisfies ProductCardProps

/** Checkout escape hatch — `debounceQuantityVal={0}` so the app runs its own debounce. */
export const checkoutLine = {
  cardDisplay: 'horizontal',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Add',
  addToCart: () => {},
  onChangeQuantity: () => {},
  debounceQuantityVal: 0,
  productArea: 'cart',
} satisfies ProductCardProps

/** Restricted user — the trimmed vertical card. */
export const restrictedUser = {
  cardDisplay: 'vertical',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  isRestrictedUser: true,
} satisfies ProductCardProps

/** Loading state — the app flips `loading` while the product resolves. */
export const loadingCard = {
  cardDisplay: 'vertical',
  product: productFull,
  loading: true,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
} satisfies ProductCardProps

/** Dynamic layout — `cardDisplay` is computed at the call site, so the interface must stay flat. */
export const dynamicDisplay = {
  cardDisplay: 'vertical' as 'vertical' | 'horizontal',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
} satisfies ProductCardProps

// --- Phase 4: shapes the widened / deprecated API now accepts (previously not-yet-accepted) --------

/** Loading skeleton floor — the minimal object the app passes while loading (omits `quantity`). */
export const skeletonFloorCard = {
  cardDisplay: 'vertical',
  loading: true,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  product: {
    partNo: 'SKEL-1',
    productName: 'Skeleton product',
    primaryImageUrl: '',
    country: '',
    packaging: '',
    priceStr: '',
    price: 0,
    salesUnit: '',
    itemNumberPerSalesUnit: 0,
    tags: [],
    productVariantList: [],
  },
} satisfies ProductCardProps

/** `linkComponent` as the intrinsic `'a'` tag string (the app's polymorphic-link string form). */
export const linkStringCard = {
  cardDisplay: 'vertical',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  linkComponent: 'a',
} satisfies ProductCardProps

/** Consumer-specific product areas widened in Phase 4. */
export const contentPageArea = {
  cardDisplay: 'vertical',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  productArea: 'content-page',
} satisfies ProductCardProps

export const purchaseListArea = {
  cardDisplay: 'horizontal',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  productArea: 'purchase-list',
} satisfies ProductCardProps

/** The v1-ignored props: accepted (so the app's TS migration compiles) and `@deprecated`. */
export const deprecatedIgnoredProps = {
  cardDisplay: 'horizontal',
  product: productFull,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  onClickRemoveProduct: () => {},
  variantsInCart: ['1125111'],
  disabledNoBorder: true,
  iconButton: true,
  isAddingToCart: true,
} satisfies ProductCardProps

/**
 * Raw order-item product carrying extra fields the card ignores (order history/return). It assigns via
 * a typed variable — structural typing allows the extra props (no excess-property check on a variable).
 */
const rawOrderItem = {
  partNo: '1125111',
  productName: 'Norrlands Guld',
  primaryImageUrl: '',
  salesUnit: 'st',
  itemNumberPerSalesUnit: 1,
  quantity: '1',
  netPriceBeforeDiscount: 9.5,
  validAssortment: true,
  reasonCode: 'RETURN',
}
export const rawOrderItemCard = {
  cardDisplay: 'horizontal',
  product: rawOrderItem,
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
  onChangeQuantity: () => {},
} satisfies ProductCardProps

// @ts-expect-error `product` is required — omitting it must always be a type error (permanently invalid).
export const missingProduct: ProductCardProps = {
  cardDisplay: 'vertical',
  loading: false,
  addToCartBtnLabel: 'Lägg i varukorg',
  addToCart: () => {},
}
