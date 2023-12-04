import { PropsWithChildren } from "react";
import { motion } from 'framer-motion';
import styles from './expandable-wrapper.module.css'
import cx from 'classnames';

type TExpandableWrapper = {
  open: boolean;
  className?: string;
}

const ExpandableWrapper = ({ open, children, className = '' }: PropsWithChildren<TExpandableWrapper>) => {
  return (
    <motion.div className={cx(styles.expandableWrapper, className)} initial={{ height: 0 }} animate={{ height: open ? 'auto' : 0 }}>{children}</motion.div>
  )
}

export {
  ExpandableWrapper
}
