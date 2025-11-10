import{c as j}from"./index-09749a66.js";import{j as e}from"./jsx-runtime-03333307.js";import{I as L}from"./icon-a32914e5.js";import{U as pe}from"./ui-link-974ac70a.js";import{B as ue}from"./button-856a03f5.js";import{T as s}from"./text-fc9325ee.js";import{T as f}from"./tags-list-30883e29.js";import{H as h}from"./heading-5bc32a9e.js";const _e="_orderItem_1187r_1",ge="_border_1187r_15",he="_firstRow_1187r_26",ke="_orderNumber_1187r_42",xe="_statusWrapper_1187r_52",ye="_status_1187r_52",fe="_statusIcon_1187r_74",Ie="_icon_1187r_83",Oe="_btn_1187r_94",je="_secondRow_1187r_103",Te="_secondRowCol_1187r_108",Se="_hasChildren_1187r_112",we="_deliveryDate_1187r_117",ve="_downloadLink_1187r_128",Ce="_linkContentWrapper_1187r_143",be="_tagsWrapper_1187r_149",De="_title_1187r_154",Ne="_linkWrapper_1187r_158",Re="_linkButton_1187r_169",qe="_label_1187r_181",Ue="_box_1187r_187",r={orderItem:_e,border:ge,firstRow:he,orderNumber:ke,statusWrapper:xe,status:ye,statusIcon:fe,icon:Ie,btn:Oe,secondRow:je,secondRowCol:Te,hasChildren:Se,deliveryDate:we,downloadLink:ve,linkContentWrapper:Ce,tagsWrapper:be,title:De,linkWrapper:Ne,linkButton:Re,label:qe,box:Ue},T=({orderNumber:n,orderNumberLabel:t,title:Ve,children:k,orderDate:S,orderDateLabel:w,deliveryDate:x,deliveryDateLabel:y,orderStatus:v,linkUrl:O,linkComponent:C,btnLabel:b,onClick:o,onDownload:Ge,downloadLabel:D,downloadUrl:N,border:ce,statusIcon:R,customOrderNumber:q,customOrderNumberLabel:U})=>{const me=()=>{switch(R){case"warning":return"icon-alert-circle";case"error":return"icon-alert-triangle";case"success":default:return"icon-check"}};return e.jsx("div",{className:j(r.orderItem,{[r.border]:ce}),children:O?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.firstRow,children:[n&&t&&e.jsx(C,{to:O,"aria-label":`Go to order ${n}`,children:e.jsx("h4",{className:r.orderNumber,onClick:o,children:`${t} ${n}`})}),e.jsxs("div",{className:r.statusWrapper,children:[v&&e.jsxs("span",{className:r.status,children:[v,R&&e.jsx(L,{className:r.statusIcon,icon:me()})]}),e.jsx(C,{to:O,"aria-label":`Go to order ${n}`,children:e.jsx(L,{className:r.icon,icon:"icon-chevrons-right"})})]})]}),q&&U&&e.jsx("div",{className:r.secondRow,children:e.jsxs("p",{className:r.deliveryDate,children:[U," ",e.jsx("span",{children:q})]})}),e.jsxs("div",{className:r.secondRow,children:[x&&y&&e.jsx("p",{className:r.deliveryDate,children:`${y} ${x}`}),D&&N&&e.jsx(pe,{download:!0,className:r.downloadLink,onSurface:"transparent",linkComponent:"a",isExternal:!0,href:N,children:D})]}),e.jsx("div",{children:k})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.firstRow,children:[n&&t&&o&&e.jsx("h4",{className:r.orderNumber,onClick:o,children:`${t} ${n}`}),b&&o&&e.jsx("div",{className:j(r.statusWrapper,r.btn),children:e.jsx(ue,{type:"button",surface:"link",onClick:o,children:b})})]}),e.jsxs("div",{className:j(r.secondRow,r.secondRowCol,{[r.hasChildren]:!!k}),children:[S&&w&&e.jsx("p",{className:r.deliveryDate,children:`${w} ${S}`}),x&&y&&e.jsx("p",{className:r.deliveryDate,children:`${y} ${x}`})]}),k&&e.jsx("div",{children:k})]})})};T.__docgenInfo={description:"",methods:[],displayName:"OrderItem",props:{orderNumber:{required:!1,tsType:{name:"string"},description:""},orderNumberLabel:{required:!1,tsType:{name:"string"},description:""},orderStatus:{required:!1,tsType:{name:"string"},description:""},statusIcon:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Defines the background color of the status label
@default 'default'`},deliveryDate:{required:!1,tsType:{name:"string"},description:""},deliveryDateLabel:{required:!1,tsType:{name:"string"},description:""},linkComponent:{required:!1,tsType:{name:"any"},description:""},linkUrl:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},downloadLabel:{required:!1,tsType:{name:"string"},description:""},downloadUrl:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orderDate:{required:!1,tsType:{name:"string"},description:""},orderDateLabel:{required:!1,tsType:{name:"string"},description:""},btnLabel:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customOrderNumber:{required:!1,tsType:{name:"string"},description:""},customOrderNumberLabel:{required:!1,tsType:{name:"string"},description:""}}};const Le={title:"Design System/Molecules/OrderItem",component:T},a={render:({...n})=>{function t(){console.log("Button clicked")}return e.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e.jsx(T,{...n,onClick:t})})}};function I(n){return n.map(t=>({text:t.Text,shape:t.Shape?t.Shape:"rectangular",color:t.Class}))}const de=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],We=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],Me=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}],$e=e.jsxs(e.Fragment,{children:[e.jsx(f,{tagsList:I(de)}),e.jsx(h,{order:4,children:"Sommmarfest"}),e.jsx(s,{children:"Leverad: 2022-06-07"}),e.jsx(s,{children:"22 artiklar"})]}),Ae=e.jsxs(e.Fragment,{children:[e.jsx(f,{tagsList:I(de)}),e.jsx(h,{order:4,children:"Vinterfest"}),e.jsx(s,{children:"Leverad: 2022-05-01"}),e.jsx(s,{children:"18 artiklar"})]}),Be=e.jsxs(e.Fragment,{children:[e.jsx(h,{order:4,children:"Order nummer: 1423569"}),e.jsx(s,{children:"22 artiklar"})]}),Ee=e.jsxs(e.Fragment,{children:[e.jsx(f,{tagsList:I(We)}),e.jsx(h,{order:4,children:"Order nummer: 1423569"}),e.jsx(s,{children:"Beräknad leverans: 2022-06-07"}),e.jsx(s,{children:"22 artiklar"})]}),Fe=e.jsxs(e.Fragment,{children:[e.jsx(f,{tagsList:I(Me)}),e.jsx(h,{order:4,children:"Order nummer: 1423568"}),e.jsx(s,{children:"Beräknad leverans: 2022-06-03"}),e.jsx(s,{children:"12 artiklar"})]}),i={...a,args:{orderNumber:"1423569",orderNumberLabel:"Ordernr.",orderStatus:"Behandlas",deliveryDate:"2023-06-07",deliveryDateLabel:"Leverans:",linkComponent:"a",downloadLabel:"faktura.pdf",downloadUrl:"http://google.com/",onDownload:()=>console.log("download")}},l={...a,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-progress",title:"Order nummer: 1423569",children:e.jsx(s,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...a,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"status-delivered",title:"Order nummer: 1423569",children:e.jsx(s,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...a,args:{orderDate:"2023-06-01",deliveryDate:"2023-06-07",orderStatus:"Returned",statusIcon:"success",title:"Order nummer: 1423569",children:e.jsx(s,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...a,args:{children:$e,linkUrl:"/link-to-list-details",linkComponent:"a"}},p={...a,args:{children:Ae,linkUrl:"/link-to-list-details",linkComponent:"a"}},u={...a,args:{children:Be,linkUrl:"/link-to-list-details",linkComponent:"a"}},_={...a,args:{children:Ee,linkUrl:"/link-to-list-details",linkComponent:"a"}},g={...a,args:{children:Fe,linkUrl:"/link-to-list-details",linkComponent:"a"}};var W,M,$;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(M=i.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var A,B,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,P,V;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var G,H,z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(H=c.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinSenasteOrder,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(se=(re=u.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,ae;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_1,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(ae=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,ie,le;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...OrderItemStoryTemplate,
  args: {
    children: summaryItemArgs_MinaOrdrar_2,
    linkUrl: '/link-to-list-details',
    linkComponent: 'a'
  }
}`,...(le=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Pe=["Default_Order_Item","OrderItemStory_Processing","OrderItemStory_Delivered","OrderItemStory_Returned","OrderItem_Sommarfest","OrderItem_Vinterfest","OrderItem_MinSenasteOrder","OrderItem_MinaOrdrar_1","OrderItem_MinaOrdrar_2"],er=Object.freeze(Object.defineProperty({__proto__:null,Default_Order_Item:i,OrderItemStory_Delivered:d,OrderItemStory_Processing:l,OrderItemStory_Returned:c,OrderItem_MinSenasteOrder:u,OrderItem_MinaOrdrar_1:_,OrderItem_MinaOrdrar_2:g,OrderItem_Sommarfest:m,OrderItem_Vinterfest:p,__namedExportsOrder:Pe,default:Le},Symbol.toStringTag,{value:"Module"}));export{T as O,u as a,m as b,p as c,_ as d,g as e,er as o};
