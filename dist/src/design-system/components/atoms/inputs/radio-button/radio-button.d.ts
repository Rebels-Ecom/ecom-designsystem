/// <reference types="react" />
import { TOther } from '../../../../../types/other';
export interface IRadioButton {
    id: string;
    name: string;
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: CallableFunction;
    disabled?: boolean;
    isErroneous?: boolean;
    required?: boolean;
    checked: boolean;
    other?: TOther;
}
declare const RadioButton: import("react").ForwardRefExoticComponent<IRadioButton & import("react").RefAttributes<HTMLInputElement>>;
export { RadioButton };
