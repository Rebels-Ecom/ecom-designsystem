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

/* Bundle the design system's styles (Tailwind theme + @font-face brand fonts) into the
 * library's CSS output (`dist/ecom-designsystem.css`). package.json `sideEffects` whitelists
 * CSS, so this side-effect-only import survives tree-shaking while JS modules stay
 * tree-shakeable for consumers. */
import './styles/index.css'

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

export { Checkbox } from './components/atoms/Checkbox'
export type { CheckboxProps } from './components/atoms/Checkbox'

export { DebounceInput } from './components/atoms/DebounceInput'
export type { DebounceInputProps } from './components/atoms/DebounceInput'

export { InputFile } from './components/atoms/InputFile'
export type { InputFileProps } from './components/atoms/InputFile'

export { Loader } from './components/atoms/Loader'
export type { LoaderProps, LoaderSize, LoaderColor, LoaderPosition } from './components/atoms/Loader'

export { RadioButton } from './components/atoms/RadioButton'
export type { RadioButtonProps } from './components/atoms/RadioButton'

export { LoadingBar } from './components/atoms/LoadingBar'
export type { LoadingBarProps, LoadingBarValue, LoadingBarColor } from './components/atoms/LoadingBar'

export { MenuButton } from './components/atoms/MenuButton'
export type { MenuButtonProps } from './components/atoms/MenuButton'

export { InlineHelper } from './components/atoms/InlineHelper'
export type { InlineHelperProps } from './components/atoms/InlineHelper'

export { Picture } from './components/atoms/Picture'
export type {
  PictureProps,
  PictureSource,
  PictureLoading,
  PictureDecoding,
  PictureFetchPriority,
  PictureOpacity,
} from './components/atoms/Picture'

export { Placeholder } from './components/atoms/Placeholder'
export type { PlaceholderProps, PlaceholderType } from './components/atoms/Placeholder'

export { SingleSelect } from './components/atoms/SingleSelect'
export type { SingleSelectProps, SingleSelectOption } from './components/atoms/SingleSelect'

export { Tag } from './components/atoms/Tag'
export type { TagProps, TagShape, TagSize, TagColor } from './components/atoms/Tag'

export { Text } from './components/atoms/Text'
export type {
  TextProps,
  TextAlignment,
  TextWeight,
  TextSize,
  TextComponentType,
  TextPadding,
  TextColor,
} from './components/atoms/Text'

export { Textarea } from './components/atoms/Textarea'
export type { TextareaProps } from './components/atoms/Textarea'

export { Video } from './components/atoms/Video'
export type { VideoProps, VideoOpacity, VideoTrack } from './components/atoms/Video'
