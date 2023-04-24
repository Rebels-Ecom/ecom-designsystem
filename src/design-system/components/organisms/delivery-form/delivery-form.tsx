import styles from './delivery-form.module.css'
import cx from 'classnames'
import { FormGroup } from '../../molecules'
import { InputText } from '../../atoms'
import { useState } from 'react'

export interface IDeliveryForm {
  title: string
  expandButtonText: string
  collapseButtonText: string
  customerInfoLabel: string
  customerInfoSummary?: string
  restaurantNameLabel: string
  restaurantName?: string
  cityLabel: string
  city?: string
  addressLabel: string
  address?: string
  zipcodeLabel: string
  zipcode?: string
  customerIdLabel: string
  customerId?: string
  contactPersonLabel: string
  contactPersonLabelHelperText?: string
  contactPerson?: string
  emailLabel: string
  emailLabelHelperText?: string
  email?: string
  phoneLabel: string
  phone: string
  errorMessage?: string
}

const DeliveryForm = ({
  title,
  expandButtonText,
  collapseButtonText,
  customerInfoLabel,
  customerInfoSummary,
  restaurantNameLabel,
  restaurantName,
  cityLabel,
  city,
  addressLabel,
  address,
  zipcodeLabel,
  zipcode,
  customerIdLabel,
  customerId,
  contactPersonLabel,
  contactPersonLabelHelperText,
  contactPerson,
  emailLabel,
  emailLabelHelperText,
  email,
  phoneLabel,
  phone,
  errorMessage,
}: IDeliveryForm) => {

  const [isFormExpanded, setFormExpanded] = useState<boolean>(false)

  function toggleExpandForm(){
    setFormExpanded(!isFormExpanded)
  }

  return (
    <div className={styles.deliveryFormWrapper}>
      <h1 className="h3">{title}</h1>
      <div className={styles.contentWrapper}>
      <button id="expand-form-btn" type={'button'} aria-label='expand-form-button' onClick={toggleExpandForm} className={cx(styles.expandButton, 'body')}>{isFormExpanded ? collapseButtonText : expandButtonText}</button>
      { isFormExpanded 
        ? 
        <form className={styles.deliveryForm}>
          <FormGroup label={restaurantNameLabel} formElementId="restaurantName">
            <InputText id="restaurantName" value={restaurantName} autocomplete="organization" />
          </FormGroup>
          <FormGroup label={cityLabel} formElementId="city">
            <InputText id="city" value={city} autocomplete="home city" />
          </FormGroup>
          <FormGroup label={addressLabel} formElementId="address">
            <InputText id="address" value={address} autocomplete="street-address" />
          </FormGroup>
          <FormGroup label={zipcodeLabel} formElementId="zipcode">
            <InputText id="zipcode" value={zipcode} autocomplete="postal-code" />
          </FormGroup>
          <FormGroup label={customerIdLabel} formElementId="customerNumber">
            <InputText id="customerNumber" value={customerId}/>
          </FormGroup>
          <FormGroup label={contactPersonLabel} helperText={contactPersonLabelHelperText} formElementId="contactPerson">
            <InputText id="contactPerson" value={contactPerson} autocomplete="name" />
          </FormGroup>
          <FormGroup label={emailLabel} helperText={emailLabelHelperText} formElementId="email">
            <InputText id="email" type="email" value={email} autocomplete="email" />
          </FormGroup>
          <FormGroup label={phoneLabel} formElementId="phone">
            <InputText id="phone" type="tel" value={phone} autocomplete="tel" />
          </FormGroup>
          {errorMessage && <div className={cx(styles.errorMessage)}>{errorMessage}</div>}
        </form>
        : 
        <>
          <label className={styles.summaryLabel} htmlFor="customerInfoSummary">{customerInfoLabel}</label>
          <div id="customerInfoSummary" dangerouslySetInnerHTML={{ __html: customerInfoSummary ? customerInfoSummary : '' }} className={styles.customerSummaryBox}/>
        </> 
      }
      </div>
    </div>
  )
}

export { DeliveryForm }
