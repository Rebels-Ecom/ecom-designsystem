import{c as o}from"./jsx-runtime-03333307.js";function g(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var H=g,j=typeof o=="object"&&o&&o.Object===Object&&o,y=j,v=y,S=typeof self=="object"&&self&&self.Object===Object&&self,T=v||S||Function("return this")(),O=T,m=O,u=m.Symbol,b=u,a=b,c=Object.prototype,d=c.hasOwnProperty,p=c.toString,e=a?a.toStringTag:void 0;function $(t){var r=d.call(t,e),s=t[e];try{t[e]=void 0;var f=!0}catch{}var l=p.call(t);return f&&(r?t[e]=s:delete t[e]),l}var _=$,G=Object.prototype,w=G.toString;function h(t){return w.call(t)}var P=h,n=b,k=_,L=P,R="[object Null]",x="[object Undefined]",i=n?n.toStringTag:void 0;function F(t){return t==null?t===void 0?x:R:i&&i in Object(t)?k(t):L(t)}var N=F;function U(t){return t!=null&&typeof t=="object"}var q=U,z=N,A=q,B="[object Symbol]";function C(t){return typeof t=="symbol"||A(t)&&z(t)==B}var I=C;export{O as _,I as a,N as b,q as c,b as d,y as e,H as i};