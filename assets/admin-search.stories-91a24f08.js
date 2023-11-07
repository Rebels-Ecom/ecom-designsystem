import{r as c}from"./index-6f814c40.js";import{I as b}from"./icon-99d60fba.js";import{I as X}from"./input-text-6ee421c5.js";import{c as v}from"./index-74f03c09.js";import{L as q}from"./loader-6dca2ea3.js";import{j as y,a as n}from"./jsx-runtime-76c5c2e2.js";import{u as V}from"./useOnClickOutside-47d3035a.js";import{u as w}from"./useCloseOnEscape-fa88369d.js";const W="_search_bhj1g_1",$="_searchBar_bhj1g_12",F="_searchInput_bhj1g_38",Y="_searchIconWrapper_bhj1g_42",H="_searchIcon_bhj1g_42",z="_clearBtn_bhj1g_61",J="_searchResultsContainer_bhj1g_73",Q="_resultListItem_bhj1g_132",K="_resultListItemBtn_bhj1g_142",Z="_serchResultItemText_bhj1g_158",ee="_noResultListItem_bhj1g_173",e={search:W,searchBar:$,searchInput:F,searchIconWrapper:Y,searchIcon:H,clearBtn:z,searchResultsContainer:J,resultListItem:Q,resultListItemBtn:K,serchResultItemText:Z,noResultListItem:ee};function R({className:a,id:m,isLoading:N=!1,isOpen:r,setIsOpen:u,query:i,setQuery:p,results:I,onClickSearchResult:l,disabled:s,noResultText:M,placeholder:j}){const _=c.useRef(null),t=c.useRef(null),f=c.useCallback(()=>(u(!1),(t==null?void 0:t.current)&&t.current.blur()),[u]),T=c.useCallback(o=>{r||u(!0),p(o.target.value)},[r,u,p]);function g(){return p(""),(t==null?void 0:t.current)&&t.current.focus()}function U(o){l(o),f(),g()}return V({ref:_,onClose:f}),w({onClose:f,isOpen:r}),y("div",{ref:_,className:v(e.search,a),children:[y("div",{className:e.searchBar,children:[n("div",{className:e.searchIconWrapper,children:n(b,{className:e.searchIcon,icon:"icon-search"})}),n(X,{ref:t,type:"text",id:m,onChange:T,value:i,other:{autoComplete:"off"},disabled:s,placeholder:j,wrapperClassName:e.searchInput}),i&&n("button",{onClick:g,tabIndex:-1,type:"button",className:e.clearBtn,children:n(b,{icon:"icon-x",className:"text-icon"})})]}),r&&i&&n("div",{className:e.searchResultsContainer,children:N?n(q,{visible:!0,position:"relative",color:"orange",size:"sm"}):y("ul",{"aria-labelledby":m,children:[I.map((o,L)=>n("li",{className:e.resultListItem,children:y("button",{onClick:()=>U(o),className:e.resultListItemBtn,children:[n("span",{className:e.serchResultItemText,children:o.name}),n("span",{className:e.serchResultItemText,children:o.companyName}),n("span",{className:e.serchResultItemText,children:o.email})]},`${m}_${L}`)},`${m}_${L}`)),I.length===0&&i.length?n("li",{className:e.noResultListItem,children:n("span",{className:e.serchResultItemText,children:M})},`search_no_result_${m}`):null]})})]})}try{R.displayName="AdminSearch",R.__docgenInfo={description:"",displayName:"AdminSearch",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(isOpen: boolean) => void"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"(query: string) => void"}},results:{defaultValue:null,description:"",name:"results",required:!0,type:{name:"IResult[]"}},onClickSearchResult:{defaultValue:null,description:"",name:"onClickSearchResult",required:!0,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},noResultText:{defaultValue:null,description:"",name:"noResultText",required:!0,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Design System/Atoms/AdminSearch",component:R},P={render:({...a})=>{const[m,N]=c.useState(a.isOpen),[r,u]=c.useState(a.query),[i,p]=c.useState([]);function I(l){console.log("Handle clicked item",l)}return c.useEffect(()=>{let l=new RegExp(r.toLowerCase(),"i");p(d.filter(s=>r&&(s.name&&l.test(s.name.toLowerCase())||s.companyName&&l.test(s.companyName.toLowerCase())||s.companyId&&l.test(s.companyId.toString().toLowerCase())||s.email&&l.test(s.email.toLowerCase()))))},[r]),n(R,{id:a.id,query:r,setQuery:u,results:i,onClickSearchResult:I,disabled:a.disabled,isLoading:a.isLoading,isOpen:m,setIsOpen:N,noResultText:a.noResultText,placeholder:a.placeholder})}},d=[{id:1747842,name:"371000 EXPERIUM LODGEBAREN",email:"admin-371000@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:2480854,name:"371000 EXPERIUM LODGEBAREN",email:"admin-37100012@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735352,name:"Beställare 222 371000",email:"order-371000@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3698667,name:"Dryckesturnén 2019",email:"dryckesturnen@spendrups.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3730589,name:"Ebba Persson",email:"ebba.persson@nexergroup.com",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735459,name:"Fredrik Gustavsson",email:"fredrik.gustavsson@sigma.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3701109,name:"Fredrik2 Gustavsson2",email:"fredrik.gustavsson@jolix.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835637,name:"German Jss",email:"jss@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835705,name:"German jss1@tt.tt",email:"jss1@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3708697,name:"Henrik Test",email:"test-henrik@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"}],h={...P,args:{id:"SearchId",results:[],isOpen:!1,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}},E={...P,args:{id:"SearchId",results:[],isOpen:!1,isLoading:!0,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}};var S,O,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`[{
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
}]`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var A,k,G;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(k=h.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var x,C,D;E.parameters={...E.parameters,docs:{...(x=E.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(C=E.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const ae=["itemsToFilterOn","AdminSearchStory","AdminSearchStory_Loading"],ie=Object.freeze(Object.defineProperty({__proto__:null,AdminSearchStory:h,AdminSearchStory_Loading:E,__namedExportsOrder:ae,default:ne,itemsToFilterOn:d},Symbol.toStringTag,{value:"Module"}));export{R as A,h as a,ie as b,d as i};
//# sourceMappingURL=admin-search.stories-91a24f08.js.map
