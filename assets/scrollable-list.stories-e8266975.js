import{r as g,j as r}from"./jsx-runtime-a3a6c0b8.js";import{c as v}from"./index-a587463d.js";import{L as Q}from"./loader-72deb8c4.js";import{C as s,b as U}from"./cart-product.stories-ee657d99.js";import{L as a,a as X}from"./link-list-item.stories-d4c82f4e.js";const Y="_cartProductList_kd1ej_1",Z="_list_kd1ej_5",$="_listFade_kd1ej_26",ee="_listItem_kd1ej_33",h={cartProductList:Y,list:Z,listFade:$,listItem:ee},_=({children:e,loading:o,visibleItemsNumber:y,hasFade:f,className:P})=>{const[I,D]=g.useState(0),[w,G]=g.useState(f),i=g.useRef(null);function J(t){const b=t.currentTarget.scrollHeight-t.currentTarget.clientHeight<=t.currentTarget.scrollTop+50;G(!b)}function K(t,b){return t<b?t:b}return g.useEffect(()=>{var t;(t=i==null?void 0:i.current)!=null&&t.clientHeight&&D(i.current.clientHeight)},[]),!Array.isArray(e)||!e.length?null:r("div",{className:v(h.cartProductList,P&&P),children:o?r(Q,{visible:o,size:"sm",position:"relative",color:"orange"}):r("ul",{onScroll:f?J:void 0,className:v(h.list,w&&y?h.listFade:""),style:y?{height:I*K(e.length,y)}:{height:I*e.length},children:e==null?void 0:e.map(t=>r("li",{ref:i,className:h.listItem,children:t},Math.random()))})})};try{_.displayName="ScrollableList",_.__docgenInfo={description:"",displayName:"ScrollableList",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},visibleItemsNumber:{defaultValue:null,description:"",name:"visibleItemsNumber",required:!1,type:{name:"number"}},hasFade:{defaultValue:null,description:"",name:"hasFade",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const te={title:"Design System/Molecules/ScrollableList",component:_},L=[s.args,s.args,s.args,s.args,s.args,s.args,s.args],re=[a.args,a.args,a.args,a.args,a.args,a.args,a.args],S=e=>e==null?void 0:e.map(o=>r(U,{...o,onClickRemoveProduct:()=>{}},Math.random())),se=e=>e==null?void 0:e.map(o=>r(X,{...o},Math.random())),l={render:e=>r("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:r(_,{...e,children:e.children})})},c={...l,args:{children:S(L),visibleItemsNumber:2}},n={...l,args:{children:S(L),visibleItemsNumber:2,loading:!0}},d={...l,args:{children:S(L),visibleItemsNumber:4,hasFade:!0}},m={...l,args:{children:S(L),visibleItemsNumber:2,hasFade:!0}},u={...l,args:{children:S(L)}},p={...l,args:{children:se(re),visibleItemsNumber:5,hasFade:!0}};var F,N,T;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var j,k,x;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    loading: true
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var H,M,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 4,
    hasFade: true
  }
}`,...(W=(M=d.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var q,A,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    hasFade: true
  }
}`,...(C=(A=m.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var V,E,O;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts)
  }
}`,...(O=(E=u.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var z,R,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: getPurchaseLists(purchaseLists),
    visibleItemsNumber: 5,
    hasFade: true
  }
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const ae=["ScrollableListListStory","ScrollableListListStory_Loading","ScrollableListListStory_WithFade","ScrollableListListStory_WithFade_2_products","ScrollableListListStory_All_Products","ScrollableListListStory_PurchaseLists"],de=Object.freeze(Object.defineProperty({__proto__:null,ScrollableListListStory:c,ScrollableListListStory_All_Products:u,ScrollableListListStory_Loading:n,ScrollableListListStory_PurchaseLists:p,ScrollableListListStory_WithFade:d,ScrollableListListStory_WithFade_2_products:m,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{_ as S,p as a,m as b,de as s};
