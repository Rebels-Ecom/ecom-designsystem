import{L as S}from"./link-button-1b91cb8d.js";import{P as b}from"./picture-7e21d28d.js";import{T as x}from"./tag-fac2d6a3.js";import{c as g}from"./index-a587463d.js";import{a as l,j as t}from"./jsx-runtime-a3a6c0b8.js";import{PictureStory_Equipment as L}from"./picture.stories-fb612c6c.js";import{TagStoryRound_S as P,TagStoryRectangular_L as B}from"./tag.stories-8b101b34.js";import{C as q}from"./content-wrapper-c985da24.js";const N="_teaser_1oaly_1",W="_imageWrapper_1oaly_12",M="_tag_1oaly_30",V="_tagLeft_1oaly_36",j="_tagRight_1oaly_40",$="_picture_1oaly_44",C="_imageRound_1oaly_52",E="_image_1oaly_12",I="_contentWrapper_1oaly_76",z="_contentLeft_1oaly_90",O="_contentRight_1oaly_99",U="_heading_1oaly_109",D="_preamble_1oaly_115",F="_text_1oaly_120",w="_textRight_1oaly_146",A="_linkButton_1oaly_153",G="_teaserLeft_1oaly_167",H="_teaserRight_1oaly_178",e={teaser:N,imageWrapper:W,tag:M,tagLeft:V,tagRight:j,picture:$,imageRound:C,image:E,contentWrapper:I,contentLeft:z,contentRight:O,heading:U,preamble:D,text:F,textRight:w,linkButton:A,teaserLeft:G,teaserRight:H},i=({heading:r,preamble:o,richText:u,image:k,imagePosition:s,tag:m,tagPosition:R,linkButton:T,imageRound:v,fullWidth:Q})=>l("div",{className:`${e.teaser} ${s==="left"?e.teaserLeft:e.teaserRight}`,children:[l("div",{className:g(e.imageWrapper,{[e.imageRound]:v}),children:[t(b,{...k,classNamePicture:e.picture,classNameImg:e.image}),m&&t(x,{...m,className:`${e.tag} ${R==="left"?e.tagLeft:e.tagRight}`})]}),l("div",{className:`${e.contentWrapper} ${s==="left"?e.contentRight:e.contentLeft}`,children:[t("h2",{className:e.heading,children:r}),o&&t("p",{className:e.preamble,children:o}),u&&t("div",{className:g(e.text,s==="right"&&e.textRight),children:u}),t(S,{surface:"primary",...T,className:e.linkButton})]})]});try{i.displayName="Teaser",i.__docgenInfo={description:"",displayName:"Teaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},imagePosition:{defaultValue:null,description:"",name:"imagePosition",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},imageRound:{defaultValue:null,description:"",name:"imageRound",required:!1,type:{name:"boolean"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"ITag"}},tagPosition:{defaultValue:null,description:"",name:"tagPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},linkButton:{defaultValue:null,description:"",name:"linkButton",required:!0,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const J={title:"Design System/Molecules/Teaser",component:i},h={render:({...r})=>l(q,{children:[t(i,{...r}),t(i,{...r,imagePosition:"right"})]})},a={...h,args:{image:L.args,imageRound:!0,imagePosition:"left",tag:P.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},n={...h,args:{...a.args,imageRound:!1,tag:B.args}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var _,f,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    ...Teaser_Round.args,
    imageRound: false,
    tag: TagStoryRectangular_L.args
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const K=["Teaser_Round","Teaser_Square"],ie=Object.freeze(Object.defineProperty({__proto__:null,Teaser_Round:a,Teaser_Square:n,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as T,n as a,i as b,ie as t};
