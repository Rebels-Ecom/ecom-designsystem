import { ReactElement } from 'react';
import cx from 'classnames';
import styles from './pagination.module.css';
import { Icon } from '../../atoms';
import { mediaQueryHelper } from '../../layouts';

type TPagination = {
  itemsCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
  scrollToTopEl: ReactElement;
}

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
  onPreviousClick,
  onNextClick,
  scrollToTopEl
}: TPagination) => {
  const { isMobile } = mediaQueryHelper();
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = [];
  const maxVisiblePages = isMobile ? 3 : 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
  }

  const handlePageChange = (page: number) => () => {
    onPageChange(page);
  };

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        <button
          type='button'
          className={cx(styles.btn, styles.prevBtn)}
          onClick={onPreviousClick}
          name='Go to previous page'
          disabled={currentPage === 1}
        >
          <Icon icon='icon-chevron-left' />
        </button>
        <div className={styles.pages}>
          {startPage > 1 && (
            <>
              <button
                type='button'
                className={cx(styles.btn, styles.pageBtn)}
                onClick={handlePageChange(1)}
                name='Go to page 1'
              >
                1
              </button>
              {startPage > 2 && <span className={styles.dots}>...</span>}
            </>
          )}
          {pages.map((page) => (
            <button
              key={page}
              type='button'
              className={cx(styles.btn, styles.pageBtn, {[styles.active]: currentPage === page})}
              onClick={() => onPageChange(page)}
              name={`Go to page ${page}`}
            >
              {page}
            </button>
          ))}
          {endPage < pageCount && (
            <>
              {endPage < pageCount - 1 && <span className={styles.dots}>...</span>}
              <button
                type='button'
                className={cx(styles.btn, styles.pageBtn)}
                onClick={() => onPageChange(pageCount)}
                name={`Go to page ${pageCount}`}
              >
                {pageCount}
              </button>
            </>
          )}
        </div>
        <button
          className={cx(styles.btn, styles.prevBtn)}
          onClick={onNextClick}
          name='Go to next page'
          disabled={currentPage === pageCount}
        >
          <Icon icon='icon-chevron-right' />
        </button>
      </div>
      {scrollToTopEl && (
        <div className={styles.scrollToTop}>
          {scrollToTopEl}
        </div>
      )}
    </div>
  );
};

export {
  Pagination
}
