import React from 'react'
import { TIcon } from '../design-system/components/atoms/icon/icon'
export type TTarget = '_blank' | '_self' | '_parent' | '_top'
export type TNavLinkType = 'email' | 'telephone' | 'login' | 'register' | 'logout' | 'loggedInUser' | 'favorites' | 'cart' 
export type TNavLink = { navLinkType: TNavLinkType } & ILink
export type TIconNavLink = { isTelephoneLink?: boolean, icon: TIcon } & ILink

export interface ILink {
  children: React.ReactNode
  linkComponent?: any
  href: string
  target?: TTarget
  isExternal?: boolean
  title?: string
  className?: string
  id?: string
}

export interface INavigationLink extends ILink {
  listTitle?: string
  hasChildren?: boolean
  subNavBtnLabel?: string
  subNavigationLinks?: Array<INavigationLink>
}
