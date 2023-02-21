import{r as i}from"./index-6f814c40.js";import{F as E}from"./form-group-3d2833e4.js";import{C as L,a as M}from"./checkbox-group.stories-094059c2.js";import{a as s,F as W}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./checkbox-e3dc60f0.js";import"./form-helper-ce65ae5e.js";import"./checkbox.stories-37aef0ae.js";const P={title:"Design System/Molecules/FormGroup/CheckboxGroup",component:E},a=(p,S)=>{const[b,h]=i.useState(L.args.inputs.map(e=>({...e,onChange:A})));function A(e){const t=e.currentTarget.value,D=e.currentTarget.checked;h(R=>R.map(x=>({...x,checked:x.value===t?D:x.checked})))}const k=S.story.includes("Disabled");return i.useEffect(()=>{k&&h(e=>e.map(t=>({...t,disabled:!0}))),p.errorText&&h(e=>e.map(t=>({...t,isErroneous:!0})))},[k,p.errorText]),s(W,{children:s("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:s(E,{...p,formElementId:b[0].id,children:s(M,{inputs:b})})})})},u={label:"Välj storlek på popkorn",helperText:"Välj en storlek som passar dig eller ditt sällskap",requiredText:"(Obligatorisk)"},r=a.bind({});r.storyName="Form Group with Checkbox Group";r.args={...u};const n=a.bind({});n.storyName="Form Group with Checkbox Group Error";n.args={...u,errorText:"Du behöver välja en storlek"};const o=a.bind({});o.storyName="Form Group with Checkbox Group Disabled";o.args={...u};const c=a.bind({});c.storyName="Form Group with Checkbox Group Label Right Text";c.args={...u,requiredText:"",labelRightText:s("a",{href:"/",children:"Se fler menyer"})};var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args, context) => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(CheckboxGroupStory.args.inputs.map((checkbox: any) => {
    return {
      ...checkbox,
      onChange: onChangeCheckbox
    };
  }));
  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            isErroneous: true
          };
        });
      });
    }
  }, [disabled, args.errorText]);
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={checkboxes[0].id}>
          {<CheckboxGroup inputs={checkboxes} />}
        </FormGroup>
      </div>
    </>;
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var C,y,g;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`(args, context) => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(CheckboxGroupStory.args.inputs.map((checkbox: any) => {
    return {
      ...checkbox,
      onChange: onChangeCheckbox
    };
  }));
  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            isErroneous: true
          };
        });
      });
    }
  }, [disabled, args.errorText]);
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={checkboxes[0].id}>
          {<CheckboxGroup inputs={checkboxes} />}
        </FormGroup>
      </div>
    </>;
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,v,G;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`(args, context) => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(CheckboxGroupStory.args.inputs.map((checkbox: any) => {
    return {
      ...checkbox,
      onChange: onChangeCheckbox
    };
  }));
  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            isErroneous: true
          };
        });
      });
    }
  }, [disabled, args.errorText]);
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={checkboxes[0].id}>
          {<CheckboxGroup inputs={checkboxes} />}
        </FormGroup>
      </div>
    </>;
}`,...(G=(v=o.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var f,I,F;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`(args, context) => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(CheckboxGroupStory.args.inputs.map((checkbox: any) => {
    return {
      ...checkbox,
      onChange: onChangeCheckbox
    };
  }));
  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            isErroneous: true
          };
        });
      });
    }
  }, [disabled, args.errorText]);
  return <>
      <div style={{
      margin: '0 0 2rem 0',
      maxWidth: '616px'
    }}>
        <FormGroup {...args} formElementId={checkboxes[0].id}>
          {<CheckboxGroup inputs={checkboxes} />}
        </FormGroup>
      </div>
    </>;
}`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const Q=["FormGroupCheckboxGroupStory","FormGroupCheckboxGroupStoryError","FormGroupCheckboxGroupStoryDisabled","FormGroupCheckboxGroupStoryRightLabelText"];export{r as FormGroupCheckboxGroupStory,o as FormGroupCheckboxGroupStoryDisabled,n as FormGroupCheckboxGroupStoryError,c as FormGroupCheckboxGroupStoryRightLabelText,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=form-group-checkbox-group.stories-e12e4f8a.js.map
