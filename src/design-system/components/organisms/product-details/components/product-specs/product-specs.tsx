import React from 'react'
import cx from 'classnames'
import styles from './product-specs.module.css'
import { IProductSpec } from '../../product-details'

interface IProductSpecs {
  specs?: Array<IProductSpec>
}

function getProductSpecs(specs: Array<IProductSpec>) {
  return (
    specs
      ?.filter((spec) => spec.value && spec.value !== 'False')
      .map((spec, index) => {
        const displayValue = spec.value === 'True' ? '' : `: ${spec.value}`
        return (
          <p key={index} className={cx(styles.specsText, 'bodyS')}>
            {spec.name}
            {displayValue}
          </p>
        )
      }) || null
  )
}

const ProductSpecs = ({ specs = [] }: IProductSpecs) => {
  return <div className={styles.productSpecs}>{getProductSpecs(specs)}</div>
}

export { ProductSpecs }
