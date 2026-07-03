import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * `tailwind-merge` only knows the default Tailwind theme. Our `@theme` adds
 * custom `text-*` font-size tokens (the heading/body/cta/tag/icon scale). Left
 * unregistered, twMerge treats e.g. `text-h-m` as a text-*color* utility, so a
 * size token and a real color token (`text-text-default`) land in the same
 * conflict group and one is dropped. Registering them as font-sizes keeps both.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'h-xl',
            'h-l',
            'h-m',
            'h-s',
            'h-xs',
            'h-xl-lg',
            'h-l-lg',
            'h-m-lg',
            'body',
            'body-s',
            'cta-s',
            'cta-l',
            'tag-rect',
            'tag-rect-lg',
            'tag-sm',
            'icon-xl',
          ],
        },
      ],
    },
  },
})

/**
 * Merge class names with conflict resolution. Always use this when combining
 * internal component classes with an external `className` prop.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
