import { PropsWithChildren } from "react";
import { motion } from 'framer-motion';
import styles from './expandable-wrapper.module.css'

type TExpandableWrapper = {
  open: boolean;
}

const ExpandableWrapper = ({ open, children }: PropsWithChildren<TExpandableWrapper>) => {
  return (
    <motion.div className={styles.expandableWrapper} initial={{ height: 0 }} animate={{ height: open ? 'auto' : 0 }}>{children}</motion.div>
  )
}

export {
  ExpandableWrapper
}
