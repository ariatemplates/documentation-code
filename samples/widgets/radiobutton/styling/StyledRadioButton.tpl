{Template {
  $classpath : 'samples.widgets.radiobutton.styling.StyledRadioButton'} }

  {macro main ( )}
    <p> RadioButton widget labels aligned to "left", "right", "top" and "bottom"</p>
	    {@aria:Fieldset {
	      label: "Group A",
	      width: 300
	    } }
	        <p>Label positioned left</p>
            {@aria:RadioButton {
                label: "Option A",
                keyValue: "a",
                block: true,
                labelPos: "left"
            }/}
            <p>Label positioned right</p>
            {@aria:RadioButton {
                label: "Option B",
                keyValue: "b",
                block: true,
                labelPos: "right"
            }/}
            <p>Label positioned top</p>
            {@aria:RadioButton {
                label: "Option C",
                keyValue: "c",
                block: true,
                labelPos: "top"
            }/}
            <p>Label positioned bottom</p>
            {@aria:RadioButton {
                label: "Option D",
                keyValue: "d",
                block: true,
                labelPos: "bottom"
            }/}{/@aria:Fieldset}
    {/macro}
{/Template}
