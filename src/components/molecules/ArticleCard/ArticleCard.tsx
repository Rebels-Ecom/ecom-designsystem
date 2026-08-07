import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { resolveLink, type LinkComponentType } from '../../../lib/link'
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

/**
 * Outer image "slot" — a positioned box at the TALLEST aspect for the row. In the small/large
 * alternation (not `equalHeights`/`fullWidth`) it's `md:aspect-3/4`; the image inside is absolutely
 * bottom-anchored, so a shorter `small` image lines its bottom edge up with the taller `large` one
 * (the legacy `.ratioWrapper`). It stays a plain block (no flex) so the cards keep equal `flex-1`
 * width — a flex slot with `aspect-ratio` blows the taller card wider. Matches the image for
 * `equalHeights`/`fullWidth`, where there's nothing to align.
 */
function imageSlot({
  fullWidth,
  equalHeights,
}: Pick<ArticleCardProps, 'fullWidth' | 'equalHeights'>): string {
  if (fullWidth) return 'relative h-64 overflow-hidden'
  if (equalHeights) return 'relative aspect-5/6'
  return 'relative aspect-5/6 md:aspect-3/4'
}

/**
 * Inner image box — absolutely bottom-anchored inside the slot at the card's own aspect. `small` stays
 * `5/6` (sitting at the bottom of the taller slot); `large` matches the slot (`md:aspect-3/4`);
 * `fullWidth` fills its fixed-height slot.
 */
function imageBox({
  fullWidth,
  equalHeights,
  type,
}: Pick<ArticleCardProps, 'fullWidth' | 'equalHeights' | 'type'>): string {
  if (fullWidth) return 'absolute inset-0'
  if (!equalHeights && type === 'large') return 'absolute inset-x-0 bottom-0 aspect-5/6 md:aspect-3/4'
  return 'absolute inset-x-0 bottom-0 aspect-5/6'
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

  const ImageLink = resolveLink(link?.linkComponent)
  const hasText = Boolean(heading || excerpt || richText || link)

  return (
    <article
      ref={ref}
      className={cn(
        'flex flex-col',
        // min-w-0 lets the `flex-1` cards share width evenly — without it a long, unbreakable word in
        // one card's excerpt sets a large min-content and stops that card shrinking, so it balloons
        // wider than its siblings at narrow (tablet) widths.
        fullWidth ? 'w-full' : 'flex-1 min-w-0',
        equalHeights && 'h-full',
        asCarouselItem && 'max-w-full',
        className,
      )}
    >
      {image && (
        <div className={cn(imageSlot({ fullWidth, equalHeights }))}>
          <div className={cn(imageBox({ fullWidth, equalHeights, type }))}>
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
              <ul role="list" className="pointer-events-none absolute left-4 top-4 flex list-none flex-wrap gap-1 p-0">
                {tags.map((tag, i) => (
                  <li key={`${tag.text}-${i}`}>
                    <Tag {...tag} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {hasText && (
        <div className={cn('flex flex-1 flex-col p-4 pt-6', fullWidth && 'items-center text-center')}>
          {heading && <h3 className="mb-5 text-h-xs font-bold md:text-h-s">{heading}</h3>}
          {excerpt && <p className="mb-6 text-body break-words text-text-default">{excerpt}</p>}
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
