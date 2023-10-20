import{r as b}from"./index-6f814c40.js";import{c as I}from"./index-74f03c09.js";import{a as r}from"./jsx-runtime-76c5c2e2.js";import{L as K}from"./loader-ce89f5e5.js";import{c as s,b as Q}from"./cart-product.stories-098cab81.js";import{L as a,a as U}from"./link-list-item.stories-49d9f6cd.js";const X="_cartProductList_kd1ej_1",Y="_list_kd1ej_5",Z="_listFade_kd1ej_26",$="_listItem_kd1ej_33",g={cartProductList:X,list:Y,listFade:Z,listItem:$},h=({children:e,loading:o,visibleItemsNumber:_,hasFade:y,className:f})=>{const[P,B]=b.useState(0),[D,w]=b.useState(y),i=b.useRef(null);function G(t){const J=t.currentTarget.scrollHeight-t.currentTarget.clientHeight<=t.currentTarget.scrollTop+50;w(!J)}return b.useEffect(()=>{var t;(t=i==null?void 0:i.current)!=null&&t.clientHeight&&B(i.current.clientHeight)},[]),!Array.isArray(e)||!e.length?null:r("div",{className:I(g.cartProductList,f&&f),children:o?r(K,{visible:o,size:"sm",position:"relative",color:"orange"}):r("ul",{onScroll:y?G:void 0,className:I(g.list,D&&_?g.listFade:""),style:_?{height:P*_}:{height:P*e.length},children:e==null?void 0:e.map(t=>r("li",{ref:i,className:g.listItem,children:t},Math.random()))})})};try{h.displayName="ScrollableList",h.__docgenInfo={description:"",displayName:"ScrollableList",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},visibleItemsNumber:{defaultValue:null,description:"",name:"visibleItemsNumber",required:!1,type:{name:"number"}},hasFade:{defaultValue:null,description:"",name:"hasFade",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Design System/Molecules/ScrollableList",component:h},L=[s.args,s.args,s.args,s.args,s.args,s.args,s.args],te=[a.args,a.args,a.args,a.args,a.args,a.args,a.args],S=e=>e==null?void 0:e.map(o=>r(Q,{...o,onClickRemoveProduct:()=>{}},Math.random())),re=e=>e==null?void 0:e.map(o=>r(U,{...o},Math.random())),l={render:e=>r("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:r(h,{...e,children:e.children})})},c={...l,args:{children:S(L),visibleItemsNumber:2}},n={...l,args:{children:S(L),visibleItemsNumber:2,loading:!0}},m={...l,args:{children:S(L),visibleItemsNumber:4,hasFade:!0}},d={...l,args:{children:S(L),visibleItemsNumber:2,hasFade:!0}},u={...l,args:{children:S(L)}},p={...l,args:{children:re(te),visibleItemsNumber:5,hasFade:!0}};var v,F,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2
  }
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var T,j,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    loading: true
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var x,H,M;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 4,
    hasFade: true
  }
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var W,q,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    hasFade: true
  }
}`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var V,C,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts)
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,z,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...ScrollableListStoryTemplate,
  args: {
    children: getPurchaseLists(purchaseLists),
    visibleItemsNumber: 5,
    hasFade: true
  }
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const se=["ScrollableListListStory","ScrollableListListStory_Loading","ScrollableListListStory_WithFade","ScrollableListListStory_WithFade_2_products","ScrollableListListStory_All_Products","ScrollableListListStory_PurchaseLists"],me=Object.freeze(Object.defineProperty({__proto__:null,ScrollableListListStory:c,ScrollableListListStory_All_Products:u,ScrollableListListStory_Loading:n,ScrollableListListStory_PurchaseLists:p,ScrollableListListStory_WithFade:m,ScrollableListListStory_WithFade_2_products:d,__namedExportsOrder:se,default:ee},Symbol.toStringTag,{value:"Module"}));export{h as S,p as a,d as b,me as s};
//# sourceMappingURL=scrollable-list.stories-21d7168b.js.map
