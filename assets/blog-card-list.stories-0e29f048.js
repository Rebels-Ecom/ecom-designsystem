import{c as O}from"./index-74f03c09.js";import{B as v,a as r,b as C,c as t}from"./blog-card.stories-30a33056.js";import{j as W,a as o}from"./jsx-runtime-76c5c2e2.js";const A="_title_1quqb_1",V="_list_1quqb_5",z="_listItem_1quqb_18",D="_maxColumnsThree_1quqb_23",E="_maxColumnsFour_1quqb_46",a={title:A,list:V,listItem:z,maxColumnsThree:D,maxColumnsFour:E};function M(s){return s===1?a.fullWidth:s===3?a.maxColumnsThree:a.maxColumnsFour}const c=({title:s,blogCards:m})=>{if(!Array.isArray(m)||!m.length)return null;const u=m.slice(0,4);return W("div",{className:a.blogCardList,children:[s&&o("h3",{className:a.title,children:s}),o("ul",{className:a.list,children:u.map((j,w)=>o("li",{className:O(a.listItem,M(u.length)),children:o(v,{...j,fullWidth:u.length===1})},w))})]})};try{c.displayName="BlogCardList",c.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const P={title:"Design System/Organisms/BlogCardList",component:c},g={render:s=>o("div",{style:{margin:"0 auto",maxWidth:"1800px"},children:o(c,{blogCards:s.blogCards,title:s.title})})},k=[r.args,r.args,r.args,r.args,C.args,t.args,t.args,C.args,t.args],G=[r.args],H=[r.args,r.args],J=[r.args,r.args,r.args],K=[t.args,t.args,t.args,t.args],e={...g,args:{blogCards:G}},l={...g,args:{blogCards:H}},n={...g,args:{title:"Three columns list",blogCards:J}},i={...g,args:{title:"Four columns list",blogCards:K}},d={...g,args:{title:"Loooong list",blogCards:k}};var p,_,L;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}`,...(L=(_=e.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var y,S,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: twoCardsList
  }
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var b,h,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Three columns list',
    blogCards: threeCardsList
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,T,q;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Four columns list',
    blogCards: fourCardsList
  }
}`,...(q=(T=i.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var F,I,N;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Loooong list',
    blogCards: cardList
  }
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const Q=["BlogCardListStory_Fullwidth","BlogCardListStory_2_Columns","BlogCardListStory_3_Columns","BlogCardListStory_4_Columns","BlogCardListStory_LongList"],Y=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_2_Columns:l,BlogCardListStory_3_Columns:n,BlogCardListStory_4_Columns:i,BlogCardListStory_Fullwidth:e,BlogCardListStory_LongList:d,__namedExportsOrder:Q,default:P},Symbol.toStringTag,{value:"Module"}));export{c as B,i as a,n as b,Y as c};
//# sourceMappingURL=blog-card-list.stories-0e29f048.js.map
