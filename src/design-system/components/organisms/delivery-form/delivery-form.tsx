import styles from './delivery-form.module.css'
import cx from 'classnames'
import { FormGroup } from '../../molecules'
import { Button, Icon, InputText, Textarea, UILink } from '../../atoms'
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
  zipcode?: number
  customerNumberLabel: string
  customerNumber?: number
  contactPersonLabel: string
  contactPersonLabelHelperText?: string
  contactPerson?: string
  emailLabel: string
  emailLabelHelperText?: string
  email?: string
  phoneLabel: string
  phone: number
  errorMessage?: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onRestaurantNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onZipcodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onCustomerNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onContactPersonChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onPhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
  customerNumberLabel,
  customerNumber,
  contactPersonLabel,
  contactPersonLabelHelperText,
  contactPerson,
  emailLabel,
  emailLabelHelperText,
  email,
  phoneLabel,
  phone,
  errorMessage,
  onSubmit,
  onRestaurantNameChange,
  onCityChange,
  onAddressChange,
  onZipcodeChange,
  onCustomerNumberChange,
  onContactPersonChange,
  onEmailChange,
  onPhoneChange
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
        <form className={styles.deliveryForm} onSubmit={onSubmit}>
          <FormGroup label={restaurantNameLabel} formElementId="restaurantName">
            <InputText id="restaurantName" value={restaurantName} autocomplete="organization" onChange={onRestaurantNameChange} />
          </FormGroup>
          <FormGroup label={cityLabel} formElementId="city">
            <InputText id="city" value={city} autocomplete="home city" onChange={onCityChange} />
          </FormGroup>
          <FormGroup label={addressLabel} formElementId="address">
            <InputText id="address" value={address} autocomplete="street-address" onChange={onAddressChange} />
          </FormGroup>
          <FormGroup label={zipcodeLabel} formElementId="zipcode">
            <InputText id="zipcode" type={'number'} value={zipcode?.toString()} autocomplete="postal-code" onChange={onZipcodeChange} />
          </FormGroup>
          <FormGroup label={customerNumberLabel} formElementId="customerNumber">
            <InputText id="customerNumber" type={'number'} value={customerNumber?.toString()} onChange={onCustomerNumberChange} />
          </FormGroup>
          <FormGroup label={contactPersonLabel} helperText={contactPersonLabelHelperText} formElementId="contactPerson">
            <InputText id="contactPerson" value={contactPerson} autocomplete="name" onChange={onContactPersonChange} />
          </FormGroup>
          <FormGroup label={emailLabel} helperText={emailLabelHelperText} formElementId="email">
            <InputText id="email" type="email" value={email} autocomplete="email" onChange={onEmailChange} />
          </FormGroup>
          <FormGroup label={phoneLabel} formElementId="phone">
            <InputText id="phone" type="tel" value={phone.toString()} autocomplete="tel" onChange={onPhoneChange} />
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
