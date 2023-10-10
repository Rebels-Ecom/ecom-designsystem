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
}

const CampaignBanner = ({ campaigns, position = 'absolute' }: TCampaignBanner) => {
  
  return (
    <div className={cx(styles.campaignsWrapper, styles[position])}>
      {campaigns.map(campaign => {
        const style: { [key: string]: string } = ({
          '--campaign-banner-color': campaign.color,
        })

        return (
          <div className={styles.campaignBanner} style={style}>
            <motion.button
              key={campaign.title}
              whileTap={!campaign.disabled ? {
                scale: 0.9
              } : undefined}
              className={styles.button}
              onClick={campaign.onClick}
              disabled={campaign.disabled}
            >
              <span className={styles.title}>{campaign.title}</span>
            </motion.button>
          </div>
        )
      })}
    </div>
  )
}

export {
  CampaignBanner
}