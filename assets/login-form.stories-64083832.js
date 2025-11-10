import{r as p,j as r}from"./jsx-runtime-03333307.js";import{F as R,v as U}from"./form-0db3ec8c.js";import{L as W}from"./ui-link-974ac70a.js";import{I as A}from"./icon-a32914e5.js";const D="_loginForm_en9tm_1",G="_logoWrapper_en9tm_15",O="_backLink_en9tm_19",z="_logo_en9tm_15",V="_closeButton_en9tm_55",X="_overlay_en9tm_64",l={loginForm:D,logoWrapper:G,backLink:O,logo:z,closeButton:V,overlay:X},d=({title:e,description:h,usernameLabel:v,username:k,passwordLabel:q,password:S,forgotPassword:o,onSubmit:w,offerLink:i,errorMessage:F,usernameError:T,passwordError:C,onPasswordChange:_,onUsernameChange:j,loading:x,logo:m,responseMessage:M,captcha:B,actions:N,linkActions:P,backLink:a,backLinkComponent:E=W})=>{const I=p.useMemo(()=>{const n=[];return o&&n.push(o),i&&n.push(i),n},[o,i]),J=p.useMemo(()=>[{fieldType:"input",name:"email",label:v,originalValue:k??"",type:"text",pattern:"email",onControlledChange:j,required:!0,error:T??"Ange en korrekt e-post e.g. mail@mail.com",size:"full"},{fieldType:"input",name:"password",label:q,originalValue:S??"",type:"password",pattern:"password",onControlledChange:_,required:!0,error:C??"Lösenord måste vara minst x tecken...",size:"full"}],[]);return r.jsxs("div",{className:l.loginForm,children:[r.jsx("div",{className:l.logoWrapper,children:m&&m}),(a==null?void 0:a.href)&&r.jsxs(E,{className:l.backLink,to:a.href,children:[a.name,r.jsx(A,{icon:"icon-x"})]}),r.jsx(R,{formTitle:e,formSubtitle:h,fields:J.map(n=>({...n,valid:U(n)})),loading:!!x,onSubmit:w,actions:N,linkActions:P,generalErrorMessage:F,links:I,responseMessage:M,captcha:B,isLogin:!0})]})};d.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},usernameLabel:{required:!0,tsType:{name:"string"},description:""},username:{required:!1,tsType:{name:"string"},description:""},passwordLabel:{required:!0,tsType:{name:"string"},description:""},password:{required:!1,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"IButton"}],raw:"IButton[]"},description:""},linkActions:{required:!1,tsType:{name:"Array",elements:[{name:"ILinkButton"}],raw:"ILinkButton[]"},description:""},forgotPassword:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  name: string
  href: string
  onClick?: CallableFunction
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}},description:""},primarySubmitLabel:{required:!0,tsType:{name:"string"},description:""},secondarySubmitLabel:{required:!1,tsType:{name:"string"},description:""},offerLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string
  href: string
  onClick?: CallableFunction
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}},description:""},errorMessage:{required:!1,tsType:{name:"any"},description:""},usernameError:{required:!1,tsType:{name:"string"},description:""},passwordError:{required:!1,tsType:{name:"string"},description:""},onPasswordChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onUsernameChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},captcha:{required:!1,tsType:{name:"JSX.Element"},description:""},submitDisabled:{required:!1,tsType:{name:"boolean"},description:""},backLinkComponent:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"({ children, ...props }: any) => <div {...props}>{children}</div>",computed:!1}},backLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string
  href: string
  onClick?: CallableFunction
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}},description:""}},composes:["Pick"]};const H={title:"Design System/Organisms/LoginForm",component:d},L={render:({...e})=>r.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:r.jsx(d,{...e,responseMessage:e.success?{title:"Success!",message:"Success message..."}:void 0,loading:e.loading})})},s={...L,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPassword:{name:"Glömt mitt lösenord?",href:"#"},primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLink:{name:"Ny på Spendrups & vill veta mer om vårat erbjudande?",href:"#"},onSubmit:()=>{},onPasswordChange:()=>{},onUsernameChange:()=>{},errorMessage:`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,logo:r.jsx("span",{children:"Logo goes here"}),success:!1,loading:!1}},t={...L,args:{title:"Logga in",description:"Fyll i dina uppgifter här nedanför",usernameLabel:"Mailadress",username:"John@doe.se",passwordLabel:"Lösenord",password:"lösenord123",forgotPasswordLabel:"Glömt mitt lösenord?",primarySubmitLabel:"Logga in",secondarySubmitLabel:"Bli e-handelskund",offerLinkLabel:"Ny på Spendrups & vill veta mer om vårat erbjudande?",onSubmit:e=>{},onPasswordChange:e=>{},onUsernameChange:e=>{},loading:!0}};var u,g,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...LoginFormStoryTemplate,
  args: {
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    forgotPassword: {
      name: 'Glömt mitt lösenord?',
      href: '#'
    },
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Bli e-handelskund',
    offerLink: {
      name: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
      href: '#'
    },
    onSubmit: () => {},
    onPasswordChange: () => {},
    onUsernameChange: () => {},
    errorMessage: \`Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.\`,
    logo: <span>Logo goes here</span>,
    success: false,
    loading: false
  }
}`,...(c=(g=s.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var y,f,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...LoginFormStoryTemplate,
  args: {
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    forgotPasswordLabel: 'Glömt mitt lösenord?',
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: e => {},
    onPasswordChange: e => {},
    onUsernameChange: e => {},
    loading: true
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const K=["LoginFormStory","LoginFormStory_Loading"],ee=Object.freeze(Object.defineProperty({__proto__:null,LoginFormStory:s,LoginFormStory_Loading:t,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{s as L,t as a,d as b,ee as l};
