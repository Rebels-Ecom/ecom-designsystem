/// <reference types="react" />
export interface IInlineError {
    children: React.ReactNode;
    className?: string;
}
declare const InlineErrorText: ({ children, className }: IInlineError) => JSX.Element;
export { InlineErrorText };
