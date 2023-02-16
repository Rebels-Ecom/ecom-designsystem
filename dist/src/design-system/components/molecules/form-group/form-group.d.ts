/// <reference types="react" />
import { InputText, Select, Textarea } from '../../atoms';
import { RadioButtonGroup, CheckboxGroup } from '../../molecules';
type TFormElement = React.ReactElement<typeof InputText> | React.ReactElement<typeof Textarea> | React.ReactElement<typeof Select> | React.ReactElement<typeof RadioButtonGroup> | React.ReactElement<typeof CheckboxGroup>;
export interface IFormGroup {
    label?: string;
    formElementId: string;
    className?: string;
    children: TFormElement;
    helperText?: string;
    errorText?: string;
    requiredText?: string;
    labelRightText?: string | React.ReactNode;
}
declare const FormGroup: ({ label, formElementId, className, children, helperText, errorText, requiredText, labelRightText }: IFormGroup) => JSX.Element;
export { FormGroup };
