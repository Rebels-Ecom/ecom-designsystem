import{j as d}from"./jsx-runtime-a3a6c0b8.js";import{F as s}from"./form-2448d445.js";import"./_commonjsHelpers-de833af9.js";import"./input-field-e33f04e3.js";import"./ui-link-90f48b0d.js";import"./index-a587463d.js";import"./icon-b918f330.js";import"./motion-54668070.js";import"./heading-a9520268.js";import"./text-6742cc3c.js";import"./button-93555bd8.js";import"./button.module-d4e6cb42.js";import"./loader-72deb8c4.js";import"./flex-container-145d4933.js";import"./expandable-wrapper-5e4804ab.js";const x={title:"Design System/Atoms/Form",component:s},m={render:({...p})=>d(s,{...p})},e={...m,args:{formTitle:"Form Title",loading:!1,onSubmit:()=>console.log("submit"),fields:[{label:"Name",type:"text",fieldType:"input",name:"name",originalValue:"",placeholder:"Namn Namnsson",subtitle:"subtitle",required:!0,error:"This field is required"},{label:"Email",type:"email",fieldType:"input",name:"email",originalValue:"",subtitle:"subtitle",placeholder:"email@email.com",required:!0,pattern:"email",error:"Email is required, e.g. mail@mail.com"}],actions:[{children:"Save",surface:"primary",type:"submit"}],alignActions:"center"}},r={...m,args:{formTitle:"Form Title",loading:!1,onSubmit:()=>console.log("submit"),fields:[{label:"Nytt lösenord",type:"password",fieldType:"input",name:"new-password",originalValue:"",placeholder:"*",required:!0,error:"Du måste ange ett lösenord",betaField:"confirm-password"},{label:"Upprepa lösenord",type:"password",fieldType:"input",name:"confirm-password",originalValue:"",placeholder:"*",required:!0,error:"Lösenord matchar inte",alphaField:"new-password"}],actions:[{children:"Save",surface:"primary",type:"submit"}],alignActions:"center"}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var o,t,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...FormStoryTemplate,
  args: ({
    formTitle: 'Form Title',
    loading: false,
    onSubmit: () => console.log('submit'),
    fields: [{
      label: 'Nytt lösenord',
      type: 'password',
      fieldType: 'input',
      name: 'new-password',
      originalValue: '',
      placeholder: '*',
      required: true,
      error: 'Du måste ange ett lösenord',
      betaField: 'confirm-password'
    }, {
      label: 'Upprepa lösenord',
      type: 'password',
      fieldType: 'input',
      name: 'confirm-password',
      originalValue: '',
      placeholder: '*',
      required: true,
      error: 'Lösenord matchar inte',
      alphaField: 'new-password'
    }],
    actions: [{
      children: 'Save',
      surface: 'primary',
      type: 'submit'
    }],
    alignActions: 'center'
  } as IFormTemplateProps)
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const A=["Standard_Form","Compare_Two_Fields"];export{r as Compare_Two_Fields,e as Standard_Form,A as __namedExportsOrder,x as default};