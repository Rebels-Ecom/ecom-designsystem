import{g as K}from"./tag-helper-8d720359.js";import{T as C}from"./tag-fac2d6a3.js";import{j as e,a as n,F as k}from"./jsx-runtime-a3a6c0b8.js";import{I as G}from"./icon-button-e8e21795.js";import{I as M}from"./icon-link-fcab3b95.js";import{I as z}from"./icon-5fefd509.js";import{T as r}from"./text-59fe9fb2.js";import{T as g}from"./tags-list-5108b032.js";import{G as A}from"./group-wrapper-8f1ce8c7.js";import{H as h}from"./heading-808ea78c.js";const Q="_linkItem_1kje8_1",R="_itemWrapper_1kje8_5",X="_linkContentWrapper_1kje8_13",Y="_tagsWrapper_1kje8_19",Z="_title_1kje8_25",$="_linkWrapper_1kje8_30",ee="_linkButton_1kje8_36",re="_label_1kje8_48",te="_box_1kje8_54",a={linkItem:Q,itemWrapper:R,linkContentWrapper:X,tagsWrapper:Y,title:Z,linkWrapper:$,linkButton:ee,label:re,box:te};function u({title:i,children:t,date1:L,date2:f,status:y,linkUrl:l,linkComponent:I,onClick:T,downloadLinkUrl:x,target:J,onDownloadClick:v}){return e("div",{className:a.linkItem,children:n("div",{className:a.itemWrapper,children:[n("div",{className:a.linkContentWrapper,children:[L||f?n("div",{className:a.tagsWrapper,children:[L&&e(C,{text:L,shape:"rectangular",color:"grey"}),f&&e(C,{text:f,shape:"rectangular",color:y?K(y):"grey"}),v&&e(G,{type:"button",icon:"icon-file",onClick:v,size:"large",isTransparent:!0,noBorder:!0,noPadding:!0}),x&&e(M,{href:x,linkComponent:I,target:J,icon:"icon-file",children:void 0})]}):null,l?e(I,{className:a.linkWrapper,to:l,href:l,onClick:T,children:e("h4",{className:a.title,children:i})}):e("h4",{className:a.title,children:i}),t&&e("div",{children:t})]}),l&&e(I,{className:a.linkWrapper,to:l,href:l,onClick:T,children:e(z,{icon:"icon-chevrons-right"})})]})})}try{u.displayName="LinkListItem",u.__docgenInfo={description:"",displayName:"LinkListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},date1:{defaultValue:null,description:"",name:"date1",required:!1,type:{name:"string"}},date2:{defaultValue:null,description:"",name:"date2",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},downloadLinkUrl:{defaultValue:null,description:"",name:"downloadLinkUrl",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onDownloadClick:{defaultValue:null,description:"",name:"onDownloadClick",required:!1,type:{name:"(() => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const ne={title:"Design System/Molecules/LinkListItem",component:u},p={render:({...i})=>{function t(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(u,{...i,onClick:t})})}};function _(i){return i.map(t=>({text:t.Text,shape:t.Shape?t.Shape:"rectangular",color:t.Class}))}const H=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],ae=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],ie=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}];k,g,_(H),h,r,r;k,g,_(H),h,r,r;k,g,_(ae),h,r,r;k,g,_(ie),h,r,r;const o={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-progress",title:"Order nummer: 1423569",linkUrl:"/link-to-somewhere",linkComponent:"a",downloadLinkUrl:"https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270",downloadFileName:"SomeFileName",target:"blank"}},s={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-delivered",title:"Order nummer: 1423569",children:e(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...p,args:{title:"List namn: Absolutely new list",children:n(A,{children:[e(r,{children:"22 produkter"}),e(z,{icon:"icon-message-circle"})]}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...p,args:{title:"Bonusavstämning.pdf",children:e(r,{children:"B9150"}),linkUrl:"/link-to-download",linkComponent:"a"}},m={...p,args:{title:"Fakturanr. 217101725",date1:"2023-06-01",children:n(A,{align:"center",children:[e(r,{children:"Fakturabelopp: 3192kr"}),e(r,{children:"Betalt belopp: 0kr"}),e(r,{children:"Kvar att betala: 3192kr"}),e(G,{type:"button",icon:"icon-file",size:"large",onClick:()=>console.log("Download invoice pdf clicked")})]}),linkUrl:"/link-to-download",linkComponent:"a"}};var S,b,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var W,B,O;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(B=s.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var j,N,V;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var q,F,U;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Bonusavstämning.pdf',
    children: <Text>B9150</Text>,
    linkUrl: '/link-to-download',
    linkComponent: 'a'
  }
}`,...(U=(F=c.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var D,P,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const le=["LinkListItemStory_Order_Processing","LinkListItemStory_Order_Delivered","LinkListItemStory_PurchaseListItem","LinkListItemStory_BonusListItem","LinkListItemStory_InvoiceListItem"],_e=Object.freeze(Object.defineProperty({__proto__:null,LinkListItemStory_BonusListItem:c,LinkListItemStory_InvoiceListItem:m,LinkListItemStory_Order_Delivered:s,LinkListItemStory_Order_Processing:o,LinkListItemStory_PurchaseListItem:d,__namedExportsOrder:le,default:ne},Symbol.toStringTag,{value:"Module"}));export{d as L,u as a,_e as l};
