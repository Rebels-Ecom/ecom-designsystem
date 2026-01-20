import{c as I}from"./index-09749a66.js";import{j as e}from"./jsx-runtime-03333307.js";import{I as w}from"./icon-a32914e5.js";import{U as ue}from"./ui-link-974ac70a.js";import{B as xe}from"./button-856a03f5.js";import{T as n}from"./text-fc9325ee.js";import{T as j}from"./tags-list-30883e29.js";import{H as g}from"./heading-5bc32a9e.js";const _e="_orderItem_1xtxv_1",ge="_border_1xtxv_15",he="_firstRow_1xtxv_26",ke="_orderNumber_1xtxv_42",ye="_clickable_1xtxv_46",fe="_statusWrapper_1xtxv_54",ve="_status_1xtxv_54",Ie="_statusIcon_1xtxv_76",je="_icon_1xtxv_85",Oe="_btn_1xtxv_96",Te="_secondRow_1xtxv_105",Se="_secondRowCol_1xtxv_110",we="_hasChildren_1xtxv_114",Ce="_deliveryDate_1xtxv_119",be="_downloadLink_1xtxv_130",De="_linkContentWrapper_1xtxv_145",Ne="_tagsWrapper_1xtxv_151",Re="_title_1xtxv_156",qe="_linkWrapper_1xtxv_160",Ue="_linkButton_1xtxv_171",We="_label_1xtxv_183",Me="_box_1xtxv_189",r={orderItem:_e,border:ge,firstRow:he,orderNumber:ke,clickable:ye,statusWrapper:fe,status:ve,statusIcon:Ie,icon:je,btn:Oe,secondRow:Te,secondRowCol:Se,hasChildren:we,deliveryDate:Ce,downloadLink:be,linkContentWrapper:De,tagsWrapper:Ne,title:Re,linkWrapper:qe,linkButton:Ue,label:We,box:Me},C=({orderNumber:t,orderNumberLabel:s,title:He,children:h,orderDate:b,orderDateLabel:D,deliveryDate:k,deliveryDateLabel:y,orderStatus:f,linkUrl:T,linkComponent:N,btnLabel:R,onClick:o,onDownload:ze,downloadLabel:q,downloadUrl:U,border:pe,statusIcon:S,customOrderNumber:W,customOrderNumberLabel:M,readOnly:v})=>{const $=()=>{switch(S){case"warning":return"icon-alert-circle";case"error":return"icon-alert-triangle";case"success":default:return"icon-check"}};return e.jsx("div",{className:I(r.orderItem,{[r.border]:pe}),children:T&&!v?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.firstRow,children:[t&&s&&e.jsx(N,{to:T,"aria-label":`Go to order ${t}`,children:e.jsx("h4",{className:r.orderNumber,onClick:o,children:`${s} ${t}`})}),e.jsxs("div",{className:r.statusWrapper,children:[f&&e.jsxs("span",{className:r.status,children:[f,S&&e.jsx(w,{className:r.statusIcon,icon:$()})]}),e.jsx(N,{to:T,"aria-label":`Go to order ${t}`,children:e.jsx(w,{className:r.icon,icon:"icon-chevrons-right"})})]})]}),W&&M&&e.jsx("div",{className:r.secondRow,children:e.jsxs("p",{className:r.deliveryDate,children:[M," ",e.jsx("span",{children:W})]})}),e.jsxs("div",{className:r.secondRow,children:[k&&y&&e.jsx("p",{className:r.deliveryDate,children:`${y} ${k}`}),q&&U&&e.jsx(ue,{download:!0,className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,href:U,children:q})]}),e.jsx("div",{children:h})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.firstRow,children:[t&&s&&o&&!v&&e.jsx("h4",{className:I(r.orderNumber,r.clickable),onClick:o,children:`${s} ${t}`}),t&&s&&v&&e.jsx("h4",{className:r.orderNumber,children:`${s} ${t}`}),e.jsxs("div",{className:I(r.statusWrapper,r.btn),children:[f&&e.jsxs("span",{className:r.status,children:[f,S&&e.jsx(w,{className:r.statusIcon,icon:$()})]}),R&&o&&!v&&e.jsx(xe,{type:"button",surface:"link",onClick:o,children:R})]})]}),e.jsxs("div",{className:I(r.secondRow,r.secondRowCol,{[r.hasChildren]:!!h}),children:[b&&D&&e.jsx("p",{className:r.deliveryDate,children:`${D} ${b}`}),k&&y&&e.jsx("p",{className:r.deliveryDate,children:`${y} ${k}`})]}),h&&e.jsx("div",{children:h})]})})};C.__docgenInfo={description:"",methods:[],displayName:"OrderItem",props:{orderNumber:{required:!1,tsType:{name:"string"},description:""},orderNumberLabel:{required:!1,tsType:{name:"string"},description:""},orderStatus:{required:!1,tsType:{name:"string"},description:""},statusIcon:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Defines the background color of the status label
@default 'default'`},deliveryDate:{required:!1,tsType:{name:"string"},description:""},deliveryDateLabel:{required:!1,tsType:{name:"string"},description:""},linkComponent:{required:!1,tsType:{name:"any"},description:""},linkUrl:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},downloadLabel:{required:!1,tsType:{name:"string"},description:""},downloadUrl:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orderDate:{required:!1,tsType:{name:"string"},description:""},orderDateLabel:{required:!1,tsType:{name:"string"},description:""},btnLabel:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customOrderNumber:{required:!1,tsType:{name:"string"},description:""},customOrderNumberLabel:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const $e={title:"Design System/Molecules/OrderItem",component:C},a={render:({...t})=>{function s(){console.log("Button clicked")}return e.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e.jsx(C,{...t,onClick:s})})}};function O(t){return t.map(s=>({text:s.Text,shape:s.Shape?s.Shape:"rectangular",color:s.Class}))}const me=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],Le=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],Ae=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],Be=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:O(me)}),e.jsx(g,{order:4,children:"Sommmarfest"}),e.jsx(n,{children:"Leverad: 2022-06-07"}),e.jsx(n,{children:"22 artiklar"})]}),Ee=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:O(me)}),e.jsx(g,{order:4,children:"Vinterfest"}),e.jsx(n,{children:"Leverad: 2022-05-01"}),e.jsx(n,{children:"18 artiklar"})]}),Fe=e.jsxs(e.Fragment,{children:[e.jsx(g,{order:4,children:"Order nummer: 1423569"}),e.jsx(n,{children:"22 artiklar"})]}),Pe=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:O(Le)}),e.jsx(g,{order:4,children:"Order nummer: 1423569"}),e.jsx(n,{children:"Beräknad leverans: 2022-06-07"}),e.jsx(n,{children:"22 artiklar"})]}),Ve=e.jsxs(e.Fragment,{children:[e.jsx(j,{tagsList:O(Ae)}),e.jsx(g,{order:4,children:"Order nummer: 1423568"}),e.jsx(n,{children:"Beräknad leverans: 2022-06-03"}),e.jsx(n,{children:"12 artiklar"})]}),i={...a,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},l={...a,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e.jsx(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...a,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e.jsx(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...a,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"Returned",statusIcon:"success",title:"Order nummer: 1423569",children:e.jsx(n,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...a,args:{children:Be,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...a,args:{children:Ee,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...a,args:{children:Fe,linkUrl:"/link-to-list-details",linkComponent:"a"}},x={...a,args:{children:Pe,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...a,args:{children:Ve,linkUrl:"/link-to-list-details",linkComponent:"a"}};var L,A,B;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,F,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(F=l.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var V,G,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var z,J,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Sommarfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_Vinterfest,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,te,ne;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ne=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,ie;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,de,ce;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ce=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Ge=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItemStory_Returned","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],sr=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:i,OrderItemStory_Delivered:d,OrderItemStory_Processing:l,OrderItemStory_Returned:c,OrderItem_MinSenasteOrder:u,OrderItem_MinaOrdrar_1:x,OrderItem_MinaOrdrar_2:_,OrderItem_Sommarfest:m,OrderItem_Vinterfest:p,__namedExportsOrder:Ge,default:$e},Symbol.toStringTag,{value:"Module"}));export{C as O,u as a,m as b,p as c,x as d,_ as e,sr as o};
