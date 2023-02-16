/// <reference types="react" />
export interface IInlineHelper {
    children: React.ReactNode;
    className?: string;
}
declare const InlineHelperText: ({ children, className }: IInlineHelper) => JSX.Element;
export { InlineHelperText };
