import{B as ar}from"./box-wrapper-cb01bce2.js";import{I as s,a as ir,b as pr,c as dr,d as cr,e as lr,f as mr,g as gr,h as ur}from"./info-summary-box.stories-f3b45c9f.js";import{O as hr,a as Sr}from"./order-item.stories-24614011.js";import{T as yr,a as xr}from"./tabs.stories-82ef9102.js";import{OrderConfirmationDetailsStory_Pricing as _,OrderConfirmationDetailsStory_TotalPayment as or}from"./order-confirmation-details.stories-4e001a89.js";import{G as tr}from"./group-wrapper-8f1ce8c7.js";import{S as fr,a as Wr}from"./scrollable-list.stories-2ade2981.js";import{S as Br,a as _r}from"./single-select-buttons-list.stories-69e060e6.js";import{a as e,F as t,j as r}from"./jsx-runtime-a3a6c0b8.js";import{H as a}from"./heading-49a03c05.js";import{T as o}from"./text-59fe9fb2.js";import{D as Tr}from"./delivery-date-info-b4925885.js";import{T as nr}from"./tags-list-5108b032.js";import{O as p}from"./order-confirmation-details-3bb05988.js";import{B as i}from"./button-369dade1.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./cart-product-list-c0ae9926.js";import"./cart-product.stories-5ddf1761.js";import"./product-quantity-input-008839fc.js";import"./input-text-e08fbebb.js";import"./form-helper-ce65ae5e.js";import"./icon-5fefd509.js";import"./picture-helper-1d1954b7.js";import"./picture-7e21d28d.js";import"./icon-button-c1cc9278.js";import"./ui-link-a18343fc.js";import"./motion-54668070.js";import"./loader-72deb8c4.js";import"./format-helper-6b4b1091.js";import"./icon-button.stories-2e13fcb1.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./checkbox-list-item.stories-095372f5.js";import"./checkbox-45f9076c.js";import"./unordered-list.stories-0574ebc3.js";import"./user-profile-dropdown.stories-c8f2ca21.js";import"./useOnClickOutside-338168d6.js";import"./drawer-sidebar-b0bfef9e.js";import"./index-4058f88b.js";import"./dropdown-list.stories-53c8dc04.js";import"./user-info-summary.stories-eae747ce.js";import"./navigation.stories-1fc8281a.js";import"./navigation-list-076df4fa.js";import"./below-e3c1f628.js";import"./content-wrapper-c985da24.js";import"./search-nav-bar.stories-43873288.js";import"./search-cfeddc99.js";import"./useCloseOnEscape-c2f46cc9.js";import"./top-nav-bar.stories-83725968.js";import"./top-nav-bar-3e411fd6.js";import"./ui-date-picker.stories-f9a815bd.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-79d56f34.js";import"./link-list-item.stories-67da526c.js";import"./tag-helper-8d720359.js";import"./tag-fac2d6a3.js";import"./icon-link-fcab3b95.js";import"./button.module-16a60bae.js";const Ne={title:"Design System/Molecules/BoxWrapper",component:ar},n={render:({...d})=>r("div",{style:{margin:"auto",maxWidth:"700px"},children:r(ar,{spacing:"xl",...d,children:d.children})})};function sr(d){return d.map(c=>({text:c.Text,shape:c.Shape?c.Shape:"rectangular",color:c.Class}))}const Or=[{Text:"2022-06-01",Class:"grey",Shape:"pill",ExternalId:"10751"},{Text:"Levererad",Class:"green",Shape:"pill",ExternalId:"10751"}],vr=[{Text:"Mottagen",Class:"grey",Shape:"pill",ExternalId:"10751"},{Text:"Packas",Class:"yellow",Shape:"pill",ExternalId:"10752"},{Text:"Skickas",Class:"blue",Shape:"pill",ExternalId:"10753"},{Text:"Levererad",Class:"green",Shape:"pill",ExternalId:"10754"},{Text:"Retur",Class:"purple",Shape:"pill",ExternalId:"10755"}],kr=e(t,{children:[r(a,{order:3,children:"Mitt spendrups"}),r(o,{children:"Dina aktuella leveransdatum"}),r(Tr,{dateLabel:"2022-06-03"}),r(s,{...ir.args}),r(s,{...pr.args})]}),Lr=e(t,{children:[r(a,{order:3,children:"Mina Favoriter"}),r(o,{children:"Hantera dina favoriter här under"}),r(yr,{...xr.args})]}),br=e(t,{children:[r(a,{order:3,children:"Min Senaste Order"}),r(o,{children:"Tillagda produkter"}),r(o,{weight:"bold",children:"Din senaste order innehåller 22 produkter"}),r(nr,{tagsList:sr(Or)}),r(hr,{...Sr.args}),r(p,{..._.args,withBackground:!0}),r(p,{...or.args,withBackground:!1}),r(i,{type:"button",surface:"primary",children:"Beställ igen"})]}),Ar=e(t,{children:[r(a,{order:3,children:"Mina Ordrar"}),r(o,{children:"Tillagda produkter"}),r(o,{weight:"bold",children:"Du har totalt 2 ordrar som väntar på att levereras"}),r(nr,{tagsList:sr(vr)}),r(s,{...dr.args}),r(p,{..._.args,withBackground:!0}),r(p,{...or.args,withBackground:!1}),r(i,{type:"button",surface:"primary",children:"Beställ igen"})]}),Mr=e(t,{children:[r(a,{order:3,children:"Övriga tjänster"}),r(o,{children:"Gör ditt val här under"}),e(tr,{children:[r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-download"},rounded:!0,children:"Volymrapport"}),r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-check-circle"},rounded:!0,children:"Bonusbesked"})]})]}),Dr=e(t,{children:[r(a,{order:3,children:"Övriga ordertjänster"}),r(o,{children:"Gör ditt val här under"}),e(tr,{children:[r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-package"},rounded:!0,children:"Tomgodsordrar"}),r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-archive"},rounded:!0,children:"Returordrar"})]})]}),Ir=e(t,{children:[r(a,{order:3,children:"Mina tidigare ordrar"}),r(o,{children:"Ordrar sparas 1-1.5 år tillbaka i tiden, per månad:"}),r(o,{weight:"bold",children:"Välj din månad för att se tidigare historik"}),r(Br,{onChange:()=>{},..._r.args})]}),Fr=e(t,{children:[r(a,{order:3,noMargin:!0,children:"Produktblad"}),r(a,{order:4,noMargin:!0,children:"Inköpslista namn"}),r(o,{children:"2023-07-18 kl 13:33"}),r(s,{...cr.args}),r(s,{...lr.args}),r(i,{type:"button",surface:"primary",iconRight:{icon:"icon-file"},children:"Spara PDF-fil"})]}),wr=e(t,{children:[r(a,{order:4,noMargin:!0,children:"Vilka Fakta"}),r(s,{...mr.args})]}),Pr=e(t,{children:[r(a,{order:3,children:"Inköpslistor"}),r(fr,{...Wr.args})]}),Cr=e(t,{children:[r(a,{order:3,children:"List Namn"}),r(s,{...gr.args}),r(s,{...ur.args}),r(p,{..._.args,withBackground:!0}),r(i,{type:"button",surface:"primary",children:"Beställ igen"})]}),l={...n,args:{children:kr,position:"left",hasMaxWidth:!1,withBorder:!1,spacing:"md",noWrap:!0}},m={...n,args:{children:Lr,position:"left",spacing:"md",noWrap:!0}},g={...n,args:{children:br,position:"left",spacing:"md",noWrap:!0}},u={...n,args:{children:Ar,position:"left",spacing:"md",noWrap:!0}},h={...n,args:{children:Mr,position:"left",spacing:"md",noWrap:!0}},S={...n,args:{children:Dr,position:"left",spacing:"md",noWrap:!0}},y={...n,args:{children:Ir,position:"left",spacing:"md",noWrap:!0}},x={...n,args:{children:Pr,position:"left",spacing:"md",noWrap:!0}},f={...n,args:{children:Cr,position:"left",spacing:"md",noWrap:!0}},W={...n,args:{children:Fr,position:"left",spacing:"md",noWrap:!0}},B={...n,args:{children:wr,position:"left",spacing:"md",noWrap:!0}};var T,O,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: mittSpendrupsArgs,
    position: 'left',
    hasMaxWidth: false,
    withBorder: false,
    spacing: 'md',
    noWrap: true
  }
}`,...(v=(O=l.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var k,L,b;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: minaFavoriterArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(b=(L=m.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var A,M,D;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: minSenasteOrderArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(D=(M=g.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,F,w;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: minaOrdrarArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(w=(F=u.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var P,C,j;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: ovrigaTjansterArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(j=(C=h.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var E,R,G;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: ovrigaOrderTjansterArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(G=(R=S.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,V,N;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: tidigareOrdrarArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(N=(V=y.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var U,q,z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: purchaseListsArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(z=(q=x.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: purchaseListArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;W.parameters={...W.parameters,docs:{...(X=W.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: downloadPDFArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(Z=(Y=W.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,er;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...BoxWrapperStoryTemplate,
  args: {
    children: wordFiltersArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true
  }
}`,...(er=(rr=B.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};const Ue=["BoxWrapperStory_MittSpendrups","BoxWrapperStory_MinaFavoriter","BoxWrapperStory_MinSenasteOrder","BoxWrapperStory_MinaOrdrar","BoxWrapperStory_ÖvrigaTjänster","BoxWrapperStory_ÖvrigaOrderTjänster","BoxWrapperStory_TidigareOrdrar","BoxWrapperStory_PurchaseLists","BoxWrapperStory_PurchaseListDetails","BoxWrapperStory_Download_PDF","BoxWrapperStory_WordFilters"];export{W as BoxWrapperStory_Download_PDF,g as BoxWrapperStory_MinSenasteOrder,m as BoxWrapperStory_MinaFavoriter,u as BoxWrapperStory_MinaOrdrar,l as BoxWrapperStory_MittSpendrups,f as BoxWrapperStory_PurchaseListDetails,x as BoxWrapperStory_PurchaseLists,y as BoxWrapperStory_TidigareOrdrar,B as BoxWrapperStory_WordFilters,S as BoxWrapperStory_ÖvrigaOrderTjänster,h as BoxWrapperStory_ÖvrigaTjänster,Ue as __namedExportsOrder,Ne as default};
