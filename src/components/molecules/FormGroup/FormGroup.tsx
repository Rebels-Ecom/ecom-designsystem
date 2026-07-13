import { cloneElement, type ReactElement, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { InlineHelper } from '../../atoms/InlineHelper'
import { InlineError } from '../InlineError'

export type FormGroupAlign = 'normal' | 'start' | 'center' | 'end'

/** The subset of props FormGroup injects onto its child control. */
interface FormControlProps {
  id?: string
  ariaDescribedBy?: string
  isErroneous?: boolean
}

export interface FormGroupProps {
  /** Field label text — becomes the control's accessible name via `<label htmlFor>`. */
  label?: string
  /** Id of the wrapped control; the `<label>` targets it and the helper/error ids derive from it. */
  formElementId: string
  /** The form control (e.g. `InputText`/`Textarea`); cloned to inject `aria-describedby`/`isErroneous`. */
  children: ReactElement<FormControlProps>
  /** Instructional hint shown under the label and linked to the field via `aria-describedby` (3.3.2). */
  helperText?: string
  /** Error message; renders a `role="alert"`, sets the field `aria-invalid`, and links via `aria-describedby` (3.3.1). */
  errorText?: string
  /** Suffix appended to the bold label (e.g. "(Required)"). */
  requiredText?: string
  /** Secondary content aligned to the label's right (e.g. a link); a sibling of the `<label>`, not inside it. */
  labelRightText?: ReactNode
  /** Render the label in normal weight (for toggle-style labels). @default false */
  isToggleBtnLabel?: boolean
  /**
   * Always reserve the error row's vertical space (a fixed min-height) even when there is no error, so
   * the layout doesn't shift when a validation message appears or clears — matches the legacy
   * fixed-height error slot. Useful in multi-field grids where a shift would misalign the row. @default false
   */
  reserveErrorSpace?: boolean
  /** Stretch to the full width of the container. @default false */
  fullWidth?: boolean
  /** Cross-axis alignment of the stacked rows. @default 'normal' */
  alignItems?: FormGroupAlign
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const alignClasses: Record<FormGroupAlign, string> = {
  normal: '',
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
}

/**
 * Labelled form-field wrapper (molecule). Associates a `<label htmlFor>` with the control passed as
 * `children` (its accessible name, 1.3.1/4.1.2), and — the a11y upgrade over legacy, which only
 * rendered the messages as loose siblings — links the helper and error text to the field via a
 * generated `aria-describedby` while forcing `aria-invalid` when `errorText` is set (3.3.1). The
 * helper is subdued static text; the error is a `role="alert"` live region announced on appearance.
 * `labelRightText` (often a link) renders beside the label, never inside it, to avoid a nested control.
 */
function FormGroup({
  label,
  formElementId,
  children,
  helperText,
  errorText,
  requiredText,
  labelRightText,
  isToggleBtnLabel = false,
  reserveErrorSpace = false,
  fullWidth,
  alignItems = 'normal',
  className,
  ref,
}: FormGroupProps) {
  const helperId = helperText ? `${formElementId}-helper` : undefined
  const errorId = errorText ? `${formElementId}-error` : undefined
  const describedBy =
    [children.props.ariaDescribedBy, helperId, errorId].filter(Boolean).join(' ') || undefined

  const control = cloneElement(children, {
    ariaDescribedBy: describedBy,
    isErroneous: children.props.isErroneous || Boolean(errorText),
  })

  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-1', fullWidth && 'w-full', alignClasses[alignItems], className)}
    >
      {(label || labelRightText) && (
        <div className="flex items-end gap-2">
          {label && (
            <label
              htmlFor={formElementId}
              className={cn('flex-1 text-body font-bold', isToggleBtnLabel && 'font-normal')}
            >
              {requiredText ? `${label} ${requiredText}` : label}
            </label>
          )}
          {labelRightText && (
            <span className="shrink-0 self-end text-right text-body font-normal">{labelRightText}</span>
          )}
        </div>
      )}
      {helperText && <InlineHelper id={helperId}>{helperText}</InlineHelper>}
      {control}
      {reserveErrorSpace ? (
        <div className="min-h-6">
          {errorText && <InlineError id={errorId}>{errorText}</InlineError>}
        </div>
      ) : (
        errorText && <InlineError id={errorId}>{errorText}</InlineError>
      )}
    </div>
  )
}

export { FormGroup }
