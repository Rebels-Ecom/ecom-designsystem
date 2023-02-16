import React from 'react';
import { IInputText } from '../../atoms/inputs/input-text/input-text';
export interface IInputPasswordFormGroup {
    label: string;
    className?: string;
    inputProps: IInputText;
    helperText?: string;
    errorText?: string;
    checkboxLabel: string;
    labelRightText?: React.ReactNode;
    visiblePassword?: boolean;
}
declare const InputPasswordFormGroup: ({ className, label, inputProps, helperText, errorText, checkboxLabel, labelRightText, visiblePassword, }: IInputPasswordFormGroup) => JSX.Element;
export { InputPasswordFormGroup };
