/// <reference types="react" />
interface IColorBox {
    children?: React.ReactNode;
    bg: string;
    small?: boolean;
}
declare const ColorBox: ({ children, bg, small }: IColorBox) => JSX.Element;
export default ColorBox;
