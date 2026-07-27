import type { Ref } from 'react'
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'
import { cn } from '../../../lib/cn'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Picture } from '../../atoms/Picture'
import { productPicture } from '../ProductCard/productPicture'
import type { ProductCardImagePriority, ProductCardProduct } from '../ProductCard/types'

/**
 * The subset of {@link ProductCardProduct} a mini card renders — a compact summary (thumbnail, name,
 * packaging, price, article number + country). Declared as a `Pick` so a full `ProductCardProduct`
 * (e.g. a cart line) can be passed straight through — {@link MiniProductToast} relies on this.
 */
export type ProductCardMiniProduct = Pick<
  ProductCardProduct,
  | 'partNo'
  | 'primaryImageUrl'
  | 'productName'
  | 'packaging'
  | 'priceLabel'
  | 'priceStr'
  | 'currencyLabel'
  | 'unitLabel'
  | 'country'
  | 'partNoLabel'
>

export interface ProductCardMiniProps {
  /** The product to summarise. */
  product: ProductCardMiniProduct
  /** Native `<img>` priority hints forwarded to the derived `Picture`. */
  imagePriority?: ProductCardImagePriority
  /**
   * Heading level for the product name — set it so the name fits the surrounding document outline,
   * keeping heading levels monotonic. @default 3
   */
  headingLevel?: HeadingOrder
  /** Image URL swapped in when the product image is missing or broken. */
  fallbackImageUrl?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root element. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Compact product summary card (organism) — a small thumbnail beside the product name, packaging, a
 * price line and an article-number / country line. Presentational (no interaction); used inside
 * {@link MiniProductToast} and any other dense cart/list surface. Composes {@link Picture} and the
 * {@link Heading} atom.
 *
 * Accessibility: the product name is a real `Heading` (1.3.1) at a caller-controlled level, so the mini
 * card slots into the surrounding outline. The thumbnail is decorative (`alt=''`) — the name carries the
 * identity — mirroring the rest of the ProductCard family (the legacy hard-coded "Placholder" alt was a
 * bug). Empty meta lines are omitted rather than printing stray separators.
 */
function ProductCardMini({
  product,
  imagePriority,
  headingLevel = 3,
  fallbackImageUrl = defaultFallbackImage,
  className,
  ref,
}: ProductCardMiniProps) {
  const {
    partNo,
    primaryImageUrl,
    productName,
    packaging,
    priceLabel,
    priceStr,
    currencyLabel,
    unitLabel,
    country,
    partNoLabel,
  } = product

  const image = productPicture(partNo, primaryImageUrl, imagePriority)

  // Price line: "Pris: 136 kr/st" — assembled from only the parts that are present, so a missing
  // currency, unit or label never leaves a dangling "/", ":" or "undefined". Omitted entirely when
  // there is no price string.
  const unit = unitLabel ? unitLabel.toLowerCase() : ''
  const priceValue = priceStr
    ? [priceStr, currencyLabel].filter(Boolean).join(' ') + (unit ? `/${unit}` : '')
    : ''
  const priceLine = priceValue
    ? `${priceLabel ? `${priceLabel}: ` : ''}${priceValue}`
    : ''

  // Article-number + country line: "Art.nr. 2543824 - Argentina" — each half omitted when absent, so
  // there is never a stray separator or label with no value.
  const partNoText = partNo ? [partNoLabel, partNo].filter(Boolean).join(' ') : ''
  const metaLine = [partNoText, country ? `- ${country}` : ''].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={cn('flex w-full gap-4 bg-white p-4 md:w-80', className)}>
      <Picture
        {...image}
        classNamePicture="flex w-10 items-center justify-center self-center"
        classNameImg="block h-16 w-full max-w-12 object-contain"
        fallbackImageUrl={fallbackImageUrl}
      />
      <div className="flex-1 overflow-hidden">
        <Heading
          order={headingLevel}
          noMargin
          className="overflow-hidden text-ellipsis whitespace-nowrap text-body leading-6 md:text-body"
        >
          {productName}
        </Heading>
        {packaging && <p className="mb-0.5 text-body-xs text-text-default">{packaging}</p>}
        {priceLine && <p className="mb-0.5 text-body-xs text-text-default">{priceLine}</p>}
        {metaLine && <p className="mb-0.5 text-body-xs text-text-default">{metaLine}</p>}
      </div>
    </div>
  )
}

export { ProductCardMini }
