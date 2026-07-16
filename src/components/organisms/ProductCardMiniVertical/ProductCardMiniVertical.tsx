import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, Ref } from 'react';
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg';
import { cn } from '../../../lib/cn';
import { DefaultLink, type LinkComponentType } from '../../../lib/link';
import { Heading, type HeadingOrder } from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';
import { Picture, type PictureProps } from '../../atoms/Picture';
import { Placeholder } from '../../atoms/Placeholder';
import { Tag, type TagProps } from '../../atoms/Tag';
import {
  AddToCartButton,
  type AddToCartButtonLabels,
} from '../../molecules/AddToCartButton';
import { Button } from '../../molecules/Button';
import { IconButton } from '../../molecules/IconButton';
import { ProductVariant } from '../../molecules/ProductVariant';
import type { ProductVariantListItem } from '../ProductVariantList';
import {
  defaultVerticalVariantsLabels,
  type VerticalVariantsLabels,
} from '../VerticalVariants';

export interface ProductCardMiniVerticalCampaign {
  /** Ribbon text. */
  title: string;
  /**
   * Ribbon background colour (a runtime brand colour). Ensure it clears ≥4.5:1 against the white
   * ribbon text (1.4.3); when omitted the ribbon uses the accessible primary fill.
   */
  color?: string;
}

export interface ProductCardMiniVerticalProduct {
  /** Article number of the selected variant — keys the card and the quantity field. */
  partNo: string;
  /** Product display name — the card heading (and its accessible name via `aria-labelledby`). */
  productName: string;
  /** Product page URL — turns the name and image into links when set. */
  productUrl?: string;
  /** Product thumbnail (forwarded to `Picture`); decorative — the name carries identity. */
  image?: PictureProps;
  /** Packaging label shown on the variant-picker button (e.g. "33cl Engångsglas"). */
  packaging?: string;
  /** Pre-formatted list (per-unit) price string, e.g. "10". */
  priceStr?: string;
  /** Label preceding the list price (e.g. "List price"). */
  priceLabel?: string;
  /** Currency suffix on the price lines (e.g. "kr"). */
  currencyLabel?: string;
  /** Unit suffix on the list-price line (e.g. "st"). */
  unitLabel?: string;
  /** Pre-formatted total price string, e.g. "548,26". */
  totalPrice?: string;
  /** Sales-unit label on the quantity-summary line (e.g. "Kolli"). */
  salesUnit?: string;
  /** Items per sales unit on the quantity-summary line. */
  itemNumberPerSalesUnit?: number;
  /** Selectable packaging variants; the picker button is disabled with fewer than two. */
  variants?: ProductVariantListItem[];
  /** Decorative status tags (e.g. "Eko", "Nyhet"). */
  tags?: TagProps[];
  /** Show the seller-only marker (an eye glyph). @default false */
  sellerOnly?: boolean;
  /** Show the accessory-pot marker (an "S" badge). @default false */
  isAccessoryPotItem?: boolean;
  /** Active campaign ribbon — takes precedence over `isLimitedProduct`/`outOfStock`. */
  activeCampaign?: ProductCardMiniVerticalCampaign;
  /** Mark the product as limited (shows `limitedLabel` in the ribbon). @default false */
  isLimitedProduct?: boolean;
  /** Ribbon text for a limited product. */
  limitedLabel?: string;
  /** Mark the product out of stock (shows `outOfStockLabel` in the ribbon). @default false */
  outOfStock?: boolean;
  /** Ribbon text shown when out of stock. */
  outOfStockLabel?: string;
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

export interface ProductCardMiniVerticalProps {
  /** The product to render. */
  product: ProductCardMiniVerticalProduct;
  /** Visible add-to-cart label — also the button's accessible name (2.5.3), so it is required. */
  addToCartLabel: string;
  /**
   * Heading level for the product name — set it so the name fits the surrounding document outline,
   * keeping heading levels monotonic. @default 3
   */
  headingLevel?: HeadingOrder;
  /** Controlled in-cart quantity for the add-to-cart stepper. @default 0 */
  quantity?: number;
  /** Upper bound for the quantity stepper. */
  maxQuantity?: number;
  /** Selected variant id (controlled) — drive it from `onVariantSelect`. @default `product.partNo` */
  selectedVariantId?: string;
  /** Fires when the add-to-cart button is pressed. */
  onAddToCart?: () => void;
  /** Fires when the quantity changes via the stepper. */
  onChangeQuantity?: (quantity: number) => void;
  /** Fires when a packaging variant is chosen (the picked variant + the full list). */
  onVariantSelect?: (
    variant: ProductVariantListItem | undefined,
    variants: ProductVariantListItem[],
  ) => void;
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
  /** Show the favourite toggle (suppressed for `isRestrictedUser`). @default false */
  showFavoriteIcon?: boolean;
  /** Whether the product is currently a favourite (drives the icon + label). @default false */
  isFavorite?: boolean;
  /** Pulse the favourite icon to signal a pending request. @default false */
  isAddingToFavorites?: boolean;
  /** Fires when the favourite toggle is activated. */
  onFavoriteClick?: () => void;
  /** Show the add-to-purchase-list button (suppressed for `isRestrictedUser`). @default false */
  showAddToPurchaseListIcon?: boolean;
  /** Fires when the add-to-purchase-list button is activated. */
  onAddToPurchaseList?: () => void;
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

/**
 * Compact vertical product card (organism) — a thumbnail, status markers, name, pricing, a packaging
 * variant picker and an add-to-cart stepper. Composes {@link Picture}, {@link Tag}, {@link Button},
 * {@link IconButton}, {@link AddToCartButton} and {@link ProductVariant}.
 *
 * Accessibility: the card is an `<article>` named by its product-name `Heading` via `aria-labelledby`
 * (1.3.1) so assistive tech can navigate card-by-card. The name becomes a real `<a href>` when
 * `product.productUrl` is set (4.1.2, visible focus ring 2.4.7). The seller-only / accessory-pot
 * markers are named `role="img"` graphics — never colour-only (1.4.1). The packaging button is a
 * disclosure trigger exposing `aria-expanded`; it slides up a render-while-open variant panel (a
 * `<fieldset>`/`<legend>` radio group of {@link ProductVariant} tiles) that COVERS the card via
 * `absolute inset-0` — the card's own height is never changed, so it stays grid-safe, and the panel
 * scrolls internally when the variants exceed the card height. `Escape` and an outside pointer press
 * dismiss it. While `loading`, the body is a decorative skeleton plus a
 * polite `role="status"` region that announces progress (4.1.3). All built-in copy is localisable via
 * `labels` (interpolated text is a function, never a baked template); the composed children take
 * `addToCartLabels` / `variantsLabels`.
 *
 * Note: unlike the legacy card this component is layout-agnostic (`w-full`, filling its grid/flex
 * cell) rather than hard-coding a 50%/100% width — column layout is the consumer's concern.
 */
function ProductCardMiniVertical({
  product,
  addToCartLabel,
  headingLevel = 3,
  quantity = 0,
  maxQuantity,
  selectedVariantId,
  onAddToCart,
  onChangeQuantity,
  onVariantSelect,
  onProductClick,
  hideCartButton = false,
  hidePrice = false,
  isRestrictedUser = false,
  loading = false,
  disabled = false,
  showFavoriteIcon = false,
  isFavorite = false,
  isAddingToFavorites = false,
  onFavoriteClick,
  showAddToPurchaseListIcon = false,
  onAddToPurchaseList,
  linkComponent,
  fallbackImageUrl = defaultFallbackImage,
  labels,
  addToCartLabels,
  variantsLabels,
  className,
  ref,
}: ProductCardMiniVerticalProps) {
  const t = { ...defaultProductCardMiniVerticalLabels, ...labels };
  const Link = linkComponent ?? DefaultLink;
  const [variantsOpen, setVariantsOpen] = useState(false);
  const variantsRef = useRef<HTMLDivElement>(null);

  // The variant panel is non-modal: dismiss it on Escape or an outside pointer press. Wired at the
  // document level so it works wherever focus sits; only active while the panel is open.
  useEffect(() => {
    if (!variantsOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVariantsOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        variantsRef.current &&
        !variantsRef.current.contains(event.target as Node)
      ) {
        setVariantsOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
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
    image,
    packaging,
    priceStr,
    priceLabel,
    currencyLabel,
    unitLabel,
    totalPrice,
    salesUnit,
    itemNumberPerSalesUnit,
    variants = [],
    tags = [],
    sellerOnly = false,
    isAccessoryPotItem = false,
    activeCampaign,
    isLimitedProduct = false,
    limitedLabel,
    outOfStock = false,
    outOfStockLabel,
  } = product;

  const showPrice = !hidePrice && !isRestrictedUser;
  const packagingDisabled = variants.length <= 1;
  const vLabels = { ...defaultVerticalVariantsLabels, ...variantsLabels };

  const ribbon: {
    text: string;
    className?: string;
    style?: CSSProperties;
  } | null = activeCampaign?.title
    ? {
        text: activeCampaign.title,
        className: activeCampaign.color
          ? 'text-white'
          : 'bg-action-primary text-text-on-primary',
        style: activeCampaign.color
          ? { backgroundColor: activeCampaign.color }
          : undefined,
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

  const pictureAlt = image?.alt ?? '';
  const thumbnail = (
    <div className='flex h-32 items-center justify-center'>
      <Picture
        id={`product-card-mini-${partNo}`}
        sources={image?.sources ?? []}
        src={image?.src ?? ''}
        alt={pictureAlt}
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
          {tags.map((tag) => (
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
                {showAddToPurchaseListIcon && onAddToPurchaseList && (
                  <IconButton
                    type='button'
                    icon='icon-file-plus'
                    label={t.addToPurchaseList}
                    size='large'
                    onClick={onAddToPurchaseList}
                    isTransparent
                    noBorder
                    noPadding
                  />
                )}
                {showFavoriteIcon && onFavoriteClick && (
                  <IconButton
                    type='button'
                    icon={isFavorite ? 'icon-heart1' : 'icon-heart-o'}
                    label={
                      isFavorite ? t.removeFromFavorites : t.addToFavorites
                    }
                    size='large'
                    onClick={onFavoriteClick}
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
        onClick={() => setVariantsOpen(true)}
        className='mt-2 h-8 px-3 text-body-xs'
      >
        {packaging || t.selectPackaging}
      </Button>

      {!hideCartButton && (
        <AddToCartButton
          id={partNo}
          buttonLabel={addToCartLabel}
          quantity={quantity}
          maxQuantity={maxQuantity}
          onAdd={() => onAddToCart?.()}
          onChange={(value) => onChangeQuantity?.(value)}
          disabled={disabled}
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
              onClick={() => setVariantsOpen(false)}
              isTransparent
              noBorder
              noPadding
            />
          </div>
          {/* Flex-col scroll container with a definite height (`flex-1`), so each variant tile can be
              sized as a fraction of the visible area. Each is `h-2/5` (≈40%, legacy's `fixedHeight`),
              so ~2.5 variants show and the partial one makes it obvious the list scrolls for more. */}
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
                    fallbackImageUrl:
                      variant.image?.fallbackImageUrl ?? fallbackImageUrl,
                  }}
                  checked={variant.variantId === (selectedVariantId ?? partNo)}
                  onSelect={(variantId) => {
                    onVariantSelect?.(
                      variants.find((item) => item.variantId === variantId),
                      variants,
                    );
                    setVariantsOpen(false);
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
