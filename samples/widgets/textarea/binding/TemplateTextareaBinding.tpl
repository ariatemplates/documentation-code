{Template {
  $classpath : 'samples.widgets.textarea.binding.TemplateTextareaBinding'
	} }
  
  {var test = { value : "text value" }/}
  
  {macro main ( )}
  
	{@aria:Textarea {
			label : "Standard",
			labelPos : "left",
			helptext : "Enter your first name",
			width : 280,
			block : true,
			labelWidth : 100,
			bind : {
			  "value" : {
				inside : test,
				to : 'value' }
				},
			height : 50 
		}/}
		
  {/macro}

{/Template}
