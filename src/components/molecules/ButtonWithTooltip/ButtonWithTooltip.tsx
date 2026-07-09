import { Button, type ButtonProps } from '../Button'
import {
  ComponentWithTooltip,
  type TooltipAlign,
  type TooltipSide,
} from '../../atoms/ComponentWithTooltip'

export interface ButtonWithTooltipProps extends ButtonProps {
  /** Tooltip text describing the button (wired to it via `aria-describedby`, 1.4.13). */
  content: string
  /** Extra classes for the wrapping `<span>`. */
  wrapperClassName?: string
  /** Preferred tooltip side (auto-flips near the viewport edge). @default 'top' */
  side?: TooltipSide
  /** Tooltip cross-axis alignment. @default 'center' */
  align?: TooltipAlign
}

/**
 * A {@link Button} with a hover/focus tooltip (molecule). Built on the `ComponentWithTooltip` atom, so
 * it inherits the WCAG 2.2 SC 1.4.13 contract (shows on hover **and** focus, dismissible with
 * `Escape`, stays open while the pointer travels onto it) and links the tip to the button via
 * `aria-describedby`. The button keeps its visible label as its accessible **name**; the tooltip is
 * its **description**. A `disabled` button renders without the tooltip wrapper (a disabled control
 * takes no pointer/focus events, so the tip could never show).
 */
function ButtonWithTooltip({ content, wrapperClassName, side, align, disabled, ...buttonProps }: ButtonWithTooltipProps) {
  if (disabled) {
    return <Button {...buttonProps} disabled />
  }

  return (
    <ComponentWithTooltip
      element={<Button {...buttonProps} />}
      content={content}
      side={side}
      align={align}
      wrapperClassName={wrapperClassName}
    />
  )
}

export { ButtonWithTooltip }
