import{r as t}from"./index-6f814c40.js";import{S as n}from"./search-2a2ce271.js";import{a as b}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./icon-99d60fba.js";import"./index-74f03c09.js";import"./input-text-6ee421c5.js";import"./form-helper-ce65ae5e.js";import"./button-a33592e7.js";import"./button.module-3bdf7fd3.js";import"./loader-6dca2ea3.js";import"./useOnClickOutside-47d3035a.js";import"./useCloseOnEscape-fa88369d.js";const F={title:"Design System/Atoms/Search",component:n},S={render:({...e})=>{const[d,u]=t.useState(e.isOpen),[v,p]=t.useState(!1),[s,c]=t.useState(e.query),[m,h]=t.useState([]);return t.useEffect(()=>{let k=new RegExp(s.toLowerCase(),"i");h(g.filter(a=>s&&a.label&&k.test(a.label.toLowerCase())))},[s]),b(n,{id:e.id,query:s,setQuery:c,results:m,disabled:e.disabled,isOpen:d,setIsOpen:u,setIsFocused:p,noResult:e.noResult,placeholder:e.placeholder})}},g=[{id:"NCG626689",label:"Ekoöl på riktigt",text:"Testa vår ekoöl",slug:"eko-ol"},{id:"NCG691725",label:"Loka årets vinnare",text:"Loka årets vinnare i sustainable brand index",slug:"loka-arets-vinnare"},{id:"NCG383172",label:"Spendrups hållbarhetsredovisning",text:"Läsa om Spendrups hållbarhetsredovisning",slug:"spendrups-hallbarhetsredovisning"},{id:"NCG521824",label:"Briska",text:"Briska",slug:"briska"},{id:"NCG583714",label:"Spring wine and spirits",text:"Vårens nya smak",slug:"spring-wine-spirits"},{id:"NCG769205",label:"Det här är vi",text:"Familjeföretaget med öl i blodet",slug:"om-oss"},{id:"NCG880524",label:"Kiviks musteri",text:"Prova nya cider",slug:"kiviks-cider"},{id:"NCG153793",label:"Här är nya Loka likes favorites",text:"loka likes favorites - smakar glass och kokos ",slug:"loka-favorites"},{id:"NCG660063",label:"Övrig läsk och vatten",text:"Övrig läsk och vatten",slug:"lask-och-vatten"}],r={...S,args:{id:"SearchId",results:[],isOpen:!1,disabled:!1,query:"",noResult:{label:"Your search returned no results",text:"Thank you, come again"},placeholder:"Placeholder text"}};var l,o,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const I=["SearchStory"];export{r as SearchStory,I as __namedExportsOrder,F as default};
//# sourceMappingURL=search.stories-f4e30410.js.map
