/// <reference types="react" />
export interface IAccordion {
    id: string;
    label: string;
    description: React.ReactNode | string;
    isExpanded: boolean;
    onAccordionBtnClick: CallableFunction;
}
declare const Accordion: ({ id, label, description, isExpanded, onAccordionBtnClick }: IAccordion) => JSX.Element;
export { Accordion };
