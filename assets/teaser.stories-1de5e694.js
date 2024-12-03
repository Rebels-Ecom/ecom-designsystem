import{L as v}from"./link-button-deeb7d4c.js";import{P as S}from"./picture-41b0d9ed.js";import{T as j}from"./tag-84e76236.js";import{c}from"./index-09749a66.js";import{j as t}from"./jsx-runtime-03333307.js";import{PictureStory_Equipment as L}from"./picture.stories-b12bb409.js";import{TagStoryRound_S as b,TagStoryRectangular_L as q}from"./tag.stories-15375a30.js";import{C as P}from"./content-wrapper-adfa8526.js";import"./ui-link-9ccf406a.js";import"./icon-cf6ebd85.js";import"./Content9-b09c4254.js";import"./pang-f66faff3.js";import"./defaultFallbackImage-b43581a6.js";const B="_teaser_1oaly_1",N="_imageWrapper_1oaly_12",W="_tag_1oaly_30",M="_tagLeft_1oaly_36",C="_tagRight_1oaly_40",E="_picture_1oaly_44",I="_imageRound_1oaly_52",$="_image_1oaly_12",w="_contentWrapper_1oaly_76",U="_contentLeft_1oaly_90",z="_contentRight_1oaly_99",F="_heading_1oaly_109",D="_preamble_1oaly_115",O="_text_1oaly_120",A="_textRight_1oaly_146",G="_linkButton_1oaly_153",H="_teaserLeft_1oaly_167",J="_teaserRight_1oaly_178",e={teaser:B,imageWrapper:N,tag:W,tagLeft:M,tagRight:C,picture:E,imageRound:I,image:$,contentWrapper:w,contentLeft:U,contentRight:z,heading:F,preamble:D,text:O,textRight:A,linkButton:G,teaserLeft:H,teaserRight:J},s=({heading:r,preamble:o,richText:l,image:k,imagePosition:i,tag:m,tagPosition:R,linkButton:g,imageRound:T,fallbackImageUrl:x})=>t.jsxs("div",{className:`${e.teaser} ${i==="left"?e.teaserLeft:e.teaserRight}`,children:[t.jsxs("div",{className:c(e.imageWrapper,{[e.imageRound]:T}),children:[t.jsx(S,{...k,classNamePicture:e.picture,classNameImg:e.image,fallbackImageUrl:x}),m&&t.jsx(j,{...m,className:`${e.tag} ${R==="left"?e.tagLeft:e.tagRight}`})]}),t.jsxs("div",{className:`${e.contentWrapper} ${i==="left"?e.contentRight:e.contentLeft}`,children:[t.jsx("h2",{className:e.heading,children:r}),o&&t.jsx("p",{className:e.preamble,children:o}),l&&t.jsx("div",{className:c(e.text,i==="right"&&e.textRight),children:l}),t.jsx(v,{...g,surface:g.surface??"primary",className:e.linkButton})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Teaser",props:{heading:{required:!0,tsType:{name:"string"},description:""},preamble:{required:!1,tsType:{name:"string"},description:""},richText:{required:!1,tsType:{name:"ReactFC",raw:"React.FC<RichTextProps>",elements:[{name:"RichTextProps"}]},description:""},image:{required:!0,tsType:{name:"IPicture"},description:""},imagePosition:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},imageRound:{required:!1,tsType:{name:"boolean"},description:""},tag:{required:!1,tsType:{name:"ITag"},description:""},tagPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},linkButton:{required:!0,tsType:{name:"ILinkButton"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fallbackImageUrl:{required:!1,tsType:{name:"string"},description:""}}};const oe={title:"Design System/Molecules/Teaser",component:s},y={render:({...r})=>t.jsxs(P,{children:[t.jsx(s,{...r}),t.jsx(s,{...r,imagePosition:"right"})]})},a={...y,args:{image:L.args,imageRound:!0,imagePosition:"left",tag:b.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},n={...y,args:{...a.args,imageRound:!1,tag:q.args}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var _,f,h;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    ...Teaser_Round.args,
    imageRound: false,
    tag: TagStoryRectangular_L.args
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const le=["Teaser_Round","Teaser_Square"];export{a as Teaser_Round,n as Teaser_Square,le as __namedExportsOrder,oe as default};
