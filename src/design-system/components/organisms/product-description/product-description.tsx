import React, { useState } from 'react'
import styles from './product-description.module.css'
import { Button } from '../../atoms/button/button'
import { IProductDetail } from '../product-details/product-details'
import { AnimatePresence, motion } from 'framer-motion'
import cx from 'classnames'
import { TIcon } from '../../atoms/icon/icon'
import { ProductSpecs } from '../product-details/components/product-specs/product-specs'

export interface IProductDescriptionItem {
  id: string
  btnLabel: string
  btnIcon: TIcon
  onClick?: CallableFunction
  descriptionContent?: IProductDetail
}

export interface IProductDescription {
  productDescriptionItems: Array<IProductDescriptionItem>
  loading?: boolean
}

const contentBoxAnimation = {
  key: 'contentAnimation',
  initial: { y: '-90%', opacity: 0 },
  animate: { y: 0, opacity: 1, zIndex: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
  exit: { y: '-90%', opacity: 0, transition: { duration: 0.5 } },
}

function ProductDescription({ productDescriptionItems, loading }: IProductDescription) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentTab, setCurrentTab] = useState('')

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, onClick?: CallableFunction) => {
    if (onClick) {
      setIsOpen(false)
      setCurrentTab(e.currentTarget.id)
      onClick()
    } else if (currentTab === e.currentTarget.id) {
      setIsOpen(false)
      setCurrentTab('')
    } else {
      setIsOpen(true)
      setCurrentTab(e.currentTarget.id)
    }
  }

  return (
    <div className={styles.productDescription}>
      <div className={styles.buttonsWrapper}>
        {productDescriptionItems.map((item, i) => (
          <Button
            key={i}
            id={item.id}
            className={cx(styles.btn, currentTab === `${item.id}` && styles.active)}
            iconRight={{ icon: item.btnIcon }}
            onClick={(e) => handleTabClick(e, item.onClick && item.onClick)}
            type={'button'}
            surface={'secondary'}
            size={'large'}
            rounded
            disabled={loading}
          >
            {item.btnLabel}
          </Button>
        ))}
      </div>
      <ul className={styles.contentOuterWrapper}>
        {productDescriptionItems.map((item, i) => (
          <li key={i}>
            <AnimatePresence>
              {item.descriptionContent && isOpen && (
                <motion.div className={styles.contentWrapper} {...contentBoxAnimation}>
                  {currentTab === `${item.id}` && (
                    <div className={styles.content}>
                      {item.descriptionContent.invisibleSpecs && (
                        <ProductSpecs specs={item.descriptionContent.invisibleSpecs} boldKeys />
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ProductDescription }
