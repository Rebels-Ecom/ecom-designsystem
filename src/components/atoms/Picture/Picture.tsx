import { useEffect, useRef, useState, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'

export type PictureLoading = 'eager' | 'lazy'
export type PictureDecoding = 'sync' | 'async' | 'auto'
export type PictureFetchPriority = 'high' | 'low' | 'auto'
export type PictureOpacity = 'light' | 'dark'

export interface PictureSource {
  /** Candidate image set for this source (the `srcset` attribute). */
  srcset: string
  /** MIME type of the source, e.g. `image/webp`. */
  type?: string
  /** Media query gating when this source applies. */
  media?: string
  /** `sizes` hint pairing viewport widths to image widths. */
  sizes?: string
}

export interface PictureProps {
  /** id for the `<picture>`, also used to key its `<source>` elements. */
  id: string
  /** Responsive `<source>` candidates, tried before `src`. */
  sources: PictureSource[]
  /** Default/fallback image URL for the `<img>`. */
  src: string
  /** Intrinsic width forwarded to the `<img>` (and the skeleton). */
  width?: number | string
  /** Intrinsic height forwarded to the `<img>` (and the skeleton). */
  height?: number | string
  /** Native `<img>` loading strategy. @default 'lazy' */
  loading?: PictureLoading
  /** Native `<img>` decoding hint. @default 'auto' */
  decoding?: PictureDecoding
  /**
   * Text alternative (1.1.1). Leave empty (`''`, the default) only for purely
   * decorative imagery so it's dropped from the accessibility tree.
   */
  alt?: string
  /** Native `<img>` fetch priority hint. @default 'auto' */
  fetchPriority?: PictureFetchPriority
  /** Extra classes for the `<picture>`, merged via `cn()`. */
  classNamePicture?: string
  /** Extra classes for the `<img>`, merged via `cn()`. */
  classNameImg?: string
  /** Optional decorative scrim laid over the image. */
  pictureWithOpacity?: PictureOpacity
  /** Image URL swapped in when `src`/`sources` are invalid or error. @default '' */
  fallbackImageUrl?: string
  /** Forwarded to the underlying `<img>`. */
  ref?: Ref<HTMLImageElement>
}

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

const opacityClasses: Record<PictureOpacity, string> = {
  light: 'bg-white/30',
  dark: 'bg-black/50',
}

/**
 * Responsive `<picture>` with a skeleton placeholder while the image resolves and a
 * fallback source when it errors. The `<img>` carries the `alt` text (1.1.1) and
 * `aria-busy` while loading (4.1.2); the skeleton and optional scrim are decorative and
 * hidden from assistive tech.
 */
function Picture({
  id,
  sources,
  src,
  width,
  height,
  loading = 'lazy',
  decoding = 'auto',
  alt = '',
  fetchPriority = 'auto',
  classNamePicture,
  classNameImg,
  pictureWithOpacity,
  fallbackImageUrl = '',
  ref,
}: PictureProps) {
  const [imageSources, setImageSources] = useState<{ src: string; sources: PictureSource[] }>({
    src,
    sources,
  })
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    setImageSources({ src: isValidUrl(src) ? src : '', sources })
    setIsLoading(true)
  }, [src, sources])

  useEffect(() => {
    // Images already cached by the browser never fire `load`, so settle immediately.
    if (imgRef.current?.complete) {
      setIsLoading(false)
    }
  }, [imageSources])

  const handleBrokenImage = () => {
    if (fallbackImageUrl && isValidUrl(fallbackImageUrl)) {
      setImageSources({ src: fallbackImageUrl, sources: [{ srcset: fallbackImageUrl }] })
    }
    setIsLoading(false)
  }

  const isValidPicture = (): boolean =>
    Boolean(imageSources.sources.length) && Boolean(imageSources.src)

  const showingFallback = !isValidPicture() && Boolean(fallbackImageUrl)

  return (
    <>
      <picture id={id} className={cn('relative block', classNamePicture)}>
        {imageSources.sources.map((source, i) => (
          <source
            key={`${id}_source_${i}`}
            srcSet={source.srcset || fallbackImageUrl}
            type={source.type}
            media={source.media}
            sizes={source.sizes}
          />
        ))}
        <img
          ref={mergeRefs<HTMLImageElement>(imgRef, ref)}
          src={imageSources.src || fallbackImageUrl}
          alt={alt}
          // A decorative image (empty `alt`) is presentational; a global ARIA attribute like
          // `aria-busy` on it triggers axe's presentation-role-conflict, so only expose the
          // loading state on images that are actually in the accessibility tree.
          aria-busy={alt ? isLoading : undefined}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          fetchPriority={fetchPriority}
          onError={handleBrokenImage}
          onLoad={() => setIsLoading(false)}
          className={cn(
            'block h-auto max-w-full transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            showingFallback && 'object-contain p-4',
            classNameImg,
          )}
        />
        {isLoading && (
          <div
            aria-hidden="true"
            style={{ width, height }}
            className="skeleton-shimmer animate-shimmer absolute inset-0 overflow-hidden bg-surface-subdued motion-reduce:animate-none"
          />
        )}
      </picture>
      {pictureWithOpacity && (
        <div
          aria-hidden="true"
          className={cn('absolute inset-0 z-10 h-full w-full', opacityClasses[pictureWithOpacity])}
        />
      )}
    </>
  )
}

export { Picture }
