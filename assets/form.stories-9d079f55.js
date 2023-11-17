import{a as m}from"./jsx-runtime-76c5c2e2.js";import{F as a}from"./form-7ea49480.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./ui-link-da2491c1.js";import"./index-74f03c09.js";import"./icon-17f6a5b2.js";import"./motion-354a1bac.js";import"./heading-e5a679a5.js";import"./flex-container-c88ed1e9.js";import"./expandable-wrapper-911222ad.js";import"./button-689f1284.js";import"./button.module-3bdf7fd3.js";import"./loader-ce89f5e5.js";const q={title:"Design System/Atoms/Form",component:a},l={render:({...n})=>m(a,{...n})},e={...l,args:{formTitle:"Form Title",loading:!1,onSubmit:()=>console.log("submit"),fields:[{label:"Name",type:"text",fieldType:"input",name:"name",originalValue:"",placeholder:"Namn Namnsson",subtitle:"subtitle",required:!0,error:"This field is required"},{label:"Email",type:"email",fieldType:"input",name:"email",originalValue:"",subtitle:"subtitle",placeholder:"email@email.com",required:!0,pattern:"email",error:"Email is required, e.g. mail@mail.com"}],actions:[{children:"Save",surface:"primary",type:"submit"}],alignActions:"center"}};var r,i,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...FormStoryTemplate,
  args: ({
    formTitle: 'Form Title',
    loading: false,
    onSubmit: () => console.log('submit'),
    fields: [{
      label: 'Name',
      type: 'text',
      fieldType: 'input',
      name: 'name',
      originalValue: '',
      placeholder: 'Namn Namnsson',
      subtitle: 'subtitle',
      required: true,
      error: 'This field is required'
    }, {
      label: 'Email',
      type: 'email',
      fieldType: 'input',
      name: 'email',
      originalValue: '',
      subtitle: 'subtitle',
      placeholder: 'email@email.com',
      required: true,
      pattern: 'email',
      error: 'Email is required, e.g. mail@mail.com'
    }],
    actions: [{
      children: 'Save',
      surface: 'primary',
      type: 'submit'
    }],
    alignActions: 'center'
  } as IFormTemplateProps)
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const N=["FormStory"];export{e as FormStory,N as __namedExportsOrder,q as default};
//# sourceMappingURL=form.stories-9d079f55.js.map
