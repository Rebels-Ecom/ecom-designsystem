import{c as i}from"./index-a587463d.js";import{L as s}from"./ui-link-a18343fc.js";import{I as l}from"./icon-5fefd509.js";import{j as a,F as m,a as o}from"./jsx-runtime-a3a6c0b8.js";import{m as t}from"./motion-54668070.js";const v="_iconButton_rvbqw_1",f="_notification_rvbqw_23",b="_small_rvbqw_46",_="_medium_rvbqw_51",h="_large_rvbqw_59",g="_transparent_rvbqw_72",y="_noBorder_rvbqw_75",q="_noPadding_rvbqw_78",w="_round_rvbqw_86",k="_disabled_rvbqw_89",B="_bold_rvbqw_93",N="_iconDisabled_rvbqw_98",n={iconButton:v,notification:f,"x-small":"_x-small_rvbqw_41",small:b,medium:_,large:h,transparent:g,noBorder:y,noPadding:q,round:w,disabled:k,bold:B,iconDisabled:N},c=e=>{if(!e.type)throw new Error("type must be assigned");const u=()=>{if(e.type!=="button"){if(e.isExternal)return o("a",{className:i(n.iconButton,e.className,n[e.size??"small"],{[n.noPadding]:e.noPadding,[n.transparent]:e.isTransparent,[n.noBorder]:e.noBorder,[n.round]:e.round,[n.disabled]:e.disabled}),href:e.linkUrl,target:"_blank",children:[a(l,{icon:e.icon,className:i({[n.iconDisabled]:e.disabled,[n.bold]:e.weight==="bold"})}),e.notification&&e.notification<100&&a(t.span,{initial:{scale:0},animate:{scale:1},className:n.notification,children:e.notification<100?e.notification:"99+"})]});{const d=e.linkComponent??s;return o(d,{to:e.linkUrl,className:i(n.iconButton,e.className,n[e.size??"small"],{[n.noPadding]:e.noPadding,[n.transparent]:e.isTransparent,[n.noBorder]:e.noBorder,[n.round]:e.round,[n.disabled]:e.disabled}),children:[a(l,{icon:e.icon,className:i({[n.iconDisabled]:e.disabled,[n.bold]:e.weight==="bold"})}),e.notification&&a(t.span,{initial:{scale:0},animate:{scale:1},className:n.notification,children:e.notification<100?e.notification:"99+"})]})}}},r=()=>{if(e.type!=="link")return o("button",{className:i(n.iconButton,e.className,n[e.size??"small"],{[n.noPadding]:e.noPadding,[n.transparent]:e.isTransparent,[n.noBorder]:e.noBorder,[n.round]:e.round,[n.disabled]:e.disabled}),onClick:e.onClick,children:[a(l,{icon:e.icon,className:i({[n.iconDisabled]:e.disabled,[n.bold]:e.weight==="bold"})}),!!e.notification&&a(t.span,{initial:{scale:0},animate:{scale:1},className:n.notification,children:e.notification<100?e.notification:"99+"})]})};return a(m,{children:e.type==="link"?u():r()})};try{c.displayName="IconButton",c.__docgenInfo={description:"",displayName:"IconButton",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"icon-alert-circle"'},{value:'"icon-bell"'},{value:'"icon-arrow-right"'},{value:'"icon-mail"'},{value:'"icon-map-pin"'},{value:'"icon-menu"'},{value:'"icon-x"'},{value:'"icon-phone"'},{value:'"icon-refresh-cw"'},{value:'"icon-search"'},{value:'"icon-x-circle"'},{value:'"icon-plus-circle"'},{value:'"icon-plus"'},{value:'"icon-chevron-up"'},{value:'"icon-chevron-down"'},{value:'"icon-chevron-left"'},{value:'"icon-chevron-right"'},{value:'"icon-chevrons-left"'},{value:'"icon-chevrons-right"'},{value:'"icon-layers"'},{value:'"icon-check"'},{value:'"icon-check-circle"'},{value:'"icon-user"'},{value:'"icon-heart"'},{value:'"icon-shopping-cart"'},{value:'"icon-award"'},{value:'"icon-package"'},{value:'"icon-users"'},{value:'"icon-facebook"'},{value:'"icon-instagram"'},{value:'"icon-linkedin"'},{value:'"icon-clipboard"'},{value:'"icon-download"'},{value:'"icon-calendar"'},{value:'"icon-settings"'},{value:'"icon-info"'},{value:'"icon-play"'},{value:'"icon-archive"'},{value:'"icon-file"'},{value:'"icon-file-text"'},{value:'"icon-message-circle"'},{value:'"icon-share"'},{value:'"icon-arrow-down-circle"'},{value:'"icon-trash"'},{value:'"icon-trash-2"'},{value:'"icon-edit"'},{value:'"icon-truck"'},{value:'"icon-share-2"'},{value:'"icon-heart-o"'},{value:'"icon-heart1"'},{value:'"icon-file-plus"'},{value:'"icon-eye"'},{value:'"icon-save"'},{value:'"icon-alert-triangle"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"x-small"'},{value:'"medium"'}]}},isTransparent:{defaultValue:null,description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},noBorder:{defaultValue:null,description:"",name:"noBorder",required:!1,type:{name:"boolean"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},notification:{defaultValue:{value:"undefined"},description:"If a positive number (1-99) has been provided a number  will be displayed in a notification format",name:"notification",required:!1,type:{name:"number"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'}]}},linkUrl:{defaultValue:null,description:"",name:"linkUrl",required:!0,type:{name:"string"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(data?: any) => void"}}}}}catch{}export{c as I};