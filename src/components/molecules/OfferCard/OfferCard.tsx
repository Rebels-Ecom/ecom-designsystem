import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'

export type OfferCardHeadingLevel = 2 | 3 | 4 | 5 | 6

export interface OfferCardProps {
  /** Decorative feature glyph shown above the heading (rendered `aria-hidden`, since the heading conveys the meaning). */
  icon: IconName
  /** Card title. */
  heading: string
  /**
   * Supporting copy. A plain string renders as-is; any `<p>` (or rich-text node) inside is styled as
   * subdued body text, matching the legacy `& p` rule.
   */
  richText?: ReactNode
  /** Heading element level, so the card slots into the surrounding document outline (1.3.1). @default 4 */
  headingLevel?: OfferCardHeadingLevel
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the card's root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Centred feature/offer tile (molecule): a decorative icon, a heading, and optional supporting copy.
 * Presentational — it carries no interactive semantics, so there is no focus or keyboard behaviour. The
 * icon is decorative (`aria-hidden`) because the adjacent `heading` already names the offer; choose
 * `headingLevel` so the card fits the page's heading outline (1.3.1). On mobile (< `md`) the card gains a
 * hairline border, matching the legacy layout.
 */
function OfferCard({ icon, heading, richText, headingLevel = 4, className, ref }: OfferCardProps) {
  const HeadingTag = `h${headingLevel}` as const

  return (
    <div
      ref={ref}
      className={cn(
        'mx-auto flex w-full flex-col items-center px-6.5 pt-15 pb-11.25 text-center',
        'max-md:border max-md:border-border-grey',
        // Legacy `.offerCard & p`: subdued body text. A bare string carries no <p>, so it renders as
        // inherited default text (matching the legacy story); a real <p> child picks up the treatment.
        '[&_p]:m-0 [&_p]:break-words [&_p]:text-body [&_p]:text-text-subdued',
        className,
      )}
    >
      <Icon icon={icon} className="text-icon-2xl text-icon-decorative-orange" />
      {/* Matches the legacy global `h4`/`.headingS` scale (1.375rem bold), not a UA-default h4. */}
      <HeadingTag className="mx-auto mt-6 mb-4 text-h-s font-bold text-text-default">{heading}</HeadingTag>
      {richText}
    </div>
  )
}

export { OfferCard }
