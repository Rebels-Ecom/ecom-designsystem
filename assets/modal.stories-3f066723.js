import{j as r,r as L,a as F}from"./jsx-runtime-a3a6c0b8.js";import{M as C}from"./modal-d1936410.js";import{C as s,a}from"./create-list-form.stories-f7d07d75.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./index-79d56f34.js";import"./motion-54668070.js";import"./icon-button-9255179d.js";import"./ui-link-13fe156c.js";import"./icon-5fefd509.js";import"./index-4058f88b.js";import"./loading-overlay-c414508c.js";import"./loader-72deb8c4.js";import"./logotype-1eb74b8f.js";import"./picture-7e21d28d.js";import"./form-group-1e7117c8.js";import"./inline-helper-text-1f598236.js";import"./inline-error-text-34a06e17.js";import"./input-text-e105d481.js";import"./form-helper-af1dc92c.js";import"./textarea-82822c06.js";import"./button-43643fd6.js";import"./button.module-16a60bae.js";import"./Spendrups_logo_horizontal-038b757f.js";const R={title:"Design System/Molecules/Modal",component:C},m={render:({...M})=>{const[h,i]=L.useState(!1);return F("div",{children:[r("button",{onClick:()=>i(!0),children:"Open Modal"}),r(C,{...M,open:h,onClose:()=>i(!1),children:r(s,{...a.args,onCancel:()=>i(!1)})})]})}},e={...m,args:{children:r(s,{...a.args})}},o={...m,args:{children:r(s,{...a.args}),dismissable:!0}},t={...m,args:{children:r(s,{...a.args}),dismissable:!0,backdropType:"light"}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
