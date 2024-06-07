import{g as $}from"./tag-helper-8d720359.js";import{T as C}from"./tag-fac2d6a3.js";import{j as e,a as t,F as o}from"./jsx-runtime-a3a6c0b8.js";import{P as S}from"./placeholder-0f82f781.js";import{I as z}from"./icon-button-9255179d.js";import{I as Q}from"./icon-link-ae5036df.js";import{I as A}from"./icon-5fefd509.js";import{T as r}from"./text-cdc0625f.js";import{T as g}from"./tags-list-3f7fda62.js";import{G as H}from"./group-wrapper-8f1ce8c7.js";import{H as h}from"./heading-47d2ab87.js";const R="_linkItem_1kje8_1",X="_itemWrapper_1kje8_5",Y="_linkContentWrapper_1kje8_13",Z="_tagsWrapper_1kje8_19",ee="_title_1kje8_25",re="_linkWrapper_1kje8_30",te="_linkButton_1kje8_36",ne="_label_1kje8_48",ae="_box_1kje8_54",i={linkItem:R,itemWrapper:X,linkContentWrapper:Y,tagsWrapper:Z,title:ee,linkWrapper:re,linkButton:te,label:ne,box:ae};function k({title:n,children:a,date1:L,date2:f,status:I,linkUrl:l,linkComponent:y,onClick:T,downloadLinkUrl:v,target:K,onDownloadClick:x,loading:M}){return e("div",{className:i.linkItem,children:t("div",{className:i.itemWrapper,children:[e("div",{className:i.linkContentWrapper,children:M?t(o,{children:[e(S,{type:"heading"}),e(S,{type:"p_short"})]}):t(o,{children:[L||f?t("div",{className:i.tagsWrapper,children:[L&&e(C,{text:L,shape:"rectangular",color:"grey"}),f&&e(C,{text:f,shape:"rectangular",color:I?$(I):"grey"}),x&&e(z,{type:"button",icon:"icon-file",onClick:x,size:"large",isTransparent:!0,noBorder:!0,noPadding:!0}),v&&e(Q,{href:v,linkComponent:y,target:K,icon:"icon-file",children:void 0})]}):null,l?e(y,{className:i.linkWrapper,to:l,href:l,onClick:T,"aria-label":`Navigate to ${n}`,children:e("h4",{className:i.title,children:n})}):e("h4",{className:i.title,children:n}),a&&e("div",{children:a})]})}),l&&e(y,{className:i.linkWrapper,to:l,href:l,onClick:T,"aria-label":`Navigate to ${n}`,children:e(A,{icon:"icon-chevrons-right"})})]})})}try{k.displayName="LinkListItem",k.__docgenInfo={description:"",displayName:"LinkListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},date1:{defaultValue:null,description:"",name:"date1",required:!1,type:{name:"string"}},date2:{defaultValue:null,description:"",name:"date2",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},downloadLinkUrl:{defaultValue:null,description:"",name:"downloadLinkUrl",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onDownloadClick:{defaultValue:null,description:"",name:"onDownloadClick",required:!1,type:{name:"(() => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Design System/Molecules/LinkListItem",component:k},u={render:({...n})=>{function a(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(k,{...n,onClick:a})})}};function _(n){return n.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"rectangular",color:a.Class}))}const J=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],le=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],oe=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}];o,g,_(J),h,r,r;o,g,_(J),h,r,r;o,g,_(le),h,r,r;o,g,_(oe),h,r,r;const s={...u,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-progress",title:"Order nummer: 1423569",linkUrl:"/link-to-somewhere",linkComponent:"a",downloadLinkUrl:"https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270",downloadFileName:"SomeFileName",target:"blank"}},d={...u,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-delivered",title:"Order nummer: 1423569",children:e(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...u,args:{title:"List namn: Absolutely new list",children:t(H,{children:[e(r,{children:"22 produkter"}),e(A,{icon:"icon-message-circle"})]}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},m={...u,args:{title:"Bonusavstämning.pdf",children:e(r,{children:"B9150"}),linkUrl:"/link-to-download",linkComponent:"a"}},p={...u,args:{title:"Fakturanr. 217101725",date1:"2023-06-01",children:t(H,{align:"center",children:[e(r,{children:"Fakturabelopp: 3192kr"}),e(r,{children:"Betalt belopp: 0kr"}),e(r,{children:"Kvar att betala: 3192kr"}),e(z,{type:"button",icon:"icon-file",size:"large",onClick:()=>console.log("Download invoice pdf clicked")})]}),linkUrl:"/link-to-download",linkComponent:"a"}};var b,w,W;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(W=(w=s.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var N,B,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(B=d.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var j,V,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var F,P,U;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Bonusavstämning.pdf',
    children: <Text>B9150</Text>,
    linkUrl: '/link-to-download',
    linkComponent: 'a'
  }
}`,...(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var D,E,G;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const se=["LinkListItemStory_Order_Processing","LinkListItemStory_Order_Delivered","LinkListItemStory_PurchaseListItem","LinkListItemStory_BonusListItem","LinkListItemStory_InvoiceListItem"],ye=Object.freeze(Object.defineProperty({__proto__:null,LinkListItemStory_BonusListItem:m,LinkListItemStory_InvoiceListItem:p,LinkListItemStory_Order_Delivered:d,LinkListItemStory_Order_Processing:s,LinkListItemStory_PurchaseListItem:c,__namedExportsOrder:se,default:ie},Symbol.toStringTag,{value:"Module"}));export{c as L,k as a,ye as l};
