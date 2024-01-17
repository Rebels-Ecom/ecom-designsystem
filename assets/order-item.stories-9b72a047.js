import{c as de}from"./index-a587463d.js";import{j as e,a as t,F as l}from"./jsx-runtime-a3a6c0b8.js";import{I as U}from"./icon-5fefd509.js";import{U as ce}from"./ui-link-a18343fc.js";import{B as me}from"./button-97f3af74.js";import{T as n}from"./text-59fe9fb2.js";import{T as S}from"./tags-list-5108b032.js";import{H as f}from"./heading-49a03c05.js";const ue="_orderItem_qi68z_1",pe="_border_qi68z_15",_e="_firstRow_qi68z_26",ge="_orderNumber_qi68z_35",ke="_statusWrapper_qi68z_45",he="_status_qi68z_45",fe="_statusIcon_qi68z_62",ye="_icon_qi68z_71",Ie="_secondRow_qi68z_84",Oe="_deliveryDate_qi68z_89",Se="_downloadLink_qi68z_96",ve="_linkContentWrapper_qi68z_111",be="_tagsWrapper_qi68z_117",we="_title_qi68z_122",qe="_linkWrapper_qi68z_126",De="_linkButton_qi68z_137",Te="_label_qi68z_149",xe="_box_qi68z_155",r={orderItem:ue,border:pe,firstRow:_e,orderNumber:ge,statusWrapper:ke,status:he,statusIcon:fe,icon:ye,secondRow:Ie,deliveryDate:Oe,downloadLink:Se,linkContentWrapper:ve,tagsWrapper:be,title:we,linkWrapper:qe,linkButton:De,label:Te,box:xe},O=({orderNumber:s,orderNumberLabel:a,title:Ae,children:w,orderDate:Be,deliveryDate:y,deliveryDateLabel:I,orderStatus:q,linkUrl:b,linkComponent:D,btnLabel:T,onClick:i,onDownload:$e,downloadLabel:x,downloadUrl:C,border:le,statusIcon:N})=>{const ie=()=>{switch(N){case"warning":return"icon-alert-circle";case"error":return"icon-alert-triangle";case"success":default:return"icon-check"}};return e("div",{className:de(r.orderItem,{[r.border]:le}),children:b?t(l,{children:[t("div",{className:r.firstRow,children:[s&&a&&e(D,{to:b,children:e("h4",{className:r.orderNumber,onClick:i,children:`${a} ${s}`})}),t("div",{className:r.statusWrapper,children:[q&&t("span",{className:r.status,children:[q,N&&e(U,{className:r.statusIcon,icon:ie()})]}),t(D,{to:b,children:[e("h4",{className:r.orderNumber,onClick:i}),e(U,{className:r.icon,icon:"icon-chevrons-right"})]})]})]}),t("div",{className:r.secondRow,children:[y&&I&&e("p",{className:r.deliveryDate,children:`${I} ${y}`}),x&&C&&e(ce,{className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,target:"_blank",href:C,children:x})]}),e("div",{children:w})]}):t(l,{children:[t("div",{className:r.firstRow,children:[s&&a&&i&&e("h4",{className:r.orderNumber,onClick:i,children:`${a} ${s}`}),T&&i&&e("div",{className:r.statusWrapper,children:e(me,{type:"button",surface:"primary",onClick:i,children:T})})]}),e("div",{className:r.secondRow,children:y&&I&&e("p",{className:r.deliveryDate,children:`${I} ${y}`})}),e("div",{children:w})]})})};try{O.displayName="OrderItem",O.__docgenInfo={description:"",displayName:"OrderItem",props:{orderNumber:{defaultValue:null,description:"",name:"orderNumber",required:!1,type:{name:"string"}},orderNumberLabel:{defaultValue:null,description:"",name:"orderNumberLabel",required:!1,type:{name:"string"}},orderStatus:{defaultValue:null,description:"",name:"orderStatus",required:!1,type:{name:"string"}},statusIcon:{defaultValue:{value:"'default'"},description:"Defines the background color of the status label",name:"statusIcon",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},deliveryDate:{defaultValue:null,description:"",name:"deliveryDate",required:!1,type:{name:"string"}},deliveryDateLabel:{defaultValue:null,description:"",name:"deliveryDateLabel",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},onDownload:{defaultValue:null,description:"",name:"onDownload",required:!1,type:{name:"(() => void)"}},downloadLabel:{defaultValue:null,description:"",name:"downloadLabel",required:!1,type:{name:"string"}},downloadUrl:{defaultValue:null,description:"",name:"downloadUrl",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},orderDate:{defaultValue:null,description:"",name:"orderDate",required:!1,type:{name:"string"}},btnLabel:{defaultValue:null,description:"",name:"btnLabel",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ce={title:"Design System/Molecules/OrderItem",component:O},o={render:({...s})=>{function a(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(O,{...s,onClick:a})})}};function v(s){return s.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"rectangular",color:a.Class}))}const oe=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Ne=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],Ue=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],Ve=t(l,{children:[e(S,{tagsList:v(oe)}),e(f,{order:4,children:"Sommmarfest"}),e(n,{children:"Leverad: 2022-06-07"}),e(n,{children:"22 artiklar"})]}),ze=t(l,{children:[e(S,{tagsList:v(oe)}),e(f,{order:4,children:"Vinterfest"}),e(n,{children:"Leverad: 2022-05-01"}),e(n,{children:"18 artiklar"})]}),Le=t(l,{children:[e(f,{order:4,children:"Order nummer: 1423569"}),e(n,{children:"22 artiklar"})]}),We=t(l,{children:[e(S,{tagsList:v(Ne)}),e(f,{order:4,children:"Order nummer: 1423569"}),e(n,{children:"Beräknad leverans: 2022-06-07"}),e(n,{children:"22 artiklar"})]}),Me=t(l,{children:[e(S,{tagsList:v(Ue)}),e(f,{order:4,children:"Order nummer: 1423568"}),e(n,{children:"Beräknad leverans: 2022-06-03"}),e(n,{children:"12 artiklar"})]}),d={...o,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},c={...o,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...o,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},u={...o,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"Returned",statusIcon:"success",title:"Order nummer: 1423569",children:e(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},p={...o,args:{children:Ve,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...o,args:{children:ze,linkUrl:"/link-to-list-details",linkComponent:"a"}},g={...o,args:{children:Le,linkUrl:"/link-to-list-details",linkComponent:"a"}},k={...o,args:{children:We,linkUrl:"/link-to-list-details",linkComponent:"a"}},h={...o,args:{children:Me,linkUrl:"/link-to-list-details",linkComponent:"a"}};var V,z,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var W,M,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var A,B,$;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(B=m.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var E,j,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(j=u.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,H,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(G=(H=p.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Q=(K=_.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(te=(re=k.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ae,se;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const Re=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItemStory_Returned","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:d,OrderItemStory_Delivered:m,OrderItemStory_Processing:c,OrderItemStory_Returned:u,OrderItem_MinSenasteOrder:g,OrderItem_MinaOrdrar_1:k,OrderItem_MinaOrdrar_2:h,OrderItem_Sommarfest:p,OrderItem_Vinterfest:_,__namedExportsOrder:Re,default:Ce},Symbol.toStringTag,{value:"Module"}));export{O,g as a,p as b,_ as c,k as d,h as e,Qe as o};
