import { useId, useState } from 'react'
import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { type IconName } from '../../atoms/Icon'
import { Button } from '../../molecules/Button'

export interface ProductDescriptionItem {
  /** Stable id — keys the button/panel pair and their `aria-controls`/`aria-labelledby` wiring. */
  id: string
  /** Visible button label (also its accessible name). */
  label: string
  /** Decorative icon after the label (rendered `aria-hidden`; the label carries the meaning). */
  icon?: IconName
  /**
   * Action handler. When set, the button is a plain action (e.g. download, play) that fires this and
   * closes any open panel — it does NOT toggle a disclosure, even if `content` is also provided.
   */
  onClick?: () => void
  /**
   * Panel content revealed when this button is expanded. A button is a disclosure only when it has
   * `content` and no `onClick`. Pass a `<dl>` of specs, a media embed, rich text, etc.
   */
  content?: ReactNode
}

export interface ProductDescriptionProps {
  /** The description tabs — a row of buttons; content buttons expand an accordion panel below. */
  items: ProductDescriptionItem[]
  /** Disable every button (e.g. while the product loads). @default false */
  loading?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Product-description accordion (organism) composing {@link Button}. A centred row of rounded
 * secondary buttons; a button carrying `content` (and no `onClick`) is a **disclosure** that reveals a
 * panel below it, while a button with `onClick` is a plain action (download, play). Only one panel is
 * open at a time.
 *
 * Accessibility: each disclosure button exposes `aria-expanded` and `aria-controls` pointing at its
 * panel; the panel is a `role="region"` named by the button via `aria-labelledby` (1.3.1 / 4.1.2) and
 * is `hidden` while collapsed — always present in the DOM, so `aria-controls` never dangles. The open
 * button also switches to the filled primary surface, so its state is not conveyed by colour alone
 * (1.4.1) and is backed by `aria-expanded`. Buttons are keyboard-operable with a visible focus ring
 * (2.1.1 / 2.4.7). The legacy Framer slide is dropped as non-essential motion (2.3.3†). All copy
 * (labels, icons, panel content) is consumer-supplied, so the component bakes in no strings.
 */
function ProductDescription({ items, loading = false, className, ref }: ProductDescriptionProps) {
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(null)

  const tabId = (id: string) => `${baseId}-tab-${id}`
  const panelId = (id: string) => `${baseId}-panel-${id}`

  const handleClick = (item: ProductDescriptionItem) => {
    if (item.onClick) {
      setOpenId(null)
      item.onClick()
      return
    }
    if (item.content) {
      setOpenId((prev) => (prev === item.id ? null : item.id))
    }
  }

  const contentItems = items.filter((item) => item.content && !item.onClick)

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      <div className="relative z-10 flex flex-col justify-center gap-3 p-4 md:flex-row md:p-8">
        {items.map((item) => {
          const isDisclosure = Boolean(item.content) && !item.onClick
          const isOpen = openId === item.id
          return (
            <Button
              key={item.id}
              id={tabId(item.id)}
              type="button"
              surface={isOpen ? 'primary' : 'secondary'}
              size="large"
              rounded
              iconRight={item.icon}
              disabled={loading}
              aria-expanded={isDisclosure ? isOpen : undefined}
              aria-controls={isDisclosure ? panelId(item.id) : undefined}
              onClick={() => handleClick(item)}
              className="w-full md:w-auto"
            >
              {item.label}
            </Button>
          )
        })}
      </div>

      {contentItems.map((item) => (
        <div
          key={item.id}
          id={panelId(item.id)}
          role="region"
          aria-labelledby={tabId(item.id)}
          hidden={openId !== item.id}
          className="p-4 md:p-8"
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}

export { ProductDescription }
