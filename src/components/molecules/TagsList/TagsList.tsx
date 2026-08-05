import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Tag, type TagProps } from '../../atoms/Tag'

export interface TagsListProps {
  /** The tags to render, each described by `TagProps`. An empty list renders nothing. */
  tags: TagProps[]
  /** Extra classes, merged onto the `<ul>` via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/**
 * A wrapping row of `Tag` chips (molecule). Renders a real `<ul>`/`<li>` so the collection is exposed
 * as a list to assistive tech (1.3.1) in source order (1.3.2); the `Tag`s themselves are
 * non-interactive presentational chips. The legacy `overflow-x: scroll` + `max-width: 80vw` +
 * `white-space: nowrap` combination was dead — `flex-wrap: wrap` makes the tags wrap before they can
 * overflow — so it's dropped in favour of a clean wrapping row.
 */
function TagsList({ tags, className, ref }: TagsListProps) {
  if (!tags?.length) return null

  return (
    // `role="list"` is restated because Safari + VoiceOver drop the implicit list role once
    // `list-style: none` is applied (1.3.1) — without it the tag collection isn't announced as a list.
    <ul ref={ref} role="list" className={cn('my-2 flex list-none flex-wrap gap-1 p-0', className)}>
      {tags.map((tag, index) => (
        <li key={index} className="flex">
          <Tag {...tag} />
        </li>
      ))}
    </ul>
  )
}

export { TagsList }
