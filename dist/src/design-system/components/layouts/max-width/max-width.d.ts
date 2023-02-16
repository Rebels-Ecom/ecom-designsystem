/// <reference types="react" />
export type TContentMaxWidth = 'narrow' | 'wide';
export interface IMaxWidth {
    children: React.ReactNode;
    contentMaxWidth: TContentMaxWidth;
}
declare const MaxWidth: ({ children, contentMaxWidth }: IMaxWidth) => JSX.Element;
export { MaxWidth };
