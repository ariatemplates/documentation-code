{Template {
  $classpath : 'samples.widgets.checkbox.binding.BindableCheckbox',
  $hasScript : true } }

  {macro main ( )}
    {var doInit = initVariables() /}
    <p><strong> Checkbox "value" property bound to the data model </strong></p>
    {@aria:CheckBox {
      label : "Checkbox 1",
      labelPos: "right",
      bind:{
        "value":{inside: data, to: 'isCheckMe'}
    }
    }/}

    <p><strong>Toggles the disabled checkbox 3</strong></p>
    {@aria:CheckBox {
                label: "Checkbox 2",
                labelPos: "top",
                onchange: {
                 fn : "onchange" }
        }/}
       <p><strong>Both the "value" and "disabled" properties bound to the data model</strong></p>
       {@aria:CheckBox {
            label: "Checkbox 3",
            labelPos: "right",
            bind:{
                "value":{inside: data, to: 'isCheckMe'},
                "disabled":{inside: data, to: 'enableAll',transform: 'aria.widgets.transform.NotTransform'}
            }
        }/}

    {/macro}

{/Template}
