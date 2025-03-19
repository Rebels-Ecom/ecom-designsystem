import { Checkbox, Icon, Placeholder } from '../../atoms'
import styles from './purchase-list.module.css'

export type TPurchaseListItem = {
  id: string
  name: string
  linkUrl: string
  noOfProducts: string
  updated?: string
  shared?: boolean
  removing?: boolean
}

export type TPurchaseList = {
  items: Array<TPurchaseListItem>
  selectedItems: TPurchaseListItem[]
  onSelectChange: (item: TPurchaseListItem) => void
  linkComponent: any
  loading?: boolean
}

const PurchaseList = ({ items, selectedItems, onSelectChange, linkComponent: Link, loading }: TPurchaseList) => {
  const handleCheckboxChange = (item: TPurchaseListItem) => {
    onSelectChange(item)
  }

  return (
    <ul className={styles.purchaseList}>
      {items?.map((item) => {
        const checked = !!selectedItems.find((s) => s.id === item.id)
        const deleting = checked && item.removing

        return (
          <li key={item.name} className={styles.item}>
            <div className={styles.content}>
              <div className={styles.row}>
                {deleting ? (
                  <Placeholder type="heading" />
                ) : (
                  <Link to={item.linkUrl} aria-label={`Navigate to ${item.name}`} className={styles.linkWrapper}>
                    <h4 className={styles.name}>{item.name}</h4>
                  </Link>
                )}
                {item.shared && <Icon icon="icon-share-2" />}
              </div>
              <div className={styles.row}>{deleting ? <Placeholder type="p_short" /> : <p className={styles.label}>{item.noOfProducts}</p>}</div>
              <div className={styles.row}>
                {deleting ? <Placeholder type="p_short" /> : <>{item.updated && <span className={styles.updated}>{item.updated}</span>}</>}
              </div>
            </div>
            {!deleting && (
              <>
                <Checkbox id={item.id} className={styles.checkbox} name={item.name} checked={checked} onChange={() => handleCheckboxChange(item)} />
                <Link to={item.linkUrl} aria-label={`Navigate to ${item.name}`} className={styles.linkWrapper}>
                  <Icon icon="icon-chevrons-right" />
                </Link>
              </>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export { PurchaseList }
