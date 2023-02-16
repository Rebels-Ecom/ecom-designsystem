/// <reference types="react" />
export interface IDetails {
    id: string;
    label: string;
    description: React.ReactNode | string;
    isExpanded: boolean;
    onDetailsBtnClick: CallableFunction;
}
declare const Details: ({ id, label, description, isExpanded, onDetailsBtnClick }: IDetails) => JSX.Element;
export { Details };
