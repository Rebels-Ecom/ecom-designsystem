/**
 * Public API — single, flat entry point for the design system.
 *
 * Components are re-exported here as they are migrated. Always export both the
 * component and its type definition, e.g.:
 *
 *   export { Button } from './components/atoms/Button'
 *   export type { ButtonProps } from './components/atoms/Button'
 *
 * Categorize each export by strict Atomic Design (atoms / molecules / organisms).
 */

/* ── Atoms ────────────────────────────────────────────────────────────── */
export { CampaignBanner } from './components/atoms/CampaignBanner'
export type { CampaignBannerProps, Campaign } from './components/atoms/CampaignBanner'

export { ComponentWithTooltip } from './components/atoms/ComponentWithTooltip'
export type {
  ComponentWithTooltipProps,
  TooltipSide,
  TooltipAlign,
  TooltipColor,
} from './components/atoms/ComponentWithTooltip'

export { ExpandableWrapper } from './components/atoms/ExpandableWrapper'
export type { ExpandableWrapperProps } from './components/atoms/ExpandableWrapper'

export { Heading } from './components/atoms/Heading'
export type { HeadingProps, HeadingOrder, HeadingAlignment, HeadingColor } from './components/atoms/Heading'

export { Icon } from './components/atoms/Icon'
export type { IconProps, IconName, IconSize, IconColor } from './components/atoms/Icon'
