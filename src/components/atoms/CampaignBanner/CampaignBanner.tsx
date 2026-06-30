import type { Ref } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/cn'

export interface Campaign {
  title: string
  /** Banner background colour. Resolved at runtime, so applied as an inline style. */
  color: string
  onClick?: () => void
  disabled?: boolean
}

export interface CampaignBannerProps {
  campaigns: Campaign[]
  /** @default 'absolute' */
  position?: 'absolute' | 'fixed' | 'relative'
  /** When true, each banner plays an enter animation. @default false */
  animate?: boolean
  className?: string
  ref?: Ref<HTMLDivElement>
}

const positionClasses: Record<NonNullable<CampaignBannerProps['position']>, string> = {
  relative: 'relative',
  absolute: 'absolute top-0 right-0 left-0 z-menu-icon',
  fixed: 'fixed top-0 right-0 left-0 z-menu-icon',
}

function CampaignBanner({
  campaigns,
  position = 'absolute',
  animate = false,
  className,
  ref,
}: CampaignBannerProps) {
  return (
    <div ref={ref} className={cn(positionClasses[position], className)}>
      {campaigns.map((campaign, index) => (
        <motion.div
          key={`${campaign.title}-${index}`}
          className="w-full"
          style={{ backgroundColor: campaign.color }}
          initial={animate ? { opacity: 0, translateY: '-50px' } : false}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: (index + 1) * 0.3, type: 'spring', duration: 0.3 }}
        >
          <motion.button
            type="button"
            whileTap={campaign.disabled ? undefined : { scale: 0.95 }}
            onClick={campaign.onClick}
            disabled={campaign.disabled}
            className="flex w-full cursor-pointer items-center justify-center border-none bg-transparent py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:bg-surface-disabled"
          >
            <span className="text-center font-secondary text-body text-text-white uppercase">
              {campaign.title}
            </span>
          </motion.button>
        </motion.div>
      ))}
    </div>
  )
}

export { CampaignBanner }
