import React from 'react'
import cx from 'classnames'
import styles from './product-specs.module.css'
import { IProductSpec } from '../../product-details'

interface IProductSpecs {
  specs?: Array<IProductSpec>
  boldKeys?: boolean
}

function getProductSpecs(specs: Array<IProductSpec>, boldKeys?: boolean) {
  return (
    specs
      ?.filter((spec) => spec.value && spec.value !== 'False')
      .map((spec, index) => {
        const displayValue = spec.value === 'True' ? '' : `: ${spec.value}`
        return (
          <p
            key={index}
            className={cx(styles.specsText, 'bodyS', {
              [styles.bold]: spec.value === 'True',
            })}
          >
            <span className={boldKeys ? styles.bold : ''}>{spec.name}</span>
            {displayValue}
          </p>
        )
      }) || null
  )
}

const ProductSpecs = ({ specs = [], boldKeys }: IProductSpecs) => {
  return <div className={styles.productSpecs}>{getProductSpecs(specs, boldKeys)}</div>
}

export { ProductSpecs }
