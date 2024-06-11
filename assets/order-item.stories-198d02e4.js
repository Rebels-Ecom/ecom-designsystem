import{c as R}from"./index-a587463d.js";import{j as e,a as n,F as o}from"./jsx-runtime-a3a6c0b8.js";import{I as W}from"./icon-5fefd509.js";import{U as _e}from"./ui-link-13fe156c.js";import{B as he}from"./button-43643fd6.js";import{T as t}from"./text-cdc0625f.js";import{T as S}from"./tags-list-3f7fda62.js";import{H as f}from"./heading-47d2ab87.js";const ge="_orderItem_nehjn_1",ke="_border_nehjn_15",fe="_firstRow_nehjn_26",ye="_orderNumber_nehjn_42",Ie="_statusWrapper_nehjn_52",Oe="_status_nehjn_52",Se="_statusIcon_nehjn_74",ve="_icon_nehjn_83",we="_secondRow_nehjn_96",be="_secondRowCol_nehjn_101",Ce="_deliveryDate_nehjn_107",De="_downloadLink_nehjn_118",Ne="_linkContentWrapper_nehjn_133",Te="_tagsWrapper_nehjn_139",xe="_title_nehjn_144",je="_linkWrapper_nehjn_148",Ve="_linkButton_nehjn_159",Le="_label_nehjn_171",Ue="_box_nehjn_177",r={orderItem:ge,border:ke,firstRow:fe,orderNumber:ye,statusWrapper:Ie,status:Oe,statusIcon:Se,icon:ve,secondRow:we,secondRowCol:be,deliveryDate:Ce,downloadLink:De,linkContentWrapper:Ne,tagsWrapper:Te,title:xe,linkWrapper:je,linkButton:Ve,label:Le,box:Ue},O=({orderNumber:s,orderNumberLabel:a,title:Fe,children:b,orderDate:C,orderDateLabel:D,deliveryDate:y,deliveryDateLabel:I,orderStatus:N,linkUrl:w,linkComponent:T,btnLabel:x,onClick:d,onDownload:He,downloadLabel:j,downloadUrl:V,border:ue,statusIcon:L,customOrderNumber:U,customOrderNumberLabel:q})=>{const pe=()=>{switch(L){case"warning":return"icon-alert-circle";case"error":return"icon-alert-triangle";case"success":default:return"icon-check"}};return e("div",{className:R(r.orderItem,{[r.border]:ue}),children:w?n(o,{children:[n("div",{className:r.firstRow,children:[s&&a&&e(T,{to:w,children:e("h4",{className:r.orderNumber,onClick:d,children:`${a} ${s}`})}),n("div",{className:r.statusWrapper,children:[N&&n("span",{className:r.status,children:[N,L&&e(W,{className:r.statusIcon,icon:pe()})]}),n(T,{to:w,children:[e("h4",{className:r.orderNumber,onClick:d}),e(W,{className:r.icon,icon:"icon-chevrons-right"})]})]})]}),U&&q&&e("div",{className:r.secondRow,children:n("p",{className:r.deliveryDate,children:[q," ",e("span",{children:U})]})}),n("div",{className:r.secondRow,children:[y&&I&&e("p",{className:r.deliveryDate,children:`${I} ${y}`}),j&&V&&e(_e,{download:!0,className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,href:V,children:j})]}),e("div",{children:b})]}):n(o,{children:[n("div",{className:r.firstRow,children:[s&&a&&d&&e("h4",{className:r.orderNumber,onClick:d,children:`${a} ${s}`}),x&&d&&e("div",{className:r.statusWrapper,children:e(he,{type:"button",surface:"primary",onClick:d,children:x})})]}),n("div",{className:R(r.secondRow,r.secondRowCol),children:[C&&D&&e("p",{className:r.deliveryDate,children:`${D} ${C}`}),y&&I&&e("p",{className:r.deliveryDate,children:`${I} ${y}`})]}),e("div",{children:b})]})})};try{O.displayName="OrderItem",O.__docgenInfo={description:"",displayName:"OrderItem",props:{orderNumber:{defaultValue:null,description:"",name:"orderNumber",required:!1,type:{name:"string"}},orderNumberLabel:{defaultValue:null,description:"",name:"orderNumberLabel",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},statusIcon:{defaultValue:{value:"'default'"},description:"Defines the background color of the status label",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},deliveryDateLabel:{defaultValue:null,description:"",name:"deliveryDateLabel",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},downloadLabel:{defaultValue:null,description:"",name:"downloadLabel",required:!1,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"",name:"downloadUrl",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},orderDateLabel:{defaultValue:null,description:"",name:"orderDateLabel",required:!1,type:{name:"string"}},btnLabel:{defaultValue:null,description:"",name:"btnLabel",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},customOrderNumber:{defaultValue:null,description:"",name:"customOrderNumber",required:!1,type:{name:"string"}},customOrderNumberLabel:{defaultValue:null,description:"",name:"customOrderNumberLabel",required:!1,type:{name:"string"}}}}}catch{}const qe={title:"Design System/Molecules/OrderItem",component:O},l={render:({...s})=>{function a(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(O,{...s,onClick:a})})}};function v(s){return s.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"rectangular",color:a.Class}))}const me=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Re=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],We=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],Me=n(o,{children:[e(S,{tagsList:v(me)}),e(f,{order:4,children:"Sommmarfest"}),e(t,{children:"Leverad: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),Ae=n(o,{children:[e(S,{tagsList:v(me)}),e(f,{order:4,children:"Vinterfest"}),e(t,{children:"Leverad: 2022-05-01"}),e(t,{children:"18 artiklar"})]}),Be=n(o,{children:[e(f,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"22 artiklar"})]}),$e=n(o,{children:[e(S,{tagsList:v(Re)}),e(f,{order:4,children:"Order nummer: 1423569"}),e(t,{children:"Beräknad leverans: 2022-06-07"}),e(t,{children:"22 artiklar"})]}),Ee=n(o,{children:[e(S,{tagsList:v(We)}),e(f,{order:4,children:"Order nummer: 1423568"}),e(t,{children:"Beräknad leverans: 2022-06-03"}),e(t,{children:"12 artiklar"})]}),i={...l,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},c={...l,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...l,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},u={...l,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"Returned",statusIcon:"success",title:"Order nummer: 1423569",children:e(t,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},p={...l,args:{children:Me,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...l,args:{children:Ae,linkUrl:"/link-to-list-details",linkComponent:"a"}},h={...l,args:{children:Be,linkUrl:"/link-to-list-details",linkComponent:"a"}},g={...l,args:{children:$e,linkUrl:"/link-to-list-details",linkComponent:"a"}},k={...l,args:{children:Ee,linkUrl:"/link-to-list-details",linkComponent:"a"}};var M,A,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var $,E,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,H,z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(H=m.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(re=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,le,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(oe=(le=g.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var de,ie,ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Pe=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItemStory_Returned","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],er=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:i,OrderItemStory_Delivered:m,OrderItemStory_Processing:c,OrderItemStory_Returned:u,OrderItem_MinSenasteOrder:h,OrderItem_MinaOrdrar_1:g,OrderItem_MinaOrdrar_2:k,OrderItem_Sommarfest:p,OrderItem_Vinterfest:_,__namedExportsOrder:Pe,default:qe},Symbol.toStringTag,{value:"Module"}));export{O,h as a,p as b,_ as c,g as d,k as e,er as o};
