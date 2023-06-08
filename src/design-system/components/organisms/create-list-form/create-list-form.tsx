import styles from './create-list-form.module.css'
import cx from 'classnames'
import { FormGroup } from '../../molecules'
import { Button, Icon, InputText, Loader, Textarea, UILink } from '../../atoms'
import { LoadingOverlay } from '../../molecules/loading-overlay/loading-overlay'
import { INavigationLogo, Logotype } from '../../molecules/logotype/logotype'

export interface ICreateListForm {
  logo?: INavigationLogo
  linkComponent: any
  title: string
  description?: string
  nameLabel: string
  name?: string
  commentLabel: string
  commentField?: string
  primarySubmitLabel: string
  secondarySubmitLabel?: string
  offerLinkLabel?: string
  errorMessage?: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onCommmentChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  loading?: boolean 
}

const CreateListForm = ({
  logo,
  linkComponent: Link,
  title,
  description,
  nameLabel,
  name,
  commentLabel,
  commentField,
  onSubmit,
  primarySubmitLabel,
  secondarySubmitLabel,
  offerLinkLabel,
  errorMessage,
  onNameChange,
  onCommmentChange,
  loading
}: ICreateListForm) => {
  return (
    <form className={styles.createListForm} onSubmit={onSubmit}>
      {loading && <LoadingOverlay isVisible={loading} position='absolute' className={styles.overlay} loaderSize='md'></LoadingOverlay>}
      {logo && <Logotype logo={logo} linkComponent={Link} className={styles.logoLink}/> }
      <h1 className="h3">{title}</h1>
      {description && <p>{description}</p>}
      <FormGroup label={nameLabel} formElementId="name">
        <InputText id="name" value={name} onChange={onNameChange} />
      </FormGroup>
      <FormGroup label={commentLabel} formElementId="comment">
        <Textarea id="comment" value={commentField} onChange={onCommmentChange} />
      </FormGroup>
      {errorMessage && <div className={cx(styles.errorMessage)}>{errorMessage}</div>}
      <Button type="submit" surface="primary" size="small" fullWidth>
        {primarySubmitLabel}
      </Button>
      {secondarySubmitLabel && (
        <Button type="submit" surface="secondary" size="small" fullWidth>
          {secondarySubmitLabel}
        </Button>
      )}
      {offerLinkLabel && (
        <Link onSurface="transparent" size="default" href="#">
          {offerLinkLabel}
        </Link>
      )}
    </form>
  )
}

export { CreateListForm }
