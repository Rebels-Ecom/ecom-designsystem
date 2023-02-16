/// <reference types="react" />
import { IBlogCard } from '../../molecules/blog-card/blog-card';
export interface IBlogCardList {
    title?: string;
    blogCards: Array<IBlogCard>;
}
declare const BlogCardList: ({ title, blogCards }: IBlogCardList) => JSX.Element | null;
export { BlogCardList };
