import{j as e}from"./jsx-runtime-03333307.js";import{F as c}from"./flex-container-7aff6506.js";import{P as p}from"./picture-ffae027b.js";import{T as g}from"./tags-list-30883e29.js";import{H as x}from"./heading-ba18f9a9.js";import{M as d}from"./max-width-8514a3b3.js";import{T as f}from"./text-1a10703e.js";import{U as y}from"./ui-link-974ac70a.js";import{p as h}from"./pang-f66faff3.js";const o=({title:a,image:r,tags:n,link:t,...s})=>e.jsxs(c,{flexDirection:"column",alignItems:"center",children:[e.jsx(p,{width:300,id:"brand-image",src:`${r.url}?w=300`,alt:r.alt,sources:[{srcset:`${r.mobileUrl??r.url}?w=300`,media:"(max-width: 767px)"},{srcset:`${r.url}?w=300`,media:"(min-width: 768px)"}],fetchPriority:"high",loading:"eager"}),(n==null?void 0:n.length)&&e.jsx(g,{tagsList:n}),e.jsx(x,{order:3,margin:[0,0,.5],children:a}),s.richText&&e.jsx(d,{contentMaxWidth:"text",children:s.richText}),s.text&&e.jsx(d,{contentMaxWidth:"text",children:e.jsx(f,{align:"center",children:s.text})}),(t==null?void 0:t.url)&&(t==null?void 0:t.text)&&e.jsx(y,{onSurface:"transparent",linkComponent:"a",isExternal:!0,href:t.url,children:t.text})]});o.__docgenInfo={description:"",methods:[],displayName:"BrandDetails",props:{title:{required:!0,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  url: string;
  mobileUrl?: string;
  alt?: string;
}`,signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"mobileUrl",value:{name:"string",required:!1}},{key:"alt",value:{name:"string",required:!1}}]}},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"ITag"}],raw:"ITag[]"},description:""},link:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  url: string;
  text: string;
}`,signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""}}};const b={title:"Design System/Organisms/Brand Details",component:o},T={render:({...a})=>e.jsx(o,{...a})},i={...T,args:{title:"Pang Pang",image:{url:h,alt:"Pang Pang"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",link:{text:"Läs mer",url:"#"}}};var m,l,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const j=["BrandDetailsStory"],I=Object.freeze(Object.defineProperty({__proto__:null,BrandDetailsStory:i,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{o as B,i as a,I as b};
