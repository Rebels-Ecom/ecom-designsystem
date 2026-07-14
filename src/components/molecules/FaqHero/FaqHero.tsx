import { useState } from 'react'
import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Loader } from '../../atoms/Loader'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { InputText } from '../InputText'
import { IconButton } from '../IconButton'

export interface FaqHeroLabels {
  /** Accessible name for the search field (a placeholder is never the label, 3.3.2). @default 'Search FAQ' */
  search: string
  /** Accessible name for the clear button. @default 'Clear search' */
  clear: string
}

export const defaultFaqHeroLabels: FaqHeroLabels = {
  search: 'Search FAQ',
  clear: 'Clear search',
}

export interface FaqHeroProps {
  /** Hero heading text. */
  title: string
  /** Supporting line under the heading. */
  subtitle: string
  /** Placeholder hint for the search field — a hint, never the label (3.3.2). */
  placeholder: string
  /** Fires with the current query on every keystroke (and on clear, with `''`). */
  onQueryChange: (query: string) => void
  /** Show the loading spinner inside the field. @default false */
  loading?: boolean
  /** Semantic level for the hero heading. @default 2 */
  headingLevel?: HeadingOrder
  /** Id of the underlying `<input>`. @default 'faq-search' */
  id?: string
  /** Overridable control names (English defaults) for localisation. */
  labels?: Partial<FaqHeroLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<section>`. */
  ref?: Ref<HTMLElement>
}

/**
 * FAQ hero (molecule): a centred heading + subtitle over a live search field. Rendered as a `<section>`
 * whose heading names it (1.3.1); the search field carries a real `ariaLabel` so its accessible name is
 * not the placeholder (3.3.2), a decorative leading search glyph (`aria-hidden`), a `role="status"`
 * loading spinner (4.1.3), and a clear button with an action `aria-label` and the standard focus ring
 * (2.4.7). Typing only reports via `onQueryChange` — it never changes context on input (3.2.2). The
 * heading level is consumer-driven (`headingLevel`) so the hero slots into the page outline correctly;
 * built-in names default to English and are overridable via `labels`.
 */
function FaqHero({
  title,
  subtitle,
  placeholder,
  onQueryChange,
  loading = false,
  headingLevel = 2,
  id = 'faq-search',
  labels,
  className,
  ref,
}: FaqHeroProps) {
  const t = { ...defaultFaqHeroLabels, ...labels }
  const [query, setQuery] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
    onQueryChange(event.target.value)
  }

  function handleClear() {
    setQuery('')
    onQueryChange('')
  }

  return (
    <section ref={ref} className={cn('bg-action-primary px-4 py-8 text-center text-text-on-primary', className)}>
      <ContentWrapper>
        <Heading order={headingLevel} align="center" color="white" noMargin>
          {title}
        </Heading>
        <p className="mt-2 mb-8 text-body-m">{subtitle}</p>

        <div className="relative mx-auto mt-12 max-w-xl">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-4 z-select flex -translate-y-1/2 items-center text-action-primary"
          >
            <Icon icon="icon-search" />
          </span>
          <InputText
            id={id}
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            ariaLabel={t.search}
            fullWidth
            wrapperClassName="w-full"
            className="border-none px-11 text-text-default"
          />
          {loading && (
            <span className="absolute top-1/2 right-3 z-select flex -translate-y-1/2 items-center">
              <Loader visible position="relative" size="xs" />
            </span>
          )}
          {query && !loading && (
            <IconButton
              type="button"
              icon="icon-x"
              label={t.clear}
              onClick={handleClear}
              size="small"
              isTransparent
              noBorder
              className="absolute top-1/2 right-2 z-select -translate-y-1/2"
            />
          )}
        </div>
      </ContentWrapper>
    </section>
  )
}

export { FaqHero }
