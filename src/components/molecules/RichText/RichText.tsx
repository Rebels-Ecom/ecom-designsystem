import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { MaxWidth } from '../../atoms/MaxWidth'

export interface RichTextProps {
  /**
   * Trusted HTML string (CMS/WYSIWYG output) rendered via `dangerouslySetInnerHTML`. The consumer
   * owns the markup's accessibility: valid heading order, meaningful `alt` on images, and
   * descriptive link text.
   */
  richTextContent: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * CMS long-form content (molecule). Renders trusted HTML inside a `MaxWidth` reading-measure
 * container (~52rem — the legacy component's bespoke 37.5rem/73rem/70% widths collapse to the
 * canonical comfortable measure) and applies design-system typography to the rendered elements via
 * descendant utilities: body copy on the type scale, headings via the `text-h-*` tokens, and — the
 * one intentional a11y upgrade over legacy — links styled `text-text-blue` + `underline` (a
 * non-colour cue, 1.4.1) instead of the legacy IcoMoon-bulleted, orange styling. Because the markup
 * is consumer-supplied, its structure (heading order, image `alt`, link purpose) is the consumer's
 * responsibility (1.3.1 / 1.1.1 / 2.4.4).
 */
function RichText({ richTextContent, className, ref }: RichTextProps) {
  return (
    <MaxWidth
      ref={ref}
      contentMaxWidth="text"
      className={cn(
        'font-primary text-text-default',
        '[&_p]:mb-4 [&_p]:text-body [&_p]:leading-relaxed',
        '[&_li]:mb-2 [&_li]:text-body [&_li]:leading-relaxed',
        '[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5',
        '[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5',
        '[&_h2]:mt-6 [&_h2]:mb-4 [&_h2]:text-h-l [&_h2]:font-bold',
        '[&_h3]:mt-5 [&_h3]:mb-3 [&_h3]:text-h-m [&_h3]:font-bold',
        '[&_h4]:mb-2 [&_h4]:text-h-s [&_h4]:font-bold',
        '[&_a]:text-text-blue [&_a]:underline',
        '[&_strong]:font-bold',
        '[&_img]:h-auto [&_img]:max-w-full',
        className,
      )}
    >
      <div dangerouslySetInnerHTML={{ __html: richTextContent }} />
    </MaxWidth>
  )
}

export { RichText }
