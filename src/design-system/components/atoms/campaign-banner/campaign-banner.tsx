import { motion } from 'framer-motion';
import styles from './campaign-banner.module.css'
import cx from 'classnames';

type TCampaign = {
  title: string;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
}

type TCampaignBanner = {
  campaigns: Array<TCampaign>;
  /**
   * sets positioning of the wrapper
   * @default 'absolute'
  */
 position?: 'absolute' | 'fixed' | 'relative';
 /**
  * If true, each campaign will have an enter animation
  * @default false
  */
 animate?: boolean;
}

const CampaignBanner = ({ campaigns, position = 'absolute', animate = false }: TCampaignBanner) => {
  
  return (
    <div className={cx(styles.campaignsWrapper, styles[position])}>
      {campaigns.map((campaign, i) => {
        const style: { [key: string]: string } = ({
          '--campaign-banner-color': campaign.color,
        })

        return (
          <motion.div
            className={styles.campaignBanner}
            style={style}
            initial={animate ? { opacity: 0, translateY: '-50px' } : undefined}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: (i+1) * 0.3, type: 'spring', duration: 0.3  }}
          >
            <motion.button
              key={campaign.title}
              whileTap={!campaign.disabled ? {
                scale: 0.95
              } : undefined}
              className={styles.button}
              onClick={campaign.onClick}
              disabled={campaign.disabled}
            >
              <span className={styles.title}>{campaign.title}</span>
            </motion.button>
          </motion.div>
        )
      })}
    </div>
  )
}

export {
  CampaignBanner
}