import { useEffect, useRef } from 'react'
import type { ChangeEvent, FormEvent, KeyboardEvent, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { resolveLink, type LinkComponentType } from '../../../lib/link'
import { InputText } from '../InputText'
import { Icon } from '../../atoms/Icon'

export interface SearchResult {
  /** Bold primary label of the result. */
  label: string
  /** Secondary descriptive text. */
  text: string
  /** Destination the result links to. */
  slug: string
}

export interface SearchNoResult {
  /** Heading shown when a query returns nothing. */
  label: string
  /** Supporting text shown when a query returns nothing. */
  text: ReactNode
}

export interface SearchLabels {
  /** Accessible name for the search field. @default 'Search' */
  field: string
  /** Accessible name for the submit button. @default 'Search' */
  submit: string
  /** Accessible name for the clear button. @default 'Clear search' */
  clear: string
  /** Accessible name for the results list. @default 'Search results' */
  results: string
}

export const defaultSearchLabels: SearchLabels = {
  field: 'Search',
  submit: 'Search',
  clear: 'Clear search',
  results: 'Search results',
}

export interface SearchProps {
  /** Id of the underlying `<input>`. */
  id: string
  /** Whether the results dropdown is shown (controlled). */
  isOpen: boolean
  /** Setter for the open state. */
  setIsOpen: (isOpen: boolean) => void
  /** Reports focus enter/leave on the field. */
  setIsFocused: (isFocused: boolean) => void
  /** Current query (controlled). */
  query: string
  /** Setter for the query. */
  setQuery: (query: string) => void
  /** Result rows to render while open with a non-empty query. */
  results: SearchResult[]
  /** Fallback content shown when a non-empty query returns no results. */
  noResult: SearchNoResult
  /** Disables the field. */
  disabled?: boolean
  /** Placeholder hint — never a substitute for the label (3.3.2). */
  placeholder?: string
  /** Component used to render result links; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Called on explicit submit (Enter or the search button) with the current query. */
  onSubmit?: (query: string) => void
  /** Overridable control names (English defaults) for localisation. */
  labels?: Partial<SearchLabels>
  /** Extra classes, merged onto the root `<form>` via `cn()`. */
  className?: string
  /** Forwarded to the root `<form>`. */
  ref?: Ref<HTMLFormElement>
}

/**
 * Site search field with a live results dropdown (molecule). Composes `InputText` with a search
 * submit button, a conditional clear button and a results list.
 *
 * Accessibility: rendered as a `search` landmark (`<form role="search">`) so AT users can jump to it;
 * the field has a real (visually hidden) `<label htmlFor>` — the placeholder is never the label
 * (3.3.2). The icon-only submit and clear buttons carry action `aria-label`s (4.1.2) and are
 * keyboard-reachable with the standard focus ring. Results render as a labelled list of real links,
 * next in the focus order (2.4.3); `Escape` closes the dropdown (and blurs the field) and a pointer
 * press outside also closes it (2.1.1). Typing only reports via `setQuery`/`setIsOpen` — it never
 * changes context on input (3.2.2). All built-in control names default to English and are overridable
 * via `labels`; `placeholder`/`noResult`/result content are consumer-supplied.
 */
function Search({
  id,
  isOpen,
  setIsOpen,
  setIsFocused,
  query,
  setQuery,
  results,
  noResult,
  disabled,
  placeholder,
  linkComponent,
  onSubmit,
  labels,
  className,
  ref,
}: SearchProps) {
  const t = { ...defaultSearchLabels, ...labels }
  const Link = resolveLink(linkComponent)
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const showResults = isOpen && Boolean(query)

  function close() {
    setIsOpen(false)
    inputRef.current?.blur()
  }

  useEffect(() => {
    if (!isOpen) return
    function handlePointerDown(event: PointerEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
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

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLFormElement>) {
    if (event.key === 'Escape' && isOpen) close()
  }

  function handleClear() {
    setQuery('')
    inputRef.current?.focus()
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit?.(query)
  }

  return (
    <form
      ref={mergeRefs(formRef, ref)}
      role="search"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className={cn('relative', className)}
    >
      <label htmlFor={id} className="sr-only">
        {t.field}
      </label>
      <div className="relative flex h-12 md:h-10">
        <button
          type="submit"
          aria-label={t.submit}
          disabled={disabled}
          className={cn(
            'flex h-full w-12 shrink-0 items-center justify-center border-none bg-action-tertiary text-text-on-tertiary md:w-10 md:rounded-l',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          )}
        >
          <Icon icon="icon-search" />
        </button>
        <InputText
          ref={inputRef}
          id={id}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          fullWidth
          wrapperClassName="w-full"
          className="h-full rounded-none border-l-0 pr-9 md:rounded-r md:rounded-l-none"
        />
        {query && (
          <button
            type="button"
            aria-label={t.clear}
            onClick={handleClear}
            className={cn(
              'absolute top-1/2 right-3 z-select flex -translate-y-1/2 items-center justify-center border-none bg-transparent text-text-default',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
            )}
          >
            <Icon icon="icon-x" />
          </button>
        )}
      </div>

      {showResults && (
        <div className="absolute left-0 z-menu w-full bg-surface-default shadow-lg">
          <ul
            aria-label={t.results}
            style={{ maxHeight: '46vh' }}
            className="list-none overflow-y-auto px-4"
          >
            {results.map((result, index) => (
              <li
                key={`${id}_${index}`}
                className="border-b border-border-grey py-2.5 last:border-b-0"
              >
                <Link
                  href={result.slug}
                  className="block text-text-default no-underline hover:text-text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
                >
                  <span className="font-bold">{result.label}</span>
                  {result.text && <span> - </span>}
                  <span>{result.text}</span>
                </Link>
              </li>
            ))}
            {results.length === 0 && (
              <li className="py-2.5">
                <span className="font-bold">{noResult.label}</span>
                {noResult.text && <span> - </span>}
                <span>{noResult.text}</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </form>
  )
}

export { Search }
