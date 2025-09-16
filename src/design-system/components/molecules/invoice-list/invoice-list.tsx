import { useState } from 'react'
import { motion } from 'framer-motion'
import { formatDateToDayMonthDMY } from '../../../../helpers/date-helper'
import { Button, ComponentWithTooltip, ExpandableWrapper, Icon, IconButton } from '../../atoms'
import styles from './invoice-list.module.css'
import cx from 'classnames'
import { LoadingOverlay } from '../loading-overlay/loading-overlay'

type BaseInvoice = {
  invoiceNumber: string
  title: string
  currency: string
  createdAt?: string
  dueDate?: string
  amount?: number
}

type TUnpaidInvoice = BaseInvoice & {
  type: 'unpaid'
  amountLabel?: string
  paid?: number
  remaining?: number
  expired?: boolean
  creditLabel?: string
  expireIn?: string
  onClick?: (invoiceNumber: string) => void
}

type TPaidInvoice = BaseInvoice & {
  type: 'paid'
  orderNumber: string
  customOrderNumber?: string
  tooltipLabel?: string
  onClick?: (invoiceNumber: string, orderNumber: string) => void
}

interface IInvoiceList {
  invoices: Array<TUnpaidInvoice | TPaidInvoice>
  loading?: boolean
  downloadTooltip?: string
  downloadingId?: string | null
  viewMoreLabel?: string
  viewLessLabel?: string
}

// Helper to group paid invoices by month
const groupPaidInvoicesByMonth = (invoices: TPaidInvoice[]) => {
  return invoices.reduce<Record<string, TPaidInvoice[]>>((acc, invoice) => {
    const date = invoice.dueDate ? new Date(invoice.dueDate) : new Date()
    const monthKey = date.toLocaleString('default', { month: 'long', year: 'numeric' })
    if (!acc[monthKey]) acc[monthKey] = []
    acc[monthKey].push(invoice)
    return acc
  }, {})
}

export function InvoiceList({
  invoices = [],
  loading,
  downloadTooltip,
  downloadingId,
  viewLessLabel,
  viewMoreLabel,
}: IInvoiceList) {
  const [open, setOpen] = useState(false)
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})

  const toggleOpen = (key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const renderInvoiceItem = (invoice: TUnpaidInvoice | TPaidInvoice) => {
    const key = invoice.type === 'unpaid' ? invoice.invoiceNumber : invoice.orderNumber
    const isOpen = !!openMap[key]

    if (invoice.type === 'unpaid') {
      return (
        <li key={invoice.title} className={cx(styles.invoiceItem, styles.unpaid)}>
          <div className={styles.leftSide}>
            <DateDisplay
              expired={invoice.expired}
              dateString={invoice.dueDate ? formatDateToDayMonthDMY(invoice.dueDate) : '-'}
            />
            <div className={styles.titleButtonWrapper}>
              <button type="button" className={styles.titleButton} onClick={() => toggleOpen(key)}>
                <span className={styles.title}>{invoice.title}</span>
                <Icon
                  size="medium"
                  className={styles.titleIcon}
                  icon={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}
                />
              </button>
              <ExpandableWrapper open={isOpen}>
                <div className={styles.firstRow}>
                  {invoice.amount !== undefined && (
                    <span className={styles.firstRowText}>
                      {invoice.amountLabel}: {invoice.amount} {invoice.currency}
                    </span>
                  )}
                  {invoice.paid !== undefined && <span className={styles.firstRowText}>{invoice.paid}</span>}
                  {invoice.remaining !== undefined && <span className={styles.firstRowText}>{invoice.remaining}</span>}
                </div>
                {invoice.createdAt && (
                  <div className={cx(styles.firstRowText, styles.createdAtText)}>{invoice.createdAt}</div>
                )}
              </ExpandableWrapper>
              {invoice.expireIn && <div className={styles.expireInText}>{invoice.expireIn}</div>}
            </div>
          </div>
          <div className={styles.rightSide}>
            {invoice.creditLabel && <div className={cx(styles.amount, styles.credit)}>{invoice.creditLabel}</div>}
            <div className={styles.amount}>
              {invoice.amount || 0} {invoice.currency}
            </div>
            <ComponentWithTooltip
              content={downloadTooltip}
              element={
                downloadingId === invoice.invoiceNumber ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key="loading"
                    className={styles.downloadWrapper}
                  >
                    <LoadingOverlay
                      isVisible={true}
                      position="absolute"
                      overlayBkgColor="transparent"
                      loaderSize="xs"
                    />
                  </motion.div>
                ) : (
                  <IconButton
                    icon="icon-download"
                    type="button"
                    onClick={() => invoice.onClick?.(invoice.invoiceNumber)}
                    round
                    isTransparent
                    noBorder
                    name="Download invoice"
                    weight="bold"
                  />
                )
              }
            />
          </div>
        </li>
      )
    }

    if (invoice.type === 'paid') {
      return (
        <li key={invoice.orderNumber} className={styles.invoiceItem}>
          <div className={cx(styles.leftSide, styles.alignCenter)}>
            <div className={styles.dateCircle}>
              <DateDisplay dateString={invoice.dueDate ? formatDateToDayMonthDMY(invoice.dueDate) : '-'} />
            </div>
            <div>
              <div>
                <span className={styles.title}>{invoice.title}</span>
              </div>
              {invoice.invoiceNumber && (
                <div className={styles.firstRow}>
                  <span className={styles.amount}>{invoice.invoiceNumber}</span>
                </div>
              )}
              {invoice.customOrderNumber && (
                <div className={styles.firstRow}>
                  <span className={styles.amount}>{invoice.customOrderNumber}</span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.rightSide}>
            {invoice.tooltipLabel && <div className={cx(styles.amount, styles.credit)}>{invoice.tooltipLabel}</div>}
            {/* <div className={cx(styles.amount, styles.paidAmount)}>
              {invoice.amount || 0} {invoice.currency}
            </div> */}
            <ComponentWithTooltip
              content={downloadTooltip}
              element={
                downloadingId === invoice.orderNumber ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key="loading"
                    className={styles.downloadWrapper}
                  >
                    <LoadingOverlay
                      isVisible={true}
                      position="absolute"
                      overlayBkgColor="transparent"
                      loaderSize="xs"
                    />
                  </motion.div>
                ) : (
                  <IconButton
                    icon="icon-download"
                    type="button"
                    onClick={() => invoice.onClick?.(invoice.invoiceNumber, invoice.orderNumber)}
                    round
                    isTransparent
                    noBorder
                    name="Download invoice"
                    weight="bold"
                  />
                )
              }
            />
          </div>
        </li>
      )
    }

    return null
  }

  // Separate unpaid and paid invoices
  const unpaidInvoices = invoices.filter((i) => i.type === 'unpaid') as TUnpaidInvoice[]
  const paidInvoices = invoices.filter((i) => i.type === 'paid') as TPaidInvoice[]
  const paidByMonth = groupPaidInvoicesByMonth(paidInvoices)
  const monthKeys = Object.keys(paidByMonth)

  const firstFourUnpaid = unpaidInvoices.slice(0, 4)
  const remainingUnpaid = unpaidInvoices.slice(4)

  return (
    <ul className={styles.invoiceList}>
      {loading ? (
        <>
          {[...Array(3)].map((_, i) => (
            <li key={i} className={`${styles.invoiceItem} ${styles.skeleton}`}>
              <div className={styles.leftSide}>
                <div className={`${styles.dateCircle} ${styles.skeletonBox}`} />
                <div>
                  <div className={`${styles.title} ${styles.skeletonBox}`} style={{ width: '120px', height: '16px' }} />
                  <div className={styles.firstRow}>
                    <span className={`${styles.skeletonBox}`} style={{ width: '80px', height: '14px' }} />
                  </div>
                </div>
              </div>
              <div className={styles.rightSide}>
                <div
                  className={`${styles.skeletonBox}`}
                  style={{ width: '5rem', height: '1.875rem', borderRadius: '1rem' }}
                />
                <div className={`${styles.skeletonCircle}`} />
              </div>
            </li>
          ))}
        </>
      ) : (
        <>
          {firstFourUnpaid.map(renderInvoiceItem)}

          {remainingUnpaid.length > 0 && (
            <>
              <ExpandableWrapper open={open}>{remainingUnpaid.map(renderInvoiceItem)}</ExpandableWrapper>
              <Button
                type="button"
                surface="link"
                className={styles.viewMoreBtn}
                onClick={() => setOpen(!open)}
                iconRight={{ icon: open ? 'icon-chevron-up' : 'icon-chevron-down' }}
              >
                {open ? viewLessLabel || 'Visa färre' : viewMoreLabel || 'Visa fler'}
              </Button>
            </>
          )}

          {monthKeys.map((month) => (
            <li key={month} className={styles.monthGroup}>
              <h3 className={cx(styles.monthTitle, 'h4')}>{month}</h3>
              <ul className={styles.monthList}>{paidByMonth[month].map(renderInvoiceItem)}</ul>
            </li>
          ))}
        </>
      )}
    </ul>
  )
}

type DateDisplayProps = {
  dateString?: string | null
  expired?: boolean
}

function DateDisplay({ dateString, expired }: DateDisplayProps) {
  if (!dateString || typeof dateString !== 'string') {
    return <span style={{ color: 'gray' }}>—</span>
  }

  const parts = dateString.trim().split(/\s+/)
  const day = parts[0] ?? ''
  const month = parts[1] ?? ''

  if (!day || !month) {
    return <span style={{ color: 'gray' }}>{dateString}</span>
  }

  return (
    <span className={cx(styles.dateDisplay, { [styles.expired]: expired })}>
      <span className={styles.dateMonth}>{month}</span>
      <span className={styles.dateDay}>{day}</span>
    </span>
  )
}
