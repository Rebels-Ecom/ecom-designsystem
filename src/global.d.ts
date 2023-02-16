import 'react';

type fetchPriority = 'high' | 'low' | 'auto'

declare module '*.module.css';
declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority? : fetchPriority
  }
}