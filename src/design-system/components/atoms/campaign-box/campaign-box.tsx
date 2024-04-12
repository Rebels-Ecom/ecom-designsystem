import cx from 'classnames';
import { motion } from 'framer-motion';
import styles from './campaign-box.module.css'
import { Placeholder } from '../placeholder/placeholder';

export type TCampaignBox = {
  title: string;
  description?: string;
  subDescription?: string;
  color?: string;
  onClick?: () => void;
  loading?: boolean;
}

const CampaignBox = ({ title, description, subDescription, color = '#1D1D1B', onClick, loading }: TCampaignBox) => {

  const style: { [key: string]: string } = ({
    '--campaign-box-color': loading ? 'transparent' : color,
  })
  return (
    <motion.button
      className={cx(styles.campaignBox, {[styles.isButton]: !!onClick, [styles.loading]: loading})}
      style={style}
      onClick={onClick}
      whileTap={onClick ? { scale: 0.99 } : undefined}
    >
      {loading && <Placeholder type='heading' />}
      {loading && <Placeholder type='p_short' />}
      <h5 className={styles.title}>{title}</h5>
      {description && <p className={styles.description}>{description}</p>}
      {subDescription && <hr className={styles.divider} />}
      {subDescription && <p className={styles.subDescription}>{subDescription}</p>}
    </motion.button>
  )
}

export {
  CampaignBox
}