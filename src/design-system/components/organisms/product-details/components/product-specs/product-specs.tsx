import React from 'react'
import cx from 'classnames'
import styles from './product-specs.module.css'
import { IProductSpec } from '../../product-details'

interface IProductSpecs {
  specs?: Array<IProductSpec>
}

function getProductSpecs(specs: Array<IProductSpec>) {
  if (specs && Array.isArray(specs) && specs.length > 0) {
    return specs.map((spec, index) => {
      return (
        spec.value &&
        spec.value !== 'False' && (
          <p key={index} className={cx(styles.specsText, 'bodyS')}>{`${spec.name} : ${spec.value}`}</p>
        )
      )
    })
  }
  return null
}

const ProductSpecs = ({ specs = [] }: IProductSpecs) => {
  return <div className={styles.productSpecs}>{getProductSpecs(specs)}</div>
}

export { ProductSpecs }
