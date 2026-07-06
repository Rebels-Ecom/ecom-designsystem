import type { AnchorHTMLAttributes, ComponentType, ReactNode, Ref } from 'react'

/**
 * Props a polymorphic link renderer receives. A superset-safe subset of the native anchor
 * attributes plus `children` and a forwarded `ref` — enough for the design system's link/button
 * components to render a semantic `<a>` while letting a consumer swap in their framework's router
 * link.
 */
export type LinkRenderProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode
  ref?: Ref<HTMLAnchorElement>
}

/**
 * The shape of an injectable link component. Consumers pass e.g. React Router's `Link` or Next's
 * `Link` (adapted to accept `href`) via a `linkComponent` prop; when omitted, components fall back
 * to {@link DefaultLink}.
 */
export type LinkComponentType = ComponentType<LinkRenderProps>

/**
 * Default link renderer: a real, semantic `<a>` element. This replaces the legacy `LinkComponent`
 * stub (which rendered a non-semantic `<div>`), so links are keyboard-focusable and exposed to
 * assistive tech as links (4.1.2) out of the box. Components accept a `linkComponent` prop to
 * override it with a client-side router link.
 */
export const DefaultLink: LinkComponentType = (props) => <a {...props} />
