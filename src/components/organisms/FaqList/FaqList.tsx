import { useId, useState, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { ClickableListItem } from '../../molecules/ClickableListItem'
import { ExpandableWrapper } from '../../atoms/ExpandableWrapper'

export interface FaqItem {
  /** The question. Wrap keywords in `==…==` to highlight them (`<mark>`). */
  question: string
  /** The answer content revealed when the item expands (e.g. a rich-text element). */
  answer?: ReactNode
}

export interface FaqListProps {
  /** The FAQ entries. */
  items: FaqItem[]
  /** Render questions in bold. @default false */
  bold?: boolean
  /** Only show the first `limit` items. */
  limit?: number
  /** Card styling per item (bordered, filled). @default false */
  isCard?: boolean
  /** Accessible name for the list. @default 'Frequently asked questions' */
  label?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/** Split `==keyword==` runs into `<mark>` elements; plain text otherwise. */
function highlight(text: string): ReactNode {
  const parts = text.split(/(==.+?==)/)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    part.startsWith('==') && part.endsWith('==') ? (
      <mark key={i} className="bg-highlight text-inherit">
        {part.slice(2, -2)}
      </mark>
    ) : (
      part
    ),
  )
}

/**
 * FAQ accordion (organism). A `role="list"` of disclosure rows: each question is a
 * {@link ClickableListItem} `<button>` exposing `aria-expanded` + `aria-controls`, and its answer is
 * an {@link ExpandableWrapper} panel wired back with `role="region"` + `aria-labelledby` (the APG
 * accordion pattern). The panel's collapsed content is `inert`/`aria-hidden` (via the wrapper), so the
 * trigger — which sits *outside* the wrapper — stays operable. Tab moves between questions; Enter/Space
 * toggles. The list is named via `label` (1.3.1).
 */
function FaqList({ items, bold, limit, isCard, label = 'Frequently asked questions', className, ref }: FaqListProps) {
  const [openQuestions, setOpenQuestions] = useState<string[]>([])
  const baseId = useId()

  if (!items?.length) return null

  const displayed = limit ? items.slice(0, limit) : items

  const toggle = (question: string) =>
    setOpenQuestions((prev) =>
      prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question],
    )

  return (
    <ul
      ref={ref}
      role="list"
      aria-label={label}
      className={cn('flex w-full list-none flex-col', isCard ? 'gap-2' : 'gap-4', className)}
    >
      {displayed.map((item, index) => {
        if (!item?.question) return null
        const key = item.question.replace(/==/g, '')
        const isOpen = openQuestions.includes(key)
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <li
            key={buttonId}
            className={cn(
              'grid gap-2',
              isCard && 'rounded-lg border border-border-grey bg-action-secondary px-4 pt-4 pb-2',
            )}
          >
            <ClickableListItem
              id={buttonId}
              onClick={() => toggle(key)}
              icon={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}
              label={highlight(item.question)}
              weight={bold ? 'bold' : 'normal'}
              aria-expanded={isOpen}
              aria-controls={panelId}
            />
            <ExpandableWrapper open={isOpen}>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn('p-2', isCard ? 'bg-transparent px-0' : 'bg-border-grey')}
              >
                {item.answer ?? '-'}
              </div>
            </ExpandableWrapper>
          </li>
        )
      })}
    </ul>
  )
}

export { FaqList }
