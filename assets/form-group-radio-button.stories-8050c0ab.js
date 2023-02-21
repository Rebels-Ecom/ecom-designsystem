import{r as R}from"./index-6f814c40.js";import{F as E}from"./form-group-3d2833e4.js";import{R as k,a as O}from"./radio-button-group.stories-2e0bbe66.js";import{a as s,F as D}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./icon-eb31426b.js";import"./radio-button-321ff782.js";import"./form-helper-ce65ae5e.js";import"./radio-button.stories-7ad91e18.js";const K={title:"Design System/Molecules/FormGroup/RadioButtonGroup",component:E},u=(d,S)=>{const[m,p]=R.useState(k.args.inputs.map(r=>({...r,onChange:A})));function A(r){const a=r.currentTarget.value;p(C=>C.map(c=>({...c,checked:c.value===a})))}const l=S.story.includes("Disabled");return R.useEffect(()=>{l&&p(r=>r.map(a=>({...a,disabled:!0}))),d.errorText&&p(r=>r.map(a=>({...a,isErroneous:!0})))},[l,d.errorText]),s(D,{children:s("div",{style:{margin:"0 0 2rem 0",maxWidth:"616px"},children:s(E,{...d,formElementId:m[0].id,children:s(O,{inputs:m})})})})},i={label:"Välj storlek på popkorn",helperText:"Välj en storlek som passar dig eller ditt sällskap",requiredText:"(Obligatorisk)"},n=u.bind({});n.storyName="Form Group with Radio Button Group";n.args={...i};const o=u.bind({});o.storyName="Form Group with Radio Button Group Error";o.args={...i,errorText:"Du behöver välja en storlek"};const t=u.bind({});t.storyName="Form Group with Radio Button Group Disabled";t.args={...i};const e=u.bind({});e.storyName="Form Group with Radio Button Group Label Right Text";e.args={...i,requiredText:"",labelRightText:s("a",{href:"/",children:"Se fler menyer"})};var y,B,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(args, context) => {
  const [radioButtons, setRadioButtons] = useState<Array<TypeInputs>>(RadioButtonGroupStory.args.inputs.map((radioBtn: any) => {
    return {
      ...radioBtn,
      onChange: onChangeRadioGroupOne
    };
  }));
  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setRadioButtons((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
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
        <FormGroup {...args} formElementId={radioButtons[0].id}>
          {<RadioButtonGroup inputs={radioButtons} />}
        </FormGroup>
      </div>
    </>;
}`,...(g=(B=n.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var v,G,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`(args, context) => {
  const [radioButtons, setRadioButtons] = useState<Array<TypeInputs>>(RadioButtonGroupStory.args.inputs.map((radioBtn: any) => {
    return {
      ...radioBtn,
      onChange: onChangeRadioGroupOne
    };
  }));
  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setRadioButtons((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
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
        <FormGroup {...args} formElementId={radioButtons[0].id}>
          {<RadioButtonGroup inputs={radioButtons} />}
        </FormGroup>
      </div>
    </>;
}`,...(T=(G=o.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var f,x,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`(args, context) => {
  const [radioButtons, setRadioButtons] = useState<Array<TypeInputs>>(RadioButtonGroupStory.args.inputs.map((radioBtn: any) => {
    return {
      ...radioBtn,
      onChange: onChangeRadioGroupOne
    };
  }));
  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setRadioButtons((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
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
        <FormGroup {...args} formElementId={radioButtons[0].id}>
          {<RadioButtonGroup inputs={radioButtons} />}
        </FormGroup>
      </div>
    </>;
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,I,F;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`(args, context) => {
  const [radioButtons, setRadioButtons] = useState<Array<TypeInputs>>(RadioButtonGroupStory.args.inputs.map((radioBtn: any) => {
    return {
      ...radioBtn,
      onChange: onChangeRadioGroupOne
    };
  }));
  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setRadioButtons((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false
        };
      });
    });
  }
  const disabled = context.story.includes('Disabled');
  useEffect(() => {
    if (disabled) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
            disabled: true
          };
        });
      });
    }
    if (args.errorText) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
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
        <FormGroup {...args} formElementId={radioButtons[0].id}>
          {<RadioButtonGroup inputs={radioButtons} />}
        </FormGroup>
      </div>
    </>;
}`,...(F=(I=e.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const P=["FormGroupRadioButtonGroupStory","FormGroupRadioButtonGroupStoryError","FormGroupRadioButtonGroupStoryDisabled","FormGroupRadioButtonGroupStoryRightLabelText"];export{n as FormGroupRadioButtonGroupStory,t as FormGroupRadioButtonGroupStoryDisabled,o as FormGroupRadioButtonGroupStoryError,e as FormGroupRadioButtonGroupStoryRightLabelText,P as __namedExportsOrder,K as default};
//# sourceMappingURL=form-group-radio-button.stories-8050c0ab.js.map
