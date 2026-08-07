import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Carousel, CarouselItem, type CarouselLabels } from '../Carousel'
import { Hero, type HeroProps } from '../../molecules/Hero'

export interface HeroCarouselProps {
  /** The hero banners to rotate through — each is rendered full-width as one slide. */
  heroComponents: HeroProps[]
  /** Accessible name for the carousel region (4.1.2). Overridable for non-English consumers. @default 'Highlights' */
  ariaLabel?: string
  /** Called with the active slide index when the visible hero changes. */
  onSlideChange?: (index: number) => void
  /** Overridable accessible names for the carousel arrows/dots (forwarded to {@link Carousel}). */
  labels?: CarouselLabels
  /** Extra classes, merged onto the carousel region via `cn()`. */
  className?: string
  /** Forwarded to the underlying carousel scroll track. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Full-bleed hero rotator (organism) — one {@link Hero} per slide inside a single-per-page
 * {@link Carousel}. The `lightArrows` treatment is responsive as in the legacy layout: below 90rem the
 * arrows sit inline on the pagination row as plain chevrons; at ≥90rem they lift onto the image edges,
 * vertically centred, with the translucent rounded background.
 *
 * Accessibility: inherits the Carousel's labelled `<section aria-roledescription="carousel">` with real
 * `<button>` arrows + pagination dots (keyboard-operable, visible focus ring, ≥24px targets) as the
 * non-drag alternative (2.5.1 / 2.1.1). The legacy Splide `autoplay`/`loop` is intentionally dropped —
 * no auto-advancing content means nothing needs a pause control (2.2.2) and no motion to suppress
 * (2.3.3†); consumers navigate manually. Provide a meaningful `ariaLabel` and ensure each hero's
 * background image is decorative (`alt=""`) or carries a real `alt`.
 */
function HeroCarousel({
  heroComponents,
  ariaLabel = 'Highlights',
  onSlideChange,
  labels,
  className,
  ref,
}: HeroCarouselProps) {
  return (
    <Carousel
      ref={ref}
      ariaLabel={ariaLabel}
      gap="0px"
      breakpoints={{ sm: { perPage: 1 }, md: { perPage: 1 }, lg: { perPage: 1 } }}
      lightArrows
      onNavigation={onSlideChange}
      onSlideChange={onSlideChange}
      labels={labels}
      className={className}
    >
      {heroComponents.map((hero, index) => (
        <CarouselItem key={index}>
          <Hero {...hero} className={cn('w-full', hero.className)} />
        </CarouselItem>
      ))}
    </Carousel>
  )
}

export { HeroCarousel }
