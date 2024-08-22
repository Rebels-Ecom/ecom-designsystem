import{T as v}from"./tag-84e76236.js";import{j as e}from"./jsx-runtime-03333307.js";import{P as b}from"./placeholder-7c72702c.js";import{I as _}from"./icon-button-44da2d3f.js";import{I as M}from"./icon-link-ecbc2ceb.js";import{I as z}from"./icon-cf6ebd85.js";import{T as r}from"./text-1a10703e.js";import{T as m}from"./tags-list-dcc30c34.js";import{G as A}from"./group-wrapper-5bc35e6d.js";import{H as u}from"./heading-ba18f9a9.js";const $="_linkItem_12kiu_1",V="_itemWrapper_12kiu_5",Q="_linkContentWrapper_12kiu_13",X="_tagsWrapper_12kiu_19",Y="_title_12kiu_25",Z="_linkWrapper_12kiu_30",ee="_linkButton_12kiu_36",re="_label_12kiu_48",te="_box_12kiu_54",ne="_deleteIcon_12kiu_64",s={linkItem:$,itemWrapper:V,linkContentWrapper:Q,tagsWrapper:X,title:Y,linkWrapper:Z,linkButton:ee,label:re,box:te,deleteIcon:ne};function se(t){switch(t){case"status-progress":return"yellow";case"status-delivered":return"green";case"status-returned":return"purple";case"status-cancelled":return"orange";case"status-invoice":return"blue";default:return"grey"}}function j({title:t,children:n,date1:g,date2:x,status:L,linkUrl:a,linkComponent:h,onClick:y,downloadLinkUrl:I,target:J,onDownloadClick:T,onRemove:f,loading:K}){return e.jsx("div",{className:s.linkItem,children:e.jsxs("div",{className:s.itemWrapper,children:[e.jsx("div",{className:s.linkContentWrapper,children:K?e.jsxs(e.Fragment,{children:[e.jsx(b,{type:"heading"}),e.jsx(b,{type:"p_short"})]}):e.jsxs(e.Fragment,{children:[g||x?e.jsxs("div",{className:s.tagsWrapper,children:[g&&e.jsx(v,{text:g,shape:"rectangular",color:"grey"}),x&&e.jsx(v,{text:x,shape:"rectangular",color:L?se(L):"grey"}),T&&e.jsx(_,{type:"button",icon:"icon-file",onClick:T,size:"large",isTransparent:!0,noBorder:!0,noPadding:!0}),I&&e.jsx(M,{href:I,linkComponent:h,target:J,icon:"icon-file",children:void 0})]}):null,a?e.jsx(h,{className:s.linkWrapper,to:a,href:a,onClick:y,"aria-label":`Navigate to ${t}`,children:e.jsx("h4",{className:s.title,children:t})}):e.jsx("h4",{className:s.title,children:t}),n&&e.jsx("div",{children:n})]})}),f&&e.jsx(_,{type:"button",icon:"icon-trash-2",onClick:f,noBorder:!0,noPadding:!0,isTransparent:!0,className:s.deleteIcon}),a&&e.jsx(h,{className:s.linkWrapper,to:a,href:a,onClick:y,"aria-label":`Navigate to ${t}`,children:e.jsx(z,{icon:"icon-chevrons-right"})})]})})}j.__docgenInfo={description:"",methods:[],displayName:"LinkListItem",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},date1:{required:!1,tsType:{name:"string"},description:""},date2:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"string"},description:""},linkUrl:{required:!1,tsType:{name:"string"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},downloadLinkUrl:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:"'_blank' | '_self' | '_parent' | '_top'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"}]},description:""},onDownloadClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};const ae={title:"Design System/Molecules/LinkListItem",component:j},p={render:({...t})=>{function n(){console.log("Button clicked")}return e.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e.jsx(j,{...t,onClick:n})})}};function k(t){return t.map(n=>({text:n.Text,shape:n.Shape?n.Shape:"rectangular",color:n.Class}))}const H=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],ie=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],oe=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}];e.Fragment,m,k(H),u,r,r;e.Fragment,m,k(H),u,r,r;e.Fragment,m,k(ie),u,r,r;e.Fragment,m,k(oe),u,r,r;const i={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-progress",title:"Order nummer: 1423569",linkUrl:"/link-to-somewhere",linkComponent:"a",downloadLinkUrl:"https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270",downloadFileName:"SomeFileName",target:"blank"}},o={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-delivered",title:"Order nummer: 1423569",children:e.jsx(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},l={...p,args:{title:"List namn: Absolutely new list",children:e.jsxs(A,{children:[e.jsx(r,{children:"22 produkter"}),e.jsx(z,{icon:"icon-message-circle"})]}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...p,args:{title:"Bonusavstämning.pdf",children:e.jsx(r,{children:"B9150"}),linkUrl:"/link-to-download",linkComponent:"a"}},d={...p,args:{title:"Fakturanr. 217101725",date1:"2023-06-01",children:e.jsxs(A,{align:"center",children:[e.jsx(r,{children:"Fakturabelopp: 3192kr"}),e.jsx(r,{children:"Betalt belopp: 0kr"}),e.jsx(r,{children:"Kvar att betala: 3192kr"}),e.jsx(_,{type:"button",icon:"icon-file",size:"large",onClick:()=>console.log("Download invoice pdf clicked")})]}),linkUrl:"/link-to-download",linkComponent:"a"}};var S,C,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(G=d.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const le=["LinkListItemStory_Order_Processing","LinkListItemStory_Order_Delivered","LinkListItemStory_PurchaseListItem","LinkListItemStory_BonusListItem","LinkListItemStory_InvoiceListItem"],je=Object.freeze(Object.defineProperty({__proto__:null,LinkListItemStory_BonusListItem:c,LinkListItemStory_InvoiceListItem:d,LinkListItemStory_Order_Delivered:o,LinkListItemStory_Order_Processing:i,LinkListItemStory_PurchaseListItem:l,__namedExportsOrder:le,default:ae},Symbol.toStringTag,{value:"Module"}));export{l as L,j as a,je as l};
