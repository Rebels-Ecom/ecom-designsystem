import type { PictureProps } from '../../atoms/Picture'
import type { ProductCardImagePriority } from './types'

/**
 * Builds the `Picture` payload from a raw product image URL (the legacy `getProductPicture`).
 * Centralised in one place so the dispatcher's initial state and its child-prop fallback always
 * derive the image identically. The image is decorative (`alt=''`) — the product name carries the
 * accessible identity (legacy hard-coded a "Placholder" alt, a bug).
 */
export function productPicture(
  partNo: string,
  primaryImageUrl: string,
  imagePriority?: ProductCardImagePriority,
): PictureProps {
  const width = '120'
  const src = primaryImageUrl ? `${primaryImageUrl}?w=${width}` : primaryImageUrl
  return {
    id: `product_${partNo}`,
    src,
    alt: '',
    loading: imagePriority?.loading ?? 'lazy',
    decoding: 'auto',
    fetchPriority: imagePriority?.fetchPriority ?? 'low',
    width,
    height: '200',
    sources: [
      { srcset: src, media: '(max-width: 767px)' },
      { srcset: src, media: '(min-width: 768px)' },
    ],
  }
}
