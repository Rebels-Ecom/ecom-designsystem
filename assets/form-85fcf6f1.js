import{r as m,j as n,a as y}from"./jsx-runtime-a3a6c0b8.js";import{I as H}from"./input-field-b830d891.js";import{c as g}from"./index-a587463d.js";import{m as B}from"./motion-54668070.js";import{I as W}from"./icon-5fefd509.js";import{H as T}from"./heading-47d2ab87.js";import{T as K}from"./text-cdc0625f.js";import{B as k}from"./button-369dade1.js";import{F as f}from"./flex-container-145d4933.js";import{E as S}from"./expandable-wrapper-5e4804ab.js";import{L as z}from"./link-button-8d451f62.js";const C=(a,s)=>{switch(a){case"email":return s&&v(s);case"password":return s&&b(s);case"age-verification":return s&&Number(s)>19;default:return!0}},_=a=>a.required?a.pattern?!!C(a.pattern,a.value??a.originalValue)&&!!(a.value??a.originalValue):!!(a.value??a.originalValue):a.pattern?!!C(a.pattern,a.value??a.originalValue):!0,v=a=>a&&/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(a),b=a=>a&&a!=="";try{_.displayName="validateField",_.__docgenInfo={description:"",displayName:"validateField",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"HTMLInputTypeAttribute"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},height:{defaultValue:{value:'"md" for mobile'},description:"height of the input. sm = height 2.5rem, md = 3rem",name:"height",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"IUILink"}},originalValue:{defaultValue:null,description:"prefilled default value used to compare with the state controlled value in order to detect changes to the form",name:"originalValue",required:!1,type:{name:"string"}},focusOnRender:{defaultValue:null,description:"",name:"focusOnRender",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},onControlledChange:{defaultValue:null,description:"",name:"onControlledChange",required:!1,type:{name:"(((value: string) => void) & ((value: string) => void))"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean"}},dirty:{defaultValue:null,description:"",name:"dirty",required:!1,type:{name:"boolean"}},validateAutofill:{defaultValue:null,description:"",name:"validateAutofill",required:!1,type:{name:"((name: string) => void)"}},fieldType:{defaultValue:null,description:"decides what type of form field to render and what value types to use",name:"fieldType",required:!0,type:{name:'"input"'}},value:{defaultValue:null,description:"value is a form template controlled property updated by internal form template state",name:"value",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:`Subtitle to be displayed in mobile list view
@example A subtitle can be "No phone number added", while a placeholder should be "Add phone number".`,name:"subtitle",required:!1,type:{name:"string"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"password"'},{value:'"phone"'},{value:'"age-verification"'}]}},alphaField:{defaultValue:null,description:"Field name to compare value with, e.g. confirm-password wants to match value with new-password",name:"alphaField",required:!1,type:{name:"string"}},betaField:{defaultValue:null,description:"Field name to re-validate, e.g. trigger confirm-password validation when new-password value updates",name:"betaField",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'half'"},description:"Decides if a field should span 50% or 100% of parent width",name:"size",required:!1,type:{name:"enum",value:[{value:'"half"'},{value:'"full"'}]}}}}}catch{}try{v.displayName="isEmail",v.__docgenInfo={description:"",displayName:"isEmail",props:{}}}catch{}try{b.displayName="isPassword",b.__docgenInfo={description:"",displayName:"isPassword",props:{}}}catch{}const $="_form_1no36_1",j="_formDirectionRow_1no36_6",P="_formTitle_1no36_11",U="_fieldsWrapper_1no36_15",O="_field_1no36_15",G="_half_1no36_25",J="_full_1no36_29",Q="_fieldDirectionRow_1no36_33",X="_actionsWrapper_1no36_39",Y="_link_1no36_48",Z="_linkDisabled_1no36_49",ee="_generalErrorMessage_1no36_60",ae="_generalErrorMessageDisabled_1no36_66",ne="_loaderContainer_1no36_76",te="_successIcon_1no36_87",r={form:$,formDirectionRow:j,formTitle:P,fieldsWrapper:U,field:O,half:G,full:J,fieldDirectionRow:Q,actionsWrapper:X,link:Y,linkDisabled:Z,generalErrorMessage:ee,generalErrorMessageDisabled:ae,loaderContainer:ne,successIcon:te},D=({onSubmit:a,onControlledSubmit:s,formTitle:V,formSubtitle:q,loading:c,responseMessage:u,...t})=>{var F,I;const[d,w]=m.useState(t.fields),[N,x]=m.useState(!1),E=m.useRef(null);m.useEffect(()=>{if(!E.current)return;const e=!d.some(l=>l.required&&!l.valid);x(e)},[d]);const L=m.useCallback(e=>{e.preventDefault(),a==null||a(d),s==null||s(e)},[d,a]),M=m.useCallback((e,l)=>{d.find(i=>i.name===l)&&w(i=>i.map(o=>{if(o.name===l){if(o.alphaField){const h=i.find(A=>A.name===o.alphaField);return{...o,dirty:!0,valid:(h==null?void 0:h.value)===e,value:e}}return{...o,dirty:!0,valid:_({...o,value:e}),value:e}}else return o.alphaField?{...o,dirty:o.dirty,valid:o.value===e,value:o.name===l?e:o.value}:o}))},[]),R=e=>{w(l=>l.map(i=>i.name===e?{...i,valid:!0}:i))};return u?n(B.div,{initial:{opacity:0,scale:.2},animate:{opacity:u?1:0,scale:u?1:.2},children:y("div",{className:r.loaderContainer,children:[u.icon&&n(W,{icon:u.icon,className:r.successIcon}),u.title&&n(T,{order:3,noMargin:!0,children:u.title}),n(K,{align:"center",children:u.message}),u.onClose&&n(k,{type:"button",surface:"primary",onClick:u.onClose,children:u.closeLabel??"Stäng"})]})}):y("form",{ref:E,className:g(r.form,t.alignSubmitButtonHorizontally?r.formDirectionRow:""),onSubmit:L,autoComplete:"on",children:[y("div",{className:r.fieldsWrapper,children:[V&&n(T,{order:3,className:r.formTitle,children:V}),q&&n("p",{className:r.formSubtitle,children:q}),n(f,{wrap:!0,children:d==null?void 0:d.map((e,l)=>n("div",{className:g(r.field,t.alignSubmitButtonHorizontally?r.fieldDirectionRow:"",r[e.size??"half"]),children:e.fieldType==="input"&&n(H,{...e,value:e.value??e.originalValue,onChange:(p,i)=>{M(p,i)},onControlledChange:p=>{var i;(i=e.onControlledChange)==null||i.call(e,p)},focusOnRender:l===0,readonly:e.blocked,disabled:c,validateAutofill:t.isLogin?R:void 0})},e.name))}),n(S,{open:!!t.generalErrorMessage,children:n(f,{alignItems:"center",justifyContent:"center",children:t.generalErrorMessage&&n("p",{className:g(r.generalErrorMessage,{[r.generalErrorMessageDisabled]:c}),dangerouslySetInnerHTML:{__html:t.generalErrorMessage}})})})]}),t.captcha&&n(f,{justifyContent:"center",alignItems:"center",children:t.captcha}),(t.actions||t.linkActions)&&y(f,{justifyContent:t.alignActions??"center",className:r.actionsWrapper,children:[(F=t.actions)==null?void 0:F.map((e,l)=>n(k,{...e,disabled:e.type==="submit"?!N||e.disabled:e.disabled||c,loading:e.type==="submit"&&c},`${e.type}-${l}`)),(I=t.linkActions)==null?void 0:I.map((e,l)=>n(z,{...e},`${e.id??"0"}-${l}`))]}),t.links&&n(f,{alignItems:t.alignActions??"center",flexDirection:"column",children:t.links.map((e,l)=>n("a",{className:g(r.link,{[r.linkDisabled]:c}),href:e.href,target:"_blank",children:e.name},`${e.name}-${l}`))})]})};try{D.displayName="Form",D.__docgenInfo={description:"",displayName:"Form",props:{formTitle:{defaultValue:null,description:"descriptive title to display on top of form",name:"formTitle",required:!0,type:{name:"string"}},formSubtitle:{defaultValue:null,description:"descriptive subtitle to display under formTitle",name:"formSubtitle",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"submit that requires the complete form data",name:"onSubmit",required:!1,type:{name:"((data: TFormFieldType[]) => void)"}},onControlledSubmit:{defaultValue:null,description:"submit that requires only the react form event",name:"onControlledSubmit",required:!1,type:{name:"((event: FormEvent<HTMLFormElement>) => void)"}},loading:{defaultValue:null,description:"loading state which is necessary in order to disable form while loading",name:"loading",required:!0,type:{name:"boolean"}},fields:{defaultValue:null,description:"all fields to be rendered inside the form",name:"fields",required:!0,type:{name:"TFormFieldType[]"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"IButton[]"}},linkActions:{defaultValue:null,description:"Link buttons that will be rendered together with normal buttons/actions",name:"linkActions",required:!1,type:{name:"ILinkButton[]"}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"TFormLink[]"}},alignActions:{defaultValue:null,description:"",name:"alignActions",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},alignSubmitButtonHorizontally:{defaultValue:null,description:"",name:"alignSubmitButtonHorizontally",required:!1,type:{name:"boolean"}},generalErrorMessage:{defaultValue:null,description:"",name:"generalErrorMessage",required:!1,type:{name:"any"}},responseMessage:{defaultValue:null,description:"If true, a message will be displayed after submit response",name:"responseMessage",required:!1,type:{name:"TFormResponseMessage"}},captcha:{defaultValue:null,description:"",name:"captcha",required:!1,type:{name:"Element"}},isLogin:{defaultValue:null,description:"Used for login form only, in order to avoid disabling submit button per default",name:"isLogin",required:!1,type:{name:"boolean"}}}}}catch{}export{D as F,_ as v};