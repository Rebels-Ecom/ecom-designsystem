import { useState, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Heading } from '../../atoms/Heading'
import { Icon, type IconName } from '../../atoms/Icon'
import { Placeholder } from '../../atoms/Placeholder'
import { Button, type ButtonProps } from '../Button'
import { IconButton } from '../IconButton'

/** An action cell — rendered as an icon button (e.g. edit / delete). */
export interface TableAction {
  /** Glyph for the action. */
  icon: IconName
  /** Accessible name describing the action (e.g. "Edit Name 1"). Consumer-supplied. */
  label: string
  /** Action handler. */
  onClick?: () => void
  /** Disable the action. @default false */
  disabled?: boolean
}

/** A cell value: plain text, or an action rendered as an icon button. */
export type TableCell = string | TableAction
/** A row: keys are column titles; keys containing `icon` are action columns. */
export type TableRow = Record<string, TableCell>

interface TableSort {
  by: string
  dir: 'asc' | 'desc'
}

export interface TableLabels {
  /** Visually-hidden header for action (icon) columns. @default 'Actions' */
  actions: string
  /** Announced while the table is loading. @default 'Loading' */
  loading: string
  /** Accessible name for a column's sort button. @default (c) => `Sort by ${c}` */
  sortBy: (column: string) => string
}

const defaultTableLabels: TableLabels = {
  actions: 'Actions',
  loading: 'Loading',
  sortBy: (column) => `Sort by ${column}`,
}

const isAction = (value: TableCell): value is TableAction => typeof value === 'object'
const isIconColumn = (key: string) => key.includes('icon')

export interface TableProps {
  /** Row data. Each object's keys are the column titles; a key containing `icon` is an action column. */
  listItems: TableRow[]
  /** Hide the visible column titles (they stay in the DOM, visually hidden, for AT). @default false */
  hideColumnTitles?: boolean
  /** Give every column an equal width (`table-fixed`). @default false */
  equalWidthColumns?: boolean
  /** Vertical gap (in rem) between the title bar and the table. @default 0 */
  listGap?: number
  /** Column title to sort by initially. Defaults to the first text column. */
  initialSortBy?: string
  /** Show the loading skeleton instead of the data. @default false */
  loading?: boolean
  /** Optional heading shown above the table (also becomes the table's accessible name). */
  title?: string
  /** Optional primary action rendered in the title bar. */
  action?: ButtonProps
  /** Overridable UI strings (English defaults) for localisation. */
  labels?: Partial<TableLabels>
  /** Extra classes, merged onto the `<table>` via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<table>`. */
  ref?: Ref<HTMLTableElement>
}

const headerCellClasses =
  'h-12 min-w-16 whitespace-nowrap border-b border-border-on-x px-4 py-3 text-left align-middle font-bold text-text-default'
const bodyCellClasses =
  'h-12 min-w-16 whitespace-nowrap border-b border-border-grey px-4 py-3 align-middle text-body text-text-default'
const iconHeaderClasses = 'w-10 border-b border-border-on-x px-3'
const iconCellClasses = 'w-10 border-b border-border-grey px-3 py-3 text-center align-middle'

/**
 * Data table (molecule) — a real semantic `<table>` (the legacy version was a stack of `<div>`s). Column
 * titles are `<th scope="col">`, so every cell is programmatically associated with its header (1.3.1);
 * sortable columns expose `aria-sort` and toggle via a keyboard-operable sort `<button>` (4.1.2). Action
 * cells render an {@link IconButton} whose accessible name the consumer supplies. Columns pack from the
 * left at their natural width; the last text column absorbs the slack so any trailing action columns are
 * pushed to the right edge (legacy parity). On narrow viewports (`< md`) the table gives way to a stacked
 * "label: value" card per row (its own reading order carries the association) — matching the legacy mobile
 * design. While `loading` it shows a `role="status"` skeleton. Built-in strings default to English and are
 * localisable via `labels`.
 */
function Table({
  listItems,
  hideColumnTitles = false,
  equalWidthColumns = false,
  listGap = 0,
  initialSortBy,
  loading = false,
  title,
  action,
  labels,
  className,
  ref,
}: TableProps) {
  const t = { ...defaultTableLabels, ...labels }

  // Columns come from the row with the most keys (rows may omit trailing action columns).
  const template = listItems.reduce(
    (widest, row) => (Object.keys(row).length > Object.keys(widest).length ? row : widest),
    listItems[0] ?? {},
  )
  const columns = listItems.length ? Object.keys(template) : []
  const textColumns = columns.filter((column) => !isIconColumn(column))
  const firstSortable = textColumns[0]
  // The last text column absorbs horizontal slack (legacy `.lastTextColumn { flex: 1 }`), so text
  // columns pack left at natural width and any trailing action columns are pushed to the right.
  const lastTextColumn = textColumns[textColumns.length - 1]

  const [sort, setSort] = useState<TableSort | undefined>(
    firstSortable ? { by: initialSortBy ?? firstSortable, dir: 'asc' } : undefined,
  )

  const toggleSort = (column: string) => {
    setSort((current) =>
      current?.by === column
        ? { by: column, dir: current.dir === 'asc' ? 'desc' : 'asc' }
        : { by: column, dir: 'asc' },
    )
  }

  const rows = sort
    ? [...listItems].sort((a, b) => {
        const av = a[sort.by]
        const bv = b[sort.by]
        if (typeof av !== 'string' || typeof bv !== 'string' || av === bv) return 0
        const result = av > bv ? 1 : -1
        return sort.dir === 'asc' ? result : -result
      })
    : listItems

  const heading = title && (
    <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:justify-between">
      <Heading order={5} className="my-2 md:my-6">
        {title}
      </Heading>
      {action && <Button {...action} />}
    </div>
  )

  if (loading) {
    return (
      <div role="status" className="flex w-full flex-col" style={{ gap: `${listGap}rem` }}>
        <span className="sr-only">{t.loading}</span>
        {heading}
        <div className="flex flex-col">
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 border-b border-border-grey py-4">
              {Array.from({ length: 5 }).map((_, colIndex) => (
                <div key={colIndex} className="flex-1">
                  <Placeholder type={colIndex % 2 === 0 ? 'p_short' : 'p_long'} noMargin />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderAction = (action: TableAction) => (
    <IconButton
      type="button"
      icon={action.icon}
      label={action.label}
      onClick={action.onClick}
      disabled={action.disabled}
      size="medium"
      isTransparent
      noBorder
      noPadding
    />
  )

  return (
    <div className="flex w-full flex-col" style={{ gap: `${listGap}rem` }}>
      {heading}

      {/* Mobile (< md): a stacked "label: value" card per row, matching the legacy mobile design. */}
      <div className="md:hidden">
        {rows.map((row, rowIndex) => {
          const iconActions = columns
            .filter((column) => isIconColumn(column))
            .map((column) => row[column])
            .filter(isAction)
          return (
            <div key={rowIndex} className="border-b border-border-grey py-4">
              {textColumns.map((column) => {
                const value = row[column]
                return (
                  <div key={column} className="flex items-baseline py-2">
                    {!hideColumnTitles && (
                      <span className="pr-2 text-body font-bold text-text-default capitalize">
                        {column}:
                      </span>
                    )}
                    <span className="text-body text-text-default">
                      {typeof value === 'string' ? value : null}
                    </span>
                  </div>
                )
              })}
              {iconActions.length > 0 && (
                <div className="flex justify-center gap-6 py-8">
                  {iconActions.map((action, i) => (
                    <span key={i}>{renderAction(action)}</span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Desktop (md+): the semantic table. */}
      <table
        ref={ref}
        aria-label={title || undefined}
        className={cn(
          'hidden w-full border-collapse text-left md:table',
          equalWidthColumns && 'table-fixed',
          className,
        )}
      >
        <thead>
          <tr>
            {columns.map((column) => {
              if (isIconColumn(column)) {
                return (
                  <th key={column} scope="col" className={iconHeaderClasses}>
                    <span className="sr-only">{t.actions}</span>
                  </th>
                )
              }
              const active = sort?.by === column
              return (
                <th
                  key={column}
                  scope="col"
                  aria-sort={active ? (sort?.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                  className={cn(headerCellClasses, column === lastTextColumn && 'w-full')}
                >
                  {hideColumnTitles ? (
                    <span className="sr-only">{column}</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleSort(column)}
                      aria-label={t.sortBy(column)}
                      className="inline-flex cursor-pointer items-center gap-1 font-bold text-text-default capitalize focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
                    >
                      {column}
                      <Icon icon={active && sort?.dir === 'asc' ? 'icon-chevron-down' : 'icon-chevron-up'} />
                    </button>
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => {
                const value = row[column]
                if (isIconColumn(column)) {
                  return (
                    <td key={column} className={iconCellClasses}>
                      {isAction(value) && renderAction(value)}
                    </td>
                  )
                }
                return (
                  <td
                    key={column}
                    className={cn(bodyCellClasses, column === lastTextColumn && 'w-full')}
                  >
                    {typeof value === 'string' ? value : null}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { Table }
