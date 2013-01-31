{Template {
  $classpath: "samples.widgets.fieldset.action.FieldsetAction",
  $hasScript: true
}}

  {macro main()}
    <p>When focusing on the following elements and pressing ENTER, it executes the onSubmit callback:</p>
    {@aria:Fieldset {
        label: "Sample fieldset1",
        width: 600,
        onSubmit: fieldsetSubmit
    }}
        {@aria:TextField {
            label: "TextField:",
            labelWidth:100,
            width:200
        }/}
        {@aria:Fieldset {
            label: "Nested Fieldset with out onSubmit callback",
            width: 450,
            block: true
        }}
            {@aria:TextField {
                label: "TextField:",
                labelWidth:100,
                width:200
            }/}
        {/@aria:Fieldset}
        {@aria:Fieldset {
            label: "Nested Fieldset with onSubmit callback, not returning true",
            onSubmit: nestedFieldsetSubmit,
            width: 450,
            block: true
        }}
            {@aria:TextField {
                label: "TextField:",
                labelWidth:100,
                width:200
            }/}
        {/@aria:Fieldset}
        {@aria:Fieldset {
            label: "Nested Fieldset with onSubmit callback, returning true",
            onSubmit: nestedFieldsetSubmitReturnTrue,
            width: 450,
            block: true
        }}
            {@aria:TextField {
                label: "TextField:",
                labelWidth:100,
                width:200
            }/}
        {/@aria:Fieldset}
     {/@aria:Fieldset}

  {/macro}

{/Template}