import { ContentWrapper, mediaQueryHelper } from "../../layouts";
import { ArticleCard } from "../../molecules";
import { TArticle } from "../../molecules/article-card/article-card";
import { Carousel, CarouselItem } from "../carousel/carousel";
import styles from './article-list.module.css';
import cx from 'classnames';

export interface IArticleList {
  articles: Array<TArticle>;
  title?: string;
  swipe?: boolean;
}

const ArticleList = ({ articles, title, swipe }: IArticleList) => {
  const { isMobile } = mediaQueryHelper();

  const extractContent = (s: string) => {
    if (typeof document === 'undefined') {
      return;
    }

    const span = document?.createElement('span');
  
    if (span) {
      span.innerHTML = s;
      return span.textContent || span.innerText;
    } else {
      return s;
    }
  };
  
  const formatText = (t?: string, maxChar?: number ) => {
    if (!t) {
      return;
    }

    const extractedRichTextValue = extractContent(t);
    const formattedText = maxChar && (extractedRichTextValue?.length ?? 0) > maxChar ? extractedRichTextValue?.substring(0, maxChar).concat('...') : extractedRichTextValue;

    return formattedText;
  }

  const articlesToRender = articles.map((article, i) => {
    const textToDisplay = formatText(article.text, article.maxChar);
    return (
      <ArticleCard
        key={i}
        {...article}
        text={textToDisplay}
        type={articles.length > 3 ? 'small' : i % 2 == 0 ? 'small' : 'large'}
        equalHeights={articles.length > 3}
        fullWidth={articles.length === 1}
      />
    )
  });
  
  const carouselArticlesToRender = articles.map((article, i) => {
    const textToDisplay = formatText(article.text, article.maxChar);
    return (
      <CarouselItem key={i} marginBottom={isMobile ? '0' : '2rem'}>
        <ArticleCard
          {...article}
          text={textToDisplay}
          type={articles.length > 3 ? 'small' : i % 2 == 0 ? 'small' : 'large'}
          equalHeights={articles.length > 3}
          fullWidth={articles.length === 1}
          asCarouselItem
        />
      </CarouselItem>
    )
  });

  return (
    <div className={styles.articleList}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {isMobile ? (
        <>
          {swipe ? (
            <Carousel offsetArrows padding='2rem'>
              {carouselArticlesToRender}
            </Carousel>
          ) : (
            <ContentWrapper>
              <div
                className={cx(styles.articles, 
                  {[styles.equalHeights]: articles.length > 3}
                )}
              >
                {articlesToRender}
              </div>
            </ContentWrapper>
          )}
        </>
      ) : (
        <ContentWrapper>
          {(swipe && articles.length > 3) ? (
            <Carousel
              offsetArrows
              breakpoints={{
                lg: {
                  perPage: 4,
                  perMove: 4,
                },
                md: {
                  perPage: 2,
                  perMove: 2
                },
              }}
            >
              {carouselArticlesToRender}
            </Carousel>
          ) : (
            <div className={styles.articles}>
              {articlesToRender}
            </div>
          )}
        </ContentWrapper>
      )}
    </div>
  )
}

export { ArticleList }