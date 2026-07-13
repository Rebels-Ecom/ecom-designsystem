import type { KeyboardEvent, ReactNode, Ref } from 'react'
import { useRef, useState } from 'react'
import { cn } from '../../../lib/cn'
import { Button } from '../Button'

export interface TabItem {
  /** Stable, unique identifier — drives the tab/panel `id` wiring and the selected state. */
  id: string
  /** Visible tab label (also the tab's accessible name). */
  tabTitle: ReactNode
  /** Panel content revealed when this tab is selected. */
  content: ReactNode
}

export interface TabsLabels {
  /** Accessible name for the tab list (`aria-label`). @default 'Tabs' */
  tablist: string
}

export interface TabsProps {
  /** The tabs to render, in visual order. The first is selected unless `defaultTabId` is set. */
  tabs: TabItem[]
  /** Id of the tab selected on mount. @default the first tab's id */
  defaultTabId?: string
  /** Called with the tab id whenever the selection changes (click or keyboard). */
  onTabChange?: (id: string) => void
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<TabsLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying wrapper `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const defaultTabsLabels: TabsLabels = {
  tablist: 'Tabs',
}

/**
 * Tabbed disclosure (molecule) implementing the WCAG/APG **tabs** pattern. Renders a
 * `role="tablist"` of `role="tab"` buttons (each composing the {@link Button} atom) over
 * `role="tabpanel"` regions: the selected tab exposes `aria-selected` + `aria-controls`, and each
 * panel is `aria-labelledby` its tab (1.3.1 / 4.1.2). Keyboard model (2.1.1): the tab list is a
 * single tab stop (roving `tabindex`), and `ArrowLeft`/`ArrowRight` (wrapping) plus `Home`/`End`
 * move focus **and** selection between tabs; `Tab` from a selected tab lands on its panel. Inactive
 * panels are `hidden`, so only the active content is in the accessibility tree while every
 * `aria-controls` target still resolves.
 *
 * Unlike the legacy component this does **not** gate its own visibility (`isOpen` was dropped —
 * conditional mounting is the consumer's concern) and the active tab stays focusable rather than
 * being `disabled`, which the tabs pattern requires. Consumers supply each tab's `tabTitle`
 * (its accessible name) and `content`.
 */
function Tabs({ tabs, defaultTabId, onTabChange, labels, className, ref }: TabsProps) {
  const t = { ...defaultTabsLabels, ...labels }
  const [currentTab, setCurrentTab] = useState(defaultTabId ?? tabs[0]?.id ?? '')
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  if (tabs.length === 0) return null

  const selectTab = (id: string) => {
    setCurrentTab(id)
    onTabChange?.(id)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = tabs.length - 1
    let nextIndex: number
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = index === lastIndex ? 0 : index + 1
        break
      case 'ArrowLeft':
        nextIndex = index === 0 ? lastIndex : index - 1
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = lastIndex
        break
      default:
        return
    }
    event.preventDefault()
    const nextTab = tabs[nextIndex]
    selectTab(nextTab.id)
    tabRefs.current[nextTab.id]?.focus()
  }

  return (
    <div ref={ref} className={cn('flex flex-col', className)}>
      <div className="py-4">
        <div role="tablist" aria-label={t.tablist} className="flex gap-3.5">
          {tabs.map((tab, index) => {
            const selected = currentTab === tab.id
            return (
              <Button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el
                }}
                id={`${tab.id}-tab`}
                role="tab"
                aria-selected={selected}
                aria-controls={`${tab.id}-panel`}
                tabIndex={selected ? 0 : -1}
                surface={selected ? 'primary' : 'secondary'}
                size="large"
                onClick={() => selectTab(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="w-1/2 min-w-0 lg:w-1/4"
              >
                {tab.tabTitle}
              </Button>
            )
          })}
        </div>
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${tab.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${tab.id}-tab`}
          tabIndex={0}
          hidden={currentTab !== tab.id}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}

export { Tabs }
