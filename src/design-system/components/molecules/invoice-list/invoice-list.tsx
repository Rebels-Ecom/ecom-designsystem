import { useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { formatDateToDayMonthDMY } from '../../../../helpers/date-helper'
import { Button, ComponentWithTooltip, ExpandableWrapper, IconButton } from '../../atoms'
import styles from './invoice-list.module.css'
import cx from 'classnames'
import { LoadingOverlay } from '../loading-overlay/loading-overlay'
import { mediaQueryHelper } from '../../layouts'

type BaseInvoice = {
  invoiceNumber: string
  title: string
  currency: string
  dueDate?: string
  amount?: number
}

type TUnpaidInvoice = BaseInvoice & {
  type: 'unpaid'
  expirationDate?: string
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
  downloadUrl?: string
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

const groupPaidInvoicesByMonth = (invoices: TPaidInvoice[]) => {
  return invoices.reduce<Record<string, TPaidInvoice[]>>((acc, invoice) => {
    const date = invoice.dueDate ? new Date(invoice.dueDate) : new Date()
    const monthKey = date.toLocaleString('default', { month: 'long', year: 'numeric' })
    if (!acc[monthKey]) acc[monthKey] = []
    acc[monthKey].push(invoice)
    return acc
  }, {})
}

const skeletonTitleStyle = { width: '120px', height: '16px' }
const skeletonSubtitleStyle = { width: '80px', height: '14px' }
const skeletonAmountStyle = { width: '5rem', height: '1.875rem', borderRadius: '1rem' }

export function InvoiceList({
  invoices = [],
  loading,
  downloadTooltip,
  downloadingId,
  viewLessLabel,
  viewMoreLabel,
}: IInvoiceList) {
  const { isMobile } = mediaQueryHelper()
  const [open, setOpen] = useState(false)
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})

  const toggleOpen = useCallback((key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const unpaidInvoices = useMemo(() => invoices.filter((i) => i.type === 'unpaid') as TUnpaidInvoice[], [invoices])
  const paidInvoices = useMemo(() => invoices.filter((i) => i.type === 'paid') as TPaidInvoice[], [invoices])
  const paidByMonth = useMemo(() => groupPaidInvoicesByMonth(paidInvoices), [paidInvoices])
  const monthKeys = useMemo(() => Object.keys(paidByMonth), [paidByMonth])

  const firstFourUnpaid = unpaidInvoices.slice(0, 4)
  const remainingUnpaid = unpaidInvoices.slice(4)

  const renderInvoiceItem = useCallback(
    (invoice: TUnpaidInvoice | TPaidInvoice) => {
      const key = invoice.type === 'unpaid' ? invoice.invoiceNumber : invoice.orderNumber
      const isOpen = !!openMap[key]

      if (invoice.type === 'unpaid') {
        return (
          <li key={invoice.invoiceNumber} className={cx(styles.invoiceItem, styles.unpaid)} role="listitem">
            <DateDisplay
              expired={invoice.expired}
              dateString={invoice.dueDate ? formatDateToDayMonthDMY(invoice.dueDate) : '-'}
            />
            <div className={styles.content}>
              <div className={styles.firstRow}>
                <div className={styles.titleWrapper}>
                  <span className={styles.title}>{invoice.title}</span>
                  <IconButton
                    type="button"
                    onClick={() => toggleOpen(key)}
                    size="medium"
                    className={styles.toggleButton}
                    icon={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}
                    name={isOpen ? 'Collapse details' : 'Expand details'}
                    isTransparent
                    noBorder
                  />
                </div>
                <div className={styles.extras}>
                  {!isMobile && (
                    <>
                      {invoice.creditLabel && (
                        <div className={cx(styles.amount, styles.credit)}>{invoice.creditLabel}</div>
                      )}
                      <div className={styles.amount}>
                        {invoice.amount || 0} {invoice.currency}
                      </div>
                    </>
                  )}
                  <div className={styles.actions}>
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
                </div>
              </div>
              <ExpandableWrapper open={isOpen}>
                <div className={styles.expandedFirstRow}>
                  {invoice.amount !== undefined && (
                    <span className={styles.firstRowText}>
                      {invoice.amountLabel}: {invoice.amount} {invoice.currency}
                    </span>
                  )}
                  {invoice.paid !== undefined && <span className={styles.firstRowText}>{invoice.paid}</span>}
                  {invoice.remaining !== undefined && <span className={styles.firstRowText}>{invoice.remaining}</span>}
                  {invoice.expirationDate && (
                    <div className={cx(styles.firstRowText, styles.expirationDateText)}>{invoice.expirationDate}</div>
                  )}
                </div>
              </ExpandableWrapper>
              {invoice.expireIn && <div className={styles.expireInText}>{invoice.expireIn}</div>}
              <div className={styles.secondRow}>
                {isMobile && (
                  <>
                    {invoice.creditLabel && (
                      <div className={cx(styles.amount, styles.credit)}>{invoice.creditLabel}</div>
                    )}
                    <div className={styles.amount}>
                      {invoice.amount || 0} {invoice.currency}
                    </div>
                  </>
                )}
              </div>
            </div>
          </li>
        )
      }

      if (invoice.type === 'paid') {
        return (
          <li key={invoice.orderNumber} className={styles.invoiceItem} role="listitem">
            <DateDisplay dateString={invoice.dueDate ? formatDateToDayMonthDMY(invoice.dueDate) : '-'} />
            <div className={styles.content}>
              <div className={styles.firstRow}>
                <span className={styles.title}>{invoice.title}</span>
                <div className={styles.extras}>
                  {!isMobile && (
                    <>
                      {invoice.tooltipLabel && (
                        <div className={cx(styles.amount, styles.credit)}>{invoice.tooltipLabel}</div>
                      )}
                      {(invoice.amount || 0) > 0 && (
                        <div className={cx(styles.amount, styles.paidAmount)}>
                          {invoice.amount} {invoice.currency}
                        </div>
                      )}
                    </>
                  )}

                  <div className={styles.actions}>
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
                        ) : invoice.downloadUrl ? (
                          <IconButton
                            icon="icon-download"
                            type="link"
                            linkUrl={invoice.downloadUrl}
                            isExternal
                            target="_self"
                            download
                            className={styles.iconLink}
                            linkComponent="a"
                            round
                            isTransparent
                            noBorder
                            name="Download invoice"
                            weight="bold"
                          />
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
                </div>
              </div>
              <div className={styles.expandedFirstRow}>
                {invoice.invoiceNumber && <span className={styles.firstRowText}>{invoice.invoiceNumber}</span>}
                {invoice.customOrderNumber && <span className={styles.firstRowText}>{invoice.customOrderNumber}</span>}
              </div>
              <div className={styles.secondRow}>
                {isMobile && (
                  <>
                    {invoice.tooltipLabel && (
                      <div className={cx(styles.amount, styles.credit)}>{invoice.tooltipLabel}</div>
                    )}
                    {(invoice.amount || 0) > 0 && (
                      <div className={cx(styles.amount, styles.paidAmount)}>
                        {invoice.amount} {invoice.currency}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </li>
        )
      }

      return null
    },
    [downloadTooltip, downloadingId, isMobile, openMap, toggleOpen]
  )

  return (
    <ul className={styles.invoiceList} role="list">
      {loading ? (
        <>
          <div role="status" aria-live="polite" className={styles.hiddenLoader}>
            Loading invoices…
          </div>
          {[...Array(3)].map((_, i) => (
            <li key={i} className={cx(styles.invoiceItem, styles.skeleton, styles.unpaid)} role="listitem">
              <div className={`${styles.dateDisplay} ${styles.skeletonBox}`} style={{ minHeight: '3.5rem' }} />
              <div className={styles.content}>
                <div className={styles.firstRow}>
                  <div className={styles.skeletonCol}>
                    <div className={`${styles.title} ${styles.skeletonBox}`} style={skeletonTitleStyle} />
                    <span className={`${styles.skeletonBox}`} style={skeletonSubtitleStyle} />
                  </div>
                  <div className={styles.extras}>
                    {!isMobile && <div className={`${styles.skeletonBox}`} style={skeletonAmountStyle} />}
                    {isMobile && <div className={`${styles.skeletonCircle}`} style={{ marginRight: '0.5rem' }} />}
                    <div className={`${styles.skeletonCircle}`} />
                  </div>
                </div>
                {isMobile && (
                  <div className={styles.secondRow} style={{ marginTop: '0.5rem' }}>
                    <div className={`${styles.skeletonBox}`} style={skeletonAmountStyle} />
                  </div>
                )}
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
            <li key={month} className={styles.monthGroup} role="listitem">
              <h3 className={cx(styles.monthTitle, 'h4')}>{month}</h3>
              <ul className={styles.monthList} role="list">
                {paidByMonth[month].map(renderInvoiceItem)}
              </ul>
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
    <span
      className={cx(styles.dateDisplay, { [styles.expired]: expired })}
      aria-label={`Due date: ${dateString}${expired ? ', expired' : ''}`}
    >
      <span className={styles.dateMonth}>{month}</span>
      <span className={styles.dateDay}>{day}</span>
    </span>
  )
}
