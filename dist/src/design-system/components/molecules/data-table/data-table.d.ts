/// <reference types="react" />
export type TDataRow = {
    [key: number]: string | number;
    [key: string]: string | number;
};
export interface IDataTable {
    data: Array<TDataRow>;
}
declare const DataTable: ({ data }: IDataTable) => JSX.Element;
export { DataTable };
