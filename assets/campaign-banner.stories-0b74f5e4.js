import{c as g}from"./index-74f03c09.js";import{a as e,F as f}from"./jsx-runtime-76c5c2e2.js";import{m as s}from"./motion-354a1bac.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const _="_campaignsWrapper_k2fye_1",y="_absolute_k2fye_4",B="_fixed_k2fye_11",b="_campaignBanner_k2fye_19",C="_title_k2fye_38",n={campaignsWrapper:_,absolute:y,fixed:B,campaignBanner:b,title:C},r=({campaigns:t,position:m="absolute",animate:c=!1})=>e("div",{className:g(n.campaignsWrapper,n[m]),children:t.map((a,d)=>{const u={"--campaign-banner-color":a.color};return e(s.div,{className:n.campaignBanner,style:u,initial:c?{opacity:0,translateY:"-50px"}:void 0,animate:{opacity:1,translateY:0},transition:{delay:(d+1)*.3,type:"spring",duration:.3},children:e(s.button,{whileTap:a.disabled?void 0:{scale:.95},className:n.button,onClick:a.onClick,disabled:a.disabled,children:e("span",{className:n.title,children:a.title})},a.title)})})});try{r.displayName="CampaignBanner",r.__docgenInfo={description:"",displayName:"CampaignBanner",props:{campaigns:{defaultValue:null,description:"",name:"campaigns",required:!0,type:{name:"TCampaign[]"}},position:{defaultValue:{value:"absolute"},description:"sets positioning of the wrapper",name:"position",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'},{value:'"relative"'}]}},animate:{defaultValue:{value:"false"},description:"If true, each campaign will have an enter animation",name:"animate",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Design System/Atoms/CampaignBanner",component:r},v={render:t=>e(f,{children:e(r,{...t})})},i={...v,args:{animate:!1,campaigns:[{title:"Campaign Banner",color:"#9A576F",disabled:!1},{title:"Campaign Banner 2",color:"#3D5B49",disabled:!1},{title:"Campaign Banner 3",color:"#1D1D1D",disabled:!1}]}};var l,o,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(o=i.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const F=["CampaignBannerStory"];export{i as CampaignBannerStory,F as __namedExportsOrder,S as default};
//# sourceMappingURL=campaign-banner.stories-0b74f5e4.js.map
