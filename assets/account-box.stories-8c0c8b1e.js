import{j as c,a as e}from"./jsx-runtime-76c5c2e2.js";import{B}from"./button-c74bbcb5.js";import{ButtonChooseAcountStory as f}from"./button.stories-0e13d9d3.js";import{a as g}from"./chunk-OPEUWD42-0dc0813d.js";const A="_accountBox_8gzmw_1",_={accountBox:A};function t({companyName:n,accountNumber:u,contactPerson:i,address:l,zipcode:d,city:m,chooseAccountBtn:p,onClickChooseAccount:y}){return c("div",{className:_.accountBox,children:[e("p",{children:e("b",{children:n})}),e("p",{children:i}),c("p",{children:[l,", ",d,", ",m]}),e(B,{...p,type:"button",surface:"primary",onClick:()=>y(u)})]})}try{t.displayName="AccountBox",t.__docgenInfo={description:"",displayName:"AccountBox",props:{companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"string"}},accountNumber:{defaultValue:null,description:"",name:"accountNumber",required:!0,type:{name:"string"}},contactPerson:{defaultValue:null,description:"",name:"contactPerson",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},zipcode:{defaultValue:null,description:"",name:"zipcode",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!1,type:{name:"string"}},chooseAccountBtn:{defaultValue:null,description:"",name:"chooseAccountBtn",required:!0,type:{name:"IButton"}},onClickChooseAccount:{defaultValue:null,description:"",name:"onClickChooseAccount",required:!0,type:{name:"CallableFunction"}}}}}catch{}const x={title:"Design System/Molecules/AccountBox",component:t},h={render:({...n})=>e(t,{...n})},o={...h,args:{companyName:"Beer Fest",accountNumber:"186922",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:f.args,onClickChooseAccount:g("clicked")}};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const C=["AccountBoxStory"],V=Object.freeze(Object.defineProperty({__proto__:null,AccountBoxStory:o,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{t as A,o as a,V as b};
//# sourceMappingURL=account-box.stories-8c0c8b1e.js.map
