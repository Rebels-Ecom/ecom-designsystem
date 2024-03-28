import cx from 'classnames';
import { IHeading, getHeadingSize } from '../../heading/heading';
import styles from './ghost-heading.module.css';
import { useMemo } from 'react';

type TGhostHeading = Pick<IHeading, 'margin' | 'noMargin' | 'order' >

const GhostHeading = ({ order, margin, noMargin }: TGhostHeading) => {
  if (!order) {
    throw new Error('order must be assigned');
  }
  
  const Tag = getHeadingSize(order);
  
  const marginValue = useMemo(() => {
    if (!margin && margin !== 0) {
      return ''
    }

    if (typeof margin === 'number') {
      return `${margin}rem`
    }

    return margin.map((p) => `${p}rem`).join(' ')
  }, [margin]);
  
  return (
    <Tag
      className={cx(styles.ghostHeading, {[styles.noMargin]: noMargin})}
      children='-'
      style={{ margin: marginValue}}
    />
  );
}

export {
  GhostHeading
}
