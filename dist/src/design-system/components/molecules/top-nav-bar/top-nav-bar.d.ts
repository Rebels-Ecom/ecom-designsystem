/// <reference types="react" />
import { TNavLink } from '../../../../types/links';
export interface ITopNavBar {
    topNavLinks: Array<TNavLink>;
    linkComponent: any;
}
declare const TopNavBar: ({ topNavLinks, linkComponent: Link }: ITopNavBar) => JSX.Element;
export { TopNavBar };
