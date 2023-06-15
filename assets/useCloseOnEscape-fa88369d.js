import{r as s}from"./index-6f814c40.js";function d({onClose:o,isOpen:t,disableClose:r}){s.useEffect(()=>{if(!(typeof document>"u"||r))return t?document.addEventListener("keydown",e):document.removeEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[t]);const e=n=>{(n==null?void 0:n.key)==="Escape"&&o()}}export{d as u};
//# sourceMappingURL=useCloseOnEscape-fa88369d.js.map
