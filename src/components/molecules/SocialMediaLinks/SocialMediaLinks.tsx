import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { SocialMediaLink, type SocialMediaLinkProps } from '../SocialMediaLink'

export interface SocialMediaLinksProps {
  /** The social links to render, in order. */
  links: SocialMediaLinkProps[]
  /** Accessible name for the list (so AT announces the group). @default 'Social media' */
  label?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/**
 * A row of social-media links (molecule) composing {@link SocialMediaLink}. Renders a semantic
 * `<ul>` list (`role="list"`, each link in its own `<li>` — the legacy markup put anchors directly
 * under the `<ul>`, which is invalid) named via `label` (1.3.1) so screen-reader users hear it as a
 * labelled set. Each item is a real icon-only `<a href>` whose accessible name and focus ring come
 * from `SocialMediaLink`. Renders nothing when `links` is empty.
 */
function SocialMediaLinks({ links, label = 'Social media', className, ref }: SocialMediaLinksProps) {
  if (!links?.length) return null

  return (
    <ul ref={ref} role="list" aria-label={label} className={cn('m-0 flex list-none p-0', className)}>
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          <SocialMediaLink {...link} />
        </li>
      ))}
    </ul>
  )
}

export { SocialMediaLinks }
