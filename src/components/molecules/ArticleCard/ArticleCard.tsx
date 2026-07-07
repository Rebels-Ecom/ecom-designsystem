import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import {
  Picture,
  type PictureFetchPriority,
  type PictureLoading,
  type PictureProps,
} from '../../atoms/Picture'
import { Tag, type TagProps } from '../../atoms/Tag'
import { UiLink, type UiLinkTarget } from '../UiLink'

export type ArticleCardType = 'small' | 'large' | 'full'

export interface ArticleCardLink {
  /** Destination the card (image + read-more link) points to. */
  href: string
  /** Visible read-more CTA text. */
  children: ReactNode
  /** Injected router link component; defaults to a semantic `<a>` ({@link DefaultLink}). */
  linkComponent?: LinkComponentType
  /** Anchor target. @default '_self' */
  target?: UiLinkTarget
  /** External link — adds `rel="noopener noreferrer"`. @default false */
  isExternal?: boolean
}

export interface ArticleCardProps {
  /** Fallback image URL used when `image` fails to load. */
  fallbackImage: string
  /** Responsive image, forwarded to {@link Picture}. Omit for a text-only card. */
  image?: PictureProps
  /** Category chips overlaid on the image (top-left), forwarded to {@link Tag}. */
  tags?: TagProps[]
  /** Card heading (rendered as an `<h3>`). */
  heading?: string
  /**
   * Plain-text excerpt. Unlike the legacy card this is escaped, not raw HTML — pass structured
   * markup through `richText` instead. Truncated to `maxChar` characters when that is set.
   */
  text?: string
  /** Pre-rendered rich content, shown below `text`. */
  richText?: ReactNode
  /** Makes the card a link (image + read-more CTA). Omit for a static card. */
  link?: ArticleCardLink
  /** Character cap applied to `text`; longer excerpts are truncated with an ellipsis. */
  maxChar?: number
  /** Span the full row width, wide image, centred text. @default false */
  fullWidth?: boolean
  /** Stretch to the tallest sibling in a row (equal-height card grid). @default false */
  equalHeights?: boolean
  /** Fill its carousel slot (`max-w-full`) rather than sizing to content. @default false */
  asCarouselItem?: boolean
  /** Image aspect preset. @default 'small' */
  type?: ArticleCardType
  /** Loading/priority hints forwarded to {@link Picture}. */
  imagePriority?: { fetchPriority?: PictureFetchPriority; loading?: PictureLoading }
  /** Fired when a card link is activated. */
  onClick?: () => void
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<article>`. */
  ref?: Ref<HTMLElement>
}

/** Image aspect ratio per card shape (no arbitrary literals — Tailwind v4 bare fractions). */
function imageAspect({
  fullWidth,
  equalHeights,
  type,
}: Pick<ArticleCardProps, 'fullWidth' | 'equalHeights' | 'type'>): string {
  if (fullWidth) return 'aspect-16/9'
  if (equalHeights) return 'aspect-5/6'
  if (type === 'large') return 'aspect-5/6 md:aspect-3/4'
  return 'aspect-5/6'
}

/**
 * Article/blog teaser card (molecule) composing {@link Picture}, {@link Tag} and {@link UiLink}.
 * Renders as an `<article>` landmark with an `<h3>` title. When `link` is set the card exposes a
 * text **read-more** link (accessible name includes the heading, 2.4.4) as the keyboard/AT path; the
 * image is a secondary pointer affordance to the same URL, taken out of the tab order (`tabIndex={-1}`)
 * to avoid a duplicate keyboard stop. Overlaid tags are non-interactive (`pointer-events-none`) so
 * clicks fall through to the image link. Precise column widths are the parent list's responsibility.
 */
function ArticleCard({
  fallbackImage,
  image,
  tags,
  heading,
  text,
  richText,
  link,
  maxChar,
  fullWidth = false,
  equalHeights = false,
  asCarouselItem = false,
  type = 'small',
  imagePriority,
  onClick,
  className,
  ref,
}: ArticleCardProps) {
  const excerpt =
    text && maxChar && text.length > maxChar ? `${text.slice(0, maxChar).trimEnd()}…` : text

  const picture = image && (
    <Picture
      {...image}
      fallbackImageUrl={fallbackImage}
      fetchPriority={imagePriority?.fetchPriority}
      loading={imagePriority?.loading}
      classNamePicture={cn('h-full w-full', image.classNamePicture)}
      classNameImg={cn('h-full w-full object-cover', image.classNameImg)}
    />
  )

  const ImageLink = link?.linkComponent ?? DefaultLink
  const hasText = Boolean(heading || excerpt || richText || link)

  return (
    <article
      ref={ref}
      className={cn(
        'flex flex-col',
        fullWidth ? 'w-full' : 'flex-1',
        equalHeights && 'h-full',
        asCarouselItem && 'max-w-full',
        className,
      )}
    >
      {image && (
        <div className={cn('relative', imageAspect({ fullWidth, equalHeights, type }))}>
          {link ? (
            <ImageLink
              href={link.href}
              target={link.target ?? '_self'}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              tabIndex={-1}
              aria-label={heading ? `Läs mer om ${heading}` : 'Läs mer'}
              onClick={onClick}
              className="block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
            >
              {picture}
            </ImageLink>
          ) : (
            picture
          )}
          {!!tags?.length && (
            <ul className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-1">
              {tags.map((tag, i) => (
                <li key={`${tag.text}-${i}`}>
                  <Tag {...tag} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {hasText && (
        <div className={cn('flex flex-1 flex-col p-4 pt-6', fullWidth && 'items-center text-center')}>
          {heading && <h3 className="mb-5 text-h-xs font-bold md:text-h-s">{heading}</h3>}
          {excerpt && <p className="mb-6 text-body text-text-default">{excerpt}</p>}
          {richText}
          {link && (
            <UiLink
              href={link.href}
              linkComponent={link.linkComponent}
              target={link.target}
              isExternal={link.isExternal}
              onClick={onClick}
              ariaLabel={`Läs mer om ${heading ?? 'artikeln'}`}
              className="mt-auto"
            >
              {link.children}
            </UiLink>
          )}
        </div>
      )}
    </article>
  )
}

export { ArticleCard }
