import { useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import styles from './campaign-box.module.css'
import { Placeholder } from '../placeholder/placeholder';
import { ExpandableWrapper } from '../expandable-wrapper/expandable-wrapper';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';

export type TCampaignBox = {
  title: string;
  description?: string;
  subDescription?: string;
  color?: string;
  onClick?: () => void;
  loading?: boolean;
  btnLabel?: string;
  limited?: boolean;
  hideSelectBtn?: boolean;
}

const CampaignBox = ({
  title,
  description,
  subDescription,
  color = '#1D1D1B',
  onClick,
  loading,
  btnLabel,
  limited,
  hideSelectBtn
}: TCampaignBox) => {
  const [open, setOpen] = useState(false);
  const style: { [key: string]: string } = ({
    '--campaign-box-color': loading ? 'transparent' : color,
  })
  
  if (loading) {
    return (
      <div className={cx(styles.campaignBox, styles.loading)}>
        <Placeholder type='heading' />
      </div>
    )
  }
  return (
    <ExpandableWrapper
      className={styles.campaignBoxWrapper}
      open={open}
      initialHeight='62px'
    >
      <div className={cx(styles.campaignBox, {[styles.loading]: loading, [styles.limited]: limited })} style={style}>
        {(!limited && !hideSelectBtn) && (
          <Button
            type='button'
            children={btnLabel || 'Välj'}
            surface='x'
            onClick={onClick}
            className={styles.selectButton}
            name={`${btnLabel || 'Välj'} campaign`}
          />
        )}
        <button
          onClick={() => setOpen(!open)}
          className={styles.toggleButton}
          aria-label='Toggle campaign'
          >
          <motion.div
            key="open-btn"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: !open ? 0 : 180 }}
            exit={{ rotateX: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ perspective: 1000 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className={styles.toggleIcon} icon='icon-chevron-down' />
          </motion.div>
        </button>
        <h3 className={cx(styles.title, 'h5')}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {subDescription && <hr className={styles.divider} />}
        {subDescription && <p className={styles.subDescription}>{subDescription}</p>}
      </div>
    </ExpandableWrapper>
  )
}

export {
  CampaignBox
}