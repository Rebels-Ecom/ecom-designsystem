import{r as b,j as r}from"./jsx-runtime-03333307.js";import{c as T}from"./index-09749a66.js";import{L as U}from"./loader-5c06d14e.js";import{C as s,b as V}from"./cart-product.stories-4b16be83.js";import{L as a,a as X}from"./link-list-item.stories-a63b5763.js";const Y="_cartProductList_166fi_1",Z="_list_166fi_5",$="_listFade_166fi_26",ee="_listItem_166fi_33",h={cartProductList:Y,list:Z,listFade:$,listItem:ee},y=({children:e,loading:o,visibleItemsNumber:_,hasFade:f,className:P})=>{const[I,D]=b.useState(0),[G,J]=b.useState(f),l=b.useRef(null);function K(t){const g=t.currentTarget.scrollHeight-t.currentTarget.clientHeight<=t.currentTarget.scrollTop+50;J(!g)}function Q(t,g){return t<g?t:g}return b.useEffect(()=>{var t;(t=l==null?void 0:l.current)!=null&&t.clientHeight&&D(l.current.clientHeight+1)},[]),!Array.isArray(e)||!e.length?null:r.jsx("div",{className:T(h.cartProductList,P&&P),children:o?r.jsx(U,{visible:o,size:"sm",position:"relative",color:"orange"}):r.jsx("ul",{onScroll:f?K:void 0,className:T(h.list,G&&_?h.listFade:""),style:_?{height:I*Q(e.length,_)}:{height:I*e.length},children:e==null?void 0:e.map(t=>r.jsx("li",{ref:l,className:h.listItem,children:t},Math.random()))})})};y.__docgenInfo={description:"",methods:[],displayName:"ScrollableList",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Array<React.ReactNode>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},visibleItemsNumber:{required:!1,tsType:{name:"number"},description:""},hasFade:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Design System/Molecules/ScrollableList",component:y},L=[s.args,s.args,s.args,s.args,s.args,s.args,s.args],re=[a.args,a.args,a.args,a.args,a.args,a.args,a.args],S=e=>e==null?void 0:e.map(o=>r.jsx(V,{...o,onClickRemoveProduct:()=>{}},Math.random())),se=e=>e==null?void 0:e.map(o=>r.jsx(X,{...o},Math.random())),i={render:e=>r.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:r.jsx(y,{...e,children:e.children})})},c={...i,args:{children:S(L),visibleItemsNumber:2}},n={...i,args:{children:S(L),visibleItemsNumber:2,loading:!0}},m={...i,args:{children:S(L),visibleItemsNumber:4,hasFade:!0}},d={...i,args:{children:S(L),visibleItemsNumber:2,hasFade:!0}},u={...i,args:{children:S(L)}},p={...i,args:{children:se(re),visibleItemsNumber:5,hasFade:!0}};var v,x,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2
  }
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var N,j,R;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    loading: true
  }
}`,...(R=(j=n.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var A,H,q;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 4,
    hasFade: true
  }
}`,...(q=(H=m.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var M,W,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    hasFade: true
  }
}`,...(C=(W=d.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var E,k,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts)
  }
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,z,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: getPurchaseLists(purchaseLists),
    visibleItemsNumber: 5,
    hasFade: true
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ae=["ScrollableListListStory","ScrollableListListStory_Loading","ScrollableListListStory_WithFade","ScrollableListListStory_WithFade_2_products","ScrollableListListStory_All_Products","ScrollableListListStory_PurchaseLists"],me=Object.freeze(Object.defineProperty({__proto__:null,ScrollableListListStory:c,ScrollableListListStory_All_Products:u,ScrollableListListStory_Loading:n,ScrollableListListStory_PurchaseLists:p,ScrollableListListStory_WithFade:m,ScrollableListListStory_WithFade_2_products:d,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{y as S,p as a,d as b,me as s};
