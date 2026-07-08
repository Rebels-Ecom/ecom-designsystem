import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Checkbox } from '../../atoms/Checkbox'
import { Icon } from '../../atoms/Icon'
import { Placeholder } from '../../atoms/Placeholder'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'

export interface PurchaseListItem {
  /** Stable identity — used as the list key and the checkbox id. */
  id: string
  /** List name — the visible, navigable label and the checkbox's accessible name. */
  name: string
  /** Destination for the row's navigation links. */
  linkUrl: string
  /** Product-count label (e.g. "10 produkter"). */
  noOfProducts: string
  /** Optional "last updated" badge text. */
  updated?: string
  /** Shared lists are read-only here: no checkbox/chevron, just a share icon. */
  shared?: boolean
  /** While being removed, the row shows loading skeletons in place of its content. */
  removing?: boolean
}

export interface PurchaseListProps {
  /** Rows to render. */
  items: PurchaseListItem[]
  /** Currently-selected rows (controlled) — drives each checkbox's checked state. */
  selectedItems: PurchaseListItem[]
  /** Called with the toggled item when a checkbox changes. */
  onSelectChange: (item: PurchaseListItem) => void
  /**
   * Link renderer for the row's navigation. Defaults to a semantic `<a>` ({@link DefaultLink});
   * pass a router link (adapted to accept `href`) to integrate client-side navigation.
   */
  linkComponent?: LinkComponentType
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/**
 * Saved purchase (shopping) lists (molecule) — a real `<ul role="list">` (1.3.1) whose rows link to
 * a list and optionally let the user select it for deletion. Each row's name is the accessible name
 * of its navigation link (2.4.4); a duplicate chevron link to the same destination is pointer-only
 * (`aria-hidden` + `tabIndex={-1}`) so it isn't announced twice. The selection checkbox is named via
 * `aria-labelledby` pointing at the row name (the legacy row left it unlabelled). Rows mid-removal
 * swap their content for decorative `Placeholder` skeletons. The legacy orange "updated" badge used
 * white text (~2.3:1, fails AA); V2 keeps the orange fill but uses dark text (1.4.3). Shared rows are
 * read-only: share icon only, no checkbox/chevron.
 */
function PurchaseList({
  items,
  selectedItems,
  onSelectChange,
  linkComponent: Link = DefaultLink,
  className,
  ref,
}: PurchaseListProps) {
  return (
    <ul
      ref={ref}
      role="list"
      className={cn('m-0 w-full max-w-full list-none p-0 md:min-w-104', className)}
    >
      {items?.map((item) => {
        const checked = !!selectedItems?.find((selected) => selected.id === item.id)
        const deleting = checked && item.removing
        const nameId = `${item.id}-name`

        return (
          <li key={item.id} className="flex items-center gap-2 py-2">
            <div className="mr-auto flex flex-1 flex-col gap-1">
              <div className="flex items-center gap-2">
                {deleting ? (
                  <Placeholder type="heading" />
                ) : (
                  <Link
                    href={item.linkUrl}
                    className="text-text-default no-underline hover:text-interactive-hover"
                  >
                    <span id={nameId} className="text-h-xs font-bold leading-6">
                      {item.name}
                    </span>
                  </Link>
                )}
                {item.shared && <Icon icon="icon-share-2" />}
              </div>
              <div className="flex items-center gap-2">
                {deleting ? (
                  <Placeholder type="p_short" />
                ) : (
                  <p className="m-0 leading-6">{item.noOfProducts}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {deleting && item.updated ? (
                  <Placeholder type="p_short" />
                ) : item.updated ? (
                  <span className="rounded-xs bg-action-tertiary px-1.5 text-xs leading-6 text-text-default">
                    {item.updated}
                  </span>
                ) : null}
              </div>
            </div>
            {!deleting && !item.shared ? (
              <>
                <Checkbox
                  id={item.id}
                  name={item.name}
                  checked={checked}
                  onChange={() => onSelectChange(item)}
                  ariaLabelledBy={nameId}
                />
                <Link
                  href={item.linkUrl}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="text-text-default no-underline hover:text-interactive-hover"
                >
                  <Icon icon="icon-chevrons-right" />
                </Link>
              </>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}

export { PurchaseList }
