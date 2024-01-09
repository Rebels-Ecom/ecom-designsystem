import{r as s,j as w}from"./jsx-runtime-a3a6c0b8.js";import{N as l}from"./newsletter-9ffd0266.js";import"./_commonjsHelpers-de833af9.js";import"./input-text-b525afc6.js";import"./index-a587463d.js";import"./form-helper-ce65ae5e.js";import"./icon-54910fd5.js";import"./button-40bd1233.js";import"./button.module-de333a8d.js";import"./loader-72deb8c4.js";const j={title:"Design System/Molecules/Newsletter",component:l},S={render:t=>{const[f,n]=s.useState(!1),[i,p]=s.useState(t.inputValue),[d,u]=s.useState(!1),m=c=>{alert(`You signed up for Spendrups newsletter, with email: ${c}`)};return w(l,{id:t.id,inputValue:i,setInputValue:p,isErroneous:d,setIsFocused:n,setIsErroneous:u,placeholder:t.placeholder,signupForNewsletter:m})}},e={...S,args:{id:"newsletterId",disabled:!1,inputValue:"",placeholder:"Skriv din email address"}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...NewsletterTemplate,
  args: {
    id: 'newsletterId',
    disabled: false,
    inputValue: '',
    placeholder: 'Skriv din email address'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const k=["NewsletterStory"];export{e as NewsletterStory,k as __namedExportsOrder,j as default};
