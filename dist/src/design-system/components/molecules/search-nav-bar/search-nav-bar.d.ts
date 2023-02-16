/// <reference types="react" />
import { IPicture } from '../../atoms/picture/picture';
import { TNavLink } from '../../../../types/links';
export type INavigationLogo = {
    href: string;
} & IPicture;
export interface ISearchNavBar {
    logo: INavigationLogo;
    searchNavLinks: Array<TNavLink>;
    linkComponent: any;
    searchArgs: any;
    itemsToFilterOn: Array<any>;
}
declare const SearchNavBar: ({ logo, searchNavLinks, linkComponent: Link, searchArgs, itemsToFilterOn }: ISearchNavBar) => JSX.Element;
export { SearchNavBar };
