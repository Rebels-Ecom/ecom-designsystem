import{a as c,j as e}from"./jsx-runtime-a3a6c0b8.js";import{F as p}from"./flex-container-145d4933.js";import{P as g}from"./picture-78f09330.js";import{T as x}from"./tags-list-5108b032.js";import{H as f}from"./heading-a9520268.js";import{M as l}from"./max-width-7a20e242.js";import{T as h}from"./text-6742cc3c.js";import{U as y}from"./ui-link-90f48b0d.js";import{p as _}from"./pang-f66faff3.js";const s=({title:i,image:t,tags:n,link:o,...a})=>c(p,{flexDirection:"column",alignItems:"center",children:[e(g,{width:300,id:"brand-image",src:t.url,alt:t.alt,sources:[{srcset:`${t.mobileUrl??t.url}`,media:"(max-width: 767px)"},{srcset:`${t.url}`,media:"(min-width: 768px)"}]}),(n==null?void 0:n.length)&&e(x,{tagsList:n}),e(f,{order:3,margin:[0,0,.5],children:i}),a.richText&&e(l,{contentMaxWidth:"text",children:a.richText}),a.text&&e(l,{contentMaxWidth:"text",children:e(h,{align:"center",children:a.text})}),o&&e(y,{onSurface:"transparent",linkComponent:"a",isExternal:!0,href:o.url,children:o.text})]});try{s.displayName="BrandDetails",s.__docgenInfo={description:"",displayName:"BrandDetails",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"{ url: string; mobileUrl?: string | undefined; alt?: string | undefined; }"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"ITag[]"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"{ url: string; text: string; }"}},richText:{defaultValue:null,description:"",name:"richText",required:!1,type:{name:"FC<RichTextProps>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}}}}}catch{}const b={title:"Design System/Organisms/Brand Details",component:s},T={render:({...i})=>e(s,{...i})},r={...T,args:{title:"Pang Pang",image:{url:_,alt:"Pang Pang"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:{text:"Läs mer",url:"#"}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...BrandDetailsStoryTemplate,
  args: ({
    title: 'Pang Pang',
    image: {
      url: pang,
      alt: 'Pang Pang'
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    link: {
      text: 'Läs mer',
      url: '#'
    }
  } as TBrandDetails)
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const D=["BrandDetailsStory"],I=Object.freeze(Object.defineProperty({__proto__:null,BrandDetailsStory:r,__namedExportsOrder:D,default:b},Symbol.toStringTag,{value:"Module"}));export{s as B,r as a,I as b};