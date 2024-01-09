import{j as r,r as L,a as F}from"./jsx-runtime-a3a6c0b8.js";import{M as C}from"./modal-7fb98173.js";import{C as s,a}from"./create-list-form.stories-75ae53f7.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./index-79d56f34.js";import"./motion-54668070.js";import"./icon-button-4919769e.js";import"./ui-link-8d3ae220.js";import"./icon-54910fd5.js";import"./index-4058f88b.js";import"./loading-overlay-c414508c.js";import"./loader-72deb8c4.js";import"./logotype-564a64e9.js";import"./picture-7e21d28d.js";import"./form-group-6ad95a7c.js";import"./inline-helper-text-1f598236.js";import"./inline-error-text-3eb6bcbf.js";import"./input-text-b525afc6.js";import"./form-helper-ce65ae5e.js";import"./textarea-46c93b0d.js";import"./button-40bd1233.js";import"./button.module-de333a8d.js";import"./Spendrups_logo_horizontal-038b757f.js";const R={title:"Design System/Molecules/Modal",component:C},m={render:({...M})=>{const[h,i]=L.useState(!1);return F("div",{children:[r("button",{onClick:()=>i(!0),children:"Open Modal"}),r(C,{...M,open:h,onClose:()=>i(!1),children:r(s,{...a.args,onCancel:()=>i(!1)})})]})}},e={...m,args:{children:r(s,{...a.args})}},o={...m,args:{children:r(s,{...a.args}),dismissable:!0}},t={...m,args:{children:r(s,{...a.args}),dismissable:!0,backdropType:"light"}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const U=["ModalStory","ModalStory_Dismissable","ModalStory_LightBackdrop"];export{e as ModalStory,o as ModalStory_Dismissable,t as ModalStory_LightBackdrop,U as __namedExportsOrder,R as default};
