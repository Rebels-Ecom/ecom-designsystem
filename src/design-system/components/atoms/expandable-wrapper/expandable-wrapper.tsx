import { PropsWithChildren } from "react";
import { motion } from 'framer-motion';
import styles from './expandable-wrapper.module.css'
import cx from 'classnames';

type TExpandableWrapper = {
  open: boolean;
  className?: string;
  initialHeight?: number | string;
}

const ExpandableWrapper = ({ open, children, className = '', initialHeight = 0 }: PropsWithChildren<TExpandableWrapper>) => {
  return (
    <motion.div className={cx(styles.expandableWrapper, className)} initial={{ height: initialHeight }} animate={{ height: open ? 'auto' : initialHeight }}>{children}</motion.div>
  )
}

export {
  ExpandableWrapper
}
