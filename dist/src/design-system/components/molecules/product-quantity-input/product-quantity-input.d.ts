/// <reference types="react" />
export interface IProductQuantityInput {
    className?: string;
    quantityInputId: string;
    quantity: string;
    salesUnit: string;
    itemNumberPerSalesUnit: number;
    totalPrice: string;
    onChange?: CallableFunction;
}
declare const ProductQuantityInput: ({ className, quantity, quantityInputId, salesUnit, itemNumberPerSalesUnit, totalPrice, onChange }: IProductQuantityInput) => JSX.Element;
export { ProductQuantityInput };
