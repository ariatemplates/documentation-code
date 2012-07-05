{Template {
  $classpath: "samples.widgets.fieldset.FieldsetSimple"
}}

  {macro main()}
    {@aria:Fieldset {
        label: "Sample fieldset1",
        width: 250,
        block: true
    }}
        {@aria:TextField {
            label: "TextField:",
            labelWidth:100,
            width:200
        }/}
    {/@aria:Fieldset}
    {@aria:Fieldset {
        label: "Sample fieldset2",
        width: 250
    }}
        {@aria:TextField {
            label: "TextField:",
            labelWidth:100,
            width:200
        }/}
    {/@aria:Fieldset}
  {/macro}

{/Template}