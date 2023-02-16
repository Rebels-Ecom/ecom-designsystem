interface ICloseOnEscape {
    onClose: CallableFunction;
    isOpen: boolean;
    disableClose?: boolean;
}
export default function useCloseOnEscape({ onClose, isOpen, disableClose }: ICloseOnEscape): void;
export {};
