{Template {
  $classpath : 'samples.widgets.radiobutton.binding.RadioButtonBinding',
  $hasScript: true
}}

  {macro main()}
    {section {
      bindRefreshTo: [
        { to: "logs", inside: data }
      ],
      macro: "logs"
    }/}

    <h2> RadioButton widget by bound to same group</h2>
    {@aria:Fieldset {
      label: "Group A",
      width: 300
    }}
      {@aria:RadioButton {
        label: "Option A",
        keyValue: "a",
        block: true,
        bind: {
          "value": { inside: data, to: 'group1' }
        },
        onchange: {
          fn: "onRadioChange",
          args: { radioGroup: "1", keyValue: "a" }
        }
      }/}
      {@aria:RadioButton {
        label: "Option B",
        keyValue: "b",
        block: true,
        bind:{
          "value": { inside: data, to: 'group1' }
        },
        onchange: {
          fn: "onRadioChange",
          args: { radioGroup: "1", keyValue: "b" }
        }
      }/}
      {@aria:RadioButton {
        label: "Option c",
        keyValue: "c",
        block: true,
        bind:{
          "value": { inside: data, to: 'group1' }
        },
        onchange: {
          fn: "onRadioChange",
          args: { radioGroup: "1", keyValue: "c" }
        }
      }/}
     {/@aria:Fieldset}
     <p>Data of both groups bound to the same property in the data model </p>
     {@aria:Fieldset {
       label: "Group B",
       width: 300
     }}
      {@aria:CheckBox {
        label: "Enable all",
        labelPos: "right",
        bind: {
          value: { inside: data, to: 'enableAll' }
        }
      }/}
      {@aria:RadioButton {
        label: "Option A",
        keyValue: "a",
        block: true,
        bind: {
          value: { inside: data, to: 'group1' },
          disabled: { inside: data, to: 'enableAll', transform: 'aria.widgets.transform.NotTransform' }
        },
        onchange: {
          fn: "onRadioChange",
          args: { radioGroup: "2", keyValue: "a" }
        }
      }/}
      {@aria:RadioButton {
        label: "Option B",
        keyValue: "b",
        block: true,
        bind: {
          value:{ inside: data, to: 'group1' },
          disabled: { inside: data, to: 'enableAll', transform: 'aria.widgets.transform.NotTransform' }
        },
        onchange: {
          fn: "onRadioChange",
          args: { radioGroup: "2", keyValue: "b" }
        }
      }/}
      {@aria:RadioButton {
        label: "Option c",
        keyValue: "c",
        block: true,
        bind: {
          value: { inside: data, to: 'group1' },
          disabled: { inside: data, to: 'enableAll', transform: 'aria.widgets.transform.NotTransform'}
        },
        onchange: {
          fn: "onRadioChange",
          args: { radioGroup: "2", keyValue: "c" }
        }
      }/}
    {/@aria:Fieldset}
  {/macro}

  {macro logs()}
    <div style="float: right; width: 400px">
      <h2>Logs</h2>
      <div style="border: 1px solid #999; min-height: 250px;">
        {foreach message in data.logs}
          <div>${message}</div>
        {/foreach}
      </div>
    </div>
  {/macro}

{/Template}
