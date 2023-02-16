import React from 'react';
import { TOther } from '../../../../../types/other';
export interface IInputFile {
    id: string;
    className?: string;
    value?: string;
    label: string;
    placeholder: string;
    defaultValue?: string;
    onChange?: CallableFunction;
    onBlur?: CallableFunction;
    disabled?: boolean;
    required?: boolean;
    other?: TOther;
}
declare const InputFile: React.ForwardRefExoticComponent<IInputFile & React.RefAttributes<HTMLInputElement>>;
export { InputFile };
