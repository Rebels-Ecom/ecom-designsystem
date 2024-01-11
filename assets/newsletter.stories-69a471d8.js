import{r as s,j as w}from"./jsx-runtime-a3a6c0b8.js";import{N as l}from"./newsletter-0192049d.js";import"./_commonjsHelpers-de833af9.js";import"./input-text-aa9063aa.js";import"./index-a587463d.js";import"./form-helper-ce65ae5e.js";import"./icon-5fefd509.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./loader-72deb8c4.js";const j={title:"Design System/Molecules/Newsletter",component:l},S={render:t=>{const[f,n]=s.useState(!1),[i,p]=s.useState(t.inputValue),[d,u]=s.useState(!1),m=c=>{alert(`You signed up for Spendrups newsletter, with email: ${c}`)};return w(l,{id:t.id,inputValue:i,setInputValue:p,isErroneous:d,setIsFocused:n,setIsErroneous:u,placeholder:t.placeholder,signupForNewsletter:m})}},e={...S,args:{id:"newsletterId",disabled:!1,inputValue:"",placeholder:"Skriv din email address"}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...NewsletterTemplate,
  args: {
    id: 'newsletterId',
    disabled: false,
    inputValue: '',
    placeholder: 'Skriv din email address'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const k=["NewsletterStory"];export{e as NewsletterStory,k as __namedExportsOrder,j as default};
