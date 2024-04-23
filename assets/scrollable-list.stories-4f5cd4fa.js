import{r as g,j as r}from"./jsx-runtime-a3a6c0b8.js";import{c as v}from"./index-a587463d.js";import{L as Q}from"./loader-72deb8c4.js";import{C as s,b as U}from"./cart-product.stories-6c33988d.js";import{L as a,a as X}from"./link-list-item.stories-e3747d85.js";const Y="_cartProductList_166fi_1",Z="_list_166fi_5",$="_listFade_166fi_26",ee="_listItem_166fi_33",h={cartProductList:Y,list:Z,listFade:$,listItem:ee},_=({children:e,loading:o,visibleItemsNumber:y,hasFade:f,className:P})=>{const[I,D]=g.useState(0),[w,G]=g.useState(f),i=g.useRef(null);function J(t){const b=t.currentTarget.scrollHeight-t.currentTarget.clientHeight<=t.currentTarget.scrollTop+50;G(!b)}function K(t,b){return t<b?t:b}return g.useEffect(()=>{var t;(t=i==null?void 0:i.current)!=null&&t.clientHeight&&D(i.current.clientHeight)},[]),!Array.isArray(e)||!e.length?null:r("div",{className:v(h.cartProductList,P&&P),children:o?r(Q,{visible:o,size:"sm",position:"relative",color:"orange"}):r("ul",{onScroll:f?J:void 0,className:v(h.list,w&&y?h.listFade:""),style:y?{height:I*K(e.length,y)}:{height:I*e.length},children:e==null?void 0:e.map(t=>r("li",{ref:i,className:h.listItem,children:t},Math.random()))})})};try{_.displayName="ScrollableList",_.__docgenInfo={description:"",displayName:"ScrollableList",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},visibleItemsNumber:{defaultValue:null,description:"",name:"visibleItemsNumber",required:!1,type:{name:"number"}},hasFade:{defaultValue:null,description:"",name:"hasFade",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const te={title:"Design System/Molecules/ScrollableList",component:_},L=[s.args,s.args,s.args,s.args,s.args,s.args,s.args],re=[a.args,a.args,a.args,a.args,a.args,a.args,a.args],S=e=>e==null?void 0:e.map(o=>r(U,{...o,onClickRemoveProduct:()=>{}},Math.random())),se=e=>e==null?void 0:e.map(o=>r(X,{...o},Math.random())),l={render:e=>r("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:r(_,{...e,children:e.children})})},c={...l,args:{children:S(L),visibleItemsNumber:2}},n={...l,args:{children:S(L),visibleItemsNumber:2,loading:!0}},m={...l,args:{children:S(L),visibleItemsNumber:4,hasFade:!0}},u={...l,args:{children:S(L),visibleItemsNumber:2,hasFade:!0}},d={...l,args:{children:S(L)}},p={...l,args:{children:se(re),visibleItemsNumber:5,hasFade:!0}};var F,N,T;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var x,H,M;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    loading: true
  }
}`,...(M=(H=n.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var W,j,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 4,
    hasFade: true
  }
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var A,C,V;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    hasFade: true
  }
}`,...(V=(C=u.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var k,E,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts)
  }
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var z,R,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: getPurchaseLists(purchaseLists),
    visibleItemsNumber: 5,
    hasFade: true
  }
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const ae=["ScrollableListListStory","ScrollableListListStory_Loading","ScrollableListListStory_WithFade","ScrollableListListStory_WithFade_2_products","ScrollableListListStory_All_Products","ScrollableListListStory_PurchaseLists"],me=Object.freeze(Object.defineProperty({__proto__:null,ScrollableListListStory:c,ScrollableListListStory_All_Products:d,ScrollableListListStory_Loading:n,ScrollableListListStory_PurchaseLists:p,ScrollableListListStory_WithFade:m,ScrollableListListStory_WithFade_2_products:u,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{_ as S,p as a,u as b,me as s};
