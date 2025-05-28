import{c as L}from"./index-09749a66.js";import{j as r}from"./jsx-runtime-03333307.js";import{T as o}from"./text-fc9325ee.js";import{O as n,b as Sr,c as hr,d as b,e as _}from"./order-item.stories-25e39a90.js";import{C as fr}from"./cart-product-list-f323bfda.js";import{c as kr,d as br,b as _r}from"./cart-product.stories-cfc08673.js";import{G as Br}from"./group-wrapper-5bc35e6d.js";import{C,a as Ir,b as jr}from"./checkbox-list-item.stories-915b186d.js";import{U as f,a as k}from"./unordered-list.stories-48b13f05.js";import{H as T}from"./heading-ba18f9a9.js";import{B as P}from"./button-1de8d46b.js";const Lr="_infoSummaryBox_ljhqi_1",Cr="_linkButton_ljhqi_6",Tr="_label_ljhqi_18",Pr="_box_ljhqi_25",Hr="_withBackground_ljhqi_33",Or="_yellow_ljhqi_37",vr="_blue_ljhqi_40",s={infoSummaryBox:Lr,linkButton:Cr,label:Tr,box:Pr,withBackground:Hr,yellow:Or,blue:vr};function B({label:a,children:pr,linkLabel:I,withBackground:yr,onClick:h,backgroundColor:j}){function gr(xr){xr.preventDefault(),h&&h()}return r.jsxs("div",{className:s.infoSummaryBox,children:[I&&h&&r.jsx("button",{type:"button",onClick:gr,className:L(s.linkButton,"body"),children:I}),a&&r.jsx("label",{className:s.label,htmlFor:"infoSummary",children:a}),r.jsx("div",{id:"infoSummary",className:L(s.box,yr?s.withBackground:"",{[s[j||"yellow"]]:!!j}),children:pr})]})}B.__docgenInfo={description:"",methods:[],displayName:"InfoSummaryBox",props:{label:{required:!1,tsType:{name:"string"},description:""},linkLabel:{required:!1,tsType:{name:"string"},description:""},withBackground:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"union",raw:"'yellow' | 'blue'",elements:[{name:"literal",value:"'yellow'"},{name:"literal",value:"'blue'"}]},description:""},onClick:{required:!1,tsType:{name:"CallableFunction"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Fr={title:"Design System/Molecules/InfoSummaryBox",component:B},e={render:({...a})=>r.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:r.jsx(B,{...a})})},wr=r.jsxs(r.Fragment,{children:[r.jsx(o,{weight:"bold",children:"Administratör"}),r.jsx(o,{children:"Jon Jonsson"}),r.jsx(o,{children:"Granängsringen 3, 135 44, Tyresö"})]}),qr=r.jsxs(r.Fragment,{children:[r.jsx(o,{weight:"bold",children:"Beställare"}),r.jsx(o,{borderBottom:!0,children:"Lisbeth Jonsson"}),r.jsx(o,{borderBottom:!0,children:"Sture Jonsson"}),r.jsx(o,{borderBottom:!0,children:"Steven Stevenson"}),r.jsx(o,{children:"Bobby Granlund"})]}),Wr=r.jsxs(r.Fragment,{children:[r.jsx(n,{...Sr.args}),r.jsx(n,{...hr.args})]}),Dr=r.jsxs(r.Fragment,{children:[r.jsx(n,{...b.args}),r.jsx(n,{..._.args})]}),Ar=r.jsxs(r.Fragment,{children:[r.jsx(n,{...b.args}),r.jsx(n,{..._.args})]}),ur=r.jsxs(r.Fragment,{children:[r.jsx(n,{...b.args}),r.jsx(n,{..._.args})]}),Mr=[kr.args,br.args],Nr=r.jsx(fr,{children:Mr.map(a=>r.jsx(_r,{...a},Math.random()))}),Vr=r.jsxs(Br,{position:"center",children:[r.jsx(P,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),r.jsx(P,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),Rr=[C.args,Ir.args,C.args],Ur=r.jsx(f,{...k.args,spacing:"md"}),Er=r.jsx(r.Fragment,{children:Rr.map(a=>r.jsx(jr,{checked:!1,onChange:()=>{},...a}))}),Gr=r.jsxs(r.Fragment,{children:[r.jsx(T,{order:5,children:"Ursprung"}),r.jsx(f,{...k.args,spacing:"md"}),r.jsx(T,{order:5,children:"Karaktär"}),r.jsx(f,{...k.args,spacing:"md"})]}),t={...e,args:{label:"Dina uppgifter",linkLabel:"Hantera/Ändra uppgifter",onClick:()=>{console.log('On click "Hantera/ändra uppgifter"')},children:wr}},i={...e,args:{label:"Användare",linkLabel:"Hantera",onClick:()=>{},children:qr}},l={...e,args:{label:"Listor",linkLabel:"Hantera",onClick:()=>{},children:Wr}},m={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:Nr}},c={...e,args:{children:Dr}},d={...e,args:{label:"Öl",children:Ar}},u={...e,args:{label:"Vin",children:ur}},p={...e,args:{label:"Vin",children:ur}},y={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:Vr}},g={...e,args:{label:"VATTEN",children:Ur}},x={...e,args:{label:"ÖL",children:Er}},S={...e,args:{label:"Välj vilka fakta du vill visa i din dryckeslista",children:Gr,withBackground:!0}};var H,O,v;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Dina uppgifter',
    linkLabel: 'Hantera/Ändra uppgifter',
    onClick: () => {
      console.log('On click "Hantera/ändra uppgifter"');
    },
    children: itemsListAdministrator
  }
}`,...(v=(O=t.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var F,w,q;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Användare',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListBestallare
  }
}`,...(q=(w=i.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var W,D,A;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Listor',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListInkopslistor
  }
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,N,V;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsProdukter
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var R,U,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    children: itemsListMinaOrdrar
  }
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var G,J,z;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Öl',
    children: itemsListCategoryBeer
  }
}`,...(z=(J=d.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var rr,er,ar;y.parameters={...y.parameters,docs:{...(rr=y.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsShoppingList
  }
}`,...(ar=(er=y.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var or,nr,sr;g.parameters={...g.parameters,docs:{...(or=g.parameters)==null?void 0:or.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'VATTEN',
    children: itemsCheckboxListLoka
  }
}`,...(sr=(nr=g.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var tr,ir,lr;x.parameters={...x.parameters,docs:{...(tr=x.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'ÖL',
    children: itemsCheckboxListHeineken
  }
}`,...(lr=(ir=x.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var mr,cr,dr;S.parameters={...S.parameters,docs:{...(mr=S.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Välj vilka fakta du vill visa i din dryckeslista',
    children: itemsWordFilters,
    withBackground: true
  }
}`,...(dr=(cr=S.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};const Jr=["InfoSummaryBoxStory_DinaUppgifter","InfoSummaryBoxStory_Anvandare","InfoSummaryBoxStory_Inkopslistor","InfoSummaryBoxStory_Produkter","InfoSummaryBoxStory_MinaOrdrar","InfoSummaryBoxStory_PDF_Category_Beer","InfoSummaryBoxStory_PDF_Category_Wine","InfoSummaryBoxStory_PurchaseListItem","InfoSummaryBoxStory_ShoppingList","InfoSummaryBoxStory_CheckboxList_Loka","InfoSummaryBoxStory_CheckboxList_Heineken","InfoSummaryBoxStory_WordFilters"],ne=Object.freeze(Object.defineProperty({__proto__:null,InfoSummaryBoxStory_Anvandare:i,InfoSummaryBoxStory_CheckboxList_Heineken:x,InfoSummaryBoxStory_CheckboxList_Loka:g,InfoSummaryBoxStory_DinaUppgifter:t,InfoSummaryBoxStory_Inkopslistor:l,InfoSummaryBoxStory_MinaOrdrar:c,InfoSummaryBoxStory_PDF_Category_Beer:d,InfoSummaryBoxStory_PDF_Category_Wine:u,InfoSummaryBoxStory_Produkter:m,InfoSummaryBoxStory_PurchaseListItem:p,InfoSummaryBoxStory_ShoppingList:y,InfoSummaryBoxStory_WordFilters:S,__namedExportsOrder:Jr,default:Fr},Symbol.toStringTag,{value:"Module"}));export{B as I,t as a,i as b,c,g as d,x as e,S as f,d as g,u as h,y as i,l as j,ne as k};
