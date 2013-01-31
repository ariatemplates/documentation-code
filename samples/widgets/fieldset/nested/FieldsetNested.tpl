{Template {
  $classpath: "samples.widgets.fieldset.nested.FieldsetNested"
}}

  {macro main()}
    {@aria:Fieldset {
        label: "Sample fieldset1",
        width: 350
    }}
        {@aria:TextField {
            label: "TextField:",
            labelWidth:100,
            width:200
        }/}
        {@aria:Fieldset {
	        label: "Nested Fieldset",
	        width: 250
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