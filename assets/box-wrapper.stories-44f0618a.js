import{B as ar}from"./box-wrapper-2e07c987.js";import{I as s,a as ir,b as pr,c as dr,d as cr,e as lr,f as mr,g as gr,h as ur}from"./info-summary-box.stories-4a5dfb4c.js";import{O as hr,a as Sr}from"./order-item.stories-dfd22c22.js";import{T as yr,a as xr}from"./tabs.stories-a9bbd857.js";import{OrderConfirmationDetailsStory_Pricing as _,OrderConfirmationDetailsStory_TotalPayment as or}from"./order-confirmation-details.stories-7bf763ca.js";import{G as tr}from"./group-wrapper-53e2b69f.js";import{S as fr,a as Wr}from"./scrollable-list.stories-15a82675.js";import{S as Br,a as _r}from"./single-select-buttons-list.stories-ac7c4bd4.js";import{j as e,F as t,a as r}from"./jsx-runtime-76c5c2e2.js";import{H as a}from"./heading-e5a679a5.js";import{T as o}from"./text-3e056ff6.js";import{D as Tr}from"./delivery-date-info-7ea288cf.js";import{T as nr}from"./tags-list-c02b4de0.js";import{O as p}from"./order-confirmation-details-b40f81d7.js";import{B as i}from"./button-df2f483d.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./cart-product-list-a1b9ae6a.js";import"./cart-product.stories-d57f460c.js";import"./product-quantity-input-c54edf51.js";import"./input-text-4314ba0f.js";import"./form-helper-ce65ae5e.js";import"./icon-af819d0c.js";import"./picture-helper-86177d87.js";import"./picture-097a8d40.js";import"./icon-button-c17d8174.js";import"./ui-link-1bd4bf5e.js";import"./motion-354a1bac.js";import"./divider-lines-71f4f756.js";import"./loader-ce89f5e5.js";import"./format-helper-6b4b1091.js";import"./icon-button.stories-1a834728.js";import"./chunk-OPEUWD42-0dc0813d.js";import"./checkbox-list-item.stories-72914ac9.js";import"./checkbox-18f33b72.js";import"./unordered-list.stories-e92ee582.js";import"./tag-4d467d25.js";import"./user-profile-dropdown.stories-94a36f4a.js";import"./useOnClickOutside-47d3035a.js";import"./drawer-sidebar-47b21995.js";import"./index-b3e0e324.js";import"./dropdown-list.stories-817c2300.js";import"./user-info-summary.stories-200b6ccc.js";import"./navigation.stories-7325b4b6.js";import"./navigation-list-7157f882.js";import"./below-e3aa399e.js";import"./content-wrapper-19d15755.js";import"./search-nav-bar.stories-45d423a0.js";import"./search-7605c964.js";import"./useCloseOnEscape-fa88369d.js";import"./top-nav-bar.stories-07af6f6b.js";import"./top-nav-bar-d2932d43.js";import"./ui-date-picker.stories-a75a5ac5.js";import"./isNativeReflectConstruct-0525dbfe.js";import"./index-6de6b113.js";import"./link-list-item.stories-dc08f751.js";import"./tag-helper-8d720359.js";import"./icon-link-c52ced8c.js";import"./button.module-3bdf7fd3.js";const Ne={title:"Design System/Molecules/BoxWrapper",component:ar},n={render:({...d})=>r("div",{style:{margin:"auto",maxWidth:"700px"},children:r(ar,{spacing:"xl",...d,children:d.children})})};function sr(d){return d.map(c=>({text:c.Text,shape:c.Shape?c.Shape:"rectangular",color:c.Class}))}const Or=[{Text:"2022-06-01",Class:"grey",Shape:"pill",ExternalId:"10751"},{Text:"Levererad",Class:"green",Shape:"pill",ExternalId:"10751"}],vr=[{Text:"Mottagen",Class:"grey",Shape:"pill",ExternalId:"10751"},{Text:"Packas",Class:"yellow",Shape:"pill",ExternalId:"10752"},{Text:"Skickas",Class:"blue",Shape:"pill",ExternalId:"10753"},{Text:"Levererad",Class:"green",Shape:"pill",ExternalId:"10754"},{Text:"Retur",Class:"purple",Shape:"pill",ExternalId:"10755"}],kr=e(t,{children:[r(a,{order:3,children:"Mitt spendrups"}),r(o,{children:"Dina aktuella leveransdatum"}),r(Tr,{dateLabel:"2022-06-03"}),r(s,{...ir.args}),r(s,{...pr.args})]}),Lr=e(t,{children:[r(a,{order:3,children:"Mina Favoriter"}),r(o,{children:"Hantera dina favoriter här under"}),r(yr,{...xr.args})]}),br=e(t,{children:[r(a,{order:3,children:"Min Senaste Order"}),r(o,{children:"Tillagda produkter"}),r(o,{weight:"bold",children:"Din senaste order innehåller 22 produkter"}),r(nr,{tagsList:sr(Or)}),r(hr,{...Sr.args}),r(p,{..._.args,withBackground:!0}),r(p,{...or.args,withBackground:!1}),r(i,{type:"button",surface:"primary",children:"Beställ igen"})]}),Ar=e(t,{children:[r(a,{order:3,children:"Mina Ordrar"}),r(o,{children:"Tillagda produkter"}),r(o,{weight:"bold",children:"Du har totalt 2 ordrar som väntar på att levereras"}),r(nr,{tagsList:sr(vr)}),r(s,{...dr.args}),r(p,{..._.args,withBackground:!0}),r(p,{...or.args,withBackground:!1}),r(i,{type:"button",surface:"primary",children:"Beställ igen"})]}),Mr=e(t,{children:[r(a,{order:3,children:"Övriga tjänster"}),r(o,{children:"Gör ditt val här under"}),e(tr,{children:[r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-download"},rounded:!0,children:"Volymrapport"}),r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-check-circle"},rounded:!0,children:"Bonusbesked"})]})]}),Dr=e(t,{children:[r(a,{order:3,children:"Övriga ordertjänster"}),r(o,{children:"Gör ditt val här under"}),e(tr,{children:[r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-package"},rounded:!0,children:"Tomgodsordrar"}),r(i,{type:"button",surface:"secondary",iconRight:{icon:"icon-archive"},rounded:!0,children:"Returordrar"})]})]}),Ir=e(t,{children:[r(a,{order:3,children:"Mina tidigare ordrar"}),r(o,{children:"Ordrar sparas 1-1.5 år tillbaka i tiden, per månad:"}),r(o,{weight:"bold",children:"Välj din månad för att se tidigare historik"}),r(Br,{onChange:()=>{},..._r.args})]}),Fr=e(t,{children:[r(a,{order:3,noMargin:!0,children:"Produktblad"}),r(a,{order:4,noMargin:!0,children:"Inköpslista namn"}),r(o,{children:"2023-07-18 kl 13:33"}),r(s,{...cr.args}),r(s,{...lr.args}),r(i,{type:"button",surface:"primary",iconRight:{icon:"icon-file"},children:"Spara PDF-fil"})]}),wr=e(t,{children:[r(a,{order:4,noMargin:!0,children:"Vilka Fakta"}),r(s,{...mr.args})]}),Pr=e(t,{children:[r(a,{order:3,children:"Inköpslistor"}),r(fr,{...Wr.args})]}),Cr=e(t,{children:[r(a,{order:3,children:"List Namn"}),r(s,{...gr.args}),r(s,{...ur.args}),r(p,{..._.args,withBackground:!0}),r(i,{type:"button",surface:"primary",children:"Beställ igen"})]}),l={...n,args:{children:kr,position:"left",hasMaxWidth:!1,withBorder:!1,spacing:"md",noWrap:!0}},m={...n,args:{children:Lr,position:"left",spacing:"md",noWrap:!0}},g={...n,args:{children:br,position:"left",spacing:"md",noWrap:!0}},u={...n,args:{children:Ar,position:"left",spacing:"md",noWrap:!0}},h={...n,args:{children:Mr,position:"left",spacing:"md",noWrap:!0}},S={...n,args:{children:Dr,position:"left",spacing:"md",noWrap:!0}},y={...n,args:{children:Ir,position:"left",spacing:"md",noWrap:!0}},x={...n,args:{children:Pr,position:"left",spacing:"md",noWrap:!0}},f={...n,args:{children:Cr,position:"left",spacing:"md",noWrap:!0}},W={...n,args:{children:Fr,position:"left",spacing:"md",noWrap:!0}},B={...n,args:{children:wr,position:"left",spacing:"md",noWrap:!0}};var T,O,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
//# sourceMappingURL=box-wrapper.stories-44f0618a.js.map
