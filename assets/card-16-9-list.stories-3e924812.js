import{r as k}from"./index-6f814c40.js";import{c as w}from"./index-74f03c09.js";import{C as z,a as s,b as a}from"./card-16-9.stories-a699f3c9.js";import{a as l}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./ui-link-0bef27c7.js";import"./icon-eb31426b.js";import"./picture-8799a0b4.js";import"./card-square.stories-620aeda2.js";import"./image-opacity-layer-18aec039.js";import"./picture.stories-d6e59fff.js";const A="_list_1sb6r_1",B="_listItem_1sb6r_33",G="_maxColumnsThree_1sb6r_79",H="_maxColumnsFour_1sb6r_135",d={list:A,listItem:B,maxColumnsThree:G,maxColumnsFour:H};function J(r){return r===4?d.maxColumnsFour:d.maxColumnsThree}const u=({list:r=[],maxColumns:c})=>l("ul",{className:d.list,children:r.map((D,O)=>l("li",{className:w(d.listItem,J(c)),children:l(z,{...D})},O))});try{u.displayName="Card_16_9_List",u.__docgenInfo={description:"",displayName:"Card_16_9_List",props:{list:{defaultValue:{value:"[]"},description:"",name:"list",required:!1,type:{name:"ICard_16_9[]"}},maxColumns:{defaultValue:null,description:"",name:"maxColumns",required:!0,type:{name:"enum",value:[{value:"3"},{value:"4"}]}}}}}catch{}const rs={title:"Design System/Molecules/Cards/Card_16_9_List",component:u},_=r=>{const[c]=k.useState(r.list);return l("div",{style:{margin:"0",maxWidth:"1254px"},children:l(u,{list:c,maxColumns:r.maxColumns})})},E=[s.args,s.args,s.args,s.args,s.args,s.args,s.args,s.args,s.args],V=[a.args,a.args,a.args,a.args,a.args,a.args,a.args,a.args,a.args],j=[s.args,a.args,a.args,s.args,s.args,s.args,a.args,s.args,a.args],t=_.bind({});t.storyName="Card 16:9 List Max Columns 3 Text";t.args={list:E,maxColumns:3};const e=_.bind({});e.args={list:E,maxColumns:4};e.storyName="Card 16:9 List Max Columns 4 Text";const n=_.bind({});n.storyName="Card 16:9 List Max Columns 3 Image";n.args={list:V,maxColumns:3};const m=_.bind({});m.args={list:V,maxColumns:4};m.storyName="Card 16:9 List Max Columns 4 Image";const o=_.bind({});o.storyName="Card 16:9 List Max Columns 3 Text and Image";o.args={list:j,maxColumns:3};const i=_.bind({});i.args={list:j,maxColumns:4};i.storyName="Card 16:9 List Max Columns 4 Text and Image";var x,C,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [cardList] = useState(args.list);
  return <div style={{
    margin: '0',
    maxWidth: '1254px'
  }}>
      <Card_16_9_List list={cardList} maxColumns={args.maxColumns} />
    </div>;
}`,...(g=(C=t.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var p,L,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [cardList] = useState(args.list);
  return <div style={{
    margin: '0',
    maxWidth: '1254px'
  }}>
      <Card_16_9_List list={cardList} maxColumns={args.maxColumns} />
    </div>;
}`,...(y=(L=e.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var I,M,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [cardList] = useState(args.list);
  return <div style={{
    margin: '0',
    maxWidth: '1254px'
  }}>
      <Card_16_9_List list={cardList} maxColumns={args.maxColumns} />
    </div>;
}`,...(T=(M=n.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var v,S,h;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [cardList] = useState(args.list);
  return <div style={{
    margin: '0',
    maxWidth: '1254px'
  }}>
      <Card_16_9_List list={cardList} maxColumns={args.maxColumns} />
    </div>;
}`,...(h=(S=m.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var b,f,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [cardList] = useState(args.list);
  return <div style={{
    margin: '0',
    maxWidth: '1254px'
  }}>
      <Card_16_9_List list={cardList} maxColumns={args.maxColumns} />
    </div>;
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var W,F,q;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [cardList] = useState(args.list);
  return <div style={{
    margin: '0',
    maxWidth: '1254px'
  }}>
      <Card_16_9_List list={cardList} maxColumns={args.maxColumns} />
    </div>;
}`,...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const ts=["Card_16_9_List_Max_Columns_3_Text","Card_16_9_List_Max_Columns_4_Text","Card_16_9_List_Max_Columns_3_Image","Card_16_9_List_Max_Columns_4_Image","Card_16_9_List_Max_Columns_3_Text_Image","Card_16_9_List_Max_Columns_4_Text_Image"];export{n as Card_16_9_List_Max_Columns_3_Image,t as Card_16_9_List_Max_Columns_3_Text,o as Card_16_9_List_Max_Columns_3_Text_Image,m as Card_16_9_List_Max_Columns_4_Image,e as Card_16_9_List_Max_Columns_4_Text,i as Card_16_9_List_Max_Columns_4_Text_Image,ts as __namedExportsOrder,rs as default};
//# sourceMappingURL=card-16-9-list.stories-3e924812.js.map
