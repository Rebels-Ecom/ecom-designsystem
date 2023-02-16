/// <reference types="react" />
import { ILink } from '../../../../types/links';
export interface IFooter {
    heading?: string;
    preamble?: string;
    links: Array<ILink>;
    linkComponent: any;
}
declare const Footer: ({ heading, preamble, links, linkComponent: Link }: IFooter) => JSX.Element;
export { Footer };
