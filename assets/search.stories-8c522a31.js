import{r as t,j as b}from"./jsx-runtime-03333307.js";import{S as n}from"./search-10d58d1e.js";import"./icon-e3522fc5.js";import"./index-09749a66.js";import"./input-text-6778a0ec.js";import"./form-helper-af1dc92c.js";import"./button-1a287b34.js";import"./button.module-16a60bae.js";import"./loader-5c06d14e.js";import"./useOnClickOutside-9d2c35bb.js";import"./useCloseOnEscape-f124367e.js";const w={title:"Design System/Atoms/Search",component:n},S={render:({...e})=>{const[d,u]=t.useState(e.isOpen),[x,c]=t.useState(!1),[s,p]=t.useState(e.query),[m,h]=t.useState([]);return t.useEffect(()=>{let k=new RegExp(s.toLowerCase(),"i");h(g.filter(a=>s&&a.label&&k.test(a.label.toLowerCase())))},[s]),b.jsx(n,{id:e.id,query:s,setQuery:p,results:m,disabled:e.disabled,isOpen:d,setIsOpen:u,setIsFocused:c,noResult:e.noResult,placeholder:e.placeholder})}},g=[{id:"NCG626689",label:"Ekoöl på riktigt",text:"Testa vår ekoöl",slug:"eko-ol"},{id:"NCG691725",label:"Loka årets vinnare",text:"Loka årets vinnare i sustainable brand index",slug:"loka-arets-vinnare"},{id:"NCG383172",label:"Spendrups hållbarhetsredovisning",text:"Läsa om Spendrups hållbarhetsredovisning",slug:"spendrups-hallbarhetsredovisning"},{id:"NCG521824",label:"Briska",text:"Briska",slug:"briska"},{id:"NCG583714",label:"Spring wine and spirits",text:"Vårens nya smak",slug:"spring-wine-spirits"},{id:"NCG769205",label:"Det här är vi",text:"Familjeföretaget med öl i blodet",slug:"om-oss"},{id:"NCG880524",label:"Kiviks musteri",text:"Prova nya cider",slug:"kiviks-cider"},{id:"NCG153793",label:"Här är nya Loka likes favorites",text:"loka likes favorites - smakar glass och kokos ",slug:"loka-favorites"},{id:"NCG660063",label:"Övrig läsk och vatten",text:"Övrig läsk och vatten",slug:"lask-och-vatten"}],r={...S,args:{id:"SearchId",results:[],isOpen:!1,disabled:!1,query:"",noResult:{label:"Your search returned no results",text:"Thank you, come again"},placeholder:"Placeholder text"}};var l,o,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...SearchStoryTemplate,
  args: {
    id: 'SearchId',
    results: [],
    isOpen: false,
    disabled: false,
    query: '',
    noResult: {
      label: 'Your search returned no results',
      text: 'Thank you, come again'
    },
    placeholder: 'Placeholder text'
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const j=["SearchStory"];export{r as SearchStory,j as __namedExportsOrder,w as default};