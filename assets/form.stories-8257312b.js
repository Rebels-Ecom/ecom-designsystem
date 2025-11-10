import{j as d}from"./jsx-runtime-03333307.js";import{F as s}from"./form-0db3ec8c.js";import"./input-field-0be9721f.js";import"./ui-link-974ac70a.js";import"./index-09749a66.js";import"./icon-a32914e5.js";import"./form-helper-af1dc92c.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./heading-5bc32a9e.js";import"./text-fc9325ee.js";import"./button-856a03f5.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";import"./flex-container-7aff6506.js";import"./expandable-wrapper-968690e0.js";import"./link-button-a77c9463.js";const A={title:"Design System/Atoms/Form",component:s},m={render:({...p})=>d.jsx(s,{...p})},e={...m,args:{formTitle:"Form Title",loading:!1,onSubmit:()=>console.log("submit"),fields:[{label:"Name",type:"text",fieldType:"input",name:"name",originalValue:"",placeholder:"Namn Namnsson",subtitle:"subtitle",required:!0,error:"This field is required"},{label:"Email",type:"email",fieldType:"input",name:"email",originalValue:"",subtitle:"subtitle",placeholder:"email@email.com",required:!0,pattern:"email",error:"Email is required, e.g. mail@mail.com"}],actions:[{children:"Save",surface:"primary",type:"submit"}],alignActions:"center"}},r={...m,args:{formTitle:"Form Title",loading:!1,onSubmit:()=>console.log("submit"),fields:[{label:"Nytt lösenord",type:"password",fieldType:"input",name:"new-password",originalValue:"",placeholder:"*",required:!0,error:"Du måste ange ett lösenord",betaField:"confirm-password"},{label:"Upprepa lösenord",type:"password",fieldType:"input",name:"confirm-password",originalValue:"",placeholder:"*",required:!0,error:"Lösenord matchar inte",alphaField:"new-password"}],actions:[{children:"Save",surface:"primary",type:"submit"}],alignActions:"center"}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const v=["Standard_Form","Compare_Two_Fields"];export{r as Compare_Two_Fields,e as Standard_Form,v as __namedExportsOrder,A as default};
