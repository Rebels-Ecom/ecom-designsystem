import{j as r,a as e}from"./jsx-runtime-76c5c2e2.js";import{B as C}from"./button-e8533fbe.js";import{ButtonChooseAcountStory as m}from"./button.stories-c610a338.js";import{a as p}from"./chunk-OPEUWD42-0dc0813d.js";const N="_accountBox_1qpbv_1",S={accountBox:N};function t({companyName:c,accountNumber:B,contactPerson:g,address:A,zipcode:f,city:h,chooseAccountBtn:x,onClickChooseAccount:_}){return r("div",{className:S.accountBox,children:[r("div",{children:[e("p",{children:e("b",{children:c})}),e("p",{children:g}),r("p",{children:[A,", ",f,", ",h]})]}),e(C,{...x,type:"button",surface:"primary",onClick:()=>_(B)})]})}try{t.displayName="AccountBox",t.__docgenInfo={description:"",displayName:"AccountBox",props:{companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"string"}},accountNumber:{defaultValue:null,description:"",name:"accountNumber",required:!0,type:{name:"string"}},contactPerson:{defaultValue:null,description:"",name:"contactPerson",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},zipcode:{defaultValue:null,description:"",name:"zipcode",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!1,type:{name:"string"}},chooseAccountBtn:{defaultValue:null,description:"",name:"chooseAccountBtn",required:!0,type:{name:"IButton"}},onClickChooseAccount:{defaultValue:null,description:"",name:"onClickChooseAccount",required:!0,type:{name:"CallableFunction"}}}}}catch{}const b={title:"Design System/Molecules/AccountBox",component:t},y={render:({...c})=>e(t,{...c})},o={...y,args:{companyName:"Beer Fest",accountNumber:"186922",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:m.args,onClickChooseAccount:p("clicked")}},n={...y,args:{companyName:"Beer Fest",accountNumber:"186922",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:m.args,onClickChooseAccount:p("clicked")}};var a,s,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: '186922',
    contactPerson: 'Jon Jonsson',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: ButtonChooseAcountStory.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: '186922',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: ButtonChooseAcountStory.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["AccountBoxStory","AccountBoxStory_2"],j=Object.freeze(Object.defineProperty({__proto__:null,AccountBoxStory:o,AccountBoxStory_2:n,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{t as A,o as a,n as b,j as c};
//# sourceMappingURL=account-box.stories-01ac230b.js.map
