import{c as L}from"./index-09749a66.js";import{j as r}from"./jsx-runtime-03333307.js";import{T as o}from"./text-1a10703e.js";import{O as n,b as xr,c as Sr,d as b,e as _}from"./order-item.stories-deed8b41.js";import{C as fr}from"./cart-product-list-f323bfda.js";import{c as hr,d as kr,b as br}from"./cart-product.stories-12c70d46.js";import{G as _r}from"./group-wrapper-5bc35e6d.js";import{C as j,a as Br,b as Ir}from"./checkbox-list-item.stories-bde7a456.js";import{U as h,a as k}from"./unordered-list.stories-33d3490e.js";import{H as C}from"./heading-ba18f9a9.js";import{B as T}from"./button-8e3f9b10.js";const Lr="_infoSummaryBox_1fg77_1",jr="_linkButton_1fg77_6",Cr="_label_1fg77_18",Tr="_box_1fg77_25",Pr="_withBackground_1fg77_33",s={infoSummaryBox:Lr,linkButton:jr,label:Cr,box:Tr,withBackground:Pr};function B({label:a,children:ur,linkLabel:I,withBackground:pr,onClick:f}){function gr(yr){yr.preventDefault(),f&&f()}return r.jsxs("div",{className:s.infoSummaryBox,children:[I&&f&&r.jsx("button",{type:"button",onClick:gr,className:L(s.linkButton,"body"),children:I}),a&&r.jsx("label",{className:s.label,htmlFor:"infoSummary",children:a}),r.jsx("div",{id:"infoSummary",className:L(s.box,pr?s.withBackground:""),children:ur})]})}B.__docgenInfo={description:"",methods:[],displayName:"InfoSummaryBox",props:{label:{required:!1,tsType:{name:"string"},description:""},linkLabel:{required:!1,tsType:{name:"string"},description:""},withBackground:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"CallableFunction"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Hr={title:"Design System/Molecules/InfoSummaryBox",component:B},e={render:({...a})=>r.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:r.jsx(B,{...a})})},Or=r.jsxs(r.Fragment,{children:[r.jsx(o,{weight:"bold",children:"Administratör"}),r.jsx(o,{children:"Jon Jonsson"}),r.jsx(o,{children:"Granängsringen 3, 135 44, Tyresö"})]}),Fr=r.jsxs(r.Fragment,{children:[r.jsx(o,{weight:"bold",children:"Beställare"}),r.jsx(o,{borderBottom:!0,children:"Lisbeth Jonsson"}),r.jsx(o,{borderBottom:!0,children:"Sture Jonsson"}),r.jsx(o,{borderBottom:!0,children:"Steven Stevenson"}),r.jsx(o,{children:"Bobby Granlund"})]}),vr=r.jsxs(r.Fragment,{children:[r.jsx(n,{...xr.args}),r.jsx(n,{...Sr.args})]}),Wr=r.jsxs(r.Fragment,{children:[r.jsx(n,{...b.args}),r.jsx(n,{..._.args})]}),wr=r.jsxs(r.Fragment,{children:[r.jsx(n,{...b.args}),r.jsx(n,{..._.args})]}),dr=r.jsxs(r.Fragment,{children:[r.jsx(n,{...b.args}),r.jsx(n,{..._.args})]}),Dr=[hr.args,kr.args],Ar=r.jsx(fr,{children:Dr.map(a=>r.jsx(br,{...a},Math.random()))}),Mr=r.jsxs(_r,{position:"center",children:[r.jsx(T,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),r.jsx(T,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),Nr=[j.args,Br.args,j.args],Vr=r.jsx(h,{...k.args,spacing:"md"}),Rr=r.jsx(r.Fragment,{children:Nr.map(a=>r.jsx(Ir,{checked:!1,onChange:()=>{},...a}))}),Ur=r.jsxs(r.Fragment,{children:[r.jsx(C,{order:5,children:"Ursprung"}),r.jsx(h,{...k.args,spacing:"md"}),r.jsx(C,{order:5,children:"Karaktär"}),r.jsx(h,{...k.args,spacing:"md"})]}),t={...e,args:{label:"Dina uppgifter",linkLabel:"Hantera/Ändra uppgifter",onClick:()=>{console.log('On click "Hantera/ändra uppgifter"')},children:Or}},i={...e,args:{label:"Användare",linkLabel:"Hantera",onClick:()=>{},children:Fr}},m={...e,args:{label:"Listor",linkLabel:"Hantera",onClick:()=>{},children:vr}},c={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:Ar}},l={...e,args:{children:Wr}},d={...e,args:{label:"Öl",children:wr}},u={...e,args:{label:"Vin",children:dr}},p={...e,args:{label:"Vin",children:dr}},g={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:Mr}},y={...e,args:{label:"VATTEN",children:Vr}},x={...e,args:{label:"ÖL",children:Rr}},S={...e,args:{label:"Välj vilka fakta du vill visa i din dryckeslista",children:Ur,withBackground:!0}};var P,H,O;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Dina uppgifter',
    linkLabel: 'Hantera/Ändra uppgifter',
    onClick: () => {
      console.log('On click "Hantera/ändra uppgifter"');
    },
    children: itemsListAdministrator
  }
}`,...(O=(H=t.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var F,v,W;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Användare',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListBestallare
  }
}`,...(W=(v=i.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var w,D,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Listor',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListInkopslistor
  }
}`,...(A=(D=m.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,N,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsProdukter
  }
}`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var R,U,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    children: itemsListMinaOrdrar
  }
}`,...(q=(U=l.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var E,G,J;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Öl',
    children: itemsListCategoryBeer
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var z,K,Q;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,er;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsShoppingList
  }
}`,...(er=(rr=g.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,or,nr;y.parameters={...y.parameters,docs:{...(ar=y.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'VATTEN',
    children: itemsCheckboxListLoka
  }
}`,...(nr=(or=y.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};var sr,tr,ir;x.parameters={...x.parameters,docs:{...(sr=x.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'ÖL',
    children: itemsCheckboxListHeineken
  }
}`,...(ir=(tr=x.parameters)==null?void 0:tr.docs)==null?void 0:ir.source}}};var mr,cr,lr;S.parameters={...S.parameters,docs:{...(mr=S.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Välj vilka fakta du vill visa i din dryckeslista',
    children: itemsWordFilters,
    withBackground: true
  }
}`,...(lr=(cr=S.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};const qr=["InfoSummaryBoxStory_DinaUppgifter","InfoSummaryBoxStory_Anvandare","InfoSummaryBoxStory_Inkopslistor","InfoSummaryBoxStory_Produkter","InfoSummaryBoxStory_MinaOrdrar","InfoSummaryBoxStory_PDF_Category_Beer","InfoSummaryBoxStory_PDF_Category_Wine","InfoSummaryBoxStory_PurchaseListItem","InfoSummaryBoxStory_ShoppingList","InfoSummaryBoxStory_CheckboxList_Loka","InfoSummaryBoxStory_CheckboxList_Heineken","InfoSummaryBoxStory_WordFilters"],ee=Object.freeze(Object.defineProperty({__proto__:null,InfoSummaryBoxStory_Anvandare:i,InfoSummaryBoxStory_CheckboxList_Heineken:x,InfoSummaryBoxStory_CheckboxList_Loka:y,InfoSummaryBoxStory_DinaUppgifter:t,InfoSummaryBoxStory_Inkopslistor:m,InfoSummaryBoxStory_MinaOrdrar:l,InfoSummaryBoxStory_PDF_Category_Beer:d,InfoSummaryBoxStory_PDF_Category_Wine:u,InfoSummaryBoxStory_Produkter:c,InfoSummaryBoxStory_PurchaseListItem:p,InfoSummaryBoxStory_ShoppingList:g,InfoSummaryBoxStory_WordFilters:S,__namedExportsOrder:qr,default:Hr},Symbol.toStringTag,{value:"Module"}));export{B as I,t as a,i as b,l as c,y as d,x as e,S as f,d as g,u as h,g as i,m as j,ee as k};
