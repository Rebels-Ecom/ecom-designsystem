import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { OfferCard, type OfferCardProps } from '../../molecules/OfferCard'
import { Carousel, CarouselItem, type CarouselLabels } from '../Carousel'

/**
 * One offer in the list — the content half of {@link OfferCardProps}, plus a stable `id` for the
 * list key. Layout (the carousel item wrapper) is owned by the list, so no layout props are needed.
 */
export interface OfferCardListOffer extends Omit<OfferCardProps, 'className' | 'ref'> {
  /** Stable key for the list (and any parent state). */
  id: string
}

export interface OfferCardListProps {
  /** Offers to render, in order. Each becomes an {@link OfferCard} slide. */
  offers: OfferCardListOffer[]
  /** Accessible name for the carousel region — required so AT can announce it (4.1.2). */
  ariaLabel: string
  /** Slides visible per page at the `lg` breakpoint (smaller breakpoints default to 1 / 2). @default 4 */
  maxPerPage?: number
  /** Overridable accessible names for the carousel's own arrow/dot controls, forwarded to {@link Carousel}. */
  carouselLabels?: CarouselLabels
  /** Extra classes, merged onto the wrapping container via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>` (the `ContentWrapper`). */
  ref?: Ref<HTMLDivElement>
}

/**
 * Horizontal list of offer/feature tiles (organism) composing {@link OfferCard} inside a
 * {@link Carousel}. Presentational: it adds no landmark of its own (the consuming page owns
 * `<main>`); the Carousel is the single source of interaction — a labelled region
 * (`aria-roledescription="carousel"`) with keyboard-operable arrow/dot controls and native
 * scroll-snap swipe, so this component only needs to forward a meaningful `ariaLabel` (4.1.2) and
 * the offer content. There is no auto-advance, so nothing needs a pause control (2.2.2). Each
 * offer's feature glyph is decorative (handled by `OfferCard`). Renders nothing when `offers` is
 * empty. Unlike the taller `ArticleList`, the legacy frame fits the capture viewport, so this maps
 * a visual baseline.
 */
function OfferCardList({
  offers,
  ariaLabel,
  maxPerPage = 4,
  carouselLabels,
  className,
  ref,
}: OfferCardListProps) {
  if (!Array.isArray(offers) || offers.length === 0) return null

  return (
    <ContentWrapper ref={ref} className={cn(className)}>
      <Carousel
        ariaLabel={ariaLabel}
        arrowsWithDots
        breakpoints={{ lg: { perPage: maxPerPage, perMove: 1 } }}
        labels={carouselLabels}
      >
        {offers.map(({ id, ...offer }) => (
          <CarouselItem key={id}>
            <OfferCard {...offer} />
          </CarouselItem>
        ))}
      </Carousel>
    </ContentWrapper>
  )
}

export { OfferCardList }
