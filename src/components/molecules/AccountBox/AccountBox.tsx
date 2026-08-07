import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Button, type ButtonProps } from '../Button'

export interface AccountBoxProps {
  /** Company / account name (shown bold at the top). */
  companyName: string
  /** Account number line (e.g. "Kundnr: 186922"). */
  accountNumber: string
  /** Optional contact person. */
  contactPerson?: string
  /** Optional bold, uppercased address heading (e.g. "DELIVERY ADDRESS"). */
  addressLabel?: string
  /** Optional address title line. */
  addressTitle?: string
  /** Street address. */
  address?: string
  /** Postal code. */
  zipcode?: string
  /** City. */
  city?: string
  /** Props for the "choose account" button (label, icon, size); surface/type/onClick are fixed here. */
  chooseAccountBtn: ButtonProps
  /** Fired when the button is activated. */
  onClickChooseAccount: () => void
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Account summary card (molecule): company/contact/address details above a primary "choose account"
 * {@link Button}. Presentational — a bordered card of `<p>` lines (the company name is bold emphasis,
 * not a document heading, so it doesn't perturb the page's `heading-order`); the only interactive part
 * is the button, whose label (from `chooseAccountBtn.children`) is its accessible name (4.1.2).
 */
function AccountBox({
  companyName,
  accountNumber,
  contactPerson,
  addressLabel,
  addressTitle,
  address,
  zipcode,
  city,
  chooseAccountBtn,
  onClickChooseAccount,
  className,
  ref,
}: AccountBoxProps) {
  const addressLine = [
    address && (zipcode || city ? `${address},` : address),
    zipcode && (city ? `${zipcode},` : zipcode),
    city,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full flex-1 flex-col items-start justify-between gap-4 rounded border border-border-grey bg-background p-5 text-body text-text-default lg:w-90',
        className,
      )}
    >
      {/* Tight logical groups (header / contact / address) with one even, compact rhythm between them —
          replaces the legacy loose 1em paragraph margins that left the lines too far apart. */}
      <div className="flex flex-col gap-2">
        <div>
          <p className="m-0 font-bold">{companyName}</p>
          <p className="m-0">{accountNumber}</p>
        </div>
        {contactPerson && <p className="m-0">{contactPerson}</p>}
        {(addressLabel || addressTitle || addressLine) && (
          <div>
            {addressLabel && <p className="m-0 font-bold uppercase">{addressLabel}</p>}
            {addressTitle && <p className="m-0">{addressTitle}</p>}
            {addressLine && <p className="m-0">{addressLine}</p>}
          </div>
        )}
      </div>
      <Button {...chooseAccountBtn} type="button" surface="primary" onClick={onClickChooseAccount} />
    </div>
  )
}

export { AccountBox }
