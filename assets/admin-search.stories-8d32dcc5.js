import{r as c}from"./index-6f814c40.js";import{I as S}from"./icon-7e598265.js";import{I as T}from"./input-text-b4497d63.js";import{c as q}from"./index-74f03c09.js";import{L as j}from"./loader-2ea78344.js";import{j as R,a as e}from"./jsx-runtime-76c5c2e2.js";import{u as V}from"./useOnClickOutside-47d3035a.js";import{u as w}from"./useCloseOnEscape-fa88369d.js";const W="_search_147px_1",$="_searchBar_147px_9",F="_searchInput_147px_31",Y="_searchIconWrapper_147px_35",H="_searchIcon_147px_35",z="_clearBtn_147px_54",J="_searchResults_147px_66",Q="_searchResultsLoading_147px_113",K="_resultListItem_147px_124",Z="_resultListItemBtn_147px_133",ee="_noResultListItem_147px_161",n={search:W,searchBar:$,searchInput:F,searchIconWrapper:Y,searchIcon:H,clearBtn:z,searchResults:J,searchResultsLoading:Q,resultListItem:K,resultListItemBtn:Z,noResultListItem:ee};function N({className:a,id:m,isLoading:I=!1,isOpen:s,setIsOpen:i,query:u,setQuery:p,results:y,onClickSearchResult:o,disabled:r,noResultText:U,placeholder:X}){const _=c.useRef(null),t=c.useRef(null),f=c.useCallback(()=>(i(!1),(t==null?void 0:t.current)&&t.current.blur()),[i]),C=c.useCallback(l=>{s||i(!0),p(l.target.value)},[s,i,p]);function L(){return p(""),(t==null?void 0:t.current)&&t.current.focus()}function v(l){o(l),f(),L()}return V({ref:_,onClose:f}),w({onClose:f,isOpen:s}),R("div",{ref:_,className:q(n.search,a),children:[R("div",{className:n.searchBar,children:[e("div",{className:n.searchIconWrapper,children:e(S,{className:n.searchIcon,icon:"icon-search"})}),e(T,{ref:t,type:"text",id:m,onChange:C,value:u,other:{autoComplete:"off"},disabled:r,placeholder:X,wrapperClassName:n.searchInput}),u&&e("button",{onClick:L,tabIndex:-1,type:"button",className:n.clearBtn,children:e(S,{icon:"icon-x",className:"text-icon"})})]}),s&&u&&I&&e("div",{className:n.searchResultsLoading,children:e(j,{visible:!0,position:"relative",color:"orange",size:"sm"})}),s&&u&&!I&&e("div",{className:n.searchResults,children:R("ul",{"aria-labelledby":m,children:[y.map((l,g)=>e("li",{className:n.resultListItem,children:R("button",{onClick:()=>v(l),className:n.resultListItemBtn,children:[e("span",{className:n.serchResultItemText,children:l.name}),e("span",{className:n.serchResultItemText,children:l.companyName}),e("span",{className:n.serchResultItemText,children:l.companyId}),e("span",{className:n.serchResultItemText,children:l.email})]},`${m}_${g}`)},`${m}_${g}`)),y.length===0&&u.length?e("li",{className:n.noResultListItem,children:e("div",{children:e("span",{className:n.serchResultItemText,children:U.text})})},`search_no_result_${m}`):null]})})]})}try{N.displayName="AdminSearch",N.__docgenInfo={description:"",displayName:"AdminSearch",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(isOpen: boolean) => void"}},query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},setQuery:{defaultValue:null,description:"",name:"setQuery",required:!0,type:{name:"(query: string) => void"}},results:{defaultValue:null,description:"",name:"results",required:!0,type:{name:"IResult[]"}},onClickSearchResult:{defaultValue:null,description:"",name:"onClickSearchResult",required:!0,type:{name:"CallableFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},noResultText:{defaultValue:null,description:"",name:"noResultText",required:!0,type:{name:"ISearchNoResult"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Design System/Atoms/AdminSearch",component:N},M={render:({...a})=>{const[m,I]=c.useState(a.isOpen),[s,i]=c.useState(a.query),[u,p]=c.useState([]);function y(o){console.log("Handle clicked item",o)}return c.useEffect(()=>{let o=new RegExp(s.toLowerCase(),"i");p(d.filter(r=>s&&(r.name&&o.test(r.name.toLowerCase())||r.companyName&&o.test(r.companyName.toLowerCase())||r.companyId&&o.test(r.companyId.toString().toLowerCase())||r.email&&o.test(r.email.toLowerCase()))))},[s]),e(N,{id:a.id,query:s,setQuery:i,results:u,onClickSearchResult:y,disabled:a.disabled,isLoading:a.isLoading,isOpen:m,setIsOpen:I,noResultText:a.noResultText,placeholder:a.placeholder})}},d=[{id:1747842,name:"371000 EXPERIUM LODGEBAREN",email:"admin-371000@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:2480854,name:"371000 EXPERIUM LODGEBAREN",email:"admin-37100012@spendrups.nu",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735352,name:"Beställare 222 371000",email:"order-371000@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3698667,name:"Dryckesturnén 2019",email:"dryckesturnen@spendrups.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3730589,name:"Ebba Persson",email:"ebba.persson@nexergroup.com",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:1735459,name:"Fredrik Gustavsson",email:"fredrik.gustavsson@sigma.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3701109,name:"Fredrik2 Gustavsson2",email:"fredrik.gustavsson@jolix.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835637,name:"German Jss",email:"jss@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3835705,name:"German jss1@tt.tt",email:"jss1@tt.tt",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"},{id:3708697,name:"Henrik Test",email:"test-henrik@371000.se",phone:null,companyId:283903,companyName:"EXPERIUM LODGEBAREN (371000)"}],h={...M,args:{id:"SearchId",results:[],isOpen:!1,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}},E={...M,args:{id:"SearchId",results:[],isOpen:!1,isLoading:!0,disabled:!1,query:"",noResultText:"Your search returned no results",placeholder:"Sök på kundnummer, företag, namn"}};var x,O,B;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`[{
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
}]`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var A,b,k;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(b=h.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var G,D,P;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(D=E.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const ae=["itemsToFilterOn","AdminSearchStory","AdminSearchStory_Loading"],ie=Object.freeze(Object.defineProperty({__proto__:null,AdminSearchStory:h,AdminSearchStory_Loading:E,__namedExportsOrder:ae,default:ne,itemsToFilterOn:d},Symbol.toStringTag,{value:"Module"}));export{N as A,h as a,ie as b,d as i};
//# sourceMappingURL=admin-search.stories-8d32dcc5.js.map