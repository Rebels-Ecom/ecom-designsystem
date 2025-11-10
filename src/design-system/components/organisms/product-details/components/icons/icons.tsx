import React from 'react'
import { Icon, IconWithTooltip } from '../../../../atoms'
import { IProductDetails } from '../../product-details'
import styles from './icons.module.css'

interface IIcons {
  sellerOnly?: boolean
  isAccessoryPotItem?: boolean
  tooltips?: IProductDetails['tooltips']
}

const Icons = ({ sellerOnly, isAccessoryPotItem, tooltips }: IIcons) => {
  if (!sellerOnly && !isAccessoryPotItem) return null

  return (
    <div className={styles.icons}>
      {sellerOnly &&
        (tooltips?.sellerOnly ? (
          <IconWithTooltip content={tooltips.sellerOnly} icon={{ icon: 'icon-eye' }} />
        ) : (
          <Icon icon="icon-eye" size="large" />
        ))}

      {isAccessoryPotItem &&
        (tooltips?.accessoryPotItem ? (
          <IconWithTooltip content={tooltips.accessoryPotItem} text="S" />
        ) : (
          <span
            style={{
              fontSize: '0.875rem',
              width: '1.25rem',
              height: '1.25rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <b>S</b>
          </span>
        ))}
    </div>
  )
}

export { Icons }
