import{T}from"./tag-84e76236.js";import{j as e}from"./jsx-runtime-03333307.js";import{P as f}from"./placeholder-7c72702c.js";import{I as G}from"./icon-button-8e526a77.js";import{I as K}from"./icon-link-ecbc2ceb.js";import{I as R}from"./icon-cf6ebd85.js";import{T as r}from"./text-002528fe.js";import{T as m}from"./tags-list-dcc30c34.js";import{G as z}from"./group-wrapper-5bc35e6d.js";import{H as u}from"./heading-ba18f9a9.js";const M="_linkItem_1kje8_1",$="_itemWrapper_1kje8_5",V="_linkContentWrapper_1kje8_13",Q="_tagsWrapper_1kje8_19",X="_title_1kje8_25",Y="_linkWrapper_1kje8_30",Z="_linkButton_1kje8_36",ee="_label_1kje8_48",re="_box_1kje8_54",s={linkItem:M,itemWrapper:$,linkContentWrapper:V,tagsWrapper:Q,title:X,linkWrapper:Y,linkButton:Z,label:ee,box:re};function te(t){switch(t){case"status-progress":return"yellow";case"status-delivered":return"green";case"status-returned":return"purple";case"status-cancelled":return"orange";case"status-invoice":return"blue";default:return"grey"}}function j({title:t,children:n,date1:g,date2:x,status:_,linkUrl:a,linkComponent:h,onClick:L,downloadLinkUrl:y,target:H,onDownloadClick:I,loading:J}){return e.jsx("div",{className:s.linkItem,children:e.jsxs("div",{className:s.itemWrapper,children:[e.jsx("div",{className:s.linkContentWrapper,children:J?e.jsxs(e.Fragment,{children:[e.jsx(f,{type:"heading"}),e.jsx(f,{type:"p_short"})]}):e.jsxs(e.Fragment,{children:[g||x?e.jsxs("div",{className:s.tagsWrapper,children:[g&&e.jsx(T,{text:g,shape:"rectangular",color:"grey"}),x&&e.jsx(T,{text:x,shape:"rectangular",color:_?te(_):"grey"}),I&&e.jsx(G,{type:"button",icon:"icon-file",onClick:I,size:"large",isTransparent:!0,noBorder:!0,noPadding:!0}),y&&e.jsx(K,{href:y,linkComponent:h,target:H,icon:"icon-file",children:void 0})]}):null,a?e.jsx(h,{className:s.linkWrapper,to:a,href:a,onClick:L,"aria-label":`Navigate to ${t}`,children:e.jsx("h4",{className:s.title,children:t})}):e.jsx("h4",{className:s.title,children:t}),n&&e.jsx("div",{children:n})]})}),a&&e.jsx(h,{className:s.linkWrapper,to:a,href:a,onClick:L,"aria-label":`Navigate to ${t}`,children:e.jsx(R,{icon:"icon-chevrons-right"})})]})})}j.__docgenInfo={description:"",methods:[],displayName:"LinkListItem",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},date1:{required:!1,tsType:{name:"string"},description:""},date2:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"string"},description:""},linkUrl:{required:!1,tsType:{name:"string"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},downloadLinkUrl:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:"'_blank' | '_self' | '_parent' | '_top'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"}]},description:""},onDownloadClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const ne={title:"Design System/Molecules/LinkListItem",component:j},p={render:({...t})=>{function n(){console.log("Button clicked")}return e.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e.jsx(j,{...t,onClick:n})})}};function k(t){return t.map(n=>({text:n.Text,shape:n.Shape?n.Shape:"rectangular",color:n.Class}))}const A=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],se=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],ae=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}];e.Fragment,m,k(A),u,r,r;e.Fragment,m,k(A),u,r,r;e.Fragment,m,k(se),u,r,r;e.Fragment,m,k(ae),u,r,r;const i={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-progress",title:"Order nummer: 1423569",linkUrl:"/link-to-somewhere",linkComponent:"a",downloadLinkUrl:"https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270",downloadFileName:"SomeFileName",target:"blank"}},o={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-delivered",title:"Order nummer: 1423569",children:e.jsx(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},l={...p,args:{title:"List namn: Absolutely new list",children:e.jsxs(z,{children:[e.jsx(r,{children:"22 produkter"}),e.jsx(R,{icon:"icon-message-circle"})]}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...p,args:{title:"Bonusavstämning.pdf",children:e.jsx(r,{children:"B9150"}),linkUrl:"/link-to-download",linkComponent:"a"}},d={...p,args:{title:"Fakturanr. 217101725",date1:"2023-06-01",children:e.jsxs(z,{align:"center",children:[e.jsx(r,{children:"Fakturabelopp: 3192kr"}),e.jsx(r,{children:"Betalt belopp: 0kr"}),e.jsx(r,{children:"Kvar att betala: 3192kr"}),e.jsx(G,{type:"button",icon:"icon-file",size:"large",onClick:()=>console.log("Download invoice pdf clicked")})]}),linkUrl:"/link-to-download",linkComponent:"a"}};var v,b,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    date1: '2023-06-01',
    date2: '2023-06-07',
    status: 'status-progress',
    title: 'Order nummer: 1423569',
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a',
    downloadLinkUrl: 'https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270',
    downloadFileName: 'SomeFileName',
    target: 'blank'
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,w,W;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    date1: '2023-06-01',
    date2: '2023-06-07',
    status: 'status-delivered',
    title: 'Order nummer: 1423569',
    children: <Text>22 artiklar</Text>,
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a'
  }
}`,...(W=(w=o.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var N,B,O;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'List namn: Absolutely new list',
    children: <GroupWrapper>
        <Text>22 produkter</Text>
        <Icon icon={'icon-message-circle'}></Icon>
      </GroupWrapper>,
    linkUrl: '/link-to-somewhere',
    linkComponent: 'a'
  }
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var F,q,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Bonusavstämning.pdf',
    children: <Text>B9150</Text>,
    linkUrl: '/link-to-download',
    linkComponent: 'a'
  }
}`,...(P=(q=c.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var U,D,E;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Fakturanr. 217101725',
    date1: '2023-06-01',
    children: <GroupWrapper align="center">
        <Text>Fakturabelopp: 3192kr</Text>
        <Text>Betalt belopp: 0kr</Text>
        <Text>Kvar att betala: 3192kr</Text>
        <IconButton type='button' icon='icon-file' size='large' onClick={() => console.log('Download invoice pdf clicked')} />
      </GroupWrapper>,
    linkUrl: '/link-to-download',
    linkComponent: 'a'
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ie=["LinkListItemStory_Order_Processing","LinkListItemStory_Order_Delivered","LinkListItemStory_PurchaseListItem","LinkListItemStory_BonusListItem","LinkListItemStory_InvoiceListItem"],he=Object.freeze(Object.defineProperty({__proto__:null,LinkListItemStory_BonusListItem:c,LinkListItemStory_InvoiceListItem:d,LinkListItemStory_Order_Delivered:o,LinkListItemStory_Order_Processing:i,LinkListItemStory_PurchaseListItem:l,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{l as L,j as a,he as l};
