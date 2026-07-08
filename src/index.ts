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

export { WaveDivider } from './components/atoms/WaveDivider'
export type { WaveDividerProps, WaveDividerSize } from './components/atoms/WaveDivider'

export {
  breakpoints,
  useMediaQuery,
  useBreakpoint,
  Above,
  Below,
  Between,
} from './components/atoms/Breakpoints'
export type {
  Breakpoint,
  Breakpoints,
  BreakpointFlags,
  AboveProps,
  BelowProps,
  BetweenProps,
} from './components/atoms/Breakpoints'

export { ContentWrapper } from './components/atoms/ContentWrapper'
export type { ContentWrapperProps } from './components/atoms/ContentWrapper'

export { FlexContainer } from './components/atoms/FlexContainer'
export type {
  FlexContainerProps,
  FlexDirection,
  FlexAlignItems,
  FlexJustifyContent,
} from './components/atoms/FlexContainer'

export { MaxWidth } from './components/atoms/MaxWidth'
export type { MaxWidthProps, ContentMaxWidth } from './components/atoms/MaxWidth'

export { BoxWrapper } from './components/atoms/BoxWrapper'
export type {
  BoxWrapperProps,
  BoxPosition,
  BoxAlign,
  BoxSpacing,
  BoxBackground,
} from './components/atoms/BoxWrapper'

export { FlexItem } from './components/atoms/FlexItem'
export type { FlexItemProps, FlexItemFlex } from './components/atoms/FlexItem'

export { GroupWrapper } from './components/atoms/GroupWrapper'
export type {
  GroupWrapperProps,
  GroupDirection,
  GroupPosition,
  GroupSpacing,
  GroupAlign,
} from './components/atoms/GroupWrapper'

/* ── Molecules ────────────────────────────────────────────────────────── */
export { Button } from './components/molecules/Button'
export type {
  ButtonProps,
  ButtonType,
  ButtonSurface,
  ButtonSize,
  ButtonWeight,
} from './components/molecules/Button'

export { UiLink } from './components/molecules/UiLink'
export type { UiLinkProps, UiLinkTarget, UiLinkSurface } from './components/molecules/UiLink'

export { InputText } from './components/molecules/InputText'
export type { InputTextProps, InputTextType } from './components/molecules/InputText'

export { IconWithTooltip } from './components/molecules/IconWithTooltip'
export type { IconWithTooltipProps } from './components/molecules/IconWithTooltip'

export { TagsList } from './components/molecules/TagsList'
export type { TagsListProps } from './components/molecules/TagsList'

export { Logotype } from './components/molecules/Logotype'
export type { LogotypeProps, LogotypeVariant } from './components/molecules/Logotype'

export { InlineError } from './components/molecules/InlineError'
export type { InlineErrorProps } from './components/molecules/InlineError'

export { LoadingBars } from './components/molecules/LoadingBars'
export type { LoadingBarsProps } from './components/molecules/LoadingBars'

export { ClickableListItem } from './components/molecules/ClickableListItem'
export type {
  ClickableListItemProps,
  ClickableListItemColor,
  ClickableListItemAlign,
  ClickableListItemSize,
  ClickableListItemWeight,
} from './components/molecules/ClickableListItem'

export { LoadingOverlay } from './components/molecules/LoadingOverlay'
export type {
  LoadingOverlayProps,
  OverlayBackground,
  OverlayPosition,
} from './components/molecules/LoadingOverlay'

export { ArticleCard } from './components/molecules/ArticleCard'
export type {
  ArticleCardProps,
  ArticleCardLink,
  ArticleCardType,
} from './components/molecules/ArticleCard'

export { OfferCard } from './components/molecules/OfferCard'
export type { OfferCardProps, OfferCardHeadingLevel } from './components/molecules/OfferCard'

export { CheckboxListItem } from './components/molecules/CheckboxListItem'
export type { CheckboxListItemProps } from './components/molecules/CheckboxListItem'

export { DeliveryInfoBar } from './components/molecules/DeliveryInfoBar'
export type { DeliveryInfoBarProps } from './components/molecules/DeliveryInfoBar'

export { DropdownList } from './components/molecules/DropdownList'
export type {
  DropdownListProps,
  DropdownListLink,
  DropdownListTarget,
} from './components/molecules/DropdownList'

export { InfoSummaryBox } from './components/molecules/InfoSummaryBox'
export type {
  InfoSummaryBoxProps,
  InfoSummaryBoxBackground,
} from './components/molecules/InfoSummaryBox'

export { IntroBlock } from './components/molecules/IntroBlock'
export type { IntroBlockProps } from './components/molecules/IntroBlock'

export { MessageBanner } from './components/molecules/MessageBanner'
export type { MessageBannerProps, MessageBannerType } from './components/molecules/MessageBanner'

export { OrderConfirmationDetails } from './components/molecules/OrderConfirmationDetails'
export type {
  OrderConfirmationDetailsProps,
  OrderConfirmationItem,
  OrderConfirmationPadding,
} from './components/molecules/OrderConfirmationDetails'

export { Pagination } from './components/molecules/Pagination'
export type { PaginationProps, PaginationLabels } from './components/molecules/Pagination'

export { PopUp } from './components/molecules/PopUp'
export type { PopUpProps, PopUpContentPosition } from './components/molecules/PopUp'

export { PurchaseList } from './components/molecules/PurchaseList'
export type { PurchaseListProps, PurchaseListItem } from './components/molecules/PurchaseList'

export { RichText } from './components/molecules/RichText'
export type { RichTextProps } from './components/molecules/RichText'

export { ScrollableList } from './components/molecules/ScrollableList'
export type { ScrollableListProps } from './components/molecules/ScrollableList'

export { SortableListItem } from './components/molecules/SortableListItem'
export type { SortableListItemProps } from './components/molecules/SortableListItem'

export { TagsDescription } from './components/molecules/TagsDescription'
export type { TagsDescriptionProps, TagDescriptionEntry } from './components/molecules/TagsDescription'

/* ── Organisms ────────────────────────────────────────────────────────── */
export { Carousel, CarouselItem } from './components/organisms/Carousel'
export type {
  CarouselProps,
  CarouselItemProps,
  CarouselDirection,
  CarouselBreakpoint,
  CarouselBreakpoints,
  CarouselLabels,
} from './components/organisms/Carousel'
