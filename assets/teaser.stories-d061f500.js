import{L as S}from"./link-button-c13a1926.js";import{P as b}from"./picture-78f09330.js";import{T as x}from"./tag-24814d0e.js";import{c as p}from"./index-a587463d.js";import{a as s,j as t}from"./jsx-runtime-a3a6c0b8.js";import{PictureStory_Equipment as L}from"./picture.stories-b9fdbc7d.js";import{TagStoryRound_S as P,TagStoryRectangular_L as B}from"./tag.stories-af9f8a35.js";import{C as q}from"./content-wrapper-c985da24.js";const N="_teaser_nkh7p_1",W="_teaserLeft_nkh7p_11",M="_contentWrapper_nkh7p_15",V="_linkButton_nkh7p_21",j="_teaserRight_nkh7p_26",$="_imageWrapper_nkh7p_34",C="_imageRound_nkh7p_41",E="_image_nkh7p_34",I="_tag_nkh7p_66",z="_tagLeft_nkh7p_73",O="_tagRight_nkh7p_77",U="_picture_nkh7p_81",D="_contentLeft_nkh7p_105",F="_contentRight_nkh7p_114",w="_heading_nkh7p_124",A="_preamble_nkh7p_130",G="_text_nkh7p_135",H="_textRight_nkh7p_161",e={teaser:N,teaserLeft:W,contentWrapper:M,linkButton:V,teaserRight:j,imageWrapper:$,imageRound:C,image:E,tag:I,tagLeft:z,tagRight:O,picture:U,contentLeft:D,contentRight:F,heading:w,preamble:A,text:G,textRight:H},i=({heading:n,preamble:o,richText:u,image:R,imagePosition:l,tag:m,tagPosition:y,linkButton:T,imageRound:v,fullWidth:Q})=>s("div",{className:`${e.teaser} ${l==="left"?e.teaserLeft:e.teaserRight}`,children:[s("div",{className:p(e.imageWrapper,{[e.imageRound]:v}),children:[t(b,{...R,classNamePicture:e.picture,classNameImg:e.image}),m&&t(x,{...m,className:`${e.tag} ${y==="left"?e.tagLeft:e.tagRight}`})]}),s("div",{className:`${e.contentWrapper} ${l==="left"?e.contentRight:e.contentLeft}`,children:[t("h2",{className:e.heading,children:n}),o&&t("p",{className:e.preamble,children:o}),u&&t("div",{className:p(e.text,l==="right"&&e.textRight),children:u}),t(S,{surface:"primary",...T,className:e.linkButton})]})]});try{i.displayName="Teaser",i.__docgenInfo={description:"",displayName:"Teaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},imagePosition:{defaultValue:null,description:"",name:"imagePosition",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},imageRound:{defaultValue:null,description:"",name:"imageRound",required:!1,type:{name:"boolean"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"ITag"}},tagPosition:{defaultValue:null,description:"",name:"tagPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},linkButton:{defaultValue:null,description:"",name:"linkButton",required:!0,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const J={title:"Design System/Molecules/Teaser",component:i},k={render:({...n})=>s(q,{children:[t(i,{...n}),t(i,{...n,imagePosition:"right"})]})},a={...k,args:{image:L.args,imageRound:!0,imagePosition:"left",tag:P.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},r={...k,args:{...a.args,imageRound:!1,tag:B.args}};var g,d,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var _,f,h;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    ...Teaser_Round.args,
    imageRound: false,
    tag: TagStoryRectangular_L.args
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const K=["Teaser_Round","Teaser_Square"],ie=Object.freeze(Object.defineProperty({__proto__:null,Teaser_Round:a,Teaser_Square:r,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as T,r as a,i as b,ie as t};
