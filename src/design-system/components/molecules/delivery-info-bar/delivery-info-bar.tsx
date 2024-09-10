import styles from './delivery-info-bar.module.css'
import { motion } from 'framer-motion'
import { Icon } from '../../atoms/icon/icon'
import { ContentWrapper } from '../../layouts/content-wrapper/content-wrapper'

export interface IDeliveryInfoBar {
  exists: boolean
  infoText: string
  altText?: string
  onClick: () => void
}

const DeliveryInfoBar = ({ exists, infoText, onClick }: IDeliveryInfoBar) => {
  if (!exists) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-50px' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.5, type: 'spring', duration: 0.3 }}
    >
      <ContentWrapper padding={[0.25, 2.5]}>
        <div className={styles.deliveryInfoBar}>
          <motion.button whileTap={{ scale: 0.95 }} className={styles.button} onClick={onClick}>
            <Icon className={styles.icon} icon='icon-truck' />
            <span className={styles.text}>{infoText}</span>
          </motion.button>
        </div>
      </ContentWrapper>
    </motion.div>
  )
}

export { DeliveryInfoBar }
