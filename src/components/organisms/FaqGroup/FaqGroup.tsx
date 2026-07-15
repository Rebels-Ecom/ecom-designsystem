import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { type LinkComponentType } from '../../../lib/link'
import { Heading } from '../../atoms/Heading'
import { UiLink } from '../../molecules/UiLink'
import { FaqList, type FaqItem } from '../FaqList'

export interface FaqGroupProps {
  /** Group heading — renders as an `<h3>` and names the surrounding `<section>` region (1.3.1). */
  title: string
  /** The FAQ entries, rendered as an accessible accordion by the composed {@link FaqList}. */
  items: FaqItem[]
  /** Optional category icon shown before the title. */
  imgSrc?: string
  /**
   * Accessible text for `imgSrc`. Omit to treat the icon as decorative (`alt=""`) — the visible
   * title already names the group, so a redundant icon should not be announced.
   */
  imgAlt?: string
  /** Only render the first `limit` questions (forwarded to {@link FaqList}). */
  limit?: number
  /** Destination for the optional "view more" link. Renders only alongside `viewMoreLabel`. */
  viewMoreLink?: string
  /** Visible text and accessible name of the "view more" link. Renders only alongside `viewMoreLink`. */
  viewMoreLabel?: string
  /** Router link component for the "view more" link; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<section>`. */
  ref?: Ref<HTMLElement>
}

/**
 * A titled FAQ section (organism). Renders a named `<section>` region (`aria-label={title}`, 1.3.1)
 * containing an `<h3>` heading, an optional decorative category icon, and a composed {@link FaqList}
 * accordion — the disclosure semantics (`aria-expanded`/`aria-controls`, keyboard toggle) live in
 * `FaqList`. An optional {@link UiLink} "view more" link closes the group; its visible label is the
 * accessible name and the region name gives it context (2.4.4). Consumers supply all copy (`title`,
 * `viewMoreLabel`, `imgAlt`), so the component bakes in no localisable strings.
 */
function FaqGroup({
  title,
  items,
  imgSrc,
  imgAlt,
  limit,
  viewMoreLink,
  viewMoreLabel,
  linkComponent,
  className,
  ref,
}: FaqGroupProps) {
  if (!title) return null

  return (
    <section ref={ref} aria-label={title} className={cn('flex flex-col gap-4', className)}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        {imgSrc && <img src={imgSrc} alt={imgAlt ?? ''} className="w-15 max-h-15 object-contain" />}
        <Heading order={3} noMargin>
          {title}
        </Heading>
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <FaqList items={items} limit={limit} />
        {viewMoreLink && viewMoreLabel && (
          <UiLink href={viewMoreLink} linkComponent={linkComponent}>
            {viewMoreLabel}
          </UiLink>
        )}
      </div>
    </section>
  )
}

export { FaqGroup }
export type { FaqItem }
