import{c as U}from"./index-09749a66.js";import{j as e}from"./jsx-runtime-03333307.js";import{I as L}from"./icon-e3522fc5.js";import{U as pe}from"./ui-link-94ae867e.js";import{B as ue}from"./button-1a287b34.js";import{T as n}from"./text-002528fe.js";import{T as j}from"./tags-list-dcc30c34.js";import{H as g}from"./heading-ba18f9a9.js";const he="_orderItem_nehjn_1",_e="_border_nehjn_15",ge="_firstRow_nehjn_26",xe="_orderNumber_nehjn_42",ke="_statusWrapper_nehjn_52",je="_status_nehjn_52",ye="_statusIcon_nehjn_74",fe="_icon_nehjn_83",Ie="_secondRow_nehjn_96",Oe="_secondRowCol_nehjn_101",Te="_deliveryDate_nehjn_107",Se="_downloadLink_nehjn_118",we="_linkContentWrapper_nehjn_133",ve="_tagsWrapper_nehjn_139",Ce="_title_nehjn_144",be="_linkWrapper_nehjn_148",De="_linkButton_nehjn_159",Ne="_label_nehjn_171",Re="_box_nehjn_177",r={orderItem:he,border:_e,firstRow:ge,orderNumber:xe,statusWrapper:ke,status:je,statusIcon:ye,icon:fe,secondRow:Ie,secondRowCol:Oe,deliveryDate:Te,downloadLink:Se,linkContentWrapper:we,tagsWrapper:ve,title:Ce,linkWrapper:be,linkButton:De,label:Ne,box:Re},I=({orderNumber:a,orderNumberLabel:s,title:Fe,children:O,orderDate:T,orderDateLabel:S,deliveryDate:x,deliveryDateLabel:k,orderStatus:w,linkUrl:f,linkComponent:v,btnLabel:C,onClick:o,onDownload:Pe,downloadLabel:b,downloadUrl:D,border:ce,statusIcon:N,customOrderNumber:R,customOrderNumberLabel:q})=>{const me=()=>{switch(N){case"warning":return"icon-alert-circle";case"error":return"icon-alert-triangle";case"success":default:return"icon-check"}};return e.jsx("div",{className:U(r.orderItem,{[r.border]:ce}),children:f?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.firstRow,children:[a&&s&&e.jsx(v,{to:f,children:e.jsx("h4",{className:r.orderNumber,onClick:o,children:`${s} ${a}`})}),e.jsxs("div",{className:r.statusWrapper,children:[w&&e.jsxs("span",{className:r.status,children:[w,N&&e.jsx(L,{className:r.statusIcon,icon:me()})]}),e.jsxs(v,{to:f,children:[e.jsx("h4",{className:r.orderNumber,onClick:o}),e.jsx(L,{className:r.icon,icon:"icon-chevrons-right"})]})]})]}),R&&q&&e.jsx("div",{className:r.secondRow,children:e.jsxs("p",{className:r.deliveryDate,children:[q," ",e.jsx("span",{children:R})]})}),e.jsxs("div",{className:r.secondRow,children:[x&&k&&e.jsx("p",{className:r.deliveryDate,children:`${k} ${x}`}),b&&D&&e.jsx(pe,{download:!0,className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,href:D,children:b})]}),e.jsx("div",{children:O})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.firstRow,children:[a&&s&&o&&e.jsx("h4",{className:r.orderNumber,onClick:o,children:`${s} ${a}`}),C&&o&&e.jsx("div",{className:r.statusWrapper,children:e.jsx(ue,{type:"button",surface:"primary",onClick:o,children:C})})]}),e.jsxs("div",{className:U(r.secondRow,r.secondRowCol),children:[T&&S&&e.jsx("p",{className:r.deliveryDate,children:`${S} ${T}`}),x&&k&&e.jsx("p",{className:r.deliveryDate,children:`${k} ${x}`})]}),e.jsx("div",{children:O})]})})};I.__docgenInfo={description:"",methods:[],displayName:"OrderItem",props:{orderNumber:{required:!1,tsType:{name:"string"},description:""},orderNumberLabel:{required:!1,tsType:{name:"string"},description:""},orderStatus:{required:!1,tsType:{name:"string"},description:""},statusIcon:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Defines the background color of the status label
@default 'default'`},deliveryDate:{required:!1,tsType:{name:"string"},description:""},deliveryDateLabel:{required:!1,tsType:{name:"string"},description:""},linkComponent:{required:!1,tsType:{name:"any"},description:""},linkUrl:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},downloadLabel:{required:!1,tsType:{name:"string"},description:""},downloadUrl:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orderDate:{required:!1,tsType:{name:"string"},description:""},orderDateLabel:{required:!1,tsType:{name:"string"},description:""},btnLabel:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customOrderNumber:{required:!1,tsType:{name:"string"},description:""},customOrderNumberLabel:{required:!1,tsType:{name:"string"},description:""}}};const qe={title:"Design System/Molecules/OrderItem",component:I},t={render:({...a})=>{function s(){console.log("Button clicked")}return e.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e.jsx(I,{...a,onClick:s})})}};function y(a){return a.map(s=>({text:s.Text,shape:s.Shape?s.Shape:"rectangular",color:s.Class}))}const de=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Ue=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],Le=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],We=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:y(de)}),e.jsx(g,{order:4,children:"Sommmarfest"}),e.jsx(n,{children:"Leverad: 2022-06-07"}),e.jsx(n,{children:"22 artiklar"})]}),Me=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:y(de)}),e.jsx(g,{order:4,children:"Vinterfest"}),e.jsx(n,{children:"Leverad: 2022-05-01"}),e.jsx(n,{children:"18 artiklar"})]}),Ae=e.jsxs(e.Fragment,{children:[e.jsx(g,{order:4,children:"Order nummer: 1423569"}),e.jsx(n,{children:"22 artiklar"})]}),Be=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:y(Ue)}),e.jsx(g,{order:4,children:"Order nummer: 1423569"}),e.jsx(n,{children:"Beräknad leverans: 2022-06-07"}),e.jsx(n,{children:"22 artiklar"})]}),$e=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:y(Le)}),e.jsx(g,{order:4,children:"Order nummer: 1423568"}),e.jsx(n,{children:"Beräknad leverans: 2022-06-03"}),e.jsx(n,{children:"12 artiklar"})]}),i={...t,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},l={...t,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e.jsx(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...t,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e.jsx(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...t,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"Returned",statusIcon:"success",title:"Order nummer: 1423569",children:e.jsx(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...t,args:{children:We,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...t,args:{children:Me,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...t,args:{children:Ae,linkUrl:"/link-to-list-details",linkComponent:"a"}},h={...t,args:{children:Be,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...t,args:{children:$e,linkUrl:"/link-to-list-details",linkComponent:"a"}};var W,M,A;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var B,$,E;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=($=l.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var F,P,V;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var H,z,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ne=(re=u.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,te,ae;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ie,le;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(le=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Ee=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItemStory_Returned","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:i,OrderItemStory_Delivered:d,OrderItemStory_Processing:l,OrderItemStory_Returned:c,OrderItem_MinSenasteOrder:u,OrderItem_MinaOrdrar_1:h,OrderItem_MinaOrdrar_2:_,OrderItem_Sommarfest:m,OrderItem_Vinterfest:p,__namedExportsOrder:Ee,default:qe},Symbol.toStringTag,{value:"Module"}));export{I as O,u as a,m as b,p as c,h as d,_ as e,Ye as o};
