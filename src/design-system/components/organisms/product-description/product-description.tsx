import React, { useState } from 'react'
import styles from './product-description.module.css'
import { Button, IButton } from '../../atoms/button/button'
import { IProductDetail } from '../product-details/product-details'
import { AnimatePresence, motion } from 'framer-motion'

export interface IProductDescriptionItem {
  id: string,
  btnLabel: string,
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
          setCurrentTab(e.currentTarget.id)
          setIsOpen(true)
        onClick && onClick()
    }
 {/* <div className={styles.contentWrapper}>
          <div className={styles.buttonsWrapper}>
              <Button {...productDescriptionButton} type={'button'} surface={'primary'} iconRight={{icon:'icon-alert-circle'}} rounded onClick={onClickGetDescription}>{productDescriptionButton.children}</Button>
              <Button {...productSheetButton} type={'button'} surface={'secondary'} iconRight={{icon:'icon-download'}} rounded onClick={onClickDownloadProductSheet}> {productSheetButton.children}</Button>
          </div>
          <div className={styles.richTextWrapper} dangerouslySetInnerHTML={{ __html: richText }}/>
        </div> */}
    
        
  return (
   
       

        <div className={styles.tabsWrapper}>
            <div className={styles.buttonsWrapper}>
                {productDescriptionItems.map((tab, i) =>
                    <Button key={i} id={tab.id} className={styles.tabBtn} disabled={currentTab === `${tab.id}`} onClick={e=>handleTabClick(e, tab.onClick && tab.onClick)} type={'button'} surface={'secondary'} size={'large'} rounded>{tab.btnLabel}</Button>
                )}
            </div>
            
                {productDescriptionItems.map((tab, i) =>
                  <AnimatePresence>
                  {tab.descriptionContent && isOpen && 
                    <motion.div 
                      className={styles.tabContent}
                        key={i}
                        initial={{y: '50%', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 2, ease: 'easeOut'}}
                        exit={{y:'50%', opacity: 0, transition: {duration: 0.1}}}
                        >
                          {currentTab === `${tab.id}` && <div>{tab.descriptionContent}</div>}
                      </motion.div>
                    }
                  </AnimatePresence>
                )}
          </div>
        
  )
}

export {ProductDescription}

// const ProductDescriptionItem = ({id, btnLabel, onClick, descriptionContent} : IProductDescriptionItem) => {
//   const [isOpen, setIsOpen ] = useState<boolean>(false)
//   return(
//     <div>
//       <Button id={id} className={styles.tabBtn} onClick={handleButtonClick} type={'button'} surface={'secondary'} size={'large'} rounded>{tab.btnLabel}</Button>

//     </div>
//   )
// }
