import{c as v}from"./index-09749a66.js";import{r as y,j as n}from"./jsx-runtime-03333307.js";import{F as g}from"./form-group-eb0886e6.js";import{I as j}from"./input-text-6778a0ec.js";const T="_deliveryFormWrapper_jzjaf_1",_="_deliveryForm_jzjaf_1",F="_contentWrapper_jzjaf_16",h="_expandButton_jzjaf_21",B="_summaryLabel_jzjaf_33",f="_customerSummaryBox_jzjaf_39",z="_closeButton_jzjaf_50",a={deliveryFormWrapper:T,deliveryForm:_,contentWrapper:F,expandButton:h,summaryLabel:B,customerSummaryBox:f,closeButton:z},i=({expandButtonText:l,collapseButtonText:m,customerInfo:s=[],customerInfoSummaryLabel:u,customerInfoSummary:e})=>{const[o,x]=y.useState(!1);function b(){x(!o)}return n.jsx("div",{className:a.deliveryFormWrapper,children:n.jsxs("div",{className:a.contentWrapper,children:[n.jsx("button",{id:"expand-form-btn",type:"button","aria-label":"expand-form-button",onClick:b,className:v(a.expandButton,"body"),children:o?m:l}),o?n.jsx("form",{className:a.deliveryForm,children:s==null?void 0:s.map(r=>n.jsx(g,{label:r.label,helperText:r.labelHelperText?r.labelHelperText:"",formElementId:r.id,children:n.jsx(j,{id:r.id,value:r.value,readonly:!0,iconRight:{icon:"icon-check"}})},r.id))}):n.jsxs("div",{children:[n.jsx("label",{className:a.summaryLabel,htmlFor:"customerInfoSummary",children:u}),n.jsxs("div",{id:"customerInfoSummary",className:a.customerSummaryBox,children:[n.jsx("p",{children:n.jsx("b",{children:e==null?void 0:e.companyName})}),n.jsx("p",{children:e==null?void 0:e.contactPerson}),n.jsxs("p",{children:[e==null?void 0:e.address,", ",e==null?void 0:e.zipcode,", ",e==null?void 0:e.city]})]})]})]})})};i.__docgenInfo={description:"",methods:[],displayName:"DeliveryForm",props:{expandButtonText:{required:!0,tsType:{name:"string"},description:""},collapseButtonText:{required:!0,tsType:{name:"string"},description:""},customerInfo:{required:!1,tsType:{name:"Array",elements:[{name:"ICustomerInfoItem"}],raw:"Array<ICustomerInfoItem>"},description:"",defaultValue:{value:"[]",computed:!1}},customerInfoSummaryLabel:{required:!0,tsType:{name:"string"},description:""},customerInfoSummary:{required:!0,tsType:{name:"ICustomerInfoSummary"},description:""}}};const D={title:"Design System/Organisms/DeliveryForm",component:i},N={render:({...l})=>n.jsx("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:n.jsx(i,{...l})})},t={...N,args:{expandButtonText:"Expandera",collapseButtonText:"Stäng",customerInfo:[{id:"restaurantName",value:"Beer Fest",label:"Restaurangnamn",labelHelperText:""},{id:"city",value:"Tyresö",label:"Ort"},{id:"address",value:"Granängsringen 3",label:"Adress"},{id:"zipcode",value:"135 44",label:"Postnummer"},{id:"customerId",value:"1234-567890",label:"Kundnummer"},{id:"contactPerson",value:"135 44",label:"Kontaktperson",labelHelperText:"(firmatecknaren)"},{id:"email",value:"jon.jonsson@beerfest.com",label:"Din e-post",labelHelperText:"(firmatecknare, för inloggning med administratörsbehörighet)"},{id:"phone",value:"070 - 133 7700",label:"Telefonummer"}],customerInfoSummaryLabel:"Dina uppgifter",customerInfoSummary:{companyName:"Beer Fest",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö"}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DeliveryFormStoryTemplate,
  args: {
    expandButtonText: 'Expandera',
    collapseButtonText: 'Stäng',
    customerInfo: [{
      id: 'restaurantName',
      value: 'Beer Fest',
      label: 'Restaurangnamn',
      labelHelperText: ''
    }, {
      id: 'city',
      value: 'Tyresö',
      label: 'Ort'
    }, {
      id: 'address',
      value: 'Granängsringen 3',
      label: 'Adress'
    }, {
      id: 'zipcode',
      value: '135 44',
      label: 'Postnummer'
    }, {
      id: 'customerId',
      value: '1234-567890',
      label: 'Kundnummer'
    }, {
      id: 'contactPerson',
      value: '135 44',
      label: 'Kontaktperson',
      labelHelperText: '(firmatecknaren)'
    }, {
      id: 'email',
      value: 'jon.jonsson@beerfest.com',
      label: 'Din e-post',
      labelHelperText: '(firmatecknare, för inloggning med administratörsbehörighet)'
    }, {
      id: 'phone',
      value: '070 - 133 7700',
      label: 'Telefonummer'
    }],
    customerInfoSummaryLabel: 'Dina uppgifter',
    customerInfoSummary: {
      companyName: 'Beer Fest',
      contactPerson: 'Jon Jonsson',
      address: 'Granängsringen 3',
      zipcode: '135 44',
      city: 'Tyresö'
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["DeliveryFormStory"],L=Object.freeze(Object.defineProperty({__proto__:null,DeliveryFormStory:t,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{t as D,i as a,L as d};
