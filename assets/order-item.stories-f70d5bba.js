import{T as J}from"./tag-dd67dc89.js";import{a as e,j as a,F as k}from"./jsx-runtime-76c5c2e2.js";import{I as K}from"./icon-af819d0c.js";import{T as r}from"./text-3e056ff6.js";import{T as y}from"./tags-list-48add688.js";import{H as _}from"./heading-e5a679a5.js";const Q="_orderItem_cmziz_1",R="_linkContentWrapper_cmziz_5",X="_tagsWrapper_cmziz_11",Y="_title_cmziz_16",Z="_linkWrapper_cmziz_20",$="_linkButton_cmziz_31",ee="_label_cmziz_43",re="_box_cmziz_49",l={orderItem:Q,linkContentWrapper:R,tagsWrapper:X,title:Y,linkWrapper:Z,linkButton:$,label:ee,box:re};function h({title:n,children:t,orderDate:I,deliveryDate:F,orderStatus:ce,linkUrl:g,linkComponent:H,onClick:G}){return e("div",{className:l.orderItem,children:g?a(H,{className:l.linkWrapper,to:g,href:g,onClick:G,children:[a("div",{className:l.linkContentWrapper,children:[I||F?e("div",{className:l.tagsWrapper,children:I&&e(J,{text:I,shape:"rectangular",color:"grey"})}):null,n&&e("h4",{className:l.title,children:n}),e("div",{children:t})]}),g&&e(K,{icon:"icon-chevrons-right"})]}):e("div",{children:t})})}try{h.displayName="OrderItem",h.__docgenInfo={description:"",displayName:"OrderItem",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const te={title:"Design System/Molecules/OrderItem",component:h},s={render:({...n})=>{function t(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(h,{...n,onClick:t})})}};function O(n){return n.map(t=>({text:t.Text,shape:t.Shape?t.Shape:"rectangular",color:t.Class}))}const P=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],ne=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],ae=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],se=a(k,{children:[e(y,{tagsList:O(P)}),e(_,{order:4,children:"Sommmarfest"}),e(r,{children:"Leverad: 2022-06-07"}),e(r,{children:"22 artiklar"})]}),le=a(k,{children:[e(y,{tagsList:O(P)}),e(_,{order:4,children:"Vinterfest"}),e(r,{children:"Leverad: 2022-05-01"}),e(r,{children:"18 artiklar"})]}),ie=a(k,{children:[e(_,{order:4,children:"Order nummer: 1423569"}),e(r,{children:"22 artiklar"})]}),oe=a(k,{children:[e(y,{tagsList:O(ne)}),e(_,{order:4,children:"Order nummer: 1423569"}),e(r,{children:"Beräknad leverans: 2022-06-07"}),e(r,{children:"22 artiklar"})]}),de=a(k,{children:[e(y,{tagsList:O(ae)}),e(_,{order:4,children:"Order nummer: 1423568"}),e(r,{children:"Beräknad leverans: 2022-06-03"}),e(r,{children:"12 artiklar"})]}),i={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},o={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...s,args:{children:se,linkUrl:"/link-to-list-details",linkComponent:"a"}},m={...s,args:{children:le,linkUrl:"/link-to-list-details",linkComponent:"a"}},c={...s,args:{children:ie,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...s,args:{children:oe,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...s,args:{children:de,linkUrl:"/link-to-list-details",linkComponent:"a"}};var S,f,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    orderDate: '2023-06-01',
    deliveryDate: '2023-06-07',
    orderStatus: 'status-progress',
    title: 'Order nummer: 1423569',
    children: <Text>22 artiklar</Text>,
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a'
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var T,x,v;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    orderDate: '2023-06-01',
    deliveryDate: '2023-06-07',
    orderStatus: 'status-delivered',
    title: 'Order nummer: 1423569',
    children: <Text>22 artiklar</Text>,
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a'
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,M,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var U,W,b;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(b=(W=m.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var V,A,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(q=(A=c.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,N,B;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(B=(N=p.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var E,j,w;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const me=["OrderItemStory_Processing","OrderItemStory_Delivered","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],ye=Object.freeze(Object.defineProperty({__proto__:null,OrderItemStory_Delivered:o,OrderItemStory_Processing:i,OrderItem_MinSenasteOrder:c,OrderItem_MinaOrdrar_1:p,OrderItem_MinaOrdrar_2:u,OrderItem_Sommarfest:d,OrderItem_Vinterfest:m,__namedExportsOrder:me,default:te},Symbol.toStringTag,{value:"Module"}));export{h as O,c as a,d as b,m as c,p as d,u as e,ye as o};
//# sourceMappingURL=order-item.stories-f70d5bba.js.map
