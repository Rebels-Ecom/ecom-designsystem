import { motion } from 'framer-motion';
import styles from './menu-button.module.css'
import cx from 'classnames'

export type TMenuButton = {
  isOpen: boolean;
  onClick: () => void;
}

const Path = (props: any) => <motion.path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />

const MenuButton = ({ isOpen, onClick }: TMenuButton) => (
  <button
    id="navigation-menu-btn"
    type={'button'}
    aria-label="menu"
    aria-controls={'navigation-menu'}
    aria-expanded={isOpen}
    onClick={onClick}
    className={cx(styles.menuButton, isOpen && styles.open)}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
    </svg>
  </button>
)

export { MenuButton }
