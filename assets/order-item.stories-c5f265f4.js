import{c as L}from"./index-a587463d.js";import{j as e,a as n,F as l}from"./jsx-runtime-a3a6c0b8.js";import{I as R}from"./icon-5fefd509.js";import{U as ue}from"./ui-link-13fe156c.js";import{B as pe}from"./button-43643fd6.js";import{T as t}from"./text-cdc0625f.js";import{T as S}from"./tags-list-3f7fda62.js";import{H as h}from"./heading-47d2ab87.js";const _e="_orderItem_uzo0f_1",fe="_border_uzo0f_15",ge="_firstRow_uzo0f_26",ke="_orderNumber_uzo0f_42",he="_statusWrapper_uzo0f_52",ye="_status_uzo0f_52",Ie="_statusIcon_uzo0f_74",Oe="_icon_uzo0f_83",Se="_secondRow_uzo0f_96",ve="_secondRowCol_uzo0f_101",we="_deliveryDate_uzo0f_107",be="_downloadLink_uzo0f_114",Ce="_linkContentWrapper_uzo0f_129",De="_tagsWrapper_uzo0f_135",Te="_title_uzo0f_140",xe="_linkWrapper_uzo0f_144",Ne="_linkButton_uzo0f_155",Ve="_label_uzo0f_167",Ue="_box_uzo0f_173",r={orderItem:_e,border:fe,firstRow:ge,orderNumber:ke,statusWrapper:he,status:ye,statusIcon:Ie,icon:Oe,secondRow:Se,secondRowCol:ve,deliveryDate:we,downloadLink:be,linkContentWrapper:Ce,tagsWrapper:De,title:Te,linkWrapper:xe,linkButton:Ne,label:Ve,box:Ue},O=({orderNumber:s,orderNumberLabel:a,title:Ee,children:b,orderDate:C,orderDateLabel:D,deliveryDate:y,deliveryDateLabel:I,orderStatus:T,linkUrl:w,linkComponent:x,btnLabel:N,onClick:d,onDownload:je,downloadLabel:V,downloadUrl:U,border:ce,statusIcon:z})=>{const me=()=>{switch(z){case"warning":return"icon-alert-circle";case"error":return"icon-alert-triangle";case"success":default:return"icon-check"}};return e("div",{className:L(r.orderItem,{[r.border]:ce}),children:w?n(l,{children:[n("div",{className:r.firstRow,children:[s&&a&&e(x,{to:w,children:e("h4",{className:r.orderNumber,onClick:d,children:`${a} ${s}`})}),n("div",{className:r.statusWrapper,children:[T&&n("span",{className:r.status,children:[T,z&&e(R,{className:r.statusIcon,icon:me()})]}),n(x,{to:w,children:[e("h4",{className:r.orderNumber,onClick:d}),e(R,{className:r.icon,icon:"icon-chevrons-right"})]})]})]}),n("div",{className:r.secondRow,children:[y&&I&&e("p",{className:r.deliveryDate,children:`${I} ${y}`}),V&&U&&e(ue,{download:!0,className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,href:U,children:V})]}),e("div",{children:b})]}):n(l,{children:[n("div",{className:r.firstRow,children:[s&&a&&d&&e("h4",{className:r.orderNumber,onClick:d,children:`${a} ${s}`}),N&&d&&e("div",{className:r.statusWrapper,children:e(pe,{type:"button",surface:"primary",onClick:d,children:N})})]}),n("div",{className:L(r.secondRow,r.secondRowCol),children:[C&&D&&e("p",{className:r.deliveryDate,children:`${D} ${C}`}),y&&I&&e("p",{className:r.deliveryDate,children:`${I} ${y}`})]}),e("div",{children:b})]})})};try{O.displayName="OrderItem",O.__docgenInfo={description:"",displayName:"OrderItem",props:{orderNumber:{defaultValue:null,description:"",name:"orderNumber",required:!1,type:{name:"string"}},orderNumberLabel:{defaultValue:null,description:"",name:"orderNumberLabel",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},statusIcon:{defaultValue:{value:"'default'"},description:"Defines the background color of the status label",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},deliveryDateLabel:{defaultValue:null,description:"",name:"deliveryDateLabel",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},downloadLabel:{defaultValue:null,description:"",name:"downloadLabel",required:!1,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"",name:"downloadUrl",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},orderDateLabel:{defaultValue:null,description:"",name:"orderDateLabel",required:!1,type:{name:"string"}},btnLabel:{defaultValue:null,description:"",name:"btnLabel",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const ze={title:"Design System/Molecules/OrderItem",component:O},o={render:({...s})=>{function a(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(O,{...s,onClick:a})})}};function v(s){return s.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"rectangular",color:a.Class}))}const ie=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Le=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],Re=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],qe=n(l,{children:[e(S,{tagsList:v(ie)}),e(h,{order:4,children:"Sommmarfest"}),e(t,{children:"Leverad: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),We=n(l,{children:[e(S,{tagsList:v(ie)}),e(h,{order:4,children:"Vinterfest"}),e(t,{children:"Leverad: 2022-05-01"}),e(t,{children:"18 artiklar"})]}),Me=n(l,{children:[e(h,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"22 artiklar"})]}),Ae=n(l,{children:[e(S,{tagsList:v(Le)}),e(h,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"Beräknad leverans: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),Be=n(l,{children:[e(S,{tagsList:v(Re)}),e(h,{order:4,children:"Order nummer: 1423568"}),e(t,{children:"Beräknad leverans: 2022-06-03"}),e(t,{children:"12 artiklar"})]}),i={...o,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},c={...o,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...o,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},u={...o,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"Returned",statusIcon:"success",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},p={...o,args:{children:qe,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...o,args:{children:We,linkUrl:"/link-to-list-details",linkComponent:"a"}},f={...o,args:{children:Me,linkUrl:"/link-to-list-details",linkComponent:"a"}},g={...o,args:{children:Ae,linkUrl:"/link-to-list-details",linkComponent:"a"}},k={...o,args:{children:Be,linkUrl:"/link-to-list-details",linkComponent:"a"}};var q,W,M;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(W=i.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var A,B,$;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(B=c.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var E,j,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,H,G;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    orderDate: '2023-06-01',
    deliveryDate: '2023-06-07',
    orderStatus: 'Returned',
    statusIcon: 'success',
    title: 'Order nummer: 1423569',
    children: <Text>22 artiklar</Text>,
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a'
  }
}`,...(G=(H=u.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ne=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,ae,se;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,de;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(de=(le=k.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const $e=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItemStory_Returned","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:i,OrderItemStory_Delivered:m,OrderItemStory_Processing:c,OrderItemStory_Returned:u,OrderItem_MinSenasteOrder:f,OrderItem_MinaOrdrar_1:g,OrderItem_MinaOrdrar_2:k,OrderItem_Sommarfest:p,OrderItem_Vinterfest:_,__namedExportsOrder:$e,default:ze},Symbol.toStringTag,{value:"Module"}));export{O,f as a,p as b,_ as c,g as d,k as e,Ye as o};
