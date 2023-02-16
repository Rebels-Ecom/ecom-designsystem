import React from 'react';
import { TOther } from '../../../../../types/other';
type acceptedTypes = 'text' | 'email' | 'tel' | 'password' | 'number';
export interface IInputText {
    id: string;
    className?: string;
    type?: acceptedTypes;
    value?: string;
    defaultValue?: string;
    onChange?: CallableFunction;
    onFocus?: CallableFunction;
    onBlur?: CallableFunction;
    placeholder?: string;
    disabled?: boolean;
    isErroneous?: boolean;
    required?: boolean;
    other?: TOther;
}
declare const InputText: React.ForwardRefExoticComponent<IInputText & React.RefAttributes<HTMLInputElement>>;
export { InputText };
