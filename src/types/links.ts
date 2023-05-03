import React from 'react'
export type TTarget = '_blank' | '_self' | '_parent' | '_top'
export type TNavLinkType = 'email' | 'telephone' | 'login' | 'register' | 'favorites' | 'cart'
export type TNavLink = { navLinkType: TNavLinkType } & ILink
export interface ISubNavList {
  listName: string
  listLinks: Array<ILink>
}
export interface ISubNav {
  title: string
  lists : Array<ISubNavList>
}
export interface ILink {
  children: React.ReactNode
  linkComponent?: any
  href: string
  target?: TTarget
  isExternal?: boolean
  title?: string
  className?: string
  id?: string
  hasChildren?: boolean
  subNav?: ISubNav
}
