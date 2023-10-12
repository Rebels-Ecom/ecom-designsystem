import{r as c}from"./index-6f814c40.js";import{I as S}from"./icon-0e1526c5.js";import{I as X}from"./input-text-e07cfb54.js";import{c as q}from"./index-74f03c09.js";import{L as j}from"./loader-2ea78344.js";import{j as I,a as n}from"./jsx-runtime-76c5c2e2.js";import{u as V}from"./useOnClickOutside-47d3035a.js";import{u as w}from"./useCloseOnEscape-fa88369d.js";const W="_search_1yv2g_1",$="_searchBar_1yv2g_12",F="_searchInput_1yv2g_38",Y="_searchIconWrapper_1yv2g_42",H="_searchIcon_1yv2g_42",z="_clearBtn_1yv2g_61",J="_searchResultsContainer_1yv2g_73",Q="_resultListItem_1yv2g_131",K="_resultListItemBtn_1yv2g_141",Z="_serchResultItemText_1yv2g_157",ee="_noResultListItem_1yv2g_172",e={search:W,searchBar:$,searchInput:F,searchIconWrapper:Y,searchIcon:H,clearBtn:z,searchResultsContainer:J,resultListItem:Q,resultListItemBtn:K,serchResultItemText:Z,noResultListItem:ee};function R({className:a,id:m,isLoading:N=!1,isOpen:r,setIsOpen:u,query:i,setQuery:p,results:y,onClickSearchResult:l,disabled:s,noResultText:P,placeholder:M}){const _=c.useRef(null),t=c.useRef(null),f=c.useCallback(()=>(u(!1),(t==null?void 0:t.current)&&t.current.blur()),[u]),T=c.useCallback(o=>{r||u(!0),p(o.target.value)},[r,u,p]);function g(){return p(""),(t==null?void 0:t.current)&&t.current.focus()}function U(o){l(o),f(),g()}return V({ref:_,onClose:f}),w({onClose:f,isOpen:r}),I("div",{ref:_,className:q(e.search,a),children:[I("div",{className:e.searchBar,children:[n("div",{className:e.searchIconWrapper,children:n(S,{className:e.searchIcon,icon:"icon-search"})}),n(X,{ref:t,type:"text",id:m,onChange:T,value:i,other:{autoComplete:"off"},disabled:s,placeholder:M,wrapperClassName:e.searchInput}),i&&n("button",{onClick:g,tabIndex:-1,type:"button",className:e.clearBtn,children:n(S,{icon:"icon-x",className:"text-icon"})})]}),r&&i&&n("div",{className:e.searchResultsContainer,children:N?n(j,{visible:!0,position:"relative",color:"orange",size:"sm"}):I("ul",{"aria-labelledby":m,children:[y.map((o,L)=>n("li",{className:e.resultListItem,children:I("button",{onClick:()=>U(o),className:e.resultListItemBtn,children:[n("span",{className:e.serchResultItemText,children:o.name}),n("span",{className:e.serchResultItemText,children:o.companyName}),n("span",{className:e.serchResultItemText,children:o.email})]},`${m}_${L}`)},`${m}_${L}`)),y.length===0&&i.length?n("li",{className:e.noResultListItem,children:n("span",{className:e.serchResultItemText,children:P})},`search_no_result_${m}`):null]})})]})}try{R.displayName="AdminSearch",R.__docgenInfo={description:"",displayName:"AdminSearch",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(isOpen: boolean) => void"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"(query: string) => void"}},results:{defaultValue:null,description:"",name:"results",required:!0,type:{name:"IResult[]"}},onClickSearchResult:{defaultValue:null,description:"",name:"onClickSearchResult",required:!0,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},noResultText:{defaultValue:null,description:"",name:"noResultText",required:!0,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Design System/Atoms/AdminSearch",component:R},D={render:({...a})=>{const[m,N]=c.useState(a.isOpen),[r,u]=c.useState(a.query),[i,p]=c.useState([]);function y(l){console.log("Handle clicked item",l)}return c.useEffect(()=>{let l=new RegExp(r.toLowerCase(),"i");p(d.filter(s=>r&&(s.name&&l.test(s.name.toLowerCase())||s.companyName&&l.test(s.companyName.toLowerCase())||s.companyId&&l.test(s.companyId.toString().toLowerCase())||s.email&&l.test(s.email.toLowerCase()))))},[r]),n(R,{id:a.id,query:r,setQuery:u,results:i,onClickSearchResult:y,disabled:a.disabled,isLoading:a.isLoading,isOpen:m,setIsOpen:N,noResultText:a.noResultText,placeholder:a.placeholder})}},d=[{id:1747842,name:"371000 EXPERIUM LODGEBAREN",email:"admin-371000@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:2480854,name:"371000 EXPERIUM LODGEBAREN",email:"admin-37100012@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735352,name:"Beställare 222 371000",email:"order-371000@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3698667,name:"Dryckesturnén 2019",email:"dryckesturnen@spendrups.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3730589,name:"Ebba Persson",email:"ebba.persson@nexergroup.com",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735459,name:"Fredrik Gustavsson",email:"fredrik.gustavsson@sigma.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3701109,name:"Fredrik2 Gustavsson2",email:"fredrik.gustavsson@jolix.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835637,name:"German Jss",email:"jss@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835705,name:"German jss1@tt.tt",email:"jss1@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3708697,name:"Henrik Test",email:"test-henrik@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"}],h={...D,args:{id:"SearchId",results:[],isOpen:!1,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}},E={...D,args:{id:"SearchId",results:[],isOpen:!1,isLoading:!0,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}};var O,B,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`[{
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
}]`,...(A=(B=d.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var b,k,G;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(G=(k=h.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var v,x,C;E.parameters={...E.parameters,docs:{...(v=E.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(x=E.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ae=["itemsToFilterOn","AdminSearchStory","AdminSearchStory_Loading"],ie=Object.freeze(Object.defineProperty({__proto__:null,AdminSearchStory:h,AdminSearchStory_Loading:E,__namedExportsOrder:ae,default:ne,itemsToFilterOn:d},Symbol.toStringTag,{value:"Module"}));export{R as A,h as a,ie as b,d as i};
//# sourceMappingURL=admin-search.stories-64aa808f.js.map
