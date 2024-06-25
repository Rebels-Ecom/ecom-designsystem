import{j as r,r as L}from"./jsx-runtime-03333307.js";import{M as C}from"./modal-c1ef632e.js";import{C as s,a}from"./create-list-form.stories-beec63fa.js";import"./index-09749a66.js";import"./index-821951ec.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./icon-button-4ba5bdac.js";import"./ui-link-94ae867e.js";import"./icon-e3522fc5.js";import"./index-61679f6b.js";import"./loading-overlay-3fd71c08.js";import"./loader-5c06d14e.js";import"./logotype-8cd88885.js";import"./picture-99a9456d.js";import"./form-group-eb0886e6.js";import"./inline-helper-text-5f61e543.js";import"./inline-error-text-c9980e76.js";import"./input-text-6778a0ec.js";import"./form-helper-af1dc92c.js";import"./textarea-383fe271.js";import"./button-1a287b34.js";import"./button.module-16a60bae.js";import"./Spendrups_logo_horizontal-038b757f.js";const P={title:"Design System/Molecules/Modal",component:C},m={render:({...M})=>{const[h,i]=L.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>i(!0),children:"Open Modal"}),r.jsx(C,{...M,open:h,onClose:()=>i(!1),children:r.jsx(s,{...a.args,onCancel:()=>i(!1)})})]})}},e={...m,args:{children:r.jsx(s,{...a.args})}},o={...m,args:{children:r.jsx(s,{...a.args}),dismissable:!0}},t={...m,args:{children:r.jsx(s,{...a.args}),dismissable:!0,backdropType:"light"}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const Q=["ModalStory","ModalStory_Dismissable","ModalStory_LightBackdrop"];export{e as ModalStory,o as ModalStory_Dismissable,t as ModalStory_LightBackdrop,Q as __namedExportsOrder,P as default};
