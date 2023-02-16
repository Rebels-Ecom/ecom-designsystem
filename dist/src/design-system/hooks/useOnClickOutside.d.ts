import { RefObject } from 'react';
interface IOnClickOutside {
    ref: RefObject<HTMLElement>;
    onClose: CallableFunction;
    disableClose?: boolean;
}
export default function useOnClickOutside({ ref, onClose, disableClose }: IOnClickOutside): void;
export {};
