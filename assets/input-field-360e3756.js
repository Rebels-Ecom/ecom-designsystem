import{r as d,a as f,j as t}from"./jsx-runtime-a3a6c0b8.js";import{U as p}from"./ui-link-a18343fc.js";import{c as m}from"./index-a587463d.js";import{m as s}from"./motion-54668070.js";const v="_inputField_ahmtb_1",b="_label_ahmtb_5",V="_errorWrapper_ahmtb_9",q="_error_ahmtb_9",_="_input_ahmtb_1",E="_sm_ahmtb_98",h="_onAutoFillStart_ahmtb_1",n={inputField:v,label:b,errorWrapper:V,error:q,input:_,sm:E,onAutoFillStart:h},c=({onChange:l,onBlur:r,onControlledChange:i,height:u,...e})=>{const o=d.useCallback(a=>{a.persist(),e.type==="number"&&(e.min||e.max)?Number(a.target.value)>=(e.min??0)&&Number(a.target.value)<=(e.max??1e4)&&(l==null||l(a.target.value,e.name)):l==null||l(a.target.value,e.name),i==null||i(a)},[e.name,l]),y=d.useCallback(a=>{a.persist(),r==null||r(a),i==null||i(a)},[r]);return f("div",{className:m(n.inputField,e.className),children:[e.label&&t("label",{className:n.label,children:e.label}),t("input",{"data-isinvalid":e.dirty&&!e.valid,type:e.type,name:e.name,inputMode:e.type==="number"?"decimal":void 0,placeholder:e.placeholder,className:m(n.input,{[n[u??""]]:u}),step:"any",onChange:o,value:e.value??e.originalValue,min:e.min,max:e.max,disabled:e.disabled,readOnly:e.readonly,autoFocus:e.focusOnRender,onBlur:y}),t("div",{className:n.errorWrapper,children:t(s.label,{className:n.error,initial:{y:"-100%",opacity:0},animate:e.error&&!e.valid&&e.dirty?{y:0,opacity:1}:{y:"-100%",opacity:0},children:e.error})}),t("div",{className:n.linkWrapper,children:t(s.div,{className:n.error,initial:{y:"-100%",opacity:0},animate:e.action?{y:0,opacity:1}:{y:"-100%",opacity:0},children:e.action&&t(p,{...e.action})})})]})};try{c.displayName="InputField",c.__docgenInfo={description:"",displayName:"InputField",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"HTMLInputTypeAttribute"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},originalValue:{defaultValue:null,description:"",name:"originalValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},focusOnRender:{defaultValue:null,description:"",name:"focusOnRender",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:'"md" for mobile'},description:"height of the input. sm = height 2.5rem, md = 3rem",name:"height",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newVal: string, name: string) => void)"}},onControlledChange:{defaultValue:null,description:"",name:"onControlledChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},dirty:{defaultValue:null,description:"",name:"dirty",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"IUILink"}}}}}catch{}export{c as I};