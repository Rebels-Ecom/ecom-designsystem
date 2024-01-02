import{c as le}from"./index-a587463d.js";import{a as n,j as e,F as g}from"./jsx-runtime-a3a6c0b8.js";import{I as N}from"./icon-5fefd509.js";import{U as ie}from"./ui-link-a18343fc.js";import{T as t}from"./text-6742cc3c.js";import{T as f}from"./tags-list-5108b032.js";import{H as h}from"./heading-a9520268.js";const de="_orderItem_isomj_1",me="_border_isomj_15",ce="_firstRow_isomj_26",ue="_orderNumber_isomj_35",pe="_statusWrapper_isomj_44",_e="_status_isomj_44",ke="_statusIcon_isomj_61",ge="_icon_isomj_70",he="_secondRow_isomj_83",ye="_deliveryDate_isomj_88",fe="_downloadLink_isomj_95",Ie="_linkContentWrapper_isomj_110",Oe="_tagsWrapper_isomj_116",Se="_title_isomj_121",be="_linkWrapper_isomj_125",ve="_linkButton_isomj_136",De="_label_isomj_148",we="_box_isomj_154",r={orderItem:de,border:me,firstRow:ce,orderNumber:ue,statusWrapper:pe,status:_e,statusIcon:ke,icon:ge,secondRow:he,deliveryDate:ye,downloadLink:fe,linkContentWrapper:Ie,tagsWrapper:Oe,title:Se,linkWrapper:be,linkButton:ve,label:De,box:we},y=({orderNumber:o,orderNumberLabel:a,title:Me,children:We,orderDate:Re,deliveryDate:O,deliveryDateLabel:S,orderStatus:b,linkUrl:v,linkComponent:D,onClick:w,onDownload:Ae,downloadLabel:C,downloadUrl:T,border:se,statusIcon:x})=>{const oe=()=>{switch(x){case"warning":return"icon-alert-circle";case"error":return"icon-alert-triangle";case"success":default:return"icon-check"}};return n("div",{className:le(r.orderItem,{[r.border]:se}),children:[n("div",{className:r.firstRow,children:[o&&a&&e(D,{to:v,children:e("h4",{className:r.orderNumber,onClick:w,children:`${a} ${o}`})}),n("div",{className:r.statusWrapper,children:[b&&n("span",{className:r.status,children:[b,x&&e(N,{className:r.statusIcon,icon:oe()})]}),n(D,{to:v,children:[e("h4",{className:r.orderNumber,onClick:w}),e(N,{className:r.icon,icon:"icon-chevrons-right"})]})]})]}),n("div",{className:r.secondRow,children:[O&&S&&e("p",{className:r.deliveryDate,children:`${S} ${O}`}),C&&T&&e(ie,{className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,target:"_blank",href:T,children:C})]})]})};try{y.displayName="OrderItem",y.__docgenInfo={description:"",displayName:"OrderItem",props:{orderNumber:{defaultValue:null,description:"",name:"orderNumber",required:!1,type:{name:"string"}},orderNumberLabel:{defaultValue:null,description:"",name:"orderNumberLabel",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},statusIcon:{defaultValue:{value:"'default'"},description:"Defines the background color of the status label",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},deliveryDateLabel:{defaultValue:null,description:"",name:"deliveryDateLabel",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!0,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},downloadLabel:{defaultValue:null,description:"",name:"downloadLabel",required:!1,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"",name:"downloadUrl",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ce={title:"Design System/Molecules/OrderItem",component:y},s={render:({...o})=>{function a(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(y,{...o,onClick:a})})}};function I(o){return o.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"rectangular",color:a.Class}))}const ae=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Te=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],xe=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],Ne=n(g,{children:[e(f,{tagsList:I(ae)}),e(h,{order:4,children:"Sommmarfest"}),e(t,{children:"Leverad: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),je=n(g,{children:[e(f,{tagsList:I(ae)}),e(h,{order:4,children:"Vinterfest"}),e(t,{children:"Leverad: 2022-05-01"}),e(t,{children:"18 artiklar"})]}),Le=n(g,{children:[e(h,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"22 artiklar"})]}),Ue=n(g,{children:[e(f,{tagsList:I(Te)}),e(h,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"Beräknad leverans: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),Ve=n(g,{children:[e(f,{tagsList:I(xe)}),e(h,{order:4,children:"Order nummer: 1423568"}),e(t,{children:"Beräknad leverans: 2022-06-03"}),e(t,{children:"12 artiklar"})]}),l={...s,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},i={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...s,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"Returned",statusIcon:"success",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...s,args:{children:Ne,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...s,args:{children:je,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...s,args:{children:Le,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...s,args:{children:Ue,linkUrl:"/link-to-list-details",linkComponent:"a"}},k={...s,args:{children:Ve,linkUrl:"/link-to-list-details",linkComponent:"a"}};var j,L,U;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(L=l.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var V,q,M;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(q=i.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,R,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,E,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(E=m.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var $,F,H;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var z,G,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ne;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const qe=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItemStory_Returned","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],Ge=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:l,OrderItemStory_Delivered:d,OrderItemStory_Processing:i,OrderItemStory_Returned:m,OrderItem_MinSenasteOrder:p,OrderItem_MinaOrdrar_1:_,OrderItem_MinaOrdrar_2:k,OrderItem_Sommarfest:c,OrderItem_Vinterfest:u,__namedExportsOrder:qe,default:Ce},Symbol.toStringTag,{value:"Module"}));export{y as O,p as a,c as b,u as c,_ as d,k as e,Ge as o};
