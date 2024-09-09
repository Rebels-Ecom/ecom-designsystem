import{r as g,j as s}from"./jsx-runtime-03333307.js";import{c as T}from"./index-09749a66.js";import{L as U}from"./loader-5c06d14e.js";import{C as r,b as V}from"./cart-product.stories-2a581773.js";import{L as a,a as X}from"./link-list-item.stories-1f8cdfb4.js";const Y="_cartProductList_swwzh_1",Z="_list_swwzh_5",$="_listFade_swwzh_26",ee="_listItem_swwzh_33",b={cartProductList:Y,list:Z,listFade:$,listItem:ee},y=({children:e,loading:o,visibleItemsNumber:_,hasFade:P,className:f})=>{const[I,D]=g.useState(0),[G,J]=g.useState(P),l=g.useRef(null);function K(t){const h=t.currentTarget.scrollHeight-t.currentTarget.clientHeight<=t.currentTarget.scrollTop+50;J(!h)}function Q(t,h){return t<h?t:h}return g.useEffect(()=>{var t;(t=l==null?void 0:l.current)!=null&&t.clientHeight&&D(l.current.clientHeight+1)},[]),!Array.isArray(e)||!e.length?null:s.jsx("div",{className:T(b.cartProductList,f&&f),children:o?s.jsx(U,{visible:o,size:"sm",position:"relative",color:"orange"}):s.jsx("ul",{onScroll:P?K:void 0,className:T(b.list,G&&_?b.listFade:""),style:_?{height:I*Q(e.length,_)}:{height:I*e.length},children:e==null?void 0:e.map(t=>s.jsx("li",{ref:l,className:b.listItem,children:t},Math.random()))})})};y.__docgenInfo={description:"",methods:[],displayName:"ScrollableList",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Array<React.ReactNode>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},visibleItemsNumber:{required:!1,tsType:{name:"number"},description:""},hasFade:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Design System/Molecules/ScrollableList",component:y},L=[r.args,r.args,r.args,r.args,r.args,r.args,r.args],se=[a.args,a.args,a.args,a.args,a.args,a.args,a.args],S=e=>e==null?void 0:e.map(o=>s.jsx(V,{...o,onClickRemoveProduct:()=>{}},Math.random())),re=e=>e==null?void 0:e.map(o=>s.jsx(X,{...o},Math.random())),i={render:e=>s.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:s.jsx(y,{...e,children:e.children})})},c={...i,args:{children:S(L),visibleItemsNumber:2}},n={...i,args:{children:S(L),visibleItemsNumber:2,loading:!0}},m={...i,args:{children:S(L),visibleItemsNumber:4,hasFade:!0}},d={...i,args:{children:S(L),visibleItemsNumber:2,hasFade:!0}},u={...i,args:{children:S(L)}},p={...i,args:{children:re(se),visibleItemsNumber:5,hasFade:!0}};var v,x,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2
  }
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var N,j,w;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    loading: true
  }
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,z,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 4,
    hasFade: true
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var H,q,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    hasFade: true
  }
}`,...(M=(q=d.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,C,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts)
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var k,O,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: getPurchaseLists(purchaseLists),
    visibleItemsNumber: 5,
    hasFade: true
  }
}`,...(B=(O=p.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const ae=["ScrollableListListStory","ScrollableListListStory_Loading","ScrollableListListStory_WithFade","ScrollableListListStory_WithFade_2_products","ScrollableListListStory_All_Products","ScrollableListListStory_PurchaseLists"],me=Object.freeze(Object.defineProperty({__proto__:null,ScrollableListListStory:c,ScrollableListListStory_All_Products:u,ScrollableListListStory_Loading:n,ScrollableListListStory_PurchaseLists:p,ScrollableListListStory_WithFade:m,ScrollableListListStory_WithFade_2_products:d,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{y as S,p as a,d as b,me as s};
