import styles from './delivery-form.module.css'
import cx from 'classnames'
import { FormGroup } from '../../molecules'
import { InputText } from '../../atoms'
import { useState } from 'react'

interface ICustomerInfoItem {
  id: string
  value: string
  label: string
  labelHelperText?: string
}

interface ICustomerInfoSummary {
  companyName: string
  contactPerson: string
  address: string
  zipcode: string
  city: string
}

export interface IDeliveryForm {
  expandButtonText: string
  collapseButtonText: string
  customerInfo: Array<ICustomerInfoItem>
  customerInfoSummaryLabel: string
  customerInfoSummary: ICustomerInfoSummary
}

const DeliveryForm = ({
  expandButtonText,
  collapseButtonText,
  customerInfo = [],
  customerInfoSummaryLabel,
  customerInfoSummary
}: IDeliveryForm) => {

  const [isFormExpanded, setFormExpanded] = useState<boolean>(false)

  function toggleExpandForm(){
    setFormExpanded(!isFormExpanded)
  }

  return (
    <div className={styles.deliveryFormWrapper}>
      <div className={styles.contentWrapper}>
      <button id="expand-form-btn" type={'button'} aria-label='expand-form-button' onClick={toggleExpandForm} className={cx(styles.expandButton, 'body')}>{isFormExpanded ? collapseButtonText : expandButtonText}</button>
      { isFormExpanded 
        ? 
        <form className={styles.deliveryForm}>
          {
            customerInfo?.map((infoItem : ICustomerInfoItem)=>(
              <FormGroup key={infoItem.id} label={infoItem.label} helperText={infoItem.labelHelperText ? infoItem.labelHelperText : ''} formElementId={infoItem.id}>
                <InputText id={infoItem.id} value={infoItem.value} readonly iconRight={{icon:'icon-check'}}/>
              </FormGroup>
            ))
          }
        </form>
        : 
        <div>
          <label className={styles.summaryLabel} htmlFor="customerInfoSummary">{customerInfoSummaryLabel}</label>
          <div id="customerInfoSummary" className={styles.customerSummaryBox}>
            <p><b>{customerInfoSummary?.companyName}</b></p>
            <p>{customerInfoSummary?.contactPerson}</p>
            <p>{customerInfoSummary?.address}, {customerInfoSummary?.zipcode}, {customerInfoSummary?.city}</p>
          </div>
        </div> 
      }
      </div>
    </div>
  )
}

export { DeliveryForm }
