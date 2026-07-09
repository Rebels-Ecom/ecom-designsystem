import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button, type ButtonProps } from '../Button'

export interface AgeVerificationFormProps {
  /** Heading text (rendered as an `<h3>`). */
  title?: string
  /** Body copy under the title. */
  description: string
  /** Validation message; shown in a `role="alert"` live region so it is announced when it appears. */
  errorMessage?: string
  /** The choice buttons (each a full {@link Button} config). */
  actions: ButtonProps[]
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Age-verification prompt (molecule): a title, description, a row of choice {@link Button}s, and an
 * error slot. The error is a persistent `role="alert"` live region (empty until populated), so
 * assistive tech announces it the moment it appears (4.1.3) — and it's carried by `text-critical`
 * text, not colour alone (1.4.1). The buttons stack on mobile and sit in a row on `md`. Consumers
 * render this inside their own labelled dialog; the component adds no dialog role itself.
 */
function AgeVerificationForm({ title, description, errorMessage, actions, className, ref }: AgeVerificationFormProps) {
  return (
    <div ref={ref} className={cn('flex w-full flex-col items-center justify-center gap-2 px-4 md:px-0', className)}>
      {title && (
        <Heading order={3} noMargin align="center">
          {title}
        </Heading>
      )}
      <Text align="center" className="max-w-160">
        {description}
      </Text>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          {actions.map((action, index) => (
            <Button key={index} {...action} />
          ))}
        </div>
        <div role="alert" className="flex h-10 items-center">
          {errorMessage && (
            <Text color="error" align="center" className="max-w-160">
              {errorMessage}
            </Text>
          )}
        </div>
      </div>
    </div>
  )
}

export { AgeVerificationForm }
