import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface LoginPageProps {
  /** The centred card — a login form or account chooser. */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Login page shell (organism). A full-viewport centred layout on the brand-blue backdrop that holds
 * a single card (login form / account chooser). It is presentational: it centres and pads its child
 * and preserves DOM order (1.3.1/1.3.2), but sets no landmark — the consumer's app shell owns
 * `<main>`, and the heading/form semantics come from the card placed inside.
 */
function LoginPage({ children, className, ref }: LoginPageProps) {
  return (
    <div
      ref={ref}
      className={cn('flex min-h-screen w-full items-center justify-center bg-blue-500 p-4', className)}
    >
      {children}
    </div>
  )
}

export { LoginPage }
