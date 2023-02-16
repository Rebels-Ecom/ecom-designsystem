/// <reference types="react" />
import { TOther } from '../../../../types/other';
export interface ISelect {
    id: string;
    options: Array<ISelectOption>;
    onChange?: CallableFunction;
    selectedIndex?: number;
    value?: string;
    disabled?: boolean;
    isErroneous?: boolean;
    required?: boolean;
    other?: TOther;
}
export interface ISelectOption {
    name: string;
    value: string;
}
declare const Select: import("react").ForwardRefExoticComponent<ISelect & import("react").RefAttributes<HTMLSelectElement>>;
export { Select };
