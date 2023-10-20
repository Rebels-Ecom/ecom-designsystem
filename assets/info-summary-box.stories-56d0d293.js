import{c as P}from"./index-74f03c09.js";import{j as o,a as r,F as s}from"./jsx-runtime-76c5c2e2.js";import{T as n}from"./text-3e056ff6.js";import{O as t,b as fr,c as kr,d as I,e as L}from"./order-item.stories-a81a4ea1.js";import{C as _r}from"./cart-product-list-a1b9ae6a.js";import{C as br,a as Br,b as xr}from"./cart-product.stories-098cab81.js";import{G as Ir}from"./group-wrapper-53e2b69f.js";import{C as T,a as Lr,b as Cr}from"./checkbox-list-item.stories-72914ac9.js";import{U as B,a as x}from"./unordered-list.stories-e92ee582.js";import{H}from"./heading-e5a679a5.js";import{B as O}from"./button-603bb392.js";const Pr="_infoSummaryBox_h9t2n_1",Tr="_linkButton_h9t2n_6",Hr="_label_h9t2n_18",Or="_box_h9t2n_24",vr="_withBackground_h9t2n_32",i={infoSummaryBox:Pr,linkButton:Tr,label:Hr,box:Or,withBackground:vr};function _({label:a,children:yr,linkLabel:C,withBackground:Sr,onClick:b}){function gr(hr){hr.preventDefault(),b&&b()}return o("div",{className:i.infoSummaryBox,children:[C&&b&&r("button",{type:"button",onClick:gr,className:P(i.linkButton,"body"),children:C}),a&&r("label",{className:i.label,htmlFor:"infoSummary",children:a}),r("div",{id:"infoSummary",className:P(i.box,Sr?i.withBackground:""),children:yr})]})}try{_.displayName="InfoSummaryBox",_.__docgenInfo={description:"",displayName:"InfoSummaryBox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},linkLabel:{defaultValue:null,description:"",name:"linkLabel",required:!1,type:{name:"string"}},withBackground:{defaultValue:null,description:"",name:"withBackground",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"CallableFunction"}}}}}catch{}const Vr={title:"Design System/Molecules/InfoSummaryBox",component:_},e={render:({...a})=>r("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:r(_,{...a})})},Fr=o(s,{children:[r(n,{weight:"bold",children:"Administratör"}),r(n,{children:"Jon Jonsson"}),r(n,{children:"Granängsringen 3, 135 44, Tyresö"})]}),Wr=o(s,{children:[r(n,{weight:"bold",children:"Beställare"}),r(n,{borderBottom:!0,children:"Lisbeth Jonsson"}),r(n,{borderBottom:!0,children:"Sture Jonsson"}),r(n,{borderBottom:!0,children:"Steven Stevenson"}),r(n,{children:"Bobby Granlund"})]}),wr=o(s,{children:[r(t,{...fr.args}),r(t,{...kr.args})]}),Dr=o(s,{children:[r(t,{...I.args}),r(t,{...L.args})]}),Ar=o(s,{children:[r(t,{...I.args}),r(t,{...L.args})]}),pr=o(s,{children:[r(t,{...I.args}),r(t,{...L.args})]}),Mr=[br.args,Br.args],jr=r(_r,{children:Mr.map(a=>r(xr,{...a},Math.random()))}),Nr=o(Ir,{position:"center",children:[r(O,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),r(O,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),Ur=[T.args,Lr.args,T.args],qr=r(B,{...x.args,spacing:"md"}),Gr=r(s,{children:Ur.map(a=>r(Cr,{checked:!1,onChange:()=>{},...a}))}),Jr=o(s,{children:[r(H,{order:5,children:"Ursprung"}),r(B,{...x.args,spacing:"md"}),r(H,{order:5,children:"Karaktär"}),r(B,{...x.args,spacing:"md"})]}),l={...e,args:{label:"Dina uppgifter",linkLabel:"Hantera/Ändra uppgifter",onClick:()=>{console.log('On click "Hantera/ändra uppgifter"')},children:Fr}},m={...e,args:{label:"Användare",linkLabel:"Hantera",onClick:()=>{},children:Wr}},c={...e,args:{label:"Listor",linkLabel:"Hantera",onClick:()=>{},children:wr}},d={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:jr}},u={...e,args:{children:Dr}},p={...e,args:{label:"Öl",children:Ar}},y={...e,args:{label:"Vin",children:pr}},S={...e,args:{label:"Vin",children:pr}},g={...e,args:{label:"Produkter",linkLabel:"Hantera",onClick:()=>{},children:Nr}},h={...e,args:{label:"VATTEN",children:qr}},f={...e,args:{label:"ÖL",children:Gr}},k={...e,args:{label:"Välj vilka fakta du vill visa i din dryckeslista",children:Jr,withBackground:!0}};var v,V,F;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Dina uppgifter',
    linkLabel: 'Hantera/Ändra uppgifter',
    onClick: () => {
      console.log('On click "Hantera/ändra uppgifter"');
    },
    children: itemsListAdministrator
  }
}`,...(F=(V=l.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var W,w,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Användare',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListBestallare
  }
}`,...(D=(w=m.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var A,M,j;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(sr=(tr=h.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var ir,lr,mr;f.parameters={...f.parameters,docs:{...(ir=f.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'ÖL',
    children: itemsCheckboxListHeineken
  }
}`,...(mr=(lr=f.parameters)==null?void 0:lr.docs)==null?void 0:mr.source}}};var cr,dr,ur;k.parameters={...k.parameters,docs:{...(cr=k.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Välj vilka fakta du vill visa i din dryckeslista',
    children: itemsWordFilters,
    withBackground: true
  }
}`,...(ur=(dr=k.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};const Er=["InfoSummaryBoxStory_DinaUppgifter","InfoSummaryBoxStory_Anvandare","InfoSummaryBoxStory_Inkopslistor","InfoSummaryBoxStory_Produkter","InfoSummaryBoxStory_MinaOrdrar","InfoSummaryBoxStory_PDF_Category_Beer","InfoSummaryBoxStory_PDF_Category_Wine","InfoSummaryBoxStory_PurchaseListItem","InfoSummaryBoxStory_ShoppingList","InfoSummaryBoxStory_CheckboxList_Loka","InfoSummaryBoxStory_CheckboxList_Heineken","InfoSummaryBoxStory_WordFilters"],oe=Object.freeze(Object.defineProperty({__proto__:null,InfoSummaryBoxStory_Anvandare:m,InfoSummaryBoxStory_CheckboxList_Heineken:f,InfoSummaryBoxStory_CheckboxList_Loka:h,InfoSummaryBoxStory_DinaUppgifter:l,InfoSummaryBoxStory_Inkopslistor:c,InfoSummaryBoxStory_MinaOrdrar:u,InfoSummaryBoxStory_PDF_Category_Beer:p,InfoSummaryBoxStory_PDF_Category_Wine:y,InfoSummaryBoxStory_Produkter:d,InfoSummaryBoxStory_PurchaseListItem:S,InfoSummaryBoxStory_ShoppingList:g,InfoSummaryBoxStory_WordFilters:k,__namedExportsOrder:Er,default:Vr},Symbol.toStringTag,{value:"Module"}));export{_ as I,l as a,m as b,u as c,h as d,f as e,k as f,p as g,y as h,c as i,g as j,oe as k};
//# sourceMappingURL=info-summary-box.stories-56d0d293.js.map
