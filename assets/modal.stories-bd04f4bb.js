import{j as r,r as L}from"./jsx-runtime-03333307.js";import{M as C}from"./modal-5ea0273e.js";import{C as s,a}from"./create-list-form.stories-96871648.js";import"./index-09749a66.js";import"./generic-helper-ddbede2e.js";import"./debounce-27b61785.js";import"./isSymbol-9d21be03.js";import"./index-821951ec.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./icon-button-c6bda5d8.js";import"./icon-a32914e5.js";import"./ui-link-974ac70a.js";import"./index-61679f6b.js";import"./loading-overlay-e351c68c.js";import"./loader-5c06d14e.js";import"./logotype-91e51e50.js";import"./picture-6b702374.js";import"./form-group-4de333d7.js";import"./inline-helper-text-5f61e543.js";import"./inline-error-text-caf17fd4.js";import"./input-text-e1680c6c.js";import"./form-helper-af1dc92c.js";import"./textarea-383fe271.js";import"./button-1de8d46b.js";import"./button.module-867d0823.js";import"./Spendrups_logo_horizontal-038b757f.js";const V={title:"Design System/Molecules/Modal",component:C},m={render:({...M})=>{const[h,i]=L.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>i(!0),children:"Open Modal"}),r.jsx(C,{...M,open:h,onClose:()=>i(!1),children:r.jsx(s,{...a.args,onCancel:()=>i(!1)})})]})}},e={...m,args:{children:r.jsx(s,{...a.args})}},o={...m,args:{children:r.jsx(s,{...a.args}),dismissable:!0}},t={...m,args:{children:r.jsx(s,{...a.args}),dismissable:!0,backdropType:"light"}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...ModalStoryTemplate,
  args: {
    children: <CreateListForm {...CreateListFormStory.args}></CreateListForm>
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...ModalStoryTemplate,
  args: {
    children: <CreateListForm {...CreateListFormStory.args}></CreateListForm>,
    dismissable: true
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,S,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...ModalStoryTemplate,
  args: {
    children: <CreateListForm {...CreateListFormStory.args}></CreateListForm>,
    dismissable: true,
    backdropType: 'light'
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const W=["ModalStory","ModalStory_Dismissable","ModalStory_LightBackdrop"];export{e as ModalStory,o as ModalStory_Dismissable,t as ModalStory_LightBackdrop,W as __namedExportsOrder,V as default};
