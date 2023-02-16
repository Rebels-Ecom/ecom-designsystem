/// <reference types="react" />
import { ICheckbox } from '../../atoms/inputs/checkbox/checkbox';
export type TypeInputs = {
    label: string;
} & ICheckbox;
type TAlign = 'horizontal' | 'vertical';
export interface ICheckboxGroup {
    className?: string;
    classNameList?: string;
    classNameListItem?: string;
    classNameLabel?: string;
    classNameCheckbox?: string;
    classNameCheckboxWrapper?: string;
    inputs: Array<TypeInputs>;
    align?: TAlign;
}
declare const CheckboxGroup: ({ className, classNameList, classNameListItem, classNameLabel, classNameCheckbox, classNameCheckboxWrapper, inputs, align, }: ICheckboxGroup) => JSX.Element;
export { CheckboxGroup };
