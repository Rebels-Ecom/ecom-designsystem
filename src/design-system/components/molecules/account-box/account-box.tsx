import styles from './account-box.module.css'
import { Button } from '../../atoms'
import { IButton } from '../../atoms/button/button'
import cx from 'classnames';

export interface IAccountBox {
  companyName: string
  accountNumber: string
  contactPerson?: string
  addressLabel?: string;
  addressTitle?: string;
  address?: string
  zipcode?: string
  city?: string
  chooseAccountBtn: IButton
  onClickChooseAccount: CallableFunction
}

function AccountBox({
  companyName,
  accountNumber,
  contactPerson,
  addressLabel,
  addressTitle,
  address,
  zipcode,
  city,
  chooseAccountBtn,
  onClickChooseAccount
}: IAccountBox) {
  const handleClick = () => {
    onClickChooseAccount();
  }
  return (
    <div className={styles.accountBox}>
      <div>
        <p className={styles.companyName}>
          <b>{companyName}</b>
        </p>
        <p className={styles.accountNumber}>
          {accountNumber}
        </p>
        {contactPerson && <p>{contactPerson}</p>}
        {addressLabel && <p className={styles.addressLabel}><b>{addressLabel}</b></p>}
        {addressTitle && <p className={styles.addressTitle}>{addressTitle}</p>}
        <p className={cx({[styles.address]: !!addressTitle })}>
          {address && (zipcode || city ? `${address},` : address)} {zipcode && (city ? `${zipcode},` : zipcode)} {city && city}
        </p>
      </div>
      <Button {...chooseAccountBtn} type={'button'} surface={'primary'} onClick={handleClick}></Button>
    </div>
  )
}

export { AccountBox }
