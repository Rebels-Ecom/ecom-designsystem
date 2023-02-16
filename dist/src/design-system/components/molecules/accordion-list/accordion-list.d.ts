/// <reference types="react" />
import { IAccordion } from '../../atoms/accordion/accordion';
export interface IAccordionList {
    list: Array<IAccordion>;
    onAccordionBtnClick: CallableFunction;
}
declare const AccordionList: ({ list, onAccordionBtnClick }: IAccordionList) => JSX.Element;
export { AccordionList };
