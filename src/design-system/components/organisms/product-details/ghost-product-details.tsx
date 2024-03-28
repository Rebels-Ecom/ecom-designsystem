import cx from 'classnames';
import styles from './product-details.module.css';
import { GhostHeading, GhostImage, GhostText } from '../../atoms/ghost-components';
import { FlexContainer } from '../../layouts';
import { Placeholder } from '../../atoms';

const GhostProductDetails = () => {
  return (
    <div className={cx(styles.productDetails)}>
      <FlexContainer gap={1}>
        <FlexContainer flex='1 1 50%' justifyContent='flex-end' className={cx(styles.content, styles.leftContent)}>
          <div className={styles.loadingBars} />
          <GhostImage width={16} height={26} />
        </FlexContainer>
        <FlexContainer flexDirection='column' flex='1 1 50%' className={cx(styles.content, styles.rightContent)}>
          <GhostHeading order={3} margin={[2, 0, 0]} />
          <GhostText />
          <GhostText />
        </FlexContainer>
      </FlexContainer>
    </div>
  )
}

export {
  GhostProductDetails
}
