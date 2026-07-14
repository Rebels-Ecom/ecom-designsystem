import { Children, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { Loader } from '../../atoms/Loader'

export type SortableListSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface SortableListActiveSorting {
  /** Name of the option that is currently applied. */
  name: string
  /** Direction of the applied sort. */
  direction: 'asc' | 'desc'
}

export interface SortableListSortingOption {
  /** Visible label and identity of the sort column. */
  name: string
  /** Called to sort ascending (fired when the active option is toggled while ascending). */
  onClickUp: () => void
  /** Called to sort descending (fired on first selection and when toggled while descending). */
  onClickDown: () => void
  /** Omit this option from the header. @default false */
  hidden?: boolean
}

export interface SortableListLabels {
  /** Accessible name for the row of sort controls. @default 'Sorting options' */
  sortOptions: string
}

export const defaultSortableListLabels: SortableListLabels = {
  sortOptions: 'Sorting options',
}

const spacingClasses: Record<SortableListSpacing, string> = {
  xs: 'py-1',
  sm: 'py-2',
  md: 'py-4',
  lg: 'py-6',
  xl: 'py-8',
}

interface SortingOptionButtonProps {
  option: SortableListSortingOption
  activeSorting?: SortableListActiveSorting
}

function SortingOptionButton({ option, activeSorting }: SortingOptionButtonProps) {
  const isActive = activeSorting?.name === option.name

  const handleSorting = () => {
    if (isActive) {
      if (activeSorting?.direction === 'asc') option.onClickUp()
      else option.onClickDown()
    } else {
      option.onClickDown()
    }
  }

  // Active-ascending points down (next toggle sorts up); active-descending points up; idle points down.
  const chevron = isActive && activeSorting?.direction === 'desc' ? 'icon-chevron-up' : 'icon-chevron-down'

  return (
    <button
      type="button"
      onClick={handleSorting}
      aria-pressed={isActive}
      className={cn(
        'inline-flex cursor-pointer items-center gap-1 justify-self-start font-primary text-text-default',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        isActive && 'font-bold underline',
      )}
    >
      {option.name}
      <Icon icon={chevron} />
    </button>
  )
}

export interface SortableListProps {
  /** The list rows — typically {@link SortableListItem}s. Each becomes an `<li>`. */
  children: ReactNode
  /** Sort controls rendered above the list, column-aligned with the row grid. */
  sortingOptions: SortableListSortingOption[]
  /** Optional heading bar above the sort controls. */
  listHeading?: string
  /** Replace the list with a spinner while true. @default false */
  loading?: boolean
  /** Draw a hairline divider between rows. @default false */
  withSeparatingLines?: boolean
  /** Vertical padding applied to each row. @default 'md' */
  spacing?: SortableListSpacing
  /** The currently-applied sort (drives the active option's emphasis + chevron). */
  activeSorting?: SortableListActiveSorting
  /** Overridable UI strings (English defaults) for localisation. */
  labels?: Partial<SortableListLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Sortable list (molecule) — a column of rows with a header of sort controls that stay aligned to the
 * row grid. Each sort control is a real `<button>` exposing its applied state via `aria-pressed` and a
 * non-colour cue (bold + underline + a direction chevron), never colour alone (1.4.1 / 4.1.2), each
 * keyboard-operable with a visible focus ring (2.4.7). The controls sit in a named list
 * (`labels.sortOptions`) and the rows in a `<ul>`/`<li>` structure so the grouping is programmatic
 * (1.3.1). While `loading` it shows the `role="status"` {@link Loader}. Renders nothing when empty.
 * Option names are consumer-supplied; the one built-in string is localisable via `labels`.
 */
function SortableList({
  children,
  sortingOptions,
  listHeading,
  loading = false,
  withSeparatingLines = false,
  spacing = 'md',
  activeSorting,
  labels,
  className,
  ref,
}: SortableListProps) {
  const t = { ...defaultSortableListLabels, ...labels }
  const items = Children.toArray(children)

  if (items.length === 0) return null

  return (
    <div ref={ref} className={cn('relative', className)}>
      {loading ? (
        <Loader visible size="sm" position="relative" color="orange" />
      ) : (
        <div>
          {listHeading && (
            <div className="bg-background-nav px-2 py-4 text-h-s font-bold text-text-default">
              {listHeading}
            </div>
          )}
          <ul aria-label={t.sortOptions} className="sortable-item-cols m-0 grid list-none items-center gap-4 p-0 lg:gap-2 lg:p-2">
            {sortingOptions
              .filter((option) => !option.hidden)
              .map((option) => (
                <li key={option.name}>
                  <SortingOptionButton option={option} activeSorting={activeSorting} />
                </li>
              ))}
          </ul>
          <ul className={cn('m-0 list-none p-0 pl-2', withSeparatingLines && 'divide-y divide-tag-grey')}>
            {items.map((item, index) => (
              <li key={index} className={cn('relative', spacingClasses[spacing])}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { SortableList }
