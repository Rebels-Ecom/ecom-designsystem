import{r as l,a as n,j as e}from"./jsx-runtime-a3a6c0b8.js";import{I as b}from"./icon-5fefd509.js";import{I as C}from"./input-text-5c36019f.js";import{B as q}from"./button-97f3af74.js";import{c as B}from"./index-a587463d.js";import{u as V}from"./useOnClickOutside-338168d6.js";import{u as k}from"./useCloseOnEscape-c2f46cc9.js";const L="_search_tngsh_1",S="_searchBar_tngsh_5",j="_searchInput_tngsh_45",E="_clearButton_tngsh_49",T="_searchResults_tngsh_60",$="_searchResultLink_tngsh_85",w="_active_tngsh_92",z="_searchResultItem_tngsh_97",W="_serchResultItemLabel_tngsh_102",a={search:L,searchBar:S,searchInput:j,clearButton:E,searchResults:T,searchResultLink:$,active:w,searchResultItem:z,serchResultItemLabel:W};function R({className:m,id:c,isOpen:u,setIsOpen:s,query:o,setQuery:h,setIsFocused:i,results:p,disabled:g,noResult:d,placeholder:y}){const _=l.useRef(null),t=l.useRef(null),f=l.useCallback(()=>(s(!1),(t==null?void 0:t.current)&&t.current.blur()),[s]);l.useCallback(()=>{s(!0),i(!0)},[s,i]);const I=l.useCallback(()=>{i(!1)},[i]),x=l.useCallback(r=>{u||s(!0),h(r.target.value)},[u,s,h]);function N(){return h(""),(t==null?void 0:t.current)&&t.current.focus()}return V({ref:_,onClose:f}),k({onClose:f,isOpen:u}),n("div",{ref:_,className:B(a.search,m),children:[n("div",{className:a.searchBar,children:[e(q,{type:"button",surface:"tertiary",size:"x-small",children:e(b,{icon:"icon-search"})}),e(C,{ref:t,type:"text",id:c,onChange:x,value:o,onBlur:I,other:{autoComplete:"off"},disabled:g,placeholder:y,wrapperClassName:a.searchInput}),o&&e("button",{onClick:N,tabIndex:-1,type:"button",className:a.clearButton,children:e(b,{icon:"icon-x",className:"text-icon"})})]}),u&&o&&e("div",{className:a.searchResults,children:n("ul",{"aria-labelledby":c,children:[p.map((r,v)=>e("li",{children:n("a",{href:r.slug,className:a.searchResultLink,children:[e("span",{className:a.serchResultItemLabel,children:r.label}),r.text&&e("span",{children:" - "}),e("span",{className:a.serchResultItemText,children:r.text})]})},`${c}_${v}`)),p.length===0&&o.length?e("li",{children:n("div",{className:a.serchResultItem,children:[e("span",{className:a.serchResultItemLabel,children:d.label}),d.text&&e("span",{children:"-"}),e("span",{className:a.serchResultItemText,children:d.text})]})},`search_no_result_${c}`):null]})})]})}try{R.displayName="Search",R.__docgenInfo={description:"",displayName:"Search",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(isOpen: boolean) => void"}},setIsFocused:{defaultValue:null,description:"",name:"setIsFocused",required:!0,type:{name:"(isFocused: boolean) => void"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"(query: string) => void"}},results:{defaultValue:null,description:"",name:"results",required:!0,type:{name:"IResult[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},noResult:{defaultValue:null,description:"",name:"noResult",required:!0,type:{name:"ISearchNoResult"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{R as S};