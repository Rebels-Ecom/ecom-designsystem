import{r as Y}from"./index-6f814c40.js";import{c as Z}from"./index-74f03c09.js";import{B as $,a as O,b as D,c as M,d as G,e as H,f as J,g as K,h as Q,i as R,j as U,k as n,l,m as i,n as rr,o as ar,p as sr,q as er}from"./blog-card.stories-77adcf0b.js";import{C as y,a as L}from"./carousel-82322413.js";import{j as h,a as r,F as tr}from"./jsx-runtime-76c5c2e2.js";import{C as or}from"./content-wrapper-854859bc.js";import{B as nr,A as lr}from"./below-e3aa399e.js";import{m as ir}from"./motion-354a1bac.js";const gr="_blogCardList_1v4z3_1",dr="_title_1v4z3_2",mr="_list_1v4z3_6",pr="_listItem_1v4z3_21",cr="_maxColumnsThree_1v4z3_28",ur="_maxColumnsFour_1v4z3_59",t={blogCardList:gr,title:dr,list:mr,listItem:pr,maxColumnsThree:cr,maxColumnsFour:ur};function Cr(s){return s===1?t.fullWidth:s===3?t.maxColumnsThree:t.maxColumnsFour}const _=({title:s,blogCards:a})=>{if(!Array.isArray(a)||!a.length)return null;const X=(a==null?void 0:a.length)>3,B=e=>r(ir.li,{className:Z(t.listItem,Cr(a.length)),initial:{y:"-10%",opacity:0},animate:{y:0,opacity:1},children:r($,{...e,fullWidth:a.length===1,maxChar:a.length===3?e.maxChar??200:void 0})});return h("div",{className:t.blogCardList,children:[s&&r("h3",{className:t.title,children:s}),r(or,{children:X?r(y,{offsetArrows:!0,breakpoints:{lg:{perPage:4},md:{perPage:2}},children:a.map((e,C)=>r(L,{children:B(e)}))}):h(tr,{children:[r(nr,{breakpoint:"sm",children:e=>e&&r(y,{offsetArrows:!0,children:a.map((C,S)=>r(L,{children:B(C)}))})}),r(lr,{breakpoint:"sm",children:e=>e&&r("ul",{className:t.list,children:a.map((C,S)=>r(Y.Fragment,{children:B(C)},S))})})]})})]})};try{_.displayName="BlogCardList",_.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const _r={title:"Design System/Organisms/BlogCardList",component:_},o={render:s=>r(_,{blogCards:s.blogCards,title:s.title})};O.args,D.args,M.args,G.args,H.args,J.args,K.args,Q.args,R.args,U.args,n.args,l.args,i.args;const Br=[rr.args],Sr=[O.args,D.args,M.args,G.args],yr=[H.args,J.args,K.args],Lr=[Q.args,R.args,U.args],hr=[n.args,l.args,i.args,n.args,l.args,i.args,n.args,l.args,i.args,n.args,l.args,i.args],fr=[ar.args,sr.args,er.args],g={...o,args:{blogCards:Br}},d={...o,args:{title:"Varför Spendrups",blogCards:Sr}},m={...o,args:{blogCards:yr}},p={...o,args:{blogCards:Lr}},c={...o,args:{blogCards:hr}},u={...o,args:{title:"Likande varumärken",blogCards:fr}};var f,b,x;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(x=(b=g.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,w,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var v,F,P;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var I,V,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,z,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var W,j,N;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Likande varumärken',
    blogCards: brandPromoPage_Blog
  }
}`,...(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const br=["BlogCardListStory_Fullwidth","BlogCardListStory_VarförSpendrups","BlogCardListStory_Samarbete","BlogCardListStory_Brewing","BlogCardListStory_Equipmemt","BlogCardListStory_Likande_Varumarken"],Vr=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_Brewing:p,BlogCardListStory_Equipmemt:c,BlogCardListStory_Fullwidth:g,BlogCardListStory_Likande_Varumarken:u,BlogCardListStory_Samarbete:m,BlogCardListStory_VarförSpendrups:d,__namedExportsOrder:br,default:_r},Symbol.toStringTag,{value:"Module"}));export{u as B,_ as a,c as b,m as c,p as d,d as e,Vr as f};
//# sourceMappingURL=blog-card-list.stories-1a7f5ae8.js.map
