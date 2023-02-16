/// <reference types="react" />
import { ILink } from '../../../../types/links';
export type TListDirection = 'horizontal' | 'vertical';
export interface ILinkedList {
    links: Array<ILink>;
    linkComponent: any;
    direction: TListDirection;
}
declare const LinkList: ({ links, linkComponent: Link, direction }: ILinkedList) => JSX.Element;
export { LinkList };
