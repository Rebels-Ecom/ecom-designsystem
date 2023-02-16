/// <reference types="react" />
import { TOther } from '../../../../types/other';
export interface ITextarea {
    id: string;
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: CallableFunction;
    placeholder?: string;
    rows?: number;
    cols?: number;
    disabled?: boolean;
    isErroneous?: boolean;
    required?: boolean;
    other?: TOther;
}
declare const Textarea: import("react").ForwardRefExoticComponent<ITextarea & import("react").RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
