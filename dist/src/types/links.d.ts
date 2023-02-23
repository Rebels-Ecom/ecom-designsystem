/// <reference types="react" />
export type TTarget = '_blank' | '_self' | '_parent' | '_top';
export type TNavLinkType = 'email' | 'telephone' | 'login' | 'register' | 'favorites' | 'cart';
export type TNavLink = {
    navLinkType: TNavLinkType;
} & ILink;
export interface ILink {
    children: React.ReactNode;
    linkComponent?: any;
    href: string;
    target?: TTarget;
    isExternal?: boolean;
    title?: string;
    className?: string;
    id?: string;
}
