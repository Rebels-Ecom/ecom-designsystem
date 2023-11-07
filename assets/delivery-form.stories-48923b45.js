import{c as v}from"./index-74f03c09.js";import{r as g}from"./index-6f814c40.js";import{a as n,j as o}from"./jsx-runtime-76c5c2e2.js";import{F as _}from"./form-group-8c47bb72.js";import{I as F}from"./input-text-6ee421c5.js";const T="_deliveryFormWrapper_jzjaf_1",h="_deliveryForm_jzjaf_1",j="_contentWrapper_jzjaf_16",B="_expandButton_jzjaf_21",f="_summaryLabel_jzjaf_33",D="_customerSummaryBox_jzjaf_39",z="_closeButton_jzjaf_50",a={deliveryFormWrapper:T,deliveryForm:h,contentWrapper:j,expandButton:B,summaryLabel:f,customerSummaryBox:D,closeButton:z},s=({expandButtonText:l,collapseButtonText:u,customerInfo:i=[],customerInfoSummaryLabel:b,customerInfoSummary:e})=>{const[d,x]=g.useState(!1);function y(){x(!d)}return n("div",{className:a.deliveryFormWrapper,children:o("div",{className:a.contentWrapper,children:[n("button",{id:"expand-form-btn",type:"button","aria-label":"expand-form-button",onClick:y,className:v(a.expandButton,"body"),children:d?u:l}),d?n("form",{className:a.deliveryForm,children:i==null?void 0:i.map(r=>n(_,{label:r.label,helperText:r.labelHelperText?r.labelHelperText:"",formElementId:r.id,children:n(F,{id:r.id,value:r.value,readonly:!0,iconRight:{icon:"icon-check"}})},r.id))}):o("div",{children:[n("label",{className:a.summaryLabel,htmlFor:"customerInfoSummary",children:b}),o("div",{id:"customerInfoSummary",className:a.customerSummaryBox,children:[n("p",{children:n("b",{children:e==null?void 0:e.companyName})}),n("p",{children:e==null?void 0:e.contactPerson}),o("p",{children:[e==null?void 0:e.address,", ",e==null?void 0:e.zipcode,", ",e==null?void 0:e.city]})]})]})]})})};try{s.displayName="DeliveryForm",s.__docgenInfo={description:"",displayName:"DeliveryForm",props:{expandButtonText:{defaultValue:null,description:"",name:"expandButtonText",required:!0,type:{name:"string"}},collapseButtonText:{defaultValue:null,description:"",name:"collapseButtonText",required:!0,type:{name:"string"}},customerInfo:{defaultValue:{value:"[]"},description:"",name:"customerInfo",required:!1,type:{name:"ICustomerInfoItem[]"}},customerInfoSummaryLabel:{defaultValue:null,description:"",name:"customerInfoSummaryLabel",required:!0,type:{name:"string"}},customerInfoSummary:{defaultValue:null,description:"",name:"customerInfoSummary",required:!0,type:{name:"ICustomerInfoSummary"}}}}}catch{}const N={title:"Design System/Organisms/DeliveryForm",component:s},W={render:({...l})=>n("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:n(s,{...l})})},t={...W,args:{expandButtonText:"Expandera",collapseButtonText:"Stäng",customerInfo:[{id:"restaurantName",value:"Beer Fest",label:"Restaurangnamn",labelHelperText:""},{id:"city",value:"Tyresö",label:"Ort"},{id:"address",value:"Granängsringen 3",label:"Adress"},{id:"zipcode",value:"135 44",label:"Postnummer"},{id:"customerId",value:"1234-567890",label:"Kundnummer"},{id:"contactPerson",value:"135 44",label:"Kontaktperson",labelHelperText:"(firmatecknaren)"},{id:"email",value:"jon.jonsson@beerfest.com",label:"Din e-post",labelHelperText:"(firmatecknare, för inloggning med administratörsbehörighet)"},{id:"phone",value:"070 - 133 7700",label:"Telefonummer"}],customerInfoSummaryLabel:"Dina uppgifter",customerInfoSummary:{companyName:"Beer Fest",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö"}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const k=["DeliveryFormStory"],q=Object.freeze(Object.defineProperty({__proto__:null,DeliveryFormStory:t,__namedExportsOrder:k,default:N},Symbol.toStringTag,{value:"Module"}));export{t as D,s as a,q as d};
//# sourceMappingURL=delivery-form.stories-48923b45.js.map
