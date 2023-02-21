import{j as c,a,F as p}from"./jsx-runtime-76c5c2e2.js";import{T}from"./table-bdd6561b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const n=({data:t})=>c(T,{children:[a("thead",{children:a("tr",{children:Object.keys(t[0]).map((r,o)=>a("th",{children:r},`${r}-${o}`))})}),a("tbody",{children:t.map((r,o)=>a("tr",{children:Object.values(r).map((s,m)=>a("td",{children:s},`${s}-${m}`))},`${r}-${o}`))})]});try{n.displayName="DataTable",n.__docgenInfo={description:"",displayName:"DataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TDataRow[]"}}}}}catch{}const D={title:"Design System/Molecules/DataTable",component:n},b=t=>a(p,{children:a("div",{style:{width:"100%",marginTop:"2rem",maxWidth:768},children:a(n,{...t})})}),e=b.bind({});e.args={data:[{Salong:"Salong 1",Platser:123,Ljud:"Dolby","Ta med mat":"Ja",Internet:"Wi-Fi/Fast"},{Salong:"Salong 2",Platser:75,Ljud:"Dolby","Ta med mat":"Ja",Internet:"Wi-Fi/Fast"},{Salong:"Salong 3",Platser:24,Ljud:"Dolby","Ta med mat":"Ja",Internet:"Wi-Fi/Fast"},{Salong:"Salong 4",Platser:100,Ljud:"Dolby","Ta med mat":"Ja",Internet:"Wi-Fi/Fast"}]};e.storyName="Data Table";var l,d,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '100%',
      marginTop: '2rem',
      maxWidth: 768
    }}>
        <DataTable {...args} />
      </div>
    </>;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const S=["DataTableStory"];export{e as DataTableStory,S as __namedExportsOrder,D as default};
//# sourceMappingURL=data-table.stories-2871fcd2.js.map
