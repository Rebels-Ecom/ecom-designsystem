import { IButton } from "../../atoms/button/button";
import { IInputField } from "./components/input-field";

export type TFormSelectItem = {
  id: string;
  value: string;
};

export type TPattern = 'email' | 'phone' | 'password';

export type TFormInputType = Omit<IInputField, "onChange" | "value"> &
  {
    /** decides what type of form field to render and what value types to use */
    fieldType: 'input';
    /** prefilled default value used to compare with the state controlled value in order to detect changes to the form */
    originalValue: string;
    /** value is a form template controlled property updated by internal form template state */
    value?: string;
    /**
     * Subtitle to be displayed in mobile list view
     * @example A subtitle can be "No phone number added", while a placeholder should be "Add phone number".
     * */
    subtitle?: string;
    pattern?: TPattern;
    valid?: boolean;
    /**
     * Decides if a field should span 50% or 100% of parent width
     * @default 'half'
     */
    size?: 'half' | 'full';
    onControlledChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

// export type TFormInputMultiType = Omit<
//   TEditListItemProps,
//   "onChange" | "value"
// > &
//   IMultiline & {
//     /** decides what type of form field to render and what value types to use */
//     fieldType: "input-multi";
//     /** prefilled default value used to compare with the state controlled value in order to detect changes to the form */
//     originalValue: string;
//     /** value is a form template controlled property updated by internal form template state */
//     value?: string;
//     /**
//      * Subtitle to be displayed in mobile list view
//      * @example A subtitle can be "No phone number added", while a placeholder should be "Add phone number".
//      * */
//     subtitle: string;
//   };

// export type TFormSingleSelectType = Omit<
//   TSelectListItemProps<TFormSelectItem>,
//   "value"
// > &
//   Omit<TSelectListSingleProps<TFormSelectItem>, "onSave" | "value"> & {
//     /** decides what type of form field to render and what value types to use */
//     fieldType: "select";
//     /** prefilled default value used to compare with the state controlled value in order to detect changes to the form */
//     originalValue: TFormSelectItem;
//     /** value is a form template controlled property updated by internal form template state */
//     value?: TFormSelectItem;
//   };

// export type TFormMultiSelectType = Omit<
//   TSelectListItemProps<TFormSelectItem>,
//   "value"
// > &
//   Omit<TSelectListMultipleProps<TFormSelectItem>, "onSave"> & {
//     /** decides what type of form field to render and what value types to use */
//     fieldType: "multi-select";
//     /** prefilled default value used to compare with the state controlled value in order to detect changes to the form */
//     originalValue: TFormSelectItem[];
//     /** value is a form template controlled property updated by internal form template state */
//     value?: TFormSelectItem[];
//   };

export type TFormFieldType = {
  /** if true, this will render a non editable, read only item */
  blocked?: boolean;
} & (
  | TFormInputType
  // | TFormInputMultiType
  // | TFormSingleSelectType
  // | TFormMultiSelectType
  // | TFormAssetsType
);

export type IFormTemplateProps = {
  /** descriptive title to display on top of form */
  formTitle: string;
  /** descriptive subtitle to display under formTitle */
  formSubtitle?: string;
  /** submit that requires the complete form data */
  onSubmit?: (data: TFormFieldType[]) => void;
  /** submit that requires only the react form event */
  onControlledSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  /** loading state which is necessary in order to disable form while loading */
  loading: boolean;
  /** all fields to be rendered inside the form */
  fields: TFormFieldType[];
  actions?: IButton[];
  links?: Array<{
    name: string;
    href: string
  }>
  alignActions?: 'flex-start' | 'center' | 'flex-end';
  generalErrorMessage?: any;
};