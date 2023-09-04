import{g as Q}from"./tag-helper-8d720359.js";import{T as C}from"./tag-cf40f1b7.js";import{a as e,j as n,F as k}from"./jsx-runtime-76c5c2e2.js";import{I as R}from"./icon-7e598265.js";import{T as r}from"./text-9b083925.js";import{T as O}from"./tags-list-f8e9454d.js";import{H as g}from"./heading-3f08a059.js";const X="_orderItem_cmziz_1",Y="_linkContentWrapper_cmziz_5",Z="_tagsWrapper_cmziz_11",$="_title_cmziz_16",ee="_linkWrapper_cmziz_20",re="_linkButton_cmziz_31",te="_label_cmziz_43",ne="_box_cmziz_49",l={orderItem:X,linkContentWrapper:Y,tagsWrapper:Z,title:$,linkWrapper:ee,linkButton:re,label:te,box:ne};function h({title:a,children:t,orderDate:I,deliveryDate:S,orderStatus:f,linkUrl:_,linkComponent:J,onClick:K}){return e("div",{className:l.orderItem,children:_?n(J,{className:l.linkWrapper,to:_,href:_,onClick:K,children:[n("div",{className:l.linkContentWrapper,children:[I||S?n("div",{className:l.tagsWrapper,children:[I&&e(C,{text:I,shape:"rectangular",color:"grey"}),S&&e(C,{text:S,shape:"rectangular",color:f?Q(f):"grey"})]}):null,a&&e("h4",{className:l.title,children:a}),e("div",{children:t})]}),_&&e(R,{icon:"icon-chevrons-right"})]}):e("div",{children:t})})}try{h.displayName="OrderItem",h.__docgenInfo={description:"",displayName:"OrderItem",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const ae={title:"Design System/Molecules/OrderItem",component:h},s={render:({...a})=>{function t(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(h,{...a,onClick:t})})}};function y(a){return a.map(t=>({text:t.Text,shape:t.Shape?t.Shape:"rectangular",color:t.Class}))}const G=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],se=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],le=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],ie=n(k,{children:[e(O,{tagsList:y(G)}),e(g,{order:4,children:"Sommmarfest"}),e(r,{children:"Leverad: 2022-06-07"}),e(r,{children:"22 artiklar"})]}),oe=n(k,{children:[e(O,{tagsList:y(G)}),e(g,{order:4,children:"Vinterfest"}),e(r,{children:"Leverad: 2022-05-01"}),e(r,{children:"18 artiklar"})]}),de=n(k,{children:[e(g,{order:4,children:"Order nummer: 1423569"}),e(r,{children:"22 artiklar"})]}),me=n(k,{children:[e(O,{tagsList:y(se)}),e(g,{order:4,children:"Order nummer: 1423569"}),e(r,{children:"Beräknad leverans: 2022-06-07"}),e(r,{children:"22 artiklar"})]}),ce=n(k,{children:[e(O,{tagsList:y(le)}),e(g,{order:4,children:"Order nummer: 1423568"}),e(r,{children:"Beräknad leverans: 2022-06-03"}),e(r,{children:"12 artiklar"})]}),i={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},o={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...s,args:{children:ie,linkUrl:"/link-to-list-details",linkComponent:"a"}},m={...s,args:{children:oe,linkUrl:"/link-to-list-details",linkComponent:"a"}},c={...s,args:{children:de,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...s,args:{children:me,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...s,args:{children:ce,linkUrl:"/link-to-list-details",linkComponent:"a"}};var T,x,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,M,U;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(M=o.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var W,b,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(V=(b=d.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var D,A,q;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,N,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var E,j,w;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var P,F,H;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const pe=["OrderItemStory_Processing","OrderItemStory_Delivered","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],Ie=Object.freeze(Object.defineProperty({__proto__:null,OrderItemStory_Delivered:o,OrderItemStory_Processing:i,OrderItem_MinSenasteOrder:c,OrderItem_MinaOrdrar_1:p,OrderItem_MinaOrdrar_2:u,OrderItem_Sommarfest:d,OrderItem_Vinterfest:m,__namedExportsOrder:pe,default:ae},Symbol.toStringTag,{value:"Module"}));export{h as O,c as a,d as b,m as c,p as d,u as e,Ie as o};
//# sourceMappingURL=order-item.stories-7e600273.js.map
