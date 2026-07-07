import { useId, type ChangeEvent, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Checkbox } from '../../atoms/Checkbox'

export interface CheckboxListItemProps {
  /** Rich item content that names the checkbox (typically a product heading + article number). */
  children: ReactNode
  /** Id of the underlying checkbox `<input>`. */
  id: string
  /** Form field name submitted with the value. */
  name: string
  /** Value submitted when checked. */
  value: string
  /** Controlled checked state — drive it with `onChange`. */
  checked: boolean
  /** Change handler receiving the native input event. */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  /** Disables the checkbox. */
  disabled?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the row's root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * A selectable list row (molecule): rich content on the left, a Checkbox atom on the right. The
 * `children` (e.g. a product heading plus its article number) name the checkbox via `aria-labelledby`,
 * so a screen-reader user hears the item when they reach the control — the legacy row left the checkbox
 * unlabelled. Keyboard toggling (Space) and the checked state come from the native input. Drive selection
 * with the controlled `checked`/`onChange` pair; `onChange` only reports (3.2.2). Renders nothing when
 * `children` is empty, matching the legacy guard.
 */
function CheckboxListItem({
  children,
  id,
  name,
  value,
  checked,
  onChange,
  disabled,
  className,
  ref,
}: CheckboxListItemProps) {
  const labelId = useId()
  if (!children) return null

  return (
    <div ref={ref} className={cn('flex w-full items-center justify-between gap-2', className)}>
      <div id={labelId} className="flex flex-1 flex-col gap-2">
        {children}
      </div>
      <Checkbox
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        ariaLabelledBy={labelId}
      />
    </div>
  )
}

export { CheckboxListItem }
