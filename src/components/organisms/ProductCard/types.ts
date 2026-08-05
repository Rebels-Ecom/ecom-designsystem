import type { LinkComponentType } from '../../../lib/link'
import type { PictureProps } from '../../atoms/Picture'
import type { TagProps } from '../../atoms/Tag'
import type { AlertBoxProps } from '../../molecules/AlertBox'
import type { ProductVariantListItem } from '../ProductVariantList'

/**
 * Shared types for the ProductCard family (`ProductCard` → `ProductCardHorizontal` /
 * `ProductCardVertical` / `ProductCardRestricted`). Kept in a leaf module so the four components can
 * share them without a runtime import cycle — the dispatcher imports the children, the children import
 * only these `type`s (erased at compile time).
 */

/** Which layout the dispatcher renders. */
export type CardDisplayType = 'vertical' | 'horizontal'

/**
 * A link renderer accepted by the cards: an injected component (e.g. a router `Link`) **or** the
 * intrinsic `'a'` tag — the two forms real consumers pass. When omitted the cards fall back to a
 * semantic `<a>`.
 */
export type ProductCardLinkComponent = LinkComponentType | 'a'

/**
 * Product-area key mixed into the quantity field id. The common areas are enumerated for autocomplete,
 * but any string is accepted (`string & {}`) so consumer-specific areas (e.g. `'content-page'`,
 * `'purchase-list'`) compile without churn — the value only namespaces the field id, nothing branches
 * on it.
 */
export type ProductCardArea =
  | 'category'
  | 'recommended'
  | 'details'
  | 'cart'
  | 'inspiration'
  | 'content-page'
  | 'purchase-list'
  | (string & {})

/** Active-campaign ribbon descriptor (a runtime brand colour + its title). */
export interface ProductCardCampaign {
  /** Ribbon text. */
  title?: string
  /**
   * Ribbon background colour (a runtime brand colour). Ensure it clears ≥4.5:1 against the white
   * ribbon text (1.4.3).
   */
  color?: string
}

/**
 * A selectable packaging variant. Structurally a **superset** of {@link ProductVariantListItem} (so a
 * `ProductCardVariant[]` can be passed straight to the variant pickers) plus the richer fields the
 * dispatcher's package-change handler reads to rebuild the active product.
 */
export interface ProductCardVariant extends ProductVariantListItem {
  /** Country of origin, shown in the variant meta row. */
  country?: string
  /** Numeric list price of the variant. */
  price?: number
  /** Per-unit numeric price (used to recompute the total). */
  pricePerUnit?: number
  /** Pre-formatted per-unit price string. */
  pricePerUnitString?: string
  /** Sales-unit label. */
  salesUnit?: string
  /** Items per sales unit (used to recompute the total). */
  itemNumberPerSalesUnit?: number
  /** Active campaign carried by this variant. */
  activeCampaign?: ProductCardCampaign | null
  /** Out-of-stock flag for this variant. */
  outOfStock?: boolean
  /** Accessory-pot flag for this variant. */
  isAccessoryPotItem?: boolean
  /** Decorative status tags for this variant. */
  tags?: TagProps[]
}

/**
 * The product model a ProductCard renders. Mirrors the legacy `IProduct` shape (so consumer data maps
 * across unchanged) and additionally carries the dispatcher's derived fields (`productImage`,
 * `selectedVariantId`) once merged into the internal state.
 */
export interface ProductCardProduct {
  /** Article number of the (selected) variant — keys the card, quantity field and favourite actions. */
  partNo: string
  /** Product display name — the card heading. */
  productName: string
  /** Product page URL — turns the name and image into links when set. */
  productUrl?: string
  /** Raw primary image URL — the dispatcher wraps it into a `Picture` payload. */
  primaryImageUrl: string
  /** Country of origin, shown in the meta rows. */
  country?: string
  /** Packaging label shown on the variant-picker button (e.g. "33cl Engångsglas"). */
  packaging?: string
  /** Numeric list price. */
  price?: number
  /** Pre-formatted list-price string (e.g. "136"). */
  priceStr?: string
  /** Per-unit numeric price (drives the total-price math). */
  pricePerUnit?: number
  /** Pre-formatted per-unit price string. */
  pricePerUnitString?: string
  /** Sales-unit label (e.g. "KLI"). */
  salesUnit?: string
  /** Items per sales unit (drives the total-price math). */
  itemNumberPerSalesUnit: number
  /**
   * Controlled quantity as a string (so the field can be empty). Optional: the app's loading
   * "skeleton floor" omits it and the dispatcher resolves a value. The merged product the dispatcher
   * hands to the cards ({@link ResolvedProductCardProduct}) always carries it. @default '1'
   */
  quantity?: string
  /** Pre-formatted total-price string; recomputed by the dispatcher as the quantity changes. */
  totalPrice?: string
  /** Selectable packaging variants; the picker button is disabled with fewer than two. */
  productVariantList?: ProductCardVariant[]
  /** Out-of-stock flag. */
  outOfStock?: boolean
  /** Decorative status tags (e.g. "Eko", "Vegan"). */
  tags?: TagProps[]
  /** Show the seller-only marker (an eye glyph). */
  sellerOnly?: boolean
  /** Active campaign ribbon — takes precedence over `isLimitedProduct` / `outOfStock`. */
  activeCampaign?: ProductCardCampaign | null
  /** Mark the product as limited (shows `limitedLabel` in the ribbon). */
  isLimitedProduct?: boolean
  /** Show the accessory-pot marker (an "S" badge). */
  isAccessoryPotItem?: boolean
  /** Campaign title used by the horizontal card to detect a gift row (`=== 'Gåva'`). */
  campaignTitle?: string

  // Consumer-supplied translation labels (already the consumer's to localise, like `alt`/`children`).
  /** Prefix for the article-number line (e.g. "Art.nr."). */
  partNoLabel?: string
  /** Unit suffix on the price lines (e.g. "kolli"). */
  unitLabel?: string
  /** Currency suffix on the price lines (e.g. "kr"). */
  currencyLabel?: string
  /** Label preceding the list price (e.g. "Pris"). */
  priceLabel?: string
  /** "at price" separator on the per-item line (e.g. "à"); falls back to `labels.priceSeparator`. */
  aLabel?: string
  /** Ribbon text shown when out of stock. */
  outOfStockLabel?: string
  /** Ribbon text for a limited product. */
  limitedLabel?: string

  // Dispatcher-derived fields (present on the merged internal product passed to the children).
  /** `Picture` payload derived from `primaryImageUrl` (or a chosen variant's image). */
  productImage?: PictureProps
  /** Currently-selected variant id. */
  selectedVariantId?: string
}

/**
 * The product the dispatcher merges internally and hands to the child cards: a {@link ProductCardProduct}
 * with `quantity` guaranteed resolved to a string (the dispatcher always seeds/clamps it). The cards
 * read `quantity` directly, so this keeps their logic — including the legacy `quantity <= '0'` check —
 * free of `undefined` handling even though the public input allows omitting `quantity`.
 */
export type ResolvedProductCardProduct = ProductCardProduct & { quantity: string }

/** Optional tooltip strings for the icon actions (consumer-supplied, already localisable). */
export interface ProductCardTooltips {
  /** Tooltip for the add-to-favourites action. */
  addToFavorites?: string
  /** Tooltip for the remove-from-favourites action. */
  removeFromFavorites?: string
  /** Tooltip for the add-to-purchase-list action. */
  addToPurchaseList?: string
  /** Tooltip (and packaging-button label fallback) for changing the variant. */
  changeVariant?: string
  /** Tooltip for the seller-only marker. */
  sellerOnly?: string
  /** Tooltip for the accessory-pot marker. */
  accessoryPotItem?: string
  /** Tooltip for a stock-shortage ribbon. */
  stockShortage?: string
  /** Tooltip for an out-of-stock ribbon. */
  outOfStock?: string
}

/** Native `<img>` priority hints forwarded to the derived `Picture`. */
export interface ProductCardImagePriority {
  /** Fetch-priority hint. */
  fetchPriority: 'auto' | 'high' | 'low'
  /** Loading strategy. */
  loading: 'eager' | 'lazy'
}

/**
 * Built-in UI strings the cards render that the consumer does not otherwise supply — accessible names
 * for the icon controls and the fixed words in the quantity summary. English defaults; override via the
 * `labels` prop. (The many `*Label` fields on `product` are consumer data and localised there.)
 */
export interface ProductCardLabels {
  /** Prefix of the horizontal card's quantity line (legacy "Antal"). @default 'Quantity' */
  quantity: string
  /** Per-item unit word in the quantity line (legacy "st"). @default 'pcs' */
  pieces: string
  /** "at price" separator when `product.aLabel` is unset (legacy "á"). @default 'à' */
  priceSeparator: string
  /** Accessible name for the seller-only marker when it has no tooltip. @default 'Seller only' */
  sellerOnly: string
  /** Accessible name for the accessory-pot marker when it has no tooltip. @default 'Accessory pot item' */
  accessoryPotItem: string
  /** Accessible name for the remove-product button. @default 'Remove product' */
  removeProduct: string
  /** Accessible name for the open-variants button. @default 'Open variants list' */
  openVariants: string
  /** Accessible name for the add-to-purchase-list button. @default 'Add to purchase list' */
  addToPurchaseList: string
  /** Accessible name for the add-to-favourites toggle. @default 'Add to favourites' */
  addToFavorites: string
  /** Accessible name for the remove-from-favourites toggle. @default 'Remove from favourites' */
  removeFromFavorites: string
  /** Accessible name for the packaging button when `product.packaging` is empty. @default 'Select packaging' */
  selectPackaging: string
  /** Default packaging-button tooltip when `tooltips.changeVariant` is unset (legacy "Välj variant"). @default 'Select variant' */
  changeVariant: string
  /** Default label for the alert-box trigger button (legacy "Byt produkt"). @default 'Change product' */
  changeProduct: string
}

export const defaultProductCardLabels: ProductCardLabels = {
  quantity: 'Quantity',
  pieces: 'pcs',
  priceSeparator: 'à',
  sellerOnly: 'Seller only',
  accessoryPotItem: 'Accessory pot item',
  removeProduct: 'Remove product',
  openVariants: 'Open variants list',
  addToPurchaseList: 'Add to purchase list',
  addToFavorites: 'Add to favourites',
  removeFromFavorites: 'Remove from favourites',
  selectPackaging: 'Select packaging',
  changeVariant: 'Select variant',
  changeProduct: 'Change product',
}

/** Props the dispatcher forwards to every card variant. */
export interface ProductCardChildProps {
  /** The merged, stateful product (quantity always resolved — see {@link ResolvedProductCardProduct}). */
  product: ResolvedProductCardProduct
  /** Derived image payload (also present on `product.productImage`). */
  productImage: PictureProps
  /** Replace the body with a skeleton + polite status region. */
  loading: boolean
  /** Show the add-to-cart button in a busy state. */
  buttonLoading?: boolean
  /** Disable the add-to-cart control. */
  disabled?: boolean
  /** Hide all price copy. */
  hidePrice?: boolean
  /** Hide the add-to-cart control. */
  hideCartButton?: boolean
  /** Add-to-cart handler (receives the current product). */
  addToCart: (product: ProductCardProduct) => void
  /** Visible add-to-cart label — also the control's accessible name (2.5.3). */
  addToCartBtnLabel: string
  /** Component (or the `'a'` tag) used to render the product links. Defaults to a semantic `<a>`. */
  linkComponent?: ProductCardLinkComponent
  /** Extra classes for the card root. */
  className?: string
  /** Analytics hook fired when the product name/image link is activated. */
  onClick?: () => void
  /** Whether the variant picker is open. */
  variantsOpen: boolean
  /** Open the variant picker. */
  onVariantsButtonClick: () => void
  /**
   * Apply the variant chosen in the picker. The pickers emit the narrow {@link ProductVariantListItem}
   * shape; the dispatcher resolves it back to the full {@link ProductCardVariant} and rebuilds the
   * product, so the card just forwards the picker's callback here.
   */
  onVariantSelect: (variant: ProductVariantListItem | undefined) => void
  /** Currently-selected variant id. */
  selectedVariantId?: string
  /** Close the variant picker. */
  onCloseVariants: () => void
  /** Optional tooltip strings for the icon actions. */
  tooltips?: ProductCardTooltips
  /** Show the favourite toggle. */
  showFavoriteIcon?: boolean
  /** Ids of the user's favourite products (drives the toggle state). */
  favoriteProductsIds?: string[]
  /** Fires when the favourite toggle is activated. */
  onFavoriteIconClick?: (partNo: string, isFavorite: boolean, totalPrice: string) => void
  /** Pulse the favourite icon to signal a pending request. */
  isAddingToFavorites?: boolean
  /** Allow negative quantities (drops the clamp to 0). */
  allowNegative?: boolean
  /** Overridable UI strings — see {@link ProductCardLabels}. */
  labels?: Partial<ProductCardLabels>
}

/** Extra props specific to the horizontal card. */
export interface ProductCardHorizontalExtras {
  /** Fires with the new quantity as the field changes. */
  onChangeQuantity?: (quantity: number) => void
  /** Present the quantity as read-only text. */
  productQuantityDisabled?: boolean
  /** Starting quantity for the field. */
  defaultQuantity?: string
  /** Fires when the remove button is pressed (with the part number). */
  onClickRemoveProduct?: (id: string) => void
  /** Hide the remove button. */
  hideRemoveButton?: boolean
  /** Restricted user — hides pricing/quantity and shows an add-to-cart button instead of the cart icon. */
  isRestrictedUser?: boolean
  /** Show the add-to-purchase-list icon. */
  showAddToPurchaseListIcon?: boolean
  /** Fires when the add-to-purchase-list icon is pressed (part number + total). */
  onSaveToPurchaseListClick?: (partNo: string, totalPrice: string) => void
  /** Draw a card border. */
  border?: boolean
  /** Render the smaller product image. */
  displaySmallImage?: boolean
  /** Upper bound for the quantity. */
  maxQuantity?: number
  /** Optional alert box (a "change product" affordance). */
  alertBox?: AlertBoxProps
  /** Debounce (ms) for reporting quantity changes; when set, uses the debounced field. */
  debounceQuantityVal?: number
  /** Product-area key mixed into the quantity field id. */
  productArea?: ProductCardArea
  /** Show the packaging line. */
  showPackaging?: boolean
}

/** Extra props specific to the vertical card. */
export interface ProductCardVerticalExtras {
  /** Fires with the new quantity as the field changes. */
  onChangeQuantity?: (quantity: number) => void
  /** Present the quantity as read-only text. */
  productQuantityDisabled?: boolean
  /** Starting quantity for the field. */
  defaultQuantity?: string
  /** Show the add-to-purchase-list icon. */
  showAddToPurchaseListIcon?: boolean
  /** Fires when the add-to-purchase-list icon is pressed (part number + total). */
  onSaveToPurchaseListClick?: (partNo: string, totalPrice: string) => void
  /** Product-area key mixed into the quantity field id. */
  productArea?: ProductCardArea
}
