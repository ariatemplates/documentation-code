{Template {
  $classpath : 'samples.widgets.radiobutton.SimpleRadioButton'} }

  {macro main ( )}
    <h2> Simple RadioButton widget by default belongs to seperate group</h2>
        {@aria:Fieldset {
          label: "Group A",
          width: 300
        } }
            {@aria:RadioButton {
                label: "Option A",
                keyValue: "a",
                block: true,
                bind:{
                    "value": {inside: data, to: 'group0'}
                }
            }/}
            {@aria:RadioButton {
                label: "Option B",
                keyValue: "b",
                block: true,
                bind:{
                    "value": {inside: data, to: 'group0'}
                }

            }/}
            {@aria:RadioButton {
                label: "Option c",
                keyValue: "c",
                block: true,
                bind:{
                    "value": {inside: data, to: 'group0'}
                }
            }/}
         {/@aria:Fieldset}
    {/macro}

{/Template}
