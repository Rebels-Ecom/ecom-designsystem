import { useEffect, useId, useState } from 'react'
import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Button } from '../../molecules/Button'
import { DrawerSidebar, type DrawerSidebarProps } from '../../molecules/DrawerSidebar'
import { RangeInput } from '../RangeInput'
import { Checkbox } from '../../atoms/Checkbox'
import { RadioButton } from '../../atoms/RadioButton'
import { ExpandableWrapper } from '../../atoms/ExpandableWrapper'
import { Icon } from '../../atoms/Icon'

/** A single selectable option within a filter group. */
export interface FilterOptionItem {
  /** Display name / label of the option. */
  name: string
  /** Stable value used to identify the option in selections. */
  value: string
  /** Optional result count shown after the label. */
  count?: string | number
  /** Marks the option unavailable — disables its control. @default false */
  disabled?: boolean
}

interface BaseFilterGroup {
  /** Group heading (also its disclosure trigger label). */
  name: string
  /** Options belonging to the group. */
  options: FilterOptionItem[]
}

/** Multi-select group — each option is an independent checkbox. */
export interface CheckboxFilterGroup extends BaseFilterGroup {
  type: 'checkbox'
}

/** Single-select group — options are mutually exclusive radios. */
export interface RadioFilterGroup extends BaseFilterGroup {
  type: 'radio'
}

/** Numeric range group — options supply the selectable breakpoints for a {@link RangeInput}. */
export interface RangeFilterGroup extends BaseFilterGroup {
  type: 'range'
  /** Stable identifier for the range group (used as the selection group name). */
  id: string
  /** Suffix appended to the range end labels, e.g. "kr". @default 'kr' */
  formatLabel?: string
}

/** A filter group — discriminated on `type`. */
export type FilterGroup = CheckboxFilterGroup | RadioFilterGroup | RangeFilterGroup

/** The current selection for one group. */
export interface FilterSelection {
  /** Name of the group these options belong to. */
  name: string
  /** Currently-selected options. */
  selectedOptions: FilterOptionItem[]
}

/** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
export interface DynamicFilterLabels {
  /** Label of the button that opens the filter drawer. @default 'Filter' */
  filterButton: string
  /** Drawer accessible name + heading, used when no `title` is supplied. @default 'Filters' */
  drawerTitle: string
  /** Accessible name for the drawer close button. @default 'Close' */
  close: string
  /** Mobile toggle label showing how many filters are active. @default `Selected filters (n)` */
  selectedFilters: (count: number) => string
  /** Accessible name for a chip's remove action (must contain the visible filter name, 2.5.3). @default `Remove filter: name` */
  removeFilter: (name: string) => string
  /** Accessible name for the "remove all filters" button. @default 'Clear all filters' */
  clearAll: string
  /** Label for the "show more options" disclosure. @default 'Show more' */
  showMore: string
  /** Label for the "show fewer options" disclosure. @default 'Show less' */
  showLess: string
  /** Label for the drawer's "show results" button. @default `Show results (n)` */
  showResult: (count: number) => string
}

export const defaultDynamicFilterLabels: DynamicFilterLabels = {
  filterButton: 'Filter',
  drawerTitle: 'Filters',
  close: 'Close',
  selectedFilters: (count) => `Selected filters (${count})`,
  removeFilter: (name) => `Remove filter: ${name}`,
  clearAll: 'Clear all filters',
  showMore: 'Show more',
  showLess: 'Show less',
  showResult: (count) => `Show results (${count})`,
}

export interface DynamicFilterProps {
  /** The filter groups to render inside the drawer. */
  filters: FilterGroup[]
  /** Selections applied on mount (and re-applied if this prop's identity changes). */
  preSelected?: FilterSelection[]
  /** Optional drawer heading + accessible name; falls back to `labels.drawerTitle`. */
  title?: string
  /** Called after every selection change with the changed option (if any) and the full selection. */
  onUpdate?: (option: FilterOptionItem | undefined, selections: FilterSelection[]) => void
  /** Disables the trigger and every control while a request is in flight. @default false */
  loading?: boolean
  /** Hide the numeric entry fields on range groups. @default false */
  hideSliderFields?: boolean
  /** Hide the selected-filter chips shown outside the drawer. @default false */
  hideFilters?: boolean
  /** How many options to show before the "show more" disclosure. @default 6 */
  maxOptionsToShow?: number
  /** When set, a "show results (x)" button appears in the drawer footer (disabled at 0). */
  result?: number
  /** Forwarded to the underlying {@link DrawerSidebar} to tune the backdrop / scroll behaviour. */
  backdropOptions?: Pick<
    DrawerSidebarProps,
    'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'
  >
  /** Overridable UI strings (English defaults). */
  labels?: Partial<DynamicFilterLabels>
  /** Extra classes, merged onto the outer filter bar via `cn()`. */
  className?: string
  /** Forwarded to the outer filter-bar `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/** Sorted, de-duplicated numeric breakpoints derived from a range group's option names. */
function buildSteps(options: FilterOptionItem[]): number[] {
  const set = new Set<number>()
  for (const option of options) {
    const value = Number(option.name)
    if (!Number.isNaN(value)) set.add(value)
  }
  return Array.from(set).sort((a, b) => a - b)
}

/**
 * Faceted filter drawer (organism). A trigger {@link Button} opens a left {@link DrawerSidebar}
 * (which owns the dialog role, focus trap, `Escape`, focus-return and scroll-lock) containing a list
 * of filter groups. Each group is an APG accordion header — a heading whose `<button>` exposes
 * `aria-expanded` + `aria-controls` — revealing an {@link ExpandableWrapper} panel that is a named
 * `role="group"`/`radiogroup`; checkbox/radio options are native inputs paired with real
 * `<label htmlFor>`s (replacing the legacy nested `<button><Checkbox/></button>`, an axe
 * `nested-interactive` fail), and range groups delegate to {@link RangeInput}. Active selections show
 * as removable chips outside the drawer — inline on desktop, behind a disclosure toggle on mobile
 * (responsive `display` utilities, not JS media queries). All built-in copy is overridable via
 * `labels`; each chip's remove action names the filter it clears (2.5.3). Selection state is internal
 * and reported through `onUpdate`.
 */
function DynamicFilter({
  filters,
  preSelected,
  title,
  onUpdate,
  loading = false,
  hideSliderFields = false,
  hideFilters = false,
  maxOptionsToShow = 6,
  result,
  backdropOptions,
  labels,
  className,
  ref,
}: DynamicFilterProps) {
  const t = { ...defaultDynamicFilterLabels, ...labels }
  const baseId = useId()
  const chipsId = `${baseId}-chips`

  const [open, setOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<FilterSelection[]>(preSelected ?? [])
  const [openGroups, setOpenGroups] = useState<string[]>([])
  const [expandedGroups, setExpandedGroups] = useState<string[]>([])
  const [showSelectedMobile, setShowSelectedMobile] = useState(false)

  // Re-sync when the consumer supplies a new preSelected set (parity with legacy).
  useEffect(() => {
    setSelectedFilters(preSelected ?? [])
  }, [preSelected])

  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value]

  const toggleGroup = (name: string) => setOpenGroups((prev) => toggle(prev, name))
  const toggleShowMore = (name: string) => setExpandedGroups((prev) => toggle(prev, name))
  const handleClose = () => setOpen(false)

  const applySelection = (option: FilterOptionItem, groupName: string, singleSelect: boolean) => {
    setSelectedFilters((prev) => {
      const group = prev.find((entry) => entry.name === groupName)
      let next: FilterSelection[]

      if (!group) {
        next = [...prev, { name: groupName, selectedOptions: [option] }]
      } else {
        next = prev.map((entry) => {
          if (entry.name !== groupName) return entry
          if (singleSelect) return { ...entry, selectedOptions: [option] }
          const alreadySelected = entry.selectedOptions.some((o) => o.value === option.value)
          return {
            ...entry,
            selectedOptions: alreadySelected
              ? entry.selectedOptions.filter((o) => o.value !== option.value)
              : [...entry.selectedOptions, option],
          }
        })
      }

      const filtered = next.filter((entry) => entry.selectedOptions.length > 0)
      onUpdate?.(option, filtered)
      return filtered
    })
  }

  const handleRangeChange = (groupId: string, range: { min: number; max: number }) => {
    applySelection({ name: groupId, value: `${groupId}_${range.min}-${range.max}` }, groupId, true)
  }

  const findRangeGroup = (optionName: string): RangeFilterGroup | undefined =>
    filters.find(
      (group): group is RangeFilterGroup =>
        group.type === 'range' && group.options.some((option) => option.value === optionName),
    )

  const handleRemoveFilter = (option: FilterOptionItem, isRange: boolean) => {
    setSelectedFilters((prev) => {
      const updated = prev
        .map((group) => ({
          ...group,
          selectedOptions: group.selectedOptions.filter((o) => o.name !== option.name),
        }))
        .filter((group) => group.selectedOptions.length > 0)
      // A range chip's option carries the label in `value` and the id in `name`; swap them back
      // so consumers receive a consistent option shape (parity with legacy).
      onUpdate?.(isRange ? { name: option.value, value: option.name } : option, updated)
      return updated
    })
  }

  const handleClearAll = () => {
    setSelectedFilters([])
    onUpdate?.(undefined, [])
  }

  const selectedCount = selectedFilters.reduce((sum, group) => sum + group.selectedOptions.length, 0)
  const showChips = !hideFilters && selectedCount > 0

  const renderOption = (option: FilterOptionItem, group: FilterGroup, groupIndex: number, optionIndex: number) => {
    const optionId = `${baseId}-opt-${groupIndex}-${optionIndex}`
    const isRadio = group.type === 'radio'
    const activeGroup = selectedFilters.find((entry) => entry.name === group.name)
    const isActive = Boolean(activeGroup?.selectedOptions.some((o) => o.value === option.value))
    const isDisabled = loading || option.disabled
    const controlProps = {
      id: optionId,
      value: option.value,
      checked: isActive,
      disabled: isDisabled,
      onChange: () => applySelection(option, group.name, isRadio),
    }

    return (
      <div key={optionId} className="flex items-center gap-2 py-2">
        {isRadio ? (
          <RadioButton name={`${baseId}-radio-${groupIndex}`} {...controlProps} />
        ) : (
          <Checkbox name={option.value} {...controlProps} />
        )}
        <label htmlFor={optionId} className={cn('flex-1 cursor-pointer text-left text-body-s', isDisabled && 'text-text-subdued')}>
          {option.name}
        </label>
        {option.count != null && (
          <span className="ml-auto font-bold text-text-subdued">{option.count}</span>
        )}
      </div>
    )
  }

  const renderGroup = (group: FilterGroup, groupIndex: number) => {
    const isOpen = openGroups.includes(group.name)
    const buttonId = `${baseId}-cat-btn-${groupIndex}`
    const panelId = `${baseId}-cat-panel-${groupIndex}`

    let panel
    if (group.type === 'range') {
      const steps = buildSteps(group.options)
      if (steps.length === 0) {
        panel = null
      } else {
        const preRange = preSelected?.find((entry) => entry.name === group.id)
        const bounds = preRange?.selectedOptions[0]?.value?.split('-')
        const defaultMinVal = bounds?.[0] ? Number(bounds[0]) : undefined
        const defaultMaxVal = bounds?.[1] ? Number(bounds[1]) : undefined
        panel = (
          <RangeInput
            steps={steps}
            defaultMinVal={defaultMinVal}
            defaultMaxVal={defaultMaxVal}
            withFields={!hideSliderFields}
            formatLabel={group.formatLabel || 'kr'}
            disabled={loading}
            onChange={(range) => handleRangeChange(group.id, range)}
          />
        )
      }
    } else {
      const primary = group.options.slice(0, maxOptionsToShow)
      const overflow = group.options.slice(maxOptionsToShow)
      const isExpanded = expandedGroups.includes(group.name)
      const moreId = `${baseId}-more-${groupIndex}`
      panel = (
        <>
          {primary.map((option, optionIndex) => renderOption(option, group, groupIndex, optionIndex))}
          {overflow.length > 0 && (
            <>
              <ExpandableWrapper open={isExpanded} id={moreId}>
                <div>
                  {overflow.map((option, optionIndex) =>
                    renderOption(option, group, groupIndex, maxOptionsToShow + optionIndex),
                  )}
                </div>
              </ExpandableWrapper>
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={moreId}
                onClick={() => toggleShowMore(group.name)}
                className="mt-2 flex items-center gap-1 font-primary text-body text-action-primary hover:text-action-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
              >
                <span className="underline">{isExpanded ? t.showLess : t.showMore}</span>
                <Icon icon={isExpanded ? 'icon-x-circle' : 'icon-plus-circle'} />
              </button>
            </>
          )}
        </>
      )
    }

    return (
      <div key={`${group.name}-${groupIndex}`} className="border-b border-border-grey">
        <h3 className="m-0">
          <button
            id={buttonId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => toggleGroup(group.name)}
            className="flex w-full items-center justify-between gap-2 py-3.5 font-primary text-text-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
          >
            <span className="text-body-s font-bold">{group.name}</span>
            <Icon icon={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'} size="medium" />
          </button>
        </h3>
        <ExpandableWrapper open={isOpen}>
          <div
            id={panelId}
            role={group.type === 'radio' ? 'radiogroup' : 'group'}
            aria-labelledby={buttonId}
            className="pb-6"
          >
            {panel}
          </div>
        </ExpandableWrapper>
      </div>
    )
  }

  const chips = (
    <>
      {selectedFilters.map((group) =>
        group.selectedOptions.map((option, optionIndex) => {
          const rangeGroup = findRangeGroup(option.name)
          const chipName = rangeGroup ? rangeGroup.name : option.name
          return (
            <button
              key={`${group.name}-${option.value}-${optionIndex}`}
              type="button"
              onClick={() => handleRemoveFilter(option, Boolean(rangeGroup))}
              aria-label={t.removeFilter(chipName)}
              className={cn(
                'flex items-center justify-center gap-1 rounded-full bg-border-grey py-1 pr-2 pl-3 font-secondary text-body-s text-text-default',
                'hover:bg-border-on-secondary-disabled focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
                option.disabled && 'bg-grey-400 text-text-subdued',
              )}
            >
              <span>{chipName}</span>
              <Icon icon="icon-x" />
            </button>
          )
        }),
      )}
      <button
        type="button"
        onClick={handleClearAll}
        aria-label={t.clearAll}
        className="flex items-center justify-center rounded-full p-1 text-text-default hover:text-text-critical focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
      >
        <Icon icon="icon-trash-2" />
      </button>
    </>
  )

  return (
    <>
      <div
        ref={ref}
        className={cn('flex w-full flex-col gap-2 md:w-auto md:flex-row md:flex-wrap md:items-start', className)}
      >
        <Button
          type="button"
          surface="x"
          size="xx-small"
          iconRight="icon-plus"
          onClick={() => setOpen(true)}
          disabled={loading}
          className="h-12 w-full justify-center md:h-9 md:w-auto"
        >
          {t.filterButton}
        </Button>

        {showChips && (
          <>
            <Button
              type="button"
              surface="x"
              size="xx-small"
              iconRight={showSelectedMobile ? 'icon-chevron-up' : 'icon-chevron-down'}
              onClick={() => setShowSelectedMobile((value) => !value)}
              aria-expanded={showSelectedMobile}
              aria-controls={chipsId}
              className="h-12 w-full justify-center md:hidden"
            >
              {t.selectedFilters(selectedCount)}
            </Button>
            <div
              id={chipsId}
              className={cn(
                'flex-col gap-2 md:flex md:flex-row md:flex-wrap md:items-center',
                showSelectedMobile ? 'flex' : 'hidden md:flex',
              )}
            >
              {chips}
            </div>
          </>
        )}
      </div>

      <DrawerSidebar
        isOpen={open}
        onClose={handleClose}
        from="left"
        width="md"
        ariaLabel={title ?? t.drawerTitle}
        labels={{ close: t.close }}
        {...backdropOptions}
      >
        <div className="flex flex-col font-primary">
          <h2 className="mb-2 text-h-s font-bold text-text-default">{title ?? t.drawerTitle}</h2>
          {filters.map((group, groupIndex) => renderGroup(group, groupIndex))}
        </div>
        {(selectedCount > 0 || result != null) && (
          <div className="sticky bottom-0 mt-auto flex flex-col gap-2 border-t border-border-grey bg-surface-default pt-4">
            {selectedCount > 0 && (
              <Button
                type="button"
                surface="link"
                size="xx-small"
                iconLeft="icon-trash-2"
                onClick={handleClearAll}
                className="self-start"
              >
                {t.clearAll}
              </Button>
            )}
            {result != null && (
              <Button
                type="button"
                surface="primary"
                size="large"
                fullWidth
                disabled={result === 0}
                onClick={handleClose}
              >
                {t.showResult(result)}
              </Button>
            )}
          </div>
        )}
      </DrawerSidebar>
    </>
  )
}

export { DynamicFilter }
