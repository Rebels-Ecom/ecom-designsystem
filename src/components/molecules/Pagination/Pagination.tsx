import type { ReactElement, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { useBreakpoint } from '../../atoms/Breakpoints'

export interface PaginationProps {
  /** Total number of items being paginated. */
  itemsCount: number
  /** Items per page — with `itemsCount` this derives the page count. */
  pageSize: number
  /** The active page (1-based, controlled). */
  currentPage: number
  /** Called with the target page when a page number is activated. */
  onPageChange: (page: number) => void
  /** Called when the previous-page control is activated. */
  onPreviousClick: () => void
  /** Called when the next-page control is activated. */
  onNextClick: () => void
  /** Optional element (e.g. a "back to top" link) shown alongside the controls. */
  scrollToTopEl?: ReactElement
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<nav>`. */
  ref?: Ref<HTMLElement>
}

const btnBase =
  'cursor-pointer border-none bg-transparent p-0 font-primary text-action-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary disabled:cursor-default disabled:text-border-grey'
const pageBtn = 'text-xl md:w-8 md:text-base'
const stepBtn = 'flex-1 p-3 text-2xl md:p-0 md:text-xl'

/**
 * Page navigation (molecule). Renders a `<nav aria-label>` landmark of real `<button>`s: a
 * previous/next stepper (each with a descriptive `aria-label`, `disabled` at the ends) and the visible
 * page numbers, with the active page marked `aria-current="page"` and shown bold + underlined (a
 * non-colour cue). The chevron icons are decorative (`aria-hidden`) since the buttons are labelled. The
 * visible window adapts to the viewport (5 pages desktop, 3 mobile) with `…` ellipses (decorative) when
 * truncated. Controlled: it reports intent via the `on*` callbacks and never navigates itself. Renders
 * nothing when there is a single page.
 */
function Pagination({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPreviousClick,
  onNextClick,
  scrollToTopEl,
  className,
  ref,
}: PaginationProps) {
  const { isMobile } = useBreakpoint()
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount <= 1) return null

  const maxVisiblePages = isMobile ? 3 : 5
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(pageCount, startPage + maxVisiblePages - 1)
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }
  const pages: number[] = []
  for (let page = startPage; page <= endPage; page++) pages.push(page)

  return (
    <nav ref={ref} aria-label="Paginering" className={cn('relative flex flex-col items-center md:flex-row', className)}>
      <div className="flex w-full flex-1 justify-center md:mx-auto md:max-w-80">
        <button
          type="button"
          aria-label="Föregående sida"
          onClick={onPreviousClick}
          disabled={currentPage === 1}
          className={cn(btnBase, stepBtn)}
        >
          <Icon icon="icon-chevron-left" />
        </button>
        <div className="flex w-full items-center justify-center gap-8 md:w-auto md:gap-0">
          {startPage > 1 && (
            <>
              <button type="button" aria-label="Gå till sida 1" onClick={() => onPageChange(1)} className={cn(btnBase, pageBtn)}>
                1
              </button>
              {startPage > 2 && <span aria-hidden className="text-action-primary">…</span>}
            </>
          )}
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`Gå till sida ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
              onClick={() => onPageChange(page)}
              className={cn(btnBase, pageBtn, currentPage === page && 'font-bold underline')}
            >
              {page}
            </button>
          ))}
          {endPage < pageCount && (
            <>
              {endPage < pageCount - 1 && <span aria-hidden className="text-action-primary">…</span>}
              <button
                type="button"
                aria-label={`Gå till sida ${pageCount}`}
                onClick={() => onPageChange(pageCount)}
                className={cn(btnBase, pageBtn)}
              >
                {pageCount}
              </button>
            </>
          )}
        </div>
        <button
          type="button"
          aria-label="Nästa sida"
          onClick={onNextClick}
          disabled={currentPage === pageCount}
          className={cn(btnBase, stepBtn)}
        >
          <Icon icon="icon-chevron-right" />
        </button>
      </div>
      {scrollToTopEl && <div className="flex md:absolute md:right-0 md:bottom-0">{scrollToTopEl}</div>}
    </nav>
  )
}

export { Pagination }
