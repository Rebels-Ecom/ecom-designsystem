import { useState } from 'react';
import { Button, IButton } from '../../atoms/button/button';
import { IProductVariant, ProductVariant } from '../product-variant/product-variant';
import styles from './product-variant-list.module.css'

export interface IProductVariantList {
    className?: string
    variantsList: Array<IProductVariant>
    onVariantSelect: CallableFunction
    selectedVariantId: string
}

const ProductVariantList = ({ className, variantsList, onVariantSelect, selectedVariantId}:IProductVariantList) => {
    const [selectedProductVariantId, setSelectedProductVariantId] = useState(selectedVariantId)

    function handleOnChangeVariant(e: React.FormEvent<HTMLInputElement>) {
        const selectedValue = e.currentTarget.value;
        console.log('SELECTED VARIANT ID', selectedValue)
        setSelectedProductVariantId(selectedValue);
    }

    function handleSelectVariant() {
        const selectedProduct = variantsList.find(variant => variant.variantId===selectedProductVariantId);
        onVariantSelect(selectedProduct, variantsList);
    }

    return(
        <div className={className ? className : ''}>
            <ul className={styles.variantsList}>
                {variantsList.map((variant)=> (
                    <li key={variant.variantId} className={styles.listItem}>
                        <ProductVariant key={variant.variantId} {...variant} onChange={handleOnChangeVariant} checked={variant.variantId===selectedProductVariantId}/>
                    </li>
                ))}
            </ul>
            <Button className={styles.productCardBtn} type='button' surface='primary' fullWidth onClick={handleSelectVariant}>Välj variant</Button>
        </div>
    )
}

export { ProductVariantList } 