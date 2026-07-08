import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import type { TagColor } from '../../atoms/Tag'

export interface TagDescriptionEntry {
  /** Stable identity for the list key. */
  id: string
  /** Colour token of the swatch — must match the `Tag` colour it explains. */
  color: TagColor
  /** Human-readable meaning of the colour (this text carries the meaning, not the swatch). */
  text: string
}

export interface TagsDescriptionProps {
  /** Legend entries. When empty the component renders nothing. */
  tags: TagDescriptionEntry[]
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/** Swatch fill per colour — mirrors the `Tag` atom's background tokens. */
const swatchColor: Record<TagColor, string> = {
  green: 'bg-tag-green',
  mint: 'bg-tag-mint',
  blue: 'bg-tag-blue',
  orange: 'bg-tag-orange',
  grey: 'bg-tag-grey',
  yellow: 'bg-tag-yellow',
  purple: 'bg-tag-purple',
  black: 'bg-tag-black',
}

/**
 * Colour legend (molecule) — a key that maps `Tag` colours to their meaning. Renders a real
 * `<ul role="list">` of entries (1.3.1); each is a decorative colour swatch (`aria-hidden`, since
 * colour alone must never convey meaning, 1.4.1) beside the text that actually states what the
 * colour means. The consumer supplies that `text`, so keep it descriptive. Non-interactive: no
 * role/keyboard handling beyond the list semantics.
 */
function TagsDescription({ tags, className, ref }: TagsDescriptionProps) {
  if (tags.length === 0) return null

  return (
    <ul ref={ref} role="list" className={cn('m-0 mt-4 flex list-none flex-wrap gap-4 p-0', className)}>
      {tags.map(({ id, color, text }) => (
        <li key={id} className="flex items-center gap-1.5">
          <span aria-hidden="true" className={cn('size-4 shrink-0 rounded-full', swatchColor[color])} />
          <span className="text-body">{text}</span>
        </li>
      ))}
    </ul>
  )
}

export { TagsDescription }
