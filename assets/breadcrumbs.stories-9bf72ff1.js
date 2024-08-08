import{c as f}from"./index-09749a66.js";import{j as e}from"./jsx-runtime-03333307.js";import{C as v}from"./content-wrapper-adfa8526.js";import{F as E}from"./flex-container-7aff6506.js";import{I as x}from"./icon-cf6ebd85.js";import{PictureStoryField as k,PictureStory_BreadcrumbsContentPage as B}from"./picture.stories-4a9f0254.js";const T="_breadcrumbsContainer_cfby3_1",w="_minHeight_cfby3_5",I="_breadcrumb_cfby3_1",j="_breadcrumbText_cfby3_22",P="_underline_cfby3_23",q="_breadcrumbsPicture_cfby3_29",C="_breadcrumbsImg_cfby3_34",A="_title_cfby3_46",W="_wide_cfby3_55",N="_narrow_cfby3_59",V="_list_cfby3_66",F="_listItem_cfby3_76",O="_listItemActive_cfby3_101",s={breadcrumbsContainer:T,minHeight:w,breadcrumb:I,breadcrumbText:j,underline:P,breadcrumbsPicture:q,breadcrumbsImg:C,title:A,wide:W,narrow:N,list:V,listItem:F,listItemActive:O},i=({title:l,image:D,breadcrumbs:y,className:M,location:R,textWidth:G="wide",linkComponent:S})=>e.jsx(v,{children:e.jsx(E,{gap:.5,children:y.map(r=>e.jsxs(S,{to:r.href,className:s.breadcrumb,children:[e.jsx("span",{className:f(s.breadcrumbText,{[s.underline]:!r.active}),children:r.children}),!r.active&&e.jsx(x,{icon:"icon-chevron-right"})]},r.href))})});i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"IPicture"},description:""},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    children: string;
    href: string;
    active?: boolean;
}`,signature:{properties:[{key:"children",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"Array<TBreadcrumb>"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},location:{required:!0,tsType:{name:"string"},description:""},textWidth:{required:!1,tsType:{name:"union",raw:"'wide' | 'narrow'",elements:[{name:"literal",value:"'wide'"},{name:"literal",value:"'narrow'"}]},description:"",defaultValue:{value:"'wide'",computed:!1}}}};const H={title:"Design System/Organisms/Breadcrumbs",component:i},c={render:({...l})=>e.jsx(i,{...l})},t={...c,args:{title:"Våra ölsorter",image:k.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0,active:!0}],location:"/SE-sv/c/ol"}},a={...c,args:{title:"Våra ölsorter",breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/c/ol",children:"Öl",isExternal:!0}]}},n={...c,args:{title:"Små aktörer brygger mer hållbart",image:B.args,breadcrumbs:[{href:"/SE-sv/",children:"Start",isExternal:!0},{href:"/SE-sv/artikel",children:"Artikel",isExternal:!0},{href:"/SE-sv/artikel/hallbarhet",children:"Små aktörer, mer hållbart?",isExternal:!0}],location:"/SE-sv/artikel/hallbarhet"}};var o,m,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,b,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var p,_,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(_=n.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const z=["BreadcrumbsStoryWithBackground","BreadcrumbsStoryWithoutBackground","BreadcrumbsStory_Sustainability"],Y=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbsStoryWithBackground:t,BreadcrumbsStoryWithoutBackground:a,BreadcrumbsStory_Sustainability:n,__namedExportsOrder:z,default:H},Symbol.toStringTag,{value:"Module"}));export{n as B,i as a,a as b,Y as c};
