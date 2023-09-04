import styles from './create-list-form.module.css'
import cx from 'classnames'
import { FormGroup } from '../../molecules'
import { Button, Icon, InputText, Textarea } from '../../atoms'
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
  comment?: string
  submitLabel: string
  cancelLabel?: string
  offerLinkLabel?: string
  errorMessage?: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onCancel: () => void
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
  comment,
  submitLabel,
  onSubmit,
  onCancel,
  cancelLabel,
  offerLinkLabel,
  errorMessage,
  onNameChange,
  onCommentChange,
  loading
}: ICreateListForm) => {
  return (
    <form className={styles.createListForm} onSubmit={onSubmit}>
      {loading && <LoadingOverlay isVisible={loading} position='absolute' className={styles.overlay} loaderSize='md'></LoadingOverlay>}
      {logo && <Logotype logo={logo} linkComponent={Link} className={styles.logo}/> }
      <h1 className="h3">{title}</h1>
      {description && <p>{description}</p>}
      <FormGroup label={nameLabel} formElementId="name">
        <InputText id="name" value={name} onChange={onNameChange} />
      </FormGroup>
      <FormGroup label={commentLabel} formElementId="comment">
        <Textarea id="comment" value={comment} onChange={onCommentChange} />
      </FormGroup>
      {errorMessage && <div className={cx(styles.errorMessage)}>{errorMessage}</div>}
      <Button type="submit" surface="primary" size="small" fullWidth>
        {submitLabel}
      </Button>
      {cancelLabel && (
        <Button type="button" onClick={onCancel} surface="secondary" size="small" fullWidth>
          {cancelLabel}
        </Button>
      )}
      {offerLinkLabel && (
        <Link size="default" href="#">
          {offerLinkLabel}
        </Link>
      )}
    </form>
  )
}

export { CreateListForm }
