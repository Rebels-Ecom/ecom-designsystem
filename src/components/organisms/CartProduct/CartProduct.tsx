import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { resolveLink, type LinkComponentType } from '../../../lib/link'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { type IconName } from '../../atoms/Icon'
import { Loader } from '../../atoms/Loader'
import { Picture, type PictureProps } from '../../atoms/Picture'
import { IconButton } from '../../molecules/IconButton'
import { ProductQuantityInput } from '../../molecules/ProductQuantityInput'

export interface CartProductItem {
  /** Article number — used as the quantity field id and shown in the meta line. */
  partNo: string
  /** Product display name (the row heading). */
  productName: string
  /** Optional product page URL — turns the heading into a link. */
  productUrl?: string
  /** Product thumbnail. Falls back to a placeholder when omitted or broken. */
  image?: PictureProps
  /** Country of origin, shown after the article number. */
  country?: string
  /** Packaging description (e.g. "50cl Returglas"). */
  packaging?: string
  /** Pre-formatted per-unit price string. */
  priceStr?: string
  /** Currency suffix on the price line (e.g. "kr"). */
  currencyLabel?: string
  /** Unit label on the price line (e.g. "st"). */
  unitLabel?: string
  /** Quantity (string, so it can be empty). */
  quantity: string
  /** Sales unit label passed to the quantity readout. */
  salesUnit: string
  /** Items per sales unit passed to the quantity readout. */
  itemNumberPerSalesUnit: number
  /** Pre-formatted total price string. */
  totalPrice: string
}

export interface CartProductLabels {
  /** Prefix before the article number. @default 'Art.nr.' */
  articleNumber: string
  /** Accessible name for the remove button. @default 'Remove product' */
  remove: string
  /** Text shown beside the loading spinner. @default 'Loading' */
  loading: string
}

export const defaultCartProductLabels: CartProductLabels = {
  articleNumber: 'Art.nr.',
  remove: 'Remove product',
  loading: 'Loading',
}

export interface CartProductProps {
  /** The product to render. */
  product: CartProductItem
  /**
   * Heading level for the product name — set it so the name fits the surrounding document outline
   * (e.g. `4` under an `<h3>` section title), keeping heading levels monotonic. @default 5
   */
  headingLevel?: HeadingOrder
  /** Show the remove control (requires `onRemove`). @default false */
  removable?: boolean
  /** Called with the product's `partNo` when the remove control is activated. */
  onRemove?: (partNo: string) => void
  /** Glyph for the remove control. @default 'icon-x-circle' */
  removeIcon?: IconName
  /** Replace the content with a spinner. @default false */
  loading?: boolean
  /**
   * Component used to render the product-name link. Defaults to a semantic `<a>`; pass a
   * client-side router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Hide all price copy (both the price line and the quantity total). @default false */
  hidePrice?: boolean
  /** Fires when the product-name link is activated (analytics hook). */
  onClick?: () => void
  /** Paint the row on a solid white surface. @default false */
  whiteBackground?: boolean
  /** Image URL swapped in when the product image is missing or broken. */
  fallbackImageUrl?: string
  /** Overridable UI strings (English defaults) — see {@link CartProductLabels}. */
  labels?: Partial<CartProductLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<article>`. */
  ref?: Ref<HTMLElement>
}

/**
 * Cart product row (organism) — a product thumbnail, its name/packaging/price meta and a read-only
 * quantity readout, with an optional remove control. Composes {@link Picture},
 * {@link ProductQuantityInput}, {@link IconButton} and {@link Loader}.
 *
 * Accessibility: rendered as an `<article>` so assistive tech can navigate row-by-row; the product
 * name is an `<h5>` (1.3.1) that becomes a real `<a href>` when `productUrl` is set (4.1.2, visible
 * focus ring 2.4.7). The remove control is an icon-only `<button>` whose action is named via
 * `labels.remove` (1.1.1 / 4.1.2). While `loading`, the body is replaced by a `role="status"`
 * {@link Loader} that announces progress (4.1.3). The thumbnail is decorative (empty `alt`) — the
 * name carries the identity. All built-in copy is localisable via `labels`.
 */
function CartProduct({
  product,
  headingLevel = 5,
  removable = false,
  onRemove,
  removeIcon = 'icon-x-circle',
  loading = false,
  linkComponent,
  hidePrice = false,
  onClick,
  whiteBackground = false,
  fallbackImageUrl,
  labels,
  className,
  ref,
}: CartProductProps) {
  const t = { ...defaultCartProductLabels, ...labels }
  const Link = resolveLink(linkComponent)
  const {
    partNo,
    productName,
    productUrl,
    image,
    country,
    packaging,
    priceStr,
    currencyLabel,
    unitLabel,
    quantity,
    salesUnit,
    itemNumberPerSalesUnit,
    totalPrice,
  } = product

  const priceLine = hidePrice
    ? packaging
    : [
        packaging ? `${packaging}:` : '',
        priceStr ? `${priceStr} ${currencyLabel ?? ''}/${unitLabel ? unitLabel.toLowerCase() : ''}` : '',
      ]
        .join(' ')
        .trim()

  const metaLine = [partNo ? `${t.articleNumber} ${partNo}` : '', country ? `- ${country}` : '']
    .join(' ')
    .trim()

  const showRemove = removable && Boolean(onRemove)

  return (
    <article
      ref={ref}
      className={cn(
        'relative flex min-h-46 w-full items-center gap-4 pr-4 md:min-h-42 md:pr-0',
        whiteBackground && 'bg-white',
        className,
      )}
    >
      {loading ? (
        <Loader visible position="relative" text={t.loading} className="min-h-42" />
      ) : (
        <>
          <div className="flex w-20 shrink-0 items-center self-stretch md:w-24">
            <Picture
              id={`cart-product-${partNo}`}
              sources={image?.sources ?? []}
              src={image?.src ?? ''}
              alt={image?.alt ?? ''}
              fallbackImageUrl={fallbackImageUrl}
              classNamePicture="h-full w-full"
              classNameImg="block h-full w-full object-contain p-2"
            />
          </div>

          <div className="flex flex-1 flex-col">
            {productUrl ? (
              <Link
                href={productUrl}
                onClick={onClick}
                className="text-text-default no-underline hover:text-text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
              >
                <Heading order={headingLevel} noMargin className="line-clamp-2 font-secondary">
                  {productName}
                </Heading>
              </Link>
            ) : (
              <Heading order={headingLevel} noMargin className="line-clamp-2 font-secondary">
                {productName}
              </Heading>
            )}

            {priceLine && (
              <p className="m-0 mt-1 font-secondary text-body-s text-text-decorative-purple">
                {priceLine}
              </p>
            )}

            {metaLine && <p className="m-0 mt-1 text-body-s text-text-decorative-grey">{metaLine}</p>}

            <ProductQuantityInput
              className="mt-2"
              quantityInputId={partNo}
              quantity={quantity}
              salesUnit={salesUnit}
              itemNumberPerSalesUnit={itemNumberPerSalesUnit}
              totalPrice={totalPrice}
              hidePrice={hidePrice}
              disabled
              disabledNoBorder
            />
          </div>

          {showRemove && (
            <div className="flex shrink-0 self-start">
              <IconButton
                type="button"
                icon={removeIcon}
                label={t.remove}
                onClick={() => onRemove?.(partNo)}
              />
            </div>
          )}
        </>
      )}
    </article>
  )
}

export { CartProduct }
