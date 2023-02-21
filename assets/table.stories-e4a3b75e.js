import{T as d}from"./table-bdd6561b.js";import{a as n,F as c,j as g}from"./jsx-runtime-76c5c2e2.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"Design System/Atoms/Table",component:d},p=S=>{const r=[{Salong:"Salong 1",Platser:123,Internet:"Wi-Fi/Fast"},{Salong:"Salong 2",Platser:75,Internet:"Wi-Fi/Fast"},{Salong:"Salong 3",Platser:24,Internet:"Wi-Fi/Fast"},{Salong:"Salong 4",Platser:100,Internet:"Wi-Fi/Fast"}];return n(c,{children:n("div",{style:{width:"100%",marginTop:"2rem",maxWidth:768},children:g(d,{children:[n("thead",{children:n("tr",{children:Object.keys(r[0]).map((t,a)=>n("th",{children:t},`${t}-${a}`))})}),n("tbody",{children:r.map((t,a)=>n("tr",{children:Object.values(t).map((s,m)=>n("td",{children:s},`${s}-${m}`))},`${t}-${a}`))})]})})})},e=p.bind({});e.storyName="Table";var l,i,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const data = [{
    Salong: 'Salong 1',
    Platser: 123,
    Internet: 'Wi-Fi/Fast'
  }, {
    Salong: 'Salong 2',
    Platser: 75,
    Internet: 'Wi-Fi/Fast'
  }, {
    Salong: 'Salong 3',
    Platser: 24,
    Internet: 'Wi-Fi/Fast'
  }, {
    Salong: 'Salong 4',
    Platser: 100,
    Internet: 'Wi-Fi/Fast'
  }];
  return <>
      <div style={{
      width: '100%',
      marginTop: '2rem',
      maxWidth: 768
    }}>
        <Table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((cell: string, idx: number) => <th key={\`\${cell}-\${idx}\`}>{cell}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => <tr key={\`\${row}-\${index}\`}>
                {Object.values(row).map((cell: string | number, idx: number) => <td key={\`\${cell}-\${idx}\`}>{cell}</td>)}
              </tr>)}
          </tbody>
        </Table>
      </div>
    </>;
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const $=["TableStories"];export{e as TableStories,$ as __namedExportsOrder,y as default};
//# sourceMappingURL=table.stories-e4a3b75e.js.map
