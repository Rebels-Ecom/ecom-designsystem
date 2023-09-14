import{g as K}from"./tag-helper-8d720359.js";import{T as C}from"./tag-cf40f1b7.js";import{a as e,j as n,F as k}from"./jsx-runtime-76c5c2e2.js";import{I as G}from"./icon-button-b8bc13de.js";import{I as M}from"./icon-link-4ddd8b4a.js";import{I as z}from"./icon-7e598265.js";import{T as r}from"./text-9b083925.js";import{T as g}from"./tags-list-f8e9454d.js";import{G as A}from"./group-wrapper-53e2b69f.js";import{H as h}from"./heading-f7ae5826.js";const Q="_linkItem_uf160_1",R="_itemWrapper_uf160_5",X="_linkContentWrapper_uf160_13",Y="_tagsWrapper_uf160_18",Z="_title_uf160_24",$="_linkWrapper_uf160_29",ee="_linkButton_uf160_35",re="_label_uf160_47",te="_box_uf160_53",a={linkItem:Q,itemWrapper:R,linkContentWrapper:X,tagsWrapper:Y,title:Z,linkWrapper:$,linkButton:ee,label:re,box:te};function u({title:i,children:t,date1:L,date2:_,status:y,linkUrl:l,linkComponent:I,onClick:x,downloadLinkUrl:T,target:J,onDownloadClick:v}){return e("div",{className:a.linkItem,children:l?n("div",{className:a.itemWrapper,children:[n("div",{className:a.linkContentWrapper,children:[L||_?n("div",{className:a.tagsWrapper,children:[L&&e(C,{text:L,shape:"rectangular",color:"grey"}),_&&e(C,{text:_,shape:"rectangular",color:y?K(y):"grey"}),v&&e(G,{icon:"icon-file",isLink:!1,onClick:v,size:"large"}),T&&e(M,{href:T,linkComponent:I,target:J,icon:"icon-file",children:void 0})]}):null,e(I,{className:a.linkWrapper,to:l,href:l,onClick:x,children:e("h4",{className:a.title,children:i})}),t&&e("div",{children:t})]}),e(I,{className:a.linkWrapper,to:l,href:l,onClick:x,children:e(z,{icon:"icon-chevrons-right"})})]}):null})}try{u.displayName="LinkListItem",u.__docgenInfo={description:"",displayName:"LinkListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},date1:{defaultValue:null,description:"",name:"date1",required:!1,type:{name:"string"}},date2:{defaultValue:null,description:"",name:"date2",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},downloadLinkUrl:{defaultValue:null,description:"",name:"downloadLinkUrl",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onDownloadClick:{defaultValue:null,description:"",name:"onDownloadClick",required:!1,type:{name:"(() => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const ne={title:"Design System/Molecules/LinkListItem",component:u},p={render:({...i})=>{function t(){console.log("Button clicked")}return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(u,{...i,onClick:t})})}};function f(i){return i.map(t=>({text:t.Text,shape:t.Shape?t.Shape:"rectangular",color:t.Class}))}const H=[{Text:"Senast beställd: 2022-06-01",Class:"grey",ExternalId:"10751"}],ae=[{Text:"2022-06-01",Class:"grey",ExternalId:"10751"},{Text:"Packas",Class:"yellow",ExternalId:"10752"}],ie=[{Text:"2022-05-28",Class:"grey",ExternalId:"10751"},{Text:"Skickas",Class:"blue",ExternalId:"10752"}];k,g,f(H),h,r,r;k,g,f(H),h,r,r;k,g,f(ae),h,r,r;k,g,f(ie),h,r,r;const o={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-progress",title:"Order nummer: 1423569",linkUrl:"/link-to-somewhere",linkComponent:"a",downloadLinkUrl:"https://stage-cm-front-ehandel.spendrups.se//jss/api/OrderJss/InvoiceDownload?orderNumber=1007039270",downloadFileName:"SomeFileName",target:"blank"}},s={...p,args:{date1:"2023-06-01",date2:"2023-06-07",status:"status-delivered",title:"Order nummer: 1423569",children:e(r,{children:"22 artiklar"}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},d={...p,args:{title:"List namn: Absolutely new list",children:n(A,{children:[e(r,{children:"22 produkter"}),e(z,{icon:"icon-message-circle"})]}),linkUrl:"/link-to-somewhere",linkComponent:"a"}},c={...p,args:{title:"Bonusavstämning.pdf",children:e(r,{children:"B9150"}),linkUrl:"/link-to-download",linkComponent:"a"}},m={...p,args:{title:"Fakturanr. 217101725",date1:"2023-06-01",children:n(A,{align:"center",children:[e(r,{children:"Fakturabelopp: 3192kr"}),e(r,{children:"Betalt belopp: 0kr"}),e(r,{children:"Kvar att betala: 3192kr"}),e(G,{icon:"icon-file",isLink:!1,size:"large",onClick:()=>console.log("Download invoice pdf clicked")})]}),linkUrl:"/link-to-download",linkComponent:"a"}};var S,b,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(B=s.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var N,U,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var q,F,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Bonusavstämning.pdf',
    children: <Text>B9150</Text>,
    linkUrl: '/link-to-download',
    linkComponent: 'a'
  }
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var j,P,E;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...LinkListItemStoryTemplate,
  args: {
    title: 'Fakturanr. 217101725',
    date1: '2023-06-01',
    children: <GroupWrapper align="center">
        <Text>Fakturabelopp: 3192kr</Text>
        <Text>Betalt belopp: 0kr</Text>
        <Text>Kvar att betala: 3192kr</Text>
        <IconButton icon={'icon-file'} isLink={false} size={'large'} onClick={() => console.log('Download invoice pdf clicked')}></IconButton>
      </GroupWrapper>,
    linkUrl: '/link-to-download',
    linkComponent: 'a'
  }
}`,...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const le=["LinkListItemStory_Order_Processing","LinkListItemStory_Order_Delivered","LinkListItemStory_PurchaseListItem","LinkListItemStory_BonusListItem","LinkListItemStory_InvoiceListItem"],fe=Object.freeze(Object.defineProperty({__proto__:null,LinkListItemStory_BonusListItem:c,LinkListItemStory_InvoiceListItem:m,LinkListItemStory_Order_Delivered:s,LinkListItemStory_Order_Processing:o,LinkListItemStory_PurchaseListItem:d,__namedExportsOrder:le,default:ne},Symbol.toStringTag,{value:"Module"}));export{d as L,u as a,fe as l};
//# sourceMappingURL=link-list-item.stories-c7827f04.js.map
