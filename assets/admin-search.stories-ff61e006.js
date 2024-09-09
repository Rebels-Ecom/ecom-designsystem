import{r as l,j as e}from"./jsx-runtime-03333307.js";import{I as _}from"./icon-cf6ebd85.js";import{I as X}from"./input-text-0d02e73b.js";import{c as v}from"./index-09749a66.js";import{L as q}from"./loader-5c06d14e.js";import{u as w}from"./useOnClickOutside-9d2c35bb.js";import{u as F}from"./useCloseOnEscape-f124367e.js";const W="_search_bhj1g_1",$="_searchBar_bhj1g_12",Y="_searchInput_bhj1g_38",H="_searchIconWrapper_bhj1g_42",z="_searchIcon_bhj1g_42",J="_clearBtn_bhj1g_61",V="_searchResultsContainer_bhj1g_73",K="_resultListItem_bhj1g_132",Q="_resultListItemBtn_bhj1g_142",Z="_serchResultItemText_bhj1g_158",ee="_noResultListItem_bhj1g_173",n={search:W,searchBar:$,searchInput:Y,searchIconWrapper:H,searchIcon:z,clearBtn:J,searchResultsContainer:V,resultListItem:K,resultListItemBtn:Q,serchResultItemText:Z,noResultListItem:ee};function N({className:a,id:m,isLoading:I=!1,isOpen:r,setIsOpen:i,query:u,setQuery:p,results:y,onClickSearchResult:o,disabled:s,noResultText:C,placeholder:D,onFocus:P}){const g=l.useRef(null),t=l.useRef(null),R=l.useCallback(()=>(i(!1),(t==null?void 0:t.current)&&t.current.blur()),[i]),M=l.useCallback(c=>{r||i(!0),p(c.target.value)},[r,i,p]);function f(){return p(""),(t==null?void 0:t.current)&&t.current.focus()}function U(c){o(c),R(),f()}return w({ref:g,onClose:R}),F({onClose:R,isOpen:r}),e.jsxs("div",{ref:g,className:v(n.search,a),children:[e.jsxs("div",{className:n.searchBar,children:[e.jsx("div",{className:n.searchIconWrapper,children:e.jsx(_,{className:n.searchIcon,icon:"icon-search"})}),e.jsx(X,{ref:t,type:"text",id:m,onChange:M,onFocus:P,value:u,other:{autoComplete:"off"},disabled:s,placeholder:D,wrapperClassName:n.searchInput}),u&&e.jsx("button",{onClick:f,tabIndex:-1,type:"button",className:n.clearBtn,children:e.jsx(_,{icon:"icon-x",className:"text-icon"})})]}),r&&u&&e.jsx("div",{className:n.searchResultsContainer,children:I?e.jsx(q,{visible:!0,position:"relative",color:"orange",size:"sm"}):e.jsxs("ul",{"aria-labelledby":m,children:[y.map((c,L)=>e.jsx("li",{className:n.resultListItem,children:e.jsxs("button",{onClick:()=>U(c),className:n.resultListItemBtn,children:[e.jsx("span",{className:n.serchResultItemText,children:c.name}),e.jsx("span",{className:n.serchResultItemText,children:c.companyName}),e.jsx("span",{className:n.serchResultItemText,children:c.email})]},`${m}_${L}`)},`${m}_${L}`)),y.length===0&&u.length?e.jsx("li",{className:n.noResultListItem,children:e.jsx("span",{className:n.serchResultItemText,children:C})},`search_no_result_${m}`):null]})})]})}N.__docgenInfo={description:"",methods:[],displayName:"AdminSearch",props:{id:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},query:{required:!0,tsType:{name:"string"},description:""},setQuery:{required:!0,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},results:{required:!0,tsType:{name:"Array",elements:[{name:"IResult"}],raw:"Array<IResult>"},description:""},onClickSearchResult:{required:!0,tsType:{name:"CallableFunction"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},noResultText:{required:!0,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onFocus:{required:!1,tsType:{name:"CallableFunction"},description:""}}};const ne={title:"Design System/Atoms/AdminSearch",component:N},G={render:({...a})=>{const[m,I]=l.useState(a.isOpen),[r,i]=l.useState(a.query),[u,p]=l.useState([]);function y(o){console.log("Handle clicked item",o)}return l.useEffect(()=>{let o=new RegExp(r.toLowerCase(),"i");p(d.filter(s=>r&&(s.name&&o.test(s.name.toLowerCase())||s.companyName&&o.test(s.companyName.toLowerCase())||s.companyId&&o.test(s.companyId.toString().toLowerCase())||s.email&&o.test(s.email.toLowerCase()))))},[r]),e.jsx(N,{id:a.id,query:r,setQuery:i,results:u,onClickSearchResult:y,disabled:a.disabled,isLoading:a.isLoading,isOpen:m,setIsOpen:I,noResultText:a.noResultText,placeholder:a.placeholder})}},d=[{id:1747842,name:"371000 EXPERIUM LODGEBAREN",email:"admin-371000@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:2480854,name:"371000 EXPERIUM LODGEBAREN",email:"admin-37100012@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735352,name:"Beställare 222 371000",email:"order-371000@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3698667,name:"Dryckesturnén 2019",email:"dryckesturnen@spendrups.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3730589,name:"Ebba Persson",email:"ebba.persson@nexergroup.com",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735459,name:"Fredrik Gustavsson",email:"fredrik.gustavsson@sigma.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3701109,name:"Fredrik2 Gustavsson2",email:"fredrik.gustavsson@jolix.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835637,name:"German Jss",email:"jss@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835705,name:"German jss1@tt.tt",email:"jss1@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3708697,name:"Henrik Test",email:"test-henrik@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"}],h={...G,args:{id:"SearchId",results:[],isOpen:!1,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}},E={...G,args:{id:"SearchId",results:[],isOpen:!1,isLoading:!0,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}};var x,b,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`[{
  id: 1747842,
  name: "371000 EXPERIUM LODGEBAREN",
  email: "admin-371000@spendrups.nu",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 2480854,
  name: "371000 EXPERIUM LODGEBAREN",
  email: "admin-37100012@spendrups.nu",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 1735352,
  name: "Beställare 222 371000",
  email: "order-371000@371000.se",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 3698667,
  name: "Dryckesturnén 2019",
  email: "dryckesturnen@spendrups.se",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 3730589,
  name: "Ebba Persson",
  email: "ebba.persson@nexergroup.com",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 1735459,
  name: "Fredrik Gustavsson",
  email: "fredrik.gustavsson@sigma.se",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 3701109,
  name: "Fredrik2 Gustavsson2",
  email: "fredrik.gustavsson@jolix.se",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 3835637,
  name: "German Jss",
  email: "jss@tt.tt",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 3835705,
  name: "German jss1@tt.tt",
  email: "jss1@tt.tt",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}, {
  id: 3708697,
  name: "Henrik Test",
  email: "test-henrik@371000.se",
  phone: null,
  companyId: 283903,
  companyName: "EXPERIUM LODGEBAREN (371000)"
}]`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,O,A;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...AdminSearchStoryTemplate,
  args: {
    id: 'SearchId',
    results: [],
    isOpen: false,
    disabled: false,
    query: '',
    noResultText: 'Your search returned no results',
    placeholder: 'Sök på kundnummer, företag, namn'
  }
}`,...(A=(O=h.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var B,T,k;E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...AdminSearchStoryTemplate,
  args: {
    id: 'SearchId',
    results: [],
    isOpen: false,
    isLoading: true,
    disabled: false,
    query: '',
    noResultText: 'Your search returned no results',
    placeholder: 'Sök på kundnummer, företag, namn'
  }
}`,...(k=(T=E.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const se=["itemsToFilterOn","AdminSearchStory","AdminSearchStory_Loading"],ie=Object.freeze(Object.defineProperty({__proto__:null,AdminSearchStory:h,AdminSearchStory_Loading:E,__namedExportsOrder:se,default:ne,itemsToFilterOn:d},Symbol.toStringTag,{value:"Module"}));export{N as A,h as a,ie as b,d as i};
