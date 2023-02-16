/// <reference types="react" />
import { TOther } from '../../../../../types/other';
export interface ICheckbox {
    id: string;
    name: string;
    className?: string;
    value?: string;
    defaultValue?: string;
    checked: boolean;
    onChange?: CallableFunction;
    disabled?: boolean;
    isErroneous?: boolean;
    required?: boolean;
    other?: TOther;
}
declare const Checkbox: import("react").ForwardRefExoticComponent<ICheckbox & import("react").RefAttributes<HTMLInputElement>>;
export { Checkbox };
