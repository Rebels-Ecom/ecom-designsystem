import{a as r,j as e}from"./jsx-runtime-a3a6c0b8.js";import{B as N}from"./button-93555bd8.js";import{Button_Large_Icon_Right as m}from"./button.stories-61dbc126.js";import{a as p}from"./chunk-WFFRPTHA-a68c42c5.js";const b="_accountBox_1qpbv_1",C={accountBox:b};function t({companyName:c,accountNumber:g,contactPerson:B,address:_,zipcode:A,city:f,chooseAccountBtn:h,onClickChooseAccount:x}){return r("div",{className:C.accountBox,children:[r("div",{children:[e("p",{children:e("b",{children:c})}),e("p",{children:B}),r("p",{children:[_,", ",A,", ",f]})]}),e(N,{...h,type:"button",surface:"primary",onClick:()=>x(g)})]})}try{t.displayName="AccountBox",t.__docgenInfo={description:"",displayName:"AccountBox",props:{companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"string"}},accountNumber:{defaultValue:null,description:"",name:"accountNumber",required:!0,type:{name:"string"}},contactPerson:{defaultValue:null,description:"",name:"contactPerson",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},zipcode:{defaultValue:null,description:"",name:"zipcode",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!1,type:{name:"string"}},chooseAccountBtn:{defaultValue:null,description:"",name:"chooseAccountBtn",required:!0,type:{name:"IButton"}},onClickChooseAccount:{defaultValue:null,description:"",name:"onClickChooseAccount",required:!0,type:{name:"CallableFunction"}}}}}catch{}const S={title:"Design System/Molecules/AccountBox",component:t},y={render:({...c})=>e(t,{...c})},n={...y,args:{companyName:"Beer Fest",accountNumber:"186922",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:m.args,onClickChooseAccount:p("clicked")}},o={...y,args:{companyName:"Beer Fest",accountNumber:"186922",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:m.args,onClickChooseAccount:p("clicked")}};var a,s,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: '186922',
    contactPerson: 'Jon Jonsson',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var i,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: '186922',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["AccountBoxStory","AccountBoxStory_2"],j=Object.freeze(Object.defineProperty({__proto__:null,AccountBoxStory:n,AccountBoxStory_2:o,__namedExportsOrder:k,default:S},Symbol.toStringTag,{value:"Module"}));export{t as A,n as a,o as b,j as c};
