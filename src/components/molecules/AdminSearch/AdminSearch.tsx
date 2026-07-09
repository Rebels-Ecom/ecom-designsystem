import { useEffect, useRef, type FocusEvent, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { Icon } from '../../atoms/Icon'
import { Loader } from '../../atoms/Loader'
import { InputText } from '../InputText'

export interface AdminSearchResult {
  name: string
  companyName: string
  email: string
}

export interface AdminSearchLabels {
  /** Accessible name for the search field. @default 'Search' */
  input: string
  /** Accessible name for the clear button. @default 'Clear search' */
  clear: string
  /** Result-count announcement (a `role="status"` live region). @default (n) => `${n} results` */
  results: (count: number) => string
}

export interface AdminSearchProps {
  /** Id of the search `<input>`. */
  id: string
  /** Whether the results dropdown is open (controlled). */
  isOpen: boolean
  /** Show the loading spinner in the dropdown. @default false */
  isLoading?: boolean
  /** Open-state setter. */
  setIsOpen: (isOpen: boolean) => void
  /** Controlled query value. */
  query: string
  /** Query setter. */
  setQuery: (query: string) => void
  /** Matching results (the parent owns filtering/fetching). */
  results: AdminSearchResult[]
  /** Fired when a result is activated. */
  onClickSearchResult: (result: AdminSearchResult) => void
  /** Disable the field. */
  disabled?: boolean
  /** Content shown when there are no matches. */
  noResultText: ReactNode
  /** Placeholder hint (not a label — the label is `labels.input`). */
  placeholder?: string
  /** Overridable UI strings (English defaults) — see {@link AdminSearchLabels}. */
  labels?: Partial<AdminSearchLabels>
  /** Focus handler for the field. */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the search `<input>`. */
  ref?: Ref<HTMLInputElement>
}

const defaultAdminSearchLabels: AdminSearchLabels = {
  input: 'Search',
  clear: 'Clear search',
  results: (count) => `${count} results`,
}

/**
 * Admin search field with a results dropdown (molecule). A labelled search `<input>` (legacy shipped
 * it nameless) prefixed by a decorative search glyph, an optional focusable clear button (named via
 * `labels.clear`), and a dropdown of action `<button>`s in a labelled `role="list"`. Result arrival is
 * announced through a visually-hidden `role="status"` live region (`labels.results`). Closes on
 * `Escape` and outside click. The parent owns the query/results/open state. Not a formal ARIA
 * combobox — results are actions, not selectable values — but fully labelled and keyboard-operable.
 */
function AdminSearch({
  id,
  isOpen,
  isLoading = false,
  setIsOpen,
  query,
  setQuery,
  results,
  onClickSearchResult,
  disabled,
  noResultText,
  placeholder,
  labels,
  onFocus,
  className,
  ref,
}: AdminSearchProps) {
  const t = { ...defaultAdminSearchLabels, ...labels }
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const listId = `${id}-results`

  const close = () => {
    setIsOpen(false)
    inputRef.current?.blur()
  }

  useEffect(() => {
    if (!isOpen) return
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) close()
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleClickResult = (item: AdminSearchResult) => {
    onClickSearchResult(item)
    close()
    setQuery('')
  }

  const showDropdown = isOpen && Boolean(query)

  return (
    <div ref={wrapperRef} className={cn('relative m-0 w-full px-4 md:px-0', className)}>
      <div className="relative flex h-10 lg:max-w-96">
        <span className="flex w-10 min-w-10 items-center justify-center rounded-l bg-action-primary text-text-on-primary">
          <Icon icon="icon-search" size="medium" />
        </span>
        <InputText
          ref={mergeRefs<HTMLInputElement>(inputRef, ref)}
          id={id}
          type="search"
          value={query}
          placeholder={placeholder}
          ariaLabel={t.input}
          autoComplete="off"
          disabled={disabled}
          fullWidth
          wrapperClassName="flex-1"
          className="h-10 rounded-l-none border-none bg-action-primary/5 text-text-blue placeholder:text-text-blue"
          onChange={(event) => {
            if (!isOpen) setIsOpen(true)
            setQuery(event.target.value)
          }}
          onFocus={onFocus}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              inputRef.current?.focus()
            }}
            aria-label={t.clear}
            className="absolute top-1/2 right-2 z-10 flex -translate-y-1/2 cursor-pointer border-none bg-transparent p-1 text-text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
          >
            <Icon icon="icon-x" size="small" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute left-0 z-50 mt-1 flex w-full min-h-22 items-center justify-center rounded bg-blue-500 py-4 text-text-white shadow-lg lg:max-w-content-text">
          {isLoading ? (
            <Loader visible position="relative" color="orange" size="sm" />
          ) : (
            <>
              <span role="status" className="sr-only">
                {t.results(results.length)}
              </span>
              <ul id={listId} role="list" aria-label={t.input} className="max-h-96 w-full overflow-y-auto px-4">
                {results.map((item, index) => (
                  <li key={`${id}-${index}`} className="w-full even:bg-text-white/10">
                    <button
                      type="button"
                      onClick={() => handleClickResult(item)}
                      className="grid w-full cursor-pointer gap-2 p-3 text-left hover:bg-text-white hover:text-text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary md:grid-cols-3 md:gap-8"
                    >
                      <span className="break-words">{item.name}</span>
                      <span className="break-words">{item.companyName}</span>
                      <span className="break-words">{item.email}</span>
                    </button>
                  </li>
                ))}
                {results.length === 0 && (
                  <li className="flex justify-center text-center">
                    <span>{noResultText}</span>
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export { AdminSearch }
