export type TOther = {
  [key: string | number]: any
}

export interface RichTextProps {
  /** The rich text field data. */
  field: {
      value?: string;
      editable?: string;
  };
  /**
   * The HTML element that will wrap the contents of the field.
   * @default <div />
   */
  tag?: string;
  /**
   * Can be used to explicitly disable inline editing.
   * If true and `field.editable` has a value, then `field.editable` will be processed and rendered as component output. If false, `field.editable` value will be ignored and not rendered.
   * @default true
   */
  editable?: boolean;
  [htmlAttributes: string]: any;
}