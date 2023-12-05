import{c as ee}from"./index-a587463d.js";import{a as t,j as e,F as k}from"./jsx-runtime-a3a6c0b8.js";import{I as re}from"./icon-b918f330.js";import{U as ne}from"./ui-link-90f48b0d.js";import{T as n}from"./text-6742cc3c.js";import{T as y}from"./tags-list-c3615f53.js";import{H as g}from"./heading-a9520268.js";const te="_orderItem_1i86d_1",ae="_border_1i86d_15",se="_firstRow_1i86d_26",oe="_orderNumber_1i86d_35",le="_statusWrapper_1i86d_44",de="_status_1i86d_44",ie="_icon_1i86d_62",me="_secondRow_1i86d_75",ce="_deliveryDate_1i86d_80",ue="_downloadLink_1i86d_87",pe="_linkContentWrapper_1i86d_102",_e="_tagsWrapper_1i86d_108",ke="_title_1i86d_113",ge="_linkWrapper_1i86d_117",he="_linkButton_1i86d_128",ye="_label_1i86d_140",fe="_box_1i86d_146",r={orderItem:te,border:ae,firstRow:se,orderNumber:oe,statusWrapper:le,status:de,icon:ie,secondRow:me,deliveryDate:ce,downloadLink:ue,linkContentWrapper:pe,tagsWrapper:_e,title:ke,linkWrapper:ge,linkButton:he,label:ye,box:fe},h=({orderNumber:o,orderNumberLabel:a,title:Te,children:Ne,orderDate:Le,deliveryDate:O,deliveryDateLabel:I,orderStatus:S,linkUrl:b,linkComponent:v,onClick:C,onDownload:Ue,downloadLabel:D,downloadUrl:w,border:Z})=>t("div",{className:ee(r.orderItem,{[r.border]:Z}),children:[t("div",{className:r.firstRow,children:[o&&a&&e(v,{to:b,children:e("h4",{className:r.orderNumber,onClick:C,children:`${a} ${o}`})}),t("div",{className:r.statusWrapper,children:[S&&e("span",{className:r.status,children:S}),t(v,{to:b,children:[e("h4",{className:r.orderNumber,onClick:C}),e(re,{className:r.icon,icon:"icon-chevrons-right"})]})]})]}),t("div",{className:r.secondRow,children:[O&&I&&e("p",{className:r.deliveryDate,children:`${I} ${O}`}),D&&w&&e(ne,{className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,target:"_blank",href:w,children:D})]})]});try{h.displayName="OrderItem",h.__docgenInfo={description:"",displayName:"OrderItem",props:{orderNumber:{defaultValue:null,description:"",name:"orderNumber",required:!1,type:{name:"string"}},orderNumberLabel:{defaultValue:null,description:"",name:"orderNumberLabel",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},deliveryDateLabel:{defaultValue:null,description:"",name:"deliveryDateLabel",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!0,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},downloadLabel:{defaultValue:null,description:"",name:"downloadLabel",required:!1,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"",name:"downloadUrl",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Oe={title:"Design System/Molecules/OrderItem",component:h},s={render:({...o})=>{function a(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(h,{...o,onClick:a})})}};function f(o){return o.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"rectangular",color:a.Class}))}const Y=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Ie=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],Se=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],be=t(k,{children:[e(y,{tagsList:f(Y)}),e(g,{order:4,children:"Sommmarfest"}),e(n,{children:"Leverad: 2022-06-07"}),e(n,{children:"22 artiklar"})]}),ve=t(k,{children:[e(y,{tagsList:f(Y)}),e(g,{order:4,children:"Vinterfest"}),e(n,{children:"Leverad: 2022-05-01"}),e(n,{children:"18 artiklar"})]}),Ce=t(k,{children:[e(g,{order:4,children:"Order nummer: 1423569"}),e(n,{children:"22 artiklar"})]}),De=t(k,{children:[e(y,{tagsList:f(Ie)}),e(g,{order:4,children:"Order nummer: 1423569"}),e(n,{children:"Beräknad leverans: 2022-06-07"}),e(n,{children:"22 artiklar"})]}),we=t(k,{children:[e(y,{tagsList:f(Se)}),e(g,{order:4,children:"Order nummer: 1423568"}),e(n,{children:"Beräknad leverans: 2022-06-03"}),e(n,{children:"12 artiklar"})]}),l={...s,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},d={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},i={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...s,args:{children:be,linkUrl:"/link-to-list-details",linkComponent:"a"}},c={...s,args:{children:ve,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...s,args:{children:Ce,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...s,args:{children:De,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...s,args:{children:we,linkUrl:"/link-to-list-details",linkComponent:"a"}};var x,T,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    orderNumber: '1423569',
    orderNumberLabel: 'Ordernr.',
    orderStatus: 'Behandlas',
    deliveryDate: '2023-06-07',
    deliveryDateLabel: 'Leverans:',
    linkComponent: 'a',
    downloadLabel: 'faktura.pdf',
    downloadUrl: 'http://google.com/',
    onDownload: () => console.log('download')
  }
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var L,U,V;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var q,M,W;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var A,B,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var E,j,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var $,F,H;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var z,G,J;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const xe=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:l,OrderItemStory_Delivered:i,OrderItemStory_Processing:d,OrderItem_MinSenasteOrder:u,OrderItem_MinaOrdrar_1:p,OrderItem_MinaOrdrar_2:_,OrderItem_Sommarfest:m,OrderItem_Vinterfest:c,__namedExportsOrder:xe,default:Oe},Symbol.toStringTag,{value:"Module"}));export{h as O,u as a,m as b,c,p as d,_ as e,Ee as o};
