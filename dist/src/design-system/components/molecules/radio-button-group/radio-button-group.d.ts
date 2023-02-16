/// <reference types="react" />
import { IRadioButton } from '../../atoms/inputs/radio-button/radio-button';
export type TypeInputs = {
    label: string;
} & IRadioButton;
type TAlign = 'horizontal' | 'vertical';
export interface IRadioButtonGroup {
    className?: string;
    classNameHeading?: string;
    classNameList?: string;
    classNameListItem?: string;
    classNameLabel?: string;
    classNameRadio?: string;
    classNameRadioWrapper?: string;
    inputs: TypeInputs[];
    align?: TAlign;
}
declare const RadioButtonGroup: ({ className, classNameList, classNameListItem, classNameLabel, classNameRadio, classNameRadioWrapper, inputs, align, }: IRadioButtonGroup) => JSX.Element;
export { RadioButtonGroup };
