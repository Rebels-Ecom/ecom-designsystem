import { useEffect } from 'react'
import { InputText } from '../../atoms'
import styles from './product-quantity-input.module.css'

export interface IProductQuantityInput {
    className?: string;
    quantityInputId:string;
    quantity: number;
    salesUnit: string;
    itemNumberPerSalesUnit: number;
    totalPrice: string;
    disabled?: boolean;
    onChange?: CallableFunction;
    priceLabel?: string;
    unit?: string;
}

const ProductQuantityInput = ({
    className,
    quantity,
    quantityInputId,
    salesUnit,
    itemNumberPerSalesUnit,
    totalPrice,
    disabled=false,
    onChange,
    priceLabel,
    unit
}: IProductQuantityInput) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
    }

    return (
        <div className = {`${styles.inputQuantityWrapper} ${className ? className : ''}`}>
            <InputText
                id={quantityInputId}
                defaultValue={quantity.toString()}
                placeholder='0'
                onChange={handleOnChange}
                disabled={disabled}
                type='number'
                className={styles.quantityInputField}
                min='0'
                other={{
                    onKeyDown: (e: React.KeyboardEvent) => {
                        const illegalChars = ['-', '+', '.', ',']
                        if (illegalChars.find(p => p === e.key)) {
                            e.preventDefault()
                        }
                    },
                    onPaste: (e: React.ClipboardEvent) => {
                        e.preventDefault();
                    }
                }}
            />
            {((salesUnit &&itemNumberPerSalesUnit) || totalPrice) && <div>
                {salesUnit && itemNumberPerSalesUnit && <p className={`${styles.textQuantity} bodyS`}>{`x ${salesUnit} (${itemNumberPerSalesUnit} ${unit ?? 'st'})`}</p>}
                {totalPrice && <p className={`${styles.textPrice} bodyS fontBold`}>{`${priceLabel ?? 'Pris'}: ${totalPrice} kr`}</p>}
            </div>}
        </div>
    )
}

export { ProductQuantityInput }
