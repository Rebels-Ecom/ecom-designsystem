import{r as Y}from"./index-6f814c40.js";import{c as Z}from"./index-74f03c09.js";import{B as $,a as O,b as D,c as M,d as G,e as H,f as J,g as K,h as Q,i as R,j as U,k as l,l as i,m as g,n as rr,o as ar,p as sr,q as er}from"./blog-card.stories-77adcf0b.js";import{C as y,a as L}from"./carousel-82322413.js";import{j as h,a as r,F as tr}from"./jsx-runtime-76c5c2e2.js";import{C as or}from"./content-wrapper-19d15755.js";import{B as nr,A as lr}from"./below-e3aa399e.js";import{m as ir}from"./motion-354a1bac.js";const gr="_blogCardList_1v4z3_1",dr="_title_1v4z3_2",mr="_list_1v4z3_6",pr="_listItem_1v4z3_21",cr="_maxColumnsThree_1v4z3_28",ur="_maxColumnsFour_1v4z3_59",t={blogCardList:gr,title:dr,list:mr,listItem:pr,maxColumnsThree:cr,maxColumnsFour:ur};function Cr(s){return s===1?t.fullWidth:s===3?t.maxColumnsThree:t.maxColumnsFour}const _=({title:s,blogCards:a})=>{if(!Array.isArray(a)||!a.length)return null;const X=(a==null?void 0:a.length)>3,B=e=>r(ir.div,{className:Z(t.listItem,Cr(a.length)),initial:{y:"-10%",opacity:0},animate:{y:0,opacity:1},children:r($,{...e,fullWidth:a.length===1,maxChar:a.length===3?e.maxChar??200:void 0})});return h("div",{className:t.blogCardList,children:[s&&r("h3",{className:t.title,children:s}),r(or,{children:X?r(y,{offsetArrows:!0,breakpoints:{lg:{perPage:4},md:{perPage:2}},children:a.map((e,n)=>r(L,{children:B(e)},n))}):h(tr,{children:[r(nr,{breakpoint:"sm",children:e=>e&&r(y,{offsetArrows:!0,children:a.map((n,S)=>r(L,{children:B(n)}))})}),r(lr,{breakpoint:"sm",children:e=>e&&r("ul",{className:t.list,children:a.map((n,S)=>r(Y.Fragment,{children:B(n)},S))})})]})})]})};try{_.displayName="BlogCardList",_.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const _r={title:"Design System/Organisms/BlogCardList",component:_},o={render:s=>r(_,{blogCards:s.blogCards,title:s.title})};O.args,D.args,M.args,G.args,H.args,J.args,K.args,Q.args,R.args,U.args,l.args,i.args,g.args;const Br=[rr.args],Sr=[O.args,D.args,M.args,G.args],yr=[H.args,J.args,K.args],Lr=[Q.args,R.args,U.args],hr=[l.args,i.args,g.args,l.args,i.args,g.args,l.args,i.args,g.args,l.args,i.args,g.args],fr=[ar.args,sr.args,er.args],d={...o,args:{blogCards:Br}},m={...o,args:{title:"Varför Spendrups",blogCards:Sr}},p={...o,args:{blogCards:yr}},c={...o,args:{blogCards:Lr}},u={...o,args:{blogCards:hr}},C={...o,args:{title:"Likande varumärken",blogCards:fr}};var f,b,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,v,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}`,...(w=(v=m.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var T,F,P;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var I,V,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,z,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}`,...(A=(z=u.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var W,j,N;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Likande varumärken',
    blogCards: brandPromoPage_Blog
  }
}`,...(N=(j=C.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const br=["BlogCardListStory_Fullwidth","BlogCardListStory_VarförSpendrups","BlogCardListStory_Samarbete","BlogCardListStory_Brewing","BlogCardListStory_Equipmemt","BlogCardListStory_Likande_Varumarken"],Vr=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_Brewing:c,BlogCardListStory_Equipmemt:u,BlogCardListStory_Fullwidth:d,BlogCardListStory_Likande_Varumarken:C,BlogCardListStory_Samarbete:p,BlogCardListStory_VarförSpendrups:m,__namedExportsOrder:br,default:_r},Symbol.toStringTag,{value:"Module"}));export{C as B,_ as a,u as b,p as c,c as d,m as e,Vr as f};
//# sourceMappingURL=blog-card-list.stories-a0b19324.js.map
