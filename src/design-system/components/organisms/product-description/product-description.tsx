import React from 'react'
import styles from './product-description.module.css'
import { Button, IButton } from '../../atoms/button/button'

export interface IProductDescription {
  productDescriptionButton: IButton
  productSheetButton: IButton
  richText: string
  onClickGetDescription: React.MouseEventHandler<HTMLButtonElement>
  onClickDownloadProductSheet: React.MouseEventHandler<HTMLButtonElement>
}

function ProductDescription({productDescriptionButton, productSheetButton, richText, onClickGetDescription, onClickDownloadProductSheet}: IProductDescription) {
  return (
    <section className={styles.productDescription}>
        <div className={styles.contentWrapper}>
          <div className={styles.buttonsWrapper}>
              <Button {...productDescriptionButton} type={'button'} surface={'primary'} iconRight={{icon:'icon-alert-circle'}} rounded onClick={onClickGetDescription}>{productDescriptionButton.children}</Button>
              <Button {...productSheetButton} type={'button'} surface={'secondary'} iconRight={{icon:'icon-download'}} rounded onClick={onClickDownloadProductSheet}> {productSheetButton.children}</Button>
          </div>
          <div className={styles.richTextWrapper} dangerouslySetInnerHTML={{ __html: richText }}/>
        </div>
        
    </section>
  )
}

export {ProductDescription}
