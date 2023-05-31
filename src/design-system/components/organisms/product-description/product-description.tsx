import React, { useState } from 'react'
import styles from './product-description.module.css'
import { Button } from '../../atoms/button/button'
import { IProductDetail } from '../product-details/product-details'
import { AnimatePresence, motion } from 'framer-motion'
import cx from 'classnames'
import { IIcon, Icon, TIcon } from '../../atoms/icon/icon'

export interface IProductDescriptionItem {
  id: string,
  btnLabel: string,
  btnIcon: TIcon,
  onClick?: CallableFunction,
  descriptionContent?: IProductDetail
}

export interface IProductDescription {
  productDescriptionItems: Array<IProductDescriptionItem>
}

const contentBoxAnimation = {
  key:'contentAnimation',
  initial:{y: '-50%', opacity: 0, },
  animate:{y: 0, opacity: 1, zIndex: 1},
  transition:{duration: 0.5, ease: 'easeOut'},
  exit:{y:'-50%', opacity: 0, transition: {duration: 0.5}}
}

function ProductDescription({ productDescriptionItems }: IProductDescription) {
  const [isOpen, setIsOpen ] = useState<boolean>(false)
  const [currentTab, setCurrentTab] = useState('');

    const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, onClick?: CallableFunction) => {
      if(onClick){
        setIsOpen(false)
        setCurrentTab(e.currentTarget.id)
        onClick()
      }
      else if (currentTab===e.currentTarget.id){
        setIsOpen(false)
        setCurrentTab('')
      }
      else{
        setIsOpen(true)
        setCurrentTab(e.currentTarget.id)
      }
    }

  return (
    <div className={styles.productDescription}>
      <div className={styles.buttonsWrapper}>
        {productDescriptionItems.map((item, i) =>
          <Button 
            key={i} 
            id={item.id} 
            className={cx(styles.btn, currentTab === `${item.id}` && styles.active)} 
            iconRight={{icon: item.btnIcon}}
            onClick={e=>handleTabClick(e, item.onClick && item.onClick)} 
            type={'button'} 
            surface={'secondary'} 
            size={'large'} 
            rounded >
            {item.btnLabel}
          </Button>
        )}
      </div>
      <ul className={styles.contentOuterWrapper}>
        {productDescriptionItems.map((item, i) =>
          <li key={i}>
            <AnimatePresence>
              {item.descriptionContent && isOpen && 
                <motion.div className={styles.contentWrapper}  {...contentBoxAnimation}>
                  {currentTab === `${item.id}` && <div className={styles.content}>
                    {item.descriptionContent?.invisibleDescription && <p className={styles.description}> {item.descriptionContent.invisibleDescription}</p>}
                    {Array.isArray(item.descriptionContent.invisibleSpecs) && item.descriptionContent.invisibleSpecs.length>0 && item.descriptionContent.invisibleSpecs.map((spec, index)=> 
                      <p key={index} className={cx(styles.specsText, 'bodyS')}>
                         <Icon icon={'icon-arrow-right'}></Icon>
                          <span className={styles.specTitle}>{spec.name}</span>{` : ${spec.value}`}
                      </p>
                    )}      
                  </div>}
              </motion.div>
            }
            </AnimatePresence>
          </li>
        )}
      </ul>
    </div>     
  )
}

export {ProductDescription}

