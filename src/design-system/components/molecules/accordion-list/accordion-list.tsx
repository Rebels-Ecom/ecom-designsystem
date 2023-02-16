import { Accordion, IAccordion } from '../../atoms/accordion/accordion'
import styles from './accordion-list.module.css'

export interface IAccordionList {
  list: Array<IAccordion>
  onAccordionBtnClick: CallableFunction
}

const AccordionList = ({ list = [], onAccordionBtnClick }: IAccordionList) => {
  return (
    <ul className={styles.list}>
      {list.map((li: IAccordion) => (
        <li key={li.id} className={styles.listItem}>
          <Accordion {...li} onAccordionBtnClick={onAccordionBtnClick} />
        </li>
      ))}
    </ul>
  )
}

export { AccordionList }
