/// <reference types="react" />
export type TDialogRole = 'dialog' | 'alert' | 'alertdialog';
export type TTheme = 'light' | 'dark';
export type TAnimationVariants = {
    open: any;
    closed: any;
};
export interface IDialog {
    children?: React.ReactNode;
    role: TDialogRole;
    id?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    hasOverlay?: boolean;
    onClose: () => void;
    isOpen: boolean;
    animationVariants?: TAnimationVariants;
    focusableElementInside?: any;
    noPadding?: boolean;
    hasPortal?: boolean;
    theme?: TTheme;
    className?: string;
}
declare const Dialog: ({ id, role, children, ariaLabelledBy, ariaDescribedBy, hasOverlay, onClose, isOpen, animationVariants, focusableElementInside, noPadding, hasPortal, theme, className, }: IDialog) => JSX.Element;
export { Dialog };
