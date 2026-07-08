import type { Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface UserSummary {
  /** Full name of the signed-in user (rendered visually in uppercase). */
  userName: string
  /** Company / account the user belongs to. */
  companyName: string
  /** Optional customer-number line — pass the whole string incl. any prefix, e.g. "Kundnr: 186922". */
  customerNumber?: string
  /** Optional role line — pass the whole string incl. any prefix, e.g. "Roller: Sales". */
  role?: string
}

export interface UserInfoSummaryProps {
  /** Small bold caption above the name, e.g. "Signed in as". Consumer-localised. */
  label?: string
  /** The user/account details to display. */
  infoSummary: UserSummary
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Signed-in user summary (molecule). Renders an optional caption `label`, the user's name as an
 * `<h5>`, then up to three detail lines (company, customer number, role) in DOM order (1.3.1/1.3.2).
 * The name is uppercased with the CSS `uppercase` utility rather than `String.toUpperCase()`, so the
 * DOM text keeps its original casing for screen readers while looking identical. Every string is
 * consumer-supplied, so localisation is the consumer's responsibility — nothing is hard-coded.
 */
function UserInfoSummary({ label, infoSummary, className, ref }: UserInfoSummaryProps) {
  const { userName, companyName, customerNumber, role } = infoSummary
  return (
    <div ref={ref} className={cn('pt-16 pb-8', className)}>
      {label && <p className="mb-2 text-body-s font-bold">{label}</p>}
      {userName && <h5 className="mb-2 text-body font-bold uppercase">{userName}</h5>}
      {companyName && <p className="mb-2 text-body">{companyName}</p>}
      {customerNumber && <p className="mb-2 text-body">{customerNumber}</p>}
      {role && <p className="mb-2 text-body">{role}</p>}
    </div>
  )
}

export { UserInfoSummary }
