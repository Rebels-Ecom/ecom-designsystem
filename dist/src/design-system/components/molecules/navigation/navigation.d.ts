/// <reference types="react" />
import { ILink } from '../../../../types/links';
import { ILinkButton } from '../../atoms/link-button/link-button';
import { ISearchNavBar } from '../search-nav-bar/search-nav-bar';
import { ITopNavBar } from '../top-nav-bar/top-nav-bar';
export interface INavigation {
    topNavBar: ITopNavBar;
    searchNavBar: ISearchNavBar;
    links?: Array<ILink>;
    linkComponent: any;
    button?: ILinkButton;
}
declare const Navigation: ({ topNavBar, searchNavBar, links, button, linkComponent: Link }: INavigation) => JSX.Element;
export { Navigation };
