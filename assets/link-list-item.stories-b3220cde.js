import{T as I}from"./tag-8d2e34a8.js";import{j as e}from"./jsx-runtime-03333307.js";import{P as b}from"./placeholder-3cf73146.js";import{I as _}from"./icon-button-183fb341.js";import{I as M}from"./icon-link-d6c48048.js";import{I as z}from"./icon-a32914e5.js";import{T as r}from"./text-1a10703e.js";import{T as m}from"./tags-list-30883e29.js";import{G as A}from"./group-wrapper-5bc35e6d.js";import{H as u}from"./heading-ba18f9a9.js";const $="_linkItem_1viee_1",V="_itemWrapper_1viee_5",Q="_linkContentWrapper_1viee_13",X="_tagsWrapper_1viee_19",Y="_title_1viee_25",Z="_linkWrapper_1viee_30",ee="_linkButton_1viee_36",re="_label_1viee_48",te="_box_1viee_54",s={linkItem:$,itemWrapper:V,linkContentWrapper:Q,tagsWrapper:X,title:Y,linkWrapper:Z,linkButton:ee,label:re,box:te};function ne(t){switch(t){case"status-progress":return"yellow";case"status-delivered":return"green";case"status-returned":return"purple";case"status-cancelled":return"orange";case"status-invoice":return"blue";default:return"grey"}}function j({title:t,children:n,date1:g,date2:x,status:L,linkUrl:a,linkComponent:h,onClick:y,downloadLinkUrl:T,target:J,onDownloadClick:f,onRemove:v,loading:K}){return e.jsx("div",{className:s.linkItem,children:e.jsxs("div",{className:s.itemWrapper,children:[e.jsx("div",{className:s.linkContentWrapper,children:K?e.jsxs(e.Fragment,{children:[e.jsx(b,{type:"heading"}),e.jsx(b,{type:"p_short"})]}):e.jsxs(e.Fragment,{children:[g||x?e.jsxs("div",{className:s.tagsWrapper,children:[g&&e.jsx(I,{text:g,shape:"rectangular",color:"grey"}),x&&e.jsx(I,{text:x,shape:"rectangular",color:L?ne(L):"grey"}),f&&e.jsx(_,{type:"button",icon:"icon-file",onClick:f,size:"large",isTransparent:!0,noBorder:!0,noPadding:!0}),T&&e.jsx(M,{href:T,linkComponent:h,target:J,icon:"icon-file",children:void 0})]}):null,a?e.jsx(h,{className:s.linkWrapper,to:a,href:a,onClick:y,"aria-label":`Navigate to ${t}`,children:e.jsx("h4",{className:s.title,children:t})}):e.jsx("h4",{className:s.title,children:t}),n&&e.jsx("div",{children:n})]})}),v&&e.jsx(_,{type:"button",icon:"icon-trash-2",onClick:v,noBorder:!0,noPadding:!0,isTransparent:!0,className:s.deleteIcon}),a&&e.jsx(h,{className:s.linkWrapper,to:a,href:a,onClick:y,"aria-label":`Navigate to ${t}`,children:e.jsx(z,{icon:"icon-chevrons-right"})})]})})}j.__docgenInfo={description:"",methods:[],displayName:"LinkListItem",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},date1:{required:!1,tsType:{name:"string"},description:""},date2:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"string"},description:""},linkUrl:{required:!1,tsType:{name:"string"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},downloadLinkUrl:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:"'_blank' | '_self' | '_parent' | '_top'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"}]},description:""},onDownloadClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const se={title:"Design System/Molecules/LinkListItem",component:j},p={render:({...t})=>{function n(){console.log("Button clicked")}return e.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e.jsx(j,{...t,onClick:n})})}};function k(t){return t.map(n=>({text:n.Text,shape:n.Shape?n.Shape:"rectangular",color:n.Class}))}const H=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],ae=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],ie=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}];e.Fragment,m,k(H),u,r,r;e.Fragment,m,k(H),u,r,r;e.Fragment,m,k(ae),u,r,r;e.Fragment,m,k(ie),u,r,r;const i={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-progress",title:"Order nummer: 1423569",linkUrl:"/link-to-somewhere",linkComponent:"a",downloadLinkUrl:"https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270",downloadFileName:"SomeFileName",target:"blank"}},o={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-delivered",title:"Order nummer: 1423569",children:e.jsx(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},l={...p,args:{title:"List namn: Absolutely new list",children:e.jsxs(A,{children:[e.jsx(r,{children:"22 produkter"}),e.jsx(z,{icon:"icon-message-circle"})]}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...p,args:{title:"Bonusavstämning.pdf",children:e.jsx(r,{children:"B9150"}),linkUrl:"/link-to-download",linkComponent:"a"}},d={...p,args:{title:"Fakturanr. 217101725",date1:"2023-06-01",children:e.jsxs(A,{align:"center",children:[e.jsx(r,{children:"Fakturabelopp: 3192kr"}),e.jsx(r,{children:"Betalt belopp: 0kr"}),e.jsx(r,{children:"Kvar att betala: 3192kr"}),e.jsx(_,{type:"button",icon:"icon-file",size:"large",onClick:()=>console.log("Download invoice pdf clicked")})]}),linkUrl:"/link-to-download",linkComponent:"a"}};var S,C,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var W,N,B;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(N=o.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var O,F,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var P,U,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Bonusavstämning.pdf',
    children: <Text>B9150</Text>,
    linkUrl: '/link-to-download',
    linkComponent: 'a'
  }
}`,...(D=(U=c.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var E,G,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(G=d.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const oe=["LinkListItemStory_Order_Processing","LinkListItemStory_Order_Delivered","LinkListItemStory_PurchaseListItem","LinkListItemStory_BonusListItem","LinkListItemStory_InvoiceListItem"],_e=Object.freeze(Object.defineProperty({__proto__:null,LinkListItemStory_BonusListItem:c,LinkListItemStory_InvoiceListItem:d,LinkListItemStory_Order_Delivered:o,LinkListItemStory_Order_Processing:i,LinkListItemStory_PurchaseListItem:l,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{l as L,j as a,_e as l};
