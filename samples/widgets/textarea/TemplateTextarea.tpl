{Template {
  $classpath : 'samples.widgets.textarea.TemplateTextarea'
		} }

  {macro main ( )}
	
	{@aria:Textarea {
      label : "Left Label",
      labelPos : "left",
      helptext : "Enter some data",
      width : 280,
      labelWidth : 100,
      height : 80 
	}/}
  {/macro}

{/Template}
