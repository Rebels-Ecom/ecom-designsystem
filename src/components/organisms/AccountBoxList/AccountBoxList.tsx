import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Picture, type PictureProps } from '../../atoms/Picture'
import { AccountBox, type AccountBoxProps } from '../../molecules/AccountBox'

export interface AccountBoxListProps {
  /** Brand logo shown above the heading (see {@link Picture}); provide a meaningful `alt`. */
  logotype: PictureProps
  /** Section heading. */
  heading: string
  /** Heading level for the document outline (visual size is fixed by the design). @default 2 */
  headingLevel?: HeadingOrder
  /** Supporting line under the heading. */
  text: string
  /** Account cards to render (see {@link AccountBox}). */
  accountsList: AccountBoxProps[]
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Account chooser (organism): a brand logo, heading and supporting text above a responsive grid of
 * {@link AccountBox} cards. Composes the {@link Picture} atom and the {@link AccountBox} molecule.
 *
 * Accessibility (generated fresh, not ported): structure comes from the real heading (`headingLevel`,
 * default `h2`) and each card's own semantics; the logo carries its `alt` (1.1.1). The legacy logo
 * shipped with a dead height token, so it rendered at full intrinsic size and overlapped the heading
 * — V2 constrains it to a fixed height so the heading stays legible (1.4.10 reflow). Each card's
 * "choose account" button is a real, keyboard-operable control (4.1.2) via `AccountBox`.
 */
function AccountBoxList({
  logotype,
  heading,
  headingLevel = 2,
  text,
  accountsList,
  className,
  ref,
}: AccountBoxListProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full max-w-content-text rounded-lg bg-white p-5 md:p-12',
        className,
      )}
    >
      <Picture
        {...logotype}
        classNamePicture={cn('block h-8 md:h-10', logotype.classNamePicture)}
        classNameImg={cn('block h-full w-auto', logotype.classNameImg)}
      />
      <Heading order={headingLevel} className="mt-6">
        {heading}
      </Heading>
      <p className="mb-6">{text}</p>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {accountsList.map((account, index) => (
          <AccountBox key={index} {...account} />
        ))}
      </div>
    </div>
  )
}

export { AccountBoxList }
