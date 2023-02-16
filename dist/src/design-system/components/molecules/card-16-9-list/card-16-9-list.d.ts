/// <reference types="react" />
import { ICard_16_9 } from '../../atoms/card-16-9/card-16-9';
export type TMaxColumns = 3 | 4;
export interface ICard_16_9_List {
    list: Array<ICard_16_9>;
    maxColumns: TMaxColumns;
}
declare const Card_16_9_List: ({ list, maxColumns }: ICard_16_9_List) => JSX.Element;
export { Card_16_9_List };
