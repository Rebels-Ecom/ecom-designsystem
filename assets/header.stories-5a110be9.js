import{j as e,R as o,r as Q}from"./jsx-runtime-03333307.js";import{m as W}from"./hooks-0265167d.js";import{C as O}from"./content-wrapper-adfa8526.js";import{F as S}from"./flex-container-7aff6506.js";import{L as $}from"./loader-5c06d14e.js";import{D as U,a as V}from"./desktop-navigation.stories-c1af426c.js";import{l as v}from"./Spendrups_logo_horizontal-038b757f.js";import{l as Y}from"./Spendrups_logo_vertical-4f973801.js";import{C as Z}from"./cart-sidebar-285470bd.js";import{a as L,U as _}from"./ui-date-picker.stories-b5e24ed3.js";import{i as ee,A as se,a as re}from"./admin-search.stories-ff61e006.js";import{M as te,D as oe}from"./mobile-navigation.stories-53405997.js";import{U as q,a as H}from"./user-info-summary.stories-8ed048f5.js";import{D as F,a as J}from"./dropdown-list.stories-1d9f32e6.js";import{T as ne}from"./top-nav-bar-b3372088.js";import{D as ae}from"./delivery-info-bar-965f3985.js";import{m as ie}from"./motion-9380e2c6.js";import{L as ce}from"./logotype-96bfbc3c.js";import{I as c}from"./icon-button-4b635669.js";import{D as T}from"./drawer-sidebar-276ba6ab.js";import{G as D}from"./group-wrapper-5bc35e6d.js";import{H as N}from"./heading-ba18f9a9.js";import{B as R}from"./button-8e3f9b10.js";import{L as le}from"./link-button-929454ef.js";import"./react-responsive-c4f2314e.js";import"./index-09749a66.js";import"./useOnClickOutside-9d2c35bb.js";import"./icon-cf6ebd85.js";import"./isNativeReflectConstruct-fe36982f.js";import"./index-821951ec.js";import"./input-text-0d02e73b.js";import"./form-helper-af1dc92c.js";import"./useCloseOnEscape-f124367e.js";import"./index-61679f6b.js";import"./tslib.es6-4d885d63.js";import"./below-c0fccb92.js";import"./picture-d7d6bf69.js";import"./ui-link-2df8a5b4.js";import"./button.module-a43725bf.js";const me="_header_1acce_1",pe={header:me},w=({salesTool:C,topNavBar:n,deliveryInfoBar:f,logo:s,mobileSearchBar:l,mobileActions:m,mobileCalendar:g,mobileNavigation:a,desktopSearchBar:p,desktopActions:d,desktopNavigation:u,loading:i})=>{const{isMobile:k,isTablet:b,isDesktop:h,isBigScreen:x}=W();return e.jsxs(e.Fragment,{children:[C&&C,f&&f,e.jsx("header",{className:pe.header,children:(s||l||m||a||p||d||u)&&e.jsxs(e.Fragment,{children:[(k||b)&&e.jsxs(e.Fragment,{children:[n&&n,e.jsx(O,{children:e.jsxs(S,{flexDirection:"column",gap:0,children:[e.jsxs(S,{alignItems:"center",justifyContent:"space-between",stretch:!0,children:[s&&s,m&&m,i&&e.jsx($,{visible:!0,position:"relative",size:"xs"}),!i&&a]}),l&&l]})}),g&&g]}),(h||x)&&e.jsxs(e.Fragment,{children:[n&&n,e.jsx(O,{padding:[1,0],children:e.jsxs(S,{alignItems:"center",children:[s&&s,p&&p,d&&d]})}),i&&e.jsx(U,{categories:[],currentSlug:"/",isOpen:!1,linkComponent:"a",setIsOpen:()=>{}}),u&&!i&&u]})]})})]})};w.__docgenInfo={description:"",methods:[],displayName:"Header",props:{salesTool:{required:!1,tsType:{name:"JSX.Element"},description:""},topNavBar:{required:!1,tsType:{name:"JSX.Element"},description:""},deliveryInfoBar:{required:!1,tsType:{name:"JSX.Element"},description:""},logo:{required:!1,tsType:{name:"JSX.Element"},description:""},mobileSearchBar:{required:!1,tsType:{name:"JSX.Element"},description:""},mobileActions:{required:!1,tsType:{name:"JSX.Element"},description:""},mobileCalendar:{required:!1,tsType:{name:"JSX.Element"},description:""},mobileNavigation:{required:!1,tsType:{name:"JSX.Element"},description:""},desktopSearchBar:{required:!1,tsType:{name:"JSX.Element"},description:""},desktopActions:{required:!1,tsType:{name:"JSX.Element"},description:""},desktopNavigation:{required:!1,tsType:{name:"JSX.Element"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const Ye={title:"Design System/Organisms/Header",component:w},de={render:C=>{const[n,f]=o.useState(!1),[s,l]=o.useState({}),[m,g]=o.useState(!1),[a,p]=o.useState(""),[d,u]=o.useState([]),[i,k]=o.useState(!1),[b,h]=o.useState(!1),[x,B]=o.useState(!1),M=()=>k(!i),E=()=>h(!0),G=()=>h(!1),I=r=>{console.log(`Trigger set delivery day - ${r.toISOString().split("T")[0]}`)},K=()=>{console.log("Handle logout...")},P=r=>{l(r)},y=()=>{B(!x)};return Q.useEffect(()=>{let r=new RegExp(a.toLowerCase(),"i");u(ee.filter(t=>a&&(t.name&&r.test(t.name.toLowerCase())||t.companyName&&r.test(t.companyName.toLowerCase())||t.companyId&&r.test(t.companyId.toString().toLowerCase())||t.email&&r.test(t.email.toLowerCase()))))},[a]),e.jsxs(e.Fragment,{children:[e.jsx(w,{salesTool:e.jsx(O,{padding:[1,0],children:e.jsx(se,{...re.args,noResultText:{text:"No result"},query:a,setQuery:p,results:d,onClickSearchResult:P,isOpen:m,setIsOpen:g})}),topNavBar:e.jsx(ne,{links:[{children:"test",href:"",icon:"icon-alert-circle"}],linkComponent:"a",userLoggedIn:!1,onClick:K,onSelectDate:I,hasActiveUser:!1}),deliveryInfoBar:e.jsx(ae,{exists:!0,infoText:"Kom ihåg att lämna tillbaka era tomfat!",onClick:()=>console.log("DeliveryInfoBar clicked")}),logo:e.jsx(ie.div,{style:{zIndex:101},initial:{x:"0vw"},animate:{x:n?"10vw":"0vw",transition:{delay:.1}},children:e.jsx("a",{href:"/",target:"_self",children:e.jsx(ce,{src:v,alt:"logo",id:"logo",sources:[{srcset:Y,media:"(max-width: 767px)"},{srcset:v,media:"(min-width: 768px)"}]})})}),mobileActions:e.jsxs(S,{alignItems:"center",justifyContent:"flex-end",flex:"1",children:[(s==null?void 0:s.name)&&e.jsx(c,{type:"button",icon:"icon-user",onClick:()=>{},size:"large",isTransparent:!0}),e.jsx(c,{type:"button",icon:i?"icon-x":"icon-search",size:"large",isTransparent:!0,onClick:M}),e.jsx(c,{type:"button",icon:"icon-shopping-cart",size:"large",isTransparent:!0,onClick:E}),e.jsxs(e.Fragment,{children:[e.jsx(c,{type:"button",onClick:y,icon:"icon-user",size:"medium"}),e.jsxs(T,{isOpen:x,onClose:y,children:[e.jsx(q,{...H.args}),e.jsx(F,{...J.args})]})]})]}),mobileNavigation:e.jsx(te,{...oe.args,isOpen:n,setIsOpen:f}),mobileCalendar:e.jsx(L,{..._.args,onDateSelected:I}),desktopActions:e.jsxs(e.Fragment,{children:[(s==null?void 0:s.name)&&e.jsx(c,{type:"button",icon:"icon-user",onClick:()=>{},size:"large",isTransparent:!0}),e.jsx(c,{type:"button",icon:"icon-shopping-cart",onClick:E,size:"medium"}),e.jsx(L,{..._.args,onDateSelected:I}),e.jsxs(e.Fragment,{children:[e.jsx(c,{type:"button",onClick:y,icon:"icon-user",size:"medium"}),e.jsxs(T,{isOpen:x,onClose:y,children:[e.jsx(q,{...H.args}),e.jsx(F,{...J.args})]})]})]}),desktopNavigation:e.jsx(U,{...V.args})}),e.jsx(T,{onClose:G,isOpen:b,children:e.jsxs(Z,{classNames:["light"],children:[e.jsxs(D,{position:"apart",children:[e.jsx(N,{order:3,children:"Kundvagn"}),e.jsx(N,{order:3,children:"1378,00 kr"})]}),e.jsxs(D,{children:[e.jsx(R,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),e.jsx(R,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),e.jsx(D,{children:e.jsx(le,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"})})]})})]})}},j={...de};var X,z,A;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...HeaderStoryTemplate
}`,...(A=(z=j.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Ze=["Standard_Header"];export{j as Standard_Header,Ze as __namedExportsOrder,Ye as default};