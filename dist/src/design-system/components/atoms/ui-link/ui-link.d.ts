/// <reference types="react" />
import { TIcon } from '../icon/icon';
import { ILink } from '../../../../types/links';
import { TSurface } from '../../../../types/surface';
export type TSize = 'default' | 'large';
export interface IUILink extends ILink {
    iconLeft?: TIcon;
    iconRight?: TIcon;
    size: TSize;
    onSurface: TSurface;
    children: React.ReactNode;
}
export declare const LinkComponent: ({ children, ...props }: any) => JSX.Element;
declare const UILink: ({ linkComponent: Link, children, href, target, isExternal, title, className, iconLeft: IconLeft, iconRight: IconRight, size, onSurface, }: IUILink) => JSX.Element;
export { UILink };
