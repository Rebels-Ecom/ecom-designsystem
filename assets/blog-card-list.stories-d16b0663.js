import{c as K}from"./index-74f03c09.js";import{B as Q,a as P,b as E,c as I,d as W,e as j,f as N,g as v,h as O,i as A,j as D,k as M,l as z,m as G,n as R,o as U,p as X,q as Y}from"./blog-card.stories-d58d80c2.js";import{j as Z,a as s}from"./jsx-runtime-76c5c2e2.js";const $="_title_1quqb_1",rr="_list_1quqb_5",ar="_listItem_1quqb_18",sr="_maxColumnsThree_1quqb_23",er="_maxColumnsFour_1quqb_46",a={title:$,list:rr,listItem:ar,maxColumnsThree:sr,maxColumnsFour:er};function or(r){return r===1?a.fullWidth:r===3?a.maxColumnsThree:a.maxColumnsFour}const i=({title:r,blogCards:m})=>{if(!Array.isArray(m)||!m.length)return null;const p=m.slice(0,4);return Z("div",{className:a.blogCardList,children:[r&&s("h3",{className:a.title,children:r}),s("ul",{className:a.list,children:p.map((H,J)=>s("li",{className:K(a.listItem,or(p.length)),children:s(Q,{...H,fullWidth:p.length===1})},J))})]})};try{i.displayName="BlogCardList",i.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const tr={title:"Design System/Organisms/BlogCardList",component:i},e={render:r=>s("div",{style:{margin:"0 auto",maxWidth:"1800px"},children:s(i,{blogCards:r.blogCards,title:r.title})})};P.args,E.args,I.args,W.args,j.args,N.args,v.args,O.args,A.args,D.args,M.args,z.args,G.args;const lr=[R.args],nr=[P.args,E.args,I.args,W.args],gr=[j.args,N.args,v.args],dr=[O.args,A.args,D.args],ir=[M.args,z.args,G.args],mr=[U.args,X.args,Y.args],o={...e,args:{blogCards:lr}},t={...e,args:{title:"Varför Spendrups",blogCards:nr}},l={...e,args:{blogCards:gr}},n={...e,args:{blogCards:dr}},g={...e,args:{blogCards:ir}},d={...e,args:{title:"Likande varumärken",blogCards:mr}};var c,u,C;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(C=(u=o.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var _,B,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: whySpendrupsList
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var y,L,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsCooperation
  }
}`,...(b=(L=l.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var h,f,q;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsBrewing
  }
}`,...(q=(f=n.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var x,T,k;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment
  }
}`,...(k=(T=g.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,V,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Likande varumärken',
    blogCards: brandPromoPage_Blog
  }
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const pr=["BlogCardListStory_Fullwidth","BlogCardListStory_VarförSpendrups","BlogCardListStory_Samarbete","BlogCardListStory_Brewing","BlogCardListStory_Equipmemt","BlogCardListStory_Likande_Varumarken"],_r=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_Brewing:n,BlogCardListStory_Equipmemt:g,BlogCardListStory_Fullwidth:o,BlogCardListStory_Likande_Varumarken:d,BlogCardListStory_Samarbete:l,BlogCardListStory_VarförSpendrups:t,__namedExportsOrder:pr,default:tr},Symbol.toStringTag,{value:"Module"}));export{d as B,i as a,t as b,l as c,n as d,g as e,_r as f};
//# sourceMappingURL=blog-card-list.stories-d16b0663.js.map
