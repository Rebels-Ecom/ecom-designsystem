import{c as v}from"./index-74f03c09.js";import{r as h}from"./index-6f814c40.js";import{a as n,j as o}from"./jsx-runtime-76c5c2e2.js";import{F as g}from"./form-group-2e5fc1d5.js";import{I as _}from"./input-text-c991f326.js";const F="_deliveryFormWrapper_1fnhh_1",T="_deliveryForm_1fnhh_1",B="_contentWrapper_1fnhh_16",f="_expandButton_1fnhh_21",D="_summaryLabel_1fnhh_33",N="_customerSummaryBox_1fnhh_39",j="_closeButton_1fnhh_67",a={deliveryFormWrapper:F,deliveryForm:T,contentWrapper:B,expandButton:f,summaryLabel:D,customerSummaryBox:N,closeButton:j},s=({expandButtonText:l,collapseButtonText:u,customerInfo:i=[],customerInfoSummaryLabel:b,customerInfoSummary:e})=>{const[d,x]=h.useState(!1);function y(){x(!d)}return n("div",{className:a.deliveryFormWrapper,children:o("div",{className:a.contentWrapper,children:[n("button",{id:"expand-form-btn",type:"button","aria-label":"expand-form-button",onClick:y,className:v(a.expandButton,"body"),children:d?u:l}),d?n("form",{className:a.deliveryForm,children:i==null?void 0:i.map(r=>n(g,{label:r.label,helperText:r.labelHelperText?r.labelHelperText:"",formElementId:r.id,children:n(_,{id:r.id,value:r.value,readonly:!0,iconRight:{icon:"icon-check"}})},r.id))}):o("div",{children:[n("label",{className:a.summaryLabel,htmlFor:"customerInfoSummary",children:b}),o("div",{id:"customerInfoSummary",className:a.customerSummaryBox,children:[n("p",{children:n("b",{children:e==null?void 0:e.companyName})}),n("p",{children:e==null?void 0:e.contactPerson}),o("p",{children:[e==null?void 0:e.address,", ",e==null?void 0:e.zipcode,", ",e==null?void 0:e.city]})]})]})]})})};try{s.displayName="DeliveryForm",s.__docgenInfo={description:"",displayName:"DeliveryForm",props:{expandButtonText:{defaultValue:null,description:"",name:"expandButtonText",required:!0,type:{name:"string"}},collapseButtonText:{defaultValue:null,description:"",name:"collapseButtonText",required:!0,type:{name:"string"}},customerInfo:{defaultValue:{value:"[]"},description:"",name:"customerInfo",required:!1,type:{name:"ICustomerInfoItem[]"}},customerInfoSummaryLabel:{defaultValue:null,description:"",name:"customerInfoSummaryLabel",required:!0,type:{name:"string"}},customerInfoSummary:{defaultValue:null,description:"",name:"customerInfoSummary",required:!0,type:{name:"ICustomerInfoSummary"}}}}}catch{}const W={title:"Design System/Organisms/DeliveryForm",component:s},k={render:({...l})=>n("div",{style:{margin:"0 auto",maxWidth:"1254px"},children:n(s,{...l})})},t={...k,args:{expandButtonText:"Expandera",collapseButtonText:"Stäng",customerInfo:[{id:"restaurantName",value:"Beer Fest",label:"Restaurangnamn",labelHelperText:""},{id:"city",value:"Tyresö",label:"Ort"},{id:"address",value:"Granängsringen 3",label:"Adress"},{id:"zipcode",value:"135 44",label:"Postnummer"},{id:"customerId",value:"1234-567890",label:"Kundnummer"},{id:"contactPerson",value:"135 44",label:"Kontaktperson",labelHelperText:"(firmatecknaren)"},{id:"email",value:"jon.jonsson@beerfest.com",label:"Din e-post",labelHelperText:"(firmatecknare, för inloggning med administratörsbehörighet)"},{id:"phone",value:"070 - 133 7700",label:"Telefonummer"}],customerInfoSummaryLabel:"Dina uppgifter",customerInfoSummary:{companyName:"Beer Fest",contactPerson:"Jon Jonsson",address:"Granängsringen 3",zipcode:"135 44",city:"Tyresö"}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const E=["DeliveryFormStory"],q=Object.freeze(Object.defineProperty({__proto__:null,DeliveryFormStory:t,__namedExportsOrder:E,default:W},Symbol.toStringTag,{value:"Module"}));export{t as D,s as a,q as d};
//# sourceMappingURL=delivery-form.stories-045a32e7.js.map
