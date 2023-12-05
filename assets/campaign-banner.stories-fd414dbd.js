import{c as g}from"./index-a587463d.js";import{j as e,F as f}from"./jsx-runtime-a3a6c0b8.js";import{m as l}from"./motion-54668070.js";import"./_commonjsHelpers-de833af9.js";const _="_campaignsWrapper_k2fye_1",y="_absolute_k2fye_4",B="_fixed_k2fye_11",b="_campaignBanner_k2fye_19",C="_title_k2fye_38",n={campaignsWrapper:_,absolute:y,fixed:B,campaignBanner:b,title:C},r=({campaigns:t,position:c="absolute",animate:d=!1})=>e("div",{className:g(n.campaignsWrapper,n[c]),children:t.map((a,s)=>{const u={"--campaign-banner-color":a.color};return e(l.div,{className:n.campaignBanner,style:u,initial:d?{opacity:0,translateY:"-50px"}:void 0,animate:{opacity:1,translateY:0},transition:{delay:(s+1)*.3,type:"spring",duration:.3},children:e(l.button,{whileTap:a.disabled?void 0:{scale:.95},className:n.button,onClick:a.onClick,disabled:a.disabled,children:e("span",{className:n.title,children:a.title})},a.title)},`${a.title}-${s}`)})});try{r.displayName="CampaignBanner",r.__docgenInfo={description:"",displayName:"CampaignBanner",props:{campaigns:{defaultValue:null,description:"",name:"campaigns",required:!0,type:{name:"TCampaign[]"}},position:{defaultValue:{value:"absolute"},description:"sets positioning of the wrapper",name:"position",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'},{value:'"relative"'}]}},animate:{defaultValue:{value:"false"},description:"If true, each campaign will have an enter animation",name:"animate",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Design System/Atoms/CampaignBanner",component:r},v={render:t=>e(f,{children:e(r,{...t})})},i={...v,args:{animate:!1,campaigns:[{title:"Campaign Banner",color:"#9A576F",disabled:!1},{title:"Campaign Banner 2",color:"#3D5B49",disabled:!1},{title:"Campaign Banner 3",color:"#1D1D1D",disabled:!1}]}};var o,p,m;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...CampaignBannerStoryTemplate,
  args: {
    animate: false,
    campaigns: [{
      title: 'Campaign Banner',
      color: '#9A576F',
      disabled: false
    }, {
      title: 'Campaign Banner 2',
      color: '#3D5B49',
      disabled: false
    }, {
      title: 'Campaign Banner 3',
      color: '#1D1D1D',
      disabled: false
    }]
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const S=["CampaignBannerStory"];export{i as CampaignBannerStory,S as __namedExportsOrder,N as default};
