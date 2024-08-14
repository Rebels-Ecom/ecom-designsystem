import{r as s,j as w}from"./jsx-runtime-03333307.js";import{N as l}from"./newsletter-ecb2b9cc.js";import"./input-text-0d02e73b.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";import"./icon-cf6ebd85.js";import"./button-8e3f9b10.js";import"./button.module-a43725bf.js";import"./loader-5c06d14e.js";const F={title:"Design System/Molecules/Newsletter",component:l},S={render:t=>{const[f,n]=s.useState(!1),[i,p]=s.useState(t.inputValue),[d,u]=s.useState(!1),m=c=>{alert(`You signed up for Spendrups newsletter, with email: ${c}`)};return w.jsx(l,{id:t.id,inputValue:i,setInputValue:p,isErroneous:d,setIsFocused:n,setIsErroneous:u,placeholder:t.placeholder,signupForNewsletter:m})}},e={...S,args:{id:"newsletterId",disabled:!1,inputValue:"",placeholder:"Skriv din email address"}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...NewsletterTemplate,
  args: {
    id: 'newsletterId',
    disabled: false,
    inputValue: '',
    placeholder: 'Skriv din email address'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const b=["NewsletterStory"];export{e as NewsletterStory,b as __namedExportsOrder,F as default};
