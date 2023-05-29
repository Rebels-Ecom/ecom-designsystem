import React from 'react'
import styles from './order-confirmation-page.module.css'

interface IOrderConfirmationPage {
  children: React.ReactNode
}

const OrderConfirmationPage: React.FunctionComponent<IOrderConfirmationPage> = ({ children }) => {
  return (
    <div className={styles.pageLayout}>{children}</div>
  )
}

export { OrderConfirmationPage }
