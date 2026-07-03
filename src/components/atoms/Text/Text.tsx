import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type TextAlignment = 'left' | 'center' | 'right'
export type TextWeight = 'normal' | 'bold'
export type TextSize = 'regular' | 'small'
export type TextComponentType = 'a' | 'span'
export type TextPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TextColor = 'error' | 'warning' | 'information' | 'default'

export interface TextProps {
  /** Text content. */
  children: ReactNode
  /** Render as an inline `<a>` (needs `href`) or a `<span>`. @default 'span' */
  componentType?: TextComponentType
  /** Link target when `componentType` is `'a'`. */
  href?: string
  /** Horizontal alignment of the (flex) text box. @default 'left' */
  align?: TextAlignment
  /** Underline the text. Links are always underlined regardless (non-colour cue, 1.4.1). */
  underline?: boolean
  /** Draw a hairline bottom border. @default false */
  borderBottom?: boolean
  /** Font weight. */
  weight?: TextWeight
  /** Body size step. @default 'regular' */
  size?: TextSize
  /** Break long unbroken strings onto the next line. @default false */
  overflowWrap?: boolean
  /** Uppercase the text via CSS `text-transform`. */
  upperCase?: boolean
  /**
   * Semantic colour. `warning` (orange) only meets WCAG 1.4.3 on large/bold text — avoid it for
   * essential body copy. Omitted → `text-default` (`text-blue` for links).
   */
  color?: TextColor
  /** Left padding step (responsive at `md`). */
  paddingLeft?: TextPadding
  /** Right padding step (responsive at `md`). */
  paddingRight?: TextPadding
  /** Top padding step (responsive at `md`). */
  paddingTop?: TextPadding
  /** Bottom padding step (responsive at `md`). */
  paddingBottom?: TextPadding
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<span>` or `<a>`. */
  ref?: Ref<HTMLSpanElement | HTMLAnchorElement>
}

const alignmentClasses: Record<TextAlignment, string> = {
  left: 'justify-start text-left',
  center: 'justify-center text-center',
  right: 'justify-end text-right',
}

const colorClasses: Record<TextColor, string> = {
  default: 'text-text-default',
  error: 'text-text-critical',
  warning: 'text-action-tertiary',
  information: 'text-text-blue',
}

const paddingLeftClasses: Record<TextPadding, string> = {
  xs: 'pl-2',
  sm: 'pl-2 md:pl-4',
  md: 'pl-4 md:pl-6',
  lg: 'pl-4 md:pl-8',
  xl: 'pl-6 md:pl-10',
}
const paddingRightClasses: Record<TextPadding, string> = {
  xs: 'pr-2',
  sm: 'pr-2 md:pr-4',
  md: 'pr-4 md:pr-6',
  lg: 'pr-4 md:pr-8',
  xl: 'pr-6 md:pr-10',
}
const paddingTopClasses: Record<TextPadding, string> = {
  xs: 'pt-2',
  sm: 'pt-2 md:pt-4',
  md: 'pt-4 md:pt-6',
  lg: 'pt-4 md:pt-8',
  xl: 'pt-6 md:pt-10',
}
const paddingBottomClasses: Record<TextPadding, string> = {
  xs: 'pb-2',
  sm: 'pb-2 md:pb-4',
  md: 'pb-4 md:pb-6',
  lg: 'pb-4 md:pb-8',
  xl: 'pb-6 md:pb-10',
}

/**
 * Inline text atom. Renders a `<span>` or, with `componentType="a"` + `href`, an inline `<a>`.
 * Accessibility: links always carry an underline (a non-colour affordance, 1.4.1) plus a visible
 * `focus-visible` ring (2.4.7), and default to `text-blue` — the legacy orange link colour (~2:1
 * on white, undecorated) failed both. Consumer supplies meaningful link text (2.4.4). The
 * `warning` colour is sub-AA for normal-weight text — see the `color` prop note.
 */
function Text({
  children,
  componentType = 'span',
  href,
  align = 'left',
  underline = false,
  borderBottom = false,
  weight,
  size = 'regular',
  overflowWrap = false,
  upperCase = false,
  color,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  className,
  ref,
}: TextProps) {
  const isLink = componentType === 'a' && href !== undefined && href !== ''

  const classes = cn(
    'flex',
    size === 'small' ? 'text-body-s' : 'text-body',
    alignmentClasses[align],
    color ? colorClasses[color] : isLink ? 'text-text-blue' : 'text-text-default',
    weight === 'bold' && 'font-bold',
    (underline || isLink) && 'underline',
    borderBottom && 'border-b border-tag-grey',
    upperCase && 'uppercase',
    overflowWrap && 'break-words',
    paddingLeft && paddingLeftClasses[paddingLeft],
    paddingRight && paddingRightClasses[paddingRight],
    paddingTop && paddingTopClasses[paddingTop],
    paddingBottom && paddingBottomClasses[paddingBottom],
    className,
  )

  if (isLink) {
    return (
      <a
        // Runtime element is an anchor in this branch; the union ref narrows safely.
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        className={cn(
          classes,
          'cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        )}
      >
        {children}
      </a>
    )
  }

  return (
    <span ref={ref as Ref<HTMLSpanElement>} className={classes}>
      {children}
    </span>
  )
}

export { Text }
