/// <reference types="react" />
import { ILink } from '../../../../types/links';
import { TButtonSurface, TButtonSize } from '../../../../types/button';
export interface ILinkButton extends ILink {
    children: React.ReactNode;
    surface: TButtonSurface;
    size?: TButtonSize;
    fullWidth?: boolean;
}
declare const LinkButton: ({ className, surface, size, children, fullWidth, linkComponent: Link, href, target, title, isExternal, id, }: ILinkButton) => JSX.Element;
export { LinkButton };
