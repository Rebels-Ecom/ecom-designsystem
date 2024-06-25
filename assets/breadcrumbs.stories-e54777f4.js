import{c as l}from"./index-09749a66.js";import{U as x}from"./ui-link-94ae867e.js";import{P as k}from"./picture-99a9456d.js";import{j as e}from"./jsx-runtime-03333307.js";import{C as B}from"./content-wrapper-adfa8526.js";import{PictureStoryField as I,PictureStory_BreadcrumbsContentPage as w}from"./picture.stories-7b565e38.js";const P="_breadcrumbsContainer_i0md9_1",j="_minHeight_i0md9_5",T="_breadcrumbsPicture_i0md9_16",q="_breadcrumbsImg_i0md9_21",C="_title_i0md9_33",A="_wide_i0md9_42",N="_narrow_i0md9_46",V="_list_i0md9_53",W="_listItem_i0md9_63",H="_listItemActive_i0md9_88",r={breadcrumbsContainer:P,minHeight:j,breadcrumbsPicture:T,breadcrumbsImg:q,title:C,wide:A,narrow:N,list:V,listItem:W,listItemActive:H},o=({title:c,image:t,breadcrumbs:E,className:d,location:U,textWidth:u="wide"})=>e.jsxs("div",{className:l(r.breadcrumbsContainer,d||"",{[r.minHeight]:t==null?void 0:t.src}),children:[t&&e.jsx(k,{...t,classNamePicture:r.breadcrumbsPicture,classNameImg:r.breadcrumbsImg}),e.jsx(B,{children:e.jsxs(e.Fragment,{children:[(t==null?void 0:t.src)&&c&&e.jsx("h2",{className:l(r.title,r[u]),children:c}),e.jsx("div",{className:l(r.list,r[u]),children:E.map(s=>e.jsx(x,{href:s.active?"":s.href,onSurface:"transparent",isExternal:!s.active,className:l(r.listItem,{[r.listItemActive]:s.active}),noUnderline:s.active,children:s.children},s.href))})]})})]});o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"IPicture"},description:""},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    children: string;
    href: string;
    active?: boolean;
}`,signature:{properties:[{key:"children",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"Array<TBreadcrumb>"},description:""},linkComponent:{required:!0,tsType:{name:"ILink"},description:""},location:{required:!0,tsType:{name:"string"},description:""},textWidth:{required:!1,tsType:{name:"union",raw:"'wide' | 'narrow'",elements:[{name:"literal",value:"'wide'"},{name:"literal",value:"'narrow'"}]},description:"",defaultValue:{value:"'wide'",computed:!1}}}};const O={title:"Design System/Organisms/Breadcrumbs",component:o},m={render:({...c})=>e.jsx(o,{...c})},a={...m,args:{title:"Våra ölsorter",image:I.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0,active:!0}],location:"/SE-sv/c/ol"}},n={...m,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}},i={...m,args:{title:"Små aktörer brygger mer hållbart",image:w.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/artikel",children:"Artikel",isExternal:!0},{href:"/SE-sv/artikel/hallbarhet",children:"Små aktörer, mer hållbart?",isExternal:!0}],location:"/SE-sv/artikel/hallbarhet"}};var h,b,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      isExternal: true,
      active: true
    }],
    location: '/SE-sv/c/ol'
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var S,_,g;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(g=(_=n.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...BreadcrumbsStoryTemplate,
  args: {
    title: 'Små aktörer brygger mer hållbart',
    image: PictureStory_BreadcrumbsContentPage.args,
    breadcrumbs: [{
      href: '/SE-sv/',
      children: 'Start',
      isExternal: true
    }, {
      href: '/SE-sv/artikel',
      children: 'Artikel',
      isExternal: true
    }, {
      href: '/SE-sv/artikel/hallbarhet',
      children: 'Små aktörer, mer hållbart?',
      isExternal: true
    }],
    location: '/SE-sv/artikel/hallbarhet'
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const F=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground","BreadcrumbsStory_Sustainability"],J=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:a,BreadcrumbsStoryWithoutBackground:n,BreadcrumbsStory_Sustainability:i,__namedExportsOrder:F,default:O},Symbol.toStringTag,{value:"Module"}));export{i as B,o as a,n as b,J as c};
