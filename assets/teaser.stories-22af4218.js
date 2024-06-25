import{L as x}from"./link-button-8ad71205.js";import{P as v}from"./picture-99a9456d.js";import{T as S}from"./tag-84e76236.js";import{c as g}from"./index-09749a66.js";import{j as t}from"./jsx-runtime-03333307.js";import{PictureStory_Equipment as j}from"./picture.stories-7b565e38.js";import{TagStoryRound_S as L,TagStoryRectangular_L as P}from"./tag.stories-15375a30.js";import{C as b}from"./content-wrapper-adfa8526.js";import"./ui-link-94ae867e.js";import"./icon-e3522fc5.js";import"./Content9-b09c4254.js";import"./pang-f66faff3.js";const q="_teaser_1oaly_1",B="_imageWrapper_1oaly_12",N="_tag_1oaly_30",W="_tagLeft_1oaly_36",M="_tagRight_1oaly_40",C="_picture_1oaly_44",E="_imageRound_1oaly_52",$="_image_1oaly_12",I="_contentWrapper_1oaly_76",w="_contentLeft_1oaly_90",z="_contentRight_1oaly_99",F="_heading_1oaly_109",U="_preamble_1oaly_115",D="_text_1oaly_120",O="_textRight_1oaly_146",A="_linkButton_1oaly_153",G="_teaserLeft_1oaly_167",H="_teaserRight_1oaly_178",e={teaser:q,imageWrapper:B,tag:N,tagLeft:W,tagRight:M,picture:C,imageRound:E,image:$,contentWrapper:I,contentLeft:w,contentRight:z,heading:F,preamble:U,text:D,textRight:O,linkButton:A,teaserLeft:G,teaserRight:H},s=({heading:r,preamble:o,richText:l,image:k,imagePosition:i,tag:m,tagPosition:y,linkButton:R,imageRound:T,fullWidth:J})=>t.jsxs("div",{className:`${e.teaser} ${i==="left"?e.teaserLeft:e.teaserRight}`,children:[t.jsxs("div",{className:g(e.imageWrapper,{[e.imageRound]:T}),children:[t.jsx(v,{...k,classNamePicture:e.picture,classNameImg:e.image}),m&&t.jsx(S,{...m,className:`${e.tag} ${y==="left"?e.tagLeft:e.tagRight}`})]}),t.jsxs("div",{className:`${e.contentWrapper} ${i==="left"?e.contentRight:e.contentLeft}`,children:[t.jsx("h2",{className:e.heading,children:r}),o&&t.jsx("p",{className:e.preamble,children:o}),l&&t.jsx("div",{className:g(e.text,i==="right"&&e.textRight),children:l}),t.jsx(x,{surface:"primary",...R,className:e.linkButton})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Teaser",props:{heading:{required:!0,tsType:{name:"string"},description:""},preamble:{required:!1,tsType:{name:"string"},description:""},richText:{required:!1,tsType:{name:"ReactFC",raw:"React.FC<RichTextProps>",elements:[{name:"RichTextProps"}]},description:""},image:{required:!0,tsType:{name:"IPicture"},description:""},imagePosition:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},imageRound:{required:!1,tsType:{name:"boolean"},description:""},tag:{required:!1,tsType:{name:"ITag"},description:""},tagPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},linkButton:{required:!0,tsType:{name:"ILink"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""}}};const ie={title:"Design System/Molecules/Teaser",component:s},h={render:({...r})=>t.jsxs(b,{children:[t.jsx(s,{...r}),t.jsx(s,{...r,imagePosition:"right"})]})},a={...h,args:{image:j.args,imageRound:!0,imagePosition:"left",tag:L.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},n={...h,args:{...a.args,imageRound:!1,tag:P.args}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,_,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    ...Teaser_Round.args,
    imageRound: false,
    tag: TagStoryRectangular_L.args
  }
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const oe=["Teaser_Round","Teaser_Square"];export{a as Teaser_Round,n as Teaser_Square,oe as __namedExportsOrder,ie as default};
