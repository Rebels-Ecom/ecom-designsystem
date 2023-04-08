import { DividerLines } from "../../atoms/divider-lines/divider-lines"
import { RadioButton } from "../../atoms/inputs/radio-button/radio-button"
import { IPicture, Picture } from "../../atoms/picture/picture"
import styles from './product-variant.module.css'
import fallbackProductImageUrl from '../../../../assets/teaser-images/Teaser1.png'

export interface IProductVariant {
    productName: string
    variantName: string
    variantId: string
    country: string
    listPricePerUnitString: string
    salesUnit: string
    image: IPicture
    onChange: CallableFunction
    checked: boolean
}

const ProductVariant = ({ image, productName, variantName, variantId, country, listPricePerUnitString, onChange, checked } : IProductVariant) => {
    return(
        <div className={styles.productVariant}>
            <div className={styles.imageWrapper}><Picture {...image} classNamePicture={styles.picture} classNameImg={`${styles.image}`} fallbackImageUrl={fallbackProductImageUrl} /> </div>
            <div className={`${styles.content}`}>
                <p className={styles.heading}>{productName}</p>
                <p className={styles.heading}>{variantName}</p>
                <DividerLines/>
                <p className={styles.textGray}>{`Art.nr. ${variantId} - ${country}`}</p>
                <p className={styles.textPurple}>{`${variantName}: ${listPricePerUnitString} kr/st`}</p>
            </div>
            <div className={styles.checkboxWrapper}>
                <RadioButton
                    id={variantId}
                    name={`variant-radio-${productName}`}
                    checked={checked}
                    value={variantId}
                    onChange={onChange}
                />
             </div>
        </div>
    )
}

export { ProductVariant} 