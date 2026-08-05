import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, Ref } from 'react';
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg';
import { cn } from '../../../lib/cn';
import { resolveLink, type LinkComponentType } from '../../../lib/link';
import { Heading, type HeadingOrder } from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';
import { Picture } from '../../atoms/Picture';
import { Placeholder } from '../../atoms/Placeholder';
import { Tag } from '../../atoms/Tag';
import {
  AddToCartButton,
  type AddToCartButtonLabels,
} from '../../molecules/AddToCartButton';
import { Button } from '../../molecules/Button';
import { IconButton } from '../../molecules/IconButton';
import { ProductVariant } from '../../molecules/ProductVariant';
import { productPicture } from '../ProductCard/productPicture';
import type {
  ProductCardArea,
  ProductCardImagePriority,
  ProductCardProduct,
  ProductCardTooltips,
  ProductCardVariant,
} from '../ProductCard/types';
import {
  defaultVerticalVariantsLabels,
  type VerticalVariantsLabels,
} from '../VerticalVariants';

/**
 * Legacy `calculateTotalPrice` (mini card) — `unitPrice × unitNumber × quantity`, clamped
 * (price ≥ 0, unitNumber ≥ 1, quantity ≥ 0) and formatted with the **sv-SE** locale (comma decimal,
 * space thousands separator). Kept byte-for-byte from `legacy/src/helpers/format-helper.ts` — the mini
 * card formats totals differently from the rest of the family (which uses `convertNumToStr`), and that
 * difference is part of its v1.6.6 behaviour.
 */
export function calculateMiniTotalPrice(
  unitPrice: number | undefined,
  quantity: number,
  unitNumber: number | undefined,
): string {
  const safeUnitPrice = Number.isFinite(unitPrice) ? Math.max(0, unitPrice as number) : 0;
  const safeUnitNumber = Number.isFinite(unitNumber) ? Math.max(1, unitNumber as number) : 1;
  const safeQuantity = Number.isFinite(quantity) ? Math.max(0, quantity) : 0;
  const rawTotal = safeUnitPrice * safeUnitNumber * safeQuantity;
  return rawTotal.toLocaleString('sv-SE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Trailing debounce for a payload-carrying callback — the V2 equivalent of the legacy
 * `useDebounceWithPayload` (lodash `debounce`, cancel-on-unmount). Keeps a live callback ref so the
 * latest closure runs, and cancels a pending call on unmount so a late quantity update can't fire after
 * the card is gone.
 */
function useDebouncedCallback<T>(callback: (payload: T) => void, delay: number) {
  const callbackRef = useRef(callback);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return useCallback(
    (payload: T) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => callbackRef.current(payload), delay);
    },
    [delay],
  );
}

export interface ProductCardMiniVerticalLabels {
  /** Accessible name for the variant-picker button when `product.packaging` is empty. @default 'Select packaging' */
  selectPackaging: string;
  /** Accessible name for the add-to-favourites toggle. @default 'Add to favourites' */
  addToFavorites: string;
  /** Accessible name for the remove-from-favourites toggle. @default 'Remove from favourites' */
  removeFromFavorites: string;
  /** Accessible name for the add-to-purchase-list button. @default 'Add to purchase list' */
  addToPurchaseList: string;
  /** Accessible name for the seller-only marker. @default 'Seller only' */
  sellerOnly: string;
  /** Accessible name for the accessory-pot marker. @default 'Accessory pot item' */
  accessoryPotItem: string;
  /** Status text announced while the card is loading. @default 'Loading product' */
  loadingStatus: string;
  /** Builds the quantity-summary line. @default `${qty} x ${unit} (${count} pcs)` */
  quantitySummary: (
    quantity: number,
    salesUnit: string,
    itemNumberPerSalesUnit: number,
  ) => string;
}

export const defaultProductCardMiniVerticalLabels: ProductCardMiniVerticalLabels =
  {
    selectPackaging: 'Select packaging',
    addToFavorites: 'Add to favourites',
    removeFromFavorites: 'Remove from favourites',
    addToPurchaseList: 'Add to purchase list',
    sellerOnly: 'Seller only',
    accessoryPotItem: 'Accessory pot item',
    loadingStatus: 'Loading product',
    quantitySummary: (quantity, salesUnit, itemNumberPerSalesUnit) =>
      `${quantity} x ${salesUnit} (${itemNumberPerSalesUnit} pcs)`,
  };

/** A single `{ variantId, quantity }` entry — the in-cart quantity per packaging variant. */
export interface ProductCardMiniVariantInCart {
  variantId: string;
  quantity: number;
}

export interface ProductCardMiniVerticalProps {
  /** The product to render (the shared family shape — the mini reads the same fields as `ProductCard`). */
  product: ProductCardProduct;
  /**
   * In-cart quantity per packaging variant. Seeds the stepper for the selected variant and re-syncs it
   * when the cart changes (legacy `variantsInCart`). @default []
   */
  variantsInCart?: ProductCardMiniVariantInCart[];
  /** Visible add-to-cart label — also the button's accessible name (2.5.3), so it is required. */
  addToCartBtnLabel: string;
  /**
   * Add-to-cart handler. For a **restricted** user it is called with no arguments (login-and-buy);
   * otherwise the card bumps the quantity to ≥1 and reports the change through `onChangeQuantity`
   * (matching the legacy mini card — Add does not itself call `addToCart` for a normal user).
   */
  addToCart: () => void;
  /**
   * Fires (debounced 1000 ms) with the merged product whenever the quantity changes — via the stepper
   * or the Add button. The app drives the cart from this (its own optimistic update + request).
   */
  onChangeQuantity?: (product: ProductCardProduct) => void;
  /** Fires when a packaging variant is applied, with the newly-merged product. */
  onVariantChange?: (product: ProductCardProduct) => void;
  /** Fires when the variant picker is opened (analytics / lazy-load hook). */
  onVariantsButtonClick?: () => void;
  /** Fires when the variant picker is closed. */
  onCloseVariants?: () => void;
  /**
   * Heading level for the product name — set it so the name fits the surrounding document outline,
   * keeping heading levels monotonic. @default 3
   */
  headingLevel?: HeadingOrder;
  /** Upper bound for the quantity stepper. */
  maxQuantity?: number;
  /** Fires when the product name/image link is activated (analytics hook). */
  onProductClick?: () => void;
  /** Hide the add-to-cart control entirely. @default false */
  hideCartButton?: boolean;
  /** Hide all price + quantity copy. @default false */
  hidePrice?: boolean;
  /**
   * Restricted user — hides pricing (like `hidePrice`) and also hides the favourite / add-to-purchase-list
   * icons (those account actions aren't available to restricted users). @default false
   */
  isRestrictedUser?: boolean;
  /** Replace the card body with a skeleton + a polite status region. @default false */
  loading?: boolean;
  /** Disable the add-to-cart control. @default false */
  disabled?: boolean;
  /** Show the add-to-cart control in a busy state. @default false */
  buttonLoading?: boolean;
  /** Show the favourite toggle (suppressed for `isRestrictedUser`). @default false */
  showFavoriteIcon?: boolean;
  /** Ids of the user's favourite products — drives the favourite toggle state. */
  favoriteProductsIds?: string[];
  /** Fires when the favourite toggle is activated (part number, current state, total). */
  onFavoriteIconClick?: (partNo: string, isFavorite: boolean, totalPrice: string) => void;
  /** Pulse the favourite icon to signal a pending request. @default false */
  isAddingToFavorites?: boolean;
  /** Show the add-to-purchase-list button (suppressed for `isRestrictedUser`). @default false */
  showAddToPurchaseListIcon?: boolean;
  /** Fires when the add-to-purchase-list button is activated (part number + total). */
  onSaveToPurchaseListClick?: (partNo: string, totalPrice: string) => void;
  /** Product-area key mixed into the quantity field id. */
  productArea?: ProductCardArea;
  /** Native `<img>` priority hints forwarded to the derived `Picture`. */
  imagePriority?: ProductCardImagePriority;
  /** Optional tooltip strings for the icon actions and markers. */
  tooltips?: ProductCardTooltips;
  /**
   * Component used to render the product links. Defaults to a semantic `<a>`; pass a client-side
   * router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType;
  /** Image URL swapped in when the product image is missing or broken. */
  fallbackImageUrl?: string;
  /** Overridable UI strings (English defaults) — see {@link ProductCardMiniVerticalLabels}. */
  labels?: Partial<ProductCardMiniVerticalLabels>;
  /** Overridable strings for the composed add-to-cart stepper. */
  addToCartLabels?: Partial<AddToCartButtonLabels>;
  /** Overridable strings for the composed variant picker. */
  variantsLabels?: VerticalVariantsLabels;
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string;
  /** Forwarded to the root `<article>`. */
  ref?: Ref<HTMLElement>;
}

const cardClasses =
  'relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-white px-2 pt-4 pb-3 shadow-lg';

/** The merged, stateful product the mini card owns internally (quantity resolved as a number). */
type MiniCardState = Omit<ProductCardProduct, 'quantity'> & {
  quantity: number;
  inputQuantity: number;
  totalPrice: string;
  selectedVariantId: string;
};

/**
 * Compact vertical product card (organism) — a thumbnail, status markers, name, pricing, a packaging
 * variant picker and an add-to-cart stepper. Composes {@link Picture}, {@link Tag}, {@link Button},
 * {@link IconButton}, {@link AddToCartButton} and {@link ProductVariant}.
 *
 * **Behaviour mirrors the legacy `product-card-mini-vertical` (v1.6.6) exactly.** It owns an internal
 * cart-quantity state machine: the stepper quantity is seeded from `variantsInCart` for the selected
 * variant and re-syncs when the cart changes; each quantity change (stepper or the Add button) recomputes
 * the total via the sv-SE {@link calculateMiniTotalPrice} and reports the merged product to
 * `onChangeQuantity` **debounced 1000 ms** (the app runs the optimistic cart update). The Add button
 * bumps the quantity to ≥1 through that same path for a normal user, and calls `addToCart()` with no
 * arguments for a restricted user. Choosing a packaging variant re-derives the product from that variant
 * (price, packaging, image, campaign, stock …) and fires `onVariantChange`.
 *
 * Accessibility: the card is an `<article>` named by its product-name `Heading` (1.3.1). The name becomes
 * a real `<a href>` when `product.productUrl` is set (4.1.2, focus ring 2.4.7). The seller-only /
 * accessory-pot markers are named `role="img"` graphics — never colour-only (1.4.1). The packaging button
 * is a disclosure exposing `aria-expanded`; it slides up a render-while-open variant panel that COVERS
 * the card via `absolute inset-0` (grid-safe — the card's own height never changes), dismissed by
 * `Escape` or an outside pointer press. While `loading`, the body is a decorative skeleton plus a polite
 * `role="status"` region (4.1.3). All built-in copy is localisable via `labels`.
 */
function ProductCardMiniVertical({
  product,
  variantsInCart = [],
  addToCartBtnLabel,
  addToCart,
  onChangeQuantity,
  onVariantChange,
  onVariantsButtonClick,
  onCloseVariants,
  headingLevel = 3,
  // `maxQuantity` is intentionally NOT destructured/used — accepted for API parity but never enforced,
  // matching the legacy mini card (which took the prop as a TODO and never applied it).
  onProductClick,
  hideCartButton = false,
  hidePrice = false,
  isRestrictedUser = false,
  loading = false,
  disabled = false,
  buttonLoading = false,
  showFavoriteIcon = false,
  favoriteProductsIds,
  onFavoriteIconClick,
  isAddingToFavorites = false,
  showAddToPurchaseListIcon = false,
  onSaveToPurchaseListClick,
  productArea,
  imagePriority,
  tooltips,
  linkComponent,
  fallbackImageUrl = defaultFallbackImage,
  labels,
  addToCartLabels,
  variantsLabels,
  className,
  ref,
}: ProductCardMiniVerticalProps) {
  const t = { ...defaultProductCardMiniVerticalLabels, ...labels };
  const Link = resolveLink(linkComponent);
  const [variantsOpen, setVariantsOpen] = useState(false);
  const variantsRef = useRef<HTMLDivElement>(null);

  const initialVariantId =
    product.productVariantList?.find((v) => v.variantId === product.partNo)?.variantId ??
    product.partNo;

  const [cardState, setCardState] = useState<MiniCardState>(() => {
    const initialQuantity =
      variantsInCart.find((item) => item.variantId === initialVariantId)?.quantity ?? 0;
    return {
      ...product,
      productImage: productPicture(product.partNo, product.primaryImageUrl, imagePriority),
      quantity: initialQuantity,
      inputQuantity: initialQuantity,
      totalPrice: calculateMiniTotalPrice(
        product.pricePerUnit,
        initialQuantity === 0 ? 1 : initialQuantity,
        product.itemNumberPerSalesUnit,
      ),
      selectedVariantId: initialVariantId,
    };
  });

  // The debounced report always carries the CURRENT merged product (not a stale snapshot), so the app
  // receives the right variant/price alongside the new quantity.
  const cardStateRef = useRef(cardState);
  useEffect(() => {
    cardStateRef.current = cardState;
  }, [cardState]);

  const debouncedReport = useDebouncedCallback<{ id: string; q: number }>(({ id, q }) => {
    onChangeQuantity?.({ ...cardStateRef.current, partNo: id, quantity: String(q) });
  }, 1000);

  // Re-sync the stepper from the cart when THIS variant's cart quantity actually changes (legacy: guard
  // on the selected variant's quantity so unrelated cart updates don't reset the field).
  const prevVariantsInCart = useRef(variantsInCart);
  useEffect(() => {
    const current = variantsInCart.find((i) => i.variantId === cardState.selectedVariantId);
    const previous = prevVariantsInCart.current.find(
      (i) => i.variantId === cardState.selectedVariantId,
    );
    if (current?.quantity !== previous?.quantity) {
      const newQuantity = current?.quantity ?? 0;
      setCardState((prev) => {
        if (prev.quantity === newQuantity) return prev;
        return {
          ...prev,
          quantity: newQuantity,
          inputQuantity: newQuantity,
          totalPrice: calculateMiniTotalPrice(
            prev.pricePerUnit,
            newQuantity === 0 ? 1 : newQuantity,
            prev.itemNumberPerSalesUnit,
          ),
        };
      });
    }
    prevVariantsInCart.current = variantsInCart;
  }, [variantsInCart, cardState.selectedVariantId]);

  const handleQuantityChange = useCallback(
    (newQuantity: number) => {
      setCardState((prev) => ({
        ...prev,
        quantity: newQuantity,
        inputQuantity: newQuantity,
        totalPrice: calculateMiniTotalPrice(
          prev.pricePerUnit,
          newQuantity === 0 ? 1 : newQuantity,
          prev.itemNumberPerSalesUnit,
        ),
      }));
      debouncedReport({ id: cardState.partNo, q: newQuantity });
    },
    [debouncedReport, cardState.partNo],
  );

  const handleAddToCart = useCallback(() => {
    if (isRestrictedUser) {
      addToCart();
      return;
    }
    const newQuantity = cardState.quantity === 0 ? 1 : cardState.quantity;
    setCardState((prev) => ({ ...prev, quantity: newQuantity, inputQuantity: newQuantity }));
    debouncedReport({ id: cardState.partNo, q: newQuantity });
  }, [isRestrictedUser, addToCart, cardState.quantity, cardState.partNo, debouncedReport]);

  const handleVariantChange = useCallback(
    (variant: ProductCardVariant) => {
      const newQuantity =
        prevVariantsInCart.current.find((i) => i.variantId === variant.variantId)?.quantity ?? 0;
      setCardState((prev) => {
        const merged: MiniCardState = {
          ...prev,
          partNo: variant.variantId,
          selectedVariantId: variant.variantId,
          quantity: newQuantity,
          inputQuantity: newQuantity,
          totalPrice: calculateMiniTotalPrice(
            variant.pricePerUnit,
            newQuantity === 0 ? 1 : newQuantity,
            variant.itemNumberPerSalesUnit,
          ),
          productImage: variant.image ?? prev.productImage,
          packaging: variant.variantName,
          price: variant.price,
          priceStr: variant.priceStr,
          pricePerUnit:
            variant.pricePerUnit && isFinite(variant.pricePerUnit) ? variant.pricePerUnit : 0,
          pricePerUnitString: variant.pricePerUnitString,
          salesUnit: variant.salesUnit,
          itemNumberPerSalesUnit:
            variant.itemNumberPerSalesUnit ?? prev.itemNumberPerSalesUnit,
          sellerOnly: variant.sellerOnly,
          activeCampaign: variant.activeCampaign,
          productUrl: `/Product/${variant.variantId}`,
          outOfStock: variant.outOfStock,
          isAccessoryPotItem: variant.isAccessoryPotItem,
          tags: variant.tags ?? prev.tags,
        };
        // The public callback speaks the shared product shape (string quantity); the internal state
        // keeps quantity numeric.
        onVariantChange?.({ ...merged, quantity: String(merged.quantity) });
        return merged;
      });
      setVariantsOpen(false);
    },
    [onVariantChange],
  );

  function handleVariantsButtonClick() {
    setVariantsOpen(true);
    onVariantsButtonClick?.();
  }

  function handleCloseVariants() {
    setVariantsOpen(false);
    onCloseVariants?.();
  }

  // The variant panel is non-modal: dismiss it on Escape or an outside pointer press. Wired at the
  // document level so it works wherever focus sits; only active while the panel is open.
  useEffect(() => {
    if (!variantsOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleCloseVariants();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (variantsRef.current && !variantsRef.current.contains(event.target as Node)) {
        handleCloseVariants();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantsOpen]);

  if (loading) {
    return (
      <article
        ref={ref}
        aria-busy='true'
        className={cn(cardClasses, 'gap-4', className)}
      >
        <div className='h-32'>
          <Placeholder type='image' />
        </div>
        <div className='flex flex-col gap-2 pt-2'>
          <Placeholder type='heading' />
          <Placeholder type='p_long' />
          <Placeholder type='p_long' />
        </div>
        <span role='status' className='sr-only'>
          {t.loadingStatus}
        </span>
      </article>
    );
  }

  const {
    partNo,
    productName,
    productUrl,
    productImage,
    packaging,
    priceStr,
    priceLabel,
    currencyLabel,
    unitLabel,
    totalPrice,
    salesUnit,
    itemNumberPerSalesUnit,
    quantity,
    tags = [],
    sellerOnly = false,
    isAccessoryPotItem = false,
    activeCampaign,
    isLimitedProduct = false,
    limitedLabel,
    outOfStock = false,
    outOfStockLabel,
  } = cardState;

  const variants = product.productVariantList ?? [];
  const showPrice = !hidePrice && !isRestrictedUser;
  const packagingDisabled = variants.length <= 1;
  const vLabels = { ...defaultVerticalVariantsLabels, ...variantsLabels };
  const isFavorite = Boolean(favoriteProductsIds?.includes(partNo));

  // Campaign wins over limited, which wins over out-of-stock (legacy precedence).
  const ribbon: { text: string; className?: string; style?: CSSProperties } | null =
    activeCampaign?.title
      ? {
          text: activeCampaign.title,
          className: activeCampaign.color
            ? 'text-white'
            : 'bg-action-primary text-text-on-primary',
          style: activeCampaign.color ? { backgroundColor: activeCampaign.color } : undefined,
        }
      : !activeCampaign && isLimitedProduct && limitedLabel
        ? { text: limitedLabel, className: 'bg-tag-grey text-text-default' }
        : !activeCampaign && outOfStock && outOfStockLabel
          ? { text: outOfStockLabel, className: 'bg-tag-grey text-text-default' }
          : null;

  const listPriceLine =
    showPrice && priceStr
      ? `${priceLabel ? `${priceLabel}: ` : ''}${priceStr} ${currencyLabel ?? ''}/${unitLabel?.toLowerCase() ?? ''}`
      : null;

  const thumbnail = (
    <div className='flex h-32 items-center justify-center'>
      <Picture
        id={`product-card-mini-${partNo}`}
        sources={productImage?.sources ?? []}
        src={productImage?.src ?? ''}
        alt={productImage?.alt ?? ''}
        fallbackImageUrl={fallbackImageUrl}
        classNamePicture='flex h-full w-full items-center justify-center'
        classNameImg='max-h-full max-w-full object-contain'
      />
    </div>
  );

  const nameHeading = (
    <Heading
      order={headingLevel}
      noMargin
      className='line-clamp-2 text-body-s font-bold text-text-blue md:text-body-s'
    >
      {productName}
    </Heading>
  );

  return (
    <article
      ref={ref}
      aria-label={productName}
      className={cn(cardClasses, className)}
    >
      {ribbon && (
        <span
          style={ribbon.style}
          className={cn(
            'absolute top-0 right-0 z-10 rounded-bl-lg px-2 py-1 font-secondary text-body-s',
            ribbon.className,
          )}
        >
          {ribbon.text}
        </span>
      )}

      {(sellerOnly || isAccessoryPotItem || tags.length > 0) && (
        <div className='absolute top-2 left-2 z-10 flex flex-col items-start gap-1'>
          {sellerOnly && (
            <Icon icon='icon-eye' size='medium' label={t.sellerOnly} />
          )}
          {isAccessoryPotItem && (
            <span
              role='img'
              aria-label={t.accessoryPotItem}
              className='flex size-4.5 items-center justify-center rounded-full bg-tag-orange font-secondary text-tag-sm text-text-default'
            >
              S
            </span>
          )}
          {(activeCampaign ? tags.slice(0, 3) : tags).map((tag) => (
            <Tag
              key={tag.text}
              {...tag}
              shape={tag.shape ?? 'pill'}
              size={tag.size ?? 'sm'}
              className='px-1.5 text-tag-xs md:text-tag-xs'
            />
          ))}
        </div>
      )}

      {productUrl ? (
        <Link
          href={productUrl}
          onClick={onProductClick}
          aria-hidden
          tabIndex={-1}
        >
          {thumbnail}
        </Link>
      ) : (
        thumbnail
      )}

      <div className='flex flex-1 flex-col pt-2'>
        {productUrl ? (
          <Link
            href={productUrl}
            onClick={onProductClick}
            className='text-text-default no-underline hover:text-text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'
          >
            {nameHeading}
          </Link>
        ) : (
          nameHeading
        )}

        {listPriceLine && (
          <p className='m-0 mt-1 font-secondary text-body-xs'>
            {listPriceLine}
          </p>
        )}

        <div className='mt-auto flex items-end justify-between pt-1'>
          {showPrice && (
            <div className='flex flex-col'>
              <p className='m-0 text-body-xs'>
                {t.quantitySummary(
                  quantity,
                  salesUnit ?? '',
                  itemNumberPerSalesUnit ?? 0,
                )}
              </p>
              {totalPrice && (
                <p className='m-0 mt-1 text-body-s font-bold'>
                  {`${totalPrice} ${currencyLabel ?? ''}`.trim()}
                </p>
              )}
            </div>
          )}
          {!isRestrictedUser &&
            (showAddToPurchaseListIcon || showFavoriteIcon) && (
              <div className='flex items-center gap-2'>
                {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
                  <IconButton
                    type='button'
                    icon='icon-file-plus'
                    label={tooltips?.addToPurchaseList ?? t.addToPurchaseList}
                    size='large'
                    onClick={() => onSaveToPurchaseListClick(partNo, totalPrice)}
                    isTransparent
                    noBorder
                    noPadding
                  />
                )}
                {showFavoriteIcon && onFavoriteIconClick && (
                  <IconButton
                    type='button'
                    icon={isFavorite ? 'icon-heart1' : 'icon-heart-o'}
                    label={
                      isFavorite
                        ? tooltips?.removeFromFavorites ?? t.removeFromFavorites
                        : tooltips?.addToFavorites ?? t.addToFavorites
                    }
                    size='large'
                    onClick={() => onFavoriteIconClick(partNo, isFavorite, totalPrice)}
                    busy={isAddingToFavorites}
                    isTransparent
                    noBorder
                    noPadding
                    className={cn(isFavorite && 'text-action-tertiary')}
                  />
                )}
              </div>
            )}
        </div>
      </div>

      <Button
        type='button'
        surface='secondary'
        size='x-small'
        rounded
        fullWidth
        iconRight={packagingDisabled ? undefined : 'icon-layers'}
        disabled={packagingDisabled}
        aria-expanded={variantsOpen}
        onClick={handleVariantsButtonClick}
        className='mt-2 h-8 px-3 text-body-xs'
      >
        {packaging || t.selectPackaging}
      </Button>

      {!hideCartButton && (
        <AddToCartButton
          id={`${partNo}-${productArea ?? 'category'}`}
          buttonLabel={addToCartBtnLabel}
          quantity={cardState.inputQuantity}
          // `maxQuantity` is accepted for API parity but NOT enforced — the legacy mini card took the prop
          // (a TODO) and never forwarded it to the stepper, so v1.6.6 imposed no upper bound here.
          onAdd={handleAddToCart}
          onChange={handleQuantityChange}
          disabled={buttonLoading || loading || disabled}
          labels={addToCartLabels}
          className='w-full max-w-none'
        />
      )}

      {/* The picker slides up from the bottom and COVERS the card (`absolute inset-0`, so the card's own
          height is never changed — safe inside a grid of cards). The panel is a single scroll container:
          the close row stays fixed and the variant list (`flex-1 overflow-y-auto`) scrolls when it
          exceeds the card height, so nothing is clipped no matter how many variants there are. */}
      {variantsOpen && (
        <div
          ref={variantsRef}
          className='absolute inset-0 z-20 flex animate-slide-up flex-col rounded-lg bg-white motion-reduce:animate-none'
        >
          <div className='flex justify-end p-1'>
            <IconButton
              type='button'
              icon='icon-x'
              label={vLabels.close}
              size='large'
              onClick={handleCloseVariants}
              isTransparent
              noBorder
              noPadding
            />
          </div>
          <fieldset className='m-0 flex min-h-0 flex-1 list-none flex-col gap-2 overflow-y-auto border-0 p-0 px-2 pb-2'>
            <legend className='sr-only'>{vLabels.legend}</legend>
            {variants.map((variant) => (
              <div
                key={variant.variantId}
                className='flex h-2/5 shrink-0 items-center overflow-hidden border-b border-border-orange last:border-b-0'
              >
                <ProductVariant
                  {...variant}
                  image={{
                    ...variant.image,
                    fallbackImageUrl: variant.image?.fallbackImageUrl ?? fallbackImageUrl,
                  }}
                  checked={variant.variantId === cardState.selectedVariantId}
                  onSelect={(variantId) => {
                    const chosen = variants.find((item) => item.variantId === variantId);
                    if (chosen) handleVariantChange(chosen);
                  }}
                  isRestrictedUser={isRestrictedUser}
                  partNoLabel={vLabels.partNo}
                  currencyLabel={vLabels.currency}
                  unitLabel={vLabels.unit}
                  className='h-full'
                />
              </div>
            ))}
          </fieldset>
        </div>
      )}
    </article>
  );
}

export { ProductCardMiniVertical };
