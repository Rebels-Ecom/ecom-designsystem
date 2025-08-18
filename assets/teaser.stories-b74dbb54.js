import{c}from"./index-09749a66.js";import{L as y}from"./link-button-a77c9463.js";import{P as v}from"./picture-6b702374.js";import{T as S}from"./tag-8d2e34a8.js";import{j as t}from"./jsx-runtime-03333307.js";import{PictureStory_Equipment as L}from"./picture.stories-3150d164.js";import{TagStoryRound_S as b,TagStoryRectangular_L as q}from"./tag.stories-179feb36.js";import{C as P}from"./content-wrapper-adfa8526.js";import"./ui-link-974ac70a.js";import"./icon-a32914e5.js";import"./Content9-b09c4254.js";import"./pang-f66faff3.js";import"./defaultFallbackImage-b43581a6.js";const N="_teaser_1xjlh_1",B="_imageWrapper_1xjlh_12",W="_tag_1xjlh_30",M="_tagLeft_1xjlh_45",C="_tagRight_1xjlh_51",E="_picture_1xjlh_57",I="_imageRound_1xjlh_65",$="_image_1xjlh_12",w="_contentWrapper_1xjlh_89",U="_contentLeft_1xjlh_103",z="_contentRight_1xjlh_112",F="_heading_1xjlh_122",D="_preamble_1xjlh_128",O="_text_1xjlh_133",A="_textRight_1xjlh_159",G="_linkButton_1xjlh_166",H="_teaserLeft_1xjlh_180",J="_teaserRight_1xjlh_191",e={teaser:N,imageWrapper:B,tag:W,tagLeft:M,tagRight:C,picture:E,imageRound:I,image:$,contentWrapper:w,contentLeft:U,contentRight:z,heading:F,preamble:D,text:O,textRight:A,linkButton:G,teaserLeft:H,teaserRight:J},i=({heading:a,preamble:l,richText:m,image:k,imagePosition:o,tag:g,tagPosition:R,linkButton:s,imageRound:j,fallbackImageUrl:T})=>t.jsxs("div",{className:`${e.teaser} ${o==="left"?e.teaserLeft:e.teaserRight}`,children:[t.jsxs("div",{className:c(e.imageWrapper,{[e.imageRound]:j}),children:[t.jsx(v,{...k,classNamePicture:e.picture,classNameImg:e.image,fallbackImageUrl:T}),g&&t.jsx(S,{...g,className:`${e.tag} ${R==="left"?e.tagLeft:e.tagRight}`})]}),t.jsxs("div",{className:`${e.contentWrapper} ${o==="left"?e.contentRight:e.contentLeft}`,children:[t.jsx("h2",{className:e.heading,children:a}),l&&t.jsx("p",{className:e.preamble,children:l}),m&&t.jsx("div",{className:c(e.text,o==="right"&&e.textRight),children:m}),t.jsx(y,{...s,surface:(s==null?void 0:s.surface)??"primary",className:e.linkButton})]})]});i.__docgenInfo={description:"",methods:[],displayName:"Teaser",props:{heading:{required:!0,tsType:{name:"string"},description:""},preamble:{required:!1,tsType:{name:"string"},description:""},richText:{required:!1,tsType:{name:"ReactFC",raw:"React.FC<RichTextProps>",elements:[{name:"RichTextProps"}]},description:""},image:{required:!0,tsType:{name:"IPicture"},description:""},imagePosition:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},imageRound:{required:!1,tsType:{name:"boolean"},description:""},tag:{required:!1,tsType:{name:"ITag"},description:""},tagPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},linkButton:{required:!0,tsType:{name:"ILinkButton"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fallbackImageUrl:{required:!1,tsType:{name:"string"},description:""}}};const oe={title:"Design System/Molecules/Teaser",component:i},x={render:({...a})=>t.jsxs(P,{children:[t.jsx(i,{...a}),t.jsx(i,{...a,imagePosition:"right"})]})},r={...x,args:{image:L.args,imageRound:!0,imagePosition:"left",tag:b.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},n={...x,args:{...r.args,imageRound:!1,tag:q.args}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStory_Equipment.args,
    imageRound: true,
    imagePosition: 'left',
    tag: TagStoryRound_S.args,
    tagPosition: 'left',
    heading: 'Mer smak med Melleruds',
    preamble: 'Utmärkt pilsner',
    text: '<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>',
    linkButton: {
      text: 'Boka din plats',
      href: '#bokningsforfragan',
      linkComponent: 'a',
      title: 'Boka din plats',
      surface: 'primary',
      size: 'large',
      children: 'Boka din plats'
    }
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var _,h,f;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    ...Teaser_Round.args,
    imageRound: false,
    tag: TagStoryRectangular_L.args
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const le=["Teaser_Round","Teaser_Square"];export{r as Teaser_Round,n as Teaser_Square,le as __namedExportsOrder,oe as default};
