/// <reference types="react" />
import { TButtonSize, TButtonSurface, TButtonSurfaceVariant } from '../../../../types/button';
export type TButtonType = 'submit' | 'button';
export interface IButton {
    children?: React.ReactNode;
    type: TButtonType;
    surface: TButtonSurface;
    surfaceVariant?: TButtonSurfaceVariant;
    size?: TButtonSize;
    fullWidth?: boolean;
    rounded?: boolean;
    className?: string;
    disabled?: boolean;
    id?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Button: import("react").ForwardRefExoticComponent<IButton & import("react").RefAttributes<HTMLButtonElement>>;
export { Button };
