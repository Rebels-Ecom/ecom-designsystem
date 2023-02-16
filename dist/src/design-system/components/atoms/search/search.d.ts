import React from 'react';
export interface ISearchNoResult {
    label: string;
    text: React.ReactNode | string;
}
export interface IResult {
    label: string;
    text: string;
    slug: string;
}
export interface ISearch {
    id: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setIsFocused: (isFocused: boolean) => void;
    query: string;
    setQuery: (query: string) => void;
    results: Array<IResult>;
    disabled?: boolean;
    noResult: ISearchNoResult;
    placeholder?: string;
    className?: string;
}
declare function Search({ className, id, isOpen, setIsOpen, query, setQuery, setIsFocused, results, disabled, noResult, placeholder }: ISearch): JSX.Element;
export { Search };
