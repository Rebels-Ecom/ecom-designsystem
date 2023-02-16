import React from 'react';
import { IPicture } from '../../atoms/picture/picture';
import { TLink } from '../../../../helpers/link-helper';
export interface IMoviePosterList {
    heading?: string;
    preamble?: React.ReactNode | string;
    list: Array<IMoviePosterListItem>;
    linkComponent?: any;
    listSessionId?: string;
}
export interface IMoviePosterListItem {
    image: IPicture;
    heading?: string;
    preamble?: string;
    link?: TLink;
}
declare const MoviePosterList: ({ heading, preamble, list, linkComponent: Link, listSessionId }: IMoviePosterList) => JSX.Element;
export { MoviePosterList };
