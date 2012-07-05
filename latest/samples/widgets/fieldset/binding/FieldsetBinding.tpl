{Template {
  $classpath : 'samples.widgets.fieldset.binding.FieldsetBinding',
  $hasScript : false } }

  {macro main ( )}
  <p style="color:red">Enter the tooltip and click outside, mouseover the div will show the entered tooltip</p>
  {@aria:TextField {
      id : "toFocus",
      label : "Tooltip : ",
      block: true,
      helptext : "Enter the tooltip for the Fieldset",
      bind : {
        value : {
          to : 'view:tooltip',
          inside : data }
      }}/}
      {@aria:Fieldset {
         width : 400,
         bind: {
		    tooltip: {
		      to : "view:tooltip",
		      inside : data
		    }
		 }
	   }}
  <p style="color:green">Focus out of textbox and mouse over the div to view the tooltip.</p>
{/@aria:Fieldset}


  {/macro}

{/Template}
