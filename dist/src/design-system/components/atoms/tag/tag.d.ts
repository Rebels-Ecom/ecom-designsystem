/// <reference types="react" />
export type TTagSize = 'large' | 'small';
export type TTagShape = 'rectangular' | 'round';
export interface ITag {
    text: string;
    size: TTagSize;
    shape: TTagShape;
    className?: string;
}
declare const Tag: ({ text, size, shape, className }: ITag) => JSX.Element;
export { Tag };
