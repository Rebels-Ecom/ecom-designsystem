import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import type { LinkComponentType } from '../../../lib/link'
import { Heading } from '../../atoms/Heading'
import { MaxWidth } from '../../atoms/MaxWidth'
import { Picture } from '../../atoms/Picture'
import type { TagProps } from '../../atoms/Tag'
import { Text } from '../../atoms/Text'
import { TagsList } from '../../molecules/TagsList'
import { UiLink } from '../../molecules/UiLink'

export interface BrandDetailsImage {
  /** Image URL (desktop + default source). */
  url: string
  /** Optional narrow-viewport source (`< 768px`); falls back to `url`. */
  mobileUrl?: string
  /** Text alternative (1.1.1). Leave empty (`''`) only for purely decorative imagery. */
  alt?: string
  /** Image shown if `url` fails to load. */
  fallbackImage?: string
}

export interface BrandDetailsLink {
  /** Destination URL. */
  url: string
  /** Visible link text — also its accessible name (2.4.4). */
  text: string
  /** Injected router link component; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** External link — adds `rel="noopener noreferrer"`. @default false */
  isExternal?: boolean
}

export interface BrandDetailsProps {
  /** Brand name, rendered as a centred `<h3>`. */
  title: string
  /** Brand image, shown at the top at a 300px intrinsic width. */
  image: BrandDetailsImage
  /** Optional category chips shown under the image. */
  tags?: TagProps[]
  /** Plain-text description (centred) in a reading-measure column. */
  text?: string
  /** Pre-rendered rich description (centred) in a reading-measure column; rendered before `text`. */
  richText?: ReactNode
  /** Optional call-to-action link below the description. */
  link?: BrandDetailsLink
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying wrapper `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Brand hero (organism) composing {@link Picture}, {@link TagsList}, {@link Heading},
 * {@link Text}/rich content and an optional {@link UiLink}. Presentational: it adds no landmark
 * (the consuming page owns `<main>`), stacking a centred column of a brand image, an `<h3>` name,
 * an optional chip row, a reading-measure description and a call-to-action. All copy is
 * consumer-supplied, so there are no built-in UI strings to localise; provide a meaningful `alt`
 * on the image unless it is decorative (1.1.1). Unlike the legacy component, `richText` is typed as
 * rendered `ReactNode` (legacy passed an un-rendered component reference — a bug) and the CDN-only
 * `?w=300` query suffix is dropped (the library can't assume a consumer's image CDN); size the
 * image via the `width` hint / your own URL instead.
 */
function BrandDetails({
  title,
  image,
  tags,
  text,
  richText,
  link,
  className,
  ref,
}: BrandDetailsProps) {
  return (
    <div ref={ref} className={cn('flex flex-col items-center', className)}>
      <Picture
        id="brand-details-image"
        src={image.url}
        sources={[
          { srcset: image.mobileUrl ?? image.url, media: '(max-width: 767px)' },
          { srcset: image.url, media: '(min-width: 768px)' },
        ]}
        width={300}
        alt={image.alt ?? ''}
        fetchPriority="high"
        loading="eager"
        fallbackImageUrl={image.fallbackImage}
      />

      {tags && tags.length > 0 && <TagsList tags={tags} />}

      <Heading order={3} margin={[0, 0, 0.5]}>
        {title}
      </Heading>

      {richText && <MaxWidth contentMaxWidth="text">{richText}</MaxWidth>}
      {text && (
        <MaxWidth contentMaxWidth="text">
          <Text align="center">{text}</Text>
        </MaxWidth>
      )}

      {link && (
        <UiLink
          href={link.url}
          linkComponent={link.linkComponent}
          isExternal={link.isExternal}
          onSurface="transparent"
        >
          {link.text}
        </UiLink>
      )}
    </div>
  )
}

export { BrandDetails }
