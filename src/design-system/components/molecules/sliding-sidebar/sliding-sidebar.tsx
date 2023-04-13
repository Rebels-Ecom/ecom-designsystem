import React from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import styles from './sliding-sidebar.module.css'

export interface ISlidingSidebar {
    children: any
    isOpen: boolean
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

function SlidingSidebar({children, isOpen=false, onClose}: ISlidingSidebar) {

    const [open, cycleOpen] = useCycle(false, true);

    const itemVariants = {
        closed: {
          opacity: 0
        },
        open: { opacity: 1 }
      };
      const sideVariants = {
        closed: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
          }
        },
        open: {
          width: 500,
          transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
          }
        }
      };

  return (
    <main>
    {isOpen && ( <>
    <AnimatePresence>
      
        <motion.aside
        className={styles.sidebar}
          initial={{ width: 0 }}
          animate={{
            width: "100%",
            height: "100vh"
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 }
          }}
        >
          <motion.div
            className={styles.sidebarContent}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
                {children}
                <div className="btn-container">
      <button onClick={onClose}>X</button>
    </div>
          </motion.div>
        </motion.aside>
     
    </AnimatePresence>
    
    </>
     )}
  </main>
  )
}

export { SlidingSidebar }