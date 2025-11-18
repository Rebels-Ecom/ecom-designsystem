import React from 'react'
import { AddToCartButton, Button } from '../../../../atoms'
import { IProductDetailsActions } from './actions'
import styles from './mobile-actions.module.css'
import cx from 'classnames'

type TMobileActions = Pick<
  IProductDetailsActions,
  | 'variantList'
  | 'handleVariantsButtonClick'
  | 'packaging'
  | 'addToCartLabel'
  | 'partNo'
  | 'handleAddToCart'
  | 'handleQuantityChange'
  | 'inputQuantity'
  | 'availableForOrder'
  | 'loading'
  | 'outOfStock'
> & {
  isFixed?: boolean
}

export default function MobileActions({
  addToCartLabel,
  handleAddToCart,
  handleVariantsButtonClick,
  packaging,
  partNo,
  variantList,
  handleQuantityChange,
  inputQuantity,
  outOfStock,
  availableForOrder,
  loading,
  isFixed,
}: TMobileActions) {
  return (
    <div className={styles.mobileAddToCart}>
      <Button
        surface="secondary"
        type="button"
        className={cx(styles.mobileVariantBtn, { [styles.bigger]: !isFixed })}
        rounded
        onMouseDown={(e) => e?.stopPropagation()}
        onTouchStart={(e) => e?.stopPropagation()}
        iconRight={variantList.length <= 1 ? undefined : { icon: 'icon-layers' }}
        onClick={() => handleVariantsButtonClick()}
        disabled={variantList.length <= 1}
      >
        {packaging}
      </Button>

      <AddToCartButton
        buttonLabel={addToCartLabel}
        id={`${partNo}-Product`}
        onClick={handleAddToCart}
        onChange={(val) => handleQuantityChange(val, partNo)}
        quantity={Number(inputQuantity || 0)}
        disabled={!availableForOrder || loading || outOfStock}
        className={cx(styles.mobileAddToCartBtn, { [styles.bigger]: !isFixed })}
      />
    </div>
  )
}
