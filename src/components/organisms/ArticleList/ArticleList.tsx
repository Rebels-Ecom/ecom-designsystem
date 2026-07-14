import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { ArticleCard, type ArticleCardProps, type ArticleCardType } from '../../molecules/ArticleCard'
import { Carousel, CarouselItem, type CarouselLabels } from '../Carousel'

/**
 * One article in the list — the content half of {@link ArticleCardProps}. The list computes the
 * layout props (`type`/`equalHeights`/`fullWidth`/`asCarouselItem`) itself, so they are omitted here.
 */
export interface ArticleListArticle
  extends Omit<
    ArticleCardProps,
    'type' | 'equalHeights' | 'fullWidth' | 'asCarouselItem' | 'className' | 'ref'
  > {
  /** Stable key for the list (and any parent state). */
  id: string
}

export interface ArticleListLabels {
  /**
   * Accessible name for the swipe carousel region — used only when `swipe` is set and no `title`
   * is given (a `title` names the region instead). @default 'Articles'
   */
  carouselRegion: string
}

export interface ArticleListProps {
  /** Articles to render, in order. */
  articles: ArticleListArticle[]
  /** Optional centred section title, rendered as an `<h2>` above the list. */
  title?: string
  /** Present the articles in a swipeable {@link Carousel} instead of a static grid. @default false */
  swipe?: boolean
  /** Force every card to the equal-height `small` shape (uniform grid). @default false */
  grid?: boolean
  /** Overridable accessible names for the carousel's own controls, forwarded to {@link Carousel}. */
  carouselLabels?: CarouselLabels
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<ArticleListLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying wrapper `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const defaultArticleListLabels: ArticleListLabels = {
  carouselRegion: 'Articles',
}

/** Layout props per card, ported from the legacy size/height/width heuristics. */
function cardLayout(
  total: number,
  index: number,
  grid: boolean,
): { type: ArticleCardType; equalHeights: boolean; fullWidth: boolean } {
  if (grid) return { type: 'small', equalHeights: true, fullWidth: false }
  return {
    // >3 articles → all uniform `small`; otherwise alternate small/large starting with small.
    type: total > 3 ? 'small' : index % 2 === 0 ? 'small' : 'large',
    equalHeights: total > 3,
    fullWidth: total === 1,
  }
}

/**
 * Article/blog teaser list (organism) composing {@link ArticleCard}. Presentational: it adds no
 * landmark (the consuming page owns `<main>`), only an optional `<h2>` section title that outranks
 * each card's `<h3>` so the heading outline stays valid (1.3.1). Cards size themselves via the
 * legacy heuristics — a single article spans full width, four or more become a uniform equal-height
 * grid, and two-or-three alternate small/large. When `swipe` is set the cards move into a
 * {@link Carousel} (a labelled region with keyboard-operable arrows/dots and native scroll-snap
 * swipe); otherwise they lay out in a wrapping flex row that stacks to a column on narrow viewports.
 * Renders nothing when `articles` is empty.
 */
function ArticleList({
  articles,
  title,
  swipe = false,
  grid = false,
  carouselLabels,
  labels,
  className,
  ref,
}: ArticleListProps) {
  const t = { ...defaultArticleListLabels, ...labels }

  if (!Array.isArray(articles) || articles.length === 0) return null

  const total = articles.length
  const regionName = title ?? t.carouselRegion

  return (
    <div ref={ref} className={cn('my-8 sm:pb-8', className)}>
      {title && <h2 className="mb-4 text-center text-h-m font-bold lg:text-h-m-lg">{title}</h2>}

      {swipe ? (
        <Carousel
          ariaLabel={regionName}
          offsetArrows
          peek="2rem"
          breakpoints={{
            sm: { perPage: 1 },
            md: { perPage: 2, perMove: 2 },
            lg: { perPage: 4, perMove: 4 },
          }}
          labels={carouselLabels}
        >
          {articles.map((article, index) => {
            const { id, ...content } = article
            return (
              <CarouselItem key={id}>
                <ArticleCard {...content} {...cardLayout(total, index, false)} asCarouselItem />
              </CarouselItem>
            )
          })}
        </Carousel>
      ) : (
        <div className="flex flex-col gap-4 px-4 sm:flex-row sm:flex-wrap md:px-8">
          {articles.map((article, index) => {
            const { id, ...content } = article
            return <ArticleCard key={id} {...content} {...cardLayout(total, index, grid)} />
          })}
        </div>
      )}
    </div>
  )
}

export { ArticleList }
