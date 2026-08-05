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
 * `Link` via a `linkComponent` prop; when omitted, components fall back to {@link DefaultLink}.
 */
export type LinkComponentType = ComponentType<LinkRenderProps>

/**
 * Default link renderer: a real, semantic `<a>` element. This replaces the legacy `LinkComponent`
 * stub (which rendered a non-semantic `<div>`), so links are keyboard-focusable and exposed to
 * assistive tech as links (4.1.2) out of the box. Components accept a `linkComponent` prop to
 * override it with a client-side router link. Defensively drops a stray `to` (not a valid DOM
 * attribute — see {@link resolveLink}).
 */
export const DefaultLink: LinkComponentType = ({
  ...props
}: LinkRenderProps & { to?: unknown }) => {
  delete (props as { to?: unknown }).to
  return <a {...props} />
}

// A stable wrapper per consumer link component (keyed by identity), so `resolveLink` returns the SAME
// component across renders — a fresh function each render would remount the `<a>` and drop focus.
// WeakMap so a wrapper is GC'd with its link component.
const resolvedLinkCache = new WeakMap<object, LinkComponentType>()

/**
 * Resolve a consumer-supplied `linkComponent` (or the intrinsic `'a'` / the default) into a renderer
 * that passes the destination as **both `href` and `to`**. This keeps the design system `href`-based
 * while letting a **`to`-based router link** — e.g. `react-router`'s `Link`, which the app injects
 * unadapted — navigate with no consumer change: react-router reads `to`; href-based links read `href`
 * and ignore the extra `to`. The intrinsic `'a'` and the built-in {@link DefaultLink} render a plain
 * anchor (no `to`, which isn't a valid DOM attribute). Use everywhere a `linkComponent` was previously
 * resolved to its nullish fallback (`linkComponent` or {@link DefaultLink}).
 */
export function resolveLink(linkComponent?: LinkComponentType | 'a'): LinkComponentType {
  if (!linkComponent || linkComponent === 'a') return DefaultLink

  const key = linkComponent as unknown as object
  const cached = resolvedLinkCache.get(key)
  if (cached) return cached

  const Base = linkComponent
  const ResolvedLink: LinkComponentType = ({ href, ...rest }: LinkRenderProps) => {
    const props = { href, ...(href != null ? { to: href } : {}), ...rest }
    return <Base {...(props as LinkRenderProps)} />
  }
  resolvedLinkCache.set(key, ResolvedLink)
  return ResolvedLink
}
