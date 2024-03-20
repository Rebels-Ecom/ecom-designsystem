import React, { useState } from 'react'
import styles from './product-description.module.css'
import { Button } from '../../atoms/button/button'
import { IProductDetail } from '../product-details/product-details'
import { AnimatePresence, motion } from 'framer-motion'
import cx from 'classnames'
import { IIcon, Icon, TIcon } from '../../atoms/icon/icon'

export interface IProductDescriptionItem {
  id: string
  btnLabel: string
  btnIcon: TIcon
  onClick?: CallableFunction
  descriptionContent?: IProductDetail
}

export interface IProductDescription {
  productDescriptionItems: Array<IProductDescriptionItem>
}

const contentBoxAnimation = {
  key: 'contentAnimation',
  initial: { y: '-90%', opacity: 0 },
  animate: { y: 0, opacity: 1, zIndex: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
  exit: { y: '-90%', opacity: 0, transition: { duration: 0.5 } },
}

function ProductDescription({ productDescriptionItems }: IProductDescription) {
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

  function getProductSpecs(specs: any) {
    if (specs && Array.isArray(specs) && specs.length > 0) {
      return specs.map((spec, index) => {
        return (
          spec.value &&
          spec.value !== 'False' && (
            <p key={index} className={'bodyS'}>
              <span className={styles.specTitle}>{`${spec.name}: `}</span>
              {spec.value}
            </p>
          )
        )
      })
    }
    return null
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
                      {item.descriptionContent?.invisibleDescription && <p className={styles.description}> {item.descriptionContent.invisibleDescription}</p>}
                      {item.descriptionContent.invisibleSpecs && getProductSpecs(item.descriptionContent.invisibleSpecs)}
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
