import type { ComponentType, Ref, SVGProps } from 'react'
import {
  Archive,
  ArrowRight,
  Award,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  CircleAlert,
  CircleArrowDown,
  CircleCheck,
  CircleMinus,
  CirclePlus,
  CircleX,
  Clipboard,
  Download,
  Eye,
  File,
  FilePlus,
  FileText,
  Heart,
  Info,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Package,
  Phone,
  Play,
  Plus,
  RefreshCw,
  Save,
  Search,
  Settings,
  Share,
  Share2,
  ShoppingCart,
  SquarePen,
  Trash,
  Trash2,
  TriangleAlert,
  Truck,
  User,
  Users,
  X,
} from 'lucide-react'
import { cn } from '../../../lib/cn'

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge'
export type IconColor = 'error' | 'success'

export type IconName =
  | 'icon-alert-circle'
  | 'icon-bell'
  | 'icon-arrow-right'
  | 'icon-mail'
  | 'icon-map-pin'
  | 'icon-menu'
  | 'icon-x'
  | 'icon-phone'
  | 'icon-refresh-cw'
  | 'icon-search'
  | 'icon-x-circle'
  | 'icon-plus-circle'
  | 'icon-plus'
  | 'icon-chevron-up'
  | 'icon-chevron-down'
  | 'icon-chevron-left'
  | 'icon-chevron-right'
  | 'icon-chevrons-left'
  | 'icon-chevrons-right'
  | 'icon-layers'
  | 'icon-check'
  | 'icon-check-circle'
  | 'icon-user'
  | 'icon-heart'
  | 'icon-shopping-cart'
  | 'icon-award'
  | 'icon-package'
  | 'icon-users'
  | 'icon-facebook'
  | 'icon-instagram'
  | 'icon-linkedin'
  | 'icon-clipboard'
  | 'icon-download'
  | 'icon-calendar'
  | 'icon-settings'
  | 'icon-info'
  | 'icon-play'
  | 'icon-archive'
  | 'icon-file'
  | 'icon-file-text'
  | 'icon-message-circle'
  | 'icon-share'
  | 'icon-arrow-down-circle'
  | 'icon-trash'
  | 'icon-trash-2'
  | 'icon-edit'
  | 'icon-truck'
  | 'icon-share-2'
  | 'icon-heart-o'
  | 'icon-heart1'
  | 'icon-file-plus'
  | 'icon-eye'
  | 'icon-save'
  | 'icon-alert-triangle'
  | 'icon-minus-circle'
  | 'icon-minus'

/** The prop contract every glyph in the map must accept — a subset of plain SVG props. */
type IconGlyphProps = Pick<SVGProps<SVGSVGElement>, 'width' | 'height' | 'aria-hidden'>
type IconGlyph = ComponentType<IconGlyphProps>

/* Lucide has no filled variant; the legacy `icon-heart1` glyph was a solid heart. */
function HeartSolid(props: IconGlyphProps) {
  return <Heart {...props} fill="currentColor" />
}

/* Brand glyphs are absent from Lucide (brand icons were dropped from the set), so these
 * three keep the legacy vectors, extracted from the icomoon selection.json (Feather-derived
 * outlines on a 1024 grid, filled with currentColor like the font glyphs they replace). */
function Facebook(props: IconGlyphProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" {...props}>
      <path d="M725.333 128v85.333h-85.333c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331v128c0 23.552 19.115 42.667 42.667 42.667h116.011l-21.333 85.333h-94.677c-23.552 0-42.667 19.115-42.667 42.667v298.667h-85.333v-298.667c0-23.552-19.115-42.667-42.667-42.667h-85.333v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM768 42.667h-128c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667h85.333v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667h85.333c19.883 0 36.608-13.611 41.387-32.299l42.667-170.667c5.717-22.869-8.192-46.037-31.061-51.755-3.541-0.896-7.125-1.323-10.325-1.28h-128v-85.333h128c23.552 0 42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667z" />
    </svg>
  )
}

function Instagram(props: IconGlyphProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" {...props}>
      <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM746.667 320c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667z" />
    </svg>
  )
}

function Linkedin(props: IconGlyphProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" {...props}>
      <path d="M682.667 298.667c-82.475 0-157.184 33.493-211.2 87.467s-87.467 128.725-87.467 211.2v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467zM682.667 384c58.923 0 112.213 23.851 150.869 62.464s62.464 91.947 62.464 150.869v256h-85.333v-256c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496v256h-85.333v-256c0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464zM85.333 341.333c-23.552 0-42.667 19.115-42.667 42.667v512c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-512c0-23.552-19.115-42.667-42.667-42.667zM128 426.667h85.333v426.667h-85.333zM298.667 170.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM213.333 170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165z" />
    </svg>
  )
}

/**
 * Legacy icomoon name → Lucide component. The legacy font was built from the Feather set
 * (Lucide's direct ancestor), so every glyph maps 1:1 except the three brand icons and the
 * two FontAwesome hearts handled above.
 */
export const iconMap: Record<IconName, IconGlyph> = {
  'icon-alert-circle': CircleAlert,
  'icon-bell': Bell,
  'icon-arrow-right': ArrowRight,
  'icon-mail': Mail,
  'icon-map-pin': MapPin,
  'icon-menu': Menu,
  'icon-x': X,
  'icon-phone': Phone,
  'icon-refresh-cw': RefreshCw,
  'icon-search': Search,
  'icon-x-circle': CircleX,
  'icon-plus-circle': CirclePlus,
  'icon-plus': Plus,
  'icon-chevron-up': ChevronUp,
  'icon-chevron-down': ChevronDown,
  'icon-chevron-left': ChevronLeft,
  'icon-chevron-right': ChevronRight,
  'icon-chevrons-left': ChevronsLeft,
  'icon-chevrons-right': ChevronsRight,
  'icon-layers': Layers,
  'icon-check': Check,
  'icon-check-circle': CircleCheck,
  'icon-user': User,
  'icon-heart': Heart,
  'icon-shopping-cart': ShoppingCart,
  'icon-award': Award,
  'icon-package': Package,
  'icon-users': Users,
  'icon-facebook': Facebook,
  'icon-instagram': Instagram,
  'icon-linkedin': Linkedin,
  'icon-clipboard': Clipboard,
  'icon-download': Download,
  'icon-calendar': Calendar,
  'icon-settings': Settings,
  'icon-info': Info,
  'icon-play': Play,
  'icon-archive': Archive,
  'icon-file': File,
  'icon-file-text': FileText,
  'icon-message-circle': MessageCircle,
  'icon-share': Share,
  'icon-arrow-down-circle': CircleArrowDown,
  'icon-trash': Trash,
  'icon-trash-2': Trash2,
  'icon-edit': SquarePen,
  'icon-truck': Truck,
  'icon-share-2': Share2,
  'icon-heart-o': Heart,
  'icon-heart1': HeartSolid,
  'icon-file-plus': FilePlus,
  'icon-eye': Eye,
  'icon-save': Save,
  'icon-alert-triangle': TriangleAlert,
  'icon-minus-circle': CircleMinus,
  'icon-minus': Minus,
}

export interface IconProps {
  /** Which glyph to render, keyed by legacy icomoon name (see `iconMap`). */
  icon: IconName
  /** Glyph size token; when omitted the icon inherits the surrounding font-size. */
  size?: IconSize
  /** Semantic colour token; when omitted the icon inherits the current text colour. */
  color?: IconColor
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /**
   * Accessible name. Provide when the icon conveys meaning on its own;
   * omit for purely decorative icons (then rendered `aria-hidden`).
   */
  label?: string
  /** Forwarded to the wrapping `<span>`. */
  ref?: Ref<HTMLSpanElement>
}

const sizeClasses: Record<IconSize, string> = {
  small: 'text-base',
  medium: 'text-xl',
  large: 'text-2xl',
  xlarge: 'text-icon-xl',
}

const colorClasses: Record<IconColor, string> = {
  error: 'text-icon-critical',
  success: 'text-tag-green',
}

/**
 * Single vector icon (atom), rendered inside a `<span>` wrapping a Lucide/brand SVG sized in `em`.
 * Accessibility is driven by `label`: with a `label` the span gets `role="img"` and that
 * `aria-label` as its accessible name; without one the span is `aria-hidden` (purely decorative)
 * and the inner SVG is always `aria-hidden`. Consumers MUST pass `label` whenever the icon carries
 * meaning on its own (e.g. an icon-only control), and omit it when adjacent text already conveys it.
 */
function Icon({ icon, size, color, className, label, ref }: IconProps) {
  const Glyph = iconMap[icon]
  const accessibility = label
    ? ({ role: 'img', 'aria-label': label } as const)
    : ({ 'aria-hidden': true } as const)

  return (
    <span
      ref={ref}
      className={cn(
        'flex text-inherit',
        size && sizeClasses[size],
        color && colorClasses[color],
        className,
      )}
      {...accessibility}
    >
      {/* 1em tracks the span's font-size, so the token-based size classes (and plain
          font-size inheritance when `size` is omitted) scale the SVG like the old font glyph. */}
      <Glyph width="1em" height="1em" aria-hidden />
    </span>
  )
}

export { Icon }
