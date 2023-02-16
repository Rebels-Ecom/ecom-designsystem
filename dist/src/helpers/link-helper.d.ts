export type TLink = {
    href: string;
    text?: string;
    title: string;
    isExternal?: boolean;
    target?: string;
};
declare function isExternalLink(link: TLink): boolean;
declare function isInternalLink(link: TLink, linkComponent: any): boolean;
export { isExternalLink, isInternalLink };
