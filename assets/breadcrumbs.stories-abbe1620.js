import{c as o}from"./index-74f03c09.js";import{U as y}from"./ui-link-56fc9cfd.js";import{P as E}from"./picture-8799a0b4.js";import{j as m,a as t}from"./jsx-runtime-76c5c2e2.js";import{PictureStoryField as v}from"./picture.stories-c609c08d.js";const x="_breadcrumbsContainer_1q9w5_1",B="_breadcrumbsPicture_1q9w5_6",I="_breadcrumbsImg_1q9w5_11",q="_textContainer_1q9w5_23",P="_title_1q9w5_30",C="_list_1q9w5_40",N="_listItem_1q9w5_52",V="_listItemActive_1q9w5_75",e={breadcrumbsContainer:x,breadcrumbsPicture:B,breadcrumbsImg:I,textContainer:q,title:P,list:C,listItem:N,listItemActive:V},n=({title:r,image:i,breadcrumbs:h,className:l,location:S})=>m("div",{className:o(e.breadcrumbsContainer,l||""),children:[i&&t(E,{...i,classNamePicture:e.breadcrumbsPicture,classNameImg:e.breadcrumbsImg}),m("div",{className:e.textContainer,children:[r&&t("h2",{className:e.title,children:r}),t("ul",{className:e.list,children:h.map(c=>t(y,{...c,onSurface:"transparent",size:"default",className:o(e.listItem,S===c.href?e.listItemActive:""),children:c.children}))})]})]});try{n.displayName="Breadcrumbs",n.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"TBreadcrumb[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"ILink"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}}}}}catch{}const k={title:"Design System/Organisms/Breadcrumbs",component:n},g={render:({...r})=>t(n,{...r})},a={...g,args:{title:"Våra ölsorter",image:v.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}],location:"/SE-sv/c/ol"}},s={...g,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}};var u,d,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...BreadcrumbsStoryTemplate,
  args: {
    title: 'Våra ölsorter',
    image: PictureStoryField.args,
    breadcrumbs: [{
      href: '/SE-sv/',
      children: 'Start',
      isExternal: true
    }, {
      href: '/SE-sv/c/ol',
      children: 'Öl',
      isExternal: true
    }],
    location: '/SE-sv/c/ol'
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var p,_,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BreadcrumbsStoryTemplate,
  args: {
    title: 'Våra ölsorter',
    breadcrumbs: [{
      href: '/SE-sv/',
      children: 'Start',
      isExternal: true
    }, {
      href: '/SE-sv/c/ol',
      children: 'Öl',
      isExternal: true
    }]
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const w=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground"],z=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:a,BreadcrumbsStoryWithoutBackground:s,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{n as B,a,z as b};
//# sourceMappingURL=breadcrumbs.stories-abbe1620.js.map
