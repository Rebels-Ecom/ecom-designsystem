import{c as j}from"./index-74f03c09.js";import{B as O,a as r,b as C,c as t}from"./blog-card.stories-5f30e46f.js";import{j as q,a as d}from"./jsx-runtime-76c5c2e2.js";const A="_title_8wfuh_1",V="_list_8wfuh_5",z="_listItem_8wfuh_18",D="_maxColumnsThree_8wfuh_23",E="_maxColumnsFour_8wfuh_49",a={title:A,list:V,listItem:z,maxColumnsThree:D,maxColumnsFour:E};function M(s){return s===1?a.fullWidth:s===3?a.maxColumnsThree:a.maxColumnsFour}const m=({title:s,blogCards:c})=>{if(!Array.isArray(c)||!c.length)return null;const u=c.slice(0,4);return q("div",{className:a.blogCardList,children:[s&&d("h3",{className:a.title,children:s}),d("ul",{className:a.list,children:u.map((W,I)=>d("li",{className:j(a.listItem,M(u.length)),children:d(O,{...W,fullWidth:u.length===1})},I))})]})};try{m.displayName="BlogCardList",m.__docgenInfo={description:"",displayName:"BlogCardList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},blogCards:{defaultValue:null,description:"",name:"blogCards",required:!0,type:{name:"IBlogCard[]"}}}}}catch{}const P={title:"Design System/Organisms/BlogCardList",component:m},g=s=>d("div",{style:{margin:"0 auto",maxWidth:"1800px"},children:d(m,{blogCards:s.blogCards,title:s.title})}),$=[r.args,r.args,r.args,r.args,C.args,t.args,t.args,C.args,t.args],k=[r.args],G=[r.args,r.args],H=[r.args,r.args,r.args],J=[t.args,t.args,t.args,t.args],o=g.bind({});o.storyName="BlogCardList Fullwidth";o.args={blogCards:k};const e=g.bind({});e.storyName="BlogCardList 2 Columns";e.args={title:"Two columns list",blogCards:G};const l=g.bind({});l.storyName="BlogCardList 3 Columns";l.args={title:"Three columns list",blogCards:H};const i=g.bind({});i.storyName="BlogCardList 4 Columns";i.args={title:"Four columns list",blogCards:J};const n=g.bind({});n.storyName="BlogCardList Long List";n.args={title:"Loooong list",blogCards:$};var p,_,L;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
          <BlogCardList blogCards={args.blogCards} title={args.title} />
        </div>;
}`,...(L=(_=o.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var y,h,b;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
          <BlogCardList blogCards={args.blogCards} title={args.title} />
        </div>;
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var B,x,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
          <BlogCardList blogCards={args.blogCards} title={args.title} />
        </div>;
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,v,N;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
          <BlogCardList blogCards={args.blogCards} title={args.title} />
        </div>;
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var w,T,F;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
          <BlogCardList blogCards={args.blogCards} title={args.title} />
        </div>;
}`,...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const K=["BlogCardListStory_Fullwidth","BlogCardListStory_2_Columns","BlogCardListStory_3_Columns","BlogCardListStory_4_Columns","BlogCardListStory_LongList"],X=Object.freeze(Object.defineProperty({__proto__:null,BlogCardListStory_2_Columns:e,BlogCardListStory_3_Columns:l,BlogCardListStory_4_Columns:i,BlogCardListStory_Fullwidth:o,BlogCardListStory_LongList:n,__namedExportsOrder:K,default:P},Symbol.toStringTag,{value:"Module"}));export{m as B,i as a,l as b,X as c};
//# sourceMappingURL=blog-card-list.stories-3c2824de.js.map
