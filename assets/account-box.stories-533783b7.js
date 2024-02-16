import{c as S}from"./index-a587463d.js";import{a as d,j as e}from"./jsx-runtime-a3a6c0b8.js";import{B as T}from"./button-97f3af74.js";import{Button_Large_Icon_Right as f}from"./button.stories-0546ecb1.js";import{a as h}from"./chunk-WFFRPTHA-a68c42c5.js";const q="_accountBox_11l7a_1",V="_companyName_11l7a_17",L="_accountNumber_11l7a_18",j="_addressLabel_11l7a_22",F="_addressTitle_11l7a_27",I="_address_11l7a_22",n={accountBox:q,companyName:V,accountNumber:L,addressLabel:j,addressTitle:F,address:I};function s({companyName:a,accountNumber:b,contactPerson:i,addressLabel:m,addressTitle:u,address:l,zipcode:t,city:r,chooseAccountBtn:x,onClickChooseAccount:C}){const k=()=>{C()};return d("div",{className:n.accountBox,children:[d("div",{children:[e("p",{className:n.companyName,children:e("b",{children:a})}),e("p",{className:n.accountNumber,children:b}),i&&e("p",{children:i}),m&&e("p",{className:n.addressLabel,children:e("b",{children:m})}),u&&e("p",{className:n.addressTitle,children:u}),d("p",{className:S({[n.address]:!!u}),children:[l&&(t||r?`${l},`:l)," ",t&&(r?`${t},`:t)," ",r&&r]})]}),e(T,{...x,type:"button",surface:"primary",onClick:k})]})}try{s.displayName="AccountBox",s.__docgenInfo={description:"",displayName:"AccountBox",props:{companyName:{defaultValue:null,description:"",name:"companyName",required:!0,type:{name:"string"}},accountNumber:{defaultValue:null,description:"",name:"accountNumber",required:!0,type:{name:"string"}},contactPerson:{defaultValue:null,description:"",name:"contactPerson",required:!1,type:{name:"string"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!1,type:{name:"string"}},addressTitle:{defaultValue:null,description:"",name:"addressTitle",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},zipcode:{defaultValue:null,description:"",name:"zipcode",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!1,type:{name:"string"}},chooseAccountBtn:{defaultValue:null,description:"",name:"chooseAccountBtn",required:!0,type:{name:"IButton"}},onClickChooseAccount:{defaultValue:null,description:"",name:"onClickChooseAccount",required:!0,type:{name:"CallableFunction"}}}}}catch{}const z={title:"Design System/Molecules/AccountBox",component:s},A={render:({...a})=>e(s,{...a})},o={...A,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:f.args,onClickChooseAccount:h("clicked")}},c={...A,args:{companyName:"Beer Fest",accountNumber:"Kundnr: 186922",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö",chooseAccountBtn:f.args,onClickChooseAccount:h("clicked")}};var p,y,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: 'Kundnr: 186922',
    contactPerson: 'Jon Jonsson',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var g,B,N;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: 'Kundnr: 186922',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked')
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const G=["AccountBoxStory","AccountBoxStory_2"],R=Object.freeze(Object.defineProperty({__proto__:null,AccountBoxStory:o,AccountBoxStory_2:c,__namedExportsOrder:G,default:z},Symbol.toStringTag,{value:"Module"}));export{s as A,o as a,c as b,R as c};
