import { useId, useState, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Button } from '../Button'
import { Icon } from '../../atoms/Icon'
import { Placeholder } from '../../atoms/Placeholder'
import { ExpandableWrapper } from '../../atoms/ExpandableWrapper'

export interface CampaignBoxProps {
  /** Campaign title (shown uppercased, truncated to one line). */
  title: string
  /** Main body copy, revealed when expanded. */
  description?: string
  /** Secondary copy under a divider, revealed when expanded. */
  subDescription?: string
  /** Background colour (any CSS colour). White text is overlaid, so supply a colour with ≥4.5:1 against white. @default '#1D1D1B' */
  color?: string
  /** Fired when the select button is activated. */
  onClick?: () => void
  /** Show the loading skeleton instead of content. @default false */
  loading?: boolean
  /** Select-button label. @default 'Select' */
  btnLabel?: string
  /** Hide the select button and tighten the title padding (compact variant). @default false */
  limited?: boolean
  /** Hide the select button (without the `limited` layout change). @default false */
  hideSelectBtn?: boolean
  /** Accessible name for the expand/collapse toggle. @default 'Toggle campaign details' */
  toggleLabel?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Expandable campaign card (molecule). An always-visible header (title + optional select button +
 * expand toggle) sits above a collapsible detail panel. Follows the disclosure contract: the toggle
 * is a real `<button>` exposing `aria-expanded` and `aria-controls` pointing at the panel
 * ({@link ExpandableWrapper}), whose collapsed content is `inert`/`aria-hidden` (leaves the tab
 * order). The header lives *outside* the wrapper so the trigger stays operable while collapsed — the
 * legacy markup nested the trigger inside the collapsing region, which would trap it. White text is
 * drawn over the consumer's `color`; supply a colour that clears 4.5:1 against white (1.4.3).
 */
function CampaignBox({
  title,
  description,
  subDescription,
  color = '#1D1D1B',
  onClick,
  loading,
  btnLabel = 'Select',
  limited,
  hideSelectBtn,
  toggleLabel = 'Toggle campaign details',
  className,
  ref,
}: CampaignBoxProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  if (loading) {
    return (
      <div
        ref={ref}
        aria-busy="true"
        className={cn(
          'skeleton-shimmer animate-shimmer w-full rounded-lg p-5 motion-reduce:animate-none',
          className,
        )}
      >
        <Placeholder type="heading" />
      </div>
    )
  }

  const hasPanel = Boolean(description || subDescription)

  return (
    <div
      ref={ref}
      style={{ backgroundColor: color }}
      className={cn('relative w-full rounded-lg p-5 break-words text-text-white', className)}
    >
      {!limited && !hideSelectBtn && (
        <Button
          surface="x"
          size="x-small"
          onClick={onClick}
          className="absolute top-4 right-16 h-auto min-w-0 border border-text-white bg-transparent px-4 py-1 leading-5 text-text-white hover:bg-transparent md:border-text-white md:bg-transparent"
        >
          {btnLabel}
        </Button>
      )}
      {hasPanel && (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={toggleLabel}
          aria-expanded={open}
          aria-controls={panelId}
          className="absolute top-4 right-4 flex cursor-pointer items-center justify-center rounded border-none bg-transparent p-0 text-text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        >
          <Icon
            icon="icon-chevron-down"
            size="xlarge"
            className={cn('transition-transform motion-reduce:transition-none', open && 'rotate-180')}
          />
        </button>
      )}
      <h3
        className={cn(
          'm-0 overflow-hidden text-h-xs leading-5 font-bold text-ellipsis whitespace-nowrap uppercase',
          limited ? 'pr-8' : 'pr-28',
        )}
      >
        {title}
      </h3>
      {hasPanel && (
        <ExpandableWrapper open={open} id={panelId}>
          {description && <p className="mt-5 mb-0 text-body">{description}</p>}
          {subDescription && <hr className="my-3 h-px border-none bg-text-white" />}
          {subDescription && <p className="m-0 text-xs">{subDescription}</p>}
        </ExpandableWrapper>
      )}
    </div>
  )
}

export { CampaignBox }
