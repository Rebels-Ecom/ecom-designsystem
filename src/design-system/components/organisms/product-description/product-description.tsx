import React, { useState } from 'react'
import styles from './product-description.module.css'
import { Button } from '../../atoms/button/button'
import { IProductDetail } from '../product-details/product-details'
import { AnimatePresence, motion } from 'framer-motion'
import cx from 'classnames'
import { IIcon, TIcon } from '../../atoms/icon/icon'

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
 {/* <div className={styles.contentWrapper}>
          <div className={styles.buttonsWrapper}>
              <Button {...productDescriptionButton} type={'button'} surface={'primary'} iconRight={{icon:'icon-alert-circle'}} rounded onClick={onClickGetDescription}>{productDescriptionButton.children}</Button>
              <Button {...productSheetButton} type={'button'} surface={'secondary'} iconRight={{icon:'icon-download'}} rounded onClick={onClickDownloadProductSheet}> {productSheetButton.children}</Button>
          </div>
          <div className={styles.richTextWrapper} dangerouslySetInnerHTML={{ __html: richText }}/>
        </div> */}
    
        
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
      {productDescriptionItems.map((item, i) =>
        <AnimatePresence>
          {item.descriptionContent && isOpen && 
            <motion.div 
              className={styles.contentWrapper}
              key={i}
              initial={{y: '50%', opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 2, ease: 'easeOut'}}
              exit={{y:'50%', opacity: 0, transition: {duration: 0.1}}}
              >
                {currentTab === `${item.id}` && <div className={styles.content}>{item.descriptionContent}</div>}
            </motion.div>
          }
        </AnimatePresence>
      )}
    </div>     
  )
}

export {ProductDescription}

