import{c as ee}from"./index-74f03c09.js";import{j as n,a as e,F as k}from"./jsx-runtime-76c5c2e2.js";import{I as re}from"./icon-17f6a5b2.js";import{T as t}from"./text-3e056ff6.js";import{T as h}from"./tags-list-5098e390.js";import{H as g}from"./heading-e5a679a5.js";const te="_orderItem_1u7z8_1",ne="_border_1u7z8_15",ae="_firstRow_1u7z8_26",se="_orderNumber_1u7z8_35",oe="_statusWrapper_1u7z8_44",le="_status_1u7z8_44",de="_icon_1u7z8_62",ie="_secondRow_1u7z8_75",me="_deliveryDate_1u7z8_80",ce="_downloadButton_1u7z8_87",ue="_linkContentWrapper_1u7z8_99",pe="_tagsWrapper_1u7z8_105",_e="_title_1u7z8_110",ke="_linkWrapper_1u7z8_114",ge="_linkButton_1u7z8_125",ye="_label_1u7z8_137",he="_box_1u7z8_143",r={orderItem:te,border:ne,firstRow:ae,orderNumber:se,statusWrapper:oe,status:le,icon:de,secondRow:ie,deliveryDate:me,downloadButton:ce,linkContentWrapper:ue,tagsWrapper:pe,title:_e,linkWrapper:ke,linkButton:ge,label:ye,box:he},y=({orderNumber:o,orderNumberLabel:a,title:we,children:xe,orderDate:Ne,deliveryDate:O,deliveryDateLabel:I,orderStatus:S,linkUrl:b,linkComponent:v,onClick:C,onDownload:D,downloadLabel:T,border:Z})=>n("div",{className:ee(r.orderItem,{[r.border]:Z}),children:[n("div",{className:r.firstRow,children:[o&&a&&e(v,{to:b,children:e("h4",{className:r.orderNumber,onClick:C,children:`${a} ${o}`})}),n("div",{className:r.statusWrapper,children:[S&&e("span",{className:r.status,children:S}),n(v,{to:b,children:[e("h4",{className:r.orderNumber,onClick:C}),e(re,{className:r.icon,icon:"icon-chevrons-right"})]})]})]}),n("div",{className:r.secondRow,children:[O&&I&&e("p",{className:r.deliveryDate,children:`${I} ${O}`}),D&&T&&e("button",{className:r.downloadButton,onClick:D,type:"button",children:T})]})]});try{y.displayName="OrderItem",y.__docgenInfo={description:"",displayName:"OrderItem",props:{orderNumber:{defaultValue:null,description:"",name:"orderNumber",required:!1,type:{name:"string"}},orderNumberLabel:{defaultValue:null,description:"",name:"orderNumberLabel",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},deliveryDateLabel:{defaultValue:null,description:"",name:"deliveryDateLabel",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!0,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"",name:"downloadUrl",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},downloadLabel:{defaultValue:null,description:"",name:"downloadLabel",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const fe={title:"Design System/Molecules/OrderItem",component:y},s={render:({...o})=>{function a(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(y,{...o,onClick:a})})}};function f(o){return o.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"rectangular",color:a.Class}))}const Y=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Oe=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],Ie=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],Se=n(k,{children:[e(h,{tagsList:f(Y)}),e(g,{order:4,children:"Sommmarfest"}),e(t,{children:"Leverad: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),be=n(k,{children:[e(h,{tagsList:f(Y)}),e(g,{order:4,children:"Vinterfest"}),e(t,{children:"Leverad: 2022-05-01"}),e(t,{children:"18 artiklar"})]}),ve=n(k,{children:[e(g,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"22 artiklar"})]}),Ce=n(k,{children:[e(h,{tagsList:f(Oe)}),e(g,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"Beräknad leverans: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),De=n(k,{children:[e(h,{tagsList:f(Ie)}),e(g,{order:4,children:"Order nummer: 1423568"}),e(t,{children:"Beräknad leverans: 2022-06-03"}),e(t,{children:"12 artiklar"})]}),l={...s,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",onDownload:()=>console.log("download")}},d={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},i={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...s,args:{children:Se,linkUrl:"/link-to-list-details",linkComponent:"a"}},c={...s,args:{children:be,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...s,args:{children:ve,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...s,args:{children:Ce,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...s,args:{children:De,linkUrl:"/link-to-list-details",linkComponent:"a"}};var w,x,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    orderNumber: '1423569',
    orderNumberLabel: 'Ordernr.',
    orderStatus: 'Behandlas',
    deliveryDate: '2023-06-07',
    deliveryDateLabel: 'Leverans:',
    linkComponent: 'a',
    downloadLabel: 'faktura.pdf',
    onDownload: () => console.log('download')
  }
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var V,z,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var U,q,M;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(q=i.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,B,A;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var R,E,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(j=(E=c.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var P,$,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(F=($=u.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var H,G,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Te=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],We=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:l,OrderItemStory_Delivered:i,OrderItemStory_Processing:d,OrderItem_MinSenasteOrder:u,OrderItem_MinaOrdrar_1:p,OrderItem_MinaOrdrar_2:_,OrderItem_Sommarfest:m,OrderItem_Vinterfest:c,__namedExportsOrder:Te,default:fe},Symbol.toStringTag,{value:"Module"}));export{y as O,u as a,m as b,c,p as d,_ as e,We as o};
//# sourceMappingURL=order-item.stories-e6b7d2bb.js.map
