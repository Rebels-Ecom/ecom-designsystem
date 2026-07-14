import { useEffect, useRef } from 'react'
import type { ChangeEvent, KeyboardEvent, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { Icon } from '../../atoms/Icon'
import { Loader } from '../../atoms/Loader'
import type { PictureProps } from '../../atoms/Picture'
import { InputText } from '../../molecules/InputText'
import {
  ProductSearchResultItem,
  type ProductSearchResultItemLabels,
} from '../ProductSearchResultItem'

/** A selectable variant nested under a search result (revealed by the row's disclosure toggle). */
export interface ProductSearchVariant {
  /** Variant id — passed to `onSelectResult` when this variant is added. */
  variantId: string
  /** Variant display name — the row's visible text and add-control name. */
  variantName: string
  /** Variant thumbnail (forwarded to `Picture`; decorative by default). */
  image: PictureProps
  /** Show the "seller only" marker on this variant. @default false */
  sellerOnly?: boolean
  /** Tooltip text for the variant's seller-only marker. */
  sellerOnlyTooltipText?: string
}

/** One product result row's data model. Owned here; imported by `ProductSearchResultItem`. */
export interface ProductSearchResult {
  /** Product article number — passed to `onSelectResult` when the product is added. */
  partNo: string
  /** Product display name — the row's visible text and add-control name. */
  productName: string
  /** Product thumbnail (forwarded to `Picture`; decorative by default). */
  image: PictureProps
  /** Variants; when more than one, the row shows a disclosure toggle instead of an add button. */
  productVariantList?: ProductSearchVariant[]
  /** Show the "seller only" marker on the product row. @default false */
  isSeller?: boolean
  /** Tooltip text for the product's seller-only marker. */
  sellerTooltip?: string
}

export interface ProductSearchLabels {
  /** Accessible name for the search field (the placeholder is never the label, 3.3.2). @default 'Search products' */
  field: string
  /** Accessible name for the clear button. @default 'Clear search' */
  clear: string
  /** Accessible name for the results list. @default 'Search results' */
  results: string
}

export const defaultProductSearchLabels: ProductSearchLabels = {
  field: 'Search products',
  clear: 'Clear search',
  results: 'Search results',
}

export interface ProductSearchProps {
  /** Id of the underlying `<input>` (also seeds row keys). */
  id: string
  /** Whether the results dropdown is shown (controlled). */
  isOpen: boolean
  /** Setter for the open state. */
  setIsOpen: (isOpen: boolean) => void
  /** Current query (controlled) — pair with `setQuery`. */
  query: string
  /** Setter for the query. */
  setQuery: (query: string) => void
  /** Result rows to render while open with a non-empty query. */
  results: ProductSearchResult[]
  /** Fires with a `partNo` / `variantId` when a result (or one of its variants) is added. */
  onSelectResult: (id: string) => void
  /** Show the loading spinner in place of results (e.g. while fetching). @default false */
  isLoading?: boolean
  /** Disable the field. @default false */
  disabled?: boolean
  /** Content shown when a non-empty query returns no results. */
  noResultText: ReactNode
  /** Placeholder hint — never a substitute for the label (3.3.2). */
  placeholder?: string
  /** Overridable control names (English defaults) for localisation of the search chrome. */
  labels?: Partial<ProductSearchLabels>
  /** Overridable control names forwarded to each result row (add/expand/seller). */
  itemLabels?: Partial<ProductSearchResultItemLabels>
  /** Extra classes, merged onto the root via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<input>`. */
  ref?: Ref<HTMLInputElement>
}

/**
 * Product search field with a live results dropdown (organism). Composes `InputText` with a leading
 * (decorative) search glyph, a conditional clear button, and a results list of `ProductSearchResultItem`
 * rows.
 *
 * Accessibility: rendered as a `search` landmark so AT users can jump to it; the field has a real
 * visually-hidden `<label htmlFor>` (the placeholder is never the label, 3.3.2). The results dropdown
 * is a `polite` live region (4.1.3) so the loading, results-count, and no-results states are announced;
 * results are a labelled list whose interactive rows are next in the focus order (2.4.3). `Escape`
 * closes the dropdown and blurs the field, and a pointer press outside also closes it (2.1.1); focusing
 * or typing opens it, and typing only reports — it never changes context on input (3.2.2). Built-in
 * control names default to English and are overridable via `labels` / `itemLabels`; `placeholder` and
 * `noResultText` are consumer-supplied.
 */
function ProductSearch({
  id,
  isOpen,
  setIsOpen,
  query,
  setQuery,
  results,
  onSelectResult,
  isLoading = false,
  disabled,
  noResultText,
  placeholder,
  labels,
  itemLabels,
  className,
  ref,
}: ProductSearchProps) {
  const t = { ...defaultProductSearchLabels, ...labels }
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const showDropdown = isOpen && Boolean(query)

  function close() {
    setIsOpen(false)
    inputRef.current?.blur()
  }

  useEffect(() => {
    if (!isOpen) return
    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen, setIsOpen])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!isOpen) setIsOpen(true)
    setQuery(event.target.value)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape' && isOpen) close()
  }

  function handleClear() {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div ref={rootRef} role="search" onKeyDown={handleKeyDown} className={cn('w-full md:relative', className)}>
      <label htmlFor={id} className="sr-only">
        {t.field}
      </label>
      <div className="relative flex h-10">
        <span
          aria-hidden
          className="flex w-10 min-w-10 items-center justify-center rounded-l bg-action-tertiary text-text-on-tertiary"
        >
          <Icon icon="icon-search" />
        </span>
        <InputText
          ref={mergeRefs(inputRef, ref)}
          id={id}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          fullWidth
          wrapperClassName="w-full"
          className="h-full rounded-l-none border-l-0 pr-9 text-text-blue placeholder:text-text-blue"
        />
        {query && (
          <button
            type="button"
            aria-label={t.clear}
            onClick={handleClear}
            className={cn(
              'absolute top-1/2 right-3 z-select flex -translate-y-1/2 items-center justify-center bg-transparent text-text-blue',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
            )}
          >
            <Icon icon="icon-x" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div
          aria-live="polite"
          className="absolute left-0 z-menu mt-2 w-full bg-surface-default text-text-blue shadow-lg"
        >
          {isLoading ? (
            <div className="relative p-6">
              <Loader visible position="relative" color="orange" size="sm" />
            </div>
          ) : (
            <ul aria-label={t.results} style={{ maxHeight: '70vh' }} className="my-3 list-none overflow-y-auto">
              {results.map((result) => (
                <li
                  key={`${id}_${result.partNo}`}
                  className="border-b border-border-grey px-4 last:border-b-0"
                >
                  <ProductSearchResultItem {...result} onSelect={onSelectResult} labels={itemLabels} />
                </li>
              ))}
              {results.length === 0 && (
                <li className="flex px-4 py-4 text-left">
                  <span>{noResultText}</span>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export { ProductSearch }
