import { useId, useState, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { InputText } from '../../molecules/InputText'
import { FormGroup } from '../../molecules/FormGroup'

export interface DeliveryFormCustomerInfoItem {
  /** Unique id for the field (used for the label association). */
  id: string
  /** Read-only value shown in the field. */
  value: string
  /** Field label. */
  label: string
  /** Optional helper text under the label. */
  labelHelperText?: string
}

export interface DeliveryFormCustomerSummary {
  companyName: string
  contactPerson: string
  address: string
  zipcode: string
  city: string
}

export interface DeliveryFormProps {
  /** Label shown on the toggle when collapsed (e.g. "Expandera"). */
  expandButtonText: string
  /** Label shown on the toggle when expanded (e.g. "Stäng"). */
  collapseButtonText: string
  /** Read-only fields revealed when expanded. @default [] */
  customerInfo?: DeliveryFormCustomerInfoItem[]
  /** Label above the collapsed summary box. */
  customerInfoSummaryLabel: string
  /** Collapsed-state summary of the delivery details. */
  customerInfoSummary: DeliveryFormCustomerSummary
  /** Start expanded. @default false */
  defaultExpanded?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Delivery-details disclosure (organism): a toggle that swaps a compact read-only summary for the
 * full set of read-only delivery fields. Composes the {@link FormGroup} and {@link InputText}
 * molecules.
 *
 * Accessibility (generated fresh, not ported): the toggle is a real `<button>` exposing
 * `aria-expanded` + `aria-controls` for the fields region (4.1.2); the collapsed region is `hidden`
 * so it leaves the tab order and accessibility tree (2.4.3). The legacy summary used a `<label
 * htmlFor>` pointing at a non-labelable `<div>` (invalid) — V2 names the summary with a heading and
 * `aria-labelledby` on a `role="group"` instead. The legacy orange toggle text (fails 4.5:1) becomes
 * an accessible blue, underlined control (1.4.1 / 1.4.3). Fields are `readOnly` with a decorative
 * trailing check icon.
 */
function DeliveryForm({
  expandButtonText,
  collapseButtonText,
  customerInfo = [],
  customerInfoSummaryLabel,
  customerInfoSummary,
  defaultExpanded = false,
  className,
  ref,
}: DeliveryFormProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const fieldsId = useId()
  const summaryLabelId = useId()

  return (
    <div ref={ref} className={cn('w-full max-w-content-text', className)}>
      <div className="relative w-full">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={fieldsId}
          onClick={() => setIsExpanded((open) => !open)}
          className="absolute right-0 top-0 z-2 cursor-pointer bg-transparent font-primary text-body text-text-blue underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>

        <form id={fieldsId} hidden={!isExpanded} className="flex w-full flex-col gap-6 lg:gap-8">
          {customerInfo.map((item) => (
            <FormGroup
              key={item.id}
              label={item.label}
              helperText={item.labelHelperText}
              formElementId={item.id}
            >
              <InputText id={item.id} value={item.value} readOnly iconRight="icon-check" fullWidth />
            </FormGroup>
          ))}
        </form>

        <div hidden={isExpanded}>
          <p id={summaryLabelId} className="mb-2 flex font-bold">
            {customerInfoSummaryLabel}
          </p>
          <div
            role="group"
            aria-labelledby={summaryLabelId}
            className="rounded border border-border-grey bg-background px-4 py-2"
          >
            <p className="my-2 font-bold">{customerInfoSummary.companyName}</p>
            <p className="my-2">{customerInfoSummary.contactPerson}</p>
            <p className="my-2">
              {customerInfoSummary.address}, {customerInfoSummary.zipcode}, {customerInfoSummary.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DeliveryForm }
