import{c as P}from"./index-74f03c09.js";import{j as o,a as r,F as s}from"./jsx-runtime-76c5c2e2.js";import{T as n}from"./text-9b083925.js";import{O as t,b as gr,c as hr,d as x,e as I}from"./order-item.stories-7e600273.js";import{C as fr}from"./cart-product-list-a1b9ae6a.js";import{C as kr,a as _r,b as br}from"./cart-product.stories-695510de.js";import{G as Br}from"./group-wrapper-53e2b69f.js";import{C as T,a as xr,b as Ir}from"./checkbox-list-item.stories-2e0d75c2.js";import{U as b,a as B}from"./unordered-list.stories-72faf128.js";import{H}from"./heading-3f08a059.js";import{B as O}from"./button-90dd05d4.js";const Lr="_infoSummaryBox_h9t2n_1",Cr="_linkButton_h9t2n_6",Pr="_label_h9t2n_18",Tr="_box_h9t2n_24",Hr="_withBackground_h9t2n_32",i={infoSummaryBox:Lr,linkButton:Cr,label:Pr,box:Tr,withBackground:Hr};function _({label:a,children:yr,linkLabel:L,withBackground:Sr,onClick:C}){return o("div",{className:i.infoSummaryBox,children:[L&&C&&r("button",{type:"button",onClick:()=>C,className:P(i.linkButton,"body"),children:L}),a&&r("label",{className:i.label,htmlFor:"infoSummary",children:a}),r("div",{id:"infoSummary",className:P(i.box,Sr?i.withBackground:""),children:yr})]})}try{_.displayName="InfoSummaryBox",_.__docgenInfo={description:"",displayName:"InfoSummaryBox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},linkLabel:{defaultValue:null,description:"",name:"linkLabel",required:!1,type:{name:"string"}},withBackground:{defaultValue:null,description:"",name:"withBackground",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"CallableFunction"}}}}}catch{}const Or={title:"Design System/Molecules/InfoSummaryBox",component:_},e={render:({...a})=>r("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:r(_,{...a})})},vr=o(s,{children:[r(n,{weight:"bold",children:"Administratör"}),r(n,{children:"Jon Jonsson"}),r(n,{children:"Granängsringen 3, 135 44, Tyresö"})]}),Vr=o(s,{children:[r(n,{weight:"bold",children:"Beställare"}),r(n,{borderBottom:!0,children:"Lisbeth Jonsson"}),r(n,{borderBottom:!0,children:"Sture Jonsson"}),r(n,{borderBottom:!0,children:"Steven Stevenson"}),r(n,{children:"Bobby Granlund"})]}),Fr=o(s,{children:[r(t,{...gr.args}),r(t,{...hr.args})]}),Wr=o(s,{children:[r(t,{...x.args}),r(t,{...I.args})]}),wr=o(s,{children:[r(t,{...x.args}),r(t,{...I.args})]}),pr=o(s,{children:[r(t,{...x.args}),r(t,{...I.args})]}),Ar=[kr.args,_r.args],Dr=r(fr,{children:Ar.map(a=>r(br,{...a},Math.random()))}),Mr=o(Br,{position:"center",children:[r(O,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),r(O,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),jr=[T.args,xr.args,T.args],Nr=r(b,{...B.args,spacing:"md"}),Ur=r(s,{children:jr.map(a=>r(Ir,{checked:!1,onChange:()=>{},...a}))}),qr=o(s,{children:[r(H,{order:5,children:"Ursprung"}),r(b,{...B.args,spacing:"md"}),r(H,{order:5,children:"Karaktär"}),r(b,{...B.args,spacing:"md"})]}),m={...e,args:{label:"Dina uppgifter",linkLabel:"Hantera/Ändra uppgifter",onClick:()=>{},children:vr}},l={...e,args:{label:"Användare",linkLabel:"Hantera",onClick:()=>{},children:Vr}},c={...e,args:{label:"Listor",linkLabel:"Hantera",onClick:()=>{},children:Fr}},d={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:Dr}},u={...e,args:{children:Wr}},p={...e,args:{label:"Öl",children:wr}},y={...e,args:{label:"Vin",children:pr}},S={...e,args:{label:"Vin",children:pr}},g={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:Mr}},h={...e,args:{label:"VATTEN",children:Nr}},f={...e,args:{label:"ÖL",children:Ur}},k={...e,args:{label:"Välj vilka fakta du vill visa i din dryckeslista",children:qr,withBackground:!0}};var v,V,F;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Dina uppgifter',
    linkLabel: 'Hantera/Ändra uppgifter',
    onClick: () => {},
    children: itemsListAdministrator
  }
}`,...(F=(V=m.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var W,w,A;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Användare',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListBestallare
  }
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var D,M,j;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Listor',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListInkopslistor
  }
}`,...(j=(M=c.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var N,U,q;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsProdukter
  }
}`,...(q=(U=d.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,E;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    children: itemsListMinaOrdrar
  }
}`,...(E=(J=u.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var R,z,K;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Öl',
    children: itemsListCategoryBeer
  }
}`,...(K=(z=p.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine
  }
}`,...(rr=($=S.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,or;g.parameters={...g.parameters,docs:{...(er=g.parameters)==null?void 0:er.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsShoppingList
  }
}`,...(or=(ar=g.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var nr,tr,sr;h.parameters={...h.parameters,docs:{...(nr=h.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'VATTEN',
    children: itemsCheckboxListLoka
  }
}`,...(sr=(tr=h.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var ir,mr,lr;f.parameters={...f.parameters,docs:{...(ir=f.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'ÖL',
    children: itemsCheckboxListHeineken
  }
}`,...(lr=(mr=f.parameters)==null?void 0:mr.docs)==null?void 0:lr.source}}};var cr,dr,ur;k.parameters={...k.parameters,docs:{...(cr=k.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Välj vilka fakta du vill visa i din dryckeslista',
    children: itemsWordFilters,
    withBackground: true
  }
}`,...(ur=(dr=k.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};const Gr=["InfoSummaryBoxStory_DinaUppgifter","InfoSummaryBoxStory_Anvandare","InfoSummaryBoxStory_Inkopslistor","InfoSummaryBoxStory_Produkter","InfoSummaryBoxStory_MinaOrdrar","InfoSummaryBoxStory_PDF_Category_Beer","InfoSummaryBoxStory_PDF_Category_Wine","InfoSummaryBoxStory_PurchaseListItem","InfoSummaryBoxStory_ShoppingList","InfoSummaryBoxStory_CheckboxList_Loka","InfoSummaryBoxStory_CheckboxList_Heineken","InfoSummaryBoxStory_WordFilters"],ee=Object.freeze(Object.defineProperty({__proto__:null,InfoSummaryBoxStory_Anvandare:l,InfoSummaryBoxStory_CheckboxList_Heineken:f,InfoSummaryBoxStory_CheckboxList_Loka:h,InfoSummaryBoxStory_DinaUppgifter:m,InfoSummaryBoxStory_Inkopslistor:c,InfoSummaryBoxStory_MinaOrdrar:u,InfoSummaryBoxStory_PDF_Category_Beer:p,InfoSummaryBoxStory_PDF_Category_Wine:y,InfoSummaryBoxStory_Produkter:d,InfoSummaryBoxStory_PurchaseListItem:S,InfoSummaryBoxStory_ShoppingList:g,InfoSummaryBoxStory_WordFilters:k,__namedExportsOrder:Gr,default:Or},Symbol.toStringTag,{value:"Module"}));export{_ as I,m as a,l as b,u as c,h as d,f as e,k as f,p as g,y as h,c as i,g as j,ee as k};
//# sourceMappingURL=info-summary-box.stories-44c5bc03.js.map
